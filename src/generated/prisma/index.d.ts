
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Submit_report
 * 
 */
export type Submit_report = $Result.DefaultSelection<Prisma.$Submit_reportPayload>
/**
 * Model Cohort
 * 
 */
export type Cohort = $Result.DefaultSelection<Prisma.$CohortPayload>
/**
 * Model CohortStudent
 * 
 */
export type CohortStudent = $Result.DefaultSelection<Prisma.$CohortStudentPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model TaskSubmission
 * 
 */
export type TaskSubmission = $Result.DefaultSelection<Prisma.$TaskSubmissionPayload>
/**
 * Model GitHubRepository
 * 
 */
export type GitHubRepository = $Result.DefaultSelection<Prisma.$GitHubRepositoryPayload>
/**
 * Model Document
 * 
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>
/**
 * Model GamificationPoint
 * 
 */
export type GamificationPoint = $Result.DefaultSelection<Prisma.$GamificationPointPayload>
/**
 * Model Achievement
 * 
 */
export type Achievement = $Result.DefaultSelection<Prisma.$AchievementPayload>
/**
 * Model StudentAchievement
 * 
 */
export type StudentAchievement = $Result.DefaultSelection<Prisma.$StudentAchievementPayload>
/**
 * Model WeeklyScore
 * 
 */
export type WeeklyScore = $Result.DefaultSelection<Prisma.$WeeklyScorePayload>
/**
 * Model SupervisorFeedback
 * 
 */
export type SupervisorFeedback = $Result.DefaultSelection<Prisma.$SupervisorFeedbackPayload>
/**
 * Model ChatMessage
 * 
 */
export type ChatMessage = $Result.DefaultSelection<Prisma.$ChatMessagePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Submit_reports
 * const submit_reports = await prisma.submit_report.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Submit_reports
   * const submit_reports = await prisma.submit_report.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.submit_report`: Exposes CRUD operations for the **Submit_report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Submit_reports
    * const submit_reports = await prisma.submit_report.findMany()
    * ```
    */
  get submit_report(): Prisma.Submit_reportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cohort`: Exposes CRUD operations for the **Cohort** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cohorts
    * const cohorts = await prisma.cohort.findMany()
    * ```
    */
  get cohort(): Prisma.CohortDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cohortStudent`: Exposes CRUD operations for the **CohortStudent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CohortStudents
    * const cohortStudents = await prisma.cohortStudent.findMany()
    * ```
    */
  get cohortStudent(): Prisma.CohortStudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taskSubmission`: Exposes CRUD operations for the **TaskSubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskSubmissions
    * const taskSubmissions = await prisma.taskSubmission.findMany()
    * ```
    */
  get taskSubmission(): Prisma.TaskSubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gitHubRepository`: Exposes CRUD operations for the **GitHubRepository** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GitHubRepositories
    * const gitHubRepositories = await prisma.gitHubRepository.findMany()
    * ```
    */
  get gitHubRepository(): Prisma.GitHubRepositoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gamificationPoint`: Exposes CRUD operations for the **GamificationPoint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GamificationPoints
    * const gamificationPoints = await prisma.gamificationPoint.findMany()
    * ```
    */
  get gamificationPoint(): Prisma.GamificationPointDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.achievement`: Exposes CRUD operations for the **Achievement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Achievements
    * const achievements = await prisma.achievement.findMany()
    * ```
    */
  get achievement(): Prisma.AchievementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentAchievement`: Exposes CRUD operations for the **StudentAchievement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentAchievements
    * const studentAchievements = await prisma.studentAchievement.findMany()
    * ```
    */
  get studentAchievement(): Prisma.StudentAchievementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.weeklyScore`: Exposes CRUD operations for the **WeeklyScore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WeeklyScores
    * const weeklyScores = await prisma.weeklyScore.findMany()
    * ```
    */
  get weeklyScore(): Prisma.WeeklyScoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supervisorFeedback`: Exposes CRUD operations for the **SupervisorFeedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SupervisorFeedbacks
    * const supervisorFeedbacks = await prisma.supervisorFeedback.findMany()
    * ```
    */
  get supervisorFeedback(): Prisma.SupervisorFeedbackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatMessage`: Exposes CRUD operations for the **ChatMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessage.findMany()
    * ```
    */
  get chatMessage(): Prisma.ChatMessageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Submit_report: 'Submit_report',
    Cohort: 'Cohort',
    CohortStudent: 'CohortStudent',
    Task: 'Task',
    TaskSubmission: 'TaskSubmission',
    GitHubRepository: 'GitHubRepository',
    Document: 'Document',
    GamificationPoint: 'GamificationPoint',
    Achievement: 'Achievement',
    StudentAchievement: 'StudentAchievement',
    WeeklyScore: 'WeeklyScore',
    SupervisorFeedback: 'SupervisorFeedback',
    ChatMessage: 'ChatMessage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "submit_report" | "cohort" | "cohortStudent" | "task" | "taskSubmission" | "gitHubRepository" | "document" | "gamificationPoint" | "achievement" | "studentAchievement" | "weeklyScore" | "supervisorFeedback" | "chatMessage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Submit_report: {
        payload: Prisma.$Submit_reportPayload<ExtArgs>
        fields: Prisma.Submit_reportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Submit_reportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Submit_reportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Submit_reportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Submit_reportPayload>
          }
          findFirst: {
            args: Prisma.Submit_reportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Submit_reportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Submit_reportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Submit_reportPayload>
          }
          findMany: {
            args: Prisma.Submit_reportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Submit_reportPayload>[]
          }
          create: {
            args: Prisma.Submit_reportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Submit_reportPayload>
          }
          createMany: {
            args: Prisma.Submit_reportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Submit_reportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Submit_reportPayload>[]
          }
          delete: {
            args: Prisma.Submit_reportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Submit_reportPayload>
          }
          update: {
            args: Prisma.Submit_reportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Submit_reportPayload>
          }
          deleteMany: {
            args: Prisma.Submit_reportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Submit_reportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Submit_reportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Submit_reportPayload>[]
          }
          upsert: {
            args: Prisma.Submit_reportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Submit_reportPayload>
          }
          aggregate: {
            args: Prisma.Submit_reportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubmit_report>
          }
          groupBy: {
            args: Prisma.Submit_reportGroupByArgs<ExtArgs>
            result: $Utils.Optional<Submit_reportGroupByOutputType>[]
          }
          count: {
            args: Prisma.Submit_reportCountArgs<ExtArgs>
            result: $Utils.Optional<Submit_reportCountAggregateOutputType> | number
          }
        }
      }
      Cohort: {
        payload: Prisma.$CohortPayload<ExtArgs>
        fields: Prisma.CohortFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CohortFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CohortFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortPayload>
          }
          findFirst: {
            args: Prisma.CohortFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CohortFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortPayload>
          }
          findMany: {
            args: Prisma.CohortFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortPayload>[]
          }
          create: {
            args: Prisma.CohortCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortPayload>
          }
          createMany: {
            args: Prisma.CohortCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CohortCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortPayload>[]
          }
          delete: {
            args: Prisma.CohortDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortPayload>
          }
          update: {
            args: Prisma.CohortUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortPayload>
          }
          deleteMany: {
            args: Prisma.CohortDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CohortUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CohortUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortPayload>[]
          }
          upsert: {
            args: Prisma.CohortUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortPayload>
          }
          aggregate: {
            args: Prisma.CohortAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCohort>
          }
          groupBy: {
            args: Prisma.CohortGroupByArgs<ExtArgs>
            result: $Utils.Optional<CohortGroupByOutputType>[]
          }
          count: {
            args: Prisma.CohortCountArgs<ExtArgs>
            result: $Utils.Optional<CohortCountAggregateOutputType> | number
          }
        }
      }
      CohortStudent: {
        payload: Prisma.$CohortStudentPayload<ExtArgs>
        fields: Prisma.CohortStudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CohortStudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortStudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CohortStudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortStudentPayload>
          }
          findFirst: {
            args: Prisma.CohortStudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortStudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CohortStudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortStudentPayload>
          }
          findMany: {
            args: Prisma.CohortStudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortStudentPayload>[]
          }
          create: {
            args: Prisma.CohortStudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortStudentPayload>
          }
          createMany: {
            args: Prisma.CohortStudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CohortStudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortStudentPayload>[]
          }
          delete: {
            args: Prisma.CohortStudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortStudentPayload>
          }
          update: {
            args: Prisma.CohortStudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortStudentPayload>
          }
          deleteMany: {
            args: Prisma.CohortStudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CohortStudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CohortStudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortStudentPayload>[]
          }
          upsert: {
            args: Prisma.CohortStudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CohortStudentPayload>
          }
          aggregate: {
            args: Prisma.CohortStudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCohortStudent>
          }
          groupBy: {
            args: Prisma.CohortStudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CohortStudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CohortStudentCountArgs<ExtArgs>
            result: $Utils.Optional<CohortStudentCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      TaskSubmission: {
        payload: Prisma.$TaskSubmissionPayload<ExtArgs>
        fields: Prisma.TaskSubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskSubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskSubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSubmissionPayload>
          }
          findFirst: {
            args: Prisma.TaskSubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskSubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSubmissionPayload>
          }
          findMany: {
            args: Prisma.TaskSubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSubmissionPayload>[]
          }
          create: {
            args: Prisma.TaskSubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSubmissionPayload>
          }
          createMany: {
            args: Prisma.TaskSubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskSubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSubmissionPayload>[]
          }
          delete: {
            args: Prisma.TaskSubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSubmissionPayload>
          }
          update: {
            args: Prisma.TaskSubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSubmissionPayload>
          }
          deleteMany: {
            args: Prisma.TaskSubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskSubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskSubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSubmissionPayload>[]
          }
          upsert: {
            args: Prisma.TaskSubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskSubmissionPayload>
          }
          aggregate: {
            args: Prisma.TaskSubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskSubmission>
          }
          groupBy: {
            args: Prisma.TaskSubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskSubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskSubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<TaskSubmissionCountAggregateOutputType> | number
          }
        }
      }
      GitHubRepository: {
        payload: Prisma.$GitHubRepositoryPayload<ExtArgs>
        fields: Prisma.GitHubRepositoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GitHubRepositoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitHubRepositoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GitHubRepositoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitHubRepositoryPayload>
          }
          findFirst: {
            args: Prisma.GitHubRepositoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitHubRepositoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GitHubRepositoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitHubRepositoryPayload>
          }
          findMany: {
            args: Prisma.GitHubRepositoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitHubRepositoryPayload>[]
          }
          create: {
            args: Prisma.GitHubRepositoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitHubRepositoryPayload>
          }
          createMany: {
            args: Prisma.GitHubRepositoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GitHubRepositoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitHubRepositoryPayload>[]
          }
          delete: {
            args: Prisma.GitHubRepositoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitHubRepositoryPayload>
          }
          update: {
            args: Prisma.GitHubRepositoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitHubRepositoryPayload>
          }
          deleteMany: {
            args: Prisma.GitHubRepositoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GitHubRepositoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GitHubRepositoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitHubRepositoryPayload>[]
          }
          upsert: {
            args: Prisma.GitHubRepositoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitHubRepositoryPayload>
          }
          aggregate: {
            args: Prisma.GitHubRepositoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGitHubRepository>
          }
          groupBy: {
            args: Prisma.GitHubRepositoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<GitHubRepositoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.GitHubRepositoryCountArgs<ExtArgs>
            result: $Utils.Optional<GitHubRepositoryCountAggregateOutputType> | number
          }
        }
      }
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
      GamificationPoint: {
        payload: Prisma.$GamificationPointPayload<ExtArgs>
        fields: Prisma.GamificationPointFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GamificationPointFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamificationPointPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GamificationPointFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamificationPointPayload>
          }
          findFirst: {
            args: Prisma.GamificationPointFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamificationPointPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GamificationPointFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamificationPointPayload>
          }
          findMany: {
            args: Prisma.GamificationPointFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamificationPointPayload>[]
          }
          create: {
            args: Prisma.GamificationPointCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamificationPointPayload>
          }
          createMany: {
            args: Prisma.GamificationPointCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GamificationPointCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamificationPointPayload>[]
          }
          delete: {
            args: Prisma.GamificationPointDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamificationPointPayload>
          }
          update: {
            args: Prisma.GamificationPointUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamificationPointPayload>
          }
          deleteMany: {
            args: Prisma.GamificationPointDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GamificationPointUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GamificationPointUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamificationPointPayload>[]
          }
          upsert: {
            args: Prisma.GamificationPointUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamificationPointPayload>
          }
          aggregate: {
            args: Prisma.GamificationPointAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGamificationPoint>
          }
          groupBy: {
            args: Prisma.GamificationPointGroupByArgs<ExtArgs>
            result: $Utils.Optional<GamificationPointGroupByOutputType>[]
          }
          count: {
            args: Prisma.GamificationPointCountArgs<ExtArgs>
            result: $Utils.Optional<GamificationPointCountAggregateOutputType> | number
          }
        }
      }
      Achievement: {
        payload: Prisma.$AchievementPayload<ExtArgs>
        fields: Prisma.AchievementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AchievementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AchievementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          findFirst: {
            args: Prisma.AchievementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AchievementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          findMany: {
            args: Prisma.AchievementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>[]
          }
          create: {
            args: Prisma.AchievementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          createMany: {
            args: Prisma.AchievementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AchievementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>[]
          }
          delete: {
            args: Prisma.AchievementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          update: {
            args: Prisma.AchievementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          deleteMany: {
            args: Prisma.AchievementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AchievementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AchievementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>[]
          }
          upsert: {
            args: Prisma.AchievementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          aggregate: {
            args: Prisma.AchievementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAchievement>
          }
          groupBy: {
            args: Prisma.AchievementGroupByArgs<ExtArgs>
            result: $Utils.Optional<AchievementGroupByOutputType>[]
          }
          count: {
            args: Prisma.AchievementCountArgs<ExtArgs>
            result: $Utils.Optional<AchievementCountAggregateOutputType> | number
          }
        }
      }
      StudentAchievement: {
        payload: Prisma.$StudentAchievementPayload<ExtArgs>
        fields: Prisma.StudentAchievementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentAchievementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAchievementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentAchievementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAchievementPayload>
          }
          findFirst: {
            args: Prisma.StudentAchievementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAchievementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentAchievementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAchievementPayload>
          }
          findMany: {
            args: Prisma.StudentAchievementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAchievementPayload>[]
          }
          create: {
            args: Prisma.StudentAchievementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAchievementPayload>
          }
          createMany: {
            args: Prisma.StudentAchievementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentAchievementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAchievementPayload>[]
          }
          delete: {
            args: Prisma.StudentAchievementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAchievementPayload>
          }
          update: {
            args: Prisma.StudentAchievementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAchievementPayload>
          }
          deleteMany: {
            args: Prisma.StudentAchievementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentAchievementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentAchievementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAchievementPayload>[]
          }
          upsert: {
            args: Prisma.StudentAchievementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAchievementPayload>
          }
          aggregate: {
            args: Prisma.StudentAchievementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentAchievement>
          }
          groupBy: {
            args: Prisma.StudentAchievementGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentAchievementGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentAchievementCountArgs<ExtArgs>
            result: $Utils.Optional<StudentAchievementCountAggregateOutputType> | number
          }
        }
      }
      WeeklyScore: {
        payload: Prisma.$WeeklyScorePayload<ExtArgs>
        fields: Prisma.WeeklyScoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeeklyScoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyScorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeeklyScoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyScorePayload>
          }
          findFirst: {
            args: Prisma.WeeklyScoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyScorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeeklyScoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyScorePayload>
          }
          findMany: {
            args: Prisma.WeeklyScoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyScorePayload>[]
          }
          create: {
            args: Prisma.WeeklyScoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyScorePayload>
          }
          createMany: {
            args: Prisma.WeeklyScoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeeklyScoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyScorePayload>[]
          }
          delete: {
            args: Prisma.WeeklyScoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyScorePayload>
          }
          update: {
            args: Prisma.WeeklyScoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyScorePayload>
          }
          deleteMany: {
            args: Prisma.WeeklyScoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeeklyScoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WeeklyScoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyScorePayload>[]
          }
          upsert: {
            args: Prisma.WeeklyScoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyScorePayload>
          }
          aggregate: {
            args: Prisma.WeeklyScoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeeklyScore>
          }
          groupBy: {
            args: Prisma.WeeklyScoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeeklyScoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeeklyScoreCountArgs<ExtArgs>
            result: $Utils.Optional<WeeklyScoreCountAggregateOutputType> | number
          }
        }
      }
      SupervisorFeedback: {
        payload: Prisma.$SupervisorFeedbackPayload<ExtArgs>
        fields: Prisma.SupervisorFeedbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupervisorFeedbackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorFeedbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupervisorFeedbackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorFeedbackPayload>
          }
          findFirst: {
            args: Prisma.SupervisorFeedbackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorFeedbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupervisorFeedbackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorFeedbackPayload>
          }
          findMany: {
            args: Prisma.SupervisorFeedbackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorFeedbackPayload>[]
          }
          create: {
            args: Prisma.SupervisorFeedbackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorFeedbackPayload>
          }
          createMany: {
            args: Prisma.SupervisorFeedbackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupervisorFeedbackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorFeedbackPayload>[]
          }
          delete: {
            args: Prisma.SupervisorFeedbackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorFeedbackPayload>
          }
          update: {
            args: Prisma.SupervisorFeedbackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorFeedbackPayload>
          }
          deleteMany: {
            args: Prisma.SupervisorFeedbackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupervisorFeedbackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SupervisorFeedbackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorFeedbackPayload>[]
          }
          upsert: {
            args: Prisma.SupervisorFeedbackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorFeedbackPayload>
          }
          aggregate: {
            args: Prisma.SupervisorFeedbackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupervisorFeedback>
          }
          groupBy: {
            args: Prisma.SupervisorFeedbackGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupervisorFeedbackGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupervisorFeedbackCountArgs<ExtArgs>
            result: $Utils.Optional<SupervisorFeedbackCountAggregateOutputType> | number
          }
        }
      }
      ChatMessage: {
        payload: Prisma.$ChatMessagePayload<ExtArgs>
        fields: Prisma.ChatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findFirst: {
            args: Prisma.ChatMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findMany: {
            args: Prisma.ChatMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          create: {
            args: Prisma.ChatMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          createMany: {
            args: Prisma.ChatMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          delete: {
            args: Prisma.ChatMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          update: {
            args: Prisma.ChatMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          deleteMany: {
            args: Prisma.ChatMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          upsert: {
            args: Prisma.ChatMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          aggregate: {
            args: Prisma.ChatMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessage>
          }
          groupBy: {
            args: Prisma.ChatMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    submit_report?: Submit_reportOmit
    cohort?: CohortOmit
    cohortStudent?: CohortStudentOmit
    task?: TaskOmit
    taskSubmission?: TaskSubmissionOmit
    gitHubRepository?: GitHubRepositoryOmit
    document?: DocumentOmit
    gamificationPoint?: GamificationPointOmit
    achievement?: AchievementOmit
    studentAchievement?: StudentAchievementOmit
    weeklyScore?: WeeklyScoreOmit
    supervisorFeedback?: SupervisorFeedbackOmit
    chatMessage?: ChatMessageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CohortCountOutputType
   */

  export type CohortCountOutputType = {
    students: number
    tasks: number
    documents: number
  }

  export type CohortCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | CohortCountOutputTypeCountStudentsArgs
    tasks?: boolean | CohortCountOutputTypeCountTasksArgs
    documents?: boolean | CohortCountOutputTypeCountDocumentsArgs
  }

  // Custom InputTypes
  /**
   * CohortCountOutputType without action
   */
  export type CohortCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CohortCountOutputType
     */
    select?: CohortCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CohortCountOutputType without action
   */
  export type CohortCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CohortStudentWhereInput
  }

  /**
   * CohortCountOutputType without action
   */
  export type CohortCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * CohortCountOutputType without action
   */
  export type CohortCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }


  /**
   * Count Type CohortStudentCountOutputType
   */

  export type CohortStudentCountOutputType = {
    tasksSubmitted: number
    gamificationPoints: number
    weeklyScores: number
  }

  export type CohortStudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasksSubmitted?: boolean | CohortStudentCountOutputTypeCountTasksSubmittedArgs
    gamificationPoints?: boolean | CohortStudentCountOutputTypeCountGamificationPointsArgs
    weeklyScores?: boolean | CohortStudentCountOutputTypeCountWeeklyScoresArgs
  }

  // Custom InputTypes
  /**
   * CohortStudentCountOutputType without action
   */
  export type CohortStudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CohortStudentCountOutputType
     */
    select?: CohortStudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CohortStudentCountOutputType without action
   */
  export type CohortStudentCountOutputTypeCountTasksSubmittedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskSubmissionWhereInput
  }

  /**
   * CohortStudentCountOutputType without action
   */
  export type CohortStudentCountOutputTypeCountGamificationPointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GamificationPointWhereInput
  }

  /**
   * CohortStudentCountOutputType without action
   */
  export type CohortStudentCountOutputTypeCountWeeklyScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeeklyScoreWhereInput
  }


  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    submissions: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | TaskCountOutputTypeCountSubmissionsArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskSubmissionWhereInput
  }


  /**
   * Count Type AchievementCountOutputType
   */

  export type AchievementCountOutputType = {
    earnedBy: number
  }

  export type AchievementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    earnedBy?: boolean | AchievementCountOutputTypeCountEarnedByArgs
  }

  // Custom InputTypes
  /**
   * AchievementCountOutputType without action
   */
  export type AchievementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AchievementCountOutputType
     */
    select?: AchievementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AchievementCountOutputType without action
   */
  export type AchievementCountOutputTypeCountEarnedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentAchievementWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Submit_report
   */

  export type AggregateSubmit_report = {
    _count: Submit_reportCountAggregateOutputType | null
    _min: Submit_reportMinAggregateOutputType | null
    _max: Submit_reportMaxAggregateOutputType | null
  }

  export type Submit_reportMinAggregateOutputType = {
    id: string | null
    title: string | null
    summary: string | null
    notes: string | null
    status: string | null
    submittedAt: Date | null
    submittedBy: string | null
    studentEmail: string | null
  }

  export type Submit_reportMaxAggregateOutputType = {
    id: string | null
    title: string | null
    summary: string | null
    notes: string | null
    status: string | null
    submittedAt: Date | null
    submittedBy: string | null
    studentEmail: string | null
  }

  export type Submit_reportCountAggregateOutputType = {
    id: number
    title: number
    summary: number
    notes: number
    status: number
    submittedAt: number
    submittedBy: number
    studentEmail: number
    _all: number
  }


  export type Submit_reportMinAggregateInputType = {
    id?: true
    title?: true
    summary?: true
    notes?: true
    status?: true
    submittedAt?: true
    submittedBy?: true
    studentEmail?: true
  }

  export type Submit_reportMaxAggregateInputType = {
    id?: true
    title?: true
    summary?: true
    notes?: true
    status?: true
    submittedAt?: true
    submittedBy?: true
    studentEmail?: true
  }

  export type Submit_reportCountAggregateInputType = {
    id?: true
    title?: true
    summary?: true
    notes?: true
    status?: true
    submittedAt?: true
    submittedBy?: true
    studentEmail?: true
    _all?: true
  }

  export type Submit_reportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submit_report to aggregate.
     */
    where?: Submit_reportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submit_reports to fetch.
     */
    orderBy?: Submit_reportOrderByWithRelationInput | Submit_reportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Submit_reportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submit_reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submit_reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Submit_reports
    **/
    _count?: true | Submit_reportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Submit_reportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Submit_reportMaxAggregateInputType
  }

  export type GetSubmit_reportAggregateType<T extends Submit_reportAggregateArgs> = {
        [P in keyof T & keyof AggregateSubmit_report]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmit_report[P]>
      : GetScalarType<T[P], AggregateSubmit_report[P]>
  }




  export type Submit_reportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Submit_reportWhereInput
    orderBy?: Submit_reportOrderByWithAggregationInput | Submit_reportOrderByWithAggregationInput[]
    by: Submit_reportScalarFieldEnum[] | Submit_reportScalarFieldEnum
    having?: Submit_reportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Submit_reportCountAggregateInputType | true
    _min?: Submit_reportMinAggregateInputType
    _max?: Submit_reportMaxAggregateInputType
  }

  export type Submit_reportGroupByOutputType = {
    id: string
    title: string
    summary: string
    notes: string | null
    status: string
    submittedAt: Date
    submittedBy: string
    studentEmail: string
    _count: Submit_reportCountAggregateOutputType | null
    _min: Submit_reportMinAggregateOutputType | null
    _max: Submit_reportMaxAggregateOutputType | null
  }

  type GetSubmit_reportGroupByPayload<T extends Submit_reportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Submit_reportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Submit_reportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Submit_reportGroupByOutputType[P]>
            : GetScalarType<T[P], Submit_reportGroupByOutputType[P]>
        }
      >
    >


  export type Submit_reportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    summary?: boolean
    notes?: boolean
    status?: boolean
    submittedAt?: boolean
    submittedBy?: boolean
    studentEmail?: boolean
  }, ExtArgs["result"]["submit_report"]>

  export type Submit_reportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    summary?: boolean
    notes?: boolean
    status?: boolean
    submittedAt?: boolean
    submittedBy?: boolean
    studentEmail?: boolean
  }, ExtArgs["result"]["submit_report"]>

  export type Submit_reportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    summary?: boolean
    notes?: boolean
    status?: boolean
    submittedAt?: boolean
    submittedBy?: boolean
    studentEmail?: boolean
  }, ExtArgs["result"]["submit_report"]>

  export type Submit_reportSelectScalar = {
    id?: boolean
    title?: boolean
    summary?: boolean
    notes?: boolean
    status?: boolean
    submittedAt?: boolean
    submittedBy?: boolean
    studentEmail?: boolean
  }

  export type Submit_reportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "summary" | "notes" | "status" | "submittedAt" | "submittedBy" | "studentEmail", ExtArgs["result"]["submit_report"]>

  export type $Submit_reportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Submit_report"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      summary: string
      notes: string | null
      status: string
      submittedAt: Date
      submittedBy: string
      studentEmail: string
    }, ExtArgs["result"]["submit_report"]>
    composites: {}
  }

  type Submit_reportGetPayload<S extends boolean | null | undefined | Submit_reportDefaultArgs> = $Result.GetResult<Prisma.$Submit_reportPayload, S>

  type Submit_reportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Submit_reportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Submit_reportCountAggregateInputType | true
    }

  export interface Submit_reportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Submit_report'], meta: { name: 'Submit_report' } }
    /**
     * Find zero or one Submit_report that matches the filter.
     * @param {Submit_reportFindUniqueArgs} args - Arguments to find a Submit_report
     * @example
     * // Get one Submit_report
     * const submit_report = await prisma.submit_report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Submit_reportFindUniqueArgs>(args: SelectSubset<T, Submit_reportFindUniqueArgs<ExtArgs>>): Prisma__Submit_reportClient<$Result.GetResult<Prisma.$Submit_reportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Submit_report that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Submit_reportFindUniqueOrThrowArgs} args - Arguments to find a Submit_report
     * @example
     * // Get one Submit_report
     * const submit_report = await prisma.submit_report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Submit_reportFindUniqueOrThrowArgs>(args: SelectSubset<T, Submit_reportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Submit_reportClient<$Result.GetResult<Prisma.$Submit_reportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submit_report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Submit_reportFindFirstArgs} args - Arguments to find a Submit_report
     * @example
     * // Get one Submit_report
     * const submit_report = await prisma.submit_report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Submit_reportFindFirstArgs>(args?: SelectSubset<T, Submit_reportFindFirstArgs<ExtArgs>>): Prisma__Submit_reportClient<$Result.GetResult<Prisma.$Submit_reportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submit_report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Submit_reportFindFirstOrThrowArgs} args - Arguments to find a Submit_report
     * @example
     * // Get one Submit_report
     * const submit_report = await prisma.submit_report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Submit_reportFindFirstOrThrowArgs>(args?: SelectSubset<T, Submit_reportFindFirstOrThrowArgs<ExtArgs>>): Prisma__Submit_reportClient<$Result.GetResult<Prisma.$Submit_reportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Submit_reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Submit_reportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Submit_reports
     * const submit_reports = await prisma.submit_report.findMany()
     * 
     * // Get first 10 Submit_reports
     * const submit_reports = await prisma.submit_report.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const submit_reportWithIdOnly = await prisma.submit_report.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Submit_reportFindManyArgs>(args?: SelectSubset<T, Submit_reportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Submit_reportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Submit_report.
     * @param {Submit_reportCreateArgs} args - Arguments to create a Submit_report.
     * @example
     * // Create one Submit_report
     * const Submit_report = await prisma.submit_report.create({
     *   data: {
     *     // ... data to create a Submit_report
     *   }
     * })
     * 
     */
    create<T extends Submit_reportCreateArgs>(args: SelectSubset<T, Submit_reportCreateArgs<ExtArgs>>): Prisma__Submit_reportClient<$Result.GetResult<Prisma.$Submit_reportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Submit_reports.
     * @param {Submit_reportCreateManyArgs} args - Arguments to create many Submit_reports.
     * @example
     * // Create many Submit_reports
     * const submit_report = await prisma.submit_report.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Submit_reportCreateManyArgs>(args?: SelectSubset<T, Submit_reportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Submit_reports and returns the data saved in the database.
     * @param {Submit_reportCreateManyAndReturnArgs} args - Arguments to create many Submit_reports.
     * @example
     * // Create many Submit_reports
     * const submit_report = await prisma.submit_report.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Submit_reports and only return the `id`
     * const submit_reportWithIdOnly = await prisma.submit_report.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Submit_reportCreateManyAndReturnArgs>(args?: SelectSubset<T, Submit_reportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Submit_reportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Submit_report.
     * @param {Submit_reportDeleteArgs} args - Arguments to delete one Submit_report.
     * @example
     * // Delete one Submit_report
     * const Submit_report = await prisma.submit_report.delete({
     *   where: {
     *     // ... filter to delete one Submit_report
     *   }
     * })
     * 
     */
    delete<T extends Submit_reportDeleteArgs>(args: SelectSubset<T, Submit_reportDeleteArgs<ExtArgs>>): Prisma__Submit_reportClient<$Result.GetResult<Prisma.$Submit_reportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Submit_report.
     * @param {Submit_reportUpdateArgs} args - Arguments to update one Submit_report.
     * @example
     * // Update one Submit_report
     * const submit_report = await prisma.submit_report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Submit_reportUpdateArgs>(args: SelectSubset<T, Submit_reportUpdateArgs<ExtArgs>>): Prisma__Submit_reportClient<$Result.GetResult<Prisma.$Submit_reportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Submit_reports.
     * @param {Submit_reportDeleteManyArgs} args - Arguments to filter Submit_reports to delete.
     * @example
     * // Delete a few Submit_reports
     * const { count } = await prisma.submit_report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Submit_reportDeleteManyArgs>(args?: SelectSubset<T, Submit_reportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submit_reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Submit_reportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Submit_reports
     * const submit_report = await prisma.submit_report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Submit_reportUpdateManyArgs>(args: SelectSubset<T, Submit_reportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submit_reports and returns the data updated in the database.
     * @param {Submit_reportUpdateManyAndReturnArgs} args - Arguments to update many Submit_reports.
     * @example
     * // Update many Submit_reports
     * const submit_report = await prisma.submit_report.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Submit_reports and only return the `id`
     * const submit_reportWithIdOnly = await prisma.submit_report.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Submit_reportUpdateManyAndReturnArgs>(args: SelectSubset<T, Submit_reportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Submit_reportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Submit_report.
     * @param {Submit_reportUpsertArgs} args - Arguments to update or create a Submit_report.
     * @example
     * // Update or create a Submit_report
     * const submit_report = await prisma.submit_report.upsert({
     *   create: {
     *     // ... data to create a Submit_report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Submit_report we want to update
     *   }
     * })
     */
    upsert<T extends Submit_reportUpsertArgs>(args: SelectSubset<T, Submit_reportUpsertArgs<ExtArgs>>): Prisma__Submit_reportClient<$Result.GetResult<Prisma.$Submit_reportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Submit_reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Submit_reportCountArgs} args - Arguments to filter Submit_reports to count.
     * @example
     * // Count the number of Submit_reports
     * const count = await prisma.submit_report.count({
     *   where: {
     *     // ... the filter for the Submit_reports we want to count
     *   }
     * })
    **/
    count<T extends Submit_reportCountArgs>(
      args?: Subset<T, Submit_reportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Submit_reportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Submit_report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Submit_reportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Submit_reportAggregateArgs>(args: Subset<T, Submit_reportAggregateArgs>): Prisma.PrismaPromise<GetSubmit_reportAggregateType<T>>

    /**
     * Group by Submit_report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Submit_reportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Submit_reportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Submit_reportGroupByArgs['orderBy'] }
        : { orderBy?: Submit_reportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Submit_reportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmit_reportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Submit_report model
   */
  readonly fields: Submit_reportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Submit_report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Submit_reportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Submit_report model
   */
  interface Submit_reportFieldRefs {
    readonly id: FieldRef<"Submit_report", 'String'>
    readonly title: FieldRef<"Submit_report", 'String'>
    readonly summary: FieldRef<"Submit_report", 'String'>
    readonly notes: FieldRef<"Submit_report", 'String'>
    readonly status: FieldRef<"Submit_report", 'String'>
    readonly submittedAt: FieldRef<"Submit_report", 'DateTime'>
    readonly submittedBy: FieldRef<"Submit_report", 'String'>
    readonly studentEmail: FieldRef<"Submit_report", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Submit_report findUnique
   */
  export type Submit_reportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submit_report
     */
    select?: Submit_reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submit_report
     */
    omit?: Submit_reportOmit<ExtArgs> | null
    /**
     * Filter, which Submit_report to fetch.
     */
    where: Submit_reportWhereUniqueInput
  }

  /**
   * Submit_report findUniqueOrThrow
   */
  export type Submit_reportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submit_report
     */
    select?: Submit_reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submit_report
     */
    omit?: Submit_reportOmit<ExtArgs> | null
    /**
     * Filter, which Submit_report to fetch.
     */
    where: Submit_reportWhereUniqueInput
  }

  /**
   * Submit_report findFirst
   */
  export type Submit_reportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submit_report
     */
    select?: Submit_reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submit_report
     */
    omit?: Submit_reportOmit<ExtArgs> | null
    /**
     * Filter, which Submit_report to fetch.
     */
    where?: Submit_reportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submit_reports to fetch.
     */
    orderBy?: Submit_reportOrderByWithRelationInput | Submit_reportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submit_reports.
     */
    cursor?: Submit_reportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submit_reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submit_reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submit_reports.
     */
    distinct?: Submit_reportScalarFieldEnum | Submit_reportScalarFieldEnum[]
  }

  /**
   * Submit_report findFirstOrThrow
   */
  export type Submit_reportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submit_report
     */
    select?: Submit_reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submit_report
     */
    omit?: Submit_reportOmit<ExtArgs> | null
    /**
     * Filter, which Submit_report to fetch.
     */
    where?: Submit_reportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submit_reports to fetch.
     */
    orderBy?: Submit_reportOrderByWithRelationInput | Submit_reportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submit_reports.
     */
    cursor?: Submit_reportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submit_reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submit_reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submit_reports.
     */
    distinct?: Submit_reportScalarFieldEnum | Submit_reportScalarFieldEnum[]
  }

  /**
   * Submit_report findMany
   */
  export type Submit_reportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submit_report
     */
    select?: Submit_reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submit_report
     */
    omit?: Submit_reportOmit<ExtArgs> | null
    /**
     * Filter, which Submit_reports to fetch.
     */
    where?: Submit_reportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submit_reports to fetch.
     */
    orderBy?: Submit_reportOrderByWithRelationInput | Submit_reportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Submit_reports.
     */
    cursor?: Submit_reportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submit_reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submit_reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submit_reports.
     */
    distinct?: Submit_reportScalarFieldEnum | Submit_reportScalarFieldEnum[]
  }

  /**
   * Submit_report create
   */
  export type Submit_reportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submit_report
     */
    select?: Submit_reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submit_report
     */
    omit?: Submit_reportOmit<ExtArgs> | null
    /**
     * The data needed to create a Submit_report.
     */
    data: XOR<Submit_reportCreateInput, Submit_reportUncheckedCreateInput>
  }

  /**
   * Submit_report createMany
   */
  export type Submit_reportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Submit_reports.
     */
    data: Submit_reportCreateManyInput | Submit_reportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Submit_report createManyAndReturn
   */
  export type Submit_reportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submit_report
     */
    select?: Submit_reportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submit_report
     */
    omit?: Submit_reportOmit<ExtArgs> | null
    /**
     * The data used to create many Submit_reports.
     */
    data: Submit_reportCreateManyInput | Submit_reportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Submit_report update
   */
  export type Submit_reportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submit_report
     */
    select?: Submit_reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submit_report
     */
    omit?: Submit_reportOmit<ExtArgs> | null
    /**
     * The data needed to update a Submit_report.
     */
    data: XOR<Submit_reportUpdateInput, Submit_reportUncheckedUpdateInput>
    /**
     * Choose, which Submit_report to update.
     */
    where: Submit_reportWhereUniqueInput
  }

  /**
   * Submit_report updateMany
   */
  export type Submit_reportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Submit_reports.
     */
    data: XOR<Submit_reportUpdateManyMutationInput, Submit_reportUncheckedUpdateManyInput>
    /**
     * Filter which Submit_reports to update
     */
    where?: Submit_reportWhereInput
    /**
     * Limit how many Submit_reports to update.
     */
    limit?: number
  }

  /**
   * Submit_report updateManyAndReturn
   */
  export type Submit_reportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submit_report
     */
    select?: Submit_reportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submit_report
     */
    omit?: Submit_reportOmit<ExtArgs> | null
    /**
     * The data used to update Submit_reports.
     */
    data: XOR<Submit_reportUpdateManyMutationInput, Submit_reportUncheckedUpdateManyInput>
    /**
     * Filter which Submit_reports to update
     */
    where?: Submit_reportWhereInput
    /**
     * Limit how many Submit_reports to update.
     */
    limit?: number
  }

  /**
   * Submit_report upsert
   */
  export type Submit_reportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submit_report
     */
    select?: Submit_reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submit_report
     */
    omit?: Submit_reportOmit<ExtArgs> | null
    /**
     * The filter to search for the Submit_report to update in case it exists.
     */
    where: Submit_reportWhereUniqueInput
    /**
     * In case the Submit_report found by the `where` argument doesn't exist, create a new Submit_report with this data.
     */
    create: XOR<Submit_reportCreateInput, Submit_reportUncheckedCreateInput>
    /**
     * In case the Submit_report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Submit_reportUpdateInput, Submit_reportUncheckedUpdateInput>
  }

  /**
   * Submit_report delete
   */
  export type Submit_reportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submit_report
     */
    select?: Submit_reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submit_report
     */
    omit?: Submit_reportOmit<ExtArgs> | null
    /**
     * Filter which Submit_report to delete.
     */
    where: Submit_reportWhereUniqueInput
  }

  /**
   * Submit_report deleteMany
   */
  export type Submit_reportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submit_reports to delete
     */
    where?: Submit_reportWhereInput
    /**
     * Limit how many Submit_reports to delete.
     */
    limit?: number
  }

  /**
   * Submit_report without action
   */
  export type Submit_reportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submit_report
     */
    select?: Submit_reportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submit_report
     */
    omit?: Submit_reportOmit<ExtArgs> | null
  }


  /**
   * Model Cohort
   */

  export type AggregateCohort = {
    _count: CohortCountAggregateOutputType | null
    _avg: CohortAvgAggregateOutputType | null
    _sum: CohortSumAggregateOutputType | null
    _min: CohortMinAggregateOutputType | null
    _max: CohortMaxAggregateOutputType | null
  }

  export type CohortAvgAggregateOutputType = {
    maxStudents: number | null
  }

  export type CohortSumAggregateOutputType = {
    maxStudents: number | null
  }

  export type CohortMinAggregateOutputType = {
    id: string | null
    name: string | null
    programId: string | null
    programType: string | null
    startDate: Date | null
    endDate: Date | null
    isActive: boolean | null
    maxStudents: number | null
    description: string | null
    department: string | null
    level: string | null
    supervisorId: string | null
    supervisorName: string | null
    supervisorEmail: string | null
    githubRepoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CohortMaxAggregateOutputType = {
    id: string | null
    name: string | null
    programId: string | null
    programType: string | null
    startDate: Date | null
    endDate: Date | null
    isActive: boolean | null
    maxStudents: number | null
    description: string | null
    department: string | null
    level: string | null
    supervisorId: string | null
    supervisorName: string | null
    supervisorEmail: string | null
    githubRepoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CohortCountAggregateOutputType = {
    id: number
    name: number
    programId: number
    programType: number
    startDate: number
    endDate: number
    isActive: number
    maxStudents: number
    description: number
    department: number
    level: number
    supervisorId: number
    supervisorName: number
    supervisorEmail: number
    githubRepoUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CohortAvgAggregateInputType = {
    maxStudents?: true
  }

  export type CohortSumAggregateInputType = {
    maxStudents?: true
  }

  export type CohortMinAggregateInputType = {
    id?: true
    name?: true
    programId?: true
    programType?: true
    startDate?: true
    endDate?: true
    isActive?: true
    maxStudents?: true
    description?: true
    department?: true
    level?: true
    supervisorId?: true
    supervisorName?: true
    supervisorEmail?: true
    githubRepoUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CohortMaxAggregateInputType = {
    id?: true
    name?: true
    programId?: true
    programType?: true
    startDate?: true
    endDate?: true
    isActive?: true
    maxStudents?: true
    description?: true
    department?: true
    level?: true
    supervisorId?: true
    supervisorName?: true
    supervisorEmail?: true
    githubRepoUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CohortCountAggregateInputType = {
    id?: true
    name?: true
    programId?: true
    programType?: true
    startDate?: true
    endDate?: true
    isActive?: true
    maxStudents?: true
    description?: true
    department?: true
    level?: true
    supervisorId?: true
    supervisorName?: true
    supervisorEmail?: true
    githubRepoUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CohortAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cohort to aggregate.
     */
    where?: CohortWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cohorts to fetch.
     */
    orderBy?: CohortOrderByWithRelationInput | CohortOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CohortWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cohorts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cohorts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cohorts
    **/
    _count?: true | CohortCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CohortAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CohortSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CohortMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CohortMaxAggregateInputType
  }

  export type GetCohortAggregateType<T extends CohortAggregateArgs> = {
        [P in keyof T & keyof AggregateCohort]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCohort[P]>
      : GetScalarType<T[P], AggregateCohort[P]>
  }




  export type CohortGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CohortWhereInput
    orderBy?: CohortOrderByWithAggregationInput | CohortOrderByWithAggregationInput[]
    by: CohortScalarFieldEnum[] | CohortScalarFieldEnum
    having?: CohortScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CohortCountAggregateInputType | true
    _avg?: CohortAvgAggregateInputType
    _sum?: CohortSumAggregateInputType
    _min?: CohortMinAggregateInputType
    _max?: CohortMaxAggregateInputType
  }

  export type CohortGroupByOutputType = {
    id: string
    name: string
    programId: string
    programType: string
    startDate: Date
    endDate: Date
    isActive: boolean
    maxStudents: number | null
    description: string | null
    department: string
    level: string
    supervisorId: string | null
    supervisorName: string | null
    supervisorEmail: string | null
    githubRepoUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: CohortCountAggregateOutputType | null
    _avg: CohortAvgAggregateOutputType | null
    _sum: CohortSumAggregateOutputType | null
    _min: CohortMinAggregateOutputType | null
    _max: CohortMaxAggregateOutputType | null
  }

  type GetCohortGroupByPayload<T extends CohortGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CohortGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CohortGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CohortGroupByOutputType[P]>
            : GetScalarType<T[P], CohortGroupByOutputType[P]>
        }
      >
    >


  export type CohortSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    programId?: boolean
    programType?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    maxStudents?: boolean
    description?: boolean
    department?: boolean
    level?: boolean
    supervisorId?: boolean
    supervisorName?: boolean
    supervisorEmail?: boolean
    githubRepoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    students?: boolean | Cohort$studentsArgs<ExtArgs>
    tasks?: boolean | Cohort$tasksArgs<ExtArgs>
    documents?: boolean | Cohort$documentsArgs<ExtArgs>
    _count?: boolean | CohortCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cohort"]>

  export type CohortSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    programId?: boolean
    programType?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    maxStudents?: boolean
    description?: boolean
    department?: boolean
    level?: boolean
    supervisorId?: boolean
    supervisorName?: boolean
    supervisorEmail?: boolean
    githubRepoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cohort"]>

  export type CohortSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    programId?: boolean
    programType?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    maxStudents?: boolean
    description?: boolean
    department?: boolean
    level?: boolean
    supervisorId?: boolean
    supervisorName?: boolean
    supervisorEmail?: boolean
    githubRepoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cohort"]>

  export type CohortSelectScalar = {
    id?: boolean
    name?: boolean
    programId?: boolean
    programType?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    maxStudents?: boolean
    description?: boolean
    department?: boolean
    level?: boolean
    supervisorId?: boolean
    supervisorName?: boolean
    supervisorEmail?: boolean
    githubRepoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CohortOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "programId" | "programType" | "startDate" | "endDate" | "isActive" | "maxStudents" | "description" | "department" | "level" | "supervisorId" | "supervisorName" | "supervisorEmail" | "githubRepoUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["cohort"]>
  export type CohortInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | Cohort$studentsArgs<ExtArgs>
    tasks?: boolean | Cohort$tasksArgs<ExtArgs>
    documents?: boolean | Cohort$documentsArgs<ExtArgs>
    _count?: boolean | CohortCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CohortIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CohortIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CohortPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cohort"
    objects: {
      students: Prisma.$CohortStudentPayload<ExtArgs>[]
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      documents: Prisma.$DocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      programId: string
      programType: string
      startDate: Date
      endDate: Date
      isActive: boolean
      maxStudents: number | null
      description: string | null
      department: string
      level: string
      supervisorId: string | null
      supervisorName: string | null
      supervisorEmail: string | null
      githubRepoUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cohort"]>
    composites: {}
  }

  type CohortGetPayload<S extends boolean | null | undefined | CohortDefaultArgs> = $Result.GetResult<Prisma.$CohortPayload, S>

  type CohortCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CohortFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CohortCountAggregateInputType | true
    }

  export interface CohortDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cohort'], meta: { name: 'Cohort' } }
    /**
     * Find zero or one Cohort that matches the filter.
     * @param {CohortFindUniqueArgs} args - Arguments to find a Cohort
     * @example
     * // Get one Cohort
     * const cohort = await prisma.cohort.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CohortFindUniqueArgs>(args: SelectSubset<T, CohortFindUniqueArgs<ExtArgs>>): Prisma__CohortClient<$Result.GetResult<Prisma.$CohortPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cohort that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CohortFindUniqueOrThrowArgs} args - Arguments to find a Cohort
     * @example
     * // Get one Cohort
     * const cohort = await prisma.cohort.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CohortFindUniqueOrThrowArgs>(args: SelectSubset<T, CohortFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CohortClient<$Result.GetResult<Prisma.$CohortPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cohort that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CohortFindFirstArgs} args - Arguments to find a Cohort
     * @example
     * // Get one Cohort
     * const cohort = await prisma.cohort.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CohortFindFirstArgs>(args?: SelectSubset<T, CohortFindFirstArgs<ExtArgs>>): Prisma__CohortClient<$Result.GetResult<Prisma.$CohortPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cohort that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CohortFindFirstOrThrowArgs} args - Arguments to find a Cohort
     * @example
     * // Get one Cohort
     * const cohort = await prisma.cohort.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CohortFindFirstOrThrowArgs>(args?: SelectSubset<T, CohortFindFirstOrThrowArgs<ExtArgs>>): Prisma__CohortClient<$Result.GetResult<Prisma.$CohortPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cohorts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CohortFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cohorts
     * const cohorts = await prisma.cohort.findMany()
     * 
     * // Get first 10 Cohorts
     * const cohorts = await prisma.cohort.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cohortWithIdOnly = await prisma.cohort.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CohortFindManyArgs>(args?: SelectSubset<T, CohortFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CohortPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cohort.
     * @param {CohortCreateArgs} args - Arguments to create a Cohort.
     * @example
     * // Create one Cohort
     * const Cohort = await prisma.cohort.create({
     *   data: {
     *     // ... data to create a Cohort
     *   }
     * })
     * 
     */
    create<T extends CohortCreateArgs>(args: SelectSubset<T, CohortCreateArgs<ExtArgs>>): Prisma__CohortClient<$Result.GetResult<Prisma.$CohortPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cohorts.
     * @param {CohortCreateManyArgs} args - Arguments to create many Cohorts.
     * @example
     * // Create many Cohorts
     * const cohort = await prisma.cohort.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CohortCreateManyArgs>(args?: SelectSubset<T, CohortCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cohorts and returns the data saved in the database.
     * @param {CohortCreateManyAndReturnArgs} args - Arguments to create many Cohorts.
     * @example
     * // Create many Cohorts
     * const cohort = await prisma.cohort.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cohorts and only return the `id`
     * const cohortWithIdOnly = await prisma.cohort.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CohortCreateManyAndReturnArgs>(args?: SelectSubset<T, CohortCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CohortPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cohort.
     * @param {CohortDeleteArgs} args - Arguments to delete one Cohort.
     * @example
     * // Delete one Cohort
     * const Cohort = await prisma.cohort.delete({
     *   where: {
     *     // ... filter to delete one Cohort
     *   }
     * })
     * 
     */
    delete<T extends CohortDeleteArgs>(args: SelectSubset<T, CohortDeleteArgs<ExtArgs>>): Prisma__CohortClient<$Result.GetResult<Prisma.$CohortPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cohort.
     * @param {CohortUpdateArgs} args - Arguments to update one Cohort.
     * @example
     * // Update one Cohort
     * const cohort = await prisma.cohort.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CohortUpdateArgs>(args: SelectSubset<T, CohortUpdateArgs<ExtArgs>>): Prisma__CohortClient<$Result.GetResult<Prisma.$CohortPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cohorts.
     * @param {CohortDeleteManyArgs} args - Arguments to filter Cohorts to delete.
     * @example
     * // Delete a few Cohorts
     * const { count } = await prisma.cohort.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CohortDeleteManyArgs>(args?: SelectSubset<T, CohortDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cohorts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CohortUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cohorts
     * const cohort = await prisma.cohort.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CohortUpdateManyArgs>(args: SelectSubset<T, CohortUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cohorts and returns the data updated in the database.
     * @param {CohortUpdateManyAndReturnArgs} args - Arguments to update many Cohorts.
     * @example
     * // Update many Cohorts
     * const cohort = await prisma.cohort.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cohorts and only return the `id`
     * const cohortWithIdOnly = await prisma.cohort.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CohortUpdateManyAndReturnArgs>(args: SelectSubset<T, CohortUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CohortPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cohort.
     * @param {CohortUpsertArgs} args - Arguments to update or create a Cohort.
     * @example
     * // Update or create a Cohort
     * const cohort = await prisma.cohort.upsert({
     *   create: {
     *     // ... data to create a Cohort
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cohort we want to update
     *   }
     * })
     */
    upsert<T extends CohortUpsertArgs>(args: SelectSubset<T, CohortUpsertArgs<ExtArgs>>): Prisma__CohortClient<$Result.GetResult<Prisma.$CohortPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cohorts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CohortCountArgs} args - Arguments to filter Cohorts to count.
     * @example
     * // Count the number of Cohorts
     * const count = await prisma.cohort.count({
     *   where: {
     *     // ... the filter for the Cohorts we want to count
     *   }
     * })
    **/
    count<T extends CohortCountArgs>(
      args?: Subset<T, CohortCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CohortCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cohort.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CohortAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CohortAggregateArgs>(args: Subset<T, CohortAggregateArgs>): Prisma.PrismaPromise<GetCohortAggregateType<T>>

    /**
     * Group by Cohort.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CohortGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CohortGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CohortGroupByArgs['orderBy'] }
        : { orderBy?: CohortGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CohortGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCohortGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cohort model
   */
  readonly fields: CohortFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cohort.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CohortClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    students<T extends Cohort$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Cohort$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CohortStudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks<T extends Cohort$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Cohort$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documents<T extends Cohort$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Cohort$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cohort model
   */
  interface CohortFieldRefs {
    readonly id: FieldRef<"Cohort", 'String'>
    readonly name: FieldRef<"Cohort", 'String'>
    readonly programId: FieldRef<"Cohort", 'String'>
    readonly programType: FieldRef<"Cohort", 'String'>
    readonly startDate: FieldRef<"Cohort", 'DateTime'>
    readonly endDate: FieldRef<"Cohort", 'DateTime'>
    readonly isActive: FieldRef<"Cohort", 'Boolean'>
    readonly maxStudents: FieldRef<"Cohort", 'Int'>
    readonly description: FieldRef<"Cohort", 'String'>
    readonly department: FieldRef<"Cohort", 'String'>
    readonly level: FieldRef<"Cohort", 'String'>
    readonly supervisorId: FieldRef<"Cohort", 'String'>
    readonly supervisorName: FieldRef<"Cohort", 'String'>
    readonly supervisorEmail: FieldRef<"Cohort", 'String'>
    readonly githubRepoUrl: FieldRef<"Cohort", 'String'>
    readonly createdAt: FieldRef<"Cohort", 'DateTime'>
    readonly updatedAt: FieldRef<"Cohort", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cohort findUnique
   */
  export type CohortFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cohort
     */
    select?: CohortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cohort
     */
    omit?: CohortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortInclude<ExtArgs> | null
    /**
     * Filter, which Cohort to fetch.
     */
    where: CohortWhereUniqueInput
  }

  /**
   * Cohort findUniqueOrThrow
   */
  export type CohortFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cohort
     */
    select?: CohortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cohort
     */
    omit?: CohortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortInclude<ExtArgs> | null
    /**
     * Filter, which Cohort to fetch.
     */
    where: CohortWhereUniqueInput
  }

  /**
   * Cohort findFirst
   */
  export type CohortFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cohort
     */
    select?: CohortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cohort
     */
    omit?: CohortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortInclude<ExtArgs> | null
    /**
     * Filter, which Cohort to fetch.
     */
    where?: CohortWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cohorts to fetch.
     */
    orderBy?: CohortOrderByWithRelationInput | CohortOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cohorts.
     */
    cursor?: CohortWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cohorts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cohorts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cohorts.
     */
    distinct?: CohortScalarFieldEnum | CohortScalarFieldEnum[]
  }

  /**
   * Cohort findFirstOrThrow
   */
  export type CohortFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cohort
     */
    select?: CohortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cohort
     */
    omit?: CohortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortInclude<ExtArgs> | null
    /**
     * Filter, which Cohort to fetch.
     */
    where?: CohortWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cohorts to fetch.
     */
    orderBy?: CohortOrderByWithRelationInput | CohortOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cohorts.
     */
    cursor?: CohortWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cohorts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cohorts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cohorts.
     */
    distinct?: CohortScalarFieldEnum | CohortScalarFieldEnum[]
  }

  /**
   * Cohort findMany
   */
  export type CohortFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cohort
     */
    select?: CohortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cohort
     */
    omit?: CohortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortInclude<ExtArgs> | null
    /**
     * Filter, which Cohorts to fetch.
     */
    where?: CohortWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cohorts to fetch.
     */
    orderBy?: CohortOrderByWithRelationInput | CohortOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cohorts.
     */
    cursor?: CohortWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cohorts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cohorts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cohorts.
     */
    distinct?: CohortScalarFieldEnum | CohortScalarFieldEnum[]
  }

  /**
   * Cohort create
   */
  export type CohortCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cohort
     */
    select?: CohortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cohort
     */
    omit?: CohortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortInclude<ExtArgs> | null
    /**
     * The data needed to create a Cohort.
     */
    data: XOR<CohortCreateInput, CohortUncheckedCreateInput>
  }

  /**
   * Cohort createMany
   */
  export type CohortCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cohorts.
     */
    data: CohortCreateManyInput | CohortCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cohort createManyAndReturn
   */
  export type CohortCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cohort
     */
    select?: CohortSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cohort
     */
    omit?: CohortOmit<ExtArgs> | null
    /**
     * The data used to create many Cohorts.
     */
    data: CohortCreateManyInput | CohortCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cohort update
   */
  export type CohortUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cohort
     */
    select?: CohortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cohort
     */
    omit?: CohortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortInclude<ExtArgs> | null
    /**
     * The data needed to update a Cohort.
     */
    data: XOR<CohortUpdateInput, CohortUncheckedUpdateInput>
    /**
     * Choose, which Cohort to update.
     */
    where: CohortWhereUniqueInput
  }

  /**
   * Cohort updateMany
   */
  export type CohortUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cohorts.
     */
    data: XOR<CohortUpdateManyMutationInput, CohortUncheckedUpdateManyInput>
    /**
     * Filter which Cohorts to update
     */
    where?: CohortWhereInput
    /**
     * Limit how many Cohorts to update.
     */
    limit?: number
  }

  /**
   * Cohort updateManyAndReturn
   */
  export type CohortUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cohort
     */
    select?: CohortSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cohort
     */
    omit?: CohortOmit<ExtArgs> | null
    /**
     * The data used to update Cohorts.
     */
    data: XOR<CohortUpdateManyMutationInput, CohortUncheckedUpdateManyInput>
    /**
     * Filter which Cohorts to update
     */
    where?: CohortWhereInput
    /**
     * Limit how many Cohorts to update.
     */
    limit?: number
  }

  /**
   * Cohort upsert
   */
  export type CohortUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cohort
     */
    select?: CohortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cohort
     */
    omit?: CohortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortInclude<ExtArgs> | null
    /**
     * The filter to search for the Cohort to update in case it exists.
     */
    where: CohortWhereUniqueInput
    /**
     * In case the Cohort found by the `where` argument doesn't exist, create a new Cohort with this data.
     */
    create: XOR<CohortCreateInput, CohortUncheckedCreateInput>
    /**
     * In case the Cohort was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CohortUpdateInput, CohortUncheckedUpdateInput>
  }

  /**
   * Cohort delete
   */
  export type CohortDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cohort
     */
    select?: CohortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cohort
     */
    omit?: CohortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortInclude<ExtArgs> | null
    /**
     * Filter which Cohort to delete.
     */
    where: CohortWhereUniqueInput
  }

  /**
   * Cohort deleteMany
   */
  export type CohortDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cohorts to delete
     */
    where?: CohortWhereInput
    /**
     * Limit how many Cohorts to delete.
     */
    limit?: number
  }

  /**
   * Cohort.students
   */
  export type Cohort$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CohortStudent
     */
    select?: CohortStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CohortStudent
     */
    omit?: CohortStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortStudentInclude<ExtArgs> | null
    where?: CohortStudentWhereInput
    orderBy?: CohortStudentOrderByWithRelationInput | CohortStudentOrderByWithRelationInput[]
    cursor?: CohortStudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CohortStudentScalarFieldEnum | CohortStudentScalarFieldEnum[]
  }

  /**
   * Cohort.tasks
   */
  export type Cohort$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Cohort.documents
   */
  export type Cohort$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Cohort without action
   */
  export type CohortDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cohort
     */
    select?: CohortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cohort
     */
    omit?: CohortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortInclude<ExtArgs> | null
  }


  /**
   * Model CohortStudent
   */

  export type AggregateCohortStudent = {
    _count: CohortStudentCountAggregateOutputType | null
    _min: CohortStudentMinAggregateOutputType | null
    _max: CohortStudentMaxAggregateOutputType | null
  }

  export type CohortStudentMinAggregateOutputType = {
    id: string | null
    cohortId: string | null
    studentId: string | null
    studentEmail: string | null
    studentName: string | null
    avatarUrl: string | null
    role: string | null
    joinedAt: Date | null
    status: string | null
  }

  export type CohortStudentMaxAggregateOutputType = {
    id: string | null
    cohortId: string | null
    studentId: string | null
    studentEmail: string | null
    studentName: string | null
    avatarUrl: string | null
    role: string | null
    joinedAt: Date | null
    status: string | null
  }

  export type CohortStudentCountAggregateOutputType = {
    id: number
    cohortId: number
    studentId: number
    studentEmail: number
    studentName: number
    avatarUrl: number
    role: number
    joinedAt: number
    status: number
    _all: number
  }


  export type CohortStudentMinAggregateInputType = {
    id?: true
    cohortId?: true
    studentId?: true
    studentEmail?: true
    studentName?: true
    avatarUrl?: true
    role?: true
    joinedAt?: true
    status?: true
  }

  export type CohortStudentMaxAggregateInputType = {
    id?: true
    cohortId?: true
    studentId?: true
    studentEmail?: true
    studentName?: true
    avatarUrl?: true
    role?: true
    joinedAt?: true
    status?: true
  }

  export type CohortStudentCountAggregateInputType = {
    id?: true
    cohortId?: true
    studentId?: true
    studentEmail?: true
    studentName?: true
    avatarUrl?: true
    role?: true
    joinedAt?: true
    status?: true
    _all?: true
  }

  export type CohortStudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CohortStudent to aggregate.
     */
    where?: CohortStudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CohortStudents to fetch.
     */
    orderBy?: CohortStudentOrderByWithRelationInput | CohortStudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CohortStudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CohortStudents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CohortStudents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CohortStudents
    **/
    _count?: true | CohortStudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CohortStudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CohortStudentMaxAggregateInputType
  }

  export type GetCohortStudentAggregateType<T extends CohortStudentAggregateArgs> = {
        [P in keyof T & keyof AggregateCohortStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCohortStudent[P]>
      : GetScalarType<T[P], AggregateCohortStudent[P]>
  }




  export type CohortStudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CohortStudentWhereInput
    orderBy?: CohortStudentOrderByWithAggregationInput | CohortStudentOrderByWithAggregationInput[]
    by: CohortStudentScalarFieldEnum[] | CohortStudentScalarFieldEnum
    having?: CohortStudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CohortStudentCountAggregateInputType | true
    _min?: CohortStudentMinAggregateInputType
    _max?: CohortStudentMaxAggregateInputType
  }

  export type CohortStudentGroupByOutputType = {
    id: string
    cohortId: string
    studentId: string
    studentEmail: string
    studentName: string
    avatarUrl: string | null
    role: string
    joinedAt: Date
    status: string
    _count: CohortStudentCountAggregateOutputType | null
    _min: CohortStudentMinAggregateOutputType | null
    _max: CohortStudentMaxAggregateOutputType | null
  }

  type GetCohortStudentGroupByPayload<T extends CohortStudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CohortStudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CohortStudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CohortStudentGroupByOutputType[P]>
            : GetScalarType<T[P], CohortStudentGroupByOutputType[P]>
        }
      >
    >


  export type CohortStudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cohortId?: boolean
    studentId?: boolean
    studentEmail?: boolean
    studentName?: boolean
    avatarUrl?: boolean
    role?: boolean
    joinedAt?: boolean
    status?: boolean
    cohort?: boolean | CohortDefaultArgs<ExtArgs>
    tasksSubmitted?: boolean | CohortStudent$tasksSubmittedArgs<ExtArgs>
    gamificationPoints?: boolean | CohortStudent$gamificationPointsArgs<ExtArgs>
    weeklyScores?: boolean | CohortStudent$weeklyScoresArgs<ExtArgs>
    _count?: boolean | CohortStudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cohortStudent"]>

  export type CohortStudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cohortId?: boolean
    studentId?: boolean
    studentEmail?: boolean
    studentName?: boolean
    avatarUrl?: boolean
    role?: boolean
    joinedAt?: boolean
    status?: boolean
    cohort?: boolean | CohortDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cohortStudent"]>

  export type CohortStudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cohortId?: boolean
    studentId?: boolean
    studentEmail?: boolean
    studentName?: boolean
    avatarUrl?: boolean
    role?: boolean
    joinedAt?: boolean
    status?: boolean
    cohort?: boolean | CohortDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cohortStudent"]>

  export type CohortStudentSelectScalar = {
    id?: boolean
    cohortId?: boolean
    studentId?: boolean
    studentEmail?: boolean
    studentName?: boolean
    avatarUrl?: boolean
    role?: boolean
    joinedAt?: boolean
    status?: boolean
  }

  export type CohortStudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cohortId" | "studentId" | "studentEmail" | "studentName" | "avatarUrl" | "role" | "joinedAt" | "status", ExtArgs["result"]["cohortStudent"]>
  export type CohortStudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cohort?: boolean | CohortDefaultArgs<ExtArgs>
    tasksSubmitted?: boolean | CohortStudent$tasksSubmittedArgs<ExtArgs>
    gamificationPoints?: boolean | CohortStudent$gamificationPointsArgs<ExtArgs>
    weeklyScores?: boolean | CohortStudent$weeklyScoresArgs<ExtArgs>
    _count?: boolean | CohortStudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CohortStudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cohort?: boolean | CohortDefaultArgs<ExtArgs>
  }
  export type CohortStudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cohort?: boolean | CohortDefaultArgs<ExtArgs>
  }

  export type $CohortStudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CohortStudent"
    objects: {
      cohort: Prisma.$CohortPayload<ExtArgs>
      tasksSubmitted: Prisma.$TaskSubmissionPayload<ExtArgs>[]
      gamificationPoints: Prisma.$GamificationPointPayload<ExtArgs>[]
      weeklyScores: Prisma.$WeeklyScorePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cohortId: string
      studentId: string
      studentEmail: string
      studentName: string
      avatarUrl: string | null
      role: string
      joinedAt: Date
      status: string
    }, ExtArgs["result"]["cohortStudent"]>
    composites: {}
  }

  type CohortStudentGetPayload<S extends boolean | null | undefined | CohortStudentDefaultArgs> = $Result.GetResult<Prisma.$CohortStudentPayload, S>

  type CohortStudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CohortStudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CohortStudentCountAggregateInputType | true
    }

  export interface CohortStudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CohortStudent'], meta: { name: 'CohortStudent' } }
    /**
     * Find zero or one CohortStudent that matches the filter.
     * @param {CohortStudentFindUniqueArgs} args - Arguments to find a CohortStudent
     * @example
     * // Get one CohortStudent
     * const cohortStudent = await prisma.cohortStudent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CohortStudentFindUniqueArgs>(args: SelectSubset<T, CohortStudentFindUniqueArgs<ExtArgs>>): Prisma__CohortStudentClient<$Result.GetResult<Prisma.$CohortStudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CohortStudent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CohortStudentFindUniqueOrThrowArgs} args - Arguments to find a CohortStudent
     * @example
     * // Get one CohortStudent
     * const cohortStudent = await prisma.cohortStudent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CohortStudentFindUniqueOrThrowArgs>(args: SelectSubset<T, CohortStudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CohortStudentClient<$Result.GetResult<Prisma.$CohortStudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CohortStudent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CohortStudentFindFirstArgs} args - Arguments to find a CohortStudent
     * @example
     * // Get one CohortStudent
     * const cohortStudent = await prisma.cohortStudent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CohortStudentFindFirstArgs>(args?: SelectSubset<T, CohortStudentFindFirstArgs<ExtArgs>>): Prisma__CohortStudentClient<$Result.GetResult<Prisma.$CohortStudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CohortStudent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CohortStudentFindFirstOrThrowArgs} args - Arguments to find a CohortStudent
     * @example
     * // Get one CohortStudent
     * const cohortStudent = await prisma.cohortStudent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CohortStudentFindFirstOrThrowArgs>(args?: SelectSubset<T, CohortStudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CohortStudentClient<$Result.GetResult<Prisma.$CohortStudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CohortStudents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CohortStudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CohortStudents
     * const cohortStudents = await prisma.cohortStudent.findMany()
     * 
     * // Get first 10 CohortStudents
     * const cohortStudents = await prisma.cohortStudent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cohortStudentWithIdOnly = await prisma.cohortStudent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CohortStudentFindManyArgs>(args?: SelectSubset<T, CohortStudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CohortStudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CohortStudent.
     * @param {CohortStudentCreateArgs} args - Arguments to create a CohortStudent.
     * @example
     * // Create one CohortStudent
     * const CohortStudent = await prisma.cohortStudent.create({
     *   data: {
     *     // ... data to create a CohortStudent
     *   }
     * })
     * 
     */
    create<T extends CohortStudentCreateArgs>(args: SelectSubset<T, CohortStudentCreateArgs<ExtArgs>>): Prisma__CohortStudentClient<$Result.GetResult<Prisma.$CohortStudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CohortStudents.
     * @param {CohortStudentCreateManyArgs} args - Arguments to create many CohortStudents.
     * @example
     * // Create many CohortStudents
     * const cohortStudent = await prisma.cohortStudent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CohortStudentCreateManyArgs>(args?: SelectSubset<T, CohortStudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CohortStudents and returns the data saved in the database.
     * @param {CohortStudentCreateManyAndReturnArgs} args - Arguments to create many CohortStudents.
     * @example
     * // Create many CohortStudents
     * const cohortStudent = await prisma.cohortStudent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CohortStudents and only return the `id`
     * const cohortStudentWithIdOnly = await prisma.cohortStudent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CohortStudentCreateManyAndReturnArgs>(args?: SelectSubset<T, CohortStudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CohortStudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CohortStudent.
     * @param {CohortStudentDeleteArgs} args - Arguments to delete one CohortStudent.
     * @example
     * // Delete one CohortStudent
     * const CohortStudent = await prisma.cohortStudent.delete({
     *   where: {
     *     // ... filter to delete one CohortStudent
     *   }
     * })
     * 
     */
    delete<T extends CohortStudentDeleteArgs>(args: SelectSubset<T, CohortStudentDeleteArgs<ExtArgs>>): Prisma__CohortStudentClient<$Result.GetResult<Prisma.$CohortStudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CohortStudent.
     * @param {CohortStudentUpdateArgs} args - Arguments to update one CohortStudent.
     * @example
     * // Update one CohortStudent
     * const cohortStudent = await prisma.cohortStudent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CohortStudentUpdateArgs>(args: SelectSubset<T, CohortStudentUpdateArgs<ExtArgs>>): Prisma__CohortStudentClient<$Result.GetResult<Prisma.$CohortStudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CohortStudents.
     * @param {CohortStudentDeleteManyArgs} args - Arguments to filter CohortStudents to delete.
     * @example
     * // Delete a few CohortStudents
     * const { count } = await prisma.cohortStudent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CohortStudentDeleteManyArgs>(args?: SelectSubset<T, CohortStudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CohortStudents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CohortStudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CohortStudents
     * const cohortStudent = await prisma.cohortStudent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CohortStudentUpdateManyArgs>(args: SelectSubset<T, CohortStudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CohortStudents and returns the data updated in the database.
     * @param {CohortStudentUpdateManyAndReturnArgs} args - Arguments to update many CohortStudents.
     * @example
     * // Update many CohortStudents
     * const cohortStudent = await prisma.cohortStudent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CohortStudents and only return the `id`
     * const cohortStudentWithIdOnly = await prisma.cohortStudent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CohortStudentUpdateManyAndReturnArgs>(args: SelectSubset<T, CohortStudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CohortStudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CohortStudent.
     * @param {CohortStudentUpsertArgs} args - Arguments to update or create a CohortStudent.
     * @example
     * // Update or create a CohortStudent
     * const cohortStudent = await prisma.cohortStudent.upsert({
     *   create: {
     *     // ... data to create a CohortStudent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CohortStudent we want to update
     *   }
     * })
     */
    upsert<T extends CohortStudentUpsertArgs>(args: SelectSubset<T, CohortStudentUpsertArgs<ExtArgs>>): Prisma__CohortStudentClient<$Result.GetResult<Prisma.$CohortStudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CohortStudents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CohortStudentCountArgs} args - Arguments to filter CohortStudents to count.
     * @example
     * // Count the number of CohortStudents
     * const count = await prisma.cohortStudent.count({
     *   where: {
     *     // ... the filter for the CohortStudents we want to count
     *   }
     * })
    **/
    count<T extends CohortStudentCountArgs>(
      args?: Subset<T, CohortStudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CohortStudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CohortStudent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CohortStudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CohortStudentAggregateArgs>(args: Subset<T, CohortStudentAggregateArgs>): Prisma.PrismaPromise<GetCohortStudentAggregateType<T>>

    /**
     * Group by CohortStudent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CohortStudentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CohortStudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CohortStudentGroupByArgs['orderBy'] }
        : { orderBy?: CohortStudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CohortStudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCohortStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CohortStudent model
   */
  readonly fields: CohortStudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CohortStudent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CohortStudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cohort<T extends CohortDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CohortDefaultArgs<ExtArgs>>): Prisma__CohortClient<$Result.GetResult<Prisma.$CohortPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tasksSubmitted<T extends CohortStudent$tasksSubmittedArgs<ExtArgs> = {}>(args?: Subset<T, CohortStudent$tasksSubmittedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gamificationPoints<T extends CohortStudent$gamificationPointsArgs<ExtArgs> = {}>(args?: Subset<T, CohortStudent$gamificationPointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamificationPointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    weeklyScores<T extends CohortStudent$weeklyScoresArgs<ExtArgs> = {}>(args?: Subset<T, CohortStudent$weeklyScoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CohortStudent model
   */
  interface CohortStudentFieldRefs {
    readonly id: FieldRef<"CohortStudent", 'String'>
    readonly cohortId: FieldRef<"CohortStudent", 'String'>
    readonly studentId: FieldRef<"CohortStudent", 'String'>
    readonly studentEmail: FieldRef<"CohortStudent", 'String'>
    readonly studentName: FieldRef<"CohortStudent", 'String'>
    readonly avatarUrl: FieldRef<"CohortStudent", 'String'>
    readonly role: FieldRef<"CohortStudent", 'String'>
    readonly joinedAt: FieldRef<"CohortStudent", 'DateTime'>
    readonly status: FieldRef<"CohortStudent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CohortStudent findUnique
   */
  export type CohortStudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CohortStudent
     */
    select?: CohortStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CohortStudent
     */
    omit?: CohortStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortStudentInclude<ExtArgs> | null
    /**
     * Filter, which CohortStudent to fetch.
     */
    where: CohortStudentWhereUniqueInput
  }

  /**
   * CohortStudent findUniqueOrThrow
   */
  export type CohortStudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CohortStudent
     */
    select?: CohortStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CohortStudent
     */
    omit?: CohortStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortStudentInclude<ExtArgs> | null
    /**
     * Filter, which CohortStudent to fetch.
     */
    where: CohortStudentWhereUniqueInput
  }

  /**
   * CohortStudent findFirst
   */
  export type CohortStudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CohortStudent
     */
    select?: CohortStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CohortStudent
     */
    omit?: CohortStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortStudentInclude<ExtArgs> | null
    /**
     * Filter, which CohortStudent to fetch.
     */
    where?: CohortStudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CohortStudents to fetch.
     */
    orderBy?: CohortStudentOrderByWithRelationInput | CohortStudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CohortStudents.
     */
    cursor?: CohortStudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CohortStudents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CohortStudents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CohortStudents.
     */
    distinct?: CohortStudentScalarFieldEnum | CohortStudentScalarFieldEnum[]
  }

  /**
   * CohortStudent findFirstOrThrow
   */
  export type CohortStudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CohortStudent
     */
    select?: CohortStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CohortStudent
     */
    omit?: CohortStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortStudentInclude<ExtArgs> | null
    /**
     * Filter, which CohortStudent to fetch.
     */
    where?: CohortStudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CohortStudents to fetch.
     */
    orderBy?: CohortStudentOrderByWithRelationInput | CohortStudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CohortStudents.
     */
    cursor?: CohortStudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CohortStudents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CohortStudents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CohortStudents.
     */
    distinct?: CohortStudentScalarFieldEnum | CohortStudentScalarFieldEnum[]
  }

  /**
   * CohortStudent findMany
   */
  export type CohortStudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CohortStudent
     */
    select?: CohortStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CohortStudent
     */
    omit?: CohortStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortStudentInclude<ExtArgs> | null
    /**
     * Filter, which CohortStudents to fetch.
     */
    where?: CohortStudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CohortStudents to fetch.
     */
    orderBy?: CohortStudentOrderByWithRelationInput | CohortStudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CohortStudents.
     */
    cursor?: CohortStudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CohortStudents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CohortStudents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CohortStudents.
     */
    distinct?: CohortStudentScalarFieldEnum | CohortStudentScalarFieldEnum[]
  }

  /**
   * CohortStudent create
   */
  export type CohortStudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CohortStudent
     */
    select?: CohortStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CohortStudent
     */
    omit?: CohortStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortStudentInclude<ExtArgs> | null
    /**
     * The data needed to create a CohortStudent.
     */
    data: XOR<CohortStudentCreateInput, CohortStudentUncheckedCreateInput>
  }

  /**
   * CohortStudent createMany
   */
  export type CohortStudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CohortStudents.
     */
    data: CohortStudentCreateManyInput | CohortStudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CohortStudent createManyAndReturn
   */
  export type CohortStudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CohortStudent
     */
    select?: CohortStudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CohortStudent
     */
    omit?: CohortStudentOmit<ExtArgs> | null
    /**
     * The data used to create many CohortStudents.
     */
    data: CohortStudentCreateManyInput | CohortStudentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortStudentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CohortStudent update
   */
  export type CohortStudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CohortStudent
     */
    select?: CohortStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CohortStudent
     */
    omit?: CohortStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortStudentInclude<ExtArgs> | null
    /**
     * The data needed to update a CohortStudent.
     */
    data: XOR<CohortStudentUpdateInput, CohortStudentUncheckedUpdateInput>
    /**
     * Choose, which CohortStudent to update.
     */
    where: CohortStudentWhereUniqueInput
  }

  /**
   * CohortStudent updateMany
   */
  export type CohortStudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CohortStudents.
     */
    data: XOR<CohortStudentUpdateManyMutationInput, CohortStudentUncheckedUpdateManyInput>
    /**
     * Filter which CohortStudents to update
     */
    where?: CohortStudentWhereInput
    /**
     * Limit how many CohortStudents to update.
     */
    limit?: number
  }

  /**
   * CohortStudent updateManyAndReturn
   */
  export type CohortStudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CohortStudent
     */
    select?: CohortStudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CohortStudent
     */
    omit?: CohortStudentOmit<ExtArgs> | null
    /**
     * The data used to update CohortStudents.
     */
    data: XOR<CohortStudentUpdateManyMutationInput, CohortStudentUncheckedUpdateManyInput>
    /**
     * Filter which CohortStudents to update
     */
    where?: CohortStudentWhereInput
    /**
     * Limit how many CohortStudents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortStudentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CohortStudent upsert
   */
  export type CohortStudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CohortStudent
     */
    select?: CohortStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CohortStudent
     */
    omit?: CohortStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortStudentInclude<ExtArgs> | null
    /**
     * The filter to search for the CohortStudent to update in case it exists.
     */
    where: CohortStudentWhereUniqueInput
    /**
     * In case the CohortStudent found by the `where` argument doesn't exist, create a new CohortStudent with this data.
     */
    create: XOR<CohortStudentCreateInput, CohortStudentUncheckedCreateInput>
    /**
     * In case the CohortStudent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CohortStudentUpdateInput, CohortStudentUncheckedUpdateInput>
  }

  /**
   * CohortStudent delete
   */
  export type CohortStudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CohortStudent
     */
    select?: CohortStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CohortStudent
     */
    omit?: CohortStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortStudentInclude<ExtArgs> | null
    /**
     * Filter which CohortStudent to delete.
     */
    where: CohortStudentWhereUniqueInput
  }

  /**
   * CohortStudent deleteMany
   */
  export type CohortStudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CohortStudents to delete
     */
    where?: CohortStudentWhereInput
    /**
     * Limit how many CohortStudents to delete.
     */
    limit?: number
  }

  /**
   * CohortStudent.tasksSubmitted
   */
  export type CohortStudent$tasksSubmittedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSubmission
     */
    select?: TaskSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskSubmission
     */
    omit?: TaskSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSubmissionInclude<ExtArgs> | null
    where?: TaskSubmissionWhereInput
    orderBy?: TaskSubmissionOrderByWithRelationInput | TaskSubmissionOrderByWithRelationInput[]
    cursor?: TaskSubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskSubmissionScalarFieldEnum | TaskSubmissionScalarFieldEnum[]
  }

  /**
   * CohortStudent.gamificationPoints
   */
  export type CohortStudent$gamificationPointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamificationPoint
     */
    select?: GamificationPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GamificationPoint
     */
    omit?: GamificationPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamificationPointInclude<ExtArgs> | null
    where?: GamificationPointWhereInput
    orderBy?: GamificationPointOrderByWithRelationInput | GamificationPointOrderByWithRelationInput[]
    cursor?: GamificationPointWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GamificationPointScalarFieldEnum | GamificationPointScalarFieldEnum[]
  }

  /**
   * CohortStudent.weeklyScores
   */
  export type CohortStudent$weeklyScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyScore
     */
    select?: WeeklyScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyScore
     */
    omit?: WeeklyScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyScoreInclude<ExtArgs> | null
    where?: WeeklyScoreWhereInput
    orderBy?: WeeklyScoreOrderByWithRelationInput | WeeklyScoreOrderByWithRelationInput[]
    cursor?: WeeklyScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeeklyScoreScalarFieldEnum | WeeklyScoreScalarFieldEnum[]
  }

  /**
   * CohortStudent without action
   */
  export type CohortStudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CohortStudent
     */
    select?: CohortStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CohortStudent
     */
    omit?: CohortStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CohortStudentInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    maxPoints: number | null
  }

  export type TaskSumAggregateOutputType = {
    maxPoints: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    cohortId: string | null
    title: string | null
    description: string | null
    type: string | null
    dueDate: Date | null
    maxPoints: number | null
    difficulty: string | null
    githubRequired: boolean | null
    prRequired: boolean | null
    requiresReview: boolean | null
    assignedBy: string | null
    assignedByName: string | null
    assignedByEmail: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    cohortId: string | null
    title: string | null
    description: string | null
    type: string | null
    dueDate: Date | null
    maxPoints: number | null
    difficulty: string | null
    githubRequired: boolean | null
    prRequired: boolean | null
    requiresReview: boolean | null
    assignedBy: string | null
    assignedByName: string | null
    assignedByEmail: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    cohortId: number
    title: number
    description: number
    type: number
    dueDate: number
    maxPoints: number
    difficulty: number
    skills: number
    githubRequired: number
    prRequired: number
    requiresReview: number
    assignedBy: number
    assignedByName: number
    assignedByEmail: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    maxPoints?: true
  }

  export type TaskSumAggregateInputType = {
    maxPoints?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    cohortId?: true
    title?: true
    description?: true
    type?: true
    dueDate?: true
    maxPoints?: true
    difficulty?: true
    githubRequired?: true
    prRequired?: true
    requiresReview?: true
    assignedBy?: true
    assignedByName?: true
    assignedByEmail?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    cohortId?: true
    title?: true
    description?: true
    type?: true
    dueDate?: true
    maxPoints?: true
    difficulty?: true
    githubRequired?: true
    prRequired?: true
    requiresReview?: true
    assignedBy?: true
    assignedByName?: true
    assignedByEmail?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    cohortId?: true
    title?: true
    description?: true
    type?: true
    dueDate?: true
    maxPoints?: true
    difficulty?: true
    skills?: true
    githubRequired?: true
    prRequired?: true
    requiresReview?: true
    assignedBy?: true
    assignedByName?: true
    assignedByEmail?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    cohortId: string
    title: string
    description: string
    type: string
    dueDate: Date | null
    maxPoints: number
    difficulty: string
    skills: string[]
    githubRequired: boolean
    prRequired: boolean
    requiresReview: boolean
    assignedBy: string
    assignedByName: string
    assignedByEmail: string
    createdAt: Date
    updatedAt: Date
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cohortId?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    dueDate?: boolean
    maxPoints?: boolean
    difficulty?: boolean
    skills?: boolean
    githubRequired?: boolean
    prRequired?: boolean
    requiresReview?: boolean
    assignedBy?: boolean
    assignedByName?: boolean
    assignedByEmail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cohort?: boolean | CohortDefaultArgs<ExtArgs>
    submissions?: boolean | Task$submissionsArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cohortId?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    dueDate?: boolean
    maxPoints?: boolean
    difficulty?: boolean
    skills?: boolean
    githubRequired?: boolean
    prRequired?: boolean
    requiresReview?: boolean
    assignedBy?: boolean
    assignedByName?: boolean
    assignedByEmail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cohort?: boolean | CohortDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cohortId?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    dueDate?: boolean
    maxPoints?: boolean
    difficulty?: boolean
    skills?: boolean
    githubRequired?: boolean
    prRequired?: boolean
    requiresReview?: boolean
    assignedBy?: boolean
    assignedByName?: boolean
    assignedByEmail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cohort?: boolean | CohortDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    cohortId?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    dueDate?: boolean
    maxPoints?: boolean
    difficulty?: boolean
    skills?: boolean
    githubRequired?: boolean
    prRequired?: boolean
    requiresReview?: boolean
    assignedBy?: boolean
    assignedByName?: boolean
    assignedByEmail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cohortId" | "title" | "description" | "type" | "dueDate" | "maxPoints" | "difficulty" | "skills" | "githubRequired" | "prRequired" | "requiresReview" | "assignedBy" | "assignedByName" | "assignedByEmail" | "createdAt" | "updatedAt", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cohort?: boolean | CohortDefaultArgs<ExtArgs>
    submissions?: boolean | Task$submissionsArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cohort?: boolean | CohortDefaultArgs<ExtArgs>
  }
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cohort?: boolean | CohortDefaultArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      cohort: Prisma.$CohortPayload<ExtArgs>
      submissions: Prisma.$TaskSubmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cohortId: string
      title: string
      description: string
      type: string
      dueDate: Date | null
      maxPoints: number
      difficulty: string
      skills: string[]
      githubRequired: boolean
      prRequired: boolean
      requiresReview: boolean
      assignedBy: string
      assignedByName: string
      assignedByEmail: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cohort<T extends CohortDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CohortDefaultArgs<ExtArgs>>): Prisma__CohortClient<$Result.GetResult<Prisma.$CohortPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    submissions<T extends Task$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, Task$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly cohortId: FieldRef<"Task", 'String'>
    readonly title: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly type: FieldRef<"Task", 'String'>
    readonly dueDate: FieldRef<"Task", 'DateTime'>
    readonly maxPoints: FieldRef<"Task", 'Int'>
    readonly difficulty: FieldRef<"Task", 'String'>
    readonly skills: FieldRef<"Task", 'String[]'>
    readonly githubRequired: FieldRef<"Task", 'Boolean'>
    readonly prRequired: FieldRef<"Task", 'Boolean'>
    readonly requiresReview: FieldRef<"Task", 'Boolean'>
    readonly assignedBy: FieldRef<"Task", 'String'>
    readonly assignedByName: FieldRef<"Task", 'String'>
    readonly assignedByEmail: FieldRef<"Task", 'String'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task.submissions
   */
  export type Task$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSubmission
     */
    select?: TaskSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskSubmission
     */
    omit?: TaskSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSubmissionInclude<ExtArgs> | null
    where?: TaskSubmissionWhereInput
    orderBy?: TaskSubmissionOrderByWithRelationInput | TaskSubmissionOrderByWithRelationInput[]
    cursor?: TaskSubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskSubmissionScalarFieldEnum | TaskSubmissionScalarFieldEnum[]
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model TaskSubmission
   */

  export type AggregateTaskSubmission = {
    _count: TaskSubmissionCountAggregateOutputType | null
    _avg: TaskSubmissionAvgAggregateOutputType | null
    _sum: TaskSubmissionSumAggregateOutputType | null
    _min: TaskSubmissionMinAggregateOutputType | null
    _max: TaskSubmissionMaxAggregateOutputType | null
  }

  export type TaskSubmissionAvgAggregateOutputType = {
    pointsEarned: number | null
  }

  export type TaskSubmissionSumAggregateOutputType = {
    pointsEarned: number | null
  }

  export type TaskSubmissionMinAggregateOutputType = {
    id: string | null
    taskId: string | null
    studentId: string | null
    title: string | null
    description: string | null
    content: string | null
    githubRepoUrl: string | null
    githubPrUrl: string | null
    githubBranch: string | null
    commitHash: string | null
    status: string | null
    pointsEarned: number | null
    feedback: string | null
    reviewedBy: string | null
    reviewedAt: Date | null
    submittedAt: Date | null
    updatedAt: Date | null
  }

  export type TaskSubmissionMaxAggregateOutputType = {
    id: string | null
    taskId: string | null
    studentId: string | null
    title: string | null
    description: string | null
    content: string | null
    githubRepoUrl: string | null
    githubPrUrl: string | null
    githubBranch: string | null
    commitHash: string | null
    status: string | null
    pointsEarned: number | null
    feedback: string | null
    reviewedBy: string | null
    reviewedAt: Date | null
    submittedAt: Date | null
    updatedAt: Date | null
  }

  export type TaskSubmissionCountAggregateOutputType = {
    id: number
    taskId: number
    studentId: number
    title: number
    description: number
    content: number
    githubRepoUrl: number
    githubPrUrl: number
    githubBranch: number
    commitHash: number
    attachments: number
    status: number
    pointsEarned: number
    feedback: number
    reviewedBy: number
    reviewedAt: number
    submittedAt: number
    updatedAt: number
    _all: number
  }


  export type TaskSubmissionAvgAggregateInputType = {
    pointsEarned?: true
  }

  export type TaskSubmissionSumAggregateInputType = {
    pointsEarned?: true
  }

  export type TaskSubmissionMinAggregateInputType = {
    id?: true
    taskId?: true
    studentId?: true
    title?: true
    description?: true
    content?: true
    githubRepoUrl?: true
    githubPrUrl?: true
    githubBranch?: true
    commitHash?: true
    status?: true
    pointsEarned?: true
    feedback?: true
    reviewedBy?: true
    reviewedAt?: true
    submittedAt?: true
    updatedAt?: true
  }

  export type TaskSubmissionMaxAggregateInputType = {
    id?: true
    taskId?: true
    studentId?: true
    title?: true
    description?: true
    content?: true
    githubRepoUrl?: true
    githubPrUrl?: true
    githubBranch?: true
    commitHash?: true
    status?: true
    pointsEarned?: true
    feedback?: true
    reviewedBy?: true
    reviewedAt?: true
    submittedAt?: true
    updatedAt?: true
  }

  export type TaskSubmissionCountAggregateInputType = {
    id?: true
    taskId?: true
    studentId?: true
    title?: true
    description?: true
    content?: true
    githubRepoUrl?: true
    githubPrUrl?: true
    githubBranch?: true
    commitHash?: true
    attachments?: true
    status?: true
    pointsEarned?: true
    feedback?: true
    reviewedBy?: true
    reviewedAt?: true
    submittedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TaskSubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskSubmission to aggregate.
     */
    where?: TaskSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskSubmissions to fetch.
     */
    orderBy?: TaskSubmissionOrderByWithRelationInput | TaskSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskSubmissions
    **/
    _count?: true | TaskSubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskSubmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSubmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskSubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskSubmissionMaxAggregateInputType
  }

  export type GetTaskSubmissionAggregateType<T extends TaskSubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskSubmission[P]>
      : GetScalarType<T[P], AggregateTaskSubmission[P]>
  }




  export type TaskSubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskSubmissionWhereInput
    orderBy?: TaskSubmissionOrderByWithAggregationInput | TaskSubmissionOrderByWithAggregationInput[]
    by: TaskSubmissionScalarFieldEnum[] | TaskSubmissionScalarFieldEnum
    having?: TaskSubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskSubmissionCountAggregateInputType | true
    _avg?: TaskSubmissionAvgAggregateInputType
    _sum?: TaskSubmissionSumAggregateInputType
    _min?: TaskSubmissionMinAggregateInputType
    _max?: TaskSubmissionMaxAggregateInputType
  }

  export type TaskSubmissionGroupByOutputType = {
    id: string
    taskId: string
    studentId: string
    title: string
    description: string
    content: string
    githubRepoUrl: string | null
    githubPrUrl: string | null
    githubBranch: string | null
    commitHash: string | null
    attachments: string[]
    status: string
    pointsEarned: number | null
    feedback: string | null
    reviewedBy: string | null
    reviewedAt: Date | null
    submittedAt: Date
    updatedAt: Date
    _count: TaskSubmissionCountAggregateOutputType | null
    _avg: TaskSubmissionAvgAggregateOutputType | null
    _sum: TaskSubmissionSumAggregateOutputType | null
    _min: TaskSubmissionMinAggregateOutputType | null
    _max: TaskSubmissionMaxAggregateOutputType | null
  }

  type GetTaskSubmissionGroupByPayload<T extends TaskSubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskSubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskSubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskSubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], TaskSubmissionGroupByOutputType[P]>
        }
      >
    >


  export type TaskSubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    studentId?: boolean
    title?: boolean
    description?: boolean
    content?: boolean
    githubRepoUrl?: boolean
    githubPrUrl?: boolean
    githubBranch?: boolean
    commitHash?: boolean
    attachments?: boolean
    status?: boolean
    pointsEarned?: boolean
    feedback?: boolean
    reviewedBy?: boolean
    reviewedAt?: boolean
    submittedAt?: boolean
    updatedAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    student?: boolean | CohortStudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskSubmission"]>

  export type TaskSubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    studentId?: boolean
    title?: boolean
    description?: boolean
    content?: boolean
    githubRepoUrl?: boolean
    githubPrUrl?: boolean
    githubBranch?: boolean
    commitHash?: boolean
    attachments?: boolean
    status?: boolean
    pointsEarned?: boolean
    feedback?: boolean
    reviewedBy?: boolean
    reviewedAt?: boolean
    submittedAt?: boolean
    updatedAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    student?: boolean | CohortStudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskSubmission"]>

  export type TaskSubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    studentId?: boolean
    title?: boolean
    description?: boolean
    content?: boolean
    githubRepoUrl?: boolean
    githubPrUrl?: boolean
    githubBranch?: boolean
    commitHash?: boolean
    attachments?: boolean
    status?: boolean
    pointsEarned?: boolean
    feedback?: boolean
    reviewedBy?: boolean
    reviewedAt?: boolean
    submittedAt?: boolean
    updatedAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    student?: boolean | CohortStudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskSubmission"]>

  export type TaskSubmissionSelectScalar = {
    id?: boolean
    taskId?: boolean
    studentId?: boolean
    title?: boolean
    description?: boolean
    content?: boolean
    githubRepoUrl?: boolean
    githubPrUrl?: boolean
    githubBranch?: boolean
    commitHash?: boolean
    attachments?: boolean
    status?: boolean
    pointsEarned?: boolean
    feedback?: boolean
    reviewedBy?: boolean
    reviewedAt?: boolean
    submittedAt?: boolean
    updatedAt?: boolean
  }

  export type TaskSubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taskId" | "studentId" | "title" | "description" | "content" | "githubRepoUrl" | "githubPrUrl" | "githubBranch" | "commitHash" | "attachments" | "status" | "pointsEarned" | "feedback" | "reviewedBy" | "reviewedAt" | "submittedAt" | "updatedAt", ExtArgs["result"]["taskSubmission"]>
  export type TaskSubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    student?: boolean | CohortStudentDefaultArgs<ExtArgs>
  }
  export type TaskSubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    student?: boolean | CohortStudentDefaultArgs<ExtArgs>
  }
  export type TaskSubmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    student?: boolean | CohortStudentDefaultArgs<ExtArgs>
  }

  export type $TaskSubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskSubmission"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
      student: Prisma.$CohortStudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      taskId: string
      studentId: string
      title: string
      description: string
      content: string
      githubRepoUrl: string | null
      githubPrUrl: string | null
      githubBranch: string | null
      commitHash: string | null
      attachments: string[]
      status: string
      pointsEarned: number | null
      feedback: string | null
      reviewedBy: string | null
      reviewedAt: Date | null
      submittedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["taskSubmission"]>
    composites: {}
  }

  type TaskSubmissionGetPayload<S extends boolean | null | undefined | TaskSubmissionDefaultArgs> = $Result.GetResult<Prisma.$TaskSubmissionPayload, S>

  type TaskSubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskSubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskSubmissionCountAggregateInputType | true
    }

  export interface TaskSubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskSubmission'], meta: { name: 'TaskSubmission' } }
    /**
     * Find zero or one TaskSubmission that matches the filter.
     * @param {TaskSubmissionFindUniqueArgs} args - Arguments to find a TaskSubmission
     * @example
     * // Get one TaskSubmission
     * const taskSubmission = await prisma.taskSubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskSubmissionFindUniqueArgs>(args: SelectSubset<T, TaskSubmissionFindUniqueArgs<ExtArgs>>): Prisma__TaskSubmissionClient<$Result.GetResult<Prisma.$TaskSubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaskSubmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskSubmissionFindUniqueOrThrowArgs} args - Arguments to find a TaskSubmission
     * @example
     * // Get one TaskSubmission
     * const taskSubmission = await prisma.taskSubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskSubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskSubmissionClient<$Result.GetResult<Prisma.$TaskSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskSubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskSubmissionFindFirstArgs} args - Arguments to find a TaskSubmission
     * @example
     * // Get one TaskSubmission
     * const taskSubmission = await prisma.taskSubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskSubmissionFindFirstArgs>(args?: SelectSubset<T, TaskSubmissionFindFirstArgs<ExtArgs>>): Prisma__TaskSubmissionClient<$Result.GetResult<Prisma.$TaskSubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskSubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskSubmissionFindFirstOrThrowArgs} args - Arguments to find a TaskSubmission
     * @example
     * // Get one TaskSubmission
     * const taskSubmission = await prisma.taskSubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskSubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskSubmissionClient<$Result.GetResult<Prisma.$TaskSubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaskSubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskSubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskSubmissions
     * const taskSubmissions = await prisma.taskSubmission.findMany()
     * 
     * // Get first 10 TaskSubmissions
     * const taskSubmissions = await prisma.taskSubmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskSubmissionWithIdOnly = await prisma.taskSubmission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskSubmissionFindManyArgs>(args?: SelectSubset<T, TaskSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaskSubmission.
     * @param {TaskSubmissionCreateArgs} args - Arguments to create a TaskSubmission.
     * @example
     * // Create one TaskSubmission
     * const TaskSubmission = await prisma.taskSubmission.create({
     *   data: {
     *     // ... data to create a TaskSubmission
     *   }
     * })
     * 
     */
    create<T extends TaskSubmissionCreateArgs>(args: SelectSubset<T, TaskSubmissionCreateArgs<ExtArgs>>): Prisma__TaskSubmissionClient<$Result.GetResult<Prisma.$TaskSubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaskSubmissions.
     * @param {TaskSubmissionCreateManyArgs} args - Arguments to create many TaskSubmissions.
     * @example
     * // Create many TaskSubmissions
     * const taskSubmission = await prisma.taskSubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskSubmissionCreateManyArgs>(args?: SelectSubset<T, TaskSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaskSubmissions and returns the data saved in the database.
     * @param {TaskSubmissionCreateManyAndReturnArgs} args - Arguments to create many TaskSubmissions.
     * @example
     * // Create many TaskSubmissions
     * const taskSubmission = await prisma.taskSubmission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaskSubmissions and only return the `id`
     * const taskSubmissionWithIdOnly = await prisma.taskSubmission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskSubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskSubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskSubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TaskSubmission.
     * @param {TaskSubmissionDeleteArgs} args - Arguments to delete one TaskSubmission.
     * @example
     * // Delete one TaskSubmission
     * const TaskSubmission = await prisma.taskSubmission.delete({
     *   where: {
     *     // ... filter to delete one TaskSubmission
     *   }
     * })
     * 
     */
    delete<T extends TaskSubmissionDeleteArgs>(args: SelectSubset<T, TaskSubmissionDeleteArgs<ExtArgs>>): Prisma__TaskSubmissionClient<$Result.GetResult<Prisma.$TaskSubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaskSubmission.
     * @param {TaskSubmissionUpdateArgs} args - Arguments to update one TaskSubmission.
     * @example
     * // Update one TaskSubmission
     * const taskSubmission = await prisma.taskSubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskSubmissionUpdateArgs>(args: SelectSubset<T, TaskSubmissionUpdateArgs<ExtArgs>>): Prisma__TaskSubmissionClient<$Result.GetResult<Prisma.$TaskSubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaskSubmissions.
     * @param {TaskSubmissionDeleteManyArgs} args - Arguments to filter TaskSubmissions to delete.
     * @example
     * // Delete a few TaskSubmissions
     * const { count } = await prisma.taskSubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskSubmissionDeleteManyArgs>(args?: SelectSubset<T, TaskSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskSubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskSubmissions
     * const taskSubmission = await prisma.taskSubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskSubmissionUpdateManyArgs>(args: SelectSubset<T, TaskSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskSubmissions and returns the data updated in the database.
     * @param {TaskSubmissionUpdateManyAndReturnArgs} args - Arguments to update many TaskSubmissions.
     * @example
     * // Update many TaskSubmissions
     * const taskSubmission = await prisma.taskSubmission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TaskSubmissions and only return the `id`
     * const taskSubmissionWithIdOnly = await prisma.taskSubmission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskSubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskSubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskSubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TaskSubmission.
     * @param {TaskSubmissionUpsertArgs} args - Arguments to update or create a TaskSubmission.
     * @example
     * // Update or create a TaskSubmission
     * const taskSubmission = await prisma.taskSubmission.upsert({
     *   create: {
     *     // ... data to create a TaskSubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskSubmission we want to update
     *   }
     * })
     */
    upsert<T extends TaskSubmissionUpsertArgs>(args: SelectSubset<T, TaskSubmissionUpsertArgs<ExtArgs>>): Prisma__TaskSubmissionClient<$Result.GetResult<Prisma.$TaskSubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaskSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskSubmissionCountArgs} args - Arguments to filter TaskSubmissions to count.
     * @example
     * // Count the number of TaskSubmissions
     * const count = await prisma.taskSubmission.count({
     *   where: {
     *     // ... the filter for the TaskSubmissions we want to count
     *   }
     * })
    **/
    count<T extends TaskSubmissionCountArgs>(
      args?: Subset<T, TaskSubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskSubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskSubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskSubmissionAggregateArgs>(args: Subset<T, TaskSubmissionAggregateArgs>): Prisma.PrismaPromise<GetTaskSubmissionAggregateType<T>>

    /**
     * Group by TaskSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskSubmissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskSubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskSubmissionGroupByArgs['orderBy'] }
        : { orderBy?: TaskSubmissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskSubmission model
   */
  readonly fields: TaskSubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskSubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskSubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends CohortStudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CohortStudentDefaultArgs<ExtArgs>>): Prisma__CohortStudentClient<$Result.GetResult<Prisma.$CohortStudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TaskSubmission model
   */
  interface TaskSubmissionFieldRefs {
    readonly id: FieldRef<"TaskSubmission", 'String'>
    readonly taskId: FieldRef<"TaskSubmission", 'String'>
    readonly studentId: FieldRef<"TaskSubmission", 'String'>
    readonly title: FieldRef<"TaskSubmission", 'String'>
    readonly description: FieldRef<"TaskSubmission", 'String'>
    readonly content: FieldRef<"TaskSubmission", 'String'>
    readonly githubRepoUrl: FieldRef<"TaskSubmission", 'String'>
    readonly githubPrUrl: FieldRef<"TaskSubmission", 'String'>
    readonly githubBranch: FieldRef<"TaskSubmission", 'String'>
    readonly commitHash: FieldRef<"TaskSubmission", 'String'>
    readonly attachments: FieldRef<"TaskSubmission", 'String[]'>
    readonly status: FieldRef<"TaskSubmission", 'String'>
    readonly pointsEarned: FieldRef<"TaskSubmission", 'Int'>
    readonly feedback: FieldRef<"TaskSubmission", 'String'>
    readonly reviewedBy: FieldRef<"TaskSubmission", 'String'>
    readonly reviewedAt: FieldRef<"TaskSubmission", 'DateTime'>
    readonly submittedAt: FieldRef<"TaskSubmission", 'DateTime'>
    readonly updatedAt: FieldRef<"TaskSubmission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TaskSubmission findUnique
   */
  export type TaskSubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSubmission
     */
    select?: TaskSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskSubmission
     */
    omit?: TaskSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which TaskSubmission to fetch.
     */
    where: TaskSubmissionWhereUniqueInput
  }

  /**
   * TaskSubmission findUniqueOrThrow
   */
  export type TaskSubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSubmission
     */
    select?: TaskSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskSubmission
     */
    omit?: TaskSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which TaskSubmission to fetch.
     */
    where: TaskSubmissionWhereUniqueInput
  }

  /**
   * TaskSubmission findFirst
   */
  export type TaskSubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSubmission
     */
    select?: TaskSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskSubmission
     */
    omit?: TaskSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which TaskSubmission to fetch.
     */
    where?: TaskSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskSubmissions to fetch.
     */
    orderBy?: TaskSubmissionOrderByWithRelationInput | TaskSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskSubmissions.
     */
    cursor?: TaskSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskSubmissions.
     */
    distinct?: TaskSubmissionScalarFieldEnum | TaskSubmissionScalarFieldEnum[]
  }

  /**
   * TaskSubmission findFirstOrThrow
   */
  export type TaskSubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSubmission
     */
    select?: TaskSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskSubmission
     */
    omit?: TaskSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which TaskSubmission to fetch.
     */
    where?: TaskSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskSubmissions to fetch.
     */
    orderBy?: TaskSubmissionOrderByWithRelationInput | TaskSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskSubmissions.
     */
    cursor?: TaskSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskSubmissions.
     */
    distinct?: TaskSubmissionScalarFieldEnum | TaskSubmissionScalarFieldEnum[]
  }

  /**
   * TaskSubmission findMany
   */
  export type TaskSubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSubmission
     */
    select?: TaskSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskSubmission
     */
    omit?: TaskSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which TaskSubmissions to fetch.
     */
    where?: TaskSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskSubmissions to fetch.
     */
    orderBy?: TaskSubmissionOrderByWithRelationInput | TaskSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskSubmissions.
     */
    cursor?: TaskSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskSubmissions.
     */
    distinct?: TaskSubmissionScalarFieldEnum | TaskSubmissionScalarFieldEnum[]
  }

  /**
   * TaskSubmission create
   */
  export type TaskSubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSubmission
     */
    select?: TaskSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskSubmission
     */
    omit?: TaskSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskSubmission.
     */
    data: XOR<TaskSubmissionCreateInput, TaskSubmissionUncheckedCreateInput>
  }

  /**
   * TaskSubmission createMany
   */
  export type TaskSubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskSubmissions.
     */
    data: TaskSubmissionCreateManyInput | TaskSubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskSubmission createManyAndReturn
   */
  export type TaskSubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSubmission
     */
    select?: TaskSubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskSubmission
     */
    omit?: TaskSubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many TaskSubmissions.
     */
    data: TaskSubmissionCreateManyInput | TaskSubmissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskSubmission update
   */
  export type TaskSubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSubmission
     */
    select?: TaskSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskSubmission
     */
    omit?: TaskSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskSubmission.
     */
    data: XOR<TaskSubmissionUpdateInput, TaskSubmissionUncheckedUpdateInput>
    /**
     * Choose, which TaskSubmission to update.
     */
    where: TaskSubmissionWhereUniqueInput
  }

  /**
   * TaskSubmission updateMany
   */
  export type TaskSubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskSubmissions.
     */
    data: XOR<TaskSubmissionUpdateManyMutationInput, TaskSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which TaskSubmissions to update
     */
    where?: TaskSubmissionWhereInput
    /**
     * Limit how many TaskSubmissions to update.
     */
    limit?: number
  }

  /**
   * TaskSubmission updateManyAndReturn
   */
  export type TaskSubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSubmission
     */
    select?: TaskSubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskSubmission
     */
    omit?: TaskSubmissionOmit<ExtArgs> | null
    /**
     * The data used to update TaskSubmissions.
     */
    data: XOR<TaskSubmissionUpdateManyMutationInput, TaskSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which TaskSubmissions to update
     */
    where?: TaskSubmissionWhereInput
    /**
     * Limit how many TaskSubmissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSubmissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskSubmission upsert
   */
  export type TaskSubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSubmission
     */
    select?: TaskSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskSubmission
     */
    omit?: TaskSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskSubmission to update in case it exists.
     */
    where: TaskSubmissionWhereUniqueInput
    /**
     * In case the TaskSubmission found by the `where` argument doesn't exist, create a new TaskSubmission with this data.
     */
    create: XOR<TaskSubmissionCreateInput, TaskSubmissionUncheckedCreateInput>
    /**
     * In case the TaskSubmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskSubmissionUpdateInput, TaskSubmissionUncheckedUpdateInput>
  }

  /**
   * TaskSubmission delete
   */
  export type TaskSubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSubmission
     */
    select?: TaskSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskSubmission
     */
    omit?: TaskSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSubmissionInclude<ExtArgs> | null
    /**
     * Filter which TaskSubmission to delete.
     */
    where: TaskSubmissionWhereUniqueInput
  }

  /**
   * TaskSubmission deleteMany
   */
  export type TaskSubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskSubmissions to delete
     */
    where?: TaskSubmissionWhereInput
    /**
     * Limit how many TaskSubmissions to delete.
     */
    limit?: number
  }

  /**
   * TaskSubmission without action
   */
  export type TaskSubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskSubmission
     */
    select?: TaskSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskSubmission
     */
    omit?: TaskSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskSubmissionInclude<ExtArgs> | null
  }


  /**
   * Model GitHubRepository
   */

  export type AggregateGitHubRepository = {
    _count: GitHubRepositoryCountAggregateOutputType | null
    _min: GitHubRepositoryMinAggregateOutputType | null
    _max: GitHubRepositoryMaxAggregateOutputType | null
  }

  export type GitHubRepositoryMinAggregateOutputType = {
    id: string | null
    cohortId: string | null
    name: string | null
    url: string | null
    description: string | null
    type: string | null
    isActive: boolean | null
    addedBy: string | null
    addedByName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GitHubRepositoryMaxAggregateOutputType = {
    id: string | null
    cohortId: string | null
    name: string | null
    url: string | null
    description: string | null
    type: string | null
    isActive: boolean | null
    addedBy: string | null
    addedByName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GitHubRepositoryCountAggregateOutputType = {
    id: number
    cohortId: number
    name: number
    url: number
    description: number
    type: number
    isActive: number
    addedBy: number
    addedByName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GitHubRepositoryMinAggregateInputType = {
    id?: true
    cohortId?: true
    name?: true
    url?: true
    description?: true
    type?: true
    isActive?: true
    addedBy?: true
    addedByName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GitHubRepositoryMaxAggregateInputType = {
    id?: true
    cohortId?: true
    name?: true
    url?: true
    description?: true
    type?: true
    isActive?: true
    addedBy?: true
    addedByName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GitHubRepositoryCountAggregateInputType = {
    id?: true
    cohortId?: true
    name?: true
    url?: true
    description?: true
    type?: true
    isActive?: true
    addedBy?: true
    addedByName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GitHubRepositoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GitHubRepository to aggregate.
     */
    where?: GitHubRepositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GitHubRepositories to fetch.
     */
    orderBy?: GitHubRepositoryOrderByWithRelationInput | GitHubRepositoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GitHubRepositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GitHubRepositories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GitHubRepositories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GitHubRepositories
    **/
    _count?: true | GitHubRepositoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GitHubRepositoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GitHubRepositoryMaxAggregateInputType
  }

  export type GetGitHubRepositoryAggregateType<T extends GitHubRepositoryAggregateArgs> = {
        [P in keyof T & keyof AggregateGitHubRepository]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGitHubRepository[P]>
      : GetScalarType<T[P], AggregateGitHubRepository[P]>
  }




  export type GitHubRepositoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GitHubRepositoryWhereInput
    orderBy?: GitHubRepositoryOrderByWithAggregationInput | GitHubRepositoryOrderByWithAggregationInput[]
    by: GitHubRepositoryScalarFieldEnum[] | GitHubRepositoryScalarFieldEnum
    having?: GitHubRepositoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GitHubRepositoryCountAggregateInputType | true
    _min?: GitHubRepositoryMinAggregateInputType
    _max?: GitHubRepositoryMaxAggregateInputType
  }

  export type GitHubRepositoryGroupByOutputType = {
    id: string
    cohortId: string | null
    name: string
    url: string
    description: string | null
    type: string
    isActive: boolean
    addedBy: string
    addedByName: string
    createdAt: Date
    updatedAt: Date
    _count: GitHubRepositoryCountAggregateOutputType | null
    _min: GitHubRepositoryMinAggregateOutputType | null
    _max: GitHubRepositoryMaxAggregateOutputType | null
  }

  type GetGitHubRepositoryGroupByPayload<T extends GitHubRepositoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GitHubRepositoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GitHubRepositoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GitHubRepositoryGroupByOutputType[P]>
            : GetScalarType<T[P], GitHubRepositoryGroupByOutputType[P]>
        }
      >
    >


  export type GitHubRepositorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cohortId?: boolean
    name?: boolean
    url?: boolean
    description?: boolean
    type?: boolean
    isActive?: boolean
    addedBy?: boolean
    addedByName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["gitHubRepository"]>

  export type GitHubRepositorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cohortId?: boolean
    name?: boolean
    url?: boolean
    description?: boolean
    type?: boolean
    isActive?: boolean
    addedBy?: boolean
    addedByName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["gitHubRepository"]>

  export type GitHubRepositorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cohortId?: boolean
    name?: boolean
    url?: boolean
    description?: boolean
    type?: boolean
    isActive?: boolean
    addedBy?: boolean
    addedByName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["gitHubRepository"]>

  export type GitHubRepositorySelectScalar = {
    id?: boolean
    cohortId?: boolean
    name?: boolean
    url?: boolean
    description?: boolean
    type?: boolean
    isActive?: boolean
    addedBy?: boolean
    addedByName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GitHubRepositoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cohortId" | "name" | "url" | "description" | "type" | "isActive" | "addedBy" | "addedByName" | "createdAt" | "updatedAt", ExtArgs["result"]["gitHubRepository"]>

  export type $GitHubRepositoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GitHubRepository"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cohortId: string | null
      name: string
      url: string
      description: string | null
      type: string
      isActive: boolean
      addedBy: string
      addedByName: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["gitHubRepository"]>
    composites: {}
  }

  type GitHubRepositoryGetPayload<S extends boolean | null | undefined | GitHubRepositoryDefaultArgs> = $Result.GetResult<Prisma.$GitHubRepositoryPayload, S>

  type GitHubRepositoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GitHubRepositoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GitHubRepositoryCountAggregateInputType | true
    }

  export interface GitHubRepositoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GitHubRepository'], meta: { name: 'GitHubRepository' } }
    /**
     * Find zero or one GitHubRepository that matches the filter.
     * @param {GitHubRepositoryFindUniqueArgs} args - Arguments to find a GitHubRepository
     * @example
     * // Get one GitHubRepository
     * const gitHubRepository = await prisma.gitHubRepository.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GitHubRepositoryFindUniqueArgs>(args: SelectSubset<T, GitHubRepositoryFindUniqueArgs<ExtArgs>>): Prisma__GitHubRepositoryClient<$Result.GetResult<Prisma.$GitHubRepositoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GitHubRepository that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GitHubRepositoryFindUniqueOrThrowArgs} args - Arguments to find a GitHubRepository
     * @example
     * // Get one GitHubRepository
     * const gitHubRepository = await prisma.gitHubRepository.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GitHubRepositoryFindUniqueOrThrowArgs>(args: SelectSubset<T, GitHubRepositoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GitHubRepositoryClient<$Result.GetResult<Prisma.$GitHubRepositoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GitHubRepository that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitHubRepositoryFindFirstArgs} args - Arguments to find a GitHubRepository
     * @example
     * // Get one GitHubRepository
     * const gitHubRepository = await prisma.gitHubRepository.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GitHubRepositoryFindFirstArgs>(args?: SelectSubset<T, GitHubRepositoryFindFirstArgs<ExtArgs>>): Prisma__GitHubRepositoryClient<$Result.GetResult<Prisma.$GitHubRepositoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GitHubRepository that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitHubRepositoryFindFirstOrThrowArgs} args - Arguments to find a GitHubRepository
     * @example
     * // Get one GitHubRepository
     * const gitHubRepository = await prisma.gitHubRepository.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GitHubRepositoryFindFirstOrThrowArgs>(args?: SelectSubset<T, GitHubRepositoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__GitHubRepositoryClient<$Result.GetResult<Prisma.$GitHubRepositoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GitHubRepositories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitHubRepositoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GitHubRepositories
     * const gitHubRepositories = await prisma.gitHubRepository.findMany()
     * 
     * // Get first 10 GitHubRepositories
     * const gitHubRepositories = await prisma.gitHubRepository.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gitHubRepositoryWithIdOnly = await prisma.gitHubRepository.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GitHubRepositoryFindManyArgs>(args?: SelectSubset<T, GitHubRepositoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GitHubRepositoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GitHubRepository.
     * @param {GitHubRepositoryCreateArgs} args - Arguments to create a GitHubRepository.
     * @example
     * // Create one GitHubRepository
     * const GitHubRepository = await prisma.gitHubRepository.create({
     *   data: {
     *     // ... data to create a GitHubRepository
     *   }
     * })
     * 
     */
    create<T extends GitHubRepositoryCreateArgs>(args: SelectSubset<T, GitHubRepositoryCreateArgs<ExtArgs>>): Prisma__GitHubRepositoryClient<$Result.GetResult<Prisma.$GitHubRepositoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GitHubRepositories.
     * @param {GitHubRepositoryCreateManyArgs} args - Arguments to create many GitHubRepositories.
     * @example
     * // Create many GitHubRepositories
     * const gitHubRepository = await prisma.gitHubRepository.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GitHubRepositoryCreateManyArgs>(args?: SelectSubset<T, GitHubRepositoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GitHubRepositories and returns the data saved in the database.
     * @param {GitHubRepositoryCreateManyAndReturnArgs} args - Arguments to create many GitHubRepositories.
     * @example
     * // Create many GitHubRepositories
     * const gitHubRepository = await prisma.gitHubRepository.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GitHubRepositories and only return the `id`
     * const gitHubRepositoryWithIdOnly = await prisma.gitHubRepository.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GitHubRepositoryCreateManyAndReturnArgs>(args?: SelectSubset<T, GitHubRepositoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GitHubRepositoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GitHubRepository.
     * @param {GitHubRepositoryDeleteArgs} args - Arguments to delete one GitHubRepository.
     * @example
     * // Delete one GitHubRepository
     * const GitHubRepository = await prisma.gitHubRepository.delete({
     *   where: {
     *     // ... filter to delete one GitHubRepository
     *   }
     * })
     * 
     */
    delete<T extends GitHubRepositoryDeleteArgs>(args: SelectSubset<T, GitHubRepositoryDeleteArgs<ExtArgs>>): Prisma__GitHubRepositoryClient<$Result.GetResult<Prisma.$GitHubRepositoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GitHubRepository.
     * @param {GitHubRepositoryUpdateArgs} args - Arguments to update one GitHubRepository.
     * @example
     * // Update one GitHubRepository
     * const gitHubRepository = await prisma.gitHubRepository.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GitHubRepositoryUpdateArgs>(args: SelectSubset<T, GitHubRepositoryUpdateArgs<ExtArgs>>): Prisma__GitHubRepositoryClient<$Result.GetResult<Prisma.$GitHubRepositoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GitHubRepositories.
     * @param {GitHubRepositoryDeleteManyArgs} args - Arguments to filter GitHubRepositories to delete.
     * @example
     * // Delete a few GitHubRepositories
     * const { count } = await prisma.gitHubRepository.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GitHubRepositoryDeleteManyArgs>(args?: SelectSubset<T, GitHubRepositoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GitHubRepositories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitHubRepositoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GitHubRepositories
     * const gitHubRepository = await prisma.gitHubRepository.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GitHubRepositoryUpdateManyArgs>(args: SelectSubset<T, GitHubRepositoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GitHubRepositories and returns the data updated in the database.
     * @param {GitHubRepositoryUpdateManyAndReturnArgs} args - Arguments to update many GitHubRepositories.
     * @example
     * // Update many GitHubRepositories
     * const gitHubRepository = await prisma.gitHubRepository.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GitHubRepositories and only return the `id`
     * const gitHubRepositoryWithIdOnly = await prisma.gitHubRepository.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GitHubRepositoryUpdateManyAndReturnArgs>(args: SelectSubset<T, GitHubRepositoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GitHubRepositoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GitHubRepository.
     * @param {GitHubRepositoryUpsertArgs} args - Arguments to update or create a GitHubRepository.
     * @example
     * // Update or create a GitHubRepository
     * const gitHubRepository = await prisma.gitHubRepository.upsert({
     *   create: {
     *     // ... data to create a GitHubRepository
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GitHubRepository we want to update
     *   }
     * })
     */
    upsert<T extends GitHubRepositoryUpsertArgs>(args: SelectSubset<T, GitHubRepositoryUpsertArgs<ExtArgs>>): Prisma__GitHubRepositoryClient<$Result.GetResult<Prisma.$GitHubRepositoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GitHubRepositories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitHubRepositoryCountArgs} args - Arguments to filter GitHubRepositories to count.
     * @example
     * // Count the number of GitHubRepositories
     * const count = await prisma.gitHubRepository.count({
     *   where: {
     *     // ... the filter for the GitHubRepositories we want to count
     *   }
     * })
    **/
    count<T extends GitHubRepositoryCountArgs>(
      args?: Subset<T, GitHubRepositoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GitHubRepositoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GitHubRepository.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitHubRepositoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GitHubRepositoryAggregateArgs>(args: Subset<T, GitHubRepositoryAggregateArgs>): Prisma.PrismaPromise<GetGitHubRepositoryAggregateType<T>>

    /**
     * Group by GitHubRepository.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitHubRepositoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GitHubRepositoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GitHubRepositoryGroupByArgs['orderBy'] }
        : { orderBy?: GitHubRepositoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GitHubRepositoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGitHubRepositoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GitHubRepository model
   */
  readonly fields: GitHubRepositoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GitHubRepository.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GitHubRepositoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GitHubRepository model
   */
  interface GitHubRepositoryFieldRefs {
    readonly id: FieldRef<"GitHubRepository", 'String'>
    readonly cohortId: FieldRef<"GitHubRepository", 'String'>
    readonly name: FieldRef<"GitHubRepository", 'String'>
    readonly url: FieldRef<"GitHubRepository", 'String'>
    readonly description: FieldRef<"GitHubRepository", 'String'>
    readonly type: FieldRef<"GitHubRepository", 'String'>
    readonly isActive: FieldRef<"GitHubRepository", 'Boolean'>
    readonly addedBy: FieldRef<"GitHubRepository", 'String'>
    readonly addedByName: FieldRef<"GitHubRepository", 'String'>
    readonly createdAt: FieldRef<"GitHubRepository", 'DateTime'>
    readonly updatedAt: FieldRef<"GitHubRepository", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GitHubRepository findUnique
   */
  export type GitHubRepositoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubRepository
     */
    select?: GitHubRepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubRepository
     */
    omit?: GitHubRepositoryOmit<ExtArgs> | null
    /**
     * Filter, which GitHubRepository to fetch.
     */
    where: GitHubRepositoryWhereUniqueInput
  }

  /**
   * GitHubRepository findUniqueOrThrow
   */
  export type GitHubRepositoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubRepository
     */
    select?: GitHubRepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubRepository
     */
    omit?: GitHubRepositoryOmit<ExtArgs> | null
    /**
     * Filter, which GitHubRepository to fetch.
     */
    where: GitHubRepositoryWhereUniqueInput
  }

  /**
   * GitHubRepository findFirst
   */
  export type GitHubRepositoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubRepository
     */
    select?: GitHubRepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubRepository
     */
    omit?: GitHubRepositoryOmit<ExtArgs> | null
    /**
     * Filter, which GitHubRepository to fetch.
     */
    where?: GitHubRepositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GitHubRepositories to fetch.
     */
    orderBy?: GitHubRepositoryOrderByWithRelationInput | GitHubRepositoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GitHubRepositories.
     */
    cursor?: GitHubRepositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GitHubRepositories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GitHubRepositories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GitHubRepositories.
     */
    distinct?: GitHubRepositoryScalarFieldEnum | GitHubRepositoryScalarFieldEnum[]
  }

  /**
   * GitHubRepository findFirstOrThrow
   */
  export type GitHubRepositoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubRepository
     */
    select?: GitHubRepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubRepository
     */
    omit?: GitHubRepositoryOmit<ExtArgs> | null
    /**
     * Filter, which GitHubRepository to fetch.
     */
    where?: GitHubRepositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GitHubRepositories to fetch.
     */
    orderBy?: GitHubRepositoryOrderByWithRelationInput | GitHubRepositoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GitHubRepositories.
     */
    cursor?: GitHubRepositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GitHubRepositories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GitHubRepositories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GitHubRepositories.
     */
    distinct?: GitHubRepositoryScalarFieldEnum | GitHubRepositoryScalarFieldEnum[]
  }

  /**
   * GitHubRepository findMany
   */
  export type GitHubRepositoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubRepository
     */
    select?: GitHubRepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubRepository
     */
    omit?: GitHubRepositoryOmit<ExtArgs> | null
    /**
     * Filter, which GitHubRepositories to fetch.
     */
    where?: GitHubRepositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GitHubRepositories to fetch.
     */
    orderBy?: GitHubRepositoryOrderByWithRelationInput | GitHubRepositoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GitHubRepositories.
     */
    cursor?: GitHubRepositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GitHubRepositories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GitHubRepositories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GitHubRepositories.
     */
    distinct?: GitHubRepositoryScalarFieldEnum | GitHubRepositoryScalarFieldEnum[]
  }

  /**
   * GitHubRepository create
   */
  export type GitHubRepositoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubRepository
     */
    select?: GitHubRepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubRepository
     */
    omit?: GitHubRepositoryOmit<ExtArgs> | null
    /**
     * The data needed to create a GitHubRepository.
     */
    data: XOR<GitHubRepositoryCreateInput, GitHubRepositoryUncheckedCreateInput>
  }

  /**
   * GitHubRepository createMany
   */
  export type GitHubRepositoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GitHubRepositories.
     */
    data: GitHubRepositoryCreateManyInput | GitHubRepositoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GitHubRepository createManyAndReturn
   */
  export type GitHubRepositoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubRepository
     */
    select?: GitHubRepositorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubRepository
     */
    omit?: GitHubRepositoryOmit<ExtArgs> | null
    /**
     * The data used to create many GitHubRepositories.
     */
    data: GitHubRepositoryCreateManyInput | GitHubRepositoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GitHubRepository update
   */
  export type GitHubRepositoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubRepository
     */
    select?: GitHubRepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubRepository
     */
    omit?: GitHubRepositoryOmit<ExtArgs> | null
    /**
     * The data needed to update a GitHubRepository.
     */
    data: XOR<GitHubRepositoryUpdateInput, GitHubRepositoryUncheckedUpdateInput>
    /**
     * Choose, which GitHubRepository to update.
     */
    where: GitHubRepositoryWhereUniqueInput
  }

  /**
   * GitHubRepository updateMany
   */
  export type GitHubRepositoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GitHubRepositories.
     */
    data: XOR<GitHubRepositoryUpdateManyMutationInput, GitHubRepositoryUncheckedUpdateManyInput>
    /**
     * Filter which GitHubRepositories to update
     */
    where?: GitHubRepositoryWhereInput
    /**
     * Limit how many GitHubRepositories to update.
     */
    limit?: number
  }

  /**
   * GitHubRepository updateManyAndReturn
   */
  export type GitHubRepositoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubRepository
     */
    select?: GitHubRepositorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubRepository
     */
    omit?: GitHubRepositoryOmit<ExtArgs> | null
    /**
     * The data used to update GitHubRepositories.
     */
    data: XOR<GitHubRepositoryUpdateManyMutationInput, GitHubRepositoryUncheckedUpdateManyInput>
    /**
     * Filter which GitHubRepositories to update
     */
    where?: GitHubRepositoryWhereInput
    /**
     * Limit how many GitHubRepositories to update.
     */
    limit?: number
  }

  /**
   * GitHubRepository upsert
   */
  export type GitHubRepositoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubRepository
     */
    select?: GitHubRepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubRepository
     */
    omit?: GitHubRepositoryOmit<ExtArgs> | null
    /**
     * The filter to search for the GitHubRepository to update in case it exists.
     */
    where: GitHubRepositoryWhereUniqueInput
    /**
     * In case the GitHubRepository found by the `where` argument doesn't exist, create a new GitHubRepository with this data.
     */
    create: XOR<GitHubRepositoryCreateInput, GitHubRepositoryUncheckedCreateInput>
    /**
     * In case the GitHubRepository was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GitHubRepositoryUpdateInput, GitHubRepositoryUncheckedUpdateInput>
  }

  /**
   * GitHubRepository delete
   */
  export type GitHubRepositoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubRepository
     */
    select?: GitHubRepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubRepository
     */
    omit?: GitHubRepositoryOmit<ExtArgs> | null
    /**
     * Filter which GitHubRepository to delete.
     */
    where: GitHubRepositoryWhereUniqueInput
  }

  /**
   * GitHubRepository deleteMany
   */
  export type GitHubRepositoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GitHubRepositories to delete
     */
    where?: GitHubRepositoryWhereInput
    /**
     * Limit how many GitHubRepositories to delete.
     */
    limit?: number
  }

  /**
   * GitHubRepository without action
   */
  export type GitHubRepositoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitHubRepository
     */
    select?: GitHubRepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitHubRepository
     */
    omit?: GitHubRepositoryOmit<ExtArgs> | null
  }


  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentAvgAggregateOutputType = {
    fileSize: number | null
  }

  export type DocumentSumAggregateOutputType = {
    fileSize: number | null
  }

  export type DocumentMinAggregateOutputType = {
    id: string | null
    cohortId: string | null
    title: string | null
    description: string | null
    fileUrl: string | null
    fileType: string | null
    fileSize: number | null
    category: string | null
    isIndexed: boolean | null
    vectorStoreId: string | null
    uploadedBy: string | null
    uploadedByName: string | null
    isPublic: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: string | null
    cohortId: string | null
    title: string | null
    description: string | null
    fileUrl: string | null
    fileType: string | null
    fileSize: number | null
    category: string | null
    isIndexed: boolean | null
    vectorStoreId: string | null
    uploadedBy: string | null
    uploadedByName: string | null
    isPublic: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    cohortId: number
    title: number
    description: number
    fileUrl: number
    fileType: number
    fileSize: number
    category: number
    isIndexed: number
    vectorStoreId: number
    keywords: number
    uploadedBy: number
    uploadedByName: number
    isPublic: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DocumentAvgAggregateInputType = {
    fileSize?: true
  }

  export type DocumentSumAggregateInputType = {
    fileSize?: true
  }

  export type DocumentMinAggregateInputType = {
    id?: true
    cohortId?: true
    title?: true
    description?: true
    fileUrl?: true
    fileType?: true
    fileSize?: true
    category?: true
    isIndexed?: true
    vectorStoreId?: true
    uploadedBy?: true
    uploadedByName?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    cohortId?: true
    title?: true
    description?: true
    fileUrl?: true
    fileType?: true
    fileSize?: true
    category?: true
    isIndexed?: true
    vectorStoreId?: true
    uploadedBy?: true
    uploadedByName?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    cohortId?: true
    title?: true
    description?: true
    fileUrl?: true
    fileType?: true
    fileSize?: true
    category?: true
    isIndexed?: true
    vectorStoreId?: true
    keywords?: true
    uploadedBy?: true
    uploadedByName?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _avg?: DocumentAvgAggregateInputType
    _sum?: DocumentSumAggregateInputType
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: string
    cohortId: string
    title: string
    description: string | null
    fileUrl: string
    fileType: string
    fileSize: number
    category: string
    isIndexed: boolean
    vectorStoreId: string | null
    keywords: string[]
    uploadedBy: string
    uploadedByName: string
    isPublic: boolean
    createdAt: Date
    updatedAt: Date
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cohortId?: boolean
    title?: boolean
    description?: boolean
    fileUrl?: boolean
    fileType?: boolean
    fileSize?: boolean
    category?: boolean
    isIndexed?: boolean
    vectorStoreId?: boolean
    keywords?: boolean
    uploadedBy?: boolean
    uploadedByName?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cohort?: boolean | CohortDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cohortId?: boolean
    title?: boolean
    description?: boolean
    fileUrl?: boolean
    fileType?: boolean
    fileSize?: boolean
    category?: boolean
    isIndexed?: boolean
    vectorStoreId?: boolean
    keywords?: boolean
    uploadedBy?: boolean
    uploadedByName?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cohort?: boolean | CohortDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cohortId?: boolean
    title?: boolean
    description?: boolean
    fileUrl?: boolean
    fileType?: boolean
    fileSize?: boolean
    category?: boolean
    isIndexed?: boolean
    vectorStoreId?: boolean
    keywords?: boolean
    uploadedBy?: boolean
    uploadedByName?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cohort?: boolean | CohortDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectScalar = {
    id?: boolean
    cohortId?: boolean
    title?: boolean
    description?: boolean
    fileUrl?: boolean
    fileType?: boolean
    fileSize?: boolean
    category?: boolean
    isIndexed?: boolean
    vectorStoreId?: boolean
    keywords?: boolean
    uploadedBy?: boolean
    uploadedByName?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cohortId" | "title" | "description" | "fileUrl" | "fileType" | "fileSize" | "category" | "isIndexed" | "vectorStoreId" | "keywords" | "uploadedBy" | "uploadedByName" | "isPublic" | "createdAt" | "updatedAt", ExtArgs["result"]["document"]>
  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cohort?: boolean | CohortDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cohort?: boolean | CohortDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cohort?: boolean | CohortDefaultArgs<ExtArgs>
  }

  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      cohort: Prisma.$CohortPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cohortId: string
      title: string
      description: string | null
      fileUrl: string
      fileType: string
      fileSize: number
      category: string
      isIndexed: boolean
      vectorStoreId: string | null
      keywords: string[]
      uploadedBy: string
      uploadedByName: string
      isPublic: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {DocumentCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents and returns the data updated in the database.
     * @param {DocumentUpdateManyAndReturnArgs} args - Arguments to update many Documents.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cohort<T extends CohortDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CohortDefaultArgs<ExtArgs>>): Prisma__CohortClient<$Result.GetResult<Prisma.$CohortPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Document model
   */
  interface DocumentFieldRefs {
    readonly id: FieldRef<"Document", 'String'>
    readonly cohortId: FieldRef<"Document", 'String'>
    readonly title: FieldRef<"Document", 'String'>
    readonly description: FieldRef<"Document", 'String'>
    readonly fileUrl: FieldRef<"Document", 'String'>
    readonly fileType: FieldRef<"Document", 'String'>
    readonly fileSize: FieldRef<"Document", 'Int'>
    readonly category: FieldRef<"Document", 'String'>
    readonly isIndexed: FieldRef<"Document", 'Boolean'>
    readonly vectorStoreId: FieldRef<"Document", 'String'>
    readonly keywords: FieldRef<"Document", 'String[]'>
    readonly uploadedBy: FieldRef<"Document", 'String'>
    readonly uploadedByName: FieldRef<"Document", 'String'>
    readonly isPublic: FieldRef<"Document", 'Boolean'>
    readonly createdAt: FieldRef<"Document", 'DateTime'>
    readonly updatedAt: FieldRef<"Document", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Document createManyAndReturn
   */
  export type DocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document updateManyAndReturn
   */
  export type DocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
  }


  /**
   * Model GamificationPoint
   */

  export type AggregateGamificationPoint = {
    _count: GamificationPointCountAggregateOutputType | null
    _avg: GamificationPointAvgAggregateOutputType | null
    _sum: GamificationPointSumAggregateOutputType | null
    _min: GamificationPointMinAggregateOutputType | null
    _max: GamificationPointMaxAggregateOutputType | null
  }

  export type GamificationPointAvgAggregateOutputType = {
    points: number | null
  }

  export type GamificationPointSumAggregateOutputType = {
    points: number | null
  }

  export type GamificationPointMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    pointType: string | null
    points: number | null
    reason: string | null
    relatedTaskId: string | null
    awardedAt: Date | null
  }

  export type GamificationPointMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    pointType: string | null
    points: number | null
    reason: string | null
    relatedTaskId: string | null
    awardedAt: Date | null
  }

  export type GamificationPointCountAggregateOutputType = {
    id: number
    studentId: number
    pointType: number
    points: number
    reason: number
    relatedTaskId: number
    awardedAt: number
    _all: number
  }


  export type GamificationPointAvgAggregateInputType = {
    points?: true
  }

  export type GamificationPointSumAggregateInputType = {
    points?: true
  }

  export type GamificationPointMinAggregateInputType = {
    id?: true
    studentId?: true
    pointType?: true
    points?: true
    reason?: true
    relatedTaskId?: true
    awardedAt?: true
  }

  export type GamificationPointMaxAggregateInputType = {
    id?: true
    studentId?: true
    pointType?: true
    points?: true
    reason?: true
    relatedTaskId?: true
    awardedAt?: true
  }

  export type GamificationPointCountAggregateInputType = {
    id?: true
    studentId?: true
    pointType?: true
    points?: true
    reason?: true
    relatedTaskId?: true
    awardedAt?: true
    _all?: true
  }

  export type GamificationPointAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GamificationPoint to aggregate.
     */
    where?: GamificationPointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GamificationPoints to fetch.
     */
    orderBy?: GamificationPointOrderByWithRelationInput | GamificationPointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GamificationPointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GamificationPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GamificationPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GamificationPoints
    **/
    _count?: true | GamificationPointCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GamificationPointAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GamificationPointSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GamificationPointMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GamificationPointMaxAggregateInputType
  }

  export type GetGamificationPointAggregateType<T extends GamificationPointAggregateArgs> = {
        [P in keyof T & keyof AggregateGamificationPoint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGamificationPoint[P]>
      : GetScalarType<T[P], AggregateGamificationPoint[P]>
  }




  export type GamificationPointGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GamificationPointWhereInput
    orderBy?: GamificationPointOrderByWithAggregationInput | GamificationPointOrderByWithAggregationInput[]
    by: GamificationPointScalarFieldEnum[] | GamificationPointScalarFieldEnum
    having?: GamificationPointScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GamificationPointCountAggregateInputType | true
    _avg?: GamificationPointAvgAggregateInputType
    _sum?: GamificationPointSumAggregateInputType
    _min?: GamificationPointMinAggregateInputType
    _max?: GamificationPointMaxAggregateInputType
  }

  export type GamificationPointGroupByOutputType = {
    id: string
    studentId: string
    pointType: string
    points: number
    reason: string
    relatedTaskId: string | null
    awardedAt: Date
    _count: GamificationPointCountAggregateOutputType | null
    _avg: GamificationPointAvgAggregateOutputType | null
    _sum: GamificationPointSumAggregateOutputType | null
    _min: GamificationPointMinAggregateOutputType | null
    _max: GamificationPointMaxAggregateOutputType | null
  }

  type GetGamificationPointGroupByPayload<T extends GamificationPointGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GamificationPointGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GamificationPointGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GamificationPointGroupByOutputType[P]>
            : GetScalarType<T[P], GamificationPointGroupByOutputType[P]>
        }
      >
    >


  export type GamificationPointSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    pointType?: boolean
    points?: boolean
    reason?: boolean
    relatedTaskId?: boolean
    awardedAt?: boolean
    student?: boolean | CohortStudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gamificationPoint"]>

  export type GamificationPointSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    pointType?: boolean
    points?: boolean
    reason?: boolean
    relatedTaskId?: boolean
    awardedAt?: boolean
    student?: boolean | CohortStudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gamificationPoint"]>

  export type GamificationPointSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    pointType?: boolean
    points?: boolean
    reason?: boolean
    relatedTaskId?: boolean
    awardedAt?: boolean
    student?: boolean | CohortStudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gamificationPoint"]>

  export type GamificationPointSelectScalar = {
    id?: boolean
    studentId?: boolean
    pointType?: boolean
    points?: boolean
    reason?: boolean
    relatedTaskId?: boolean
    awardedAt?: boolean
  }

  export type GamificationPointOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "pointType" | "points" | "reason" | "relatedTaskId" | "awardedAt", ExtArgs["result"]["gamificationPoint"]>
  export type GamificationPointInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | CohortStudentDefaultArgs<ExtArgs>
  }
  export type GamificationPointIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | CohortStudentDefaultArgs<ExtArgs>
  }
  export type GamificationPointIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | CohortStudentDefaultArgs<ExtArgs>
  }

  export type $GamificationPointPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GamificationPoint"
    objects: {
      student: Prisma.$CohortStudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      pointType: string
      points: number
      reason: string
      relatedTaskId: string | null
      awardedAt: Date
    }, ExtArgs["result"]["gamificationPoint"]>
    composites: {}
  }

  type GamificationPointGetPayload<S extends boolean | null | undefined | GamificationPointDefaultArgs> = $Result.GetResult<Prisma.$GamificationPointPayload, S>

  type GamificationPointCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GamificationPointFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GamificationPointCountAggregateInputType | true
    }

  export interface GamificationPointDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GamificationPoint'], meta: { name: 'GamificationPoint' } }
    /**
     * Find zero or one GamificationPoint that matches the filter.
     * @param {GamificationPointFindUniqueArgs} args - Arguments to find a GamificationPoint
     * @example
     * // Get one GamificationPoint
     * const gamificationPoint = await prisma.gamificationPoint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GamificationPointFindUniqueArgs>(args: SelectSubset<T, GamificationPointFindUniqueArgs<ExtArgs>>): Prisma__GamificationPointClient<$Result.GetResult<Prisma.$GamificationPointPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GamificationPoint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GamificationPointFindUniqueOrThrowArgs} args - Arguments to find a GamificationPoint
     * @example
     * // Get one GamificationPoint
     * const gamificationPoint = await prisma.gamificationPoint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GamificationPointFindUniqueOrThrowArgs>(args: SelectSubset<T, GamificationPointFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GamificationPointClient<$Result.GetResult<Prisma.$GamificationPointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GamificationPoint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamificationPointFindFirstArgs} args - Arguments to find a GamificationPoint
     * @example
     * // Get one GamificationPoint
     * const gamificationPoint = await prisma.gamificationPoint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GamificationPointFindFirstArgs>(args?: SelectSubset<T, GamificationPointFindFirstArgs<ExtArgs>>): Prisma__GamificationPointClient<$Result.GetResult<Prisma.$GamificationPointPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GamificationPoint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamificationPointFindFirstOrThrowArgs} args - Arguments to find a GamificationPoint
     * @example
     * // Get one GamificationPoint
     * const gamificationPoint = await prisma.gamificationPoint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GamificationPointFindFirstOrThrowArgs>(args?: SelectSubset<T, GamificationPointFindFirstOrThrowArgs<ExtArgs>>): Prisma__GamificationPointClient<$Result.GetResult<Prisma.$GamificationPointPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GamificationPoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamificationPointFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GamificationPoints
     * const gamificationPoints = await prisma.gamificationPoint.findMany()
     * 
     * // Get first 10 GamificationPoints
     * const gamificationPoints = await prisma.gamificationPoint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gamificationPointWithIdOnly = await prisma.gamificationPoint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GamificationPointFindManyArgs>(args?: SelectSubset<T, GamificationPointFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamificationPointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GamificationPoint.
     * @param {GamificationPointCreateArgs} args - Arguments to create a GamificationPoint.
     * @example
     * // Create one GamificationPoint
     * const GamificationPoint = await prisma.gamificationPoint.create({
     *   data: {
     *     // ... data to create a GamificationPoint
     *   }
     * })
     * 
     */
    create<T extends GamificationPointCreateArgs>(args: SelectSubset<T, GamificationPointCreateArgs<ExtArgs>>): Prisma__GamificationPointClient<$Result.GetResult<Prisma.$GamificationPointPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GamificationPoints.
     * @param {GamificationPointCreateManyArgs} args - Arguments to create many GamificationPoints.
     * @example
     * // Create many GamificationPoints
     * const gamificationPoint = await prisma.gamificationPoint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GamificationPointCreateManyArgs>(args?: SelectSubset<T, GamificationPointCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GamificationPoints and returns the data saved in the database.
     * @param {GamificationPointCreateManyAndReturnArgs} args - Arguments to create many GamificationPoints.
     * @example
     * // Create many GamificationPoints
     * const gamificationPoint = await prisma.gamificationPoint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GamificationPoints and only return the `id`
     * const gamificationPointWithIdOnly = await prisma.gamificationPoint.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GamificationPointCreateManyAndReturnArgs>(args?: SelectSubset<T, GamificationPointCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamificationPointPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GamificationPoint.
     * @param {GamificationPointDeleteArgs} args - Arguments to delete one GamificationPoint.
     * @example
     * // Delete one GamificationPoint
     * const GamificationPoint = await prisma.gamificationPoint.delete({
     *   where: {
     *     // ... filter to delete one GamificationPoint
     *   }
     * })
     * 
     */
    delete<T extends GamificationPointDeleteArgs>(args: SelectSubset<T, GamificationPointDeleteArgs<ExtArgs>>): Prisma__GamificationPointClient<$Result.GetResult<Prisma.$GamificationPointPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GamificationPoint.
     * @param {GamificationPointUpdateArgs} args - Arguments to update one GamificationPoint.
     * @example
     * // Update one GamificationPoint
     * const gamificationPoint = await prisma.gamificationPoint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GamificationPointUpdateArgs>(args: SelectSubset<T, GamificationPointUpdateArgs<ExtArgs>>): Prisma__GamificationPointClient<$Result.GetResult<Prisma.$GamificationPointPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GamificationPoints.
     * @param {GamificationPointDeleteManyArgs} args - Arguments to filter GamificationPoints to delete.
     * @example
     * // Delete a few GamificationPoints
     * const { count } = await prisma.gamificationPoint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GamificationPointDeleteManyArgs>(args?: SelectSubset<T, GamificationPointDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GamificationPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamificationPointUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GamificationPoints
     * const gamificationPoint = await prisma.gamificationPoint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GamificationPointUpdateManyArgs>(args: SelectSubset<T, GamificationPointUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GamificationPoints and returns the data updated in the database.
     * @param {GamificationPointUpdateManyAndReturnArgs} args - Arguments to update many GamificationPoints.
     * @example
     * // Update many GamificationPoints
     * const gamificationPoint = await prisma.gamificationPoint.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GamificationPoints and only return the `id`
     * const gamificationPointWithIdOnly = await prisma.gamificationPoint.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GamificationPointUpdateManyAndReturnArgs>(args: SelectSubset<T, GamificationPointUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamificationPointPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GamificationPoint.
     * @param {GamificationPointUpsertArgs} args - Arguments to update or create a GamificationPoint.
     * @example
     * // Update or create a GamificationPoint
     * const gamificationPoint = await prisma.gamificationPoint.upsert({
     *   create: {
     *     // ... data to create a GamificationPoint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GamificationPoint we want to update
     *   }
     * })
     */
    upsert<T extends GamificationPointUpsertArgs>(args: SelectSubset<T, GamificationPointUpsertArgs<ExtArgs>>): Prisma__GamificationPointClient<$Result.GetResult<Prisma.$GamificationPointPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GamificationPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamificationPointCountArgs} args - Arguments to filter GamificationPoints to count.
     * @example
     * // Count the number of GamificationPoints
     * const count = await prisma.gamificationPoint.count({
     *   where: {
     *     // ... the filter for the GamificationPoints we want to count
     *   }
     * })
    **/
    count<T extends GamificationPointCountArgs>(
      args?: Subset<T, GamificationPointCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GamificationPointCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GamificationPoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamificationPointAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GamificationPointAggregateArgs>(args: Subset<T, GamificationPointAggregateArgs>): Prisma.PrismaPromise<GetGamificationPointAggregateType<T>>

    /**
     * Group by GamificationPoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamificationPointGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GamificationPointGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GamificationPointGroupByArgs['orderBy'] }
        : { orderBy?: GamificationPointGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GamificationPointGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGamificationPointGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GamificationPoint model
   */
  readonly fields: GamificationPointFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GamificationPoint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GamificationPointClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends CohortStudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CohortStudentDefaultArgs<ExtArgs>>): Prisma__CohortStudentClient<$Result.GetResult<Prisma.$CohortStudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GamificationPoint model
   */
  interface GamificationPointFieldRefs {
    readonly id: FieldRef<"GamificationPoint", 'String'>
    readonly studentId: FieldRef<"GamificationPoint", 'String'>
    readonly pointType: FieldRef<"GamificationPoint", 'String'>
    readonly points: FieldRef<"GamificationPoint", 'Int'>
    readonly reason: FieldRef<"GamificationPoint", 'String'>
    readonly relatedTaskId: FieldRef<"GamificationPoint", 'String'>
    readonly awardedAt: FieldRef<"GamificationPoint", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GamificationPoint findUnique
   */
  export type GamificationPointFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamificationPoint
     */
    select?: GamificationPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GamificationPoint
     */
    omit?: GamificationPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamificationPointInclude<ExtArgs> | null
    /**
     * Filter, which GamificationPoint to fetch.
     */
    where: GamificationPointWhereUniqueInput
  }

  /**
   * GamificationPoint findUniqueOrThrow
   */
  export type GamificationPointFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamificationPoint
     */
    select?: GamificationPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GamificationPoint
     */
    omit?: GamificationPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamificationPointInclude<ExtArgs> | null
    /**
     * Filter, which GamificationPoint to fetch.
     */
    where: GamificationPointWhereUniqueInput
  }

  /**
   * GamificationPoint findFirst
   */
  export type GamificationPointFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamificationPoint
     */
    select?: GamificationPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GamificationPoint
     */
    omit?: GamificationPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamificationPointInclude<ExtArgs> | null
    /**
     * Filter, which GamificationPoint to fetch.
     */
    where?: GamificationPointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GamificationPoints to fetch.
     */
    orderBy?: GamificationPointOrderByWithRelationInput | GamificationPointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GamificationPoints.
     */
    cursor?: GamificationPointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GamificationPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GamificationPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GamificationPoints.
     */
    distinct?: GamificationPointScalarFieldEnum | GamificationPointScalarFieldEnum[]
  }

  /**
   * GamificationPoint findFirstOrThrow
   */
  export type GamificationPointFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamificationPoint
     */
    select?: GamificationPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GamificationPoint
     */
    omit?: GamificationPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamificationPointInclude<ExtArgs> | null
    /**
     * Filter, which GamificationPoint to fetch.
     */
    where?: GamificationPointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GamificationPoints to fetch.
     */
    orderBy?: GamificationPointOrderByWithRelationInput | GamificationPointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GamificationPoints.
     */
    cursor?: GamificationPointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GamificationPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GamificationPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GamificationPoints.
     */
    distinct?: GamificationPointScalarFieldEnum | GamificationPointScalarFieldEnum[]
  }

  /**
   * GamificationPoint findMany
   */
  export type GamificationPointFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamificationPoint
     */
    select?: GamificationPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GamificationPoint
     */
    omit?: GamificationPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamificationPointInclude<ExtArgs> | null
    /**
     * Filter, which GamificationPoints to fetch.
     */
    where?: GamificationPointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GamificationPoints to fetch.
     */
    orderBy?: GamificationPointOrderByWithRelationInput | GamificationPointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GamificationPoints.
     */
    cursor?: GamificationPointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GamificationPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GamificationPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GamificationPoints.
     */
    distinct?: GamificationPointScalarFieldEnum | GamificationPointScalarFieldEnum[]
  }

  /**
   * GamificationPoint create
   */
  export type GamificationPointCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamificationPoint
     */
    select?: GamificationPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GamificationPoint
     */
    omit?: GamificationPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamificationPointInclude<ExtArgs> | null
    /**
     * The data needed to create a GamificationPoint.
     */
    data: XOR<GamificationPointCreateInput, GamificationPointUncheckedCreateInput>
  }

  /**
   * GamificationPoint createMany
   */
  export type GamificationPointCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GamificationPoints.
     */
    data: GamificationPointCreateManyInput | GamificationPointCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GamificationPoint createManyAndReturn
   */
  export type GamificationPointCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamificationPoint
     */
    select?: GamificationPointSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GamificationPoint
     */
    omit?: GamificationPointOmit<ExtArgs> | null
    /**
     * The data used to create many GamificationPoints.
     */
    data: GamificationPointCreateManyInput | GamificationPointCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamificationPointIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GamificationPoint update
   */
  export type GamificationPointUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamificationPoint
     */
    select?: GamificationPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GamificationPoint
     */
    omit?: GamificationPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamificationPointInclude<ExtArgs> | null
    /**
     * The data needed to update a GamificationPoint.
     */
    data: XOR<GamificationPointUpdateInput, GamificationPointUncheckedUpdateInput>
    /**
     * Choose, which GamificationPoint to update.
     */
    where: GamificationPointWhereUniqueInput
  }

  /**
   * GamificationPoint updateMany
   */
  export type GamificationPointUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GamificationPoints.
     */
    data: XOR<GamificationPointUpdateManyMutationInput, GamificationPointUncheckedUpdateManyInput>
    /**
     * Filter which GamificationPoints to update
     */
    where?: GamificationPointWhereInput
    /**
     * Limit how many GamificationPoints to update.
     */
    limit?: number
  }

  /**
   * GamificationPoint updateManyAndReturn
   */
  export type GamificationPointUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamificationPoint
     */
    select?: GamificationPointSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GamificationPoint
     */
    omit?: GamificationPointOmit<ExtArgs> | null
    /**
     * The data used to update GamificationPoints.
     */
    data: XOR<GamificationPointUpdateManyMutationInput, GamificationPointUncheckedUpdateManyInput>
    /**
     * Filter which GamificationPoints to update
     */
    where?: GamificationPointWhereInput
    /**
     * Limit how many GamificationPoints to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamificationPointIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GamificationPoint upsert
   */
  export type GamificationPointUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamificationPoint
     */
    select?: GamificationPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GamificationPoint
     */
    omit?: GamificationPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamificationPointInclude<ExtArgs> | null
    /**
     * The filter to search for the GamificationPoint to update in case it exists.
     */
    where: GamificationPointWhereUniqueInput
    /**
     * In case the GamificationPoint found by the `where` argument doesn't exist, create a new GamificationPoint with this data.
     */
    create: XOR<GamificationPointCreateInput, GamificationPointUncheckedCreateInput>
    /**
     * In case the GamificationPoint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GamificationPointUpdateInput, GamificationPointUncheckedUpdateInput>
  }

  /**
   * GamificationPoint delete
   */
  export type GamificationPointDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamificationPoint
     */
    select?: GamificationPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GamificationPoint
     */
    omit?: GamificationPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamificationPointInclude<ExtArgs> | null
    /**
     * Filter which GamificationPoint to delete.
     */
    where: GamificationPointWhereUniqueInput
  }

  /**
   * GamificationPoint deleteMany
   */
  export type GamificationPointDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GamificationPoints to delete
     */
    where?: GamificationPointWhereInput
    /**
     * Limit how many GamificationPoints to delete.
     */
    limit?: number
  }

  /**
   * GamificationPoint without action
   */
  export type GamificationPointDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamificationPoint
     */
    select?: GamificationPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GamificationPoint
     */
    omit?: GamificationPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamificationPointInclude<ExtArgs> | null
  }


  /**
   * Model Achievement
   */

  export type AggregateAchievement = {
    _count: AchievementCountAggregateOutputType | null
    _avg: AchievementAvgAggregateOutputType | null
    _sum: AchievementSumAggregateOutputType | null
    _min: AchievementMinAggregateOutputType | null
    _max: AchievementMaxAggregateOutputType | null
  }

  export type AchievementAvgAggregateOutputType = {
    pointsRequired: number | null
  }

  export type AchievementSumAggregateOutputType = {
    pointsRequired: number | null
  }

  export type AchievementMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    icon: string | null
    category: string | null
    pointsRequired: number | null
    condition: string | null
    createdAt: Date | null
  }

  export type AchievementMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    icon: string | null
    category: string | null
    pointsRequired: number | null
    condition: string | null
    createdAt: Date | null
  }

  export type AchievementCountAggregateOutputType = {
    id: number
    name: number
    description: number
    icon: number
    category: number
    pointsRequired: number
    condition: number
    createdAt: number
    _all: number
  }


  export type AchievementAvgAggregateInputType = {
    pointsRequired?: true
  }

  export type AchievementSumAggregateInputType = {
    pointsRequired?: true
  }

  export type AchievementMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon?: true
    category?: true
    pointsRequired?: true
    condition?: true
    createdAt?: true
  }

  export type AchievementMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon?: true
    category?: true
    pointsRequired?: true
    condition?: true
    createdAt?: true
  }

  export type AchievementCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon?: true
    category?: true
    pointsRequired?: true
    condition?: true
    createdAt?: true
    _all?: true
  }

  export type AchievementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Achievement to aggregate.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Achievements
    **/
    _count?: true | AchievementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AchievementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AchievementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AchievementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AchievementMaxAggregateInputType
  }

  export type GetAchievementAggregateType<T extends AchievementAggregateArgs> = {
        [P in keyof T & keyof AggregateAchievement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAchievement[P]>
      : GetScalarType<T[P], AggregateAchievement[P]>
  }




  export type AchievementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AchievementWhereInput
    orderBy?: AchievementOrderByWithAggregationInput | AchievementOrderByWithAggregationInput[]
    by: AchievementScalarFieldEnum[] | AchievementScalarFieldEnum
    having?: AchievementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AchievementCountAggregateInputType | true
    _avg?: AchievementAvgAggregateInputType
    _sum?: AchievementSumAggregateInputType
    _min?: AchievementMinAggregateInputType
    _max?: AchievementMaxAggregateInputType
  }

  export type AchievementGroupByOutputType = {
    id: string
    name: string
    description: string
    icon: string
    category: string
    pointsRequired: number
    condition: string
    createdAt: Date
    _count: AchievementCountAggregateOutputType | null
    _avg: AchievementAvgAggregateOutputType | null
    _sum: AchievementSumAggregateOutputType | null
    _min: AchievementMinAggregateOutputType | null
    _max: AchievementMaxAggregateOutputType | null
  }

  type GetAchievementGroupByPayload<T extends AchievementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AchievementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AchievementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AchievementGroupByOutputType[P]>
            : GetScalarType<T[P], AchievementGroupByOutputType[P]>
        }
      >
    >


  export type AchievementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    category?: boolean
    pointsRequired?: boolean
    condition?: boolean
    createdAt?: boolean
    earnedBy?: boolean | Achievement$earnedByArgs<ExtArgs>
    _count?: boolean | AchievementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["achievement"]>

  export type AchievementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    category?: boolean
    pointsRequired?: boolean
    condition?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["achievement"]>

  export type AchievementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    category?: boolean
    pointsRequired?: boolean
    condition?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["achievement"]>

  export type AchievementSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    category?: boolean
    pointsRequired?: boolean
    condition?: boolean
    createdAt?: boolean
  }

  export type AchievementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "icon" | "category" | "pointsRequired" | "condition" | "createdAt", ExtArgs["result"]["achievement"]>
  export type AchievementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    earnedBy?: boolean | Achievement$earnedByArgs<ExtArgs>
    _count?: boolean | AchievementCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AchievementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AchievementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AchievementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Achievement"
    objects: {
      earnedBy: Prisma.$StudentAchievementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      icon: string
      category: string
      pointsRequired: number
      condition: string
      createdAt: Date
    }, ExtArgs["result"]["achievement"]>
    composites: {}
  }

  type AchievementGetPayload<S extends boolean | null | undefined | AchievementDefaultArgs> = $Result.GetResult<Prisma.$AchievementPayload, S>

  type AchievementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AchievementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AchievementCountAggregateInputType | true
    }

  export interface AchievementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Achievement'], meta: { name: 'Achievement' } }
    /**
     * Find zero or one Achievement that matches the filter.
     * @param {AchievementFindUniqueArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AchievementFindUniqueArgs>(args: SelectSubset<T, AchievementFindUniqueArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Achievement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AchievementFindUniqueOrThrowArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AchievementFindUniqueOrThrowArgs>(args: SelectSubset<T, AchievementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Achievement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindFirstArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AchievementFindFirstArgs>(args?: SelectSubset<T, AchievementFindFirstArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Achievement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindFirstOrThrowArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AchievementFindFirstOrThrowArgs>(args?: SelectSubset<T, AchievementFindFirstOrThrowArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Achievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Achievements
     * const achievements = await prisma.achievement.findMany()
     * 
     * // Get first 10 Achievements
     * const achievements = await prisma.achievement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const achievementWithIdOnly = await prisma.achievement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AchievementFindManyArgs>(args?: SelectSubset<T, AchievementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Achievement.
     * @param {AchievementCreateArgs} args - Arguments to create a Achievement.
     * @example
     * // Create one Achievement
     * const Achievement = await prisma.achievement.create({
     *   data: {
     *     // ... data to create a Achievement
     *   }
     * })
     * 
     */
    create<T extends AchievementCreateArgs>(args: SelectSubset<T, AchievementCreateArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Achievements.
     * @param {AchievementCreateManyArgs} args - Arguments to create many Achievements.
     * @example
     * // Create many Achievements
     * const achievement = await prisma.achievement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AchievementCreateManyArgs>(args?: SelectSubset<T, AchievementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Achievements and returns the data saved in the database.
     * @param {AchievementCreateManyAndReturnArgs} args - Arguments to create many Achievements.
     * @example
     * // Create many Achievements
     * const achievement = await prisma.achievement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Achievements and only return the `id`
     * const achievementWithIdOnly = await prisma.achievement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AchievementCreateManyAndReturnArgs>(args?: SelectSubset<T, AchievementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Achievement.
     * @param {AchievementDeleteArgs} args - Arguments to delete one Achievement.
     * @example
     * // Delete one Achievement
     * const Achievement = await prisma.achievement.delete({
     *   where: {
     *     // ... filter to delete one Achievement
     *   }
     * })
     * 
     */
    delete<T extends AchievementDeleteArgs>(args: SelectSubset<T, AchievementDeleteArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Achievement.
     * @param {AchievementUpdateArgs} args - Arguments to update one Achievement.
     * @example
     * // Update one Achievement
     * const achievement = await prisma.achievement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AchievementUpdateArgs>(args: SelectSubset<T, AchievementUpdateArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Achievements.
     * @param {AchievementDeleteManyArgs} args - Arguments to filter Achievements to delete.
     * @example
     * // Delete a few Achievements
     * const { count } = await prisma.achievement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AchievementDeleteManyArgs>(args?: SelectSubset<T, AchievementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Achievements
     * const achievement = await prisma.achievement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AchievementUpdateManyArgs>(args: SelectSubset<T, AchievementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Achievements and returns the data updated in the database.
     * @param {AchievementUpdateManyAndReturnArgs} args - Arguments to update many Achievements.
     * @example
     * // Update many Achievements
     * const achievement = await prisma.achievement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Achievements and only return the `id`
     * const achievementWithIdOnly = await prisma.achievement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AchievementUpdateManyAndReturnArgs>(args: SelectSubset<T, AchievementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Achievement.
     * @param {AchievementUpsertArgs} args - Arguments to update or create a Achievement.
     * @example
     * // Update or create a Achievement
     * const achievement = await prisma.achievement.upsert({
     *   create: {
     *     // ... data to create a Achievement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Achievement we want to update
     *   }
     * })
     */
    upsert<T extends AchievementUpsertArgs>(args: SelectSubset<T, AchievementUpsertArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementCountArgs} args - Arguments to filter Achievements to count.
     * @example
     * // Count the number of Achievements
     * const count = await prisma.achievement.count({
     *   where: {
     *     // ... the filter for the Achievements we want to count
     *   }
     * })
    **/
    count<T extends AchievementCountArgs>(
      args?: Subset<T, AchievementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AchievementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Achievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AchievementAggregateArgs>(args: Subset<T, AchievementAggregateArgs>): Prisma.PrismaPromise<GetAchievementAggregateType<T>>

    /**
     * Group by Achievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AchievementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AchievementGroupByArgs['orderBy'] }
        : { orderBy?: AchievementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AchievementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAchievementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Achievement model
   */
  readonly fields: AchievementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Achievement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AchievementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    earnedBy<T extends Achievement$earnedByArgs<ExtArgs> = {}>(args?: Subset<T, Achievement$earnedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentAchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Achievement model
   */
  interface AchievementFieldRefs {
    readonly id: FieldRef<"Achievement", 'String'>
    readonly name: FieldRef<"Achievement", 'String'>
    readonly description: FieldRef<"Achievement", 'String'>
    readonly icon: FieldRef<"Achievement", 'String'>
    readonly category: FieldRef<"Achievement", 'String'>
    readonly pointsRequired: FieldRef<"Achievement", 'Int'>
    readonly condition: FieldRef<"Achievement", 'String'>
    readonly createdAt: FieldRef<"Achievement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Achievement findUnique
   */
  export type AchievementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement findUniqueOrThrow
   */
  export type AchievementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement findFirst
   */
  export type AchievementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Achievements.
     */
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement findFirstOrThrow
   */
  export type AchievementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Achievements.
     */
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement findMany
   */
  export type AchievementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievements to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Achievements.
     */
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement create
   */
  export type AchievementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * The data needed to create a Achievement.
     */
    data: XOR<AchievementCreateInput, AchievementUncheckedCreateInput>
  }

  /**
   * Achievement createMany
   */
  export type AchievementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Achievements.
     */
    data: AchievementCreateManyInput | AchievementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Achievement createManyAndReturn
   */
  export type AchievementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * The data used to create many Achievements.
     */
    data: AchievementCreateManyInput | AchievementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Achievement update
   */
  export type AchievementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * The data needed to update a Achievement.
     */
    data: XOR<AchievementUpdateInput, AchievementUncheckedUpdateInput>
    /**
     * Choose, which Achievement to update.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement updateMany
   */
  export type AchievementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Achievements.
     */
    data: XOR<AchievementUpdateManyMutationInput, AchievementUncheckedUpdateManyInput>
    /**
     * Filter which Achievements to update
     */
    where?: AchievementWhereInput
    /**
     * Limit how many Achievements to update.
     */
    limit?: number
  }

  /**
   * Achievement updateManyAndReturn
   */
  export type AchievementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * The data used to update Achievements.
     */
    data: XOR<AchievementUpdateManyMutationInput, AchievementUncheckedUpdateManyInput>
    /**
     * Filter which Achievements to update
     */
    where?: AchievementWhereInput
    /**
     * Limit how many Achievements to update.
     */
    limit?: number
  }

  /**
   * Achievement upsert
   */
  export type AchievementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * The filter to search for the Achievement to update in case it exists.
     */
    where: AchievementWhereUniqueInput
    /**
     * In case the Achievement found by the `where` argument doesn't exist, create a new Achievement with this data.
     */
    create: XOR<AchievementCreateInput, AchievementUncheckedCreateInput>
    /**
     * In case the Achievement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AchievementUpdateInput, AchievementUncheckedUpdateInput>
  }

  /**
   * Achievement delete
   */
  export type AchievementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter which Achievement to delete.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement deleteMany
   */
  export type AchievementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Achievements to delete
     */
    where?: AchievementWhereInput
    /**
     * Limit how many Achievements to delete.
     */
    limit?: number
  }

  /**
   * Achievement.earnedBy
   */
  export type Achievement$earnedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAchievement
     */
    select?: StudentAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAchievement
     */
    omit?: StudentAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAchievementInclude<ExtArgs> | null
    where?: StudentAchievementWhereInput
    orderBy?: StudentAchievementOrderByWithRelationInput | StudentAchievementOrderByWithRelationInput[]
    cursor?: StudentAchievementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentAchievementScalarFieldEnum | StudentAchievementScalarFieldEnum[]
  }

  /**
   * Achievement without action
   */
  export type AchievementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
  }


  /**
   * Model StudentAchievement
   */

  export type AggregateStudentAchievement = {
    _count: StudentAchievementCountAggregateOutputType | null
    _min: StudentAchievementMinAggregateOutputType | null
    _max: StudentAchievementMaxAggregateOutputType | null
  }

  export type StudentAchievementMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    achievementId: string | null
    earnedAt: Date | null
  }

  export type StudentAchievementMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    achievementId: string | null
    earnedAt: Date | null
  }

  export type StudentAchievementCountAggregateOutputType = {
    id: number
    studentId: number
    achievementId: number
    earnedAt: number
    _all: number
  }


  export type StudentAchievementMinAggregateInputType = {
    id?: true
    studentId?: true
    achievementId?: true
    earnedAt?: true
  }

  export type StudentAchievementMaxAggregateInputType = {
    id?: true
    studentId?: true
    achievementId?: true
    earnedAt?: true
  }

  export type StudentAchievementCountAggregateInputType = {
    id?: true
    studentId?: true
    achievementId?: true
    earnedAt?: true
    _all?: true
  }

  export type StudentAchievementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentAchievement to aggregate.
     */
    where?: StudentAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentAchievements to fetch.
     */
    orderBy?: StudentAchievementOrderByWithRelationInput | StudentAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentAchievements
    **/
    _count?: true | StudentAchievementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentAchievementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentAchievementMaxAggregateInputType
  }

  export type GetStudentAchievementAggregateType<T extends StudentAchievementAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentAchievement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentAchievement[P]>
      : GetScalarType<T[P], AggregateStudentAchievement[P]>
  }




  export type StudentAchievementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentAchievementWhereInput
    orderBy?: StudentAchievementOrderByWithAggregationInput | StudentAchievementOrderByWithAggregationInput[]
    by: StudentAchievementScalarFieldEnum[] | StudentAchievementScalarFieldEnum
    having?: StudentAchievementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentAchievementCountAggregateInputType | true
    _min?: StudentAchievementMinAggregateInputType
    _max?: StudentAchievementMaxAggregateInputType
  }

  export type StudentAchievementGroupByOutputType = {
    id: string
    studentId: string
    achievementId: string
    earnedAt: Date
    _count: StudentAchievementCountAggregateOutputType | null
    _min: StudentAchievementMinAggregateOutputType | null
    _max: StudentAchievementMaxAggregateOutputType | null
  }

  type GetStudentAchievementGroupByPayload<T extends StudentAchievementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentAchievementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentAchievementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentAchievementGroupByOutputType[P]>
            : GetScalarType<T[P], StudentAchievementGroupByOutputType[P]>
        }
      >
    >


  export type StudentAchievementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    achievementId?: boolean
    earnedAt?: boolean
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentAchievement"]>

  export type StudentAchievementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    achievementId?: boolean
    earnedAt?: boolean
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentAchievement"]>

  export type StudentAchievementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    achievementId?: boolean
    earnedAt?: boolean
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentAchievement"]>

  export type StudentAchievementSelectScalar = {
    id?: boolean
    studentId?: boolean
    achievementId?: boolean
    earnedAt?: boolean
  }

  export type StudentAchievementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "achievementId" | "earnedAt", ExtArgs["result"]["studentAchievement"]>
  export type StudentAchievementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
  }
  export type StudentAchievementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
  }
  export type StudentAchievementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
  }

  export type $StudentAchievementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentAchievement"
    objects: {
      achievement: Prisma.$AchievementPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      achievementId: string
      earnedAt: Date
    }, ExtArgs["result"]["studentAchievement"]>
    composites: {}
  }

  type StudentAchievementGetPayload<S extends boolean | null | undefined | StudentAchievementDefaultArgs> = $Result.GetResult<Prisma.$StudentAchievementPayload, S>

  type StudentAchievementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentAchievementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentAchievementCountAggregateInputType | true
    }

  export interface StudentAchievementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentAchievement'], meta: { name: 'StudentAchievement' } }
    /**
     * Find zero or one StudentAchievement that matches the filter.
     * @param {StudentAchievementFindUniqueArgs} args - Arguments to find a StudentAchievement
     * @example
     * // Get one StudentAchievement
     * const studentAchievement = await prisma.studentAchievement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentAchievementFindUniqueArgs>(args: SelectSubset<T, StudentAchievementFindUniqueArgs<ExtArgs>>): Prisma__StudentAchievementClient<$Result.GetResult<Prisma.$StudentAchievementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentAchievement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentAchievementFindUniqueOrThrowArgs} args - Arguments to find a StudentAchievement
     * @example
     * // Get one StudentAchievement
     * const studentAchievement = await prisma.studentAchievement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentAchievementFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentAchievementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentAchievementClient<$Result.GetResult<Prisma.$StudentAchievementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentAchievement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAchievementFindFirstArgs} args - Arguments to find a StudentAchievement
     * @example
     * // Get one StudentAchievement
     * const studentAchievement = await prisma.studentAchievement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentAchievementFindFirstArgs>(args?: SelectSubset<T, StudentAchievementFindFirstArgs<ExtArgs>>): Prisma__StudentAchievementClient<$Result.GetResult<Prisma.$StudentAchievementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentAchievement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAchievementFindFirstOrThrowArgs} args - Arguments to find a StudentAchievement
     * @example
     * // Get one StudentAchievement
     * const studentAchievement = await prisma.studentAchievement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentAchievementFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentAchievementFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentAchievementClient<$Result.GetResult<Prisma.$StudentAchievementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentAchievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAchievementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentAchievements
     * const studentAchievements = await prisma.studentAchievement.findMany()
     * 
     * // Get first 10 StudentAchievements
     * const studentAchievements = await prisma.studentAchievement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentAchievementWithIdOnly = await prisma.studentAchievement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentAchievementFindManyArgs>(args?: SelectSubset<T, StudentAchievementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentAchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentAchievement.
     * @param {StudentAchievementCreateArgs} args - Arguments to create a StudentAchievement.
     * @example
     * // Create one StudentAchievement
     * const StudentAchievement = await prisma.studentAchievement.create({
     *   data: {
     *     // ... data to create a StudentAchievement
     *   }
     * })
     * 
     */
    create<T extends StudentAchievementCreateArgs>(args: SelectSubset<T, StudentAchievementCreateArgs<ExtArgs>>): Prisma__StudentAchievementClient<$Result.GetResult<Prisma.$StudentAchievementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentAchievements.
     * @param {StudentAchievementCreateManyArgs} args - Arguments to create many StudentAchievements.
     * @example
     * // Create many StudentAchievements
     * const studentAchievement = await prisma.studentAchievement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentAchievementCreateManyArgs>(args?: SelectSubset<T, StudentAchievementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentAchievements and returns the data saved in the database.
     * @param {StudentAchievementCreateManyAndReturnArgs} args - Arguments to create many StudentAchievements.
     * @example
     * // Create many StudentAchievements
     * const studentAchievement = await prisma.studentAchievement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentAchievements and only return the `id`
     * const studentAchievementWithIdOnly = await prisma.studentAchievement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentAchievementCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentAchievementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentAchievementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentAchievement.
     * @param {StudentAchievementDeleteArgs} args - Arguments to delete one StudentAchievement.
     * @example
     * // Delete one StudentAchievement
     * const StudentAchievement = await prisma.studentAchievement.delete({
     *   where: {
     *     // ... filter to delete one StudentAchievement
     *   }
     * })
     * 
     */
    delete<T extends StudentAchievementDeleteArgs>(args: SelectSubset<T, StudentAchievementDeleteArgs<ExtArgs>>): Prisma__StudentAchievementClient<$Result.GetResult<Prisma.$StudentAchievementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentAchievement.
     * @param {StudentAchievementUpdateArgs} args - Arguments to update one StudentAchievement.
     * @example
     * // Update one StudentAchievement
     * const studentAchievement = await prisma.studentAchievement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentAchievementUpdateArgs>(args: SelectSubset<T, StudentAchievementUpdateArgs<ExtArgs>>): Prisma__StudentAchievementClient<$Result.GetResult<Prisma.$StudentAchievementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentAchievements.
     * @param {StudentAchievementDeleteManyArgs} args - Arguments to filter StudentAchievements to delete.
     * @example
     * // Delete a few StudentAchievements
     * const { count } = await prisma.studentAchievement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentAchievementDeleteManyArgs>(args?: SelectSubset<T, StudentAchievementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAchievementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentAchievements
     * const studentAchievement = await prisma.studentAchievement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentAchievementUpdateManyArgs>(args: SelectSubset<T, StudentAchievementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentAchievements and returns the data updated in the database.
     * @param {StudentAchievementUpdateManyAndReturnArgs} args - Arguments to update many StudentAchievements.
     * @example
     * // Update many StudentAchievements
     * const studentAchievement = await prisma.studentAchievement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentAchievements and only return the `id`
     * const studentAchievementWithIdOnly = await prisma.studentAchievement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentAchievementUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentAchievementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentAchievementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentAchievement.
     * @param {StudentAchievementUpsertArgs} args - Arguments to update or create a StudentAchievement.
     * @example
     * // Update or create a StudentAchievement
     * const studentAchievement = await prisma.studentAchievement.upsert({
     *   create: {
     *     // ... data to create a StudentAchievement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentAchievement we want to update
     *   }
     * })
     */
    upsert<T extends StudentAchievementUpsertArgs>(args: SelectSubset<T, StudentAchievementUpsertArgs<ExtArgs>>): Prisma__StudentAchievementClient<$Result.GetResult<Prisma.$StudentAchievementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAchievementCountArgs} args - Arguments to filter StudentAchievements to count.
     * @example
     * // Count the number of StudentAchievements
     * const count = await prisma.studentAchievement.count({
     *   where: {
     *     // ... the filter for the StudentAchievements we want to count
     *   }
     * })
    **/
    count<T extends StudentAchievementCountArgs>(
      args?: Subset<T, StudentAchievementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentAchievementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentAchievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAchievementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentAchievementAggregateArgs>(args: Subset<T, StudentAchievementAggregateArgs>): Prisma.PrismaPromise<GetStudentAchievementAggregateType<T>>

    /**
     * Group by StudentAchievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAchievementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentAchievementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentAchievementGroupByArgs['orderBy'] }
        : { orderBy?: StudentAchievementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentAchievementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentAchievementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentAchievement model
   */
  readonly fields: StudentAchievementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentAchievement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentAchievementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    achievement<T extends AchievementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AchievementDefaultArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StudentAchievement model
   */
  interface StudentAchievementFieldRefs {
    readonly id: FieldRef<"StudentAchievement", 'String'>
    readonly studentId: FieldRef<"StudentAchievement", 'String'>
    readonly achievementId: FieldRef<"StudentAchievement", 'String'>
    readonly earnedAt: FieldRef<"StudentAchievement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudentAchievement findUnique
   */
  export type StudentAchievementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAchievement
     */
    select?: StudentAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAchievement
     */
    omit?: StudentAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAchievementInclude<ExtArgs> | null
    /**
     * Filter, which StudentAchievement to fetch.
     */
    where: StudentAchievementWhereUniqueInput
  }

  /**
   * StudentAchievement findUniqueOrThrow
   */
  export type StudentAchievementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAchievement
     */
    select?: StudentAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAchievement
     */
    omit?: StudentAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAchievementInclude<ExtArgs> | null
    /**
     * Filter, which StudentAchievement to fetch.
     */
    where: StudentAchievementWhereUniqueInput
  }

  /**
   * StudentAchievement findFirst
   */
  export type StudentAchievementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAchievement
     */
    select?: StudentAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAchievement
     */
    omit?: StudentAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAchievementInclude<ExtArgs> | null
    /**
     * Filter, which StudentAchievement to fetch.
     */
    where?: StudentAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentAchievements to fetch.
     */
    orderBy?: StudentAchievementOrderByWithRelationInput | StudentAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentAchievements.
     */
    cursor?: StudentAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentAchievements.
     */
    distinct?: StudentAchievementScalarFieldEnum | StudentAchievementScalarFieldEnum[]
  }

  /**
   * StudentAchievement findFirstOrThrow
   */
  export type StudentAchievementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAchievement
     */
    select?: StudentAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAchievement
     */
    omit?: StudentAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAchievementInclude<ExtArgs> | null
    /**
     * Filter, which StudentAchievement to fetch.
     */
    where?: StudentAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentAchievements to fetch.
     */
    orderBy?: StudentAchievementOrderByWithRelationInput | StudentAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentAchievements.
     */
    cursor?: StudentAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentAchievements.
     */
    distinct?: StudentAchievementScalarFieldEnum | StudentAchievementScalarFieldEnum[]
  }

  /**
   * StudentAchievement findMany
   */
  export type StudentAchievementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAchievement
     */
    select?: StudentAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAchievement
     */
    omit?: StudentAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAchievementInclude<ExtArgs> | null
    /**
     * Filter, which StudentAchievements to fetch.
     */
    where?: StudentAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentAchievements to fetch.
     */
    orderBy?: StudentAchievementOrderByWithRelationInput | StudentAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentAchievements.
     */
    cursor?: StudentAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentAchievements.
     */
    distinct?: StudentAchievementScalarFieldEnum | StudentAchievementScalarFieldEnum[]
  }

  /**
   * StudentAchievement create
   */
  export type StudentAchievementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAchievement
     */
    select?: StudentAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAchievement
     */
    omit?: StudentAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAchievementInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentAchievement.
     */
    data: XOR<StudentAchievementCreateInput, StudentAchievementUncheckedCreateInput>
  }

  /**
   * StudentAchievement createMany
   */
  export type StudentAchievementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentAchievements.
     */
    data: StudentAchievementCreateManyInput | StudentAchievementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentAchievement createManyAndReturn
   */
  export type StudentAchievementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAchievement
     */
    select?: StudentAchievementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAchievement
     */
    omit?: StudentAchievementOmit<ExtArgs> | null
    /**
     * The data used to create many StudentAchievements.
     */
    data: StudentAchievementCreateManyInput | StudentAchievementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAchievementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentAchievement update
   */
  export type StudentAchievementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAchievement
     */
    select?: StudentAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAchievement
     */
    omit?: StudentAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAchievementInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentAchievement.
     */
    data: XOR<StudentAchievementUpdateInput, StudentAchievementUncheckedUpdateInput>
    /**
     * Choose, which StudentAchievement to update.
     */
    where: StudentAchievementWhereUniqueInput
  }

  /**
   * StudentAchievement updateMany
   */
  export type StudentAchievementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentAchievements.
     */
    data: XOR<StudentAchievementUpdateManyMutationInput, StudentAchievementUncheckedUpdateManyInput>
    /**
     * Filter which StudentAchievements to update
     */
    where?: StudentAchievementWhereInput
    /**
     * Limit how many StudentAchievements to update.
     */
    limit?: number
  }

  /**
   * StudentAchievement updateManyAndReturn
   */
  export type StudentAchievementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAchievement
     */
    select?: StudentAchievementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAchievement
     */
    omit?: StudentAchievementOmit<ExtArgs> | null
    /**
     * The data used to update StudentAchievements.
     */
    data: XOR<StudentAchievementUpdateManyMutationInput, StudentAchievementUncheckedUpdateManyInput>
    /**
     * Filter which StudentAchievements to update
     */
    where?: StudentAchievementWhereInput
    /**
     * Limit how many StudentAchievements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAchievementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentAchievement upsert
   */
  export type StudentAchievementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAchievement
     */
    select?: StudentAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAchievement
     */
    omit?: StudentAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAchievementInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentAchievement to update in case it exists.
     */
    where: StudentAchievementWhereUniqueInput
    /**
     * In case the StudentAchievement found by the `where` argument doesn't exist, create a new StudentAchievement with this data.
     */
    create: XOR<StudentAchievementCreateInput, StudentAchievementUncheckedCreateInput>
    /**
     * In case the StudentAchievement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentAchievementUpdateInput, StudentAchievementUncheckedUpdateInput>
  }

  /**
   * StudentAchievement delete
   */
  export type StudentAchievementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAchievement
     */
    select?: StudentAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAchievement
     */
    omit?: StudentAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAchievementInclude<ExtArgs> | null
    /**
     * Filter which StudentAchievement to delete.
     */
    where: StudentAchievementWhereUniqueInput
  }

  /**
   * StudentAchievement deleteMany
   */
  export type StudentAchievementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentAchievements to delete
     */
    where?: StudentAchievementWhereInput
    /**
     * Limit how many StudentAchievements to delete.
     */
    limit?: number
  }

  /**
   * StudentAchievement without action
   */
  export type StudentAchievementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAchievement
     */
    select?: StudentAchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAchievement
     */
    omit?: StudentAchievementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentAchievementInclude<ExtArgs> | null
  }


  /**
   * Model WeeklyScore
   */

  export type AggregateWeeklyScore = {
    _count: WeeklyScoreCountAggregateOutputType | null
    _avg: WeeklyScoreAvgAggregateOutputType | null
    _sum: WeeklyScoreSumAggregateOutputType | null
    _min: WeeklyScoreMinAggregateOutputType | null
    _max: WeeklyScoreMaxAggregateOutputType | null
  }

  export type WeeklyScoreAvgAggregateOutputType = {
    weekNumber: number | null
    tasksCompleted: number | null
    tasksOnTime: number | null
    totalPoints: number | null
    codeQuality: number | null
    commitFrequency: number | null
    prQuality: number | null
    overallScore: number | null
    rank: number | null
  }

  export type WeeklyScoreSumAggregateOutputType = {
    weekNumber: number | null
    tasksCompleted: number | null
    tasksOnTime: number | null
    totalPoints: number | null
    codeQuality: number | null
    commitFrequency: number | null
    prQuality: number | null
    overallScore: number | null
    rank: number | null
  }

  export type WeeklyScoreMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    cohortId: string | null
    weekNumber: number | null
    tasksCompleted: number | null
    tasksOnTime: number | null
    totalPoints: number | null
    codeQuality: number | null
    commitFrequency: number | null
    prQuality: number | null
    overallScore: number | null
    rank: number | null
    aiAnalysis: string | null
    emailSent: boolean | null
    emailSentAt: Date | null
    weekStartDate: Date | null
    weekEndDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WeeklyScoreMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    cohortId: string | null
    weekNumber: number | null
    tasksCompleted: number | null
    tasksOnTime: number | null
    totalPoints: number | null
    codeQuality: number | null
    commitFrequency: number | null
    prQuality: number | null
    overallScore: number | null
    rank: number | null
    aiAnalysis: string | null
    emailSent: boolean | null
    emailSentAt: Date | null
    weekStartDate: Date | null
    weekEndDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WeeklyScoreCountAggregateOutputType = {
    id: number
    studentId: number
    cohortId: number
    weekNumber: number
    tasksCompleted: number
    tasksOnTime: number
    totalPoints: number
    codeQuality: number
    commitFrequency: number
    prQuality: number
    overallScore: number
    rank: number
    aiAnalysis: number
    strengths: number
    improvements: number
    emailSent: number
    emailSentAt: number
    weekStartDate: number
    weekEndDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WeeklyScoreAvgAggregateInputType = {
    weekNumber?: true
    tasksCompleted?: true
    tasksOnTime?: true
    totalPoints?: true
    codeQuality?: true
    commitFrequency?: true
    prQuality?: true
    overallScore?: true
    rank?: true
  }

  export type WeeklyScoreSumAggregateInputType = {
    weekNumber?: true
    tasksCompleted?: true
    tasksOnTime?: true
    totalPoints?: true
    codeQuality?: true
    commitFrequency?: true
    prQuality?: true
    overallScore?: true
    rank?: true
  }

  export type WeeklyScoreMinAggregateInputType = {
    id?: true
    studentId?: true
    cohortId?: true
    weekNumber?: true
    tasksCompleted?: true
    tasksOnTime?: true
    totalPoints?: true
    codeQuality?: true
    commitFrequency?: true
    prQuality?: true
    overallScore?: true
    rank?: true
    aiAnalysis?: true
    emailSent?: true
    emailSentAt?: true
    weekStartDate?: true
    weekEndDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WeeklyScoreMaxAggregateInputType = {
    id?: true
    studentId?: true
    cohortId?: true
    weekNumber?: true
    tasksCompleted?: true
    tasksOnTime?: true
    totalPoints?: true
    codeQuality?: true
    commitFrequency?: true
    prQuality?: true
    overallScore?: true
    rank?: true
    aiAnalysis?: true
    emailSent?: true
    emailSentAt?: true
    weekStartDate?: true
    weekEndDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WeeklyScoreCountAggregateInputType = {
    id?: true
    studentId?: true
    cohortId?: true
    weekNumber?: true
    tasksCompleted?: true
    tasksOnTime?: true
    totalPoints?: true
    codeQuality?: true
    commitFrequency?: true
    prQuality?: true
    overallScore?: true
    rank?: true
    aiAnalysis?: true
    strengths?: true
    improvements?: true
    emailSent?: true
    emailSentAt?: true
    weekStartDate?: true
    weekEndDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WeeklyScoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeeklyScore to aggregate.
     */
    where?: WeeklyScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyScores to fetch.
     */
    orderBy?: WeeklyScoreOrderByWithRelationInput | WeeklyScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeeklyScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WeeklyScores
    **/
    _count?: true | WeeklyScoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeeklyScoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeeklyScoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeeklyScoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeeklyScoreMaxAggregateInputType
  }

  export type GetWeeklyScoreAggregateType<T extends WeeklyScoreAggregateArgs> = {
        [P in keyof T & keyof AggregateWeeklyScore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeeklyScore[P]>
      : GetScalarType<T[P], AggregateWeeklyScore[P]>
  }




  export type WeeklyScoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeeklyScoreWhereInput
    orderBy?: WeeklyScoreOrderByWithAggregationInput | WeeklyScoreOrderByWithAggregationInput[]
    by: WeeklyScoreScalarFieldEnum[] | WeeklyScoreScalarFieldEnum
    having?: WeeklyScoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeeklyScoreCountAggregateInputType | true
    _avg?: WeeklyScoreAvgAggregateInputType
    _sum?: WeeklyScoreSumAggregateInputType
    _min?: WeeklyScoreMinAggregateInputType
    _max?: WeeklyScoreMaxAggregateInputType
  }

  export type WeeklyScoreGroupByOutputType = {
    id: string
    studentId: string
    cohortId: string
    weekNumber: number
    tasksCompleted: number
    tasksOnTime: number
    totalPoints: number
    codeQuality: number | null
    commitFrequency: number
    prQuality: number | null
    overallScore: number
    rank: number | null
    aiAnalysis: string | null
    strengths: string[]
    improvements: string[]
    emailSent: boolean
    emailSentAt: Date | null
    weekStartDate: Date
    weekEndDate: Date
    createdAt: Date
    updatedAt: Date
    _count: WeeklyScoreCountAggregateOutputType | null
    _avg: WeeklyScoreAvgAggregateOutputType | null
    _sum: WeeklyScoreSumAggregateOutputType | null
    _min: WeeklyScoreMinAggregateOutputType | null
    _max: WeeklyScoreMaxAggregateOutputType | null
  }

  type GetWeeklyScoreGroupByPayload<T extends WeeklyScoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeeklyScoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeeklyScoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeeklyScoreGroupByOutputType[P]>
            : GetScalarType<T[P], WeeklyScoreGroupByOutputType[P]>
        }
      >
    >


  export type WeeklyScoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    cohortId?: boolean
    weekNumber?: boolean
    tasksCompleted?: boolean
    tasksOnTime?: boolean
    totalPoints?: boolean
    codeQuality?: boolean
    commitFrequency?: boolean
    prQuality?: boolean
    overallScore?: boolean
    rank?: boolean
    aiAnalysis?: boolean
    strengths?: boolean
    improvements?: boolean
    emailSent?: boolean
    emailSentAt?: boolean
    weekStartDate?: boolean
    weekEndDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | CohortStudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklyScore"]>

  export type WeeklyScoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    cohortId?: boolean
    weekNumber?: boolean
    tasksCompleted?: boolean
    tasksOnTime?: boolean
    totalPoints?: boolean
    codeQuality?: boolean
    commitFrequency?: boolean
    prQuality?: boolean
    overallScore?: boolean
    rank?: boolean
    aiAnalysis?: boolean
    strengths?: boolean
    improvements?: boolean
    emailSent?: boolean
    emailSentAt?: boolean
    weekStartDate?: boolean
    weekEndDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | CohortStudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklyScore"]>

  export type WeeklyScoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    cohortId?: boolean
    weekNumber?: boolean
    tasksCompleted?: boolean
    tasksOnTime?: boolean
    totalPoints?: boolean
    codeQuality?: boolean
    commitFrequency?: boolean
    prQuality?: boolean
    overallScore?: boolean
    rank?: boolean
    aiAnalysis?: boolean
    strengths?: boolean
    improvements?: boolean
    emailSent?: boolean
    emailSentAt?: boolean
    weekStartDate?: boolean
    weekEndDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | CohortStudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklyScore"]>

  export type WeeklyScoreSelectScalar = {
    id?: boolean
    studentId?: boolean
    cohortId?: boolean
    weekNumber?: boolean
    tasksCompleted?: boolean
    tasksOnTime?: boolean
    totalPoints?: boolean
    codeQuality?: boolean
    commitFrequency?: boolean
    prQuality?: boolean
    overallScore?: boolean
    rank?: boolean
    aiAnalysis?: boolean
    strengths?: boolean
    improvements?: boolean
    emailSent?: boolean
    emailSentAt?: boolean
    weekStartDate?: boolean
    weekEndDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WeeklyScoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "cohortId" | "weekNumber" | "tasksCompleted" | "tasksOnTime" | "totalPoints" | "codeQuality" | "commitFrequency" | "prQuality" | "overallScore" | "rank" | "aiAnalysis" | "strengths" | "improvements" | "emailSent" | "emailSentAt" | "weekStartDate" | "weekEndDate" | "createdAt" | "updatedAt", ExtArgs["result"]["weeklyScore"]>
  export type WeeklyScoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | CohortStudentDefaultArgs<ExtArgs>
  }
  export type WeeklyScoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | CohortStudentDefaultArgs<ExtArgs>
  }
  export type WeeklyScoreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | CohortStudentDefaultArgs<ExtArgs>
  }

  export type $WeeklyScorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WeeklyScore"
    objects: {
      student: Prisma.$CohortStudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      cohortId: string
      weekNumber: number
      tasksCompleted: number
      tasksOnTime: number
      totalPoints: number
      codeQuality: number | null
      commitFrequency: number
      prQuality: number | null
      overallScore: number
      rank: number | null
      aiAnalysis: string | null
      strengths: string[]
      improvements: string[]
      emailSent: boolean
      emailSentAt: Date | null
      weekStartDate: Date
      weekEndDate: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["weeklyScore"]>
    composites: {}
  }

  type WeeklyScoreGetPayload<S extends boolean | null | undefined | WeeklyScoreDefaultArgs> = $Result.GetResult<Prisma.$WeeklyScorePayload, S>

  type WeeklyScoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WeeklyScoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WeeklyScoreCountAggregateInputType | true
    }

  export interface WeeklyScoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WeeklyScore'], meta: { name: 'WeeklyScore' } }
    /**
     * Find zero or one WeeklyScore that matches the filter.
     * @param {WeeklyScoreFindUniqueArgs} args - Arguments to find a WeeklyScore
     * @example
     * // Get one WeeklyScore
     * const weeklyScore = await prisma.weeklyScore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeeklyScoreFindUniqueArgs>(args: SelectSubset<T, WeeklyScoreFindUniqueArgs<ExtArgs>>): Prisma__WeeklyScoreClient<$Result.GetResult<Prisma.$WeeklyScorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WeeklyScore that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WeeklyScoreFindUniqueOrThrowArgs} args - Arguments to find a WeeklyScore
     * @example
     * // Get one WeeklyScore
     * const weeklyScore = await prisma.weeklyScore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeeklyScoreFindUniqueOrThrowArgs>(args: SelectSubset<T, WeeklyScoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeeklyScoreClient<$Result.GetResult<Prisma.$WeeklyScorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeeklyScore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyScoreFindFirstArgs} args - Arguments to find a WeeklyScore
     * @example
     * // Get one WeeklyScore
     * const weeklyScore = await prisma.weeklyScore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeeklyScoreFindFirstArgs>(args?: SelectSubset<T, WeeklyScoreFindFirstArgs<ExtArgs>>): Prisma__WeeklyScoreClient<$Result.GetResult<Prisma.$WeeklyScorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeeklyScore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyScoreFindFirstOrThrowArgs} args - Arguments to find a WeeklyScore
     * @example
     * // Get one WeeklyScore
     * const weeklyScore = await prisma.weeklyScore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeeklyScoreFindFirstOrThrowArgs>(args?: SelectSubset<T, WeeklyScoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeeklyScoreClient<$Result.GetResult<Prisma.$WeeklyScorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WeeklyScores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyScoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WeeklyScores
     * const weeklyScores = await prisma.weeklyScore.findMany()
     * 
     * // Get first 10 WeeklyScores
     * const weeklyScores = await prisma.weeklyScore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weeklyScoreWithIdOnly = await prisma.weeklyScore.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeeklyScoreFindManyArgs>(args?: SelectSubset<T, WeeklyScoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WeeklyScore.
     * @param {WeeklyScoreCreateArgs} args - Arguments to create a WeeklyScore.
     * @example
     * // Create one WeeklyScore
     * const WeeklyScore = await prisma.weeklyScore.create({
     *   data: {
     *     // ... data to create a WeeklyScore
     *   }
     * })
     * 
     */
    create<T extends WeeklyScoreCreateArgs>(args: SelectSubset<T, WeeklyScoreCreateArgs<ExtArgs>>): Prisma__WeeklyScoreClient<$Result.GetResult<Prisma.$WeeklyScorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WeeklyScores.
     * @param {WeeklyScoreCreateManyArgs} args - Arguments to create many WeeklyScores.
     * @example
     * // Create many WeeklyScores
     * const weeklyScore = await prisma.weeklyScore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeeklyScoreCreateManyArgs>(args?: SelectSubset<T, WeeklyScoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WeeklyScores and returns the data saved in the database.
     * @param {WeeklyScoreCreateManyAndReturnArgs} args - Arguments to create many WeeklyScores.
     * @example
     * // Create many WeeklyScores
     * const weeklyScore = await prisma.weeklyScore.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WeeklyScores and only return the `id`
     * const weeklyScoreWithIdOnly = await prisma.weeklyScore.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeeklyScoreCreateManyAndReturnArgs>(args?: SelectSubset<T, WeeklyScoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyScorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WeeklyScore.
     * @param {WeeklyScoreDeleteArgs} args - Arguments to delete one WeeklyScore.
     * @example
     * // Delete one WeeklyScore
     * const WeeklyScore = await prisma.weeklyScore.delete({
     *   where: {
     *     // ... filter to delete one WeeklyScore
     *   }
     * })
     * 
     */
    delete<T extends WeeklyScoreDeleteArgs>(args: SelectSubset<T, WeeklyScoreDeleteArgs<ExtArgs>>): Prisma__WeeklyScoreClient<$Result.GetResult<Prisma.$WeeklyScorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WeeklyScore.
     * @param {WeeklyScoreUpdateArgs} args - Arguments to update one WeeklyScore.
     * @example
     * // Update one WeeklyScore
     * const weeklyScore = await prisma.weeklyScore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeeklyScoreUpdateArgs>(args: SelectSubset<T, WeeklyScoreUpdateArgs<ExtArgs>>): Prisma__WeeklyScoreClient<$Result.GetResult<Prisma.$WeeklyScorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WeeklyScores.
     * @param {WeeklyScoreDeleteManyArgs} args - Arguments to filter WeeklyScores to delete.
     * @example
     * // Delete a few WeeklyScores
     * const { count } = await prisma.weeklyScore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeeklyScoreDeleteManyArgs>(args?: SelectSubset<T, WeeklyScoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeeklyScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyScoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WeeklyScores
     * const weeklyScore = await prisma.weeklyScore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeeklyScoreUpdateManyArgs>(args: SelectSubset<T, WeeklyScoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeeklyScores and returns the data updated in the database.
     * @param {WeeklyScoreUpdateManyAndReturnArgs} args - Arguments to update many WeeklyScores.
     * @example
     * // Update many WeeklyScores
     * const weeklyScore = await prisma.weeklyScore.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WeeklyScores and only return the `id`
     * const weeklyScoreWithIdOnly = await prisma.weeklyScore.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WeeklyScoreUpdateManyAndReturnArgs>(args: SelectSubset<T, WeeklyScoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyScorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WeeklyScore.
     * @param {WeeklyScoreUpsertArgs} args - Arguments to update or create a WeeklyScore.
     * @example
     * // Update or create a WeeklyScore
     * const weeklyScore = await prisma.weeklyScore.upsert({
     *   create: {
     *     // ... data to create a WeeklyScore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WeeklyScore we want to update
     *   }
     * })
     */
    upsert<T extends WeeklyScoreUpsertArgs>(args: SelectSubset<T, WeeklyScoreUpsertArgs<ExtArgs>>): Prisma__WeeklyScoreClient<$Result.GetResult<Prisma.$WeeklyScorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WeeklyScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyScoreCountArgs} args - Arguments to filter WeeklyScores to count.
     * @example
     * // Count the number of WeeklyScores
     * const count = await prisma.weeklyScore.count({
     *   where: {
     *     // ... the filter for the WeeklyScores we want to count
     *   }
     * })
    **/
    count<T extends WeeklyScoreCountArgs>(
      args?: Subset<T, WeeklyScoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeeklyScoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WeeklyScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyScoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WeeklyScoreAggregateArgs>(args: Subset<T, WeeklyScoreAggregateArgs>): Prisma.PrismaPromise<GetWeeklyScoreAggregateType<T>>

    /**
     * Group by WeeklyScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyScoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WeeklyScoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeeklyScoreGroupByArgs['orderBy'] }
        : { orderBy?: WeeklyScoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WeeklyScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeeklyScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WeeklyScore model
   */
  readonly fields: WeeklyScoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WeeklyScore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeeklyScoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends CohortStudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CohortStudentDefaultArgs<ExtArgs>>): Prisma__CohortStudentClient<$Result.GetResult<Prisma.$CohortStudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WeeklyScore model
   */
  interface WeeklyScoreFieldRefs {
    readonly id: FieldRef<"WeeklyScore", 'String'>
    readonly studentId: FieldRef<"WeeklyScore", 'String'>
    readonly cohortId: FieldRef<"WeeklyScore", 'String'>
    readonly weekNumber: FieldRef<"WeeklyScore", 'Int'>
    readonly tasksCompleted: FieldRef<"WeeklyScore", 'Int'>
    readonly tasksOnTime: FieldRef<"WeeklyScore", 'Int'>
    readonly totalPoints: FieldRef<"WeeklyScore", 'Int'>
    readonly codeQuality: FieldRef<"WeeklyScore", 'Float'>
    readonly commitFrequency: FieldRef<"WeeklyScore", 'Int'>
    readonly prQuality: FieldRef<"WeeklyScore", 'Float'>
    readonly overallScore: FieldRef<"WeeklyScore", 'Float'>
    readonly rank: FieldRef<"WeeklyScore", 'Int'>
    readonly aiAnalysis: FieldRef<"WeeklyScore", 'String'>
    readonly strengths: FieldRef<"WeeklyScore", 'String[]'>
    readonly improvements: FieldRef<"WeeklyScore", 'String[]'>
    readonly emailSent: FieldRef<"WeeklyScore", 'Boolean'>
    readonly emailSentAt: FieldRef<"WeeklyScore", 'DateTime'>
    readonly weekStartDate: FieldRef<"WeeklyScore", 'DateTime'>
    readonly weekEndDate: FieldRef<"WeeklyScore", 'DateTime'>
    readonly createdAt: FieldRef<"WeeklyScore", 'DateTime'>
    readonly updatedAt: FieldRef<"WeeklyScore", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WeeklyScore findUnique
   */
  export type WeeklyScoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyScore
     */
    select?: WeeklyScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyScore
     */
    omit?: WeeklyScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyScoreInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyScore to fetch.
     */
    where: WeeklyScoreWhereUniqueInput
  }

  /**
   * WeeklyScore findUniqueOrThrow
   */
  export type WeeklyScoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyScore
     */
    select?: WeeklyScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyScore
     */
    omit?: WeeklyScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyScoreInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyScore to fetch.
     */
    where: WeeklyScoreWhereUniqueInput
  }

  /**
   * WeeklyScore findFirst
   */
  export type WeeklyScoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyScore
     */
    select?: WeeklyScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyScore
     */
    omit?: WeeklyScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyScoreInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyScore to fetch.
     */
    where?: WeeklyScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyScores to fetch.
     */
    orderBy?: WeeklyScoreOrderByWithRelationInput | WeeklyScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeeklyScores.
     */
    cursor?: WeeklyScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklyScores.
     */
    distinct?: WeeklyScoreScalarFieldEnum | WeeklyScoreScalarFieldEnum[]
  }

  /**
   * WeeklyScore findFirstOrThrow
   */
  export type WeeklyScoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyScore
     */
    select?: WeeklyScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyScore
     */
    omit?: WeeklyScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyScoreInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyScore to fetch.
     */
    where?: WeeklyScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyScores to fetch.
     */
    orderBy?: WeeklyScoreOrderByWithRelationInput | WeeklyScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeeklyScores.
     */
    cursor?: WeeklyScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklyScores.
     */
    distinct?: WeeklyScoreScalarFieldEnum | WeeklyScoreScalarFieldEnum[]
  }

  /**
   * WeeklyScore findMany
   */
  export type WeeklyScoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyScore
     */
    select?: WeeklyScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyScore
     */
    omit?: WeeklyScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyScoreInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyScores to fetch.
     */
    where?: WeeklyScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyScores to fetch.
     */
    orderBy?: WeeklyScoreOrderByWithRelationInput | WeeklyScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WeeklyScores.
     */
    cursor?: WeeklyScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklyScores.
     */
    distinct?: WeeklyScoreScalarFieldEnum | WeeklyScoreScalarFieldEnum[]
  }

  /**
   * WeeklyScore create
   */
  export type WeeklyScoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyScore
     */
    select?: WeeklyScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyScore
     */
    omit?: WeeklyScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyScoreInclude<ExtArgs> | null
    /**
     * The data needed to create a WeeklyScore.
     */
    data: XOR<WeeklyScoreCreateInput, WeeklyScoreUncheckedCreateInput>
  }

  /**
   * WeeklyScore createMany
   */
  export type WeeklyScoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WeeklyScores.
     */
    data: WeeklyScoreCreateManyInput | WeeklyScoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WeeklyScore createManyAndReturn
   */
  export type WeeklyScoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyScore
     */
    select?: WeeklyScoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyScore
     */
    omit?: WeeklyScoreOmit<ExtArgs> | null
    /**
     * The data used to create many WeeklyScores.
     */
    data: WeeklyScoreCreateManyInput | WeeklyScoreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyScoreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeeklyScore update
   */
  export type WeeklyScoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyScore
     */
    select?: WeeklyScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyScore
     */
    omit?: WeeklyScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyScoreInclude<ExtArgs> | null
    /**
     * The data needed to update a WeeklyScore.
     */
    data: XOR<WeeklyScoreUpdateInput, WeeklyScoreUncheckedUpdateInput>
    /**
     * Choose, which WeeklyScore to update.
     */
    where: WeeklyScoreWhereUniqueInput
  }

  /**
   * WeeklyScore updateMany
   */
  export type WeeklyScoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WeeklyScores.
     */
    data: XOR<WeeklyScoreUpdateManyMutationInput, WeeklyScoreUncheckedUpdateManyInput>
    /**
     * Filter which WeeklyScores to update
     */
    where?: WeeklyScoreWhereInput
    /**
     * Limit how many WeeklyScores to update.
     */
    limit?: number
  }

  /**
   * WeeklyScore updateManyAndReturn
   */
  export type WeeklyScoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyScore
     */
    select?: WeeklyScoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyScore
     */
    omit?: WeeklyScoreOmit<ExtArgs> | null
    /**
     * The data used to update WeeklyScores.
     */
    data: XOR<WeeklyScoreUpdateManyMutationInput, WeeklyScoreUncheckedUpdateManyInput>
    /**
     * Filter which WeeklyScores to update
     */
    where?: WeeklyScoreWhereInput
    /**
     * Limit how many WeeklyScores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyScoreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeeklyScore upsert
   */
  export type WeeklyScoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyScore
     */
    select?: WeeklyScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyScore
     */
    omit?: WeeklyScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyScoreInclude<ExtArgs> | null
    /**
     * The filter to search for the WeeklyScore to update in case it exists.
     */
    where: WeeklyScoreWhereUniqueInput
    /**
     * In case the WeeklyScore found by the `where` argument doesn't exist, create a new WeeklyScore with this data.
     */
    create: XOR<WeeklyScoreCreateInput, WeeklyScoreUncheckedCreateInput>
    /**
     * In case the WeeklyScore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeeklyScoreUpdateInput, WeeklyScoreUncheckedUpdateInput>
  }

  /**
   * WeeklyScore delete
   */
  export type WeeklyScoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyScore
     */
    select?: WeeklyScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyScore
     */
    omit?: WeeklyScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyScoreInclude<ExtArgs> | null
    /**
     * Filter which WeeklyScore to delete.
     */
    where: WeeklyScoreWhereUniqueInput
  }

  /**
   * WeeklyScore deleteMany
   */
  export type WeeklyScoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeeklyScores to delete
     */
    where?: WeeklyScoreWhereInput
    /**
     * Limit how many WeeklyScores to delete.
     */
    limit?: number
  }

  /**
   * WeeklyScore without action
   */
  export type WeeklyScoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyScore
     */
    select?: WeeklyScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyScore
     */
    omit?: WeeklyScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyScoreInclude<ExtArgs> | null
  }


  /**
   * Model SupervisorFeedback
   */

  export type AggregateSupervisorFeedback = {
    _count: SupervisorFeedbackCountAggregateOutputType | null
    _avg: SupervisorFeedbackAvgAggregateOutputType | null
    _sum: SupervisorFeedbackSumAggregateOutputType | null
    _min: SupervisorFeedbackMinAggregateOutputType | null
    _max: SupervisorFeedbackMaxAggregateOutputType | null
  }

  export type SupervisorFeedbackAvgAggregateOutputType = {
    rating: number | null
  }

  export type SupervisorFeedbackSumAggregateOutputType = {
    rating: number | null
  }

  export type SupervisorFeedbackMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    supervisorId: string | null
    cohortId: string | null
    feedbackType: string | null
    relatedTaskId: string | null
    rating: number | null
    comment: string | null
    isPrivate: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupervisorFeedbackMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    supervisorId: string | null
    cohortId: string | null
    feedbackType: string | null
    relatedTaskId: string | null
    rating: number | null
    comment: string | null
    isPrivate: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupervisorFeedbackCountAggregateOutputType = {
    id: number
    studentId: number
    supervisorId: number
    cohortId: number
    feedbackType: number
    relatedTaskId: number
    rating: number
    comment: number
    isPrivate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SupervisorFeedbackAvgAggregateInputType = {
    rating?: true
  }

  export type SupervisorFeedbackSumAggregateInputType = {
    rating?: true
  }

  export type SupervisorFeedbackMinAggregateInputType = {
    id?: true
    studentId?: true
    supervisorId?: true
    cohortId?: true
    feedbackType?: true
    relatedTaskId?: true
    rating?: true
    comment?: true
    isPrivate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupervisorFeedbackMaxAggregateInputType = {
    id?: true
    studentId?: true
    supervisorId?: true
    cohortId?: true
    feedbackType?: true
    relatedTaskId?: true
    rating?: true
    comment?: true
    isPrivate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupervisorFeedbackCountAggregateInputType = {
    id?: true
    studentId?: true
    supervisorId?: true
    cohortId?: true
    feedbackType?: true
    relatedTaskId?: true
    rating?: true
    comment?: true
    isPrivate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SupervisorFeedbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupervisorFeedback to aggregate.
     */
    where?: SupervisorFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupervisorFeedbacks to fetch.
     */
    orderBy?: SupervisorFeedbackOrderByWithRelationInput | SupervisorFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupervisorFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupervisorFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupervisorFeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SupervisorFeedbacks
    **/
    _count?: true | SupervisorFeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupervisorFeedbackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupervisorFeedbackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupervisorFeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupervisorFeedbackMaxAggregateInputType
  }

  export type GetSupervisorFeedbackAggregateType<T extends SupervisorFeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateSupervisorFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupervisorFeedback[P]>
      : GetScalarType<T[P], AggregateSupervisorFeedback[P]>
  }




  export type SupervisorFeedbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupervisorFeedbackWhereInput
    orderBy?: SupervisorFeedbackOrderByWithAggregationInput | SupervisorFeedbackOrderByWithAggregationInput[]
    by: SupervisorFeedbackScalarFieldEnum[] | SupervisorFeedbackScalarFieldEnum
    having?: SupervisorFeedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupervisorFeedbackCountAggregateInputType | true
    _avg?: SupervisorFeedbackAvgAggregateInputType
    _sum?: SupervisorFeedbackSumAggregateInputType
    _min?: SupervisorFeedbackMinAggregateInputType
    _max?: SupervisorFeedbackMaxAggregateInputType
  }

  export type SupervisorFeedbackGroupByOutputType = {
    id: string
    studentId: string
    supervisorId: string
    cohortId: string
    feedbackType: string
    relatedTaskId: string | null
    rating: number | null
    comment: string
    isPrivate: boolean
    createdAt: Date
    updatedAt: Date
    _count: SupervisorFeedbackCountAggregateOutputType | null
    _avg: SupervisorFeedbackAvgAggregateOutputType | null
    _sum: SupervisorFeedbackSumAggregateOutputType | null
    _min: SupervisorFeedbackMinAggregateOutputType | null
    _max: SupervisorFeedbackMaxAggregateOutputType | null
  }

  type GetSupervisorFeedbackGroupByPayload<T extends SupervisorFeedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupervisorFeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupervisorFeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupervisorFeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], SupervisorFeedbackGroupByOutputType[P]>
        }
      >
    >


  export type SupervisorFeedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    supervisorId?: boolean
    cohortId?: boolean
    feedbackType?: boolean
    relatedTaskId?: boolean
    rating?: boolean
    comment?: boolean
    isPrivate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["supervisorFeedback"]>

  export type SupervisorFeedbackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    supervisorId?: boolean
    cohortId?: boolean
    feedbackType?: boolean
    relatedTaskId?: boolean
    rating?: boolean
    comment?: boolean
    isPrivate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["supervisorFeedback"]>

  export type SupervisorFeedbackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    supervisorId?: boolean
    cohortId?: boolean
    feedbackType?: boolean
    relatedTaskId?: boolean
    rating?: boolean
    comment?: boolean
    isPrivate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["supervisorFeedback"]>

  export type SupervisorFeedbackSelectScalar = {
    id?: boolean
    studentId?: boolean
    supervisorId?: boolean
    cohortId?: boolean
    feedbackType?: boolean
    relatedTaskId?: boolean
    rating?: boolean
    comment?: boolean
    isPrivate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SupervisorFeedbackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "supervisorId" | "cohortId" | "feedbackType" | "relatedTaskId" | "rating" | "comment" | "isPrivate" | "createdAt" | "updatedAt", ExtArgs["result"]["supervisorFeedback"]>

  export type $SupervisorFeedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SupervisorFeedback"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      supervisorId: string
      cohortId: string
      feedbackType: string
      relatedTaskId: string | null
      rating: number | null
      comment: string
      isPrivate: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["supervisorFeedback"]>
    composites: {}
  }

  type SupervisorFeedbackGetPayload<S extends boolean | null | undefined | SupervisorFeedbackDefaultArgs> = $Result.GetResult<Prisma.$SupervisorFeedbackPayload, S>

  type SupervisorFeedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupervisorFeedbackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupervisorFeedbackCountAggregateInputType | true
    }

  export interface SupervisorFeedbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SupervisorFeedback'], meta: { name: 'SupervisorFeedback' } }
    /**
     * Find zero or one SupervisorFeedback that matches the filter.
     * @param {SupervisorFeedbackFindUniqueArgs} args - Arguments to find a SupervisorFeedback
     * @example
     * // Get one SupervisorFeedback
     * const supervisorFeedback = await prisma.supervisorFeedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupervisorFeedbackFindUniqueArgs>(args: SelectSubset<T, SupervisorFeedbackFindUniqueArgs<ExtArgs>>): Prisma__SupervisorFeedbackClient<$Result.GetResult<Prisma.$SupervisorFeedbackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SupervisorFeedback that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupervisorFeedbackFindUniqueOrThrowArgs} args - Arguments to find a SupervisorFeedback
     * @example
     * // Get one SupervisorFeedback
     * const supervisorFeedback = await prisma.supervisorFeedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupervisorFeedbackFindUniqueOrThrowArgs>(args: SelectSubset<T, SupervisorFeedbackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupervisorFeedbackClient<$Result.GetResult<Prisma.$SupervisorFeedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SupervisorFeedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisorFeedbackFindFirstArgs} args - Arguments to find a SupervisorFeedback
     * @example
     * // Get one SupervisorFeedback
     * const supervisorFeedback = await prisma.supervisorFeedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupervisorFeedbackFindFirstArgs>(args?: SelectSubset<T, SupervisorFeedbackFindFirstArgs<ExtArgs>>): Prisma__SupervisorFeedbackClient<$Result.GetResult<Prisma.$SupervisorFeedbackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SupervisorFeedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisorFeedbackFindFirstOrThrowArgs} args - Arguments to find a SupervisorFeedback
     * @example
     * // Get one SupervisorFeedback
     * const supervisorFeedback = await prisma.supervisorFeedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupervisorFeedbackFindFirstOrThrowArgs>(args?: SelectSubset<T, SupervisorFeedbackFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupervisorFeedbackClient<$Result.GetResult<Prisma.$SupervisorFeedbackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SupervisorFeedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisorFeedbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupervisorFeedbacks
     * const supervisorFeedbacks = await prisma.supervisorFeedback.findMany()
     * 
     * // Get first 10 SupervisorFeedbacks
     * const supervisorFeedbacks = await prisma.supervisorFeedback.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supervisorFeedbackWithIdOnly = await prisma.supervisorFeedback.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupervisorFeedbackFindManyArgs>(args?: SelectSubset<T, SupervisorFeedbackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupervisorFeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SupervisorFeedback.
     * @param {SupervisorFeedbackCreateArgs} args - Arguments to create a SupervisorFeedback.
     * @example
     * // Create one SupervisorFeedback
     * const SupervisorFeedback = await prisma.supervisorFeedback.create({
     *   data: {
     *     // ... data to create a SupervisorFeedback
     *   }
     * })
     * 
     */
    create<T extends SupervisorFeedbackCreateArgs>(args: SelectSubset<T, SupervisorFeedbackCreateArgs<ExtArgs>>): Prisma__SupervisorFeedbackClient<$Result.GetResult<Prisma.$SupervisorFeedbackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SupervisorFeedbacks.
     * @param {SupervisorFeedbackCreateManyArgs} args - Arguments to create many SupervisorFeedbacks.
     * @example
     * // Create many SupervisorFeedbacks
     * const supervisorFeedback = await prisma.supervisorFeedback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupervisorFeedbackCreateManyArgs>(args?: SelectSubset<T, SupervisorFeedbackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SupervisorFeedbacks and returns the data saved in the database.
     * @param {SupervisorFeedbackCreateManyAndReturnArgs} args - Arguments to create many SupervisorFeedbacks.
     * @example
     * // Create many SupervisorFeedbacks
     * const supervisorFeedback = await prisma.supervisorFeedback.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SupervisorFeedbacks and only return the `id`
     * const supervisorFeedbackWithIdOnly = await prisma.supervisorFeedback.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupervisorFeedbackCreateManyAndReturnArgs>(args?: SelectSubset<T, SupervisorFeedbackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupervisorFeedbackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SupervisorFeedback.
     * @param {SupervisorFeedbackDeleteArgs} args - Arguments to delete one SupervisorFeedback.
     * @example
     * // Delete one SupervisorFeedback
     * const SupervisorFeedback = await prisma.supervisorFeedback.delete({
     *   where: {
     *     // ... filter to delete one SupervisorFeedback
     *   }
     * })
     * 
     */
    delete<T extends SupervisorFeedbackDeleteArgs>(args: SelectSubset<T, SupervisorFeedbackDeleteArgs<ExtArgs>>): Prisma__SupervisorFeedbackClient<$Result.GetResult<Prisma.$SupervisorFeedbackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SupervisorFeedback.
     * @param {SupervisorFeedbackUpdateArgs} args - Arguments to update one SupervisorFeedback.
     * @example
     * // Update one SupervisorFeedback
     * const supervisorFeedback = await prisma.supervisorFeedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupervisorFeedbackUpdateArgs>(args: SelectSubset<T, SupervisorFeedbackUpdateArgs<ExtArgs>>): Prisma__SupervisorFeedbackClient<$Result.GetResult<Prisma.$SupervisorFeedbackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SupervisorFeedbacks.
     * @param {SupervisorFeedbackDeleteManyArgs} args - Arguments to filter SupervisorFeedbacks to delete.
     * @example
     * // Delete a few SupervisorFeedbacks
     * const { count } = await prisma.supervisorFeedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupervisorFeedbackDeleteManyArgs>(args?: SelectSubset<T, SupervisorFeedbackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupervisorFeedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisorFeedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupervisorFeedbacks
     * const supervisorFeedback = await prisma.supervisorFeedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupervisorFeedbackUpdateManyArgs>(args: SelectSubset<T, SupervisorFeedbackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupervisorFeedbacks and returns the data updated in the database.
     * @param {SupervisorFeedbackUpdateManyAndReturnArgs} args - Arguments to update many SupervisorFeedbacks.
     * @example
     * // Update many SupervisorFeedbacks
     * const supervisorFeedback = await prisma.supervisorFeedback.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SupervisorFeedbacks and only return the `id`
     * const supervisorFeedbackWithIdOnly = await prisma.supervisorFeedback.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SupervisorFeedbackUpdateManyAndReturnArgs>(args: SelectSubset<T, SupervisorFeedbackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupervisorFeedbackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SupervisorFeedback.
     * @param {SupervisorFeedbackUpsertArgs} args - Arguments to update or create a SupervisorFeedback.
     * @example
     * // Update or create a SupervisorFeedback
     * const supervisorFeedback = await prisma.supervisorFeedback.upsert({
     *   create: {
     *     // ... data to create a SupervisorFeedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupervisorFeedback we want to update
     *   }
     * })
     */
    upsert<T extends SupervisorFeedbackUpsertArgs>(args: SelectSubset<T, SupervisorFeedbackUpsertArgs<ExtArgs>>): Prisma__SupervisorFeedbackClient<$Result.GetResult<Prisma.$SupervisorFeedbackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SupervisorFeedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisorFeedbackCountArgs} args - Arguments to filter SupervisorFeedbacks to count.
     * @example
     * // Count the number of SupervisorFeedbacks
     * const count = await prisma.supervisorFeedback.count({
     *   where: {
     *     // ... the filter for the SupervisorFeedbacks we want to count
     *   }
     * })
    **/
    count<T extends SupervisorFeedbackCountArgs>(
      args?: Subset<T, SupervisorFeedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupervisorFeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SupervisorFeedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisorFeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SupervisorFeedbackAggregateArgs>(args: Subset<T, SupervisorFeedbackAggregateArgs>): Prisma.PrismaPromise<GetSupervisorFeedbackAggregateType<T>>

    /**
     * Group by SupervisorFeedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisorFeedbackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SupervisorFeedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupervisorFeedbackGroupByArgs['orderBy'] }
        : { orderBy?: SupervisorFeedbackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SupervisorFeedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupervisorFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SupervisorFeedback model
   */
  readonly fields: SupervisorFeedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SupervisorFeedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupervisorFeedbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SupervisorFeedback model
   */
  interface SupervisorFeedbackFieldRefs {
    readonly id: FieldRef<"SupervisorFeedback", 'String'>
    readonly studentId: FieldRef<"SupervisorFeedback", 'String'>
    readonly supervisorId: FieldRef<"SupervisorFeedback", 'String'>
    readonly cohortId: FieldRef<"SupervisorFeedback", 'String'>
    readonly feedbackType: FieldRef<"SupervisorFeedback", 'String'>
    readonly relatedTaskId: FieldRef<"SupervisorFeedback", 'String'>
    readonly rating: FieldRef<"SupervisorFeedback", 'Int'>
    readonly comment: FieldRef<"SupervisorFeedback", 'String'>
    readonly isPrivate: FieldRef<"SupervisorFeedback", 'Boolean'>
    readonly createdAt: FieldRef<"SupervisorFeedback", 'DateTime'>
    readonly updatedAt: FieldRef<"SupervisorFeedback", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SupervisorFeedback findUnique
   */
  export type SupervisorFeedbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisorFeedback
     */
    select?: SupervisorFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupervisorFeedback
     */
    omit?: SupervisorFeedbackOmit<ExtArgs> | null
    /**
     * Filter, which SupervisorFeedback to fetch.
     */
    where: SupervisorFeedbackWhereUniqueInput
  }

  /**
   * SupervisorFeedback findUniqueOrThrow
   */
  export type SupervisorFeedbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisorFeedback
     */
    select?: SupervisorFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupervisorFeedback
     */
    omit?: SupervisorFeedbackOmit<ExtArgs> | null
    /**
     * Filter, which SupervisorFeedback to fetch.
     */
    where: SupervisorFeedbackWhereUniqueInput
  }

  /**
   * SupervisorFeedback findFirst
   */
  export type SupervisorFeedbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisorFeedback
     */
    select?: SupervisorFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupervisorFeedback
     */
    omit?: SupervisorFeedbackOmit<ExtArgs> | null
    /**
     * Filter, which SupervisorFeedback to fetch.
     */
    where?: SupervisorFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupervisorFeedbacks to fetch.
     */
    orderBy?: SupervisorFeedbackOrderByWithRelationInput | SupervisorFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupervisorFeedbacks.
     */
    cursor?: SupervisorFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupervisorFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupervisorFeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupervisorFeedbacks.
     */
    distinct?: SupervisorFeedbackScalarFieldEnum | SupervisorFeedbackScalarFieldEnum[]
  }

  /**
   * SupervisorFeedback findFirstOrThrow
   */
  export type SupervisorFeedbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisorFeedback
     */
    select?: SupervisorFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupervisorFeedback
     */
    omit?: SupervisorFeedbackOmit<ExtArgs> | null
    /**
     * Filter, which SupervisorFeedback to fetch.
     */
    where?: SupervisorFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupervisorFeedbacks to fetch.
     */
    orderBy?: SupervisorFeedbackOrderByWithRelationInput | SupervisorFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupervisorFeedbacks.
     */
    cursor?: SupervisorFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupervisorFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupervisorFeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupervisorFeedbacks.
     */
    distinct?: SupervisorFeedbackScalarFieldEnum | SupervisorFeedbackScalarFieldEnum[]
  }

  /**
   * SupervisorFeedback findMany
   */
  export type SupervisorFeedbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisorFeedback
     */
    select?: SupervisorFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupervisorFeedback
     */
    omit?: SupervisorFeedbackOmit<ExtArgs> | null
    /**
     * Filter, which SupervisorFeedbacks to fetch.
     */
    where?: SupervisorFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupervisorFeedbacks to fetch.
     */
    orderBy?: SupervisorFeedbackOrderByWithRelationInput | SupervisorFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SupervisorFeedbacks.
     */
    cursor?: SupervisorFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupervisorFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupervisorFeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupervisorFeedbacks.
     */
    distinct?: SupervisorFeedbackScalarFieldEnum | SupervisorFeedbackScalarFieldEnum[]
  }

  /**
   * SupervisorFeedback create
   */
  export type SupervisorFeedbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisorFeedback
     */
    select?: SupervisorFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupervisorFeedback
     */
    omit?: SupervisorFeedbackOmit<ExtArgs> | null
    /**
     * The data needed to create a SupervisorFeedback.
     */
    data: XOR<SupervisorFeedbackCreateInput, SupervisorFeedbackUncheckedCreateInput>
  }

  /**
   * SupervisorFeedback createMany
   */
  export type SupervisorFeedbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SupervisorFeedbacks.
     */
    data: SupervisorFeedbackCreateManyInput | SupervisorFeedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SupervisorFeedback createManyAndReturn
   */
  export type SupervisorFeedbackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisorFeedback
     */
    select?: SupervisorFeedbackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SupervisorFeedback
     */
    omit?: SupervisorFeedbackOmit<ExtArgs> | null
    /**
     * The data used to create many SupervisorFeedbacks.
     */
    data: SupervisorFeedbackCreateManyInput | SupervisorFeedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SupervisorFeedback update
   */
  export type SupervisorFeedbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisorFeedback
     */
    select?: SupervisorFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupervisorFeedback
     */
    omit?: SupervisorFeedbackOmit<ExtArgs> | null
    /**
     * The data needed to update a SupervisorFeedback.
     */
    data: XOR<SupervisorFeedbackUpdateInput, SupervisorFeedbackUncheckedUpdateInput>
    /**
     * Choose, which SupervisorFeedback to update.
     */
    where: SupervisorFeedbackWhereUniqueInput
  }

  /**
   * SupervisorFeedback updateMany
   */
  export type SupervisorFeedbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SupervisorFeedbacks.
     */
    data: XOR<SupervisorFeedbackUpdateManyMutationInput, SupervisorFeedbackUncheckedUpdateManyInput>
    /**
     * Filter which SupervisorFeedbacks to update
     */
    where?: SupervisorFeedbackWhereInput
    /**
     * Limit how many SupervisorFeedbacks to update.
     */
    limit?: number
  }

  /**
   * SupervisorFeedback updateManyAndReturn
   */
  export type SupervisorFeedbackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisorFeedback
     */
    select?: SupervisorFeedbackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SupervisorFeedback
     */
    omit?: SupervisorFeedbackOmit<ExtArgs> | null
    /**
     * The data used to update SupervisorFeedbacks.
     */
    data: XOR<SupervisorFeedbackUpdateManyMutationInput, SupervisorFeedbackUncheckedUpdateManyInput>
    /**
     * Filter which SupervisorFeedbacks to update
     */
    where?: SupervisorFeedbackWhereInput
    /**
     * Limit how many SupervisorFeedbacks to update.
     */
    limit?: number
  }

  /**
   * SupervisorFeedback upsert
   */
  export type SupervisorFeedbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisorFeedback
     */
    select?: SupervisorFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupervisorFeedback
     */
    omit?: SupervisorFeedbackOmit<ExtArgs> | null
    /**
     * The filter to search for the SupervisorFeedback to update in case it exists.
     */
    where: SupervisorFeedbackWhereUniqueInput
    /**
     * In case the SupervisorFeedback found by the `where` argument doesn't exist, create a new SupervisorFeedback with this data.
     */
    create: XOR<SupervisorFeedbackCreateInput, SupervisorFeedbackUncheckedCreateInput>
    /**
     * In case the SupervisorFeedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupervisorFeedbackUpdateInput, SupervisorFeedbackUncheckedUpdateInput>
  }

  /**
   * SupervisorFeedback delete
   */
  export type SupervisorFeedbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisorFeedback
     */
    select?: SupervisorFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupervisorFeedback
     */
    omit?: SupervisorFeedbackOmit<ExtArgs> | null
    /**
     * Filter which SupervisorFeedback to delete.
     */
    where: SupervisorFeedbackWhereUniqueInput
  }

  /**
   * SupervisorFeedback deleteMany
   */
  export type SupervisorFeedbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupervisorFeedbacks to delete
     */
    where?: SupervisorFeedbackWhereInput
    /**
     * Limit how many SupervisorFeedbacks to delete.
     */
    limit?: number
  }

  /**
   * SupervisorFeedback without action
   */
  export type SupervisorFeedbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisorFeedback
     */
    select?: SupervisorFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupervisorFeedback
     */
    omit?: SupervisorFeedbackOmit<ExtArgs> | null
  }


  /**
   * Model ChatMessage
   */

  export type AggregateChatMessage = {
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  export type ChatMessageMinAggregateOutputType = {
    id: string | null
    roomId: string | null
    senderId: string | null
    senderName: string | null
    role: string | null
    isAdmin: boolean | null
    type: string | null
    content: string | null
    timestamp: Date | null
    createdAt: Date | null
  }

  export type ChatMessageMaxAggregateOutputType = {
    id: string | null
    roomId: string | null
    senderId: string | null
    senderName: string | null
    role: string | null
    isAdmin: boolean | null
    type: string | null
    content: string | null
    timestamp: Date | null
    createdAt: Date | null
  }

  export type ChatMessageCountAggregateOutputType = {
    id: number
    roomId: number
    senderId: number
    senderName: number
    role: number
    isAdmin: number
    type: number
    content: number
    timestamp: number
    createdAt: number
    _all: number
  }


  export type ChatMessageMinAggregateInputType = {
    id?: true
    roomId?: true
    senderId?: true
    senderName?: true
    role?: true
    isAdmin?: true
    type?: true
    content?: true
    timestamp?: true
    createdAt?: true
  }

  export type ChatMessageMaxAggregateInputType = {
    id?: true
    roomId?: true
    senderId?: true
    senderName?: true
    role?: true
    isAdmin?: true
    type?: true
    content?: true
    timestamp?: true
    createdAt?: true
  }

  export type ChatMessageCountAggregateInputType = {
    id?: true
    roomId?: true
    senderId?: true
    senderName?: true
    role?: true
    isAdmin?: true
    type?: true
    content?: true
    timestamp?: true
    createdAt?: true
    _all?: true
  }

  export type ChatMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessage to aggregate.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMessages
    **/
    _count?: true | ChatMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessageMaxAggregateInputType
  }

  export type GetChatMessageAggregateType<T extends ChatMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessage[P]>
      : GetScalarType<T[P], AggregateChatMessage[P]>
  }




  export type ChatMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithAggregationInput | ChatMessageOrderByWithAggregationInput[]
    by: ChatMessageScalarFieldEnum[] | ChatMessageScalarFieldEnum
    having?: ChatMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessageCountAggregateInputType | true
    _min?: ChatMessageMinAggregateInputType
    _max?: ChatMessageMaxAggregateInputType
  }

  export type ChatMessageGroupByOutputType = {
    id: string
    roomId: string
    senderId: string
    senderName: string
    role: string
    isAdmin: boolean
    type: string
    content: string
    timestamp: Date
    createdAt: Date
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  type GetChatMessageGroupByPayload<T extends ChatMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
        }
      >
    >


  export type ChatMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    senderId?: boolean
    senderName?: boolean
    role?: boolean
    isAdmin?: boolean
    type?: boolean
    content?: boolean
    timestamp?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    senderId?: boolean
    senderName?: boolean
    role?: boolean
    isAdmin?: boolean
    type?: boolean
    content?: boolean
    timestamp?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    senderId?: boolean
    senderName?: boolean
    role?: boolean
    isAdmin?: boolean
    type?: boolean
    content?: boolean
    timestamp?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectScalar = {
    id?: boolean
    roomId?: boolean
    senderId?: boolean
    senderName?: boolean
    role?: boolean
    isAdmin?: boolean
    type?: boolean
    content?: boolean
    timestamp?: boolean
    createdAt?: boolean
  }

  export type ChatMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomId" | "senderId" | "senderName" | "role" | "isAdmin" | "type" | "content" | "timestamp" | "createdAt", ExtArgs["result"]["chatMessage"]>

  export type $ChatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      roomId: string
      senderId: string
      senderName: string
      role: string
      isAdmin: boolean
      type: string
      content: string
      timestamp: Date
      createdAt: Date
    }, ExtArgs["result"]["chatMessage"]>
    composites: {}
  }

  type ChatMessageGetPayload<S extends boolean | null | undefined | ChatMessageDefaultArgs> = $Result.GetResult<Prisma.$ChatMessagePayload, S>

  type ChatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMessageCountAggregateInputType | true
    }

  export interface ChatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMessage'], meta: { name: 'ChatMessage' } }
    /**
     * Find zero or one ChatMessage that matches the filter.
     * @param {ChatMessageFindUniqueArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMessageFindUniqueArgs>(args: SelectSubset<T, ChatMessageFindUniqueArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatMessageFindUniqueOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMessageFindFirstArgs>(args?: SelectSubset<T, ChatMessageFindFirstArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatMessageFindManyArgs>(args?: SelectSubset<T, ChatMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatMessage.
     * @param {ChatMessageCreateArgs} args - Arguments to create a ChatMessage.
     * @example
     * // Create one ChatMessage
     * const ChatMessage = await prisma.chatMessage.create({
     *   data: {
     *     // ... data to create a ChatMessage
     *   }
     * })
     * 
     */
    create<T extends ChatMessageCreateArgs>(args: SelectSubset<T, ChatMessageCreateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatMessages.
     * @param {ChatMessageCreateManyArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMessageCreateManyArgs>(args?: SelectSubset<T, ChatMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatMessages and returns the data saved in the database.
     * @param {ChatMessageCreateManyAndReturnArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatMessage.
     * @param {ChatMessageDeleteArgs} args - Arguments to delete one ChatMessage.
     * @example
     * // Delete one ChatMessage
     * const ChatMessage = await prisma.chatMessage.delete({
     *   where: {
     *     // ... filter to delete one ChatMessage
     *   }
     * })
     * 
     */
    delete<T extends ChatMessageDeleteArgs>(args: SelectSubset<T, ChatMessageDeleteArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatMessage.
     * @param {ChatMessageUpdateArgs} args - Arguments to update one ChatMessage.
     * @example
     * // Update one ChatMessage
     * const chatMessage = await prisma.chatMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMessageUpdateArgs>(args: SelectSubset<T, ChatMessageUpdateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatMessages.
     * @param {ChatMessageDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMessageDeleteManyArgs>(args?: SelectSubset<T, ChatMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMessageUpdateManyArgs>(args: SelectSubset<T, ChatMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages and returns the data updated in the database.
     * @param {ChatMessageUpdateManyAndReturnArgs} args - Arguments to update many ChatMessages.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatMessage.
     * @param {ChatMessageUpsertArgs} args - Arguments to update or create a ChatMessage.
     * @example
     * // Update or create a ChatMessage
     * const chatMessage = await prisma.chatMessage.upsert({
     *   create: {
     *     // ... data to create a ChatMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessage we want to update
     *   }
     * })
     */
    upsert<T extends ChatMessageUpsertArgs>(args: SelectSubset<T, ChatMessageUpsertArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessage.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends ChatMessageCountArgs>(
      args?: Subset<T, ChatMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatMessageAggregateArgs>(args: Subset<T, ChatMessageAggregateArgs>): Prisma.PrismaPromise<GetChatMessageAggregateType<T>>

    /**
     * Group by ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessageGroupByArgs['orderBy'] }
        : { orderBy?: ChatMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMessage model
   */
  readonly fields: ChatMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatMessage model
   */
  interface ChatMessageFieldRefs {
    readonly id: FieldRef<"ChatMessage", 'String'>
    readonly roomId: FieldRef<"ChatMessage", 'String'>
    readonly senderId: FieldRef<"ChatMessage", 'String'>
    readonly senderName: FieldRef<"ChatMessage", 'String'>
    readonly role: FieldRef<"ChatMessage", 'String'>
    readonly isAdmin: FieldRef<"ChatMessage", 'Boolean'>
    readonly type: FieldRef<"ChatMessage", 'String'>
    readonly content: FieldRef<"ChatMessage", 'String'>
    readonly timestamp: FieldRef<"ChatMessage", 'DateTime'>
    readonly createdAt: FieldRef<"ChatMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatMessage findUnique
   */
  export type ChatMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findUniqueOrThrow
   */
  export type ChatMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findFirst
   */
  export type ChatMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findFirstOrThrow
   */
  export type ChatMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findMany
   */
  export type ChatMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage create
   */
  export type ChatMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data needed to create a ChatMessage.
     */
    data: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
  }

  /**
   * ChatMessage createMany
   */
  export type ChatMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMessage createManyAndReturn
   */
  export type ChatMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMessage update
   */
  export type ChatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data needed to update a ChatMessage.
     */
    data: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
    /**
     * Choose, which ChatMessage to update.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage updateMany
   */
  export type ChatMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
  }

  /**
   * ChatMessage updateManyAndReturn
   */
  export type ChatMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
  }

  /**
   * ChatMessage upsert
   */
  export type ChatMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The filter to search for the ChatMessage to update in case it exists.
     */
    where: ChatMessageWhereUniqueInput
    /**
     * In case the ChatMessage found by the `where` argument doesn't exist, create a new ChatMessage with this data.
     */
    create: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
    /**
     * In case the ChatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
  }

  /**
   * ChatMessage delete
   */
  export type ChatMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Filter which ChatMessage to delete.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage deleteMany
   */
  export type ChatMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to delete
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to delete.
     */
    limit?: number
  }

  /**
   * ChatMessage without action
   */
  export type ChatMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Submit_reportScalarFieldEnum: {
    id: 'id',
    title: 'title',
    summary: 'summary',
    notes: 'notes',
    status: 'status',
    submittedAt: 'submittedAt',
    submittedBy: 'submittedBy',
    studentEmail: 'studentEmail'
  };

  export type Submit_reportScalarFieldEnum = (typeof Submit_reportScalarFieldEnum)[keyof typeof Submit_reportScalarFieldEnum]


  export const CohortScalarFieldEnum: {
    id: 'id',
    name: 'name',
    programId: 'programId',
    programType: 'programType',
    startDate: 'startDate',
    endDate: 'endDate',
    isActive: 'isActive',
    maxStudents: 'maxStudents',
    description: 'description',
    department: 'department',
    level: 'level',
    supervisorId: 'supervisorId',
    supervisorName: 'supervisorName',
    supervisorEmail: 'supervisorEmail',
    githubRepoUrl: 'githubRepoUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CohortScalarFieldEnum = (typeof CohortScalarFieldEnum)[keyof typeof CohortScalarFieldEnum]


  export const CohortStudentScalarFieldEnum: {
    id: 'id',
    cohortId: 'cohortId',
    studentId: 'studentId',
    studentEmail: 'studentEmail',
    studentName: 'studentName',
    avatarUrl: 'avatarUrl',
    role: 'role',
    joinedAt: 'joinedAt',
    status: 'status'
  };

  export type CohortStudentScalarFieldEnum = (typeof CohortStudentScalarFieldEnum)[keyof typeof CohortStudentScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    cohortId: 'cohortId',
    title: 'title',
    description: 'description',
    type: 'type',
    dueDate: 'dueDate',
    maxPoints: 'maxPoints',
    difficulty: 'difficulty',
    skills: 'skills',
    githubRequired: 'githubRequired',
    prRequired: 'prRequired',
    requiresReview: 'requiresReview',
    assignedBy: 'assignedBy',
    assignedByName: 'assignedByName',
    assignedByEmail: 'assignedByEmail',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const TaskSubmissionScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    studentId: 'studentId',
    title: 'title',
    description: 'description',
    content: 'content',
    githubRepoUrl: 'githubRepoUrl',
    githubPrUrl: 'githubPrUrl',
    githubBranch: 'githubBranch',
    commitHash: 'commitHash',
    attachments: 'attachments',
    status: 'status',
    pointsEarned: 'pointsEarned',
    feedback: 'feedback',
    reviewedBy: 'reviewedBy',
    reviewedAt: 'reviewedAt',
    submittedAt: 'submittedAt',
    updatedAt: 'updatedAt'
  };

  export type TaskSubmissionScalarFieldEnum = (typeof TaskSubmissionScalarFieldEnum)[keyof typeof TaskSubmissionScalarFieldEnum]


  export const GitHubRepositoryScalarFieldEnum: {
    id: 'id',
    cohortId: 'cohortId',
    name: 'name',
    url: 'url',
    description: 'description',
    type: 'type',
    isActive: 'isActive',
    addedBy: 'addedBy',
    addedByName: 'addedByName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GitHubRepositoryScalarFieldEnum = (typeof GitHubRepositoryScalarFieldEnum)[keyof typeof GitHubRepositoryScalarFieldEnum]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    cohortId: 'cohortId',
    title: 'title',
    description: 'description',
    fileUrl: 'fileUrl',
    fileType: 'fileType',
    fileSize: 'fileSize',
    category: 'category',
    isIndexed: 'isIndexed',
    vectorStoreId: 'vectorStoreId',
    keywords: 'keywords',
    uploadedBy: 'uploadedBy',
    uploadedByName: 'uploadedByName',
    isPublic: 'isPublic',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const GamificationPointScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    pointType: 'pointType',
    points: 'points',
    reason: 'reason',
    relatedTaskId: 'relatedTaskId',
    awardedAt: 'awardedAt'
  };

  export type GamificationPointScalarFieldEnum = (typeof GamificationPointScalarFieldEnum)[keyof typeof GamificationPointScalarFieldEnum]


  export const AchievementScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    icon: 'icon',
    category: 'category',
    pointsRequired: 'pointsRequired',
    condition: 'condition',
    createdAt: 'createdAt'
  };

  export type AchievementScalarFieldEnum = (typeof AchievementScalarFieldEnum)[keyof typeof AchievementScalarFieldEnum]


  export const StudentAchievementScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    achievementId: 'achievementId',
    earnedAt: 'earnedAt'
  };

  export type StudentAchievementScalarFieldEnum = (typeof StudentAchievementScalarFieldEnum)[keyof typeof StudentAchievementScalarFieldEnum]


  export const WeeklyScoreScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    cohortId: 'cohortId',
    weekNumber: 'weekNumber',
    tasksCompleted: 'tasksCompleted',
    tasksOnTime: 'tasksOnTime',
    totalPoints: 'totalPoints',
    codeQuality: 'codeQuality',
    commitFrequency: 'commitFrequency',
    prQuality: 'prQuality',
    overallScore: 'overallScore',
    rank: 'rank',
    aiAnalysis: 'aiAnalysis',
    strengths: 'strengths',
    improvements: 'improvements',
    emailSent: 'emailSent',
    emailSentAt: 'emailSentAt',
    weekStartDate: 'weekStartDate',
    weekEndDate: 'weekEndDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WeeklyScoreScalarFieldEnum = (typeof WeeklyScoreScalarFieldEnum)[keyof typeof WeeklyScoreScalarFieldEnum]


  export const SupervisorFeedbackScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    supervisorId: 'supervisorId',
    cohortId: 'cohortId',
    feedbackType: 'feedbackType',
    relatedTaskId: 'relatedTaskId',
    rating: 'rating',
    comment: 'comment',
    isPrivate: 'isPrivate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SupervisorFeedbackScalarFieldEnum = (typeof SupervisorFeedbackScalarFieldEnum)[keyof typeof SupervisorFeedbackScalarFieldEnum]


  export const ChatMessageScalarFieldEnum: {
    id: 'id',
    roomId: 'roomId',
    senderId: 'senderId',
    senderName: 'senderName',
    role: 'role',
    isAdmin: 'isAdmin',
    type: 'type',
    content: 'content',
    timestamp: 'timestamp',
    createdAt: 'createdAt'
  };

  export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type Submit_reportWhereInput = {
    AND?: Submit_reportWhereInput | Submit_reportWhereInput[]
    OR?: Submit_reportWhereInput[]
    NOT?: Submit_reportWhereInput | Submit_reportWhereInput[]
    id?: StringFilter<"Submit_report"> | string
    title?: StringFilter<"Submit_report"> | string
    summary?: StringFilter<"Submit_report"> | string
    notes?: StringNullableFilter<"Submit_report"> | string | null
    status?: StringFilter<"Submit_report"> | string
    submittedAt?: DateTimeFilter<"Submit_report"> | Date | string
    submittedBy?: StringFilter<"Submit_report"> | string
    studentEmail?: StringFilter<"Submit_report"> | string
  }

  export type Submit_reportOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    submittedAt?: SortOrder
    submittedBy?: SortOrder
    studentEmail?: SortOrder
  }

  export type Submit_reportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Submit_reportWhereInput | Submit_reportWhereInput[]
    OR?: Submit_reportWhereInput[]
    NOT?: Submit_reportWhereInput | Submit_reportWhereInput[]
    title?: StringFilter<"Submit_report"> | string
    summary?: StringFilter<"Submit_report"> | string
    notes?: StringNullableFilter<"Submit_report"> | string | null
    status?: StringFilter<"Submit_report"> | string
    submittedAt?: DateTimeFilter<"Submit_report"> | Date | string
    submittedBy?: StringFilter<"Submit_report"> | string
    studentEmail?: StringFilter<"Submit_report"> | string
  }, "id">

  export type Submit_reportOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    submittedAt?: SortOrder
    submittedBy?: SortOrder
    studentEmail?: SortOrder
    _count?: Submit_reportCountOrderByAggregateInput
    _max?: Submit_reportMaxOrderByAggregateInput
    _min?: Submit_reportMinOrderByAggregateInput
  }

  export type Submit_reportScalarWhereWithAggregatesInput = {
    AND?: Submit_reportScalarWhereWithAggregatesInput | Submit_reportScalarWhereWithAggregatesInput[]
    OR?: Submit_reportScalarWhereWithAggregatesInput[]
    NOT?: Submit_reportScalarWhereWithAggregatesInput | Submit_reportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Submit_report"> | string
    title?: StringWithAggregatesFilter<"Submit_report"> | string
    summary?: StringWithAggregatesFilter<"Submit_report"> | string
    notes?: StringNullableWithAggregatesFilter<"Submit_report"> | string | null
    status?: StringWithAggregatesFilter<"Submit_report"> | string
    submittedAt?: DateTimeWithAggregatesFilter<"Submit_report"> | Date | string
    submittedBy?: StringWithAggregatesFilter<"Submit_report"> | string
    studentEmail?: StringWithAggregatesFilter<"Submit_report"> | string
  }

  export type CohortWhereInput = {
    AND?: CohortWhereInput | CohortWhereInput[]
    OR?: CohortWhereInput[]
    NOT?: CohortWhereInput | CohortWhereInput[]
    id?: StringFilter<"Cohort"> | string
    name?: StringFilter<"Cohort"> | string
    programId?: StringFilter<"Cohort"> | string
    programType?: StringFilter<"Cohort"> | string
    startDate?: DateTimeFilter<"Cohort"> | Date | string
    endDate?: DateTimeFilter<"Cohort"> | Date | string
    isActive?: BoolFilter<"Cohort"> | boolean
    maxStudents?: IntNullableFilter<"Cohort"> | number | null
    description?: StringNullableFilter<"Cohort"> | string | null
    department?: StringFilter<"Cohort"> | string
    level?: StringFilter<"Cohort"> | string
    supervisorId?: StringNullableFilter<"Cohort"> | string | null
    supervisorName?: StringNullableFilter<"Cohort"> | string | null
    supervisorEmail?: StringNullableFilter<"Cohort"> | string | null
    githubRepoUrl?: StringNullableFilter<"Cohort"> | string | null
    createdAt?: DateTimeFilter<"Cohort"> | Date | string
    updatedAt?: DateTimeFilter<"Cohort"> | Date | string
    students?: CohortStudentListRelationFilter
    tasks?: TaskListRelationFilter
    documents?: DocumentListRelationFilter
  }

  export type CohortOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    programId?: SortOrder
    programType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    maxStudents?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    department?: SortOrder
    level?: SortOrder
    supervisorId?: SortOrderInput | SortOrder
    supervisorName?: SortOrderInput | SortOrder
    supervisorEmail?: SortOrderInput | SortOrder
    githubRepoUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    students?: CohortStudentOrderByRelationAggregateInput
    tasks?: TaskOrderByRelationAggregateInput
    documents?: DocumentOrderByRelationAggregateInput
  }

  export type CohortWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CohortWhereInput | CohortWhereInput[]
    OR?: CohortWhereInput[]
    NOT?: CohortWhereInput | CohortWhereInput[]
    name?: StringFilter<"Cohort"> | string
    programId?: StringFilter<"Cohort"> | string
    programType?: StringFilter<"Cohort"> | string
    startDate?: DateTimeFilter<"Cohort"> | Date | string
    endDate?: DateTimeFilter<"Cohort"> | Date | string
    isActive?: BoolFilter<"Cohort"> | boolean
    maxStudents?: IntNullableFilter<"Cohort"> | number | null
    description?: StringNullableFilter<"Cohort"> | string | null
    department?: StringFilter<"Cohort"> | string
    level?: StringFilter<"Cohort"> | string
    supervisorId?: StringNullableFilter<"Cohort"> | string | null
    supervisorName?: StringNullableFilter<"Cohort"> | string | null
    supervisorEmail?: StringNullableFilter<"Cohort"> | string | null
    githubRepoUrl?: StringNullableFilter<"Cohort"> | string | null
    createdAt?: DateTimeFilter<"Cohort"> | Date | string
    updatedAt?: DateTimeFilter<"Cohort"> | Date | string
    students?: CohortStudentListRelationFilter
    tasks?: TaskListRelationFilter
    documents?: DocumentListRelationFilter
  }, "id">

  export type CohortOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    programId?: SortOrder
    programType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    maxStudents?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    department?: SortOrder
    level?: SortOrder
    supervisorId?: SortOrderInput | SortOrder
    supervisorName?: SortOrderInput | SortOrder
    supervisorEmail?: SortOrderInput | SortOrder
    githubRepoUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CohortCountOrderByAggregateInput
    _avg?: CohortAvgOrderByAggregateInput
    _max?: CohortMaxOrderByAggregateInput
    _min?: CohortMinOrderByAggregateInput
    _sum?: CohortSumOrderByAggregateInput
  }

  export type CohortScalarWhereWithAggregatesInput = {
    AND?: CohortScalarWhereWithAggregatesInput | CohortScalarWhereWithAggregatesInput[]
    OR?: CohortScalarWhereWithAggregatesInput[]
    NOT?: CohortScalarWhereWithAggregatesInput | CohortScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cohort"> | string
    name?: StringWithAggregatesFilter<"Cohort"> | string
    programId?: StringWithAggregatesFilter<"Cohort"> | string
    programType?: StringWithAggregatesFilter<"Cohort"> | string
    startDate?: DateTimeWithAggregatesFilter<"Cohort"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Cohort"> | Date | string
    isActive?: BoolWithAggregatesFilter<"Cohort"> | boolean
    maxStudents?: IntNullableWithAggregatesFilter<"Cohort"> | number | null
    description?: StringNullableWithAggregatesFilter<"Cohort"> | string | null
    department?: StringWithAggregatesFilter<"Cohort"> | string
    level?: StringWithAggregatesFilter<"Cohort"> | string
    supervisorId?: StringNullableWithAggregatesFilter<"Cohort"> | string | null
    supervisorName?: StringNullableWithAggregatesFilter<"Cohort"> | string | null
    supervisorEmail?: StringNullableWithAggregatesFilter<"Cohort"> | string | null
    githubRepoUrl?: StringNullableWithAggregatesFilter<"Cohort"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Cohort"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cohort"> | Date | string
  }

  export type CohortStudentWhereInput = {
    AND?: CohortStudentWhereInput | CohortStudentWhereInput[]
    OR?: CohortStudentWhereInput[]
    NOT?: CohortStudentWhereInput | CohortStudentWhereInput[]
    id?: StringFilter<"CohortStudent"> | string
    cohortId?: StringFilter<"CohortStudent"> | string
    studentId?: StringFilter<"CohortStudent"> | string
    studentEmail?: StringFilter<"CohortStudent"> | string
    studentName?: StringFilter<"CohortStudent"> | string
    avatarUrl?: StringNullableFilter<"CohortStudent"> | string | null
    role?: StringFilter<"CohortStudent"> | string
    joinedAt?: DateTimeFilter<"CohortStudent"> | Date | string
    status?: StringFilter<"CohortStudent"> | string
    cohort?: XOR<CohortScalarRelationFilter, CohortWhereInput>
    tasksSubmitted?: TaskSubmissionListRelationFilter
    gamificationPoints?: GamificationPointListRelationFilter
    weeklyScores?: WeeklyScoreListRelationFilter
  }

  export type CohortStudentOrderByWithRelationInput = {
    id?: SortOrder
    cohortId?: SortOrder
    studentId?: SortOrder
    studentEmail?: SortOrder
    studentName?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    status?: SortOrder
    cohort?: CohortOrderByWithRelationInput
    tasksSubmitted?: TaskSubmissionOrderByRelationAggregateInput
    gamificationPoints?: GamificationPointOrderByRelationAggregateInput
    weeklyScores?: WeeklyScoreOrderByRelationAggregateInput
  }

  export type CohortStudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cohortId_studentId?: CohortStudentCohortIdStudentIdCompoundUniqueInput
    AND?: CohortStudentWhereInput | CohortStudentWhereInput[]
    OR?: CohortStudentWhereInput[]
    NOT?: CohortStudentWhereInput | CohortStudentWhereInput[]
    cohortId?: StringFilter<"CohortStudent"> | string
    studentId?: StringFilter<"CohortStudent"> | string
    studentEmail?: StringFilter<"CohortStudent"> | string
    studentName?: StringFilter<"CohortStudent"> | string
    avatarUrl?: StringNullableFilter<"CohortStudent"> | string | null
    role?: StringFilter<"CohortStudent"> | string
    joinedAt?: DateTimeFilter<"CohortStudent"> | Date | string
    status?: StringFilter<"CohortStudent"> | string
    cohort?: XOR<CohortScalarRelationFilter, CohortWhereInput>
    tasksSubmitted?: TaskSubmissionListRelationFilter
    gamificationPoints?: GamificationPointListRelationFilter
    weeklyScores?: WeeklyScoreListRelationFilter
  }, "id" | "cohortId_studentId">

  export type CohortStudentOrderByWithAggregationInput = {
    id?: SortOrder
    cohortId?: SortOrder
    studentId?: SortOrder
    studentEmail?: SortOrder
    studentName?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    status?: SortOrder
    _count?: CohortStudentCountOrderByAggregateInput
    _max?: CohortStudentMaxOrderByAggregateInput
    _min?: CohortStudentMinOrderByAggregateInput
  }

  export type CohortStudentScalarWhereWithAggregatesInput = {
    AND?: CohortStudentScalarWhereWithAggregatesInput | CohortStudentScalarWhereWithAggregatesInput[]
    OR?: CohortStudentScalarWhereWithAggregatesInput[]
    NOT?: CohortStudentScalarWhereWithAggregatesInput | CohortStudentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CohortStudent"> | string
    cohortId?: StringWithAggregatesFilter<"CohortStudent"> | string
    studentId?: StringWithAggregatesFilter<"CohortStudent"> | string
    studentEmail?: StringWithAggregatesFilter<"CohortStudent"> | string
    studentName?: StringWithAggregatesFilter<"CohortStudent"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"CohortStudent"> | string | null
    role?: StringWithAggregatesFilter<"CohortStudent"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"CohortStudent"> | Date | string
    status?: StringWithAggregatesFilter<"CohortStudent"> | string
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    cohortId?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringFilter<"Task"> | string
    type?: StringFilter<"Task"> | string
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    maxPoints?: IntFilter<"Task"> | number
    difficulty?: StringFilter<"Task"> | string
    skills?: StringNullableListFilter<"Task">
    githubRequired?: BoolFilter<"Task"> | boolean
    prRequired?: BoolFilter<"Task"> | boolean
    requiresReview?: BoolFilter<"Task"> | boolean
    assignedBy?: StringFilter<"Task"> | string
    assignedByName?: StringFilter<"Task"> | string
    assignedByEmail?: StringFilter<"Task"> | string
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    cohort?: XOR<CohortScalarRelationFilter, CohortWhereInput>
    submissions?: TaskSubmissionListRelationFilter
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    cohortId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    maxPoints?: SortOrder
    difficulty?: SortOrder
    skills?: SortOrder
    githubRequired?: SortOrder
    prRequired?: SortOrder
    requiresReview?: SortOrder
    assignedBy?: SortOrder
    assignedByName?: SortOrder
    assignedByEmail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cohort?: CohortOrderByWithRelationInput
    submissions?: TaskSubmissionOrderByRelationAggregateInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    cohortId?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringFilter<"Task"> | string
    type?: StringFilter<"Task"> | string
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    maxPoints?: IntFilter<"Task"> | number
    difficulty?: StringFilter<"Task"> | string
    skills?: StringNullableListFilter<"Task">
    githubRequired?: BoolFilter<"Task"> | boolean
    prRequired?: BoolFilter<"Task"> | boolean
    requiresReview?: BoolFilter<"Task"> | boolean
    assignedBy?: StringFilter<"Task"> | string
    assignedByName?: StringFilter<"Task"> | string
    assignedByEmail?: StringFilter<"Task"> | string
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    cohort?: XOR<CohortScalarRelationFilter, CohortWhereInput>
    submissions?: TaskSubmissionListRelationFilter
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    cohortId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    maxPoints?: SortOrder
    difficulty?: SortOrder
    skills?: SortOrder
    githubRequired?: SortOrder
    prRequired?: SortOrder
    requiresReview?: SortOrder
    assignedBy?: SortOrder
    assignedByName?: SortOrder
    assignedByEmail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    cohortId?: StringWithAggregatesFilter<"Task"> | string
    title?: StringWithAggregatesFilter<"Task"> | string
    description?: StringWithAggregatesFilter<"Task"> | string
    type?: StringWithAggregatesFilter<"Task"> | string
    dueDate?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    maxPoints?: IntWithAggregatesFilter<"Task"> | number
    difficulty?: StringWithAggregatesFilter<"Task"> | string
    skills?: StringNullableListFilter<"Task">
    githubRequired?: BoolWithAggregatesFilter<"Task"> | boolean
    prRequired?: BoolWithAggregatesFilter<"Task"> | boolean
    requiresReview?: BoolWithAggregatesFilter<"Task"> | boolean
    assignedBy?: StringWithAggregatesFilter<"Task"> | string
    assignedByName?: StringWithAggregatesFilter<"Task"> | string
    assignedByEmail?: StringWithAggregatesFilter<"Task"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
  }

  export type TaskSubmissionWhereInput = {
    AND?: TaskSubmissionWhereInput | TaskSubmissionWhereInput[]
    OR?: TaskSubmissionWhereInput[]
    NOT?: TaskSubmissionWhereInput | TaskSubmissionWhereInput[]
    id?: StringFilter<"TaskSubmission"> | string
    taskId?: StringFilter<"TaskSubmission"> | string
    studentId?: StringFilter<"TaskSubmission"> | string
    title?: StringFilter<"TaskSubmission"> | string
    description?: StringFilter<"TaskSubmission"> | string
    content?: StringFilter<"TaskSubmission"> | string
    githubRepoUrl?: StringNullableFilter<"TaskSubmission"> | string | null
    githubPrUrl?: StringNullableFilter<"TaskSubmission"> | string | null
    githubBranch?: StringNullableFilter<"TaskSubmission"> | string | null
    commitHash?: StringNullableFilter<"TaskSubmission"> | string | null
    attachments?: StringNullableListFilter<"TaskSubmission">
    status?: StringFilter<"TaskSubmission"> | string
    pointsEarned?: IntNullableFilter<"TaskSubmission"> | number | null
    feedback?: StringNullableFilter<"TaskSubmission"> | string | null
    reviewedBy?: StringNullableFilter<"TaskSubmission"> | string | null
    reviewedAt?: DateTimeNullableFilter<"TaskSubmission"> | Date | string | null
    submittedAt?: DateTimeFilter<"TaskSubmission"> | Date | string
    updatedAt?: DateTimeFilter<"TaskSubmission"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    student?: XOR<CohortStudentScalarRelationFilter, CohortStudentWhereInput>
  }

  export type TaskSubmissionOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    studentId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    githubRepoUrl?: SortOrderInput | SortOrder
    githubPrUrl?: SortOrderInput | SortOrder
    githubBranch?: SortOrderInput | SortOrder
    commitHash?: SortOrderInput | SortOrder
    attachments?: SortOrder
    status?: SortOrder
    pointsEarned?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    reviewedBy?: SortOrderInput | SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    submittedAt?: SortOrder
    updatedAt?: SortOrder
    task?: TaskOrderByWithRelationInput
    student?: CohortStudentOrderByWithRelationInput
  }

  export type TaskSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskSubmissionWhereInput | TaskSubmissionWhereInput[]
    OR?: TaskSubmissionWhereInput[]
    NOT?: TaskSubmissionWhereInput | TaskSubmissionWhereInput[]
    taskId?: StringFilter<"TaskSubmission"> | string
    studentId?: StringFilter<"TaskSubmission"> | string
    title?: StringFilter<"TaskSubmission"> | string
    description?: StringFilter<"TaskSubmission"> | string
    content?: StringFilter<"TaskSubmission"> | string
    githubRepoUrl?: StringNullableFilter<"TaskSubmission"> | string | null
    githubPrUrl?: StringNullableFilter<"TaskSubmission"> | string | null
    githubBranch?: StringNullableFilter<"TaskSubmission"> | string | null
    commitHash?: StringNullableFilter<"TaskSubmission"> | string | null
    attachments?: StringNullableListFilter<"TaskSubmission">
    status?: StringFilter<"TaskSubmission"> | string
    pointsEarned?: IntNullableFilter<"TaskSubmission"> | number | null
    feedback?: StringNullableFilter<"TaskSubmission"> | string | null
    reviewedBy?: StringNullableFilter<"TaskSubmission"> | string | null
    reviewedAt?: DateTimeNullableFilter<"TaskSubmission"> | Date | string | null
    submittedAt?: DateTimeFilter<"TaskSubmission"> | Date | string
    updatedAt?: DateTimeFilter<"TaskSubmission"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    student?: XOR<CohortStudentScalarRelationFilter, CohortStudentWhereInput>
  }, "id">

  export type TaskSubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    studentId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    githubRepoUrl?: SortOrderInput | SortOrder
    githubPrUrl?: SortOrderInput | SortOrder
    githubBranch?: SortOrderInput | SortOrder
    commitHash?: SortOrderInput | SortOrder
    attachments?: SortOrder
    status?: SortOrder
    pointsEarned?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    reviewedBy?: SortOrderInput | SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    submittedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TaskSubmissionCountOrderByAggregateInput
    _avg?: TaskSubmissionAvgOrderByAggregateInput
    _max?: TaskSubmissionMaxOrderByAggregateInput
    _min?: TaskSubmissionMinOrderByAggregateInput
    _sum?: TaskSubmissionSumOrderByAggregateInput
  }

  export type TaskSubmissionScalarWhereWithAggregatesInput = {
    AND?: TaskSubmissionScalarWhereWithAggregatesInput | TaskSubmissionScalarWhereWithAggregatesInput[]
    OR?: TaskSubmissionScalarWhereWithAggregatesInput[]
    NOT?: TaskSubmissionScalarWhereWithAggregatesInput | TaskSubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TaskSubmission"> | string
    taskId?: StringWithAggregatesFilter<"TaskSubmission"> | string
    studentId?: StringWithAggregatesFilter<"TaskSubmission"> | string
    title?: StringWithAggregatesFilter<"TaskSubmission"> | string
    description?: StringWithAggregatesFilter<"TaskSubmission"> | string
    content?: StringWithAggregatesFilter<"TaskSubmission"> | string
    githubRepoUrl?: StringNullableWithAggregatesFilter<"TaskSubmission"> | string | null
    githubPrUrl?: StringNullableWithAggregatesFilter<"TaskSubmission"> | string | null
    githubBranch?: StringNullableWithAggregatesFilter<"TaskSubmission"> | string | null
    commitHash?: StringNullableWithAggregatesFilter<"TaskSubmission"> | string | null
    attachments?: StringNullableListFilter<"TaskSubmission">
    status?: StringWithAggregatesFilter<"TaskSubmission"> | string
    pointsEarned?: IntNullableWithAggregatesFilter<"TaskSubmission"> | number | null
    feedback?: StringNullableWithAggregatesFilter<"TaskSubmission"> | string | null
    reviewedBy?: StringNullableWithAggregatesFilter<"TaskSubmission"> | string | null
    reviewedAt?: DateTimeNullableWithAggregatesFilter<"TaskSubmission"> | Date | string | null
    submittedAt?: DateTimeWithAggregatesFilter<"TaskSubmission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TaskSubmission"> | Date | string
  }

  export type GitHubRepositoryWhereInput = {
    AND?: GitHubRepositoryWhereInput | GitHubRepositoryWhereInput[]
    OR?: GitHubRepositoryWhereInput[]
    NOT?: GitHubRepositoryWhereInput | GitHubRepositoryWhereInput[]
    id?: StringFilter<"GitHubRepository"> | string
    cohortId?: StringNullableFilter<"GitHubRepository"> | string | null
    name?: StringFilter<"GitHubRepository"> | string
    url?: StringFilter<"GitHubRepository"> | string
    description?: StringNullableFilter<"GitHubRepository"> | string | null
    type?: StringFilter<"GitHubRepository"> | string
    isActive?: BoolFilter<"GitHubRepository"> | boolean
    addedBy?: StringFilter<"GitHubRepository"> | string
    addedByName?: StringFilter<"GitHubRepository"> | string
    createdAt?: DateTimeFilter<"GitHubRepository"> | Date | string
    updatedAt?: DateTimeFilter<"GitHubRepository"> | Date | string
  }

  export type GitHubRepositoryOrderByWithRelationInput = {
    id?: SortOrder
    cohortId?: SortOrderInput | SortOrder
    name?: SortOrder
    url?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    isActive?: SortOrder
    addedBy?: SortOrder
    addedByName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GitHubRepositoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GitHubRepositoryWhereInput | GitHubRepositoryWhereInput[]
    OR?: GitHubRepositoryWhereInput[]
    NOT?: GitHubRepositoryWhereInput | GitHubRepositoryWhereInput[]
    cohortId?: StringNullableFilter<"GitHubRepository"> | string | null
    name?: StringFilter<"GitHubRepository"> | string
    url?: StringFilter<"GitHubRepository"> | string
    description?: StringNullableFilter<"GitHubRepository"> | string | null
    type?: StringFilter<"GitHubRepository"> | string
    isActive?: BoolFilter<"GitHubRepository"> | boolean
    addedBy?: StringFilter<"GitHubRepository"> | string
    addedByName?: StringFilter<"GitHubRepository"> | string
    createdAt?: DateTimeFilter<"GitHubRepository"> | Date | string
    updatedAt?: DateTimeFilter<"GitHubRepository"> | Date | string
  }, "id">

  export type GitHubRepositoryOrderByWithAggregationInput = {
    id?: SortOrder
    cohortId?: SortOrderInput | SortOrder
    name?: SortOrder
    url?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    isActive?: SortOrder
    addedBy?: SortOrder
    addedByName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GitHubRepositoryCountOrderByAggregateInput
    _max?: GitHubRepositoryMaxOrderByAggregateInput
    _min?: GitHubRepositoryMinOrderByAggregateInput
  }

  export type GitHubRepositoryScalarWhereWithAggregatesInput = {
    AND?: GitHubRepositoryScalarWhereWithAggregatesInput | GitHubRepositoryScalarWhereWithAggregatesInput[]
    OR?: GitHubRepositoryScalarWhereWithAggregatesInput[]
    NOT?: GitHubRepositoryScalarWhereWithAggregatesInput | GitHubRepositoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GitHubRepository"> | string
    cohortId?: StringNullableWithAggregatesFilter<"GitHubRepository"> | string | null
    name?: StringWithAggregatesFilter<"GitHubRepository"> | string
    url?: StringWithAggregatesFilter<"GitHubRepository"> | string
    description?: StringNullableWithAggregatesFilter<"GitHubRepository"> | string | null
    type?: StringWithAggregatesFilter<"GitHubRepository"> | string
    isActive?: BoolWithAggregatesFilter<"GitHubRepository"> | boolean
    addedBy?: StringWithAggregatesFilter<"GitHubRepository"> | string
    addedByName?: StringWithAggregatesFilter<"GitHubRepository"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GitHubRepository"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GitHubRepository"> | Date | string
  }

  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    id?: StringFilter<"Document"> | string
    cohortId?: StringFilter<"Document"> | string
    title?: StringFilter<"Document"> | string
    description?: StringNullableFilter<"Document"> | string | null
    fileUrl?: StringFilter<"Document"> | string
    fileType?: StringFilter<"Document"> | string
    fileSize?: IntFilter<"Document"> | number
    category?: StringFilter<"Document"> | string
    isIndexed?: BoolFilter<"Document"> | boolean
    vectorStoreId?: StringNullableFilter<"Document"> | string | null
    keywords?: StringNullableListFilter<"Document">
    uploadedBy?: StringFilter<"Document"> | string
    uploadedByName?: StringFilter<"Document"> | string
    isPublic?: BoolFilter<"Document"> | boolean
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
    cohort?: XOR<CohortScalarRelationFilter, CohortWhereInput>
  }

  export type DocumentOrderByWithRelationInput = {
    id?: SortOrder
    cohortId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    fileUrl?: SortOrder
    fileType?: SortOrder
    fileSize?: SortOrder
    category?: SortOrder
    isIndexed?: SortOrder
    vectorStoreId?: SortOrderInput | SortOrder
    keywords?: SortOrder
    uploadedBy?: SortOrder
    uploadedByName?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cohort?: CohortOrderByWithRelationInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    cohortId?: StringFilter<"Document"> | string
    title?: StringFilter<"Document"> | string
    description?: StringNullableFilter<"Document"> | string | null
    fileUrl?: StringFilter<"Document"> | string
    fileType?: StringFilter<"Document"> | string
    fileSize?: IntFilter<"Document"> | number
    category?: StringFilter<"Document"> | string
    isIndexed?: BoolFilter<"Document"> | boolean
    vectorStoreId?: StringNullableFilter<"Document"> | string | null
    keywords?: StringNullableListFilter<"Document">
    uploadedBy?: StringFilter<"Document"> | string
    uploadedByName?: StringFilter<"Document"> | string
    isPublic?: BoolFilter<"Document"> | boolean
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
    cohort?: XOR<CohortScalarRelationFilter, CohortWhereInput>
  }, "id">

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder
    cohortId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    fileUrl?: SortOrder
    fileType?: SortOrder
    fileSize?: SortOrder
    category?: SortOrder
    isIndexed?: SortOrder
    vectorStoreId?: SortOrderInput | SortOrder
    keywords?: SortOrder
    uploadedBy?: SortOrder
    uploadedByName?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _avg?: DocumentAvgOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
    _sum?: DocumentSumOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Document"> | string
    cohortId?: StringWithAggregatesFilter<"Document"> | string
    title?: StringWithAggregatesFilter<"Document"> | string
    description?: StringNullableWithAggregatesFilter<"Document"> | string | null
    fileUrl?: StringWithAggregatesFilter<"Document"> | string
    fileType?: StringWithAggregatesFilter<"Document"> | string
    fileSize?: IntWithAggregatesFilter<"Document"> | number
    category?: StringWithAggregatesFilter<"Document"> | string
    isIndexed?: BoolWithAggregatesFilter<"Document"> | boolean
    vectorStoreId?: StringNullableWithAggregatesFilter<"Document"> | string | null
    keywords?: StringNullableListFilter<"Document">
    uploadedBy?: StringWithAggregatesFilter<"Document"> | string
    uploadedByName?: StringWithAggregatesFilter<"Document"> | string
    isPublic?: BoolWithAggregatesFilter<"Document"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
  }

  export type GamificationPointWhereInput = {
    AND?: GamificationPointWhereInput | GamificationPointWhereInput[]
    OR?: GamificationPointWhereInput[]
    NOT?: GamificationPointWhereInput | GamificationPointWhereInput[]
    id?: StringFilter<"GamificationPoint"> | string
    studentId?: StringFilter<"GamificationPoint"> | string
    pointType?: StringFilter<"GamificationPoint"> | string
    points?: IntFilter<"GamificationPoint"> | number
    reason?: StringFilter<"GamificationPoint"> | string
    relatedTaskId?: StringNullableFilter<"GamificationPoint"> | string | null
    awardedAt?: DateTimeFilter<"GamificationPoint"> | Date | string
    student?: XOR<CohortStudentScalarRelationFilter, CohortStudentWhereInput>
  }

  export type GamificationPointOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    pointType?: SortOrder
    points?: SortOrder
    reason?: SortOrder
    relatedTaskId?: SortOrderInput | SortOrder
    awardedAt?: SortOrder
    student?: CohortStudentOrderByWithRelationInput
  }

  export type GamificationPointWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GamificationPointWhereInput | GamificationPointWhereInput[]
    OR?: GamificationPointWhereInput[]
    NOT?: GamificationPointWhereInput | GamificationPointWhereInput[]
    studentId?: StringFilter<"GamificationPoint"> | string
    pointType?: StringFilter<"GamificationPoint"> | string
    points?: IntFilter<"GamificationPoint"> | number
    reason?: StringFilter<"GamificationPoint"> | string
    relatedTaskId?: StringNullableFilter<"GamificationPoint"> | string | null
    awardedAt?: DateTimeFilter<"GamificationPoint"> | Date | string
    student?: XOR<CohortStudentScalarRelationFilter, CohortStudentWhereInput>
  }, "id">

  export type GamificationPointOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    pointType?: SortOrder
    points?: SortOrder
    reason?: SortOrder
    relatedTaskId?: SortOrderInput | SortOrder
    awardedAt?: SortOrder
    _count?: GamificationPointCountOrderByAggregateInput
    _avg?: GamificationPointAvgOrderByAggregateInput
    _max?: GamificationPointMaxOrderByAggregateInput
    _min?: GamificationPointMinOrderByAggregateInput
    _sum?: GamificationPointSumOrderByAggregateInput
  }

  export type GamificationPointScalarWhereWithAggregatesInput = {
    AND?: GamificationPointScalarWhereWithAggregatesInput | GamificationPointScalarWhereWithAggregatesInput[]
    OR?: GamificationPointScalarWhereWithAggregatesInput[]
    NOT?: GamificationPointScalarWhereWithAggregatesInput | GamificationPointScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GamificationPoint"> | string
    studentId?: StringWithAggregatesFilter<"GamificationPoint"> | string
    pointType?: StringWithAggregatesFilter<"GamificationPoint"> | string
    points?: IntWithAggregatesFilter<"GamificationPoint"> | number
    reason?: StringWithAggregatesFilter<"GamificationPoint"> | string
    relatedTaskId?: StringNullableWithAggregatesFilter<"GamificationPoint"> | string | null
    awardedAt?: DateTimeWithAggregatesFilter<"GamificationPoint"> | Date | string
  }

  export type AchievementWhereInput = {
    AND?: AchievementWhereInput | AchievementWhereInput[]
    OR?: AchievementWhereInput[]
    NOT?: AchievementWhereInput | AchievementWhereInput[]
    id?: StringFilter<"Achievement"> | string
    name?: StringFilter<"Achievement"> | string
    description?: StringFilter<"Achievement"> | string
    icon?: StringFilter<"Achievement"> | string
    category?: StringFilter<"Achievement"> | string
    pointsRequired?: IntFilter<"Achievement"> | number
    condition?: StringFilter<"Achievement"> | string
    createdAt?: DateTimeFilter<"Achievement"> | Date | string
    earnedBy?: StudentAchievementListRelationFilter
  }

  export type AchievementOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    category?: SortOrder
    pointsRequired?: SortOrder
    condition?: SortOrder
    createdAt?: SortOrder
    earnedBy?: StudentAchievementOrderByRelationAggregateInput
  }

  export type AchievementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: AchievementWhereInput | AchievementWhereInput[]
    OR?: AchievementWhereInput[]
    NOT?: AchievementWhereInput | AchievementWhereInput[]
    description?: StringFilter<"Achievement"> | string
    icon?: StringFilter<"Achievement"> | string
    category?: StringFilter<"Achievement"> | string
    pointsRequired?: IntFilter<"Achievement"> | number
    condition?: StringFilter<"Achievement"> | string
    createdAt?: DateTimeFilter<"Achievement"> | Date | string
    earnedBy?: StudentAchievementListRelationFilter
  }, "id" | "name">

  export type AchievementOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    category?: SortOrder
    pointsRequired?: SortOrder
    condition?: SortOrder
    createdAt?: SortOrder
    _count?: AchievementCountOrderByAggregateInput
    _avg?: AchievementAvgOrderByAggregateInput
    _max?: AchievementMaxOrderByAggregateInput
    _min?: AchievementMinOrderByAggregateInput
    _sum?: AchievementSumOrderByAggregateInput
  }

  export type AchievementScalarWhereWithAggregatesInput = {
    AND?: AchievementScalarWhereWithAggregatesInput | AchievementScalarWhereWithAggregatesInput[]
    OR?: AchievementScalarWhereWithAggregatesInput[]
    NOT?: AchievementScalarWhereWithAggregatesInput | AchievementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Achievement"> | string
    name?: StringWithAggregatesFilter<"Achievement"> | string
    description?: StringWithAggregatesFilter<"Achievement"> | string
    icon?: StringWithAggregatesFilter<"Achievement"> | string
    category?: StringWithAggregatesFilter<"Achievement"> | string
    pointsRequired?: IntWithAggregatesFilter<"Achievement"> | number
    condition?: StringWithAggregatesFilter<"Achievement"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Achievement"> | Date | string
  }

  export type StudentAchievementWhereInput = {
    AND?: StudentAchievementWhereInput | StudentAchievementWhereInput[]
    OR?: StudentAchievementWhereInput[]
    NOT?: StudentAchievementWhereInput | StudentAchievementWhereInput[]
    id?: StringFilter<"StudentAchievement"> | string
    studentId?: StringFilter<"StudentAchievement"> | string
    achievementId?: StringFilter<"StudentAchievement"> | string
    earnedAt?: DateTimeFilter<"StudentAchievement"> | Date | string
    achievement?: XOR<AchievementScalarRelationFilter, AchievementWhereInput>
  }

  export type StudentAchievementOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    achievementId?: SortOrder
    earnedAt?: SortOrder
    achievement?: AchievementOrderByWithRelationInput
  }

  export type StudentAchievementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    studentId_achievementId?: StudentAchievementStudentIdAchievementIdCompoundUniqueInput
    AND?: StudentAchievementWhereInput | StudentAchievementWhereInput[]
    OR?: StudentAchievementWhereInput[]
    NOT?: StudentAchievementWhereInput | StudentAchievementWhereInput[]
    studentId?: StringFilter<"StudentAchievement"> | string
    achievementId?: StringFilter<"StudentAchievement"> | string
    earnedAt?: DateTimeFilter<"StudentAchievement"> | Date | string
    achievement?: XOR<AchievementScalarRelationFilter, AchievementWhereInput>
  }, "id" | "studentId_achievementId">

  export type StudentAchievementOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    achievementId?: SortOrder
    earnedAt?: SortOrder
    _count?: StudentAchievementCountOrderByAggregateInput
    _max?: StudentAchievementMaxOrderByAggregateInput
    _min?: StudentAchievementMinOrderByAggregateInput
  }

  export type StudentAchievementScalarWhereWithAggregatesInput = {
    AND?: StudentAchievementScalarWhereWithAggregatesInput | StudentAchievementScalarWhereWithAggregatesInput[]
    OR?: StudentAchievementScalarWhereWithAggregatesInput[]
    NOT?: StudentAchievementScalarWhereWithAggregatesInput | StudentAchievementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudentAchievement"> | string
    studentId?: StringWithAggregatesFilter<"StudentAchievement"> | string
    achievementId?: StringWithAggregatesFilter<"StudentAchievement"> | string
    earnedAt?: DateTimeWithAggregatesFilter<"StudentAchievement"> | Date | string
  }

  export type WeeklyScoreWhereInput = {
    AND?: WeeklyScoreWhereInput | WeeklyScoreWhereInput[]
    OR?: WeeklyScoreWhereInput[]
    NOT?: WeeklyScoreWhereInput | WeeklyScoreWhereInput[]
    id?: StringFilter<"WeeklyScore"> | string
    studentId?: StringFilter<"WeeklyScore"> | string
    cohortId?: StringFilter<"WeeklyScore"> | string
    weekNumber?: IntFilter<"WeeklyScore"> | number
    tasksCompleted?: IntFilter<"WeeklyScore"> | number
    tasksOnTime?: IntFilter<"WeeklyScore"> | number
    totalPoints?: IntFilter<"WeeklyScore"> | number
    codeQuality?: FloatNullableFilter<"WeeklyScore"> | number | null
    commitFrequency?: IntFilter<"WeeklyScore"> | number
    prQuality?: FloatNullableFilter<"WeeklyScore"> | number | null
    overallScore?: FloatFilter<"WeeklyScore"> | number
    rank?: IntNullableFilter<"WeeklyScore"> | number | null
    aiAnalysis?: StringNullableFilter<"WeeklyScore"> | string | null
    strengths?: StringNullableListFilter<"WeeklyScore">
    improvements?: StringNullableListFilter<"WeeklyScore">
    emailSent?: BoolFilter<"WeeklyScore"> | boolean
    emailSentAt?: DateTimeNullableFilter<"WeeklyScore"> | Date | string | null
    weekStartDate?: DateTimeFilter<"WeeklyScore"> | Date | string
    weekEndDate?: DateTimeFilter<"WeeklyScore"> | Date | string
    createdAt?: DateTimeFilter<"WeeklyScore"> | Date | string
    updatedAt?: DateTimeFilter<"WeeklyScore"> | Date | string
    student?: XOR<CohortStudentScalarRelationFilter, CohortStudentWhereInput>
  }

  export type WeeklyScoreOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    cohortId?: SortOrder
    weekNumber?: SortOrder
    tasksCompleted?: SortOrder
    tasksOnTime?: SortOrder
    totalPoints?: SortOrder
    codeQuality?: SortOrderInput | SortOrder
    commitFrequency?: SortOrder
    prQuality?: SortOrderInput | SortOrder
    overallScore?: SortOrder
    rank?: SortOrderInput | SortOrder
    aiAnalysis?: SortOrderInput | SortOrder
    strengths?: SortOrder
    improvements?: SortOrder
    emailSent?: SortOrder
    emailSentAt?: SortOrderInput | SortOrder
    weekStartDate?: SortOrder
    weekEndDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    student?: CohortStudentOrderByWithRelationInput
  }

  export type WeeklyScoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    studentId_weekNumber?: WeeklyScoreStudentIdWeekNumberCompoundUniqueInput
    AND?: WeeklyScoreWhereInput | WeeklyScoreWhereInput[]
    OR?: WeeklyScoreWhereInput[]
    NOT?: WeeklyScoreWhereInput | WeeklyScoreWhereInput[]
    studentId?: StringFilter<"WeeklyScore"> | string
    cohortId?: StringFilter<"WeeklyScore"> | string
    weekNumber?: IntFilter<"WeeklyScore"> | number
    tasksCompleted?: IntFilter<"WeeklyScore"> | number
    tasksOnTime?: IntFilter<"WeeklyScore"> | number
    totalPoints?: IntFilter<"WeeklyScore"> | number
    codeQuality?: FloatNullableFilter<"WeeklyScore"> | number | null
    commitFrequency?: IntFilter<"WeeklyScore"> | number
    prQuality?: FloatNullableFilter<"WeeklyScore"> | number | null
    overallScore?: FloatFilter<"WeeklyScore"> | number
    rank?: IntNullableFilter<"WeeklyScore"> | number | null
    aiAnalysis?: StringNullableFilter<"WeeklyScore"> | string | null
    strengths?: StringNullableListFilter<"WeeklyScore">
    improvements?: StringNullableListFilter<"WeeklyScore">
    emailSent?: BoolFilter<"WeeklyScore"> | boolean
    emailSentAt?: DateTimeNullableFilter<"WeeklyScore"> | Date | string | null
    weekStartDate?: DateTimeFilter<"WeeklyScore"> | Date | string
    weekEndDate?: DateTimeFilter<"WeeklyScore"> | Date | string
    createdAt?: DateTimeFilter<"WeeklyScore"> | Date | string
    updatedAt?: DateTimeFilter<"WeeklyScore"> | Date | string
    student?: XOR<CohortStudentScalarRelationFilter, CohortStudentWhereInput>
  }, "id" | "studentId_weekNumber">

  export type WeeklyScoreOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    cohortId?: SortOrder
    weekNumber?: SortOrder
    tasksCompleted?: SortOrder
    tasksOnTime?: SortOrder
    totalPoints?: SortOrder
    codeQuality?: SortOrderInput | SortOrder
    commitFrequency?: SortOrder
    prQuality?: SortOrderInput | SortOrder
    overallScore?: SortOrder
    rank?: SortOrderInput | SortOrder
    aiAnalysis?: SortOrderInput | SortOrder
    strengths?: SortOrder
    improvements?: SortOrder
    emailSent?: SortOrder
    emailSentAt?: SortOrderInput | SortOrder
    weekStartDate?: SortOrder
    weekEndDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WeeklyScoreCountOrderByAggregateInput
    _avg?: WeeklyScoreAvgOrderByAggregateInput
    _max?: WeeklyScoreMaxOrderByAggregateInput
    _min?: WeeklyScoreMinOrderByAggregateInput
    _sum?: WeeklyScoreSumOrderByAggregateInput
  }

  export type WeeklyScoreScalarWhereWithAggregatesInput = {
    AND?: WeeklyScoreScalarWhereWithAggregatesInput | WeeklyScoreScalarWhereWithAggregatesInput[]
    OR?: WeeklyScoreScalarWhereWithAggregatesInput[]
    NOT?: WeeklyScoreScalarWhereWithAggregatesInput | WeeklyScoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WeeklyScore"> | string
    studentId?: StringWithAggregatesFilter<"WeeklyScore"> | string
    cohortId?: StringWithAggregatesFilter<"WeeklyScore"> | string
    weekNumber?: IntWithAggregatesFilter<"WeeklyScore"> | number
    tasksCompleted?: IntWithAggregatesFilter<"WeeklyScore"> | number
    tasksOnTime?: IntWithAggregatesFilter<"WeeklyScore"> | number
    totalPoints?: IntWithAggregatesFilter<"WeeklyScore"> | number
    codeQuality?: FloatNullableWithAggregatesFilter<"WeeklyScore"> | number | null
    commitFrequency?: IntWithAggregatesFilter<"WeeklyScore"> | number
    prQuality?: FloatNullableWithAggregatesFilter<"WeeklyScore"> | number | null
    overallScore?: FloatWithAggregatesFilter<"WeeklyScore"> | number
    rank?: IntNullableWithAggregatesFilter<"WeeklyScore"> | number | null
    aiAnalysis?: StringNullableWithAggregatesFilter<"WeeklyScore"> | string | null
    strengths?: StringNullableListFilter<"WeeklyScore">
    improvements?: StringNullableListFilter<"WeeklyScore">
    emailSent?: BoolWithAggregatesFilter<"WeeklyScore"> | boolean
    emailSentAt?: DateTimeNullableWithAggregatesFilter<"WeeklyScore"> | Date | string | null
    weekStartDate?: DateTimeWithAggregatesFilter<"WeeklyScore"> | Date | string
    weekEndDate?: DateTimeWithAggregatesFilter<"WeeklyScore"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"WeeklyScore"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WeeklyScore"> | Date | string
  }

  export type SupervisorFeedbackWhereInput = {
    AND?: SupervisorFeedbackWhereInput | SupervisorFeedbackWhereInput[]
    OR?: SupervisorFeedbackWhereInput[]
    NOT?: SupervisorFeedbackWhereInput | SupervisorFeedbackWhereInput[]
    id?: StringFilter<"SupervisorFeedback"> | string
    studentId?: StringFilter<"SupervisorFeedback"> | string
    supervisorId?: StringFilter<"SupervisorFeedback"> | string
    cohortId?: StringFilter<"SupervisorFeedback"> | string
    feedbackType?: StringFilter<"SupervisorFeedback"> | string
    relatedTaskId?: StringNullableFilter<"SupervisorFeedback"> | string | null
    rating?: IntNullableFilter<"SupervisorFeedback"> | number | null
    comment?: StringFilter<"SupervisorFeedback"> | string
    isPrivate?: BoolFilter<"SupervisorFeedback"> | boolean
    createdAt?: DateTimeFilter<"SupervisorFeedback"> | Date | string
    updatedAt?: DateTimeFilter<"SupervisorFeedback"> | Date | string
  }

  export type SupervisorFeedbackOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    supervisorId?: SortOrder
    cohortId?: SortOrder
    feedbackType?: SortOrder
    relatedTaskId?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    comment?: SortOrder
    isPrivate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupervisorFeedbackWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SupervisorFeedbackWhereInput | SupervisorFeedbackWhereInput[]
    OR?: SupervisorFeedbackWhereInput[]
    NOT?: SupervisorFeedbackWhereInput | SupervisorFeedbackWhereInput[]
    studentId?: StringFilter<"SupervisorFeedback"> | string
    supervisorId?: StringFilter<"SupervisorFeedback"> | string
    cohortId?: StringFilter<"SupervisorFeedback"> | string
    feedbackType?: StringFilter<"SupervisorFeedback"> | string
    relatedTaskId?: StringNullableFilter<"SupervisorFeedback"> | string | null
    rating?: IntNullableFilter<"SupervisorFeedback"> | number | null
    comment?: StringFilter<"SupervisorFeedback"> | string
    isPrivate?: BoolFilter<"SupervisorFeedback"> | boolean
    createdAt?: DateTimeFilter<"SupervisorFeedback"> | Date | string
    updatedAt?: DateTimeFilter<"SupervisorFeedback"> | Date | string
  }, "id">

  export type SupervisorFeedbackOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    supervisorId?: SortOrder
    cohortId?: SortOrder
    feedbackType?: SortOrder
    relatedTaskId?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    comment?: SortOrder
    isPrivate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SupervisorFeedbackCountOrderByAggregateInput
    _avg?: SupervisorFeedbackAvgOrderByAggregateInput
    _max?: SupervisorFeedbackMaxOrderByAggregateInput
    _min?: SupervisorFeedbackMinOrderByAggregateInput
    _sum?: SupervisorFeedbackSumOrderByAggregateInput
  }

  export type SupervisorFeedbackScalarWhereWithAggregatesInput = {
    AND?: SupervisorFeedbackScalarWhereWithAggregatesInput | SupervisorFeedbackScalarWhereWithAggregatesInput[]
    OR?: SupervisorFeedbackScalarWhereWithAggregatesInput[]
    NOT?: SupervisorFeedbackScalarWhereWithAggregatesInput | SupervisorFeedbackScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SupervisorFeedback"> | string
    studentId?: StringWithAggregatesFilter<"SupervisorFeedback"> | string
    supervisorId?: StringWithAggregatesFilter<"SupervisorFeedback"> | string
    cohortId?: StringWithAggregatesFilter<"SupervisorFeedback"> | string
    feedbackType?: StringWithAggregatesFilter<"SupervisorFeedback"> | string
    relatedTaskId?: StringNullableWithAggregatesFilter<"SupervisorFeedback"> | string | null
    rating?: IntNullableWithAggregatesFilter<"SupervisorFeedback"> | number | null
    comment?: StringWithAggregatesFilter<"SupervisorFeedback"> | string
    isPrivate?: BoolWithAggregatesFilter<"SupervisorFeedback"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SupervisorFeedback"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SupervisorFeedback"> | Date | string
  }

  export type ChatMessageWhereInput = {
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    roomId?: StringFilter<"ChatMessage"> | string
    senderId?: StringFilter<"ChatMessage"> | string
    senderName?: StringFilter<"ChatMessage"> | string
    role?: StringFilter<"ChatMessage"> | string
    isAdmin?: BoolFilter<"ChatMessage"> | boolean
    type?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    timestamp?: DateTimeFilter<"ChatMessage"> | Date | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
  }

  export type ChatMessageOrderByWithRelationInput = {
    id?: SortOrder
    roomId?: SortOrder
    senderId?: SortOrder
    senderName?: SortOrder
    role?: SortOrder
    isAdmin?: SortOrder
    type?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    roomId?: StringFilter<"ChatMessage"> | string
    senderId?: StringFilter<"ChatMessage"> | string
    senderName?: StringFilter<"ChatMessage"> | string
    role?: StringFilter<"ChatMessage"> | string
    isAdmin?: BoolFilter<"ChatMessage"> | boolean
    type?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    timestamp?: DateTimeFilter<"ChatMessage"> | Date | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
  }, "id">

  export type ChatMessageOrderByWithAggregationInput = {
    id?: SortOrder
    roomId?: SortOrder
    senderId?: SortOrder
    senderName?: SortOrder
    role?: SortOrder
    isAdmin?: SortOrder
    type?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    _count?: ChatMessageCountOrderByAggregateInput
    _max?: ChatMessageMaxOrderByAggregateInput
    _min?: ChatMessageMinOrderByAggregateInput
  }

  export type ChatMessageScalarWhereWithAggregatesInput = {
    AND?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    OR?: ChatMessageScalarWhereWithAggregatesInput[]
    NOT?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatMessage"> | string
    roomId?: StringWithAggregatesFilter<"ChatMessage"> | string
    senderId?: StringWithAggregatesFilter<"ChatMessage"> | string
    senderName?: StringWithAggregatesFilter<"ChatMessage"> | string
    role?: StringWithAggregatesFilter<"ChatMessage"> | string
    isAdmin?: BoolWithAggregatesFilter<"ChatMessage"> | boolean
    type?: StringWithAggregatesFilter<"ChatMessage"> | string
    content?: StringWithAggregatesFilter<"ChatMessage"> | string
    timestamp?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
  }

  export type Submit_reportCreateInput = {
    id?: string
    title: string
    summary: string
    notes?: string | null
    status?: string
    submittedAt?: Date | string
    submittedBy: string
    studentEmail: string
  }

  export type Submit_reportUncheckedCreateInput = {
    id?: string
    title: string
    summary: string
    notes?: string | null
    status?: string
    submittedAt?: Date | string
    submittedBy: string
    studentEmail: string
  }

  export type Submit_reportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedBy?: StringFieldUpdateOperationsInput | string
    studentEmail?: StringFieldUpdateOperationsInput | string
  }

  export type Submit_reportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedBy?: StringFieldUpdateOperationsInput | string
    studentEmail?: StringFieldUpdateOperationsInput | string
  }

  export type Submit_reportCreateManyInput = {
    id?: string
    title: string
    summary: string
    notes?: string | null
    status?: string
    submittedAt?: Date | string
    submittedBy: string
    studentEmail: string
  }

  export type Submit_reportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedBy?: StringFieldUpdateOperationsInput | string
    studentEmail?: StringFieldUpdateOperationsInput | string
  }

  export type Submit_reportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedBy?: StringFieldUpdateOperationsInput | string
    studentEmail?: StringFieldUpdateOperationsInput | string
  }

  export type CohortCreateInput = {
    id?: string
    name: string
    programId: string
    programType: string
    startDate: Date | string
    endDate: Date | string
    isActive?: boolean
    maxStudents?: number | null
    description?: string | null
    department: string
    level: string
    supervisorId?: string | null
    supervisorName?: string | null
    supervisorEmail?: string | null
    githubRepoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: CohortStudentCreateNestedManyWithoutCohortInput
    tasks?: TaskCreateNestedManyWithoutCohortInput
    documents?: DocumentCreateNestedManyWithoutCohortInput
  }

  export type CohortUncheckedCreateInput = {
    id?: string
    name: string
    programId: string
    programType: string
    startDate: Date | string
    endDate: Date | string
    isActive?: boolean
    maxStudents?: number | null
    description?: string | null
    department: string
    level: string
    supervisorId?: string | null
    supervisorName?: string | null
    supervisorEmail?: string | null
    githubRepoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: CohortStudentUncheckedCreateNestedManyWithoutCohortInput
    tasks?: TaskUncheckedCreateNestedManyWithoutCohortInput
    documents?: DocumentUncheckedCreateNestedManyWithoutCohortInput
  }

  export type CohortUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    programId?: StringFieldUpdateOperationsInput | string
    programType?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    maxStudents?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    department?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    supervisorId?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorName?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorEmail?: NullableStringFieldUpdateOperationsInput | string | null
    githubRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: CohortStudentUpdateManyWithoutCohortNestedInput
    tasks?: TaskUpdateManyWithoutCohortNestedInput
    documents?: DocumentUpdateManyWithoutCohortNestedInput
  }

  export type CohortUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    programId?: StringFieldUpdateOperationsInput | string
    programType?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    maxStudents?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    department?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    supervisorId?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorName?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorEmail?: NullableStringFieldUpdateOperationsInput | string | null
    githubRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: CohortStudentUncheckedUpdateManyWithoutCohortNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutCohortNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutCohortNestedInput
  }

  export type CohortCreateManyInput = {
    id?: string
    name: string
    programId: string
    programType: string
    startDate: Date | string
    endDate: Date | string
    isActive?: boolean
    maxStudents?: number | null
    description?: string | null
    department: string
    level: string
    supervisorId?: string | null
    supervisorName?: string | null
    supervisorEmail?: string | null
    githubRepoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CohortUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    programId?: StringFieldUpdateOperationsInput | string
    programType?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    maxStudents?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    department?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    supervisorId?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorName?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorEmail?: NullableStringFieldUpdateOperationsInput | string | null
    githubRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CohortUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    programId?: StringFieldUpdateOperationsInput | string
    programType?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    maxStudents?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    department?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    supervisorId?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorName?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorEmail?: NullableStringFieldUpdateOperationsInput | string | null
    githubRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CohortStudentCreateInput = {
    id?: string
    studentId: string
    studentEmail: string
    studentName: string
    avatarUrl?: string | null
    role?: string
    joinedAt?: Date | string
    status?: string
    cohort: CohortCreateNestedOneWithoutStudentsInput
    tasksSubmitted?: TaskSubmissionCreateNestedManyWithoutStudentInput
    gamificationPoints?: GamificationPointCreateNestedManyWithoutStudentInput
    weeklyScores?: WeeklyScoreCreateNestedManyWithoutStudentInput
  }

  export type CohortStudentUncheckedCreateInput = {
    id?: string
    cohortId: string
    studentId: string
    studentEmail: string
    studentName: string
    avatarUrl?: string | null
    role?: string
    joinedAt?: Date | string
    status?: string
    tasksSubmitted?: TaskSubmissionUncheckedCreateNestedManyWithoutStudentInput
    gamificationPoints?: GamificationPointUncheckedCreateNestedManyWithoutStudentInput
    weeklyScores?: WeeklyScoreUncheckedCreateNestedManyWithoutStudentInput
  }

  export type CohortStudentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    studentEmail?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    cohort?: CohortUpdateOneRequiredWithoutStudentsNestedInput
    tasksSubmitted?: TaskSubmissionUpdateManyWithoutStudentNestedInput
    gamificationPoints?: GamificationPointUpdateManyWithoutStudentNestedInput
    weeklyScores?: WeeklyScoreUpdateManyWithoutStudentNestedInput
  }

  export type CohortStudentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cohortId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    studentEmail?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    tasksSubmitted?: TaskSubmissionUncheckedUpdateManyWithoutStudentNestedInput
    gamificationPoints?: GamificationPointUncheckedUpdateManyWithoutStudentNestedInput
    weeklyScores?: WeeklyScoreUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type CohortStudentCreateManyInput = {
    id?: string
    cohortId: string
    studentId: string
    studentEmail: string
    studentName: string
    avatarUrl?: string | null
    role?: string
    joinedAt?: Date | string
    status?: string
  }

  export type CohortStudentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    studentEmail?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type CohortStudentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cohortId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    studentEmail?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type TaskCreateInput = {
    id?: string
    title: string
    description: string
    type: string
    dueDate?: Date | string | null
    maxPoints?: number
    difficulty: string
    skills?: TaskCreateskillsInput | string[]
    githubRequired?: boolean
    prRequired?: boolean
    requiresReview?: boolean
    assignedBy: string
    assignedByName: string
    assignedByEmail: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cohort: CohortCreateNestedOneWithoutTasksInput
    submissions?: TaskSubmissionCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    cohortId: string
    title: string
    description: string
    type: string
    dueDate?: Date | string | null
    maxPoints?: number
    difficulty: string
    skills?: TaskCreateskillsInput | string[]
    githubRequired?: boolean
    prRequired?: boolean
    requiresReview?: boolean
    assignedBy: string
    assignedByName: string
    assignedByEmail: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: TaskSubmissionUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxPoints?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    skills?: TaskUpdateskillsInput | string[]
    githubRequired?: BoolFieldUpdateOperationsInput | boolean
    prRequired?: BoolFieldUpdateOperationsInput | boolean
    requiresReview?: BoolFieldUpdateOperationsInput | boolean
    assignedBy?: StringFieldUpdateOperationsInput | string
    assignedByName?: StringFieldUpdateOperationsInput | string
    assignedByEmail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cohort?: CohortUpdateOneRequiredWithoutTasksNestedInput
    submissions?: TaskSubmissionUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cohortId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxPoints?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    skills?: TaskUpdateskillsInput | string[]
    githubRequired?: BoolFieldUpdateOperationsInput | boolean
    prRequired?: BoolFieldUpdateOperationsInput | boolean
    requiresReview?: BoolFieldUpdateOperationsInput | boolean
    assignedBy?: StringFieldUpdateOperationsInput | string
    assignedByName?: StringFieldUpdateOperationsInput | string
    assignedByEmail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: TaskSubmissionUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateManyInput = {
    id?: string
    cohortId: string
    title: string
    description: string
    type: string
    dueDate?: Date | string | null
    maxPoints?: number
    difficulty: string
    skills?: TaskCreateskillsInput | string[]
    githubRequired?: boolean
    prRequired?: boolean
    requiresReview?: boolean
    assignedBy: string
    assignedByName: string
    assignedByEmail: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxPoints?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    skills?: TaskUpdateskillsInput | string[]
    githubRequired?: BoolFieldUpdateOperationsInput | boolean
    prRequired?: BoolFieldUpdateOperationsInput | boolean
    requiresReview?: BoolFieldUpdateOperationsInput | boolean
    assignedBy?: StringFieldUpdateOperationsInput | string
    assignedByName?: StringFieldUpdateOperationsInput | string
    assignedByEmail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cohortId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxPoints?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    skills?: TaskUpdateskillsInput | string[]
    githubRequired?: BoolFieldUpdateOperationsInput | boolean
    prRequired?: BoolFieldUpdateOperationsInput | boolean
    requiresReview?: BoolFieldUpdateOperationsInput | boolean
    assignedBy?: StringFieldUpdateOperationsInput | string
    assignedByName?: StringFieldUpdateOperationsInput | string
    assignedByEmail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskSubmissionCreateInput = {
    id?: string
    title: string
    description: string
    content: string
    githubRepoUrl?: string | null
    githubPrUrl?: string | null
    githubBranch?: string | null
    commitHash?: string | null
    attachments?: TaskSubmissionCreateattachmentsInput | string[]
    status?: string
    pointsEarned?: number | null
    feedback?: string | null
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    submittedAt?: Date | string
    updatedAt?: Date | string
    task: TaskCreateNestedOneWithoutSubmissionsInput
    student: CohortStudentCreateNestedOneWithoutTasksSubmittedInput
  }

  export type TaskSubmissionUncheckedCreateInput = {
    id?: string
    taskId: string
    studentId: string
    title: string
    description: string
    content: string
    githubRepoUrl?: string | null
    githubPrUrl?: string | null
    githubBranch?: string | null
    commitHash?: string | null
    attachments?: TaskSubmissionCreateattachmentsInput | string[]
    status?: string
    pointsEarned?: number | null
    feedback?: string | null
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    submittedAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskSubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    githubRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubPrUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubBranch?: NullableStringFieldUpdateOperationsInput | string | null
    commitHash?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: TaskSubmissionUpdateattachmentsInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    pointsEarned?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutSubmissionsNestedInput
    student?: CohortStudentUpdateOneRequiredWithoutTasksSubmittedNestedInput
  }

  export type TaskSubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    githubRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubPrUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubBranch?: NullableStringFieldUpdateOperationsInput | string | null
    commitHash?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: TaskSubmissionUpdateattachmentsInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    pointsEarned?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskSubmissionCreateManyInput = {
    id?: string
    taskId: string
    studentId: string
    title: string
    description: string
    content: string
    githubRepoUrl?: string | null
    githubPrUrl?: string | null
    githubBranch?: string | null
    commitHash?: string | null
    attachments?: TaskSubmissionCreateattachmentsInput | string[]
    status?: string
    pointsEarned?: number | null
    feedback?: string | null
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    submittedAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskSubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    githubRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubPrUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubBranch?: NullableStringFieldUpdateOperationsInput | string | null
    commitHash?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: TaskSubmissionUpdateattachmentsInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    pointsEarned?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskSubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    githubRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubPrUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubBranch?: NullableStringFieldUpdateOperationsInput | string | null
    commitHash?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: TaskSubmissionUpdateattachmentsInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    pointsEarned?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GitHubRepositoryCreateInput = {
    id?: string
    cohortId?: string | null
    name: string
    url: string
    description?: string | null
    type: string
    isActive?: boolean
    addedBy: string
    addedByName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GitHubRepositoryUncheckedCreateInput = {
    id?: string
    cohortId?: string | null
    name: string
    url: string
    description?: string | null
    type: string
    isActive?: boolean
    addedBy: string
    addedByName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GitHubRepositoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cohortId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    addedBy?: StringFieldUpdateOperationsInput | string
    addedByName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GitHubRepositoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cohortId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    addedBy?: StringFieldUpdateOperationsInput | string
    addedByName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GitHubRepositoryCreateManyInput = {
    id?: string
    cohortId?: string | null
    name: string
    url: string
    description?: string | null
    type: string
    isActive?: boolean
    addedBy: string
    addedByName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GitHubRepositoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cohortId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    addedBy?: StringFieldUpdateOperationsInput | string
    addedByName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GitHubRepositoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cohortId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    addedBy?: StringFieldUpdateOperationsInput | string
    addedByName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateInput = {
    id?: string
    title: string
    description?: string | null
    fileUrl: string
    fileType: string
    fileSize: number
    category: string
    isIndexed?: boolean
    vectorStoreId?: string | null
    keywords?: DocumentCreatekeywordsInput | string[]
    uploadedBy: string
    uploadedByName: string
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    cohort: CohortCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateInput = {
    id?: string
    cohortId: string
    title: string
    description?: string | null
    fileUrl: string
    fileType: string
    fileSize: number
    category: string
    isIndexed?: boolean
    vectorStoreId?: string | null
    keywords?: DocumentCreatekeywordsInput | string[]
    uploadedBy: string
    uploadedByName: string
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    isIndexed?: BoolFieldUpdateOperationsInput | boolean
    vectorStoreId?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: DocumentUpdatekeywordsInput | string[]
    uploadedBy?: StringFieldUpdateOperationsInput | string
    uploadedByName?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cohort?: CohortUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cohortId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    isIndexed?: BoolFieldUpdateOperationsInput | boolean
    vectorStoreId?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: DocumentUpdatekeywordsInput | string[]
    uploadedBy?: StringFieldUpdateOperationsInput | string
    uploadedByName?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateManyInput = {
    id?: string
    cohortId: string
    title: string
    description?: string | null
    fileUrl: string
    fileType: string
    fileSize: number
    category: string
    isIndexed?: boolean
    vectorStoreId?: string | null
    keywords?: DocumentCreatekeywordsInput | string[]
    uploadedBy: string
    uploadedByName: string
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    isIndexed?: BoolFieldUpdateOperationsInput | boolean
    vectorStoreId?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: DocumentUpdatekeywordsInput | string[]
    uploadedBy?: StringFieldUpdateOperationsInput | string
    uploadedByName?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cohortId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    isIndexed?: BoolFieldUpdateOperationsInput | boolean
    vectorStoreId?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: DocumentUpdatekeywordsInput | string[]
    uploadedBy?: StringFieldUpdateOperationsInput | string
    uploadedByName?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GamificationPointCreateInput = {
    id?: string
    pointType: string
    points: number
    reason: string
    relatedTaskId?: string | null
    awardedAt?: Date | string
    student: CohortStudentCreateNestedOneWithoutGamificationPointsInput
  }

  export type GamificationPointUncheckedCreateInput = {
    id?: string
    studentId: string
    pointType: string
    points: number
    reason: string
    relatedTaskId?: string | null
    awardedAt?: Date | string
  }

  export type GamificationPointUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointType?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    relatedTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    awardedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: CohortStudentUpdateOneRequiredWithoutGamificationPointsNestedInput
  }

  export type GamificationPointUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    pointType?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    relatedTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    awardedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GamificationPointCreateManyInput = {
    id?: string
    studentId: string
    pointType: string
    points: number
    reason: string
    relatedTaskId?: string | null
    awardedAt?: Date | string
  }

  export type GamificationPointUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointType?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    relatedTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    awardedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GamificationPointUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    pointType?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    relatedTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    awardedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchievementCreateInput = {
    id?: string
    name: string
    description: string
    icon: string
    category: string
    pointsRequired: number
    condition: string
    createdAt?: Date | string
    earnedBy?: StudentAchievementCreateNestedManyWithoutAchievementInput
  }

  export type AchievementUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    icon: string
    category: string
    pointsRequired: number
    condition: string
    createdAt?: Date | string
    earnedBy?: StudentAchievementUncheckedCreateNestedManyWithoutAchievementInput
  }

  export type AchievementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    pointsRequired?: IntFieldUpdateOperationsInput | number
    condition?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    earnedBy?: StudentAchievementUpdateManyWithoutAchievementNestedInput
  }

  export type AchievementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    pointsRequired?: IntFieldUpdateOperationsInput | number
    condition?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    earnedBy?: StudentAchievementUncheckedUpdateManyWithoutAchievementNestedInput
  }

  export type AchievementCreateManyInput = {
    id?: string
    name: string
    description: string
    icon: string
    category: string
    pointsRequired: number
    condition: string
    createdAt?: Date | string
  }

  export type AchievementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    pointsRequired?: IntFieldUpdateOperationsInput | number
    condition?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchievementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    pointsRequired?: IntFieldUpdateOperationsInput | number
    condition?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentAchievementCreateInput = {
    id?: string
    studentId: string
    earnedAt?: Date | string
    achievement: AchievementCreateNestedOneWithoutEarnedByInput
  }

  export type StudentAchievementUncheckedCreateInput = {
    id?: string
    studentId: string
    achievementId: string
    earnedAt?: Date | string
  }

  export type StudentAchievementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    achievement?: AchievementUpdateOneRequiredWithoutEarnedByNestedInput
  }

  export type StudentAchievementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    achievementId?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentAchievementCreateManyInput = {
    id?: string
    studentId: string
    achievementId: string
    earnedAt?: Date | string
  }

  export type StudentAchievementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentAchievementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    achievementId?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyScoreCreateInput = {
    id?: string
    cohortId: string
    weekNumber: number
    tasksCompleted?: number
    tasksOnTime?: number
    totalPoints?: number
    codeQuality?: number | null
    commitFrequency?: number
    prQuality?: number | null
    overallScore: number
    rank?: number | null
    aiAnalysis?: string | null
    strengths?: WeeklyScoreCreatestrengthsInput | string[]
    improvements?: WeeklyScoreCreateimprovementsInput | string[]
    emailSent?: boolean
    emailSentAt?: Date | string | null
    weekStartDate: Date | string
    weekEndDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    student: CohortStudentCreateNestedOneWithoutWeeklyScoresInput
  }

  export type WeeklyScoreUncheckedCreateInput = {
    id?: string
    studentId: string
    cohortId: string
    weekNumber: number
    tasksCompleted?: number
    tasksOnTime?: number
    totalPoints?: number
    codeQuality?: number | null
    commitFrequency?: number
    prQuality?: number | null
    overallScore: number
    rank?: number | null
    aiAnalysis?: string | null
    strengths?: WeeklyScoreCreatestrengthsInput | string[]
    improvements?: WeeklyScoreCreateimprovementsInput | string[]
    emailSent?: boolean
    emailSentAt?: Date | string | null
    weekStartDate: Date | string
    weekEndDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeeklyScoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cohortId?: StringFieldUpdateOperationsInput | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    tasksCompleted?: IntFieldUpdateOperationsInput | number
    tasksOnTime?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    codeQuality?: NullableFloatFieldUpdateOperationsInput | number | null
    commitFrequency?: IntFieldUpdateOperationsInput | number
    prQuality?: NullableFloatFieldUpdateOperationsInput | number | null
    overallScore?: FloatFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    aiAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    strengths?: WeeklyScoreUpdatestrengthsInput | string[]
    improvements?: WeeklyScoreUpdateimprovementsInput | string[]
    emailSent?: BoolFieldUpdateOperationsInput | boolean
    emailSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    weekStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: CohortStudentUpdateOneRequiredWithoutWeeklyScoresNestedInput
  }

  export type WeeklyScoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    cohortId?: StringFieldUpdateOperationsInput | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    tasksCompleted?: IntFieldUpdateOperationsInput | number
    tasksOnTime?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    codeQuality?: NullableFloatFieldUpdateOperationsInput | number | null
    commitFrequency?: IntFieldUpdateOperationsInput | number
    prQuality?: NullableFloatFieldUpdateOperationsInput | number | null
    overallScore?: FloatFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    aiAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    strengths?: WeeklyScoreUpdatestrengthsInput | string[]
    improvements?: WeeklyScoreUpdateimprovementsInput | string[]
    emailSent?: BoolFieldUpdateOperationsInput | boolean
    emailSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    weekStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyScoreCreateManyInput = {
    id?: string
    studentId: string
    cohortId: string
    weekNumber: number
    tasksCompleted?: number
    tasksOnTime?: number
    totalPoints?: number
    codeQuality?: number | null
    commitFrequency?: number
    prQuality?: number | null
    overallScore: number
    rank?: number | null
    aiAnalysis?: string | null
    strengths?: WeeklyScoreCreatestrengthsInput | string[]
    improvements?: WeeklyScoreCreateimprovementsInput | string[]
    emailSent?: boolean
    emailSentAt?: Date | string | null
    weekStartDate: Date | string
    weekEndDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeeklyScoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cohortId?: StringFieldUpdateOperationsInput | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    tasksCompleted?: IntFieldUpdateOperationsInput | number
    tasksOnTime?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    codeQuality?: NullableFloatFieldUpdateOperationsInput | number | null
    commitFrequency?: IntFieldUpdateOperationsInput | number
    prQuality?: NullableFloatFieldUpdateOperationsInput | number | null
    overallScore?: FloatFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    aiAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    strengths?: WeeklyScoreUpdatestrengthsInput | string[]
    improvements?: WeeklyScoreUpdateimprovementsInput | string[]
    emailSent?: BoolFieldUpdateOperationsInput | boolean
    emailSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    weekStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyScoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    cohortId?: StringFieldUpdateOperationsInput | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    tasksCompleted?: IntFieldUpdateOperationsInput | number
    tasksOnTime?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    codeQuality?: NullableFloatFieldUpdateOperationsInput | number | null
    commitFrequency?: IntFieldUpdateOperationsInput | number
    prQuality?: NullableFloatFieldUpdateOperationsInput | number | null
    overallScore?: FloatFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    aiAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    strengths?: WeeklyScoreUpdatestrengthsInput | string[]
    improvements?: WeeklyScoreUpdateimprovementsInput | string[]
    emailSent?: BoolFieldUpdateOperationsInput | boolean
    emailSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    weekStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupervisorFeedbackCreateInput = {
    id?: string
    studentId: string
    supervisorId: string
    cohortId: string
    feedbackType: string
    relatedTaskId?: string | null
    rating?: number | null
    comment: string
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupervisorFeedbackUncheckedCreateInput = {
    id?: string
    studentId: string
    supervisorId: string
    cohortId: string
    feedbackType: string
    relatedTaskId?: string | null
    rating?: number | null
    comment: string
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupervisorFeedbackUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    supervisorId?: StringFieldUpdateOperationsInput | string
    cohortId?: StringFieldUpdateOperationsInput | string
    feedbackType?: StringFieldUpdateOperationsInput | string
    relatedTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupervisorFeedbackUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    supervisorId?: StringFieldUpdateOperationsInput | string
    cohortId?: StringFieldUpdateOperationsInput | string
    feedbackType?: StringFieldUpdateOperationsInput | string
    relatedTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupervisorFeedbackCreateManyInput = {
    id?: string
    studentId: string
    supervisorId: string
    cohortId: string
    feedbackType: string
    relatedTaskId?: string | null
    rating?: number | null
    comment: string
    isPrivate?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupervisorFeedbackUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    supervisorId?: StringFieldUpdateOperationsInput | string
    cohortId?: StringFieldUpdateOperationsInput | string
    feedbackType?: StringFieldUpdateOperationsInput | string
    relatedTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupervisorFeedbackUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    supervisorId?: StringFieldUpdateOperationsInput | string
    cohortId?: StringFieldUpdateOperationsInput | string
    feedbackType?: StringFieldUpdateOperationsInput | string
    relatedTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateInput = {
    id: string
    roomId: string
    senderId: string
    senderName: string
    role: string
    isAdmin?: boolean
    type: string
    content: string
    timestamp: Date | string
    createdAt?: Date | string
  }

  export type ChatMessageUncheckedCreateInput = {
    id: string
    roomId: string
    senderId: string
    senderName: string
    role: string
    isAdmin?: boolean
    type: string
    content: string
    timestamp: Date | string
    createdAt?: Date | string
  }

  export type ChatMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    senderName?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    senderName?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManyInput = {
    id: string
    roomId: string
    senderId: string
    senderName: string
    role: string
    isAdmin?: boolean
    type: string
    content: string
    timestamp: Date | string
    createdAt?: Date | string
  }

  export type ChatMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    senderName?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    senderName?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type Submit_reportCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    submittedAt?: SortOrder
    submittedBy?: SortOrder
    studentEmail?: SortOrder
  }

  export type Submit_reportMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    submittedAt?: SortOrder
    submittedBy?: SortOrder
    studentEmail?: SortOrder
  }

  export type Submit_reportMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    submittedAt?: SortOrder
    submittedBy?: SortOrder
    studentEmail?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CohortStudentListRelationFilter = {
    every?: CohortStudentWhereInput
    some?: CohortStudentWhereInput
    none?: CohortStudentWhereInput
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type DocumentListRelationFilter = {
    every?: DocumentWhereInput
    some?: DocumentWhereInput
    none?: DocumentWhereInput
  }

  export type CohortStudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CohortCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    programId?: SortOrder
    programType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    maxStudents?: SortOrder
    description?: SortOrder
    department?: SortOrder
    level?: SortOrder
    supervisorId?: SortOrder
    supervisorName?: SortOrder
    supervisorEmail?: SortOrder
    githubRepoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CohortAvgOrderByAggregateInput = {
    maxStudents?: SortOrder
  }

  export type CohortMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    programId?: SortOrder
    programType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    maxStudents?: SortOrder
    description?: SortOrder
    department?: SortOrder
    level?: SortOrder
    supervisorId?: SortOrder
    supervisorName?: SortOrder
    supervisorEmail?: SortOrder
    githubRepoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CohortMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    programId?: SortOrder
    programType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    maxStudents?: SortOrder
    description?: SortOrder
    department?: SortOrder
    level?: SortOrder
    supervisorId?: SortOrder
    supervisorName?: SortOrder
    supervisorEmail?: SortOrder
    githubRepoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CohortSumOrderByAggregateInput = {
    maxStudents?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type CohortScalarRelationFilter = {
    is?: CohortWhereInput
    isNot?: CohortWhereInput
  }

  export type TaskSubmissionListRelationFilter = {
    every?: TaskSubmissionWhereInput
    some?: TaskSubmissionWhereInput
    none?: TaskSubmissionWhereInput
  }

  export type GamificationPointListRelationFilter = {
    every?: GamificationPointWhereInput
    some?: GamificationPointWhereInput
    none?: GamificationPointWhereInput
  }

  export type WeeklyScoreListRelationFilter = {
    every?: WeeklyScoreWhereInput
    some?: WeeklyScoreWhereInput
    none?: WeeklyScoreWhereInput
  }

  export type TaskSubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GamificationPointOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WeeklyScoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CohortStudentCohortIdStudentIdCompoundUniqueInput = {
    cohortId: string
    studentId: string
  }

  export type CohortStudentCountOrderByAggregateInput = {
    id?: SortOrder
    cohortId?: SortOrder
    studentId?: SortOrder
    studentEmail?: SortOrder
    studentName?: SortOrder
    avatarUrl?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    status?: SortOrder
  }

  export type CohortStudentMaxOrderByAggregateInput = {
    id?: SortOrder
    cohortId?: SortOrder
    studentId?: SortOrder
    studentEmail?: SortOrder
    studentName?: SortOrder
    avatarUrl?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    status?: SortOrder
  }

  export type CohortStudentMinOrderByAggregateInput = {
    id?: SortOrder
    cohortId?: SortOrder
    studentId?: SortOrder
    studentEmail?: SortOrder
    studentName?: SortOrder
    avatarUrl?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    status?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    cohortId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    dueDate?: SortOrder
    maxPoints?: SortOrder
    difficulty?: SortOrder
    skills?: SortOrder
    githubRequired?: SortOrder
    prRequired?: SortOrder
    requiresReview?: SortOrder
    assignedBy?: SortOrder
    assignedByName?: SortOrder
    assignedByEmail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    maxPoints?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    cohortId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    dueDate?: SortOrder
    maxPoints?: SortOrder
    difficulty?: SortOrder
    githubRequired?: SortOrder
    prRequired?: SortOrder
    requiresReview?: SortOrder
    assignedBy?: SortOrder
    assignedByName?: SortOrder
    assignedByEmail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    cohortId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    dueDate?: SortOrder
    maxPoints?: SortOrder
    difficulty?: SortOrder
    githubRequired?: SortOrder
    prRequired?: SortOrder
    requiresReview?: SortOrder
    assignedBy?: SortOrder
    assignedByName?: SortOrder
    assignedByEmail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    maxPoints?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type TaskScalarRelationFilter = {
    is?: TaskWhereInput
    isNot?: TaskWhereInput
  }

  export type CohortStudentScalarRelationFilter = {
    is?: CohortStudentWhereInput
    isNot?: CohortStudentWhereInput
  }

  export type TaskSubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    studentId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    githubRepoUrl?: SortOrder
    githubPrUrl?: SortOrder
    githubBranch?: SortOrder
    commitHash?: SortOrder
    attachments?: SortOrder
    status?: SortOrder
    pointsEarned?: SortOrder
    feedback?: SortOrder
    reviewedBy?: SortOrder
    reviewedAt?: SortOrder
    submittedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskSubmissionAvgOrderByAggregateInput = {
    pointsEarned?: SortOrder
  }

  export type TaskSubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    studentId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    githubRepoUrl?: SortOrder
    githubPrUrl?: SortOrder
    githubBranch?: SortOrder
    commitHash?: SortOrder
    status?: SortOrder
    pointsEarned?: SortOrder
    feedback?: SortOrder
    reviewedBy?: SortOrder
    reviewedAt?: SortOrder
    submittedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskSubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    studentId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    githubRepoUrl?: SortOrder
    githubPrUrl?: SortOrder
    githubBranch?: SortOrder
    commitHash?: SortOrder
    status?: SortOrder
    pointsEarned?: SortOrder
    feedback?: SortOrder
    reviewedBy?: SortOrder
    reviewedAt?: SortOrder
    submittedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskSubmissionSumOrderByAggregateInput = {
    pointsEarned?: SortOrder
  }

  export type GitHubRepositoryCountOrderByAggregateInput = {
    id?: SortOrder
    cohortId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    description?: SortOrder
    type?: SortOrder
    isActive?: SortOrder
    addedBy?: SortOrder
    addedByName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GitHubRepositoryMaxOrderByAggregateInput = {
    id?: SortOrder
    cohortId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    description?: SortOrder
    type?: SortOrder
    isActive?: SortOrder
    addedBy?: SortOrder
    addedByName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GitHubRepositoryMinOrderByAggregateInput = {
    id?: SortOrder
    cohortId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    description?: SortOrder
    type?: SortOrder
    isActive?: SortOrder
    addedBy?: SortOrder
    addedByName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder
    cohortId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    fileUrl?: SortOrder
    fileType?: SortOrder
    fileSize?: SortOrder
    category?: SortOrder
    isIndexed?: SortOrder
    vectorStoreId?: SortOrder
    keywords?: SortOrder
    uploadedBy?: SortOrder
    uploadedByName?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentAvgOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    cohortId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    fileUrl?: SortOrder
    fileType?: SortOrder
    fileSize?: SortOrder
    category?: SortOrder
    isIndexed?: SortOrder
    vectorStoreId?: SortOrder
    uploadedBy?: SortOrder
    uploadedByName?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder
    cohortId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    fileUrl?: SortOrder
    fileType?: SortOrder
    fileSize?: SortOrder
    category?: SortOrder
    isIndexed?: SortOrder
    vectorStoreId?: SortOrder
    uploadedBy?: SortOrder
    uploadedByName?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentSumOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type GamificationPointCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    pointType?: SortOrder
    points?: SortOrder
    reason?: SortOrder
    relatedTaskId?: SortOrder
    awardedAt?: SortOrder
  }

  export type GamificationPointAvgOrderByAggregateInput = {
    points?: SortOrder
  }

  export type GamificationPointMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    pointType?: SortOrder
    points?: SortOrder
    reason?: SortOrder
    relatedTaskId?: SortOrder
    awardedAt?: SortOrder
  }

  export type GamificationPointMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    pointType?: SortOrder
    points?: SortOrder
    reason?: SortOrder
    relatedTaskId?: SortOrder
    awardedAt?: SortOrder
  }

  export type GamificationPointSumOrderByAggregateInput = {
    points?: SortOrder
  }

  export type StudentAchievementListRelationFilter = {
    every?: StudentAchievementWhereInput
    some?: StudentAchievementWhereInput
    none?: StudentAchievementWhereInput
  }

  export type StudentAchievementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AchievementCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    category?: SortOrder
    pointsRequired?: SortOrder
    condition?: SortOrder
    createdAt?: SortOrder
  }

  export type AchievementAvgOrderByAggregateInput = {
    pointsRequired?: SortOrder
  }

  export type AchievementMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    category?: SortOrder
    pointsRequired?: SortOrder
    condition?: SortOrder
    createdAt?: SortOrder
  }

  export type AchievementMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    category?: SortOrder
    pointsRequired?: SortOrder
    condition?: SortOrder
    createdAt?: SortOrder
  }

  export type AchievementSumOrderByAggregateInput = {
    pointsRequired?: SortOrder
  }

  export type AchievementScalarRelationFilter = {
    is?: AchievementWhereInput
    isNot?: AchievementWhereInput
  }

  export type StudentAchievementStudentIdAchievementIdCompoundUniqueInput = {
    studentId: string
    achievementId: string
  }

  export type StudentAchievementCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    achievementId?: SortOrder
    earnedAt?: SortOrder
  }

  export type StudentAchievementMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    achievementId?: SortOrder
    earnedAt?: SortOrder
  }

  export type StudentAchievementMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    achievementId?: SortOrder
    earnedAt?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type WeeklyScoreStudentIdWeekNumberCompoundUniqueInput = {
    studentId: string
    weekNumber: number
  }

  export type WeeklyScoreCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    cohortId?: SortOrder
    weekNumber?: SortOrder
    tasksCompleted?: SortOrder
    tasksOnTime?: SortOrder
    totalPoints?: SortOrder
    codeQuality?: SortOrder
    commitFrequency?: SortOrder
    prQuality?: SortOrder
    overallScore?: SortOrder
    rank?: SortOrder
    aiAnalysis?: SortOrder
    strengths?: SortOrder
    improvements?: SortOrder
    emailSent?: SortOrder
    emailSentAt?: SortOrder
    weekStartDate?: SortOrder
    weekEndDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeeklyScoreAvgOrderByAggregateInput = {
    weekNumber?: SortOrder
    tasksCompleted?: SortOrder
    tasksOnTime?: SortOrder
    totalPoints?: SortOrder
    codeQuality?: SortOrder
    commitFrequency?: SortOrder
    prQuality?: SortOrder
    overallScore?: SortOrder
    rank?: SortOrder
  }

  export type WeeklyScoreMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    cohortId?: SortOrder
    weekNumber?: SortOrder
    tasksCompleted?: SortOrder
    tasksOnTime?: SortOrder
    totalPoints?: SortOrder
    codeQuality?: SortOrder
    commitFrequency?: SortOrder
    prQuality?: SortOrder
    overallScore?: SortOrder
    rank?: SortOrder
    aiAnalysis?: SortOrder
    emailSent?: SortOrder
    emailSentAt?: SortOrder
    weekStartDate?: SortOrder
    weekEndDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeeklyScoreMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    cohortId?: SortOrder
    weekNumber?: SortOrder
    tasksCompleted?: SortOrder
    tasksOnTime?: SortOrder
    totalPoints?: SortOrder
    codeQuality?: SortOrder
    commitFrequency?: SortOrder
    prQuality?: SortOrder
    overallScore?: SortOrder
    rank?: SortOrder
    aiAnalysis?: SortOrder
    emailSent?: SortOrder
    emailSentAt?: SortOrder
    weekStartDate?: SortOrder
    weekEndDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeeklyScoreSumOrderByAggregateInput = {
    weekNumber?: SortOrder
    tasksCompleted?: SortOrder
    tasksOnTime?: SortOrder
    totalPoints?: SortOrder
    codeQuality?: SortOrder
    commitFrequency?: SortOrder
    prQuality?: SortOrder
    overallScore?: SortOrder
    rank?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type SupervisorFeedbackCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    supervisorId?: SortOrder
    cohortId?: SortOrder
    feedbackType?: SortOrder
    relatedTaskId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    isPrivate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupervisorFeedbackAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type SupervisorFeedbackMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    supervisorId?: SortOrder
    cohortId?: SortOrder
    feedbackType?: SortOrder
    relatedTaskId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    isPrivate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupervisorFeedbackMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    supervisorId?: SortOrder
    cohortId?: SortOrder
    feedbackType?: SortOrder
    relatedTaskId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    isPrivate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupervisorFeedbackSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ChatMessageCountOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    senderId?: SortOrder
    senderName?: SortOrder
    role?: SortOrder
    isAdmin?: SortOrder
    type?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    senderId?: SortOrder
    senderName?: SortOrder
    role?: SortOrder
    isAdmin?: SortOrder
    type?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMessageMinOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    senderId?: SortOrder
    senderName?: SortOrder
    role?: SortOrder
    isAdmin?: SortOrder
    type?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CohortStudentCreateNestedManyWithoutCohortInput = {
    create?: XOR<CohortStudentCreateWithoutCohortInput, CohortStudentUncheckedCreateWithoutCohortInput> | CohortStudentCreateWithoutCohortInput[] | CohortStudentUncheckedCreateWithoutCohortInput[]
    connectOrCreate?: CohortStudentCreateOrConnectWithoutCohortInput | CohortStudentCreateOrConnectWithoutCohortInput[]
    createMany?: CohortStudentCreateManyCohortInputEnvelope
    connect?: CohortStudentWhereUniqueInput | CohortStudentWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutCohortInput = {
    create?: XOR<TaskCreateWithoutCohortInput, TaskUncheckedCreateWithoutCohortInput> | TaskCreateWithoutCohortInput[] | TaskUncheckedCreateWithoutCohortInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCohortInput | TaskCreateOrConnectWithoutCohortInput[]
    createMany?: TaskCreateManyCohortInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type DocumentCreateNestedManyWithoutCohortInput = {
    create?: XOR<DocumentCreateWithoutCohortInput, DocumentUncheckedCreateWithoutCohortInput> | DocumentCreateWithoutCohortInput[] | DocumentUncheckedCreateWithoutCohortInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutCohortInput | DocumentCreateOrConnectWithoutCohortInput[]
    createMany?: DocumentCreateManyCohortInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type CohortStudentUncheckedCreateNestedManyWithoutCohortInput = {
    create?: XOR<CohortStudentCreateWithoutCohortInput, CohortStudentUncheckedCreateWithoutCohortInput> | CohortStudentCreateWithoutCohortInput[] | CohortStudentUncheckedCreateWithoutCohortInput[]
    connectOrCreate?: CohortStudentCreateOrConnectWithoutCohortInput | CohortStudentCreateOrConnectWithoutCohortInput[]
    createMany?: CohortStudentCreateManyCohortInputEnvelope
    connect?: CohortStudentWhereUniqueInput | CohortStudentWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutCohortInput = {
    create?: XOR<TaskCreateWithoutCohortInput, TaskUncheckedCreateWithoutCohortInput> | TaskCreateWithoutCohortInput[] | TaskUncheckedCreateWithoutCohortInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCohortInput | TaskCreateOrConnectWithoutCohortInput[]
    createMany?: TaskCreateManyCohortInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutCohortInput = {
    create?: XOR<DocumentCreateWithoutCohortInput, DocumentUncheckedCreateWithoutCohortInput> | DocumentCreateWithoutCohortInput[] | DocumentUncheckedCreateWithoutCohortInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutCohortInput | DocumentCreateOrConnectWithoutCohortInput[]
    createMany?: DocumentCreateManyCohortInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CohortStudentUpdateManyWithoutCohortNestedInput = {
    create?: XOR<CohortStudentCreateWithoutCohortInput, CohortStudentUncheckedCreateWithoutCohortInput> | CohortStudentCreateWithoutCohortInput[] | CohortStudentUncheckedCreateWithoutCohortInput[]
    connectOrCreate?: CohortStudentCreateOrConnectWithoutCohortInput | CohortStudentCreateOrConnectWithoutCohortInput[]
    upsert?: CohortStudentUpsertWithWhereUniqueWithoutCohortInput | CohortStudentUpsertWithWhereUniqueWithoutCohortInput[]
    createMany?: CohortStudentCreateManyCohortInputEnvelope
    set?: CohortStudentWhereUniqueInput | CohortStudentWhereUniqueInput[]
    disconnect?: CohortStudentWhereUniqueInput | CohortStudentWhereUniqueInput[]
    delete?: CohortStudentWhereUniqueInput | CohortStudentWhereUniqueInput[]
    connect?: CohortStudentWhereUniqueInput | CohortStudentWhereUniqueInput[]
    update?: CohortStudentUpdateWithWhereUniqueWithoutCohortInput | CohortStudentUpdateWithWhereUniqueWithoutCohortInput[]
    updateMany?: CohortStudentUpdateManyWithWhereWithoutCohortInput | CohortStudentUpdateManyWithWhereWithoutCohortInput[]
    deleteMany?: CohortStudentScalarWhereInput | CohortStudentScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutCohortNestedInput = {
    create?: XOR<TaskCreateWithoutCohortInput, TaskUncheckedCreateWithoutCohortInput> | TaskCreateWithoutCohortInput[] | TaskUncheckedCreateWithoutCohortInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCohortInput | TaskCreateOrConnectWithoutCohortInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutCohortInput | TaskUpsertWithWhereUniqueWithoutCohortInput[]
    createMany?: TaskCreateManyCohortInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutCohortInput | TaskUpdateWithWhereUniqueWithoutCohortInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutCohortInput | TaskUpdateManyWithWhereWithoutCohortInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type DocumentUpdateManyWithoutCohortNestedInput = {
    create?: XOR<DocumentCreateWithoutCohortInput, DocumentUncheckedCreateWithoutCohortInput> | DocumentCreateWithoutCohortInput[] | DocumentUncheckedCreateWithoutCohortInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutCohortInput | DocumentCreateOrConnectWithoutCohortInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutCohortInput | DocumentUpsertWithWhereUniqueWithoutCohortInput[]
    createMany?: DocumentCreateManyCohortInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutCohortInput | DocumentUpdateWithWhereUniqueWithoutCohortInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutCohortInput | DocumentUpdateManyWithWhereWithoutCohortInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type CohortStudentUncheckedUpdateManyWithoutCohortNestedInput = {
    create?: XOR<CohortStudentCreateWithoutCohortInput, CohortStudentUncheckedCreateWithoutCohortInput> | CohortStudentCreateWithoutCohortInput[] | CohortStudentUncheckedCreateWithoutCohortInput[]
    connectOrCreate?: CohortStudentCreateOrConnectWithoutCohortInput | CohortStudentCreateOrConnectWithoutCohortInput[]
    upsert?: CohortStudentUpsertWithWhereUniqueWithoutCohortInput | CohortStudentUpsertWithWhereUniqueWithoutCohortInput[]
    createMany?: CohortStudentCreateManyCohortInputEnvelope
    set?: CohortStudentWhereUniqueInput | CohortStudentWhereUniqueInput[]
    disconnect?: CohortStudentWhereUniqueInput | CohortStudentWhereUniqueInput[]
    delete?: CohortStudentWhereUniqueInput | CohortStudentWhereUniqueInput[]
    connect?: CohortStudentWhereUniqueInput | CohortStudentWhereUniqueInput[]
    update?: CohortStudentUpdateWithWhereUniqueWithoutCohortInput | CohortStudentUpdateWithWhereUniqueWithoutCohortInput[]
    updateMany?: CohortStudentUpdateManyWithWhereWithoutCohortInput | CohortStudentUpdateManyWithWhereWithoutCohortInput[]
    deleteMany?: CohortStudentScalarWhereInput | CohortStudentScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutCohortNestedInput = {
    create?: XOR<TaskCreateWithoutCohortInput, TaskUncheckedCreateWithoutCohortInput> | TaskCreateWithoutCohortInput[] | TaskUncheckedCreateWithoutCohortInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCohortInput | TaskCreateOrConnectWithoutCohortInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutCohortInput | TaskUpsertWithWhereUniqueWithoutCohortInput[]
    createMany?: TaskCreateManyCohortInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutCohortInput | TaskUpdateWithWhereUniqueWithoutCohortInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutCohortInput | TaskUpdateManyWithWhereWithoutCohortInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutCohortNestedInput = {
    create?: XOR<DocumentCreateWithoutCohortInput, DocumentUncheckedCreateWithoutCohortInput> | DocumentCreateWithoutCohortInput[] | DocumentUncheckedCreateWithoutCohortInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutCohortInput | DocumentCreateOrConnectWithoutCohortInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutCohortInput | DocumentUpsertWithWhereUniqueWithoutCohortInput[]
    createMany?: DocumentCreateManyCohortInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutCohortInput | DocumentUpdateWithWhereUniqueWithoutCohortInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutCohortInput | DocumentUpdateManyWithWhereWithoutCohortInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type CohortCreateNestedOneWithoutStudentsInput = {
    create?: XOR<CohortCreateWithoutStudentsInput, CohortUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: CohortCreateOrConnectWithoutStudentsInput
    connect?: CohortWhereUniqueInput
  }

  export type TaskSubmissionCreateNestedManyWithoutStudentInput = {
    create?: XOR<TaskSubmissionCreateWithoutStudentInput, TaskSubmissionUncheckedCreateWithoutStudentInput> | TaskSubmissionCreateWithoutStudentInput[] | TaskSubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: TaskSubmissionCreateOrConnectWithoutStudentInput | TaskSubmissionCreateOrConnectWithoutStudentInput[]
    createMany?: TaskSubmissionCreateManyStudentInputEnvelope
    connect?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
  }

  export type GamificationPointCreateNestedManyWithoutStudentInput = {
    create?: XOR<GamificationPointCreateWithoutStudentInput, GamificationPointUncheckedCreateWithoutStudentInput> | GamificationPointCreateWithoutStudentInput[] | GamificationPointUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: GamificationPointCreateOrConnectWithoutStudentInput | GamificationPointCreateOrConnectWithoutStudentInput[]
    createMany?: GamificationPointCreateManyStudentInputEnvelope
    connect?: GamificationPointWhereUniqueInput | GamificationPointWhereUniqueInput[]
  }

  export type WeeklyScoreCreateNestedManyWithoutStudentInput = {
    create?: XOR<WeeklyScoreCreateWithoutStudentInput, WeeklyScoreUncheckedCreateWithoutStudentInput> | WeeklyScoreCreateWithoutStudentInput[] | WeeklyScoreUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: WeeklyScoreCreateOrConnectWithoutStudentInput | WeeklyScoreCreateOrConnectWithoutStudentInput[]
    createMany?: WeeklyScoreCreateManyStudentInputEnvelope
    connect?: WeeklyScoreWhereUniqueInput | WeeklyScoreWhereUniqueInput[]
  }

  export type TaskSubmissionUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<TaskSubmissionCreateWithoutStudentInput, TaskSubmissionUncheckedCreateWithoutStudentInput> | TaskSubmissionCreateWithoutStudentInput[] | TaskSubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: TaskSubmissionCreateOrConnectWithoutStudentInput | TaskSubmissionCreateOrConnectWithoutStudentInput[]
    createMany?: TaskSubmissionCreateManyStudentInputEnvelope
    connect?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
  }

  export type GamificationPointUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<GamificationPointCreateWithoutStudentInput, GamificationPointUncheckedCreateWithoutStudentInput> | GamificationPointCreateWithoutStudentInput[] | GamificationPointUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: GamificationPointCreateOrConnectWithoutStudentInput | GamificationPointCreateOrConnectWithoutStudentInput[]
    createMany?: GamificationPointCreateManyStudentInputEnvelope
    connect?: GamificationPointWhereUniqueInput | GamificationPointWhereUniqueInput[]
  }

  export type WeeklyScoreUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<WeeklyScoreCreateWithoutStudentInput, WeeklyScoreUncheckedCreateWithoutStudentInput> | WeeklyScoreCreateWithoutStudentInput[] | WeeklyScoreUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: WeeklyScoreCreateOrConnectWithoutStudentInput | WeeklyScoreCreateOrConnectWithoutStudentInput[]
    createMany?: WeeklyScoreCreateManyStudentInputEnvelope
    connect?: WeeklyScoreWhereUniqueInput | WeeklyScoreWhereUniqueInput[]
  }

  export type CohortUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<CohortCreateWithoutStudentsInput, CohortUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: CohortCreateOrConnectWithoutStudentsInput
    upsert?: CohortUpsertWithoutStudentsInput
    connect?: CohortWhereUniqueInput
    update?: XOR<XOR<CohortUpdateToOneWithWhereWithoutStudentsInput, CohortUpdateWithoutStudentsInput>, CohortUncheckedUpdateWithoutStudentsInput>
  }

  export type TaskSubmissionUpdateManyWithoutStudentNestedInput = {
    create?: XOR<TaskSubmissionCreateWithoutStudentInput, TaskSubmissionUncheckedCreateWithoutStudentInput> | TaskSubmissionCreateWithoutStudentInput[] | TaskSubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: TaskSubmissionCreateOrConnectWithoutStudentInput | TaskSubmissionCreateOrConnectWithoutStudentInput[]
    upsert?: TaskSubmissionUpsertWithWhereUniqueWithoutStudentInput | TaskSubmissionUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: TaskSubmissionCreateManyStudentInputEnvelope
    set?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
    disconnect?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
    delete?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
    connect?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
    update?: TaskSubmissionUpdateWithWhereUniqueWithoutStudentInput | TaskSubmissionUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: TaskSubmissionUpdateManyWithWhereWithoutStudentInput | TaskSubmissionUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: TaskSubmissionScalarWhereInput | TaskSubmissionScalarWhereInput[]
  }

  export type GamificationPointUpdateManyWithoutStudentNestedInput = {
    create?: XOR<GamificationPointCreateWithoutStudentInput, GamificationPointUncheckedCreateWithoutStudentInput> | GamificationPointCreateWithoutStudentInput[] | GamificationPointUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: GamificationPointCreateOrConnectWithoutStudentInput | GamificationPointCreateOrConnectWithoutStudentInput[]
    upsert?: GamificationPointUpsertWithWhereUniqueWithoutStudentInput | GamificationPointUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: GamificationPointCreateManyStudentInputEnvelope
    set?: GamificationPointWhereUniqueInput | GamificationPointWhereUniqueInput[]
    disconnect?: GamificationPointWhereUniqueInput | GamificationPointWhereUniqueInput[]
    delete?: GamificationPointWhereUniqueInput | GamificationPointWhereUniqueInput[]
    connect?: GamificationPointWhereUniqueInput | GamificationPointWhereUniqueInput[]
    update?: GamificationPointUpdateWithWhereUniqueWithoutStudentInput | GamificationPointUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: GamificationPointUpdateManyWithWhereWithoutStudentInput | GamificationPointUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: GamificationPointScalarWhereInput | GamificationPointScalarWhereInput[]
  }

  export type WeeklyScoreUpdateManyWithoutStudentNestedInput = {
    create?: XOR<WeeklyScoreCreateWithoutStudentInput, WeeklyScoreUncheckedCreateWithoutStudentInput> | WeeklyScoreCreateWithoutStudentInput[] | WeeklyScoreUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: WeeklyScoreCreateOrConnectWithoutStudentInput | WeeklyScoreCreateOrConnectWithoutStudentInput[]
    upsert?: WeeklyScoreUpsertWithWhereUniqueWithoutStudentInput | WeeklyScoreUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: WeeklyScoreCreateManyStudentInputEnvelope
    set?: WeeklyScoreWhereUniqueInput | WeeklyScoreWhereUniqueInput[]
    disconnect?: WeeklyScoreWhereUniqueInput | WeeklyScoreWhereUniqueInput[]
    delete?: WeeklyScoreWhereUniqueInput | WeeklyScoreWhereUniqueInput[]
    connect?: WeeklyScoreWhereUniqueInput | WeeklyScoreWhereUniqueInput[]
    update?: WeeklyScoreUpdateWithWhereUniqueWithoutStudentInput | WeeklyScoreUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: WeeklyScoreUpdateManyWithWhereWithoutStudentInput | WeeklyScoreUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: WeeklyScoreScalarWhereInput | WeeklyScoreScalarWhereInput[]
  }

  export type TaskSubmissionUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<TaskSubmissionCreateWithoutStudentInput, TaskSubmissionUncheckedCreateWithoutStudentInput> | TaskSubmissionCreateWithoutStudentInput[] | TaskSubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: TaskSubmissionCreateOrConnectWithoutStudentInput | TaskSubmissionCreateOrConnectWithoutStudentInput[]
    upsert?: TaskSubmissionUpsertWithWhereUniqueWithoutStudentInput | TaskSubmissionUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: TaskSubmissionCreateManyStudentInputEnvelope
    set?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
    disconnect?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
    delete?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
    connect?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
    update?: TaskSubmissionUpdateWithWhereUniqueWithoutStudentInput | TaskSubmissionUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: TaskSubmissionUpdateManyWithWhereWithoutStudentInput | TaskSubmissionUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: TaskSubmissionScalarWhereInput | TaskSubmissionScalarWhereInput[]
  }

  export type GamificationPointUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<GamificationPointCreateWithoutStudentInput, GamificationPointUncheckedCreateWithoutStudentInput> | GamificationPointCreateWithoutStudentInput[] | GamificationPointUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: GamificationPointCreateOrConnectWithoutStudentInput | GamificationPointCreateOrConnectWithoutStudentInput[]
    upsert?: GamificationPointUpsertWithWhereUniqueWithoutStudentInput | GamificationPointUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: GamificationPointCreateManyStudentInputEnvelope
    set?: GamificationPointWhereUniqueInput | GamificationPointWhereUniqueInput[]
    disconnect?: GamificationPointWhereUniqueInput | GamificationPointWhereUniqueInput[]
    delete?: GamificationPointWhereUniqueInput | GamificationPointWhereUniqueInput[]
    connect?: GamificationPointWhereUniqueInput | GamificationPointWhereUniqueInput[]
    update?: GamificationPointUpdateWithWhereUniqueWithoutStudentInput | GamificationPointUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: GamificationPointUpdateManyWithWhereWithoutStudentInput | GamificationPointUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: GamificationPointScalarWhereInput | GamificationPointScalarWhereInput[]
  }

  export type WeeklyScoreUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<WeeklyScoreCreateWithoutStudentInput, WeeklyScoreUncheckedCreateWithoutStudentInput> | WeeklyScoreCreateWithoutStudentInput[] | WeeklyScoreUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: WeeklyScoreCreateOrConnectWithoutStudentInput | WeeklyScoreCreateOrConnectWithoutStudentInput[]
    upsert?: WeeklyScoreUpsertWithWhereUniqueWithoutStudentInput | WeeklyScoreUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: WeeklyScoreCreateManyStudentInputEnvelope
    set?: WeeklyScoreWhereUniqueInput | WeeklyScoreWhereUniqueInput[]
    disconnect?: WeeklyScoreWhereUniqueInput | WeeklyScoreWhereUniqueInput[]
    delete?: WeeklyScoreWhereUniqueInput | WeeklyScoreWhereUniqueInput[]
    connect?: WeeklyScoreWhereUniqueInput | WeeklyScoreWhereUniqueInput[]
    update?: WeeklyScoreUpdateWithWhereUniqueWithoutStudentInput | WeeklyScoreUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: WeeklyScoreUpdateManyWithWhereWithoutStudentInput | WeeklyScoreUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: WeeklyScoreScalarWhereInput | WeeklyScoreScalarWhereInput[]
  }

  export type TaskCreateskillsInput = {
    set: string[]
  }

  export type CohortCreateNestedOneWithoutTasksInput = {
    create?: XOR<CohortCreateWithoutTasksInput, CohortUncheckedCreateWithoutTasksInput>
    connectOrCreate?: CohortCreateOrConnectWithoutTasksInput
    connect?: CohortWhereUniqueInput
  }

  export type TaskSubmissionCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskSubmissionCreateWithoutTaskInput, TaskSubmissionUncheckedCreateWithoutTaskInput> | TaskSubmissionCreateWithoutTaskInput[] | TaskSubmissionUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskSubmissionCreateOrConnectWithoutTaskInput | TaskSubmissionCreateOrConnectWithoutTaskInput[]
    createMany?: TaskSubmissionCreateManyTaskInputEnvelope
    connect?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
  }

  export type TaskSubmissionUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskSubmissionCreateWithoutTaskInput, TaskSubmissionUncheckedCreateWithoutTaskInput> | TaskSubmissionCreateWithoutTaskInput[] | TaskSubmissionUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskSubmissionCreateOrConnectWithoutTaskInput | TaskSubmissionCreateOrConnectWithoutTaskInput[]
    createMany?: TaskSubmissionCreateManyTaskInputEnvelope
    connect?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TaskUpdateskillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CohortUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<CohortCreateWithoutTasksInput, CohortUncheckedCreateWithoutTasksInput>
    connectOrCreate?: CohortCreateOrConnectWithoutTasksInput
    upsert?: CohortUpsertWithoutTasksInput
    connect?: CohortWhereUniqueInput
    update?: XOR<XOR<CohortUpdateToOneWithWhereWithoutTasksInput, CohortUpdateWithoutTasksInput>, CohortUncheckedUpdateWithoutTasksInput>
  }

  export type TaskSubmissionUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskSubmissionCreateWithoutTaskInput, TaskSubmissionUncheckedCreateWithoutTaskInput> | TaskSubmissionCreateWithoutTaskInput[] | TaskSubmissionUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskSubmissionCreateOrConnectWithoutTaskInput | TaskSubmissionCreateOrConnectWithoutTaskInput[]
    upsert?: TaskSubmissionUpsertWithWhereUniqueWithoutTaskInput | TaskSubmissionUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskSubmissionCreateManyTaskInputEnvelope
    set?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
    disconnect?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
    delete?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
    connect?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
    update?: TaskSubmissionUpdateWithWhereUniqueWithoutTaskInput | TaskSubmissionUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskSubmissionUpdateManyWithWhereWithoutTaskInput | TaskSubmissionUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskSubmissionScalarWhereInput | TaskSubmissionScalarWhereInput[]
  }

  export type TaskSubmissionUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskSubmissionCreateWithoutTaskInput, TaskSubmissionUncheckedCreateWithoutTaskInput> | TaskSubmissionCreateWithoutTaskInput[] | TaskSubmissionUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskSubmissionCreateOrConnectWithoutTaskInput | TaskSubmissionCreateOrConnectWithoutTaskInput[]
    upsert?: TaskSubmissionUpsertWithWhereUniqueWithoutTaskInput | TaskSubmissionUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskSubmissionCreateManyTaskInputEnvelope
    set?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
    disconnect?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
    delete?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
    connect?: TaskSubmissionWhereUniqueInput | TaskSubmissionWhereUniqueInput[]
    update?: TaskSubmissionUpdateWithWhereUniqueWithoutTaskInput | TaskSubmissionUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskSubmissionUpdateManyWithWhereWithoutTaskInput | TaskSubmissionUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskSubmissionScalarWhereInput | TaskSubmissionScalarWhereInput[]
  }

  export type TaskSubmissionCreateattachmentsInput = {
    set: string[]
  }

  export type TaskCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<TaskCreateWithoutSubmissionsInput, TaskUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutSubmissionsInput
    connect?: TaskWhereUniqueInput
  }

  export type CohortStudentCreateNestedOneWithoutTasksSubmittedInput = {
    create?: XOR<CohortStudentCreateWithoutTasksSubmittedInput, CohortStudentUncheckedCreateWithoutTasksSubmittedInput>
    connectOrCreate?: CohortStudentCreateOrConnectWithoutTasksSubmittedInput
    connect?: CohortStudentWhereUniqueInput
  }

  export type TaskSubmissionUpdateattachmentsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TaskUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<TaskCreateWithoutSubmissionsInput, TaskUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutSubmissionsInput
    upsert?: TaskUpsertWithoutSubmissionsInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutSubmissionsInput, TaskUpdateWithoutSubmissionsInput>, TaskUncheckedUpdateWithoutSubmissionsInput>
  }

  export type CohortStudentUpdateOneRequiredWithoutTasksSubmittedNestedInput = {
    create?: XOR<CohortStudentCreateWithoutTasksSubmittedInput, CohortStudentUncheckedCreateWithoutTasksSubmittedInput>
    connectOrCreate?: CohortStudentCreateOrConnectWithoutTasksSubmittedInput
    upsert?: CohortStudentUpsertWithoutTasksSubmittedInput
    connect?: CohortStudentWhereUniqueInput
    update?: XOR<XOR<CohortStudentUpdateToOneWithWhereWithoutTasksSubmittedInput, CohortStudentUpdateWithoutTasksSubmittedInput>, CohortStudentUncheckedUpdateWithoutTasksSubmittedInput>
  }

  export type DocumentCreatekeywordsInput = {
    set: string[]
  }

  export type CohortCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<CohortCreateWithoutDocumentsInput, CohortUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: CohortCreateOrConnectWithoutDocumentsInput
    connect?: CohortWhereUniqueInput
  }

  export type DocumentUpdatekeywordsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CohortUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<CohortCreateWithoutDocumentsInput, CohortUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: CohortCreateOrConnectWithoutDocumentsInput
    upsert?: CohortUpsertWithoutDocumentsInput
    connect?: CohortWhereUniqueInput
    update?: XOR<XOR<CohortUpdateToOneWithWhereWithoutDocumentsInput, CohortUpdateWithoutDocumentsInput>, CohortUncheckedUpdateWithoutDocumentsInput>
  }

  export type CohortStudentCreateNestedOneWithoutGamificationPointsInput = {
    create?: XOR<CohortStudentCreateWithoutGamificationPointsInput, CohortStudentUncheckedCreateWithoutGamificationPointsInput>
    connectOrCreate?: CohortStudentCreateOrConnectWithoutGamificationPointsInput
    connect?: CohortStudentWhereUniqueInput
  }

  export type CohortStudentUpdateOneRequiredWithoutGamificationPointsNestedInput = {
    create?: XOR<CohortStudentCreateWithoutGamificationPointsInput, CohortStudentUncheckedCreateWithoutGamificationPointsInput>
    connectOrCreate?: CohortStudentCreateOrConnectWithoutGamificationPointsInput
    upsert?: CohortStudentUpsertWithoutGamificationPointsInput
    connect?: CohortStudentWhereUniqueInput
    update?: XOR<XOR<CohortStudentUpdateToOneWithWhereWithoutGamificationPointsInput, CohortStudentUpdateWithoutGamificationPointsInput>, CohortStudentUncheckedUpdateWithoutGamificationPointsInput>
  }

  export type StudentAchievementCreateNestedManyWithoutAchievementInput = {
    create?: XOR<StudentAchievementCreateWithoutAchievementInput, StudentAchievementUncheckedCreateWithoutAchievementInput> | StudentAchievementCreateWithoutAchievementInput[] | StudentAchievementUncheckedCreateWithoutAchievementInput[]
    connectOrCreate?: StudentAchievementCreateOrConnectWithoutAchievementInput | StudentAchievementCreateOrConnectWithoutAchievementInput[]
    createMany?: StudentAchievementCreateManyAchievementInputEnvelope
    connect?: StudentAchievementWhereUniqueInput | StudentAchievementWhereUniqueInput[]
  }

  export type StudentAchievementUncheckedCreateNestedManyWithoutAchievementInput = {
    create?: XOR<StudentAchievementCreateWithoutAchievementInput, StudentAchievementUncheckedCreateWithoutAchievementInput> | StudentAchievementCreateWithoutAchievementInput[] | StudentAchievementUncheckedCreateWithoutAchievementInput[]
    connectOrCreate?: StudentAchievementCreateOrConnectWithoutAchievementInput | StudentAchievementCreateOrConnectWithoutAchievementInput[]
    createMany?: StudentAchievementCreateManyAchievementInputEnvelope
    connect?: StudentAchievementWhereUniqueInput | StudentAchievementWhereUniqueInput[]
  }

  export type StudentAchievementUpdateManyWithoutAchievementNestedInput = {
    create?: XOR<StudentAchievementCreateWithoutAchievementInput, StudentAchievementUncheckedCreateWithoutAchievementInput> | StudentAchievementCreateWithoutAchievementInput[] | StudentAchievementUncheckedCreateWithoutAchievementInput[]
    connectOrCreate?: StudentAchievementCreateOrConnectWithoutAchievementInput | StudentAchievementCreateOrConnectWithoutAchievementInput[]
    upsert?: StudentAchievementUpsertWithWhereUniqueWithoutAchievementInput | StudentAchievementUpsertWithWhereUniqueWithoutAchievementInput[]
    createMany?: StudentAchievementCreateManyAchievementInputEnvelope
    set?: StudentAchievementWhereUniqueInput | StudentAchievementWhereUniqueInput[]
    disconnect?: StudentAchievementWhereUniqueInput | StudentAchievementWhereUniqueInput[]
    delete?: StudentAchievementWhereUniqueInput | StudentAchievementWhereUniqueInput[]
    connect?: StudentAchievementWhereUniqueInput | StudentAchievementWhereUniqueInput[]
    update?: StudentAchievementUpdateWithWhereUniqueWithoutAchievementInput | StudentAchievementUpdateWithWhereUniqueWithoutAchievementInput[]
    updateMany?: StudentAchievementUpdateManyWithWhereWithoutAchievementInput | StudentAchievementUpdateManyWithWhereWithoutAchievementInput[]
    deleteMany?: StudentAchievementScalarWhereInput | StudentAchievementScalarWhereInput[]
  }

  export type StudentAchievementUncheckedUpdateManyWithoutAchievementNestedInput = {
    create?: XOR<StudentAchievementCreateWithoutAchievementInput, StudentAchievementUncheckedCreateWithoutAchievementInput> | StudentAchievementCreateWithoutAchievementInput[] | StudentAchievementUncheckedCreateWithoutAchievementInput[]
    connectOrCreate?: StudentAchievementCreateOrConnectWithoutAchievementInput | StudentAchievementCreateOrConnectWithoutAchievementInput[]
    upsert?: StudentAchievementUpsertWithWhereUniqueWithoutAchievementInput | StudentAchievementUpsertWithWhereUniqueWithoutAchievementInput[]
    createMany?: StudentAchievementCreateManyAchievementInputEnvelope
    set?: StudentAchievementWhereUniqueInput | StudentAchievementWhereUniqueInput[]
    disconnect?: StudentAchievementWhereUniqueInput | StudentAchievementWhereUniqueInput[]
    delete?: StudentAchievementWhereUniqueInput | StudentAchievementWhereUniqueInput[]
    connect?: StudentAchievementWhereUniqueInput | StudentAchievementWhereUniqueInput[]
    update?: StudentAchievementUpdateWithWhereUniqueWithoutAchievementInput | StudentAchievementUpdateWithWhereUniqueWithoutAchievementInput[]
    updateMany?: StudentAchievementUpdateManyWithWhereWithoutAchievementInput | StudentAchievementUpdateManyWithWhereWithoutAchievementInput[]
    deleteMany?: StudentAchievementScalarWhereInput | StudentAchievementScalarWhereInput[]
  }

  export type AchievementCreateNestedOneWithoutEarnedByInput = {
    create?: XOR<AchievementCreateWithoutEarnedByInput, AchievementUncheckedCreateWithoutEarnedByInput>
    connectOrCreate?: AchievementCreateOrConnectWithoutEarnedByInput
    connect?: AchievementWhereUniqueInput
  }

  export type AchievementUpdateOneRequiredWithoutEarnedByNestedInput = {
    create?: XOR<AchievementCreateWithoutEarnedByInput, AchievementUncheckedCreateWithoutEarnedByInput>
    connectOrCreate?: AchievementCreateOrConnectWithoutEarnedByInput
    upsert?: AchievementUpsertWithoutEarnedByInput
    connect?: AchievementWhereUniqueInput
    update?: XOR<XOR<AchievementUpdateToOneWithWhereWithoutEarnedByInput, AchievementUpdateWithoutEarnedByInput>, AchievementUncheckedUpdateWithoutEarnedByInput>
  }

  export type WeeklyScoreCreatestrengthsInput = {
    set: string[]
  }

  export type WeeklyScoreCreateimprovementsInput = {
    set: string[]
  }

  export type CohortStudentCreateNestedOneWithoutWeeklyScoresInput = {
    create?: XOR<CohortStudentCreateWithoutWeeklyScoresInput, CohortStudentUncheckedCreateWithoutWeeklyScoresInput>
    connectOrCreate?: CohortStudentCreateOrConnectWithoutWeeklyScoresInput
    connect?: CohortStudentWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WeeklyScoreUpdatestrengthsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type WeeklyScoreUpdateimprovementsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CohortStudentUpdateOneRequiredWithoutWeeklyScoresNestedInput = {
    create?: XOR<CohortStudentCreateWithoutWeeklyScoresInput, CohortStudentUncheckedCreateWithoutWeeklyScoresInput>
    connectOrCreate?: CohortStudentCreateOrConnectWithoutWeeklyScoresInput
    upsert?: CohortStudentUpsertWithoutWeeklyScoresInput
    connect?: CohortStudentWhereUniqueInput
    update?: XOR<XOR<CohortStudentUpdateToOneWithWhereWithoutWeeklyScoresInput, CohortStudentUpdateWithoutWeeklyScoresInput>, CohortStudentUncheckedUpdateWithoutWeeklyScoresInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CohortStudentCreateWithoutCohortInput = {
    id?: string
    studentId: string
    studentEmail: string
    studentName: string
    avatarUrl?: string | null
    role?: string
    joinedAt?: Date | string
    status?: string
    tasksSubmitted?: TaskSubmissionCreateNestedManyWithoutStudentInput
    gamificationPoints?: GamificationPointCreateNestedManyWithoutStudentInput
    weeklyScores?: WeeklyScoreCreateNestedManyWithoutStudentInput
  }

  export type CohortStudentUncheckedCreateWithoutCohortInput = {
    id?: string
    studentId: string
    studentEmail: string
    studentName: string
    avatarUrl?: string | null
    role?: string
    joinedAt?: Date | string
    status?: string
    tasksSubmitted?: TaskSubmissionUncheckedCreateNestedManyWithoutStudentInput
    gamificationPoints?: GamificationPointUncheckedCreateNestedManyWithoutStudentInput
    weeklyScores?: WeeklyScoreUncheckedCreateNestedManyWithoutStudentInput
  }

  export type CohortStudentCreateOrConnectWithoutCohortInput = {
    where: CohortStudentWhereUniqueInput
    create: XOR<CohortStudentCreateWithoutCohortInput, CohortStudentUncheckedCreateWithoutCohortInput>
  }

  export type CohortStudentCreateManyCohortInputEnvelope = {
    data: CohortStudentCreateManyCohortInput | CohortStudentCreateManyCohortInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutCohortInput = {
    id?: string
    title: string
    description: string
    type: string
    dueDate?: Date | string | null
    maxPoints?: number
    difficulty: string
    skills?: TaskCreateskillsInput | string[]
    githubRequired?: boolean
    prRequired?: boolean
    requiresReview?: boolean
    assignedBy: string
    assignedByName: string
    assignedByEmail: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: TaskSubmissionCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutCohortInput = {
    id?: string
    title: string
    description: string
    type: string
    dueDate?: Date | string | null
    maxPoints?: number
    difficulty: string
    skills?: TaskCreateskillsInput | string[]
    githubRequired?: boolean
    prRequired?: boolean
    requiresReview?: boolean
    assignedBy: string
    assignedByName: string
    assignedByEmail: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: TaskSubmissionUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutCohortInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutCohortInput, TaskUncheckedCreateWithoutCohortInput>
  }

  export type TaskCreateManyCohortInputEnvelope = {
    data: TaskCreateManyCohortInput | TaskCreateManyCohortInput[]
    skipDuplicates?: boolean
  }

  export type DocumentCreateWithoutCohortInput = {
    id?: string
    title: string
    description?: string | null
    fileUrl: string
    fileType: string
    fileSize: number
    category: string
    isIndexed?: boolean
    vectorStoreId?: string | null
    keywords?: DocumentCreatekeywordsInput | string[]
    uploadedBy: string
    uploadedByName: string
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentUncheckedCreateWithoutCohortInput = {
    id?: string
    title: string
    description?: string | null
    fileUrl: string
    fileType: string
    fileSize: number
    category: string
    isIndexed?: boolean
    vectorStoreId?: string | null
    keywords?: DocumentCreatekeywordsInput | string[]
    uploadedBy: string
    uploadedByName: string
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentCreateOrConnectWithoutCohortInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutCohortInput, DocumentUncheckedCreateWithoutCohortInput>
  }

  export type DocumentCreateManyCohortInputEnvelope = {
    data: DocumentCreateManyCohortInput | DocumentCreateManyCohortInput[]
    skipDuplicates?: boolean
  }

  export type CohortStudentUpsertWithWhereUniqueWithoutCohortInput = {
    where: CohortStudentWhereUniqueInput
    update: XOR<CohortStudentUpdateWithoutCohortInput, CohortStudentUncheckedUpdateWithoutCohortInput>
    create: XOR<CohortStudentCreateWithoutCohortInput, CohortStudentUncheckedCreateWithoutCohortInput>
  }

  export type CohortStudentUpdateWithWhereUniqueWithoutCohortInput = {
    where: CohortStudentWhereUniqueInput
    data: XOR<CohortStudentUpdateWithoutCohortInput, CohortStudentUncheckedUpdateWithoutCohortInput>
  }

  export type CohortStudentUpdateManyWithWhereWithoutCohortInput = {
    where: CohortStudentScalarWhereInput
    data: XOR<CohortStudentUpdateManyMutationInput, CohortStudentUncheckedUpdateManyWithoutCohortInput>
  }

  export type CohortStudentScalarWhereInput = {
    AND?: CohortStudentScalarWhereInput | CohortStudentScalarWhereInput[]
    OR?: CohortStudentScalarWhereInput[]
    NOT?: CohortStudentScalarWhereInput | CohortStudentScalarWhereInput[]
    id?: StringFilter<"CohortStudent"> | string
    cohortId?: StringFilter<"CohortStudent"> | string
    studentId?: StringFilter<"CohortStudent"> | string
    studentEmail?: StringFilter<"CohortStudent"> | string
    studentName?: StringFilter<"CohortStudent"> | string
    avatarUrl?: StringNullableFilter<"CohortStudent"> | string | null
    role?: StringFilter<"CohortStudent"> | string
    joinedAt?: DateTimeFilter<"CohortStudent"> | Date | string
    status?: StringFilter<"CohortStudent"> | string
  }

  export type TaskUpsertWithWhereUniqueWithoutCohortInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutCohortInput, TaskUncheckedUpdateWithoutCohortInput>
    create: XOR<TaskCreateWithoutCohortInput, TaskUncheckedCreateWithoutCohortInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutCohortInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutCohortInput, TaskUncheckedUpdateWithoutCohortInput>
  }

  export type TaskUpdateManyWithWhereWithoutCohortInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutCohortInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: StringFilter<"Task"> | string
    cohortId?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringFilter<"Task"> | string
    type?: StringFilter<"Task"> | string
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    maxPoints?: IntFilter<"Task"> | number
    difficulty?: StringFilter<"Task"> | string
    skills?: StringNullableListFilter<"Task">
    githubRequired?: BoolFilter<"Task"> | boolean
    prRequired?: BoolFilter<"Task"> | boolean
    requiresReview?: BoolFilter<"Task"> | boolean
    assignedBy?: StringFilter<"Task"> | string
    assignedByName?: StringFilter<"Task"> | string
    assignedByEmail?: StringFilter<"Task"> | string
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
  }

  export type DocumentUpsertWithWhereUniqueWithoutCohortInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutCohortInput, DocumentUncheckedUpdateWithoutCohortInput>
    create: XOR<DocumentCreateWithoutCohortInput, DocumentUncheckedCreateWithoutCohortInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutCohortInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutCohortInput, DocumentUncheckedUpdateWithoutCohortInput>
  }

  export type DocumentUpdateManyWithWhereWithoutCohortInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutCohortInput>
  }

  export type DocumentScalarWhereInput = {
    AND?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    OR?: DocumentScalarWhereInput[]
    NOT?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    id?: StringFilter<"Document"> | string
    cohortId?: StringFilter<"Document"> | string
    title?: StringFilter<"Document"> | string
    description?: StringNullableFilter<"Document"> | string | null
    fileUrl?: StringFilter<"Document"> | string
    fileType?: StringFilter<"Document"> | string
    fileSize?: IntFilter<"Document"> | number
    category?: StringFilter<"Document"> | string
    isIndexed?: BoolFilter<"Document"> | boolean
    vectorStoreId?: StringNullableFilter<"Document"> | string | null
    keywords?: StringNullableListFilter<"Document">
    uploadedBy?: StringFilter<"Document"> | string
    uploadedByName?: StringFilter<"Document"> | string
    isPublic?: BoolFilter<"Document"> | boolean
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
  }

  export type CohortCreateWithoutStudentsInput = {
    id?: string
    name: string
    programId: string
    programType: string
    startDate: Date | string
    endDate: Date | string
    isActive?: boolean
    maxStudents?: number | null
    description?: string | null
    department: string
    level: string
    supervisorId?: string | null
    supervisorName?: string | null
    supervisorEmail?: string | null
    githubRepoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutCohortInput
    documents?: DocumentCreateNestedManyWithoutCohortInput
  }

  export type CohortUncheckedCreateWithoutStudentsInput = {
    id?: string
    name: string
    programId: string
    programType: string
    startDate: Date | string
    endDate: Date | string
    isActive?: boolean
    maxStudents?: number | null
    description?: string | null
    department: string
    level: string
    supervisorId?: string | null
    supervisorName?: string | null
    supervisorEmail?: string | null
    githubRepoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutCohortInput
    documents?: DocumentUncheckedCreateNestedManyWithoutCohortInput
  }

  export type CohortCreateOrConnectWithoutStudentsInput = {
    where: CohortWhereUniqueInput
    create: XOR<CohortCreateWithoutStudentsInput, CohortUncheckedCreateWithoutStudentsInput>
  }

  export type TaskSubmissionCreateWithoutStudentInput = {
    id?: string
    title: string
    description: string
    content: string
    githubRepoUrl?: string | null
    githubPrUrl?: string | null
    githubBranch?: string | null
    commitHash?: string | null
    attachments?: TaskSubmissionCreateattachmentsInput | string[]
    status?: string
    pointsEarned?: number | null
    feedback?: string | null
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    submittedAt?: Date | string
    updatedAt?: Date | string
    task: TaskCreateNestedOneWithoutSubmissionsInput
  }

  export type TaskSubmissionUncheckedCreateWithoutStudentInput = {
    id?: string
    taskId: string
    title: string
    description: string
    content: string
    githubRepoUrl?: string | null
    githubPrUrl?: string | null
    githubBranch?: string | null
    commitHash?: string | null
    attachments?: TaskSubmissionCreateattachmentsInput | string[]
    status?: string
    pointsEarned?: number | null
    feedback?: string | null
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    submittedAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskSubmissionCreateOrConnectWithoutStudentInput = {
    where: TaskSubmissionWhereUniqueInput
    create: XOR<TaskSubmissionCreateWithoutStudentInput, TaskSubmissionUncheckedCreateWithoutStudentInput>
  }

  export type TaskSubmissionCreateManyStudentInputEnvelope = {
    data: TaskSubmissionCreateManyStudentInput | TaskSubmissionCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type GamificationPointCreateWithoutStudentInput = {
    id?: string
    pointType: string
    points: number
    reason: string
    relatedTaskId?: string | null
    awardedAt?: Date | string
  }

  export type GamificationPointUncheckedCreateWithoutStudentInput = {
    id?: string
    pointType: string
    points: number
    reason: string
    relatedTaskId?: string | null
    awardedAt?: Date | string
  }

  export type GamificationPointCreateOrConnectWithoutStudentInput = {
    where: GamificationPointWhereUniqueInput
    create: XOR<GamificationPointCreateWithoutStudentInput, GamificationPointUncheckedCreateWithoutStudentInput>
  }

  export type GamificationPointCreateManyStudentInputEnvelope = {
    data: GamificationPointCreateManyStudentInput | GamificationPointCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type WeeklyScoreCreateWithoutStudentInput = {
    id?: string
    cohortId: string
    weekNumber: number
    tasksCompleted?: number
    tasksOnTime?: number
    totalPoints?: number
    codeQuality?: number | null
    commitFrequency?: number
    prQuality?: number | null
    overallScore: number
    rank?: number | null
    aiAnalysis?: string | null
    strengths?: WeeklyScoreCreatestrengthsInput | string[]
    improvements?: WeeklyScoreCreateimprovementsInput | string[]
    emailSent?: boolean
    emailSentAt?: Date | string | null
    weekStartDate: Date | string
    weekEndDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeeklyScoreUncheckedCreateWithoutStudentInput = {
    id?: string
    cohortId: string
    weekNumber: number
    tasksCompleted?: number
    tasksOnTime?: number
    totalPoints?: number
    codeQuality?: number | null
    commitFrequency?: number
    prQuality?: number | null
    overallScore: number
    rank?: number | null
    aiAnalysis?: string | null
    strengths?: WeeklyScoreCreatestrengthsInput | string[]
    improvements?: WeeklyScoreCreateimprovementsInput | string[]
    emailSent?: boolean
    emailSentAt?: Date | string | null
    weekStartDate: Date | string
    weekEndDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeeklyScoreCreateOrConnectWithoutStudentInput = {
    where: WeeklyScoreWhereUniqueInput
    create: XOR<WeeklyScoreCreateWithoutStudentInput, WeeklyScoreUncheckedCreateWithoutStudentInput>
  }

  export type WeeklyScoreCreateManyStudentInputEnvelope = {
    data: WeeklyScoreCreateManyStudentInput | WeeklyScoreCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type CohortUpsertWithoutStudentsInput = {
    update: XOR<CohortUpdateWithoutStudentsInput, CohortUncheckedUpdateWithoutStudentsInput>
    create: XOR<CohortCreateWithoutStudentsInput, CohortUncheckedCreateWithoutStudentsInput>
    where?: CohortWhereInput
  }

  export type CohortUpdateToOneWithWhereWithoutStudentsInput = {
    where?: CohortWhereInput
    data: XOR<CohortUpdateWithoutStudentsInput, CohortUncheckedUpdateWithoutStudentsInput>
  }

  export type CohortUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    programId?: StringFieldUpdateOperationsInput | string
    programType?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    maxStudents?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    department?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    supervisorId?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorName?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorEmail?: NullableStringFieldUpdateOperationsInput | string | null
    githubRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutCohortNestedInput
    documents?: DocumentUpdateManyWithoutCohortNestedInput
  }

  export type CohortUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    programId?: StringFieldUpdateOperationsInput | string
    programType?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    maxStudents?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    department?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    supervisorId?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorName?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorEmail?: NullableStringFieldUpdateOperationsInput | string | null
    githubRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutCohortNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutCohortNestedInput
  }

  export type TaskSubmissionUpsertWithWhereUniqueWithoutStudentInput = {
    where: TaskSubmissionWhereUniqueInput
    update: XOR<TaskSubmissionUpdateWithoutStudentInput, TaskSubmissionUncheckedUpdateWithoutStudentInput>
    create: XOR<TaskSubmissionCreateWithoutStudentInput, TaskSubmissionUncheckedCreateWithoutStudentInput>
  }

  export type TaskSubmissionUpdateWithWhereUniqueWithoutStudentInput = {
    where: TaskSubmissionWhereUniqueInput
    data: XOR<TaskSubmissionUpdateWithoutStudentInput, TaskSubmissionUncheckedUpdateWithoutStudentInput>
  }

  export type TaskSubmissionUpdateManyWithWhereWithoutStudentInput = {
    where: TaskSubmissionScalarWhereInput
    data: XOR<TaskSubmissionUpdateManyMutationInput, TaskSubmissionUncheckedUpdateManyWithoutStudentInput>
  }

  export type TaskSubmissionScalarWhereInput = {
    AND?: TaskSubmissionScalarWhereInput | TaskSubmissionScalarWhereInput[]
    OR?: TaskSubmissionScalarWhereInput[]
    NOT?: TaskSubmissionScalarWhereInput | TaskSubmissionScalarWhereInput[]
    id?: StringFilter<"TaskSubmission"> | string
    taskId?: StringFilter<"TaskSubmission"> | string
    studentId?: StringFilter<"TaskSubmission"> | string
    title?: StringFilter<"TaskSubmission"> | string
    description?: StringFilter<"TaskSubmission"> | string
    content?: StringFilter<"TaskSubmission"> | string
    githubRepoUrl?: StringNullableFilter<"TaskSubmission"> | string | null
    githubPrUrl?: StringNullableFilter<"TaskSubmission"> | string | null
    githubBranch?: StringNullableFilter<"TaskSubmission"> | string | null
    commitHash?: StringNullableFilter<"TaskSubmission"> | string | null
    attachments?: StringNullableListFilter<"TaskSubmission">
    status?: StringFilter<"TaskSubmission"> | string
    pointsEarned?: IntNullableFilter<"TaskSubmission"> | number | null
    feedback?: StringNullableFilter<"TaskSubmission"> | string | null
    reviewedBy?: StringNullableFilter<"TaskSubmission"> | string | null
    reviewedAt?: DateTimeNullableFilter<"TaskSubmission"> | Date | string | null
    submittedAt?: DateTimeFilter<"TaskSubmission"> | Date | string
    updatedAt?: DateTimeFilter<"TaskSubmission"> | Date | string
  }

  export type GamificationPointUpsertWithWhereUniqueWithoutStudentInput = {
    where: GamificationPointWhereUniqueInput
    update: XOR<GamificationPointUpdateWithoutStudentInput, GamificationPointUncheckedUpdateWithoutStudentInput>
    create: XOR<GamificationPointCreateWithoutStudentInput, GamificationPointUncheckedCreateWithoutStudentInput>
  }

  export type GamificationPointUpdateWithWhereUniqueWithoutStudentInput = {
    where: GamificationPointWhereUniqueInput
    data: XOR<GamificationPointUpdateWithoutStudentInput, GamificationPointUncheckedUpdateWithoutStudentInput>
  }

  export type GamificationPointUpdateManyWithWhereWithoutStudentInput = {
    where: GamificationPointScalarWhereInput
    data: XOR<GamificationPointUpdateManyMutationInput, GamificationPointUncheckedUpdateManyWithoutStudentInput>
  }

  export type GamificationPointScalarWhereInput = {
    AND?: GamificationPointScalarWhereInput | GamificationPointScalarWhereInput[]
    OR?: GamificationPointScalarWhereInput[]
    NOT?: GamificationPointScalarWhereInput | GamificationPointScalarWhereInput[]
    id?: StringFilter<"GamificationPoint"> | string
    studentId?: StringFilter<"GamificationPoint"> | string
    pointType?: StringFilter<"GamificationPoint"> | string
    points?: IntFilter<"GamificationPoint"> | number
    reason?: StringFilter<"GamificationPoint"> | string
    relatedTaskId?: StringNullableFilter<"GamificationPoint"> | string | null
    awardedAt?: DateTimeFilter<"GamificationPoint"> | Date | string
  }

  export type WeeklyScoreUpsertWithWhereUniqueWithoutStudentInput = {
    where: WeeklyScoreWhereUniqueInput
    update: XOR<WeeklyScoreUpdateWithoutStudentInput, WeeklyScoreUncheckedUpdateWithoutStudentInput>
    create: XOR<WeeklyScoreCreateWithoutStudentInput, WeeklyScoreUncheckedCreateWithoutStudentInput>
  }

  export type WeeklyScoreUpdateWithWhereUniqueWithoutStudentInput = {
    where: WeeklyScoreWhereUniqueInput
    data: XOR<WeeklyScoreUpdateWithoutStudentInput, WeeklyScoreUncheckedUpdateWithoutStudentInput>
  }

  export type WeeklyScoreUpdateManyWithWhereWithoutStudentInput = {
    where: WeeklyScoreScalarWhereInput
    data: XOR<WeeklyScoreUpdateManyMutationInput, WeeklyScoreUncheckedUpdateManyWithoutStudentInput>
  }

  export type WeeklyScoreScalarWhereInput = {
    AND?: WeeklyScoreScalarWhereInput | WeeklyScoreScalarWhereInput[]
    OR?: WeeklyScoreScalarWhereInput[]
    NOT?: WeeklyScoreScalarWhereInput | WeeklyScoreScalarWhereInput[]
    id?: StringFilter<"WeeklyScore"> | string
    studentId?: StringFilter<"WeeklyScore"> | string
    cohortId?: StringFilter<"WeeklyScore"> | string
    weekNumber?: IntFilter<"WeeklyScore"> | number
    tasksCompleted?: IntFilter<"WeeklyScore"> | number
    tasksOnTime?: IntFilter<"WeeklyScore"> | number
    totalPoints?: IntFilter<"WeeklyScore"> | number
    codeQuality?: FloatNullableFilter<"WeeklyScore"> | number | null
    commitFrequency?: IntFilter<"WeeklyScore"> | number
    prQuality?: FloatNullableFilter<"WeeklyScore"> | number | null
    overallScore?: FloatFilter<"WeeklyScore"> | number
    rank?: IntNullableFilter<"WeeklyScore"> | number | null
    aiAnalysis?: StringNullableFilter<"WeeklyScore"> | string | null
    strengths?: StringNullableListFilter<"WeeklyScore">
    improvements?: StringNullableListFilter<"WeeklyScore">
    emailSent?: BoolFilter<"WeeklyScore"> | boolean
    emailSentAt?: DateTimeNullableFilter<"WeeklyScore"> | Date | string | null
    weekStartDate?: DateTimeFilter<"WeeklyScore"> | Date | string
    weekEndDate?: DateTimeFilter<"WeeklyScore"> | Date | string
    createdAt?: DateTimeFilter<"WeeklyScore"> | Date | string
    updatedAt?: DateTimeFilter<"WeeklyScore"> | Date | string
  }

  export type CohortCreateWithoutTasksInput = {
    id?: string
    name: string
    programId: string
    programType: string
    startDate: Date | string
    endDate: Date | string
    isActive?: boolean
    maxStudents?: number | null
    description?: string | null
    department: string
    level: string
    supervisorId?: string | null
    supervisorName?: string | null
    supervisorEmail?: string | null
    githubRepoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: CohortStudentCreateNestedManyWithoutCohortInput
    documents?: DocumentCreateNestedManyWithoutCohortInput
  }

  export type CohortUncheckedCreateWithoutTasksInput = {
    id?: string
    name: string
    programId: string
    programType: string
    startDate: Date | string
    endDate: Date | string
    isActive?: boolean
    maxStudents?: number | null
    description?: string | null
    department: string
    level: string
    supervisorId?: string | null
    supervisorName?: string | null
    supervisorEmail?: string | null
    githubRepoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: CohortStudentUncheckedCreateNestedManyWithoutCohortInput
    documents?: DocumentUncheckedCreateNestedManyWithoutCohortInput
  }

  export type CohortCreateOrConnectWithoutTasksInput = {
    where: CohortWhereUniqueInput
    create: XOR<CohortCreateWithoutTasksInput, CohortUncheckedCreateWithoutTasksInput>
  }

  export type TaskSubmissionCreateWithoutTaskInput = {
    id?: string
    title: string
    description: string
    content: string
    githubRepoUrl?: string | null
    githubPrUrl?: string | null
    githubBranch?: string | null
    commitHash?: string | null
    attachments?: TaskSubmissionCreateattachmentsInput | string[]
    status?: string
    pointsEarned?: number | null
    feedback?: string | null
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    submittedAt?: Date | string
    updatedAt?: Date | string
    student: CohortStudentCreateNestedOneWithoutTasksSubmittedInput
  }

  export type TaskSubmissionUncheckedCreateWithoutTaskInput = {
    id?: string
    studentId: string
    title: string
    description: string
    content: string
    githubRepoUrl?: string | null
    githubPrUrl?: string | null
    githubBranch?: string | null
    commitHash?: string | null
    attachments?: TaskSubmissionCreateattachmentsInput | string[]
    status?: string
    pointsEarned?: number | null
    feedback?: string | null
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    submittedAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskSubmissionCreateOrConnectWithoutTaskInput = {
    where: TaskSubmissionWhereUniqueInput
    create: XOR<TaskSubmissionCreateWithoutTaskInput, TaskSubmissionUncheckedCreateWithoutTaskInput>
  }

  export type TaskSubmissionCreateManyTaskInputEnvelope = {
    data: TaskSubmissionCreateManyTaskInput | TaskSubmissionCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type CohortUpsertWithoutTasksInput = {
    update: XOR<CohortUpdateWithoutTasksInput, CohortUncheckedUpdateWithoutTasksInput>
    create: XOR<CohortCreateWithoutTasksInput, CohortUncheckedCreateWithoutTasksInput>
    where?: CohortWhereInput
  }

  export type CohortUpdateToOneWithWhereWithoutTasksInput = {
    where?: CohortWhereInput
    data: XOR<CohortUpdateWithoutTasksInput, CohortUncheckedUpdateWithoutTasksInput>
  }

  export type CohortUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    programId?: StringFieldUpdateOperationsInput | string
    programType?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    maxStudents?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    department?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    supervisorId?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorName?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorEmail?: NullableStringFieldUpdateOperationsInput | string | null
    githubRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: CohortStudentUpdateManyWithoutCohortNestedInput
    documents?: DocumentUpdateManyWithoutCohortNestedInput
  }

  export type CohortUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    programId?: StringFieldUpdateOperationsInput | string
    programType?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    maxStudents?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    department?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    supervisorId?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorName?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorEmail?: NullableStringFieldUpdateOperationsInput | string | null
    githubRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: CohortStudentUncheckedUpdateManyWithoutCohortNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutCohortNestedInput
  }

  export type TaskSubmissionUpsertWithWhereUniqueWithoutTaskInput = {
    where: TaskSubmissionWhereUniqueInput
    update: XOR<TaskSubmissionUpdateWithoutTaskInput, TaskSubmissionUncheckedUpdateWithoutTaskInput>
    create: XOR<TaskSubmissionCreateWithoutTaskInput, TaskSubmissionUncheckedCreateWithoutTaskInput>
  }

  export type TaskSubmissionUpdateWithWhereUniqueWithoutTaskInput = {
    where: TaskSubmissionWhereUniqueInput
    data: XOR<TaskSubmissionUpdateWithoutTaskInput, TaskSubmissionUncheckedUpdateWithoutTaskInput>
  }

  export type TaskSubmissionUpdateManyWithWhereWithoutTaskInput = {
    where: TaskSubmissionScalarWhereInput
    data: XOR<TaskSubmissionUpdateManyMutationInput, TaskSubmissionUncheckedUpdateManyWithoutTaskInput>
  }

  export type TaskCreateWithoutSubmissionsInput = {
    id?: string
    title: string
    description: string
    type: string
    dueDate?: Date | string | null
    maxPoints?: number
    difficulty: string
    skills?: TaskCreateskillsInput | string[]
    githubRequired?: boolean
    prRequired?: boolean
    requiresReview?: boolean
    assignedBy: string
    assignedByName: string
    assignedByEmail: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cohort: CohortCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    cohortId: string
    title: string
    description: string
    type: string
    dueDate?: Date | string | null
    maxPoints?: number
    difficulty: string
    skills?: TaskCreateskillsInput | string[]
    githubRequired?: boolean
    prRequired?: boolean
    requiresReview?: boolean
    assignedBy: string
    assignedByName: string
    assignedByEmail: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCreateOrConnectWithoutSubmissionsInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutSubmissionsInput, TaskUncheckedCreateWithoutSubmissionsInput>
  }

  export type CohortStudentCreateWithoutTasksSubmittedInput = {
    id?: string
    studentId: string
    studentEmail: string
    studentName: string
    avatarUrl?: string | null
    role?: string
    joinedAt?: Date | string
    status?: string
    cohort: CohortCreateNestedOneWithoutStudentsInput
    gamificationPoints?: GamificationPointCreateNestedManyWithoutStudentInput
    weeklyScores?: WeeklyScoreCreateNestedManyWithoutStudentInput
  }

  export type CohortStudentUncheckedCreateWithoutTasksSubmittedInput = {
    id?: string
    cohortId: string
    studentId: string
    studentEmail: string
    studentName: string
    avatarUrl?: string | null
    role?: string
    joinedAt?: Date | string
    status?: string
    gamificationPoints?: GamificationPointUncheckedCreateNestedManyWithoutStudentInput
    weeklyScores?: WeeklyScoreUncheckedCreateNestedManyWithoutStudentInput
  }

  export type CohortStudentCreateOrConnectWithoutTasksSubmittedInput = {
    where: CohortStudentWhereUniqueInput
    create: XOR<CohortStudentCreateWithoutTasksSubmittedInput, CohortStudentUncheckedCreateWithoutTasksSubmittedInput>
  }

  export type TaskUpsertWithoutSubmissionsInput = {
    update: XOR<TaskUpdateWithoutSubmissionsInput, TaskUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<TaskCreateWithoutSubmissionsInput, TaskUncheckedCreateWithoutSubmissionsInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutSubmissionsInput, TaskUncheckedUpdateWithoutSubmissionsInput>
  }

  export type TaskUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxPoints?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    skills?: TaskUpdateskillsInput | string[]
    githubRequired?: BoolFieldUpdateOperationsInput | boolean
    prRequired?: BoolFieldUpdateOperationsInput | boolean
    requiresReview?: BoolFieldUpdateOperationsInput | boolean
    assignedBy?: StringFieldUpdateOperationsInput | string
    assignedByName?: StringFieldUpdateOperationsInput | string
    assignedByEmail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cohort?: CohortUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cohortId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxPoints?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    skills?: TaskUpdateskillsInput | string[]
    githubRequired?: BoolFieldUpdateOperationsInput | boolean
    prRequired?: BoolFieldUpdateOperationsInput | boolean
    requiresReview?: BoolFieldUpdateOperationsInput | boolean
    assignedBy?: StringFieldUpdateOperationsInput | string
    assignedByName?: StringFieldUpdateOperationsInput | string
    assignedByEmail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CohortStudentUpsertWithoutTasksSubmittedInput = {
    update: XOR<CohortStudentUpdateWithoutTasksSubmittedInput, CohortStudentUncheckedUpdateWithoutTasksSubmittedInput>
    create: XOR<CohortStudentCreateWithoutTasksSubmittedInput, CohortStudentUncheckedCreateWithoutTasksSubmittedInput>
    where?: CohortStudentWhereInput
  }

  export type CohortStudentUpdateToOneWithWhereWithoutTasksSubmittedInput = {
    where?: CohortStudentWhereInput
    data: XOR<CohortStudentUpdateWithoutTasksSubmittedInput, CohortStudentUncheckedUpdateWithoutTasksSubmittedInput>
  }

  export type CohortStudentUpdateWithoutTasksSubmittedInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    studentEmail?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    cohort?: CohortUpdateOneRequiredWithoutStudentsNestedInput
    gamificationPoints?: GamificationPointUpdateManyWithoutStudentNestedInput
    weeklyScores?: WeeklyScoreUpdateManyWithoutStudentNestedInput
  }

  export type CohortStudentUncheckedUpdateWithoutTasksSubmittedInput = {
    id?: StringFieldUpdateOperationsInput | string
    cohortId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    studentEmail?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    gamificationPoints?: GamificationPointUncheckedUpdateManyWithoutStudentNestedInput
    weeklyScores?: WeeklyScoreUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type CohortCreateWithoutDocumentsInput = {
    id?: string
    name: string
    programId: string
    programType: string
    startDate: Date | string
    endDate: Date | string
    isActive?: boolean
    maxStudents?: number | null
    description?: string | null
    department: string
    level: string
    supervisorId?: string | null
    supervisorName?: string | null
    supervisorEmail?: string | null
    githubRepoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: CohortStudentCreateNestedManyWithoutCohortInput
    tasks?: TaskCreateNestedManyWithoutCohortInput
  }

  export type CohortUncheckedCreateWithoutDocumentsInput = {
    id?: string
    name: string
    programId: string
    programType: string
    startDate: Date | string
    endDate: Date | string
    isActive?: boolean
    maxStudents?: number | null
    description?: string | null
    department: string
    level: string
    supervisorId?: string | null
    supervisorName?: string | null
    supervisorEmail?: string | null
    githubRepoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: CohortStudentUncheckedCreateNestedManyWithoutCohortInput
    tasks?: TaskUncheckedCreateNestedManyWithoutCohortInput
  }

  export type CohortCreateOrConnectWithoutDocumentsInput = {
    where: CohortWhereUniqueInput
    create: XOR<CohortCreateWithoutDocumentsInput, CohortUncheckedCreateWithoutDocumentsInput>
  }

  export type CohortUpsertWithoutDocumentsInput = {
    update: XOR<CohortUpdateWithoutDocumentsInput, CohortUncheckedUpdateWithoutDocumentsInput>
    create: XOR<CohortCreateWithoutDocumentsInput, CohortUncheckedCreateWithoutDocumentsInput>
    where?: CohortWhereInput
  }

  export type CohortUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: CohortWhereInput
    data: XOR<CohortUpdateWithoutDocumentsInput, CohortUncheckedUpdateWithoutDocumentsInput>
  }

  export type CohortUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    programId?: StringFieldUpdateOperationsInput | string
    programType?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    maxStudents?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    department?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    supervisorId?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorName?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorEmail?: NullableStringFieldUpdateOperationsInput | string | null
    githubRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: CohortStudentUpdateManyWithoutCohortNestedInput
    tasks?: TaskUpdateManyWithoutCohortNestedInput
  }

  export type CohortUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    programId?: StringFieldUpdateOperationsInput | string
    programType?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    maxStudents?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    department?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    supervisorId?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorName?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorEmail?: NullableStringFieldUpdateOperationsInput | string | null
    githubRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: CohortStudentUncheckedUpdateManyWithoutCohortNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutCohortNestedInput
  }

  export type CohortStudentCreateWithoutGamificationPointsInput = {
    id?: string
    studentId: string
    studentEmail: string
    studentName: string
    avatarUrl?: string | null
    role?: string
    joinedAt?: Date | string
    status?: string
    cohort: CohortCreateNestedOneWithoutStudentsInput
    tasksSubmitted?: TaskSubmissionCreateNestedManyWithoutStudentInput
    weeklyScores?: WeeklyScoreCreateNestedManyWithoutStudentInput
  }

  export type CohortStudentUncheckedCreateWithoutGamificationPointsInput = {
    id?: string
    cohortId: string
    studentId: string
    studentEmail: string
    studentName: string
    avatarUrl?: string | null
    role?: string
    joinedAt?: Date | string
    status?: string
    tasksSubmitted?: TaskSubmissionUncheckedCreateNestedManyWithoutStudentInput
    weeklyScores?: WeeklyScoreUncheckedCreateNestedManyWithoutStudentInput
  }

  export type CohortStudentCreateOrConnectWithoutGamificationPointsInput = {
    where: CohortStudentWhereUniqueInput
    create: XOR<CohortStudentCreateWithoutGamificationPointsInput, CohortStudentUncheckedCreateWithoutGamificationPointsInput>
  }

  export type CohortStudentUpsertWithoutGamificationPointsInput = {
    update: XOR<CohortStudentUpdateWithoutGamificationPointsInput, CohortStudentUncheckedUpdateWithoutGamificationPointsInput>
    create: XOR<CohortStudentCreateWithoutGamificationPointsInput, CohortStudentUncheckedCreateWithoutGamificationPointsInput>
    where?: CohortStudentWhereInput
  }

  export type CohortStudentUpdateToOneWithWhereWithoutGamificationPointsInput = {
    where?: CohortStudentWhereInput
    data: XOR<CohortStudentUpdateWithoutGamificationPointsInput, CohortStudentUncheckedUpdateWithoutGamificationPointsInput>
  }

  export type CohortStudentUpdateWithoutGamificationPointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    studentEmail?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    cohort?: CohortUpdateOneRequiredWithoutStudentsNestedInput
    tasksSubmitted?: TaskSubmissionUpdateManyWithoutStudentNestedInput
    weeklyScores?: WeeklyScoreUpdateManyWithoutStudentNestedInput
  }

  export type CohortStudentUncheckedUpdateWithoutGamificationPointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cohortId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    studentEmail?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    tasksSubmitted?: TaskSubmissionUncheckedUpdateManyWithoutStudentNestedInput
    weeklyScores?: WeeklyScoreUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentAchievementCreateWithoutAchievementInput = {
    id?: string
    studentId: string
    earnedAt?: Date | string
  }

  export type StudentAchievementUncheckedCreateWithoutAchievementInput = {
    id?: string
    studentId: string
    earnedAt?: Date | string
  }

  export type StudentAchievementCreateOrConnectWithoutAchievementInput = {
    where: StudentAchievementWhereUniqueInput
    create: XOR<StudentAchievementCreateWithoutAchievementInput, StudentAchievementUncheckedCreateWithoutAchievementInput>
  }

  export type StudentAchievementCreateManyAchievementInputEnvelope = {
    data: StudentAchievementCreateManyAchievementInput | StudentAchievementCreateManyAchievementInput[]
    skipDuplicates?: boolean
  }

  export type StudentAchievementUpsertWithWhereUniqueWithoutAchievementInput = {
    where: StudentAchievementWhereUniqueInput
    update: XOR<StudentAchievementUpdateWithoutAchievementInput, StudentAchievementUncheckedUpdateWithoutAchievementInput>
    create: XOR<StudentAchievementCreateWithoutAchievementInput, StudentAchievementUncheckedCreateWithoutAchievementInput>
  }

  export type StudentAchievementUpdateWithWhereUniqueWithoutAchievementInput = {
    where: StudentAchievementWhereUniqueInput
    data: XOR<StudentAchievementUpdateWithoutAchievementInput, StudentAchievementUncheckedUpdateWithoutAchievementInput>
  }

  export type StudentAchievementUpdateManyWithWhereWithoutAchievementInput = {
    where: StudentAchievementScalarWhereInput
    data: XOR<StudentAchievementUpdateManyMutationInput, StudentAchievementUncheckedUpdateManyWithoutAchievementInput>
  }

  export type StudentAchievementScalarWhereInput = {
    AND?: StudentAchievementScalarWhereInput | StudentAchievementScalarWhereInput[]
    OR?: StudentAchievementScalarWhereInput[]
    NOT?: StudentAchievementScalarWhereInput | StudentAchievementScalarWhereInput[]
    id?: StringFilter<"StudentAchievement"> | string
    studentId?: StringFilter<"StudentAchievement"> | string
    achievementId?: StringFilter<"StudentAchievement"> | string
    earnedAt?: DateTimeFilter<"StudentAchievement"> | Date | string
  }

  export type AchievementCreateWithoutEarnedByInput = {
    id?: string
    name: string
    description: string
    icon: string
    category: string
    pointsRequired: number
    condition: string
    createdAt?: Date | string
  }

  export type AchievementUncheckedCreateWithoutEarnedByInput = {
    id?: string
    name: string
    description: string
    icon: string
    category: string
    pointsRequired: number
    condition: string
    createdAt?: Date | string
  }

  export type AchievementCreateOrConnectWithoutEarnedByInput = {
    where: AchievementWhereUniqueInput
    create: XOR<AchievementCreateWithoutEarnedByInput, AchievementUncheckedCreateWithoutEarnedByInput>
  }

  export type AchievementUpsertWithoutEarnedByInput = {
    update: XOR<AchievementUpdateWithoutEarnedByInput, AchievementUncheckedUpdateWithoutEarnedByInput>
    create: XOR<AchievementCreateWithoutEarnedByInput, AchievementUncheckedCreateWithoutEarnedByInput>
    where?: AchievementWhereInput
  }

  export type AchievementUpdateToOneWithWhereWithoutEarnedByInput = {
    where?: AchievementWhereInput
    data: XOR<AchievementUpdateWithoutEarnedByInput, AchievementUncheckedUpdateWithoutEarnedByInput>
  }

  export type AchievementUpdateWithoutEarnedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    pointsRequired?: IntFieldUpdateOperationsInput | number
    condition?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchievementUncheckedUpdateWithoutEarnedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    pointsRequired?: IntFieldUpdateOperationsInput | number
    condition?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CohortStudentCreateWithoutWeeklyScoresInput = {
    id?: string
    studentId: string
    studentEmail: string
    studentName: string
    avatarUrl?: string | null
    role?: string
    joinedAt?: Date | string
    status?: string
    cohort: CohortCreateNestedOneWithoutStudentsInput
    tasksSubmitted?: TaskSubmissionCreateNestedManyWithoutStudentInput
    gamificationPoints?: GamificationPointCreateNestedManyWithoutStudentInput
  }

  export type CohortStudentUncheckedCreateWithoutWeeklyScoresInput = {
    id?: string
    cohortId: string
    studentId: string
    studentEmail: string
    studentName: string
    avatarUrl?: string | null
    role?: string
    joinedAt?: Date | string
    status?: string
    tasksSubmitted?: TaskSubmissionUncheckedCreateNestedManyWithoutStudentInput
    gamificationPoints?: GamificationPointUncheckedCreateNestedManyWithoutStudentInput
  }

  export type CohortStudentCreateOrConnectWithoutWeeklyScoresInput = {
    where: CohortStudentWhereUniqueInput
    create: XOR<CohortStudentCreateWithoutWeeklyScoresInput, CohortStudentUncheckedCreateWithoutWeeklyScoresInput>
  }

  export type CohortStudentUpsertWithoutWeeklyScoresInput = {
    update: XOR<CohortStudentUpdateWithoutWeeklyScoresInput, CohortStudentUncheckedUpdateWithoutWeeklyScoresInput>
    create: XOR<CohortStudentCreateWithoutWeeklyScoresInput, CohortStudentUncheckedCreateWithoutWeeklyScoresInput>
    where?: CohortStudentWhereInput
  }

  export type CohortStudentUpdateToOneWithWhereWithoutWeeklyScoresInput = {
    where?: CohortStudentWhereInput
    data: XOR<CohortStudentUpdateWithoutWeeklyScoresInput, CohortStudentUncheckedUpdateWithoutWeeklyScoresInput>
  }

  export type CohortStudentUpdateWithoutWeeklyScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    studentEmail?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    cohort?: CohortUpdateOneRequiredWithoutStudentsNestedInput
    tasksSubmitted?: TaskSubmissionUpdateManyWithoutStudentNestedInput
    gamificationPoints?: GamificationPointUpdateManyWithoutStudentNestedInput
  }

  export type CohortStudentUncheckedUpdateWithoutWeeklyScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    cohortId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    studentEmail?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    tasksSubmitted?: TaskSubmissionUncheckedUpdateManyWithoutStudentNestedInput
    gamificationPoints?: GamificationPointUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type CohortStudentCreateManyCohortInput = {
    id?: string
    studentId: string
    studentEmail: string
    studentName: string
    avatarUrl?: string | null
    role?: string
    joinedAt?: Date | string
    status?: string
  }

  export type TaskCreateManyCohortInput = {
    id?: string
    title: string
    description: string
    type: string
    dueDate?: Date | string | null
    maxPoints?: number
    difficulty: string
    skills?: TaskCreateskillsInput | string[]
    githubRequired?: boolean
    prRequired?: boolean
    requiresReview?: boolean
    assignedBy: string
    assignedByName: string
    assignedByEmail: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentCreateManyCohortInput = {
    id?: string
    title: string
    description?: string | null
    fileUrl: string
    fileType: string
    fileSize: number
    category: string
    isIndexed?: boolean
    vectorStoreId?: string | null
    keywords?: DocumentCreatekeywordsInput | string[]
    uploadedBy: string
    uploadedByName: string
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CohortStudentUpdateWithoutCohortInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    studentEmail?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    tasksSubmitted?: TaskSubmissionUpdateManyWithoutStudentNestedInput
    gamificationPoints?: GamificationPointUpdateManyWithoutStudentNestedInput
    weeklyScores?: WeeklyScoreUpdateManyWithoutStudentNestedInput
  }

  export type CohortStudentUncheckedUpdateWithoutCohortInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    studentEmail?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    tasksSubmitted?: TaskSubmissionUncheckedUpdateManyWithoutStudentNestedInput
    gamificationPoints?: GamificationPointUncheckedUpdateManyWithoutStudentNestedInput
    weeklyScores?: WeeklyScoreUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type CohortStudentUncheckedUpdateManyWithoutCohortInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    studentEmail?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type TaskUpdateWithoutCohortInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxPoints?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    skills?: TaskUpdateskillsInput | string[]
    githubRequired?: BoolFieldUpdateOperationsInput | boolean
    prRequired?: BoolFieldUpdateOperationsInput | boolean
    requiresReview?: BoolFieldUpdateOperationsInput | boolean
    assignedBy?: StringFieldUpdateOperationsInput | string
    assignedByName?: StringFieldUpdateOperationsInput | string
    assignedByEmail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: TaskSubmissionUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutCohortInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxPoints?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    skills?: TaskUpdateskillsInput | string[]
    githubRequired?: BoolFieldUpdateOperationsInput | boolean
    prRequired?: BoolFieldUpdateOperationsInput | boolean
    requiresReview?: BoolFieldUpdateOperationsInput | boolean
    assignedBy?: StringFieldUpdateOperationsInput | string
    assignedByName?: StringFieldUpdateOperationsInput | string
    assignedByEmail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: TaskSubmissionUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutCohortInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxPoints?: IntFieldUpdateOperationsInput | number
    difficulty?: StringFieldUpdateOperationsInput | string
    skills?: TaskUpdateskillsInput | string[]
    githubRequired?: BoolFieldUpdateOperationsInput | boolean
    prRequired?: BoolFieldUpdateOperationsInput | boolean
    requiresReview?: BoolFieldUpdateOperationsInput | boolean
    assignedBy?: StringFieldUpdateOperationsInput | string
    assignedByName?: StringFieldUpdateOperationsInput | string
    assignedByEmail?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUpdateWithoutCohortInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    isIndexed?: BoolFieldUpdateOperationsInput | boolean
    vectorStoreId?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: DocumentUpdatekeywordsInput | string[]
    uploadedBy?: StringFieldUpdateOperationsInput | string
    uploadedByName?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateWithoutCohortInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    isIndexed?: BoolFieldUpdateOperationsInput | boolean
    vectorStoreId?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: DocumentUpdatekeywordsInput | string[]
    uploadedBy?: StringFieldUpdateOperationsInput | string
    uploadedByName?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyWithoutCohortInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    isIndexed?: BoolFieldUpdateOperationsInput | boolean
    vectorStoreId?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: DocumentUpdatekeywordsInput | string[]
    uploadedBy?: StringFieldUpdateOperationsInput | string
    uploadedByName?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskSubmissionCreateManyStudentInput = {
    id?: string
    taskId: string
    title: string
    description: string
    content: string
    githubRepoUrl?: string | null
    githubPrUrl?: string | null
    githubBranch?: string | null
    commitHash?: string | null
    attachments?: TaskSubmissionCreateattachmentsInput | string[]
    status?: string
    pointsEarned?: number | null
    feedback?: string | null
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    submittedAt?: Date | string
    updatedAt?: Date | string
  }

  export type GamificationPointCreateManyStudentInput = {
    id?: string
    pointType: string
    points: number
    reason: string
    relatedTaskId?: string | null
    awardedAt?: Date | string
  }

  export type WeeklyScoreCreateManyStudentInput = {
    id?: string
    cohortId: string
    weekNumber: number
    tasksCompleted?: number
    tasksOnTime?: number
    totalPoints?: number
    codeQuality?: number | null
    commitFrequency?: number
    prQuality?: number | null
    overallScore: number
    rank?: number | null
    aiAnalysis?: string | null
    strengths?: WeeklyScoreCreatestrengthsInput | string[]
    improvements?: WeeklyScoreCreateimprovementsInput | string[]
    emailSent?: boolean
    emailSentAt?: Date | string | null
    weekStartDate: Date | string
    weekEndDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskSubmissionUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    githubRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubPrUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubBranch?: NullableStringFieldUpdateOperationsInput | string | null
    commitHash?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: TaskSubmissionUpdateattachmentsInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    pointsEarned?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type TaskSubmissionUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    githubRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubPrUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubBranch?: NullableStringFieldUpdateOperationsInput | string | null
    commitHash?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: TaskSubmissionUpdateattachmentsInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    pointsEarned?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskSubmissionUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    githubRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubPrUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubBranch?: NullableStringFieldUpdateOperationsInput | string | null
    commitHash?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: TaskSubmissionUpdateattachmentsInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    pointsEarned?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GamificationPointUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointType?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    relatedTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    awardedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GamificationPointUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointType?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    relatedTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    awardedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GamificationPointUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointType?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    relatedTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    awardedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyScoreUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    cohortId?: StringFieldUpdateOperationsInput | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    tasksCompleted?: IntFieldUpdateOperationsInput | number
    tasksOnTime?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    codeQuality?: NullableFloatFieldUpdateOperationsInput | number | null
    commitFrequency?: IntFieldUpdateOperationsInput | number
    prQuality?: NullableFloatFieldUpdateOperationsInput | number | null
    overallScore?: FloatFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    aiAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    strengths?: WeeklyScoreUpdatestrengthsInput | string[]
    improvements?: WeeklyScoreUpdateimprovementsInput | string[]
    emailSent?: BoolFieldUpdateOperationsInput | boolean
    emailSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    weekStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyScoreUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    cohortId?: StringFieldUpdateOperationsInput | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    tasksCompleted?: IntFieldUpdateOperationsInput | number
    tasksOnTime?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    codeQuality?: NullableFloatFieldUpdateOperationsInput | number | null
    commitFrequency?: IntFieldUpdateOperationsInput | number
    prQuality?: NullableFloatFieldUpdateOperationsInput | number | null
    overallScore?: FloatFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    aiAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    strengths?: WeeklyScoreUpdatestrengthsInput | string[]
    improvements?: WeeklyScoreUpdateimprovementsInput | string[]
    emailSent?: BoolFieldUpdateOperationsInput | boolean
    emailSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    weekStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyScoreUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    cohortId?: StringFieldUpdateOperationsInput | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    tasksCompleted?: IntFieldUpdateOperationsInput | number
    tasksOnTime?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    codeQuality?: NullableFloatFieldUpdateOperationsInput | number | null
    commitFrequency?: IntFieldUpdateOperationsInput | number
    prQuality?: NullableFloatFieldUpdateOperationsInput | number | null
    overallScore?: FloatFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    aiAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    strengths?: WeeklyScoreUpdatestrengthsInput | string[]
    improvements?: WeeklyScoreUpdateimprovementsInput | string[]
    emailSent?: BoolFieldUpdateOperationsInput | boolean
    emailSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    weekStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskSubmissionCreateManyTaskInput = {
    id?: string
    studentId: string
    title: string
    description: string
    content: string
    githubRepoUrl?: string | null
    githubPrUrl?: string | null
    githubBranch?: string | null
    commitHash?: string | null
    attachments?: TaskSubmissionCreateattachmentsInput | string[]
    status?: string
    pointsEarned?: number | null
    feedback?: string | null
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    submittedAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskSubmissionUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    githubRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubPrUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubBranch?: NullableStringFieldUpdateOperationsInput | string | null
    commitHash?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: TaskSubmissionUpdateattachmentsInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    pointsEarned?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: CohortStudentUpdateOneRequiredWithoutTasksSubmittedNestedInput
  }

  export type TaskSubmissionUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    githubRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubPrUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubBranch?: NullableStringFieldUpdateOperationsInput | string | null
    commitHash?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: TaskSubmissionUpdateattachmentsInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    pointsEarned?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskSubmissionUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    githubRepoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubPrUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubBranch?: NullableStringFieldUpdateOperationsInput | string | null
    commitHash?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: TaskSubmissionUpdateattachmentsInput | string[]
    status?: StringFieldUpdateOperationsInput | string
    pointsEarned?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentAchievementCreateManyAchievementInput = {
    id?: string
    studentId: string
    earnedAt?: Date | string
  }

  export type StudentAchievementUpdateWithoutAchievementInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentAchievementUncheckedUpdateWithoutAchievementInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentAchievementUncheckedUpdateManyWithoutAchievementInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}