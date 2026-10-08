"use strict";
/**
 * High-Speed In-Memory Cache Service
 * Provides sub-millisecond retrieval of frequent queries (cohorts, peers, placements, repos)
 * to avoid repeated remote database round-trips.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheService = void 0;
class CacheService {
    /**
     * Retrieve cached value if present and not expired
     */
    static get(key) {
        const entry = this.store.get(key);
        if (!entry) {
            this.misses++;
            return null;
        }
        if (Date.now() > entry.expiresAt) {
            this.store.delete(key);
            this.misses++;
            return null;
        }
        this.hits++;
        entry.hits++;
        return entry.value;
    }
    /**
     * Set value in cache with TTL in seconds
     */
    static set(key, value, ttlSeconds = 120) {
        const now = Date.now();
        const expiresAt = now + ttlSeconds * 1000;
        let sizeBytes = 0;
        try {
            sizeBytes = Buffer.byteLength(JSON.stringify(value), 'utf8');
        }
        catch {
            sizeBytes = 256;
        }
        this.store.set(key, {
            value,
            expiresAt,
            createdAt: now,
            hits: 0,
            sizeBytes,
        });
        this.sets++;
    }
    /**
     * Check if a valid (non-expired) cache key exists without triggering a hit count
     */
    static has(key) {
        const entry = this.store.get(key);
        if (!entry)
            return false;
        if (Date.now() > entry.expiresAt) {
            this.store.delete(key);
            return false;
        }
        return true;
    }
    /**
     * Return number of currently cached keys
     */
    static size() {
        this.cleanExpired();
        return this.store.size;
    }
    /**
     * Invalidate a specific cache key
     */
    static del(key) {
        const deleted = this.store.delete(key);
        if (deleted)
            this.deletes++;
        return deleted;
    }
    /**
     * Invalidate all keys matching a prefix or pattern
     */
    static invalidatePrefix(prefix) {
        let count = 0;
        for (const key of Array.from(this.store.keys())) {
            if (key.startsWith(prefix)) {
                this.store.delete(key);
                this.deletes++;
                count++;
            }
        }
        return count;
    }
    /**
     * Clear all cached keys
     */
    static clear() {
        const count = this.store.size;
        this.deletes += count;
        this.store.clear();
        return count;
    }
    /**
     * Clean expired keys
     */
    static cleanExpired() {
        const now = Date.now();
        for (const [key, entry] of this.store.entries()) {
            if (now > entry.expiresAt) {
                this.store.delete(key);
            }
        }
    }
    /**
     * Retrieve active cache keys and metadata
     */
    static getKeys() {
        this.cleanExpired();
        const now = Date.now();
        const list = [];
        for (const [key, entry] of this.store.entries()) {
            const ttlRemainingSeconds = Math.max(0, Math.round((entry.expiresAt - now) / 1000));
            list.push({
                key,
                ttlRemainingSeconds,
                expiresAt: new Date(entry.expiresAt).toISOString(),
                createdAt: new Date(entry.createdAt).toISOString(),
                hits: entry.hits,
                sizeBytes: entry.sizeBytes,
            });
        }
        return list;
    }
    /**
     * Get comprehensive telemetry and performance stats
     */
    static getStats() {
        this.cleanExpired();
        const keys = this.getKeys();
        const totalRequests = this.hits + this.misses;
        const hitRatioPercentage = totalRequests > 0 ? (this.hits / totalRequests) * 100 : 0;
        const memoryUsageEstimateBytes = keys.reduce((acc, k) => acc + k.sizeBytes, 0);
        return {
            status: this.store.size > 0 ? 'active' : 'idle',
            totalKeys: this.store.size,
            hits: this.hits,
            misses: this.misses,
            sets: this.sets,
            deletes: this.deletes,
            hitRatio: `${hitRatioPercentage.toFixed(1)}%`,
            hitRatioPercentage: Math.round(hitRatioPercentage * 10) / 10,
            memoryUsageEstimateBytes,
            uptimeSeconds: Math.floor((Date.now() - this.startTime) / 1000),
            defaultTTL: 120,
            keys,
        };
    }
    /**
     * Reset telemetry counters
     */
    static resetMetrics() {
        this.hits = 0;
        this.misses = 0;
        this.sets = 0;
        this.deletes = 0;
        this.startTime = Date.now();
    }
    /**
     * Wrapper function: returns cached value or executes fn, caches result, and returns it.
     */
    static async wrap(key, ttlSeconds, fn) {
        const cached = this.get(key);
        if (cached !== null) {
            return cached;
        }
        const fresh = await fn();
        if (fresh !== null && fresh !== undefined) {
            this.set(key, fresh, ttlSeconds);
        }
        return fresh;
    }
}
exports.CacheService = CacheService;
CacheService.store = new Map();
CacheService.hits = 0;
CacheService.misses = 0;
CacheService.sets = 0;
CacheService.deletes = 0;
CacheService.startTime = Date.now();
