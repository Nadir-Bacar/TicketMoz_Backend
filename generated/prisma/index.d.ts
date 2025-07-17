
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model InviteScanner
 * 
 */
export type InviteScanner = $Result.DefaultSelection<Prisma.$InviteScannerPayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>
/**
 * Model TicketType
 * 
 */
export type TicketType = $Result.DefaultSelection<Prisma.$TicketTypePayload>
/**
 * Model SalesTickets
 * 
 */
export type SalesTickets = $Result.DefaultSelection<Prisma.$SalesTicketsPayload>
/**
 * Model UserEvent
 * 
 */
export type UserEvent = $Result.DefaultSelection<Prisma.$UserEventPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inviteScanner`: Exposes CRUD operations for the **InviteScanner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InviteScanners
    * const inviteScanners = await prisma.inviteScanner.findMany()
    * ```
    */
  get inviteScanner(): Prisma.InviteScannerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticketType`: Exposes CRUD operations for the **TicketType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketTypes
    * const ticketTypes = await prisma.ticketType.findMany()
    * ```
    */
  get ticketType(): Prisma.TicketTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.salesTickets`: Exposes CRUD operations for the **SalesTickets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SalesTickets
    * const salesTickets = await prisma.salesTickets.findMany()
    * ```
    */
  get salesTickets(): Prisma.SalesTicketsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userEvent`: Exposes CRUD operations for the **UserEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserEvents
    * const userEvents = await prisma.userEvent.findMany()
    * ```
    */
  get userEvent(): Prisma.UserEventDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
      (Without<T, U> & U) | (Without<U, T> & T)
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
    User: 'User',
    Company: 'Company',
    Event: 'Event',
    InviteScanner: 'InviteScanner',
    Ticket: 'Ticket',
    TicketType: 'TicketType',
    SalesTickets: 'SalesTickets',
    UserEvent: 'UserEvent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "company" | "event" | "inviteScanner" | "ticket" | "ticketType" | "salesTickets" | "userEvent"
      txIsolationLevel: never
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CompanyFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CompanyAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.EventFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.EventAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      InviteScanner: {
        payload: Prisma.$InviteScannerPayload<ExtArgs>
        fields: Prisma.InviteScannerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InviteScannerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteScannerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InviteScannerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteScannerPayload>
          }
          findFirst: {
            args: Prisma.InviteScannerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteScannerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InviteScannerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteScannerPayload>
          }
          findMany: {
            args: Prisma.InviteScannerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteScannerPayload>[]
          }
          create: {
            args: Prisma.InviteScannerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteScannerPayload>
          }
          createMany: {
            args: Prisma.InviteScannerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InviteScannerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteScannerPayload>
          }
          update: {
            args: Prisma.InviteScannerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteScannerPayload>
          }
          deleteMany: {
            args: Prisma.InviteScannerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InviteScannerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InviteScannerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteScannerPayload>
          }
          aggregate: {
            args: Prisma.InviteScannerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInviteScanner>
          }
          groupBy: {
            args: Prisma.InviteScannerGroupByArgs<ExtArgs>
            result: $Utils.Optional<InviteScannerGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.InviteScannerFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.InviteScannerAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.InviteScannerCountArgs<ExtArgs>
            result: $Utils.Optional<InviteScannerCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TicketFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TicketAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      TicketType: {
        payload: Prisma.$TicketTypePayload<ExtArgs>
        fields: Prisma.TicketTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>
          }
          findFirst: {
            args: Prisma.TicketTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>
          }
          findMany: {
            args: Prisma.TicketTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>[]
          }
          create: {
            args: Prisma.TicketTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>
          }
          createMany: {
            args: Prisma.TicketTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TicketTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>
          }
          update: {
            args: Prisma.TicketTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>
          }
          deleteMany: {
            args: Prisma.TicketTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TicketTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>
          }
          aggregate: {
            args: Prisma.TicketTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicketType>
          }
          groupBy: {
            args: Prisma.TicketTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketTypeGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TicketTypeFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TicketTypeAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TicketTypeCountArgs<ExtArgs>
            result: $Utils.Optional<TicketTypeCountAggregateOutputType> | number
          }
        }
      }
      SalesTickets: {
        payload: Prisma.$SalesTicketsPayload<ExtArgs>
        fields: Prisma.SalesTicketsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalesTicketsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesTicketsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalesTicketsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesTicketsPayload>
          }
          findFirst: {
            args: Prisma.SalesTicketsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesTicketsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalesTicketsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesTicketsPayload>
          }
          findMany: {
            args: Prisma.SalesTicketsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesTicketsPayload>[]
          }
          create: {
            args: Prisma.SalesTicketsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesTicketsPayload>
          }
          createMany: {
            args: Prisma.SalesTicketsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SalesTicketsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesTicketsPayload>
          }
          update: {
            args: Prisma.SalesTicketsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesTicketsPayload>
          }
          deleteMany: {
            args: Prisma.SalesTicketsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalesTicketsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SalesTicketsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesTicketsPayload>
          }
          aggregate: {
            args: Prisma.SalesTicketsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalesTickets>
          }
          groupBy: {
            args: Prisma.SalesTicketsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalesTicketsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SalesTicketsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SalesTicketsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SalesTicketsCountArgs<ExtArgs>
            result: $Utils.Optional<SalesTicketsCountAggregateOutputType> | number
          }
        }
      }
      UserEvent: {
        payload: Prisma.$UserEventPayload<ExtArgs>
        fields: Prisma.UserEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEventPayload>
          }
          findFirst: {
            args: Prisma.UserEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEventPayload>
          }
          findMany: {
            args: Prisma.UserEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEventPayload>[]
          }
          create: {
            args: Prisma.UserEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEventPayload>
          }
          createMany: {
            args: Prisma.UserEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEventPayload>
          }
          update: {
            args: Prisma.UserEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEventPayload>
          }
          deleteMany: {
            args: Prisma.UserEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEventPayload>
          }
          aggregate: {
            args: Prisma.UserEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserEvent>
          }
          groupBy: {
            args: Prisma.UserEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserEventGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserEventFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserEventAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserEventCountArgs<ExtArgs>
            result: $Utils.Optional<UserEventCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    }
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    company?: CompanyOmit
    event?: EventOmit
    inviteScanner?: InviteScannerOmit
    ticket?: TicketOmit
    ticketType?: TicketTypeOmit
    salesTickets?: SalesTicketsOmit
    userEvent?: UserEventOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    SalesTickets: number
    UserEvent: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SalesTickets?: boolean | UserCountOutputTypeCountSalesTicketsArgs
    UserEvent?: boolean | UserCountOutputTypeCountUserEventArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSalesTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesTicketsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserEventWhereInput
  }


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    events: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | CompanyCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    userEvent: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userEvent?: boolean | EventCountOutputTypeCountUserEventArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountUserEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserEventWhereInput
  }


  /**
   * Count Type TicketCountOutputType
   */

  export type TicketCountOutputType = {
    ticketType: number
  }

  export type TicketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticketType?: boolean | TicketCountOutputTypeCountTicketTypeArgs
  }

  // Custom InputTypes
  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCountOutputType
     */
    select?: TicketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountTicketTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketTypeWhereInput
  }


  /**
   * Count Type TicketTypeCountOutputType
   */

  export type TicketTypeCountOutputType = {
    SalesTickets: number
  }

  export type TicketTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SalesTickets?: boolean | TicketTypeCountOutputTypeCountSalesTicketsArgs
  }

  // Custom InputTypes
  /**
   * TicketTypeCountOutputType without action
   */
  export type TicketTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketTypeCountOutputType
     */
    select?: TicketTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketTypeCountOutputType without action
   */
  export type TicketTypeCountOutputTypeCountSalesTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesTicketsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    user_type: string | null
    token: string | null
    isVerify: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    user_type: string | null
    token: string | null
    isVerify: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    user_type: number
    token: number
    isVerify: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    user_type?: true
    token?: true
    isVerify?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    user_type?: true
    token?: true
    isVerify?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    user_type?: true
    token?: true
    isVerify?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    user_type: string
    token: string | null
    isVerify: boolean | null
    createdAt: Date
    updatedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    user_type?: boolean
    token?: boolean
    isVerify?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | User$companyArgs<ExtArgs>
    SalesTickets?: boolean | User$SalesTicketsArgs<ExtArgs>
    UserEvent?: boolean | User$UserEventArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    user_type?: boolean
    token?: boolean
    isVerify?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "user_type" | "token" | "isVerify" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | User$companyArgs<ExtArgs>
    SalesTickets?: boolean | User$SalesTicketsArgs<ExtArgs>
    UserEvent?: boolean | User$UserEventArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs> | null
      SalesTickets: Prisma.$SalesTicketsPayload<ExtArgs>[]
      UserEvent: Prisma.$UserEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      user_type: string
      token: string | null
      isVerify: boolean | null
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends User$companyArgs<ExtArgs> = {}>(args?: Subset<T, User$companyArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    SalesTickets<T extends User$SalesTicketsArgs<ExtArgs> = {}>(args?: Subset<T, User$SalesTicketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesTicketsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    UserEvent<T extends User$UserEventArgs<ExtArgs> = {}>(args?: Subset<T, User$UserEventArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly user_type: FieldRef<"User", 'String'>
    readonly token: FieldRef<"User", 'String'>
    readonly isVerify: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.company
   */
  export type User$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
  }

  /**
   * User.SalesTickets
   */
  export type User$SalesTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesTickets
     */
    select?: SalesTicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesTickets
     */
    omit?: SalesTicketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesTicketsInclude<ExtArgs> | null
    where?: SalesTicketsWhereInput
    orderBy?: SalesTicketsOrderByWithRelationInput | SalesTicketsOrderByWithRelationInput[]
    cursor?: SalesTicketsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalesTicketsScalarFieldEnum | SalesTicketsScalarFieldEnum[]
  }

  /**
   * User.UserEvent
   */
  export type User$UserEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEvent
     */
    select?: UserEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEvent
     */
    omit?: UserEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEventInclude<ExtArgs> | null
    where?: UserEventWhereInput
    orderBy?: UserEventOrderByWithRelationInput | UserEventOrderByWithRelationInput[]
    cursor?: UserEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserEventScalarFieldEnum | UserEventScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone_number: string | null
    nuit_url: string | null
    isVerify: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone_number: string | null
    nuit_url: string | null
    isVerify: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone_number: number
    nuit_url: number
    isVerify: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone_number?: true
    nuit_url?: true
    isVerify?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone_number?: true
    nuit_url?: true
    isVerify?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone_number?: true
    nuit_url?: true
    isVerify?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: string
    name: string
    email: string
    phone_number: string
    nuit_url: string | null
    isVerify: boolean | null
    userId: string
    createdAt: Date
    updatedAt: Date | null
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone_number?: boolean
    nuit_url?: boolean
    isVerify?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    events?: boolean | Company$eventsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>



  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone_number?: boolean
    nuit_url?: boolean
    isVerify?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone_number" | "nuit_url" | "isVerify" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | Company$eventsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      events: Prisma.$EventPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone_number: string
      nuit_url: string | null
      isVerify: boolean | null
      userId: string
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * @param {CompanyFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const company = await prisma.company.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CompanyFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Company.
     * @param {CompanyAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const company = await prisma.company.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CompanyAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
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
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends Company$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Company$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'String'>
    readonly name: FieldRef<"Company", 'String'>
    readonly email: FieldRef<"Company", 'String'>
    readonly phone_number: FieldRef<"Company", 'String'>
    readonly nuit_url: FieldRef<"Company", 'String'>
    readonly isVerify: FieldRef<"Company", 'Boolean'>
    readonly userId: FieldRef<"Company", 'String'>
    readonly createdAt: FieldRef<"Company", 'DateTime'>
    readonly updatedAt: FieldRef<"Company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company findRaw
   */
  export type CompanyFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Company aggregateRaw
   */
  export type CompanyAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Company.events
   */
  export type Company$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    category: string | null
    location: string | null
    image: string | null
    event_date: string | null
    start_time: string | null
    end_time: string | null
    status: string | null
    ticketId: string | null
    companyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    category: string | null
    location: string | null
    image: string | null
    event_date: string | null
    start_time: string | null
    end_time: string | null
    status: string | null
    ticketId: string | null
    companyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    title: number
    description: number
    category: number
    location: number
    image: number
    event_date: number
    start_time: number
    end_time: number
    status: number
    ticketId: number
    companyId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    location?: true
    image?: true
    event_date?: true
    start_time?: true
    end_time?: true
    status?: true
    ticketId?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    location?: true
    image?: true
    event_date?: true
    start_time?: true
    end_time?: true
    status?: true
    ticketId?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    location?: true
    image?: true
    event_date?: true
    start_time?: true
    end_time?: true
    status?: true
    ticketId?: true
    companyId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    title: string
    description: string
    category: string
    location: string
    image: string
    event_date: string
    start_time: string
    end_time: string
    status: string
    ticketId: string
    companyId: string
    createdAt: Date
    updatedAt: Date | null
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    location?: boolean
    image?: boolean
    event_date?: boolean
    start_time?: boolean
    end_time?: boolean
    status?: boolean
    ticketId?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userEvent?: boolean | Event$userEventArgs<ExtArgs>
    inviteScanner?: boolean | Event$inviteScannerArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>



  export type EventSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    location?: boolean
    image?: boolean
    event_date?: boolean
    start_time?: boolean
    end_time?: boolean
    status?: boolean
    ticketId?: boolean
    companyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "category" | "location" | "image" | "event_date" | "start_time" | "end_time" | "status" | "ticketId" | "companyId" | "createdAt" | "updatedAt", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userEvent?: boolean | Event$userEventArgs<ExtArgs>
    inviteScanner?: boolean | Event$inviteScannerArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      userEvent: Prisma.$UserEventPayload<ExtArgs>[]
      inviteScanner: Prisma.$InviteScannerPayload<ExtArgs> | null
      ticket: Prisma.$TicketPayload<ExtArgs>
      company: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      category: string
      location: string
      image: string
      event_date: string
      start_time: string
      end_time: string
      status: string
      ticketId: string
      companyId: string
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * @param {EventFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const event = await prisma.event.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: EventFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Event.
     * @param {EventAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const event = await prisma.event.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: EventAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userEvent<T extends Event$userEventArgs<ExtArgs> = {}>(args?: Subset<T, Event$userEventArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inviteScanner<T extends Event$inviteScannerArgs<ExtArgs> = {}>(args?: Subset<T, Event$inviteScannerArgs<ExtArgs>>): Prisma__InviteScannerClient<$Result.GetResult<Prisma.$InviteScannerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly title: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly category: FieldRef<"Event", 'String'>
    readonly location: FieldRef<"Event", 'String'>
    readonly image: FieldRef<"Event", 'String'>
    readonly event_date: FieldRef<"Event", 'String'>
    readonly start_time: FieldRef<"Event", 'String'>
    readonly end_time: FieldRef<"Event", 'String'>
    readonly status: FieldRef<"Event", 'String'>
    readonly ticketId: FieldRef<"Event", 'String'>
    readonly companyId: FieldRef<"Event", 'String'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event findRaw
   */
  export type EventFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Event aggregateRaw
   */
  export type EventAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Event.userEvent
   */
  export type Event$userEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEvent
     */
    select?: UserEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEvent
     */
    omit?: UserEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEventInclude<ExtArgs> | null
    where?: UserEventWhereInput
    orderBy?: UserEventOrderByWithRelationInput | UserEventOrderByWithRelationInput[]
    cursor?: UserEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserEventScalarFieldEnum | UserEventScalarFieldEnum[]
  }

  /**
   * Event.inviteScanner
   */
  export type Event$inviteScannerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteScanner
     */
    select?: InviteScannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InviteScanner
     */
    omit?: InviteScannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteScannerInclude<ExtArgs> | null
    where?: InviteScannerWhereInput
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model InviteScanner
   */

  export type AggregateInviteScanner = {
    _count: InviteScannerCountAggregateOutputType | null
    _avg: InviteScannerAvgAggregateOutputType | null
    _sum: InviteScannerSumAggregateOutputType | null
    _min: InviteScannerMinAggregateOutputType | null
    _max: InviteScannerMaxAggregateOutputType | null
  }

  export type InviteScannerAvgAggregateOutputType = {
    total_scanner: number | null
    acceptedCount: number | null
  }

  export type InviteScannerSumAggregateOutputType = {
    total_scanner: number | null
    acceptedCount: number | null
  }

  export type InviteScannerMinAggregateOutputType = {
    id: string | null
    token: string | null
    total_scanner: number | null
    eventID: string | null
    expiresAt: Date | null
    acceptedCount: number | null
    createdAt: Date | null
  }

  export type InviteScannerMaxAggregateOutputType = {
    id: string | null
    token: string | null
    total_scanner: number | null
    eventID: string | null
    expiresAt: Date | null
    acceptedCount: number | null
    createdAt: Date | null
  }

  export type InviteScannerCountAggregateOutputType = {
    id: number
    token: number
    total_scanner: number
    eventID: number
    expiresAt: number
    acceptedCount: number
    createdAt: number
    _all: number
  }


  export type InviteScannerAvgAggregateInputType = {
    total_scanner?: true
    acceptedCount?: true
  }

  export type InviteScannerSumAggregateInputType = {
    total_scanner?: true
    acceptedCount?: true
  }

  export type InviteScannerMinAggregateInputType = {
    id?: true
    token?: true
    total_scanner?: true
    eventID?: true
    expiresAt?: true
    acceptedCount?: true
    createdAt?: true
  }

  export type InviteScannerMaxAggregateInputType = {
    id?: true
    token?: true
    total_scanner?: true
    eventID?: true
    expiresAt?: true
    acceptedCount?: true
    createdAt?: true
  }

  export type InviteScannerCountAggregateInputType = {
    id?: true
    token?: true
    total_scanner?: true
    eventID?: true
    expiresAt?: true
    acceptedCount?: true
    createdAt?: true
    _all?: true
  }

  export type InviteScannerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InviteScanner to aggregate.
     */
    where?: InviteScannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InviteScanners to fetch.
     */
    orderBy?: InviteScannerOrderByWithRelationInput | InviteScannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InviteScannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InviteScanners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InviteScanners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InviteScanners
    **/
    _count?: true | InviteScannerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InviteScannerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InviteScannerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InviteScannerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InviteScannerMaxAggregateInputType
  }

  export type GetInviteScannerAggregateType<T extends InviteScannerAggregateArgs> = {
        [P in keyof T & keyof AggregateInviteScanner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInviteScanner[P]>
      : GetScalarType<T[P], AggregateInviteScanner[P]>
  }




  export type InviteScannerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InviteScannerWhereInput
    orderBy?: InviteScannerOrderByWithAggregationInput | InviteScannerOrderByWithAggregationInput[]
    by: InviteScannerScalarFieldEnum[] | InviteScannerScalarFieldEnum
    having?: InviteScannerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InviteScannerCountAggregateInputType | true
    _avg?: InviteScannerAvgAggregateInputType
    _sum?: InviteScannerSumAggregateInputType
    _min?: InviteScannerMinAggregateInputType
    _max?: InviteScannerMaxAggregateInputType
  }

  export type InviteScannerGroupByOutputType = {
    id: string
    token: string
    total_scanner: number
    eventID: string
    expiresAt: Date
    acceptedCount: number
    createdAt: Date
    _count: InviteScannerCountAggregateOutputType | null
    _avg: InviteScannerAvgAggregateOutputType | null
    _sum: InviteScannerSumAggregateOutputType | null
    _min: InviteScannerMinAggregateOutputType | null
    _max: InviteScannerMaxAggregateOutputType | null
  }

  type GetInviteScannerGroupByPayload<T extends InviteScannerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InviteScannerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InviteScannerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InviteScannerGroupByOutputType[P]>
            : GetScalarType<T[P], InviteScannerGroupByOutputType[P]>
        }
      >
    >


  export type InviteScannerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    total_scanner?: boolean
    eventID?: boolean
    expiresAt?: boolean
    acceptedCount?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inviteScanner"]>



  export type InviteScannerSelectScalar = {
    id?: boolean
    token?: boolean
    total_scanner?: boolean
    eventID?: boolean
    expiresAt?: boolean
    acceptedCount?: boolean
    createdAt?: boolean
  }

  export type InviteScannerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "total_scanner" | "eventID" | "expiresAt" | "acceptedCount" | "createdAt", ExtArgs["result"]["inviteScanner"]>
  export type InviteScannerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $InviteScannerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InviteScanner"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      total_scanner: number
      eventID: string
      expiresAt: Date
      acceptedCount: number
      createdAt: Date
    }, ExtArgs["result"]["inviteScanner"]>
    composites: {}
  }

  type InviteScannerGetPayload<S extends boolean | null | undefined | InviteScannerDefaultArgs> = $Result.GetResult<Prisma.$InviteScannerPayload, S>

  type InviteScannerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InviteScannerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InviteScannerCountAggregateInputType | true
    }

  export interface InviteScannerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InviteScanner'], meta: { name: 'InviteScanner' } }
    /**
     * Find zero or one InviteScanner that matches the filter.
     * @param {InviteScannerFindUniqueArgs} args - Arguments to find a InviteScanner
     * @example
     * // Get one InviteScanner
     * const inviteScanner = await prisma.inviteScanner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InviteScannerFindUniqueArgs>(args: SelectSubset<T, InviteScannerFindUniqueArgs<ExtArgs>>): Prisma__InviteScannerClient<$Result.GetResult<Prisma.$InviteScannerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InviteScanner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InviteScannerFindUniqueOrThrowArgs} args - Arguments to find a InviteScanner
     * @example
     * // Get one InviteScanner
     * const inviteScanner = await prisma.inviteScanner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InviteScannerFindUniqueOrThrowArgs>(args: SelectSubset<T, InviteScannerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InviteScannerClient<$Result.GetResult<Prisma.$InviteScannerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InviteScanner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteScannerFindFirstArgs} args - Arguments to find a InviteScanner
     * @example
     * // Get one InviteScanner
     * const inviteScanner = await prisma.inviteScanner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InviteScannerFindFirstArgs>(args?: SelectSubset<T, InviteScannerFindFirstArgs<ExtArgs>>): Prisma__InviteScannerClient<$Result.GetResult<Prisma.$InviteScannerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InviteScanner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteScannerFindFirstOrThrowArgs} args - Arguments to find a InviteScanner
     * @example
     * // Get one InviteScanner
     * const inviteScanner = await prisma.inviteScanner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InviteScannerFindFirstOrThrowArgs>(args?: SelectSubset<T, InviteScannerFindFirstOrThrowArgs<ExtArgs>>): Prisma__InviteScannerClient<$Result.GetResult<Prisma.$InviteScannerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InviteScanners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteScannerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InviteScanners
     * const inviteScanners = await prisma.inviteScanner.findMany()
     * 
     * // Get first 10 InviteScanners
     * const inviteScanners = await prisma.inviteScanner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inviteScannerWithIdOnly = await prisma.inviteScanner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InviteScannerFindManyArgs>(args?: SelectSubset<T, InviteScannerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InviteScannerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InviteScanner.
     * @param {InviteScannerCreateArgs} args - Arguments to create a InviteScanner.
     * @example
     * // Create one InviteScanner
     * const InviteScanner = await prisma.inviteScanner.create({
     *   data: {
     *     // ... data to create a InviteScanner
     *   }
     * })
     * 
     */
    create<T extends InviteScannerCreateArgs>(args: SelectSubset<T, InviteScannerCreateArgs<ExtArgs>>): Prisma__InviteScannerClient<$Result.GetResult<Prisma.$InviteScannerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InviteScanners.
     * @param {InviteScannerCreateManyArgs} args - Arguments to create many InviteScanners.
     * @example
     * // Create many InviteScanners
     * const inviteScanner = await prisma.inviteScanner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InviteScannerCreateManyArgs>(args?: SelectSubset<T, InviteScannerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InviteScanner.
     * @param {InviteScannerDeleteArgs} args - Arguments to delete one InviteScanner.
     * @example
     * // Delete one InviteScanner
     * const InviteScanner = await prisma.inviteScanner.delete({
     *   where: {
     *     // ... filter to delete one InviteScanner
     *   }
     * })
     * 
     */
    delete<T extends InviteScannerDeleteArgs>(args: SelectSubset<T, InviteScannerDeleteArgs<ExtArgs>>): Prisma__InviteScannerClient<$Result.GetResult<Prisma.$InviteScannerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InviteScanner.
     * @param {InviteScannerUpdateArgs} args - Arguments to update one InviteScanner.
     * @example
     * // Update one InviteScanner
     * const inviteScanner = await prisma.inviteScanner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InviteScannerUpdateArgs>(args: SelectSubset<T, InviteScannerUpdateArgs<ExtArgs>>): Prisma__InviteScannerClient<$Result.GetResult<Prisma.$InviteScannerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InviteScanners.
     * @param {InviteScannerDeleteManyArgs} args - Arguments to filter InviteScanners to delete.
     * @example
     * // Delete a few InviteScanners
     * const { count } = await prisma.inviteScanner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InviteScannerDeleteManyArgs>(args?: SelectSubset<T, InviteScannerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InviteScanners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteScannerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InviteScanners
     * const inviteScanner = await prisma.inviteScanner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InviteScannerUpdateManyArgs>(args: SelectSubset<T, InviteScannerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InviteScanner.
     * @param {InviteScannerUpsertArgs} args - Arguments to update or create a InviteScanner.
     * @example
     * // Update or create a InviteScanner
     * const inviteScanner = await prisma.inviteScanner.upsert({
     *   create: {
     *     // ... data to create a InviteScanner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InviteScanner we want to update
     *   }
     * })
     */
    upsert<T extends InviteScannerUpsertArgs>(args: SelectSubset<T, InviteScannerUpsertArgs<ExtArgs>>): Prisma__InviteScannerClient<$Result.GetResult<Prisma.$InviteScannerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InviteScanners that matches the filter.
     * @param {InviteScannerFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const inviteScanner = await prisma.inviteScanner.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: InviteScannerFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a InviteScanner.
     * @param {InviteScannerAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const inviteScanner = await prisma.inviteScanner.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: InviteScannerAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of InviteScanners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteScannerCountArgs} args - Arguments to filter InviteScanners to count.
     * @example
     * // Count the number of InviteScanners
     * const count = await prisma.inviteScanner.count({
     *   where: {
     *     // ... the filter for the InviteScanners we want to count
     *   }
     * })
    **/
    count<T extends InviteScannerCountArgs>(
      args?: Subset<T, InviteScannerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InviteScannerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InviteScanner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteScannerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InviteScannerAggregateArgs>(args: Subset<T, InviteScannerAggregateArgs>): Prisma.PrismaPromise<GetInviteScannerAggregateType<T>>

    /**
     * Group by InviteScanner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteScannerGroupByArgs} args - Group by arguments.
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
      T extends InviteScannerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InviteScannerGroupByArgs['orderBy'] }
        : { orderBy?: InviteScannerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InviteScannerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInviteScannerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InviteScanner model
   */
  readonly fields: InviteScannerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InviteScanner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InviteScannerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the InviteScanner model
   */
  interface InviteScannerFieldRefs {
    readonly id: FieldRef<"InviteScanner", 'String'>
    readonly token: FieldRef<"InviteScanner", 'String'>
    readonly total_scanner: FieldRef<"InviteScanner", 'Int'>
    readonly eventID: FieldRef<"InviteScanner", 'String'>
    readonly expiresAt: FieldRef<"InviteScanner", 'DateTime'>
    readonly acceptedCount: FieldRef<"InviteScanner", 'Int'>
    readonly createdAt: FieldRef<"InviteScanner", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InviteScanner findUnique
   */
  export type InviteScannerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteScanner
     */
    select?: InviteScannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InviteScanner
     */
    omit?: InviteScannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteScannerInclude<ExtArgs> | null
    /**
     * Filter, which InviteScanner to fetch.
     */
    where: InviteScannerWhereUniqueInput
  }

  /**
   * InviteScanner findUniqueOrThrow
   */
  export type InviteScannerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteScanner
     */
    select?: InviteScannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InviteScanner
     */
    omit?: InviteScannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteScannerInclude<ExtArgs> | null
    /**
     * Filter, which InviteScanner to fetch.
     */
    where: InviteScannerWhereUniqueInput
  }

  /**
   * InviteScanner findFirst
   */
  export type InviteScannerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteScanner
     */
    select?: InviteScannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InviteScanner
     */
    omit?: InviteScannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteScannerInclude<ExtArgs> | null
    /**
     * Filter, which InviteScanner to fetch.
     */
    where?: InviteScannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InviteScanners to fetch.
     */
    orderBy?: InviteScannerOrderByWithRelationInput | InviteScannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InviteScanners.
     */
    cursor?: InviteScannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InviteScanners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InviteScanners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InviteScanners.
     */
    distinct?: InviteScannerScalarFieldEnum | InviteScannerScalarFieldEnum[]
  }

  /**
   * InviteScanner findFirstOrThrow
   */
  export type InviteScannerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteScanner
     */
    select?: InviteScannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InviteScanner
     */
    omit?: InviteScannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteScannerInclude<ExtArgs> | null
    /**
     * Filter, which InviteScanner to fetch.
     */
    where?: InviteScannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InviteScanners to fetch.
     */
    orderBy?: InviteScannerOrderByWithRelationInput | InviteScannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InviteScanners.
     */
    cursor?: InviteScannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InviteScanners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InviteScanners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InviteScanners.
     */
    distinct?: InviteScannerScalarFieldEnum | InviteScannerScalarFieldEnum[]
  }

  /**
   * InviteScanner findMany
   */
  export type InviteScannerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteScanner
     */
    select?: InviteScannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InviteScanner
     */
    omit?: InviteScannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteScannerInclude<ExtArgs> | null
    /**
     * Filter, which InviteScanners to fetch.
     */
    where?: InviteScannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InviteScanners to fetch.
     */
    orderBy?: InviteScannerOrderByWithRelationInput | InviteScannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InviteScanners.
     */
    cursor?: InviteScannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InviteScanners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InviteScanners.
     */
    skip?: number
    distinct?: InviteScannerScalarFieldEnum | InviteScannerScalarFieldEnum[]
  }

  /**
   * InviteScanner create
   */
  export type InviteScannerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteScanner
     */
    select?: InviteScannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InviteScanner
     */
    omit?: InviteScannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteScannerInclude<ExtArgs> | null
    /**
     * The data needed to create a InviteScanner.
     */
    data: XOR<InviteScannerCreateInput, InviteScannerUncheckedCreateInput>
  }

  /**
   * InviteScanner createMany
   */
  export type InviteScannerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InviteScanners.
     */
    data: InviteScannerCreateManyInput | InviteScannerCreateManyInput[]
  }

  /**
   * InviteScanner update
   */
  export type InviteScannerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteScanner
     */
    select?: InviteScannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InviteScanner
     */
    omit?: InviteScannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteScannerInclude<ExtArgs> | null
    /**
     * The data needed to update a InviteScanner.
     */
    data: XOR<InviteScannerUpdateInput, InviteScannerUncheckedUpdateInput>
    /**
     * Choose, which InviteScanner to update.
     */
    where: InviteScannerWhereUniqueInput
  }

  /**
   * InviteScanner updateMany
   */
  export type InviteScannerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InviteScanners.
     */
    data: XOR<InviteScannerUpdateManyMutationInput, InviteScannerUncheckedUpdateManyInput>
    /**
     * Filter which InviteScanners to update
     */
    where?: InviteScannerWhereInput
    /**
     * Limit how many InviteScanners to update.
     */
    limit?: number
  }

  /**
   * InviteScanner upsert
   */
  export type InviteScannerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteScanner
     */
    select?: InviteScannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InviteScanner
     */
    omit?: InviteScannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteScannerInclude<ExtArgs> | null
    /**
     * The filter to search for the InviteScanner to update in case it exists.
     */
    where: InviteScannerWhereUniqueInput
    /**
     * In case the InviteScanner found by the `where` argument doesn't exist, create a new InviteScanner with this data.
     */
    create: XOR<InviteScannerCreateInput, InviteScannerUncheckedCreateInput>
    /**
     * In case the InviteScanner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InviteScannerUpdateInput, InviteScannerUncheckedUpdateInput>
  }

  /**
   * InviteScanner delete
   */
  export type InviteScannerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteScanner
     */
    select?: InviteScannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InviteScanner
     */
    omit?: InviteScannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteScannerInclude<ExtArgs> | null
    /**
     * Filter which InviteScanner to delete.
     */
    where: InviteScannerWhereUniqueInput
  }

  /**
   * InviteScanner deleteMany
   */
  export type InviteScannerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InviteScanners to delete
     */
    where?: InviteScannerWhereInput
    /**
     * Limit how many InviteScanners to delete.
     */
    limit?: number
  }

  /**
   * InviteScanner findRaw
   */
  export type InviteScannerFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * InviteScanner aggregateRaw
   */
  export type InviteScannerAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * InviteScanner without action
   */
  export type InviteScannerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteScanner
     */
    select?: InviteScannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InviteScanner
     */
    omit?: InviteScannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteScannerInclude<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TicketMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date | null
    _count: TicketCountAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ticketType?: boolean | Ticket$ticketTypeArgs<ExtArgs>
    event?: boolean | Ticket$eventArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>



  export type TicketSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt", ExtArgs["result"]["ticket"]>
  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticketType?: boolean | Ticket$ticketTypeArgs<ExtArgs>
    event?: boolean | Ticket$eventArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      ticketType: Prisma.$TicketTypePayload<ExtArgs>[]
      event: Prisma.$EventPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * @param {TicketFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const ticket = await prisma.ticket.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: TicketFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Ticket.
     * @param {TicketAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const ticket = await prisma.ticket.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TicketAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
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
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticketType<T extends Ticket$ticketTypeArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$ticketTypeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    event<T extends Ticket$eventArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$eventArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Ticket model
   */
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'String'>
    readonly createdAt: FieldRef<"Ticket", 'DateTime'>
    readonly updatedAt: FieldRef<"Ticket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data?: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to delete.
     */
    limit?: number
  }

  /**
   * Ticket findRaw
   */
  export type TicketFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Ticket aggregateRaw
   */
  export type TicketAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Ticket.ticketType
   */
  export type Ticket$ticketTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    where?: TicketTypeWhereInput
    orderBy?: TicketTypeOrderByWithRelationInput | TicketTypeOrderByWithRelationInput[]
    cursor?: TicketTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketTypeScalarFieldEnum | TicketTypeScalarFieldEnum[]
  }

  /**
   * Ticket.event
   */
  export type Ticket$eventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
  }


  /**
   * Model TicketType
   */

  export type AggregateTicketType = {
    _count: TicketTypeCountAggregateOutputType | null
    _avg: TicketTypeAvgAggregateOutputType | null
    _sum: TicketTypeSumAggregateOutputType | null
    _min: TicketTypeMinAggregateOutputType | null
    _max: TicketTypeMaxAggregateOutputType | null
  }

  export type TicketTypeAvgAggregateOutputType = {
    quantity: number | null
    price: number | null
  }

  export type TicketTypeSumAggregateOutputType = {
    quantity: number | null
    price: number | null
  }

  export type TicketTypeMinAggregateOutputType = {
    id: string | null
    name: string | null
    quantity: number | null
    price: number | null
    ticketId: string | null
  }

  export type TicketTypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    quantity: number | null
    price: number | null
    ticketId: string | null
  }

  export type TicketTypeCountAggregateOutputType = {
    id: number
    name: number
    quantity: number
    price: number
    ticketId: number
    _all: number
  }


  export type TicketTypeAvgAggregateInputType = {
    quantity?: true
    price?: true
  }

  export type TicketTypeSumAggregateInputType = {
    quantity?: true
    price?: true
  }

  export type TicketTypeMinAggregateInputType = {
    id?: true
    name?: true
    quantity?: true
    price?: true
    ticketId?: true
  }

  export type TicketTypeMaxAggregateInputType = {
    id?: true
    name?: true
    quantity?: true
    price?: true
    ticketId?: true
  }

  export type TicketTypeCountAggregateInputType = {
    id?: true
    name?: true
    quantity?: true
    price?: true
    ticketId?: true
    _all?: true
  }

  export type TicketTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketType to aggregate.
     */
    where?: TicketTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketTypes to fetch.
     */
    orderBy?: TicketTypeOrderByWithRelationInput | TicketTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketTypes
    **/
    _count?: true | TicketTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketTypeMaxAggregateInputType
  }

  export type GetTicketTypeAggregateType<T extends TicketTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketType[P]>
      : GetScalarType<T[P], AggregateTicketType[P]>
  }




  export type TicketTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketTypeWhereInput
    orderBy?: TicketTypeOrderByWithAggregationInput | TicketTypeOrderByWithAggregationInput[]
    by: TicketTypeScalarFieldEnum[] | TicketTypeScalarFieldEnum
    having?: TicketTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketTypeCountAggregateInputType | true
    _avg?: TicketTypeAvgAggregateInputType
    _sum?: TicketTypeSumAggregateInputType
    _min?: TicketTypeMinAggregateInputType
    _max?: TicketTypeMaxAggregateInputType
  }

  export type TicketTypeGroupByOutputType = {
    id: string
    name: string
    quantity: number
    price: number
    ticketId: string
    _count: TicketTypeCountAggregateOutputType | null
    _avg: TicketTypeAvgAggregateOutputType | null
    _sum: TicketTypeSumAggregateOutputType | null
    _min: TicketTypeMinAggregateOutputType | null
    _max: TicketTypeMaxAggregateOutputType | null
  }

  type GetTicketTypeGroupByPayload<T extends TicketTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketTypeGroupByOutputType[P]>
            : GetScalarType<T[P], TicketTypeGroupByOutputType[P]>
        }
      >
    >


  export type TicketTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    quantity?: boolean
    price?: boolean
    ticketId?: boolean
    SalesTickets?: boolean | TicketType$SalesTicketsArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    _count?: boolean | TicketTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketType"]>



  export type TicketTypeSelectScalar = {
    id?: boolean
    name?: boolean
    quantity?: boolean
    price?: boolean
    ticketId?: boolean
  }

  export type TicketTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "quantity" | "price" | "ticketId", ExtArgs["result"]["ticketType"]>
  export type TicketTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SalesTickets?: boolean | TicketType$SalesTicketsArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    _count?: boolean | TicketTypeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TicketTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketType"
    objects: {
      SalesTickets: Prisma.$SalesTicketsPayload<ExtArgs>[]
      ticket: Prisma.$TicketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      quantity: number
      price: number
      ticketId: string
    }, ExtArgs["result"]["ticketType"]>
    composites: {}
  }

  type TicketTypeGetPayload<S extends boolean | null | undefined | TicketTypeDefaultArgs> = $Result.GetResult<Prisma.$TicketTypePayload, S>

  type TicketTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketTypeCountAggregateInputType | true
    }

  export interface TicketTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketType'], meta: { name: 'TicketType' } }
    /**
     * Find zero or one TicketType that matches the filter.
     * @param {TicketTypeFindUniqueArgs} args - Arguments to find a TicketType
     * @example
     * // Get one TicketType
     * const ticketType = await prisma.ticketType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketTypeFindUniqueArgs>(args: SelectSubset<T, TicketTypeFindUniqueArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TicketType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketTypeFindUniqueOrThrowArgs} args - Arguments to find a TicketType
     * @example
     * // Get one TicketType
     * const ticketType = await prisma.ticketType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeFindFirstArgs} args - Arguments to find a TicketType
     * @example
     * // Get one TicketType
     * const ticketType = await prisma.ticketType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketTypeFindFirstArgs>(args?: SelectSubset<T, TicketTypeFindFirstArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeFindFirstOrThrowArgs} args - Arguments to find a TicketType
     * @example
     * // Get one TicketType
     * const ticketType = await prisma.ticketType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TicketTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketTypes
     * const ticketTypes = await prisma.ticketType.findMany()
     * 
     * // Get first 10 TicketTypes
     * const ticketTypes = await prisma.ticketType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketTypeWithIdOnly = await prisma.ticketType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketTypeFindManyArgs>(args?: SelectSubset<T, TicketTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TicketType.
     * @param {TicketTypeCreateArgs} args - Arguments to create a TicketType.
     * @example
     * // Create one TicketType
     * const TicketType = await prisma.ticketType.create({
     *   data: {
     *     // ... data to create a TicketType
     *   }
     * })
     * 
     */
    create<T extends TicketTypeCreateArgs>(args: SelectSubset<T, TicketTypeCreateArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TicketTypes.
     * @param {TicketTypeCreateManyArgs} args - Arguments to create many TicketTypes.
     * @example
     * // Create many TicketTypes
     * const ticketType = await prisma.ticketType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketTypeCreateManyArgs>(args?: SelectSubset<T, TicketTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TicketType.
     * @param {TicketTypeDeleteArgs} args - Arguments to delete one TicketType.
     * @example
     * // Delete one TicketType
     * const TicketType = await prisma.ticketType.delete({
     *   where: {
     *     // ... filter to delete one TicketType
     *   }
     * })
     * 
     */
    delete<T extends TicketTypeDeleteArgs>(args: SelectSubset<T, TicketTypeDeleteArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TicketType.
     * @param {TicketTypeUpdateArgs} args - Arguments to update one TicketType.
     * @example
     * // Update one TicketType
     * const ticketType = await prisma.ticketType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketTypeUpdateArgs>(args: SelectSubset<T, TicketTypeUpdateArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TicketTypes.
     * @param {TicketTypeDeleteManyArgs} args - Arguments to filter TicketTypes to delete.
     * @example
     * // Delete a few TicketTypes
     * const { count } = await prisma.ticketType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketTypeDeleteManyArgs>(args?: SelectSubset<T, TicketTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketTypes
     * const ticketType = await prisma.ticketType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketTypeUpdateManyArgs>(args: SelectSubset<T, TicketTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TicketType.
     * @param {TicketTypeUpsertArgs} args - Arguments to update or create a TicketType.
     * @example
     * // Update or create a TicketType
     * const ticketType = await prisma.ticketType.upsert({
     *   create: {
     *     // ... data to create a TicketType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketType we want to update
     *   }
     * })
     */
    upsert<T extends TicketTypeUpsertArgs>(args: SelectSubset<T, TicketTypeUpsertArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TicketTypes that matches the filter.
     * @param {TicketTypeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const ticketType = await prisma.ticketType.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: TicketTypeFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a TicketType.
     * @param {TicketTypeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const ticketType = await prisma.ticketType.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TicketTypeAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of TicketTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeCountArgs} args - Arguments to filter TicketTypes to count.
     * @example
     * // Count the number of TicketTypes
     * const count = await prisma.ticketType.count({
     *   where: {
     *     // ... the filter for the TicketTypes we want to count
     *   }
     * })
    **/
    count<T extends TicketTypeCountArgs>(
      args?: Subset<T, TicketTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketTypeAggregateArgs>(args: Subset<T, TicketTypeAggregateArgs>): Prisma.PrismaPromise<GetTicketTypeAggregateType<T>>

    /**
     * Group by TicketType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeGroupByArgs} args - Group by arguments.
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
      T extends TicketTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketTypeGroupByArgs['orderBy'] }
        : { orderBy?: TicketTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketType model
   */
  readonly fields: TicketTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    SalesTickets<T extends TicketType$SalesTicketsArgs<ExtArgs> = {}>(args?: Subset<T, TicketType$SalesTicketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesTicketsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TicketType model
   */
  interface TicketTypeFieldRefs {
    readonly id: FieldRef<"TicketType", 'String'>
    readonly name: FieldRef<"TicketType", 'String'>
    readonly quantity: FieldRef<"TicketType", 'Int'>
    readonly price: FieldRef<"TicketType", 'Float'>
    readonly ticketId: FieldRef<"TicketType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TicketType findUnique
   */
  export type TicketTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * Filter, which TicketType to fetch.
     */
    where: TicketTypeWhereUniqueInput
  }

  /**
   * TicketType findUniqueOrThrow
   */
  export type TicketTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * Filter, which TicketType to fetch.
     */
    where: TicketTypeWhereUniqueInput
  }

  /**
   * TicketType findFirst
   */
  export type TicketTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * Filter, which TicketType to fetch.
     */
    where?: TicketTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketTypes to fetch.
     */
    orderBy?: TicketTypeOrderByWithRelationInput | TicketTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketTypes.
     */
    cursor?: TicketTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketTypes.
     */
    distinct?: TicketTypeScalarFieldEnum | TicketTypeScalarFieldEnum[]
  }

  /**
   * TicketType findFirstOrThrow
   */
  export type TicketTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * Filter, which TicketType to fetch.
     */
    where?: TicketTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketTypes to fetch.
     */
    orderBy?: TicketTypeOrderByWithRelationInput | TicketTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketTypes.
     */
    cursor?: TicketTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketTypes.
     */
    distinct?: TicketTypeScalarFieldEnum | TicketTypeScalarFieldEnum[]
  }

  /**
   * TicketType findMany
   */
  export type TicketTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * Filter, which TicketTypes to fetch.
     */
    where?: TicketTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketTypes to fetch.
     */
    orderBy?: TicketTypeOrderByWithRelationInput | TicketTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketTypes.
     */
    cursor?: TicketTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketTypes.
     */
    skip?: number
    distinct?: TicketTypeScalarFieldEnum | TicketTypeScalarFieldEnum[]
  }

  /**
   * TicketType create
   */
  export type TicketTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a TicketType.
     */
    data: XOR<TicketTypeCreateInput, TicketTypeUncheckedCreateInput>
  }

  /**
   * TicketType createMany
   */
  export type TicketTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketTypes.
     */
    data: TicketTypeCreateManyInput | TicketTypeCreateManyInput[]
  }

  /**
   * TicketType update
   */
  export type TicketTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a TicketType.
     */
    data: XOR<TicketTypeUpdateInput, TicketTypeUncheckedUpdateInput>
    /**
     * Choose, which TicketType to update.
     */
    where: TicketTypeWhereUniqueInput
  }

  /**
   * TicketType updateMany
   */
  export type TicketTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketTypes.
     */
    data: XOR<TicketTypeUpdateManyMutationInput, TicketTypeUncheckedUpdateManyInput>
    /**
     * Filter which TicketTypes to update
     */
    where?: TicketTypeWhereInput
    /**
     * Limit how many TicketTypes to update.
     */
    limit?: number
  }

  /**
   * TicketType upsert
   */
  export type TicketTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the TicketType to update in case it exists.
     */
    where: TicketTypeWhereUniqueInput
    /**
     * In case the TicketType found by the `where` argument doesn't exist, create a new TicketType with this data.
     */
    create: XOR<TicketTypeCreateInput, TicketTypeUncheckedCreateInput>
    /**
     * In case the TicketType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketTypeUpdateInput, TicketTypeUncheckedUpdateInput>
  }

  /**
   * TicketType delete
   */
  export type TicketTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * Filter which TicketType to delete.
     */
    where: TicketTypeWhereUniqueInput
  }

  /**
   * TicketType deleteMany
   */
  export type TicketTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketTypes to delete
     */
    where?: TicketTypeWhereInput
    /**
     * Limit how many TicketTypes to delete.
     */
    limit?: number
  }

  /**
   * TicketType findRaw
   */
  export type TicketTypeFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TicketType aggregateRaw
   */
  export type TicketTypeAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TicketType.SalesTickets
   */
  export type TicketType$SalesTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesTickets
     */
    select?: SalesTicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesTickets
     */
    omit?: SalesTicketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesTicketsInclude<ExtArgs> | null
    where?: SalesTicketsWhereInput
    orderBy?: SalesTicketsOrderByWithRelationInput | SalesTicketsOrderByWithRelationInput[]
    cursor?: SalesTicketsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalesTicketsScalarFieldEnum | SalesTicketsScalarFieldEnum[]
  }

  /**
   * TicketType without action
   */
  export type TicketTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
  }


  /**
   * Model SalesTickets
   */

  export type AggregateSalesTickets = {
    _count: SalesTicketsCountAggregateOutputType | null
    _min: SalesTicketsMinAggregateOutputType | null
    _max: SalesTicketsMaxAggregateOutputType | null
  }

  export type SalesTicketsMinAggregateOutputType = {
    id: string | null
    ticketTypeID: string | null
    qrCode: string | null
    paymentMethod: string | null
    isUsed: boolean | null
    userid: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SalesTicketsMaxAggregateOutputType = {
    id: string | null
    ticketTypeID: string | null
    qrCode: string | null
    paymentMethod: string | null
    isUsed: boolean | null
    userid: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SalesTicketsCountAggregateOutputType = {
    id: number
    ticketTypeID: number
    qrCode: number
    paymentMethod: number
    isUsed: number
    userid: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SalesTicketsMinAggregateInputType = {
    id?: true
    ticketTypeID?: true
    qrCode?: true
    paymentMethod?: true
    isUsed?: true
    userid?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SalesTicketsMaxAggregateInputType = {
    id?: true
    ticketTypeID?: true
    qrCode?: true
    paymentMethod?: true
    isUsed?: true
    userid?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SalesTicketsCountAggregateInputType = {
    id?: true
    ticketTypeID?: true
    qrCode?: true
    paymentMethod?: true
    isUsed?: true
    userid?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SalesTicketsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesTickets to aggregate.
     */
    where?: SalesTicketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesTickets to fetch.
     */
    orderBy?: SalesTicketsOrderByWithRelationInput | SalesTicketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalesTicketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SalesTickets
    **/
    _count?: true | SalesTicketsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalesTicketsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalesTicketsMaxAggregateInputType
  }

  export type GetSalesTicketsAggregateType<T extends SalesTicketsAggregateArgs> = {
        [P in keyof T & keyof AggregateSalesTickets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalesTickets[P]>
      : GetScalarType<T[P], AggregateSalesTickets[P]>
  }




  export type SalesTicketsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesTicketsWhereInput
    orderBy?: SalesTicketsOrderByWithAggregationInput | SalesTicketsOrderByWithAggregationInput[]
    by: SalesTicketsScalarFieldEnum[] | SalesTicketsScalarFieldEnum
    having?: SalesTicketsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalesTicketsCountAggregateInputType | true
    _min?: SalesTicketsMinAggregateInputType
    _max?: SalesTicketsMaxAggregateInputType
  }

  export type SalesTicketsGroupByOutputType = {
    id: string
    ticketTypeID: string
    qrCode: string
    paymentMethod: string
    isUsed: boolean
    userid: string
    createdAt: Date
    updatedAt: Date
    _count: SalesTicketsCountAggregateOutputType | null
    _min: SalesTicketsMinAggregateOutputType | null
    _max: SalesTicketsMaxAggregateOutputType | null
  }

  type GetSalesTicketsGroupByPayload<T extends SalesTicketsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalesTicketsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalesTicketsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalesTicketsGroupByOutputType[P]>
            : GetScalarType<T[P], SalesTicketsGroupByOutputType[P]>
        }
      >
    >


  export type SalesTicketsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketTypeID?: boolean
    qrCode?: boolean
    paymentMethod?: boolean
    isUsed?: boolean
    userid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tiketType?: boolean | TicketTypeDefaultArgs<ExtArgs>
    user?: boolean | SalesTickets$userArgs<ExtArgs>
  }, ExtArgs["result"]["salesTickets"]>



  export type SalesTicketsSelectScalar = {
    id?: boolean
    ticketTypeID?: boolean
    qrCode?: boolean
    paymentMethod?: boolean
    isUsed?: boolean
    userid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SalesTicketsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ticketTypeID" | "qrCode" | "paymentMethod" | "isUsed" | "userid" | "createdAt" | "updatedAt", ExtArgs["result"]["salesTickets"]>
  export type SalesTicketsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tiketType?: boolean | TicketTypeDefaultArgs<ExtArgs>
    user?: boolean | SalesTickets$userArgs<ExtArgs>
  }

  export type $SalesTicketsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SalesTickets"
    objects: {
      tiketType: Prisma.$TicketTypePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ticketTypeID: string
      qrCode: string
      paymentMethod: string
      isUsed: boolean
      userid: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["salesTickets"]>
    composites: {}
  }

  type SalesTicketsGetPayload<S extends boolean | null | undefined | SalesTicketsDefaultArgs> = $Result.GetResult<Prisma.$SalesTicketsPayload, S>

  type SalesTicketsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalesTicketsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalesTicketsCountAggregateInputType | true
    }

  export interface SalesTicketsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SalesTickets'], meta: { name: 'SalesTickets' } }
    /**
     * Find zero or one SalesTickets that matches the filter.
     * @param {SalesTicketsFindUniqueArgs} args - Arguments to find a SalesTickets
     * @example
     * // Get one SalesTickets
     * const salesTickets = await prisma.salesTickets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalesTicketsFindUniqueArgs>(args: SelectSubset<T, SalesTicketsFindUniqueArgs<ExtArgs>>): Prisma__SalesTicketsClient<$Result.GetResult<Prisma.$SalesTicketsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SalesTickets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalesTicketsFindUniqueOrThrowArgs} args - Arguments to find a SalesTickets
     * @example
     * // Get one SalesTickets
     * const salesTickets = await prisma.salesTickets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalesTicketsFindUniqueOrThrowArgs>(args: SelectSubset<T, SalesTicketsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalesTicketsClient<$Result.GetResult<Prisma.$SalesTicketsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalesTickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesTicketsFindFirstArgs} args - Arguments to find a SalesTickets
     * @example
     * // Get one SalesTickets
     * const salesTickets = await prisma.salesTickets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalesTicketsFindFirstArgs>(args?: SelectSubset<T, SalesTicketsFindFirstArgs<ExtArgs>>): Prisma__SalesTicketsClient<$Result.GetResult<Prisma.$SalesTicketsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalesTickets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesTicketsFindFirstOrThrowArgs} args - Arguments to find a SalesTickets
     * @example
     * // Get one SalesTickets
     * const salesTickets = await prisma.salesTickets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalesTicketsFindFirstOrThrowArgs>(args?: SelectSubset<T, SalesTicketsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalesTicketsClient<$Result.GetResult<Prisma.$SalesTicketsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SalesTickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesTicketsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalesTickets
     * const salesTickets = await prisma.salesTickets.findMany()
     * 
     * // Get first 10 SalesTickets
     * const salesTickets = await prisma.salesTickets.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salesTicketsWithIdOnly = await prisma.salesTickets.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalesTicketsFindManyArgs>(args?: SelectSubset<T, SalesTicketsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesTicketsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SalesTickets.
     * @param {SalesTicketsCreateArgs} args - Arguments to create a SalesTickets.
     * @example
     * // Create one SalesTickets
     * const SalesTickets = await prisma.salesTickets.create({
     *   data: {
     *     // ... data to create a SalesTickets
     *   }
     * })
     * 
     */
    create<T extends SalesTicketsCreateArgs>(args: SelectSubset<T, SalesTicketsCreateArgs<ExtArgs>>): Prisma__SalesTicketsClient<$Result.GetResult<Prisma.$SalesTicketsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SalesTickets.
     * @param {SalesTicketsCreateManyArgs} args - Arguments to create many SalesTickets.
     * @example
     * // Create many SalesTickets
     * const salesTickets = await prisma.salesTickets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalesTicketsCreateManyArgs>(args?: SelectSubset<T, SalesTicketsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SalesTickets.
     * @param {SalesTicketsDeleteArgs} args - Arguments to delete one SalesTickets.
     * @example
     * // Delete one SalesTickets
     * const SalesTickets = await prisma.salesTickets.delete({
     *   where: {
     *     // ... filter to delete one SalesTickets
     *   }
     * })
     * 
     */
    delete<T extends SalesTicketsDeleteArgs>(args: SelectSubset<T, SalesTicketsDeleteArgs<ExtArgs>>): Prisma__SalesTicketsClient<$Result.GetResult<Prisma.$SalesTicketsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SalesTickets.
     * @param {SalesTicketsUpdateArgs} args - Arguments to update one SalesTickets.
     * @example
     * // Update one SalesTickets
     * const salesTickets = await prisma.salesTickets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalesTicketsUpdateArgs>(args: SelectSubset<T, SalesTicketsUpdateArgs<ExtArgs>>): Prisma__SalesTicketsClient<$Result.GetResult<Prisma.$SalesTicketsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SalesTickets.
     * @param {SalesTicketsDeleteManyArgs} args - Arguments to filter SalesTickets to delete.
     * @example
     * // Delete a few SalesTickets
     * const { count } = await prisma.salesTickets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalesTicketsDeleteManyArgs>(args?: SelectSubset<T, SalesTicketsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalesTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesTicketsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalesTickets
     * const salesTickets = await prisma.salesTickets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalesTicketsUpdateManyArgs>(args: SelectSubset<T, SalesTicketsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SalesTickets.
     * @param {SalesTicketsUpsertArgs} args - Arguments to update or create a SalesTickets.
     * @example
     * // Update or create a SalesTickets
     * const salesTickets = await prisma.salesTickets.upsert({
     *   create: {
     *     // ... data to create a SalesTickets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalesTickets we want to update
     *   }
     * })
     */
    upsert<T extends SalesTicketsUpsertArgs>(args: SelectSubset<T, SalesTicketsUpsertArgs<ExtArgs>>): Prisma__SalesTicketsClient<$Result.GetResult<Prisma.$SalesTicketsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SalesTickets that matches the filter.
     * @param {SalesTicketsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const salesTickets = await prisma.salesTickets.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SalesTicketsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a SalesTickets.
     * @param {SalesTicketsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const salesTickets = await prisma.salesTickets.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SalesTicketsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of SalesTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesTicketsCountArgs} args - Arguments to filter SalesTickets to count.
     * @example
     * // Count the number of SalesTickets
     * const count = await prisma.salesTickets.count({
     *   where: {
     *     // ... the filter for the SalesTickets we want to count
     *   }
     * })
    **/
    count<T extends SalesTicketsCountArgs>(
      args?: Subset<T, SalesTicketsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesTicketsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SalesTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesTicketsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SalesTicketsAggregateArgs>(args: Subset<T, SalesTicketsAggregateArgs>): Prisma.PrismaPromise<GetSalesTicketsAggregateType<T>>

    /**
     * Group by SalesTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesTicketsGroupByArgs} args - Group by arguments.
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
      T extends SalesTicketsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalesTicketsGroupByArgs['orderBy'] }
        : { orderBy?: SalesTicketsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SalesTicketsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesTicketsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SalesTickets model
   */
  readonly fields: SalesTicketsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SalesTickets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalesTicketsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tiketType<T extends TicketTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketTypeDefaultArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends SalesTickets$userArgs<ExtArgs> = {}>(args?: Subset<T, SalesTickets$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SalesTickets model
   */
  interface SalesTicketsFieldRefs {
    readonly id: FieldRef<"SalesTickets", 'String'>
    readonly ticketTypeID: FieldRef<"SalesTickets", 'String'>
    readonly qrCode: FieldRef<"SalesTickets", 'String'>
    readonly paymentMethod: FieldRef<"SalesTickets", 'String'>
    readonly isUsed: FieldRef<"SalesTickets", 'Boolean'>
    readonly userid: FieldRef<"SalesTickets", 'String'>
    readonly createdAt: FieldRef<"SalesTickets", 'DateTime'>
    readonly updatedAt: FieldRef<"SalesTickets", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SalesTickets findUnique
   */
  export type SalesTicketsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesTickets
     */
    select?: SalesTicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesTickets
     */
    omit?: SalesTicketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesTicketsInclude<ExtArgs> | null
    /**
     * Filter, which SalesTickets to fetch.
     */
    where: SalesTicketsWhereUniqueInput
  }

  /**
   * SalesTickets findUniqueOrThrow
   */
  export type SalesTicketsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesTickets
     */
    select?: SalesTicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesTickets
     */
    omit?: SalesTicketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesTicketsInclude<ExtArgs> | null
    /**
     * Filter, which SalesTickets to fetch.
     */
    where: SalesTicketsWhereUniqueInput
  }

  /**
   * SalesTickets findFirst
   */
  export type SalesTicketsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesTickets
     */
    select?: SalesTicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesTickets
     */
    omit?: SalesTicketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesTicketsInclude<ExtArgs> | null
    /**
     * Filter, which SalesTickets to fetch.
     */
    where?: SalesTicketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesTickets to fetch.
     */
    orderBy?: SalesTicketsOrderByWithRelationInput | SalesTicketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesTickets.
     */
    cursor?: SalesTicketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesTickets.
     */
    distinct?: SalesTicketsScalarFieldEnum | SalesTicketsScalarFieldEnum[]
  }

  /**
   * SalesTickets findFirstOrThrow
   */
  export type SalesTicketsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesTickets
     */
    select?: SalesTicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesTickets
     */
    omit?: SalesTicketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesTicketsInclude<ExtArgs> | null
    /**
     * Filter, which SalesTickets to fetch.
     */
    where?: SalesTicketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesTickets to fetch.
     */
    orderBy?: SalesTicketsOrderByWithRelationInput | SalesTicketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesTickets.
     */
    cursor?: SalesTicketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesTickets.
     */
    distinct?: SalesTicketsScalarFieldEnum | SalesTicketsScalarFieldEnum[]
  }

  /**
   * SalesTickets findMany
   */
  export type SalesTicketsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesTickets
     */
    select?: SalesTicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesTickets
     */
    omit?: SalesTicketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesTicketsInclude<ExtArgs> | null
    /**
     * Filter, which SalesTickets to fetch.
     */
    where?: SalesTicketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesTickets to fetch.
     */
    orderBy?: SalesTicketsOrderByWithRelationInput | SalesTicketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SalesTickets.
     */
    cursor?: SalesTicketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesTickets.
     */
    skip?: number
    distinct?: SalesTicketsScalarFieldEnum | SalesTicketsScalarFieldEnum[]
  }

  /**
   * SalesTickets create
   */
  export type SalesTicketsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesTickets
     */
    select?: SalesTicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesTickets
     */
    omit?: SalesTicketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesTicketsInclude<ExtArgs> | null
    /**
     * The data needed to create a SalesTickets.
     */
    data: XOR<SalesTicketsCreateInput, SalesTicketsUncheckedCreateInput>
  }

  /**
   * SalesTickets createMany
   */
  export type SalesTicketsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalesTickets.
     */
    data: SalesTicketsCreateManyInput | SalesTicketsCreateManyInput[]
  }

  /**
   * SalesTickets update
   */
  export type SalesTicketsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesTickets
     */
    select?: SalesTicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesTickets
     */
    omit?: SalesTicketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesTicketsInclude<ExtArgs> | null
    /**
     * The data needed to update a SalesTickets.
     */
    data: XOR<SalesTicketsUpdateInput, SalesTicketsUncheckedUpdateInput>
    /**
     * Choose, which SalesTickets to update.
     */
    where: SalesTicketsWhereUniqueInput
  }

  /**
   * SalesTickets updateMany
   */
  export type SalesTicketsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SalesTickets.
     */
    data: XOR<SalesTicketsUpdateManyMutationInput, SalesTicketsUncheckedUpdateManyInput>
    /**
     * Filter which SalesTickets to update
     */
    where?: SalesTicketsWhereInput
    /**
     * Limit how many SalesTickets to update.
     */
    limit?: number
  }

  /**
   * SalesTickets upsert
   */
  export type SalesTicketsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesTickets
     */
    select?: SalesTicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesTickets
     */
    omit?: SalesTicketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesTicketsInclude<ExtArgs> | null
    /**
     * The filter to search for the SalesTickets to update in case it exists.
     */
    where: SalesTicketsWhereUniqueInput
    /**
     * In case the SalesTickets found by the `where` argument doesn't exist, create a new SalesTickets with this data.
     */
    create: XOR<SalesTicketsCreateInput, SalesTicketsUncheckedCreateInput>
    /**
     * In case the SalesTickets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalesTicketsUpdateInput, SalesTicketsUncheckedUpdateInput>
  }

  /**
   * SalesTickets delete
   */
  export type SalesTicketsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesTickets
     */
    select?: SalesTicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesTickets
     */
    omit?: SalesTicketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesTicketsInclude<ExtArgs> | null
    /**
     * Filter which SalesTickets to delete.
     */
    where: SalesTicketsWhereUniqueInput
  }

  /**
   * SalesTickets deleteMany
   */
  export type SalesTicketsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesTickets to delete
     */
    where?: SalesTicketsWhereInput
    /**
     * Limit how many SalesTickets to delete.
     */
    limit?: number
  }

  /**
   * SalesTickets findRaw
   */
  export type SalesTicketsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SalesTickets aggregateRaw
   */
  export type SalesTicketsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SalesTickets.user
   */
  export type SalesTickets$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * SalesTickets without action
   */
  export type SalesTicketsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesTickets
     */
    select?: SalesTicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesTickets
     */
    omit?: SalesTicketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesTicketsInclude<ExtArgs> | null
  }


  /**
   * Model UserEvent
   */

  export type AggregateUserEvent = {
    _count: UserEventCountAggregateOutputType | null
    _min: UserEventMinAggregateOutputType | null
    _max: UserEventMaxAggregateOutputType | null
  }

  export type UserEventMinAggregateOutputType = {
    id: string | null
    userId: string | null
    eventId: string | null
  }

  export type UserEventMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    eventId: string | null
  }

  export type UserEventCountAggregateOutputType = {
    id: number
    userId: number
    eventId: number
    _all: number
  }


  export type UserEventMinAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
  }

  export type UserEventMaxAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
  }

  export type UserEventCountAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    _all?: true
  }

  export type UserEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserEvent to aggregate.
     */
    where?: UserEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserEvents to fetch.
     */
    orderBy?: UserEventOrderByWithRelationInput | UserEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserEvents
    **/
    _count?: true | UserEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserEventMaxAggregateInputType
  }

  export type GetUserEventAggregateType<T extends UserEventAggregateArgs> = {
        [P in keyof T & keyof AggregateUserEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserEvent[P]>
      : GetScalarType<T[P], AggregateUserEvent[P]>
  }




  export type UserEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserEventWhereInput
    orderBy?: UserEventOrderByWithAggregationInput | UserEventOrderByWithAggregationInput[]
    by: UserEventScalarFieldEnum[] | UserEventScalarFieldEnum
    having?: UserEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserEventCountAggregateInputType | true
    _min?: UserEventMinAggregateInputType
    _max?: UserEventMaxAggregateInputType
  }

  export type UserEventGroupByOutputType = {
    id: string
    userId: string
    eventId: string
    _count: UserEventCountAggregateOutputType | null
    _min: UserEventMinAggregateOutputType | null
    _max: UserEventMaxAggregateOutputType | null
  }

  type GetUserEventGroupByPayload<T extends UserEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserEventGroupByOutputType[P]>
            : GetScalarType<T[P], UserEventGroupByOutputType[P]>
        }
      >
    >


  export type UserEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userEvent"]>



  export type UserEventSelectScalar = {
    id?: boolean
    userId?: boolean
    eventId?: boolean
  }

  export type UserEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "eventId", ExtArgs["result"]["userEvent"]>
  export type UserEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $UserEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserEvent"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      eventId: string
    }, ExtArgs["result"]["userEvent"]>
    composites: {}
  }

  type UserEventGetPayload<S extends boolean | null | undefined | UserEventDefaultArgs> = $Result.GetResult<Prisma.$UserEventPayload, S>

  type UserEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserEventCountAggregateInputType | true
    }

  export interface UserEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserEvent'], meta: { name: 'UserEvent' } }
    /**
     * Find zero or one UserEvent that matches the filter.
     * @param {UserEventFindUniqueArgs} args - Arguments to find a UserEvent
     * @example
     * // Get one UserEvent
     * const userEvent = await prisma.userEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserEventFindUniqueArgs>(args: SelectSubset<T, UserEventFindUniqueArgs<ExtArgs>>): Prisma__UserEventClient<$Result.GetResult<Prisma.$UserEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserEventFindUniqueOrThrowArgs} args - Arguments to find a UserEvent
     * @example
     * // Get one UserEvent
     * const userEvent = await prisma.userEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserEventFindUniqueOrThrowArgs>(args: SelectSubset<T, UserEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserEventClient<$Result.GetResult<Prisma.$UserEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEventFindFirstArgs} args - Arguments to find a UserEvent
     * @example
     * // Get one UserEvent
     * const userEvent = await prisma.userEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserEventFindFirstArgs>(args?: SelectSubset<T, UserEventFindFirstArgs<ExtArgs>>): Prisma__UserEventClient<$Result.GetResult<Prisma.$UserEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEventFindFirstOrThrowArgs} args - Arguments to find a UserEvent
     * @example
     * // Get one UserEvent
     * const userEvent = await prisma.userEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserEventFindFirstOrThrowArgs>(args?: SelectSubset<T, UserEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserEventClient<$Result.GetResult<Prisma.$UserEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserEvents
     * const userEvents = await prisma.userEvent.findMany()
     * 
     * // Get first 10 UserEvents
     * const userEvents = await prisma.userEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userEventWithIdOnly = await prisma.userEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserEventFindManyArgs>(args?: SelectSubset<T, UserEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserEvent.
     * @param {UserEventCreateArgs} args - Arguments to create a UserEvent.
     * @example
     * // Create one UserEvent
     * const UserEvent = await prisma.userEvent.create({
     *   data: {
     *     // ... data to create a UserEvent
     *   }
     * })
     * 
     */
    create<T extends UserEventCreateArgs>(args: SelectSubset<T, UserEventCreateArgs<ExtArgs>>): Prisma__UserEventClient<$Result.GetResult<Prisma.$UserEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserEvents.
     * @param {UserEventCreateManyArgs} args - Arguments to create many UserEvents.
     * @example
     * // Create many UserEvents
     * const userEvent = await prisma.userEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserEventCreateManyArgs>(args?: SelectSubset<T, UserEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserEvent.
     * @param {UserEventDeleteArgs} args - Arguments to delete one UserEvent.
     * @example
     * // Delete one UserEvent
     * const UserEvent = await prisma.userEvent.delete({
     *   where: {
     *     // ... filter to delete one UserEvent
     *   }
     * })
     * 
     */
    delete<T extends UserEventDeleteArgs>(args: SelectSubset<T, UserEventDeleteArgs<ExtArgs>>): Prisma__UserEventClient<$Result.GetResult<Prisma.$UserEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserEvent.
     * @param {UserEventUpdateArgs} args - Arguments to update one UserEvent.
     * @example
     * // Update one UserEvent
     * const userEvent = await prisma.userEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserEventUpdateArgs>(args: SelectSubset<T, UserEventUpdateArgs<ExtArgs>>): Prisma__UserEventClient<$Result.GetResult<Prisma.$UserEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserEvents.
     * @param {UserEventDeleteManyArgs} args - Arguments to filter UserEvents to delete.
     * @example
     * // Delete a few UserEvents
     * const { count } = await prisma.userEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserEventDeleteManyArgs>(args?: SelectSubset<T, UserEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserEvents
     * const userEvent = await prisma.userEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserEventUpdateManyArgs>(args: SelectSubset<T, UserEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserEvent.
     * @param {UserEventUpsertArgs} args - Arguments to update or create a UserEvent.
     * @example
     * // Update or create a UserEvent
     * const userEvent = await prisma.userEvent.upsert({
     *   create: {
     *     // ... data to create a UserEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserEvent we want to update
     *   }
     * })
     */
    upsert<T extends UserEventUpsertArgs>(args: SelectSubset<T, UserEventUpsertArgs<ExtArgs>>): Prisma__UserEventClient<$Result.GetResult<Prisma.$UserEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserEvents that matches the filter.
     * @param {UserEventFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userEvent = await prisma.userEvent.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserEventFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserEvent.
     * @param {UserEventAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userEvent = await prisma.userEvent.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserEventAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of UserEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEventCountArgs} args - Arguments to filter UserEvents to count.
     * @example
     * // Count the number of UserEvents
     * const count = await prisma.userEvent.count({
     *   where: {
     *     // ... the filter for the UserEvents we want to count
     *   }
     * })
    **/
    count<T extends UserEventCountArgs>(
      args?: Subset<T, UserEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserEventAggregateArgs>(args: Subset<T, UserEventAggregateArgs>): Prisma.PrismaPromise<GetUserEventAggregateType<T>>

    /**
     * Group by UserEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEventGroupByArgs} args - Group by arguments.
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
      T extends UserEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserEventGroupByArgs['orderBy'] }
        : { orderBy?: UserEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserEvent model
   */
  readonly fields: UserEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserEvent model
   */
  interface UserEventFieldRefs {
    readonly id: FieldRef<"UserEvent", 'String'>
    readonly userId: FieldRef<"UserEvent", 'String'>
    readonly eventId: FieldRef<"UserEvent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserEvent findUnique
   */
  export type UserEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEvent
     */
    select?: UserEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEvent
     */
    omit?: UserEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEventInclude<ExtArgs> | null
    /**
     * Filter, which UserEvent to fetch.
     */
    where: UserEventWhereUniqueInput
  }

  /**
   * UserEvent findUniqueOrThrow
   */
  export type UserEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEvent
     */
    select?: UserEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEvent
     */
    omit?: UserEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEventInclude<ExtArgs> | null
    /**
     * Filter, which UserEvent to fetch.
     */
    where: UserEventWhereUniqueInput
  }

  /**
   * UserEvent findFirst
   */
  export type UserEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEvent
     */
    select?: UserEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEvent
     */
    omit?: UserEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEventInclude<ExtArgs> | null
    /**
     * Filter, which UserEvent to fetch.
     */
    where?: UserEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserEvents to fetch.
     */
    orderBy?: UserEventOrderByWithRelationInput | UserEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserEvents.
     */
    cursor?: UserEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserEvents.
     */
    distinct?: UserEventScalarFieldEnum | UserEventScalarFieldEnum[]
  }

  /**
   * UserEvent findFirstOrThrow
   */
  export type UserEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEvent
     */
    select?: UserEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEvent
     */
    omit?: UserEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEventInclude<ExtArgs> | null
    /**
     * Filter, which UserEvent to fetch.
     */
    where?: UserEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserEvents to fetch.
     */
    orderBy?: UserEventOrderByWithRelationInput | UserEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserEvents.
     */
    cursor?: UserEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserEvents.
     */
    distinct?: UserEventScalarFieldEnum | UserEventScalarFieldEnum[]
  }

  /**
   * UserEvent findMany
   */
  export type UserEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEvent
     */
    select?: UserEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEvent
     */
    omit?: UserEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEventInclude<ExtArgs> | null
    /**
     * Filter, which UserEvents to fetch.
     */
    where?: UserEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserEvents to fetch.
     */
    orderBy?: UserEventOrderByWithRelationInput | UserEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserEvents.
     */
    cursor?: UserEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserEvents.
     */
    skip?: number
    distinct?: UserEventScalarFieldEnum | UserEventScalarFieldEnum[]
  }

  /**
   * UserEvent create
   */
  export type UserEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEvent
     */
    select?: UserEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEvent
     */
    omit?: UserEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEventInclude<ExtArgs> | null
    /**
     * The data needed to create a UserEvent.
     */
    data: XOR<UserEventCreateInput, UserEventUncheckedCreateInput>
  }

  /**
   * UserEvent createMany
   */
  export type UserEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserEvents.
     */
    data: UserEventCreateManyInput | UserEventCreateManyInput[]
  }

  /**
   * UserEvent update
   */
  export type UserEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEvent
     */
    select?: UserEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEvent
     */
    omit?: UserEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEventInclude<ExtArgs> | null
    /**
     * The data needed to update a UserEvent.
     */
    data: XOR<UserEventUpdateInput, UserEventUncheckedUpdateInput>
    /**
     * Choose, which UserEvent to update.
     */
    where: UserEventWhereUniqueInput
  }

  /**
   * UserEvent updateMany
   */
  export type UserEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserEvents.
     */
    data: XOR<UserEventUpdateManyMutationInput, UserEventUncheckedUpdateManyInput>
    /**
     * Filter which UserEvents to update
     */
    where?: UserEventWhereInput
    /**
     * Limit how many UserEvents to update.
     */
    limit?: number
  }

  /**
   * UserEvent upsert
   */
  export type UserEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEvent
     */
    select?: UserEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEvent
     */
    omit?: UserEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEventInclude<ExtArgs> | null
    /**
     * The filter to search for the UserEvent to update in case it exists.
     */
    where: UserEventWhereUniqueInput
    /**
     * In case the UserEvent found by the `where` argument doesn't exist, create a new UserEvent with this data.
     */
    create: XOR<UserEventCreateInput, UserEventUncheckedCreateInput>
    /**
     * In case the UserEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserEventUpdateInput, UserEventUncheckedUpdateInput>
  }

  /**
   * UserEvent delete
   */
  export type UserEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEvent
     */
    select?: UserEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEvent
     */
    omit?: UserEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEventInclude<ExtArgs> | null
    /**
     * Filter which UserEvent to delete.
     */
    where: UserEventWhereUniqueInput
  }

  /**
   * UserEvent deleteMany
   */
  export type UserEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserEvents to delete
     */
    where?: UserEventWhereInput
    /**
     * Limit how many UserEvents to delete.
     */
    limit?: number
  }

  /**
   * UserEvent findRaw
   */
  export type UserEventFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserEvent aggregateRaw
   */
  export type UserEventAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserEvent without action
   */
  export type UserEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEvent
     */
    select?: UserEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEvent
     */
    omit?: UserEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEventInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    user_type: 'user_type',
    token: 'token',
    isVerify: 'isVerify',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone_number: 'phone_number',
    nuit_url: 'nuit_url',
    isVerify: 'isVerify',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    category: 'category',
    location: 'location',
    image: 'image',
    event_date: 'event_date',
    start_time: 'start_time',
    end_time: 'end_time',
    status: 'status',
    ticketId: 'ticketId',
    companyId: 'companyId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const InviteScannerScalarFieldEnum: {
    id: 'id',
    token: 'token',
    total_scanner: 'total_scanner',
    eventID: 'eventID',
    expiresAt: 'expiresAt',
    acceptedCount: 'acceptedCount',
    createdAt: 'createdAt'
  };

  export type InviteScannerScalarFieldEnum = (typeof InviteScannerScalarFieldEnum)[keyof typeof InviteScannerScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const TicketTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    quantity: 'quantity',
    price: 'price',
    ticketId: 'ticketId'
  };

  export type TicketTypeScalarFieldEnum = (typeof TicketTypeScalarFieldEnum)[keyof typeof TicketTypeScalarFieldEnum]


  export const SalesTicketsScalarFieldEnum: {
    id: 'id',
    ticketTypeID: 'ticketTypeID',
    qrCode: 'qrCode',
    paymentMethod: 'paymentMethod',
    isUsed: 'isUsed',
    userid: 'userid',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SalesTicketsScalarFieldEnum = (typeof SalesTicketsScalarFieldEnum)[keyof typeof SalesTicketsScalarFieldEnum]


  export const UserEventScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    eventId: 'eventId'
  };

  export type UserEventScalarFieldEnum = (typeof UserEventScalarFieldEnum)[keyof typeof UserEventScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    user_type?: StringFilter<"User"> | string
    token?: StringNullableFilter<"User"> | string | null
    isVerify?: BoolNullableFilter<"User"> | boolean | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
    SalesTickets?: SalesTicketsListRelationFilter
    UserEvent?: UserEventListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    user_type?: SortOrder
    token?: SortOrder
    isVerify?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
    SalesTickets?: SalesTicketsOrderByRelationAggregateInput
    UserEvent?: UserEventOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    user_type?: StringFilter<"User"> | string
    token?: StringNullableFilter<"User"> | string | null
    isVerify?: BoolNullableFilter<"User"> | boolean | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
    SalesTickets?: SalesTicketsListRelationFilter
    UserEvent?: UserEventListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    user_type?: SortOrder
    token?: SortOrder
    isVerify?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    user_type?: StringWithAggregatesFilter<"User"> | string
    token?: StringNullableWithAggregatesFilter<"User"> | string | null
    isVerify?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: StringFilter<"Company"> | string
    name?: StringFilter<"Company"> | string
    email?: StringFilter<"Company"> | string
    phone_number?: StringFilter<"Company"> | string
    nuit_url?: StringNullableFilter<"Company"> | string | null
    isVerify?: BoolNullableFilter<"Company"> | boolean | null
    userId?: StringFilter<"Company"> | string
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Company"> | Date | string | null
    events?: EventListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    nuit_url?: SortOrder
    isVerify?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    events?: EventOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    name?: StringFilter<"Company"> | string
    email?: StringFilter<"Company"> | string
    phone_number?: StringFilter<"Company"> | string
    nuit_url?: StringNullableFilter<"Company"> | string | null
    isVerify?: BoolNullableFilter<"Company"> | boolean | null
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Company"> | Date | string | null
    events?: EventListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    nuit_url?: SortOrder
    isVerify?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Company"> | string
    name?: StringWithAggregatesFilter<"Company"> | string
    email?: StringWithAggregatesFilter<"Company"> | string
    phone_number?: StringWithAggregatesFilter<"Company"> | string
    nuit_url?: StringNullableWithAggregatesFilter<"Company"> | string | null
    isVerify?: BoolNullableWithAggregatesFilter<"Company"> | boolean | null
    userId?: StringWithAggregatesFilter<"Company"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Company"> | Date | string | null
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    category?: StringFilter<"Event"> | string
    location?: StringFilter<"Event"> | string
    image?: StringFilter<"Event"> | string
    event_date?: StringFilter<"Event"> | string
    start_time?: StringFilter<"Event"> | string
    end_time?: StringFilter<"Event"> | string
    status?: StringFilter<"Event"> | string
    ticketId?: StringFilter<"Event"> | string
    companyId?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Event"> | Date | string | null
    userEvent?: UserEventListRelationFilter
    inviteScanner?: XOR<InviteScannerNullableScalarRelationFilter, InviteScannerWhereInput> | null
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    location?: SortOrder
    image?: SortOrder
    event_date?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    status?: SortOrder
    ticketId?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userEvent?: UserEventOrderByRelationAggregateInput
    inviteScanner?: InviteScannerOrderByWithRelationInput
    ticket?: TicketOrderByWithRelationInput
    company?: CompanyOrderByWithRelationInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ticketId?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    category?: StringFilter<"Event"> | string
    location?: StringFilter<"Event"> | string
    image?: StringFilter<"Event"> | string
    event_date?: StringFilter<"Event"> | string
    start_time?: StringFilter<"Event"> | string
    end_time?: StringFilter<"Event"> | string
    status?: StringFilter<"Event"> | string
    companyId?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Event"> | Date | string | null
    userEvent?: UserEventListRelationFilter
    inviteScanner?: XOR<InviteScannerNullableScalarRelationFilter, InviteScannerWhereInput> | null
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }, "id" | "ticketId">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    location?: SortOrder
    image?: SortOrder
    event_date?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    status?: SortOrder
    ticketId?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    title?: StringWithAggregatesFilter<"Event"> | string
    description?: StringWithAggregatesFilter<"Event"> | string
    category?: StringWithAggregatesFilter<"Event"> | string
    location?: StringWithAggregatesFilter<"Event"> | string
    image?: StringWithAggregatesFilter<"Event"> | string
    event_date?: StringWithAggregatesFilter<"Event"> | string
    start_time?: StringWithAggregatesFilter<"Event"> | string
    end_time?: StringWithAggregatesFilter<"Event"> | string
    status?: StringWithAggregatesFilter<"Event"> | string
    ticketId?: StringWithAggregatesFilter<"Event"> | string
    companyId?: StringWithAggregatesFilter<"Event"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Event"> | Date | string | null
  }

  export type InviteScannerWhereInput = {
    AND?: InviteScannerWhereInput | InviteScannerWhereInput[]
    OR?: InviteScannerWhereInput[]
    NOT?: InviteScannerWhereInput | InviteScannerWhereInput[]
    id?: StringFilter<"InviteScanner"> | string
    token?: StringFilter<"InviteScanner"> | string
    total_scanner?: IntFilter<"InviteScanner"> | number
    eventID?: StringFilter<"InviteScanner"> | string
    expiresAt?: DateTimeFilter<"InviteScanner"> | Date | string
    acceptedCount?: IntFilter<"InviteScanner"> | number
    createdAt?: DateTimeFilter<"InviteScanner"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }

  export type InviteScannerOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    total_scanner?: SortOrder
    eventID?: SortOrder
    expiresAt?: SortOrder
    acceptedCount?: SortOrder
    createdAt?: SortOrder
    event?: EventOrderByWithRelationInput
  }

  export type InviteScannerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    eventID?: string
    AND?: InviteScannerWhereInput | InviteScannerWhereInput[]
    OR?: InviteScannerWhereInput[]
    NOT?: InviteScannerWhereInput | InviteScannerWhereInput[]
    total_scanner?: IntFilter<"InviteScanner"> | number
    expiresAt?: DateTimeFilter<"InviteScanner"> | Date | string
    acceptedCount?: IntFilter<"InviteScanner"> | number
    createdAt?: DateTimeFilter<"InviteScanner"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }, "id" | "token" | "eventID">

  export type InviteScannerOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    total_scanner?: SortOrder
    eventID?: SortOrder
    expiresAt?: SortOrder
    acceptedCount?: SortOrder
    createdAt?: SortOrder
    _count?: InviteScannerCountOrderByAggregateInput
    _avg?: InviteScannerAvgOrderByAggregateInput
    _max?: InviteScannerMaxOrderByAggregateInput
    _min?: InviteScannerMinOrderByAggregateInput
    _sum?: InviteScannerSumOrderByAggregateInput
  }

  export type InviteScannerScalarWhereWithAggregatesInput = {
    AND?: InviteScannerScalarWhereWithAggregatesInput | InviteScannerScalarWhereWithAggregatesInput[]
    OR?: InviteScannerScalarWhereWithAggregatesInput[]
    NOT?: InviteScannerScalarWhereWithAggregatesInput | InviteScannerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InviteScanner"> | string
    token?: StringWithAggregatesFilter<"InviteScanner"> | string
    total_scanner?: IntWithAggregatesFilter<"InviteScanner"> | number
    eventID?: StringWithAggregatesFilter<"InviteScanner"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"InviteScanner"> | Date | string
    acceptedCount?: IntWithAggregatesFilter<"InviteScanner"> | number
    createdAt?: DateTimeWithAggregatesFilter<"InviteScanner"> | Date | string
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: StringFilter<"Ticket"> | string
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    ticketType?: TicketTypeListRelationFilter
    event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ticketType?: TicketTypeOrderByRelationAggregateInput
    event?: EventOrderByWithRelationInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    ticketType?: TicketTypeListRelationFilter
    event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null
  }, "id">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TicketCountOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ticket"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Ticket"> | Date | string | null
  }

  export type TicketTypeWhereInput = {
    AND?: TicketTypeWhereInput | TicketTypeWhereInput[]
    OR?: TicketTypeWhereInput[]
    NOT?: TicketTypeWhereInput | TicketTypeWhereInput[]
    id?: StringFilter<"TicketType"> | string
    name?: StringFilter<"TicketType"> | string
    quantity?: IntFilter<"TicketType"> | number
    price?: FloatFilter<"TicketType"> | number
    ticketId?: StringFilter<"TicketType"> | string
    SalesTickets?: SalesTicketsListRelationFilter
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
  }

  export type TicketTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    ticketId?: SortOrder
    SalesTickets?: SalesTicketsOrderByRelationAggregateInput
    ticket?: TicketOrderByWithRelationInput
  }

  export type TicketTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TicketTypeWhereInput | TicketTypeWhereInput[]
    OR?: TicketTypeWhereInput[]
    NOT?: TicketTypeWhereInput | TicketTypeWhereInput[]
    name?: StringFilter<"TicketType"> | string
    quantity?: IntFilter<"TicketType"> | number
    price?: FloatFilter<"TicketType"> | number
    ticketId?: StringFilter<"TicketType"> | string
    SalesTickets?: SalesTicketsListRelationFilter
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
  }, "id">

  export type TicketTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    ticketId?: SortOrder
    _count?: TicketTypeCountOrderByAggregateInput
    _avg?: TicketTypeAvgOrderByAggregateInput
    _max?: TicketTypeMaxOrderByAggregateInput
    _min?: TicketTypeMinOrderByAggregateInput
    _sum?: TicketTypeSumOrderByAggregateInput
  }

  export type TicketTypeScalarWhereWithAggregatesInput = {
    AND?: TicketTypeScalarWhereWithAggregatesInput | TicketTypeScalarWhereWithAggregatesInput[]
    OR?: TicketTypeScalarWhereWithAggregatesInput[]
    NOT?: TicketTypeScalarWhereWithAggregatesInput | TicketTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TicketType"> | string
    name?: StringWithAggregatesFilter<"TicketType"> | string
    quantity?: IntWithAggregatesFilter<"TicketType"> | number
    price?: FloatWithAggregatesFilter<"TicketType"> | number
    ticketId?: StringWithAggregatesFilter<"TicketType"> | string
  }

  export type SalesTicketsWhereInput = {
    AND?: SalesTicketsWhereInput | SalesTicketsWhereInput[]
    OR?: SalesTicketsWhereInput[]
    NOT?: SalesTicketsWhereInput | SalesTicketsWhereInput[]
    id?: StringFilter<"SalesTickets"> | string
    ticketTypeID?: StringFilter<"SalesTickets"> | string
    qrCode?: StringFilter<"SalesTickets"> | string
    paymentMethod?: StringFilter<"SalesTickets"> | string
    isUsed?: BoolFilter<"SalesTickets"> | boolean
    userid?: StringFilter<"SalesTickets"> | string
    createdAt?: DateTimeFilter<"SalesTickets"> | Date | string
    updatedAt?: DateTimeFilter<"SalesTickets"> | Date | string
    tiketType?: XOR<TicketTypeScalarRelationFilter, TicketTypeWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type SalesTicketsOrderByWithRelationInput = {
    id?: SortOrder
    ticketTypeID?: SortOrder
    qrCode?: SortOrder
    paymentMethod?: SortOrder
    isUsed?: SortOrder
    userid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tiketType?: TicketTypeOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type SalesTicketsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SalesTicketsWhereInput | SalesTicketsWhereInput[]
    OR?: SalesTicketsWhereInput[]
    NOT?: SalesTicketsWhereInput | SalesTicketsWhereInput[]
    ticketTypeID?: StringFilter<"SalesTickets"> | string
    qrCode?: StringFilter<"SalesTickets"> | string
    paymentMethod?: StringFilter<"SalesTickets"> | string
    isUsed?: BoolFilter<"SalesTickets"> | boolean
    userid?: StringFilter<"SalesTickets"> | string
    createdAt?: DateTimeFilter<"SalesTickets"> | Date | string
    updatedAt?: DateTimeFilter<"SalesTickets"> | Date | string
    tiketType?: XOR<TicketTypeScalarRelationFilter, TicketTypeWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type SalesTicketsOrderByWithAggregationInput = {
    id?: SortOrder
    ticketTypeID?: SortOrder
    qrCode?: SortOrder
    paymentMethod?: SortOrder
    isUsed?: SortOrder
    userid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SalesTicketsCountOrderByAggregateInput
    _max?: SalesTicketsMaxOrderByAggregateInput
    _min?: SalesTicketsMinOrderByAggregateInput
  }

  export type SalesTicketsScalarWhereWithAggregatesInput = {
    AND?: SalesTicketsScalarWhereWithAggregatesInput | SalesTicketsScalarWhereWithAggregatesInput[]
    OR?: SalesTicketsScalarWhereWithAggregatesInput[]
    NOT?: SalesTicketsScalarWhereWithAggregatesInput | SalesTicketsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SalesTickets"> | string
    ticketTypeID?: StringWithAggregatesFilter<"SalesTickets"> | string
    qrCode?: StringWithAggregatesFilter<"SalesTickets"> | string
    paymentMethod?: StringWithAggregatesFilter<"SalesTickets"> | string
    isUsed?: BoolWithAggregatesFilter<"SalesTickets"> | boolean
    userid?: StringWithAggregatesFilter<"SalesTickets"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SalesTickets"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SalesTickets"> | Date | string
  }

  export type UserEventWhereInput = {
    AND?: UserEventWhereInput | UserEventWhereInput[]
    OR?: UserEventWhereInput[]
    NOT?: UserEventWhereInput | UserEventWhereInput[]
    id?: StringFilter<"UserEvent"> | string
    userId?: StringFilter<"UserEvent"> | string
    eventId?: StringFilter<"UserEvent"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }

  export type UserEventOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    user?: UserOrderByWithRelationInput
    event?: EventOrderByWithRelationInput
  }

  export type UserEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserEventWhereInput | UserEventWhereInput[]
    OR?: UserEventWhereInput[]
    NOT?: UserEventWhereInput | UserEventWhereInput[]
    userId?: StringFilter<"UserEvent"> | string
    eventId?: StringFilter<"UserEvent"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }, "id">

  export type UserEventOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    _count?: UserEventCountOrderByAggregateInput
    _max?: UserEventMaxOrderByAggregateInput
    _min?: UserEventMinOrderByAggregateInput
  }

  export type UserEventScalarWhereWithAggregatesInput = {
    AND?: UserEventScalarWhereWithAggregatesInput | UserEventScalarWhereWithAggregatesInput[]
    OR?: UserEventScalarWhereWithAggregatesInput[]
    NOT?: UserEventScalarWhereWithAggregatesInput | UserEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserEvent"> | string
    userId?: StringWithAggregatesFilter<"UserEvent"> | string
    eventId?: StringWithAggregatesFilter<"UserEvent"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    user_type: string
    token?: string | null
    isVerify?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    company?: CompanyCreateNestedOneWithoutUserInput
    SalesTickets?: SalesTicketsCreateNestedManyWithoutUserInput
    UserEvent?: UserEventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    user_type: string
    token?: string | null
    isVerify?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    company?: CompanyUncheckedCreateNestedOneWithoutUserInput
    SalesTickets?: SalesTicketsUncheckedCreateNestedManyWithoutUserInput
    UserEvent?: UserEventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company?: CompanyUpdateOneWithoutUserNestedInput
    SalesTickets?: SalesTicketsUpdateManyWithoutUserNestedInput
    UserEvent?: UserEventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company?: CompanyUncheckedUpdateOneWithoutUserNestedInput
    SalesTickets?: SalesTicketsUncheckedUpdateManyWithoutUserNestedInput
    UserEvent?: UserEventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    user_type: string
    token?: string | null
    isVerify?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CompanyCreateInput = {
    id?: string
    name: string
    email: string
    phone_number: string
    nuit_url?: string | null
    isVerify?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    events?: EventCreateNestedManyWithoutCompanyInput
    user: UserCreateNestedOneWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone_number: string
    nuit_url?: string | null
    isVerify?: boolean | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    events?: EventUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    nuit_url?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    events?: EventUpdateManyWithoutCompanyNestedInput
    user?: UserUpdateOneRequiredWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    nuit_url?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    events?: EventUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: string
    name: string
    email: string
    phone_number: string
    nuit_url?: string | null
    isVerify?: boolean | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type CompanyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    nuit_url?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CompanyUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    nuit_url?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventCreateInput = {
    id?: string
    title: string
    description: string
    category: string
    location: string
    image: string
    event_date: string
    start_time: string
    end_time: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    userEvent?: UserEventCreateNestedManyWithoutEventInput
    inviteScanner?: InviteScannerCreateNestedOneWithoutEventInput
    ticket: TicketCreateNestedOneWithoutEventInput
    company: CompanyCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    category: string
    location: string
    image: string
    event_date: string
    start_time: string
    end_time: string
    status?: string
    ticketId: string
    companyId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    userEvent?: UserEventUncheckedCreateNestedManyWithoutEventInput
    inviteScanner?: InviteScannerUncheckedCreateNestedOneWithoutEventInput
  }

  export type EventUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    event_date?: StringFieldUpdateOperationsInput | string
    start_time?: StringFieldUpdateOperationsInput | string
    end_time?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userEvent?: UserEventUpdateManyWithoutEventNestedInput
    inviteScanner?: InviteScannerUpdateOneWithoutEventNestedInput
    ticket?: TicketUpdateOneRequiredWithoutEventNestedInput
    company?: CompanyUpdateOneRequiredWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    event_date?: StringFieldUpdateOperationsInput | string
    start_time?: StringFieldUpdateOperationsInput | string
    end_time?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userEvent?: UserEventUncheckedUpdateManyWithoutEventNestedInput
    inviteScanner?: InviteScannerUncheckedUpdateOneWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: string
    title: string
    description: string
    category: string
    location: string
    image: string
    event_date: string
    start_time: string
    end_time: string
    status?: string
    ticketId: string
    companyId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type EventUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    event_date?: StringFieldUpdateOperationsInput | string
    start_time?: StringFieldUpdateOperationsInput | string
    end_time?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    event_date?: StringFieldUpdateOperationsInput | string
    start_time?: StringFieldUpdateOperationsInput | string
    end_time?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InviteScannerCreateInput = {
    id?: string
    token: string
    total_scanner: number
    expiresAt: Date | string
    acceptedCount?: number
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutInviteScannerInput
  }

  export type InviteScannerUncheckedCreateInput = {
    id?: string
    token: string
    total_scanner: number
    eventID: string
    expiresAt: Date | string
    acceptedCount?: number
    createdAt?: Date | string
  }

  export type InviteScannerUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    total_scanner?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutInviteScannerNestedInput
  }

  export type InviteScannerUncheckedUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    total_scanner?: IntFieldUpdateOperationsInput | number
    eventID?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InviteScannerCreateManyInput = {
    id?: string
    token: string
    total_scanner: number
    eventID: string
    expiresAt: Date | string
    acceptedCount?: number
    createdAt?: Date | string
  }

  export type InviteScannerUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    total_scanner?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InviteScannerUncheckedUpdateManyInput = {
    token?: StringFieldUpdateOperationsInput | string
    total_scanner?: IntFieldUpdateOperationsInput | number
    eventID?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    ticketType?: TicketTypeCreateNestedManyWithoutTicketInput
    event?: EventCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    ticketType?: TicketTypeUncheckedCreateNestedManyWithoutTicketInput
    event?: EventUncheckedCreateNestedOneWithoutTicketInput
  }

  export type TicketUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticketType?: TicketTypeUpdateManyWithoutTicketNestedInput
    event?: EventUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticketType?: TicketTypeUncheckedUpdateManyWithoutTicketNestedInput
    event?: EventUncheckedUpdateOneWithoutTicketNestedInput
  }

  export type TicketCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type TicketUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketTypeCreateInput = {
    id?: string
    name: string
    quantity: number
    price: number
    SalesTickets?: SalesTicketsCreateNestedManyWithoutTiketTypeInput
    ticket: TicketCreateNestedOneWithoutTicketTypeInput
  }

  export type TicketTypeUncheckedCreateInput = {
    id?: string
    name: string
    quantity: number
    price: number
    ticketId: string
    SalesTickets?: SalesTicketsUncheckedCreateNestedManyWithoutTiketTypeInput
  }

  export type TicketTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    SalesTickets?: SalesTicketsUpdateManyWithoutTiketTypeNestedInput
    ticket?: TicketUpdateOneRequiredWithoutTicketTypeNestedInput
  }

  export type TicketTypeUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    ticketId?: StringFieldUpdateOperationsInput | string
    SalesTickets?: SalesTicketsUncheckedUpdateManyWithoutTiketTypeNestedInput
  }

  export type TicketTypeCreateManyInput = {
    id?: string
    name: string
    quantity: number
    price: number
    ticketId: string
  }

  export type TicketTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type TicketTypeUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    ticketId?: StringFieldUpdateOperationsInput | string
  }

  export type SalesTicketsCreateInput = {
    id?: string
    qrCode: string
    paymentMethod: string
    isUsed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tiketType: TicketTypeCreateNestedOneWithoutSalesTicketsInput
    user?: UserCreateNestedOneWithoutSalesTicketsInput
  }

  export type SalesTicketsUncheckedCreateInput = {
    id?: string
    ticketTypeID: string
    qrCode: string
    paymentMethod: string
    isUsed?: boolean
    userid: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalesTicketsUpdateInput = {
    qrCode?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tiketType?: TicketTypeUpdateOneRequiredWithoutSalesTicketsNestedInput
    user?: UserUpdateOneWithoutSalesTicketsNestedInput
  }

  export type SalesTicketsUncheckedUpdateInput = {
    ticketTypeID?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    userid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesTicketsCreateManyInput = {
    id?: string
    ticketTypeID: string
    qrCode: string
    paymentMethod: string
    isUsed?: boolean
    userid: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalesTicketsUpdateManyMutationInput = {
    qrCode?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesTicketsUncheckedUpdateManyInput = {
    ticketTypeID?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    userid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserEventCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutUserEventInput
    event: EventCreateNestedOneWithoutUserEventInput
  }

  export type UserEventUncheckedCreateInput = {
    id?: string
    userId: string
    eventId: string
  }

  export type UserEventUpdateInput = {
    user?: UserUpdateOneRequiredWithoutUserEventNestedInput
    event?: EventUpdateOneRequiredWithoutUserEventNestedInput
  }

  export type UserEventUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
  }

  export type UserEventCreateManyInput = {
    id?: string
    userId: string
    eventId: string
  }

  export type UserEventUpdateManyMutationInput = {

  }

  export type UserEventUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
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
    isSet?: boolean
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
    isSet?: boolean
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type CompanyNullableScalarRelationFilter = {
    is?: CompanyWhereInput | null
    isNot?: CompanyWhereInput | null
  }

  export type SalesTicketsListRelationFilter = {
    every?: SalesTicketsWhereInput
    some?: SalesTicketsWhereInput
    none?: SalesTicketsWhereInput
  }

  export type UserEventListRelationFilter = {
    every?: UserEventWhereInput
    some?: UserEventWhereInput
    none?: UserEventWhereInput
  }

  export type SalesTicketsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    user_type?: SortOrder
    token?: SortOrder
    isVerify?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    user_type?: SortOrder
    token?: SortOrder
    isVerify?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    user_type?: SortOrder
    token?: SortOrder
    isVerify?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    isSet?: boolean
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
    isSet?: boolean
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
    isSet?: boolean
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    nuit_url?: SortOrder
    isVerify?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    nuit_url?: SortOrder
    isVerify?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    nuit_url?: SortOrder
    isVerify?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InviteScannerNullableScalarRelationFilter = {
    is?: InviteScannerWhereInput | null
    isNot?: InviteScannerWhereInput | null
  }

  export type TicketScalarRelationFilter = {
    is?: TicketWhereInput
    isNot?: TicketWhereInput
  }

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    location?: SortOrder
    image?: SortOrder
    event_date?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    status?: SortOrder
    ticketId?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    location?: SortOrder
    image?: SortOrder
    event_date?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    status?: SortOrder
    ticketId?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    location?: SortOrder
    image?: SortOrder
    event_date?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    status?: SortOrder
    ticketId?: SortOrder
    companyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type InviteScannerCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    total_scanner?: SortOrder
    eventID?: SortOrder
    expiresAt?: SortOrder
    acceptedCount?: SortOrder
    createdAt?: SortOrder
  }

  export type InviteScannerAvgOrderByAggregateInput = {
    total_scanner?: SortOrder
    acceptedCount?: SortOrder
  }

  export type InviteScannerMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    total_scanner?: SortOrder
    eventID?: SortOrder
    expiresAt?: SortOrder
    acceptedCount?: SortOrder
    createdAt?: SortOrder
  }

  export type InviteScannerMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    total_scanner?: SortOrder
    eventID?: SortOrder
    expiresAt?: SortOrder
    acceptedCount?: SortOrder
    createdAt?: SortOrder
  }

  export type InviteScannerSumOrderByAggregateInput = {
    total_scanner?: SortOrder
    acceptedCount?: SortOrder
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

  export type TicketTypeListRelationFilter = {
    every?: TicketTypeWhereInput
    some?: TicketTypeWhereInput
    none?: TicketTypeWhereInput
  }

  export type EventNullableScalarRelationFilter = {
    is?: EventWhereInput | null
    isNot?: EventWhereInput | null
  }

  export type TicketTypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type TicketTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    ticketId?: SortOrder
  }

  export type TicketTypeAvgOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
  }

  export type TicketTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    ticketId?: SortOrder
  }

  export type TicketTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    ticketId?: SortOrder
  }

  export type TicketTypeSumOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TicketTypeScalarRelationFilter = {
    is?: TicketTypeWhereInput
    isNot?: TicketTypeWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SalesTicketsCountOrderByAggregateInput = {
    id?: SortOrder
    ticketTypeID?: SortOrder
    qrCode?: SortOrder
    paymentMethod?: SortOrder
    isUsed?: SortOrder
    userid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalesTicketsMaxOrderByAggregateInput = {
    id?: SortOrder
    ticketTypeID?: SortOrder
    qrCode?: SortOrder
    paymentMethod?: SortOrder
    isUsed?: SortOrder
    userid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalesTicketsMinOrderByAggregateInput = {
    id?: SortOrder
    ticketTypeID?: SortOrder
    qrCode?: SortOrder
    paymentMethod?: SortOrder
    isUsed?: SortOrder
    userid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserEventCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
  }

  export type UserEventMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
  }

  export type UserEventMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
  }

  export type CompanyCreateNestedOneWithoutUserInput = {
    create?: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUserInput
    connect?: CompanyWhereUniqueInput
  }

  export type SalesTicketsCreateNestedManyWithoutUserInput = {
    create?: XOR<SalesTicketsCreateWithoutUserInput, SalesTicketsUncheckedCreateWithoutUserInput> | SalesTicketsCreateWithoutUserInput[] | SalesTicketsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SalesTicketsCreateOrConnectWithoutUserInput | SalesTicketsCreateOrConnectWithoutUserInput[]
    createMany?: SalesTicketsCreateManyUserInputEnvelope
    connect?: SalesTicketsWhereUniqueInput | SalesTicketsWhereUniqueInput[]
  }

  export type UserEventCreateNestedManyWithoutUserInput = {
    create?: XOR<UserEventCreateWithoutUserInput, UserEventUncheckedCreateWithoutUserInput> | UserEventCreateWithoutUserInput[] | UserEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserEventCreateOrConnectWithoutUserInput | UserEventCreateOrConnectWithoutUserInput[]
    createMany?: UserEventCreateManyUserInputEnvelope
    connect?: UserEventWhereUniqueInput | UserEventWhereUniqueInput[]
  }

  export type CompanyUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUserInput
    connect?: CompanyWhereUniqueInput
  }

  export type SalesTicketsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SalesTicketsCreateWithoutUserInput, SalesTicketsUncheckedCreateWithoutUserInput> | SalesTicketsCreateWithoutUserInput[] | SalesTicketsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SalesTicketsCreateOrConnectWithoutUserInput | SalesTicketsCreateOrConnectWithoutUserInput[]
    createMany?: SalesTicketsCreateManyUserInputEnvelope
    connect?: SalesTicketsWhereUniqueInput | SalesTicketsWhereUniqueInput[]
  }

  export type UserEventUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserEventCreateWithoutUserInput, UserEventUncheckedCreateWithoutUserInput> | UserEventCreateWithoutUserInput[] | UserEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserEventCreateOrConnectWithoutUserInput | UserEventCreateOrConnectWithoutUserInput[]
    createMany?: UserEventCreateManyUserInputEnvelope
    connect?: UserEventWhereUniqueInput | UserEventWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type CompanyUpdateOneWithoutUserNestedInput = {
    create?: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUserInput
    upsert?: CompanyUpsertWithoutUserInput
    disconnect?: CompanyWhereInput | boolean
    delete?: CompanyWhereInput | boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutUserInput, CompanyUpdateWithoutUserInput>, CompanyUncheckedUpdateWithoutUserInput>
  }

  export type SalesTicketsUpdateManyWithoutUserNestedInput = {
    create?: XOR<SalesTicketsCreateWithoutUserInput, SalesTicketsUncheckedCreateWithoutUserInput> | SalesTicketsCreateWithoutUserInput[] | SalesTicketsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SalesTicketsCreateOrConnectWithoutUserInput | SalesTicketsCreateOrConnectWithoutUserInput[]
    upsert?: SalesTicketsUpsertWithWhereUniqueWithoutUserInput | SalesTicketsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SalesTicketsCreateManyUserInputEnvelope
    set?: SalesTicketsWhereUniqueInput | SalesTicketsWhereUniqueInput[]
    disconnect?: SalesTicketsWhereUniqueInput | SalesTicketsWhereUniqueInput[]
    delete?: SalesTicketsWhereUniqueInput | SalesTicketsWhereUniqueInput[]
    connect?: SalesTicketsWhereUniqueInput | SalesTicketsWhereUniqueInput[]
    update?: SalesTicketsUpdateWithWhereUniqueWithoutUserInput | SalesTicketsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SalesTicketsUpdateManyWithWhereWithoutUserInput | SalesTicketsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SalesTicketsScalarWhereInput | SalesTicketsScalarWhereInput[]
  }

  export type UserEventUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserEventCreateWithoutUserInput, UserEventUncheckedCreateWithoutUserInput> | UserEventCreateWithoutUserInput[] | UserEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserEventCreateOrConnectWithoutUserInput | UserEventCreateOrConnectWithoutUserInput[]
    upsert?: UserEventUpsertWithWhereUniqueWithoutUserInput | UserEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserEventCreateManyUserInputEnvelope
    set?: UserEventWhereUniqueInput | UserEventWhereUniqueInput[]
    disconnect?: UserEventWhereUniqueInput | UserEventWhereUniqueInput[]
    delete?: UserEventWhereUniqueInput | UserEventWhereUniqueInput[]
    connect?: UserEventWhereUniqueInput | UserEventWhereUniqueInput[]
    update?: UserEventUpdateWithWhereUniqueWithoutUserInput | UserEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserEventUpdateManyWithWhereWithoutUserInput | UserEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserEventScalarWhereInput | UserEventScalarWhereInput[]
  }

  export type CompanyUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUserInput
    upsert?: CompanyUpsertWithoutUserInput
    disconnect?: CompanyWhereInput | boolean
    delete?: CompanyWhereInput | boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutUserInput, CompanyUpdateWithoutUserInput>, CompanyUncheckedUpdateWithoutUserInput>
  }

  export type SalesTicketsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SalesTicketsCreateWithoutUserInput, SalesTicketsUncheckedCreateWithoutUserInput> | SalesTicketsCreateWithoutUserInput[] | SalesTicketsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SalesTicketsCreateOrConnectWithoutUserInput | SalesTicketsCreateOrConnectWithoutUserInput[]
    upsert?: SalesTicketsUpsertWithWhereUniqueWithoutUserInput | SalesTicketsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SalesTicketsCreateManyUserInputEnvelope
    set?: SalesTicketsWhereUniqueInput | SalesTicketsWhereUniqueInput[]
    disconnect?: SalesTicketsWhereUniqueInput | SalesTicketsWhereUniqueInput[]
    delete?: SalesTicketsWhereUniqueInput | SalesTicketsWhereUniqueInput[]
    connect?: SalesTicketsWhereUniqueInput | SalesTicketsWhereUniqueInput[]
    update?: SalesTicketsUpdateWithWhereUniqueWithoutUserInput | SalesTicketsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SalesTicketsUpdateManyWithWhereWithoutUserInput | SalesTicketsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SalesTicketsScalarWhereInput | SalesTicketsScalarWhereInput[]
  }

  export type UserEventUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserEventCreateWithoutUserInput, UserEventUncheckedCreateWithoutUserInput> | UserEventCreateWithoutUserInput[] | UserEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserEventCreateOrConnectWithoutUserInput | UserEventCreateOrConnectWithoutUserInput[]
    upsert?: UserEventUpsertWithWhereUniqueWithoutUserInput | UserEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserEventCreateManyUserInputEnvelope
    set?: UserEventWhereUniqueInput | UserEventWhereUniqueInput[]
    disconnect?: UserEventWhereUniqueInput | UserEventWhereUniqueInput[]
    delete?: UserEventWhereUniqueInput | UserEventWhereUniqueInput[]
    connect?: UserEventWhereUniqueInput | UserEventWhereUniqueInput[]
    update?: UserEventUpdateWithWhereUniqueWithoutUserInput | UserEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserEventUpdateManyWithWhereWithoutUserInput | UserEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserEventScalarWhereInput | UserEventScalarWhereInput[]
  }

  export type EventCreateNestedManyWithoutCompanyInput = {
    create?: XOR<EventCreateWithoutCompanyInput, EventUncheckedCreateWithoutCompanyInput> | EventCreateWithoutCompanyInput[] | EventUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCompanyInput | EventCreateOrConnectWithoutCompanyInput[]
    createMany?: EventCreateManyCompanyInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutCompanyInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput
    connect?: UserWhereUniqueInput
  }

  export type EventUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<EventCreateWithoutCompanyInput, EventUncheckedCreateWithoutCompanyInput> | EventCreateWithoutCompanyInput[] | EventUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCompanyInput | EventCreateOrConnectWithoutCompanyInput[]
    createMany?: EventCreateManyCompanyInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<EventCreateWithoutCompanyInput, EventUncheckedCreateWithoutCompanyInput> | EventCreateWithoutCompanyInput[] | EventUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCompanyInput | EventCreateOrConnectWithoutCompanyInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutCompanyInput | EventUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: EventCreateManyCompanyInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutCompanyInput | EventUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: EventUpdateManyWithWhereWithoutCompanyInput | EventUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutCompanyNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput
    upsert?: UserUpsertWithoutCompanyInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCompanyInput, UserUpdateWithoutCompanyInput>, UserUncheckedUpdateWithoutCompanyInput>
  }

  export type EventUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<EventCreateWithoutCompanyInput, EventUncheckedCreateWithoutCompanyInput> | EventCreateWithoutCompanyInput[] | EventUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCompanyInput | EventCreateOrConnectWithoutCompanyInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutCompanyInput | EventUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: EventCreateManyCompanyInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutCompanyInput | EventUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: EventUpdateManyWithWhereWithoutCompanyInput | EventUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type UserEventCreateNestedManyWithoutEventInput = {
    create?: XOR<UserEventCreateWithoutEventInput, UserEventUncheckedCreateWithoutEventInput> | UserEventCreateWithoutEventInput[] | UserEventUncheckedCreateWithoutEventInput[]
    connectOrCreate?: UserEventCreateOrConnectWithoutEventInput | UserEventCreateOrConnectWithoutEventInput[]
    createMany?: UserEventCreateManyEventInputEnvelope
    connect?: UserEventWhereUniqueInput | UserEventWhereUniqueInput[]
  }

  export type InviteScannerCreateNestedOneWithoutEventInput = {
    create?: XOR<InviteScannerCreateWithoutEventInput, InviteScannerUncheckedCreateWithoutEventInput>
    connectOrCreate?: InviteScannerCreateOrConnectWithoutEventInput
    connect?: InviteScannerWhereUniqueInput
  }

  export type TicketCreateNestedOneWithoutEventInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput>
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput
    connect?: TicketWhereUniqueInput
  }

  export type CompanyCreateNestedOneWithoutEventsInput = {
    create?: XOR<CompanyCreateWithoutEventsInput, CompanyUncheckedCreateWithoutEventsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutEventsInput
    connect?: CompanyWhereUniqueInput
  }

  export type UserEventUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<UserEventCreateWithoutEventInput, UserEventUncheckedCreateWithoutEventInput> | UserEventCreateWithoutEventInput[] | UserEventUncheckedCreateWithoutEventInput[]
    connectOrCreate?: UserEventCreateOrConnectWithoutEventInput | UserEventCreateOrConnectWithoutEventInput[]
    createMany?: UserEventCreateManyEventInputEnvelope
    connect?: UserEventWhereUniqueInput | UserEventWhereUniqueInput[]
  }

  export type InviteScannerUncheckedCreateNestedOneWithoutEventInput = {
    create?: XOR<InviteScannerCreateWithoutEventInput, InviteScannerUncheckedCreateWithoutEventInput>
    connectOrCreate?: InviteScannerCreateOrConnectWithoutEventInput
    connect?: InviteScannerWhereUniqueInput
  }

  export type UserEventUpdateManyWithoutEventNestedInput = {
    create?: XOR<UserEventCreateWithoutEventInput, UserEventUncheckedCreateWithoutEventInput> | UserEventCreateWithoutEventInput[] | UserEventUncheckedCreateWithoutEventInput[]
    connectOrCreate?: UserEventCreateOrConnectWithoutEventInput | UserEventCreateOrConnectWithoutEventInput[]
    upsert?: UserEventUpsertWithWhereUniqueWithoutEventInput | UserEventUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: UserEventCreateManyEventInputEnvelope
    set?: UserEventWhereUniqueInput | UserEventWhereUniqueInput[]
    disconnect?: UserEventWhereUniqueInput | UserEventWhereUniqueInput[]
    delete?: UserEventWhereUniqueInput | UserEventWhereUniqueInput[]
    connect?: UserEventWhereUniqueInput | UserEventWhereUniqueInput[]
    update?: UserEventUpdateWithWhereUniqueWithoutEventInput | UserEventUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: UserEventUpdateManyWithWhereWithoutEventInput | UserEventUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: UserEventScalarWhereInput | UserEventScalarWhereInput[]
  }

  export type InviteScannerUpdateOneWithoutEventNestedInput = {
    create?: XOR<InviteScannerCreateWithoutEventInput, InviteScannerUncheckedCreateWithoutEventInput>
    connectOrCreate?: InviteScannerCreateOrConnectWithoutEventInput
    upsert?: InviteScannerUpsertWithoutEventInput
    disconnect?: InviteScannerWhereInput | boolean
    delete?: InviteScannerWhereInput | boolean
    connect?: InviteScannerWhereUniqueInput
    update?: XOR<XOR<InviteScannerUpdateToOneWithWhereWithoutEventInput, InviteScannerUpdateWithoutEventInput>, InviteScannerUncheckedUpdateWithoutEventInput>
  }

  export type TicketUpdateOneRequiredWithoutEventNestedInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput>
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput
    upsert?: TicketUpsertWithoutEventInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutEventInput, TicketUpdateWithoutEventInput>, TicketUncheckedUpdateWithoutEventInput>
  }

  export type CompanyUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<CompanyCreateWithoutEventsInput, CompanyUncheckedCreateWithoutEventsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutEventsInput
    upsert?: CompanyUpsertWithoutEventsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutEventsInput, CompanyUpdateWithoutEventsInput>, CompanyUncheckedUpdateWithoutEventsInput>
  }

  export type UserEventUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<UserEventCreateWithoutEventInput, UserEventUncheckedCreateWithoutEventInput> | UserEventCreateWithoutEventInput[] | UserEventUncheckedCreateWithoutEventInput[]
    connectOrCreate?: UserEventCreateOrConnectWithoutEventInput | UserEventCreateOrConnectWithoutEventInput[]
    upsert?: UserEventUpsertWithWhereUniqueWithoutEventInput | UserEventUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: UserEventCreateManyEventInputEnvelope
    set?: UserEventWhereUniqueInput | UserEventWhereUniqueInput[]
    disconnect?: UserEventWhereUniqueInput | UserEventWhereUniqueInput[]
    delete?: UserEventWhereUniqueInput | UserEventWhereUniqueInput[]
    connect?: UserEventWhereUniqueInput | UserEventWhereUniqueInput[]
    update?: UserEventUpdateWithWhereUniqueWithoutEventInput | UserEventUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: UserEventUpdateManyWithWhereWithoutEventInput | UserEventUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: UserEventScalarWhereInput | UserEventScalarWhereInput[]
  }

  export type InviteScannerUncheckedUpdateOneWithoutEventNestedInput = {
    create?: XOR<InviteScannerCreateWithoutEventInput, InviteScannerUncheckedCreateWithoutEventInput>
    connectOrCreate?: InviteScannerCreateOrConnectWithoutEventInput
    upsert?: InviteScannerUpsertWithoutEventInput
    disconnect?: InviteScannerWhereInput | boolean
    delete?: InviteScannerWhereInput | boolean
    connect?: InviteScannerWhereUniqueInput
    update?: XOR<XOR<InviteScannerUpdateToOneWithWhereWithoutEventInput, InviteScannerUpdateWithoutEventInput>, InviteScannerUncheckedUpdateWithoutEventInput>
  }

  export type EventCreateNestedOneWithoutInviteScannerInput = {
    create?: XOR<EventCreateWithoutInviteScannerInput, EventUncheckedCreateWithoutInviteScannerInput>
    connectOrCreate?: EventCreateOrConnectWithoutInviteScannerInput
    connect?: EventWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EventUpdateOneRequiredWithoutInviteScannerNestedInput = {
    create?: XOR<EventCreateWithoutInviteScannerInput, EventUncheckedCreateWithoutInviteScannerInput>
    connectOrCreate?: EventCreateOrConnectWithoutInviteScannerInput
    upsert?: EventUpsertWithoutInviteScannerInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutInviteScannerInput, EventUpdateWithoutInviteScannerInput>, EventUncheckedUpdateWithoutInviteScannerInput>
  }

  export type TicketTypeCreateNestedManyWithoutTicketInput = {
    create?: XOR<TicketTypeCreateWithoutTicketInput, TicketTypeUncheckedCreateWithoutTicketInput> | TicketTypeCreateWithoutTicketInput[] | TicketTypeUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketTypeCreateOrConnectWithoutTicketInput | TicketTypeCreateOrConnectWithoutTicketInput[]
    createMany?: TicketTypeCreateManyTicketInputEnvelope
    connect?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[]
  }

  export type EventCreateNestedOneWithoutTicketInput = {
    create?: XOR<EventCreateWithoutTicketInput, EventUncheckedCreateWithoutTicketInput>
    connectOrCreate?: EventCreateOrConnectWithoutTicketInput
    connect?: EventWhereUniqueInput
  }

  export type TicketTypeUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<TicketTypeCreateWithoutTicketInput, TicketTypeUncheckedCreateWithoutTicketInput> | TicketTypeCreateWithoutTicketInput[] | TicketTypeUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketTypeCreateOrConnectWithoutTicketInput | TicketTypeCreateOrConnectWithoutTicketInput[]
    createMany?: TicketTypeCreateManyTicketInputEnvelope
    connect?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedOneWithoutTicketInput = {
    create?: XOR<EventCreateWithoutTicketInput, EventUncheckedCreateWithoutTicketInput>
    connectOrCreate?: EventCreateOrConnectWithoutTicketInput
    connect?: EventWhereUniqueInput
  }

  export type TicketTypeUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TicketTypeCreateWithoutTicketInput, TicketTypeUncheckedCreateWithoutTicketInput> | TicketTypeCreateWithoutTicketInput[] | TicketTypeUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketTypeCreateOrConnectWithoutTicketInput | TicketTypeCreateOrConnectWithoutTicketInput[]
    upsert?: TicketTypeUpsertWithWhereUniqueWithoutTicketInput | TicketTypeUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TicketTypeCreateManyTicketInputEnvelope
    set?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[]
    disconnect?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[]
    delete?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[]
    connect?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[]
    update?: TicketTypeUpdateWithWhereUniqueWithoutTicketInput | TicketTypeUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TicketTypeUpdateManyWithWhereWithoutTicketInput | TicketTypeUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TicketTypeScalarWhereInput | TicketTypeScalarWhereInput[]
  }

  export type EventUpdateOneWithoutTicketNestedInput = {
    create?: XOR<EventCreateWithoutTicketInput, EventUncheckedCreateWithoutTicketInput>
    connectOrCreate?: EventCreateOrConnectWithoutTicketInput
    upsert?: EventUpsertWithoutTicketInput
    disconnect?: EventWhereInput | boolean
    delete?: EventWhereInput | boolean
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutTicketInput, EventUpdateWithoutTicketInput>, EventUncheckedUpdateWithoutTicketInput>
  }

  export type TicketTypeUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TicketTypeCreateWithoutTicketInput, TicketTypeUncheckedCreateWithoutTicketInput> | TicketTypeCreateWithoutTicketInput[] | TicketTypeUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketTypeCreateOrConnectWithoutTicketInput | TicketTypeCreateOrConnectWithoutTicketInput[]
    upsert?: TicketTypeUpsertWithWhereUniqueWithoutTicketInput | TicketTypeUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TicketTypeCreateManyTicketInputEnvelope
    set?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[]
    disconnect?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[]
    delete?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[]
    connect?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[]
    update?: TicketTypeUpdateWithWhereUniqueWithoutTicketInput | TicketTypeUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TicketTypeUpdateManyWithWhereWithoutTicketInput | TicketTypeUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TicketTypeScalarWhereInput | TicketTypeScalarWhereInput[]
  }

  export type EventUncheckedUpdateOneWithoutTicketNestedInput = {
    create?: XOR<EventCreateWithoutTicketInput, EventUncheckedCreateWithoutTicketInput>
    connectOrCreate?: EventCreateOrConnectWithoutTicketInput
    upsert?: EventUpsertWithoutTicketInput
    disconnect?: EventWhereInput | boolean
    delete?: EventWhereInput | boolean
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutTicketInput, EventUpdateWithoutTicketInput>, EventUncheckedUpdateWithoutTicketInput>
  }

  export type SalesTicketsCreateNestedManyWithoutTiketTypeInput = {
    create?: XOR<SalesTicketsCreateWithoutTiketTypeInput, SalesTicketsUncheckedCreateWithoutTiketTypeInput> | SalesTicketsCreateWithoutTiketTypeInput[] | SalesTicketsUncheckedCreateWithoutTiketTypeInput[]
    connectOrCreate?: SalesTicketsCreateOrConnectWithoutTiketTypeInput | SalesTicketsCreateOrConnectWithoutTiketTypeInput[]
    createMany?: SalesTicketsCreateManyTiketTypeInputEnvelope
    connect?: SalesTicketsWhereUniqueInput | SalesTicketsWhereUniqueInput[]
  }

  export type TicketCreateNestedOneWithoutTicketTypeInput = {
    create?: XOR<TicketCreateWithoutTicketTypeInput, TicketUncheckedCreateWithoutTicketTypeInput>
    connectOrCreate?: TicketCreateOrConnectWithoutTicketTypeInput
    connect?: TicketWhereUniqueInput
  }

  export type SalesTicketsUncheckedCreateNestedManyWithoutTiketTypeInput = {
    create?: XOR<SalesTicketsCreateWithoutTiketTypeInput, SalesTicketsUncheckedCreateWithoutTiketTypeInput> | SalesTicketsCreateWithoutTiketTypeInput[] | SalesTicketsUncheckedCreateWithoutTiketTypeInput[]
    connectOrCreate?: SalesTicketsCreateOrConnectWithoutTiketTypeInput | SalesTicketsCreateOrConnectWithoutTiketTypeInput[]
    createMany?: SalesTicketsCreateManyTiketTypeInputEnvelope
    connect?: SalesTicketsWhereUniqueInput | SalesTicketsWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SalesTicketsUpdateManyWithoutTiketTypeNestedInput = {
    create?: XOR<SalesTicketsCreateWithoutTiketTypeInput, SalesTicketsUncheckedCreateWithoutTiketTypeInput> | SalesTicketsCreateWithoutTiketTypeInput[] | SalesTicketsUncheckedCreateWithoutTiketTypeInput[]
    connectOrCreate?: SalesTicketsCreateOrConnectWithoutTiketTypeInput | SalesTicketsCreateOrConnectWithoutTiketTypeInput[]
    upsert?: SalesTicketsUpsertWithWhereUniqueWithoutTiketTypeInput | SalesTicketsUpsertWithWhereUniqueWithoutTiketTypeInput[]
    createMany?: SalesTicketsCreateManyTiketTypeInputEnvelope
    set?: SalesTicketsWhereUniqueInput | SalesTicketsWhereUniqueInput[]
    disconnect?: SalesTicketsWhereUniqueInput | SalesTicketsWhereUniqueInput[]
    delete?: SalesTicketsWhereUniqueInput | SalesTicketsWhereUniqueInput[]
    connect?: SalesTicketsWhereUniqueInput | SalesTicketsWhereUniqueInput[]
    update?: SalesTicketsUpdateWithWhereUniqueWithoutTiketTypeInput | SalesTicketsUpdateWithWhereUniqueWithoutTiketTypeInput[]
    updateMany?: SalesTicketsUpdateManyWithWhereWithoutTiketTypeInput | SalesTicketsUpdateManyWithWhereWithoutTiketTypeInput[]
    deleteMany?: SalesTicketsScalarWhereInput | SalesTicketsScalarWhereInput[]
  }

  export type TicketUpdateOneRequiredWithoutTicketTypeNestedInput = {
    create?: XOR<TicketCreateWithoutTicketTypeInput, TicketUncheckedCreateWithoutTicketTypeInput>
    connectOrCreate?: TicketCreateOrConnectWithoutTicketTypeInput
    upsert?: TicketUpsertWithoutTicketTypeInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutTicketTypeInput, TicketUpdateWithoutTicketTypeInput>, TicketUncheckedUpdateWithoutTicketTypeInput>
  }

  export type SalesTicketsUncheckedUpdateManyWithoutTiketTypeNestedInput = {
    create?: XOR<SalesTicketsCreateWithoutTiketTypeInput, SalesTicketsUncheckedCreateWithoutTiketTypeInput> | SalesTicketsCreateWithoutTiketTypeInput[] | SalesTicketsUncheckedCreateWithoutTiketTypeInput[]
    connectOrCreate?: SalesTicketsCreateOrConnectWithoutTiketTypeInput | SalesTicketsCreateOrConnectWithoutTiketTypeInput[]
    upsert?: SalesTicketsUpsertWithWhereUniqueWithoutTiketTypeInput | SalesTicketsUpsertWithWhereUniqueWithoutTiketTypeInput[]
    createMany?: SalesTicketsCreateManyTiketTypeInputEnvelope
    set?: SalesTicketsWhereUniqueInput | SalesTicketsWhereUniqueInput[]
    disconnect?: SalesTicketsWhereUniqueInput | SalesTicketsWhereUniqueInput[]
    delete?: SalesTicketsWhereUniqueInput | SalesTicketsWhereUniqueInput[]
    connect?: SalesTicketsWhereUniqueInput | SalesTicketsWhereUniqueInput[]
    update?: SalesTicketsUpdateWithWhereUniqueWithoutTiketTypeInput | SalesTicketsUpdateWithWhereUniqueWithoutTiketTypeInput[]
    updateMany?: SalesTicketsUpdateManyWithWhereWithoutTiketTypeInput | SalesTicketsUpdateManyWithWhereWithoutTiketTypeInput[]
    deleteMany?: SalesTicketsScalarWhereInput | SalesTicketsScalarWhereInput[]
  }

  export type TicketTypeCreateNestedOneWithoutSalesTicketsInput = {
    create?: XOR<TicketTypeCreateWithoutSalesTicketsInput, TicketTypeUncheckedCreateWithoutSalesTicketsInput>
    connectOrCreate?: TicketTypeCreateOrConnectWithoutSalesTicketsInput
    connect?: TicketTypeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSalesTicketsInput = {
    create?: XOR<UserCreateWithoutSalesTicketsInput, UserUncheckedCreateWithoutSalesTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSalesTicketsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TicketTypeUpdateOneRequiredWithoutSalesTicketsNestedInput = {
    create?: XOR<TicketTypeCreateWithoutSalesTicketsInput, TicketTypeUncheckedCreateWithoutSalesTicketsInput>
    connectOrCreate?: TicketTypeCreateOrConnectWithoutSalesTicketsInput
    upsert?: TicketTypeUpsertWithoutSalesTicketsInput
    connect?: TicketTypeWhereUniqueInput
    update?: XOR<XOR<TicketTypeUpdateToOneWithWhereWithoutSalesTicketsInput, TicketTypeUpdateWithoutSalesTicketsInput>, TicketTypeUncheckedUpdateWithoutSalesTicketsInput>
  }

  export type UserUpdateOneWithoutSalesTicketsNestedInput = {
    create?: XOR<UserCreateWithoutSalesTicketsInput, UserUncheckedCreateWithoutSalesTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSalesTicketsInput
    upsert?: UserUpsertWithoutSalesTicketsInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSalesTicketsInput, UserUpdateWithoutSalesTicketsInput>, UserUncheckedUpdateWithoutSalesTicketsInput>
  }

  export type UserCreateNestedOneWithoutUserEventInput = {
    create?: XOR<UserCreateWithoutUserEventInput, UserUncheckedCreateWithoutUserEventInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserEventInput
    connect?: UserWhereUniqueInput
  }

  export type EventCreateNestedOneWithoutUserEventInput = {
    create?: XOR<EventCreateWithoutUserEventInput, EventUncheckedCreateWithoutUserEventInput>
    connectOrCreate?: EventCreateOrConnectWithoutUserEventInput
    connect?: EventWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserEventNestedInput = {
    create?: XOR<UserCreateWithoutUserEventInput, UserUncheckedCreateWithoutUserEventInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserEventInput
    upsert?: UserUpsertWithoutUserEventInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserEventInput, UserUpdateWithoutUserEventInput>, UserUncheckedUpdateWithoutUserEventInput>
  }

  export type EventUpdateOneRequiredWithoutUserEventNestedInput = {
    create?: XOR<EventCreateWithoutUserEventInput, EventUncheckedCreateWithoutUserEventInput>
    connectOrCreate?: EventCreateOrConnectWithoutUserEventInput
    upsert?: EventUpsertWithoutUserEventInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutUserEventInput, EventUpdateWithoutUserEventInput>, EventUncheckedUpdateWithoutUserEventInput>
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
    isSet?: boolean
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
    isSet?: boolean
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
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
    isSet?: boolean
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
    isSet?: boolean
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
    isSet?: boolean
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
    isSet?: boolean
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

  export type CompanyCreateWithoutUserInput = {
    id?: string
    name: string
    email: string
    phone_number: string
    nuit_url?: string | null
    isVerify?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    events?: EventCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    email: string
    phone_number: string
    nuit_url?: string | null
    isVerify?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    events?: EventUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutUserInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput>
  }

  export type SalesTicketsCreateWithoutUserInput = {
    id?: string
    qrCode: string
    paymentMethod: string
    isUsed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tiketType: TicketTypeCreateNestedOneWithoutSalesTicketsInput
  }

  export type SalesTicketsUncheckedCreateWithoutUserInput = {
    id?: string
    ticketTypeID: string
    qrCode: string
    paymentMethod: string
    isUsed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalesTicketsCreateOrConnectWithoutUserInput = {
    where: SalesTicketsWhereUniqueInput
    create: XOR<SalesTicketsCreateWithoutUserInput, SalesTicketsUncheckedCreateWithoutUserInput>
  }

  export type SalesTicketsCreateManyUserInputEnvelope = {
    data: SalesTicketsCreateManyUserInput | SalesTicketsCreateManyUserInput[]
  }

  export type UserEventCreateWithoutUserInput = {
    id?: string
    event: EventCreateNestedOneWithoutUserEventInput
  }

  export type UserEventUncheckedCreateWithoutUserInput = {
    id?: string
    eventId: string
  }

  export type UserEventCreateOrConnectWithoutUserInput = {
    where: UserEventWhereUniqueInput
    create: XOR<UserEventCreateWithoutUserInput, UserEventUncheckedCreateWithoutUserInput>
  }

  export type UserEventCreateManyUserInputEnvelope = {
    data: UserEventCreateManyUserInput | UserEventCreateManyUserInput[]
  }

  export type CompanyUpsertWithoutUserInput = {
    update: XOR<CompanyUpdateWithoutUserInput, CompanyUncheckedUpdateWithoutUserInput>
    create: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutUserInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutUserInput, CompanyUncheckedUpdateWithoutUserInput>
  }

  export type CompanyUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    nuit_url?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    events?: EventUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    nuit_url?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    events?: EventUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type SalesTicketsUpsertWithWhereUniqueWithoutUserInput = {
    where: SalesTicketsWhereUniqueInput
    update: XOR<SalesTicketsUpdateWithoutUserInput, SalesTicketsUncheckedUpdateWithoutUserInput>
    create: XOR<SalesTicketsCreateWithoutUserInput, SalesTicketsUncheckedCreateWithoutUserInput>
  }

  export type SalesTicketsUpdateWithWhereUniqueWithoutUserInput = {
    where: SalesTicketsWhereUniqueInput
    data: XOR<SalesTicketsUpdateWithoutUserInput, SalesTicketsUncheckedUpdateWithoutUserInput>
  }

  export type SalesTicketsUpdateManyWithWhereWithoutUserInput = {
    where: SalesTicketsScalarWhereInput
    data: XOR<SalesTicketsUpdateManyMutationInput, SalesTicketsUncheckedUpdateManyWithoutUserInput>
  }

  export type SalesTicketsScalarWhereInput = {
    AND?: SalesTicketsScalarWhereInput | SalesTicketsScalarWhereInput[]
    OR?: SalesTicketsScalarWhereInput[]
    NOT?: SalesTicketsScalarWhereInput | SalesTicketsScalarWhereInput[]
    id?: StringFilter<"SalesTickets"> | string
    ticketTypeID?: StringFilter<"SalesTickets"> | string
    qrCode?: StringFilter<"SalesTickets"> | string
    paymentMethod?: StringFilter<"SalesTickets"> | string
    isUsed?: BoolFilter<"SalesTickets"> | boolean
    userid?: StringFilter<"SalesTickets"> | string
    createdAt?: DateTimeFilter<"SalesTickets"> | Date | string
    updatedAt?: DateTimeFilter<"SalesTickets"> | Date | string
  }

  export type UserEventUpsertWithWhereUniqueWithoutUserInput = {
    where: UserEventWhereUniqueInput
    update: XOR<UserEventUpdateWithoutUserInput, UserEventUncheckedUpdateWithoutUserInput>
    create: XOR<UserEventCreateWithoutUserInput, UserEventUncheckedCreateWithoutUserInput>
  }

  export type UserEventUpdateWithWhereUniqueWithoutUserInput = {
    where: UserEventWhereUniqueInput
    data: XOR<UserEventUpdateWithoutUserInput, UserEventUncheckedUpdateWithoutUserInput>
  }

  export type UserEventUpdateManyWithWhereWithoutUserInput = {
    where: UserEventScalarWhereInput
    data: XOR<UserEventUpdateManyMutationInput, UserEventUncheckedUpdateManyWithoutUserInput>
  }

  export type UserEventScalarWhereInput = {
    AND?: UserEventScalarWhereInput | UserEventScalarWhereInput[]
    OR?: UserEventScalarWhereInput[]
    NOT?: UserEventScalarWhereInput | UserEventScalarWhereInput[]
    id?: StringFilter<"UserEvent"> | string
    userId?: StringFilter<"UserEvent"> | string
    eventId?: StringFilter<"UserEvent"> | string
  }

  export type EventCreateWithoutCompanyInput = {
    id?: string
    title: string
    description: string
    category: string
    location: string
    image: string
    event_date: string
    start_time: string
    end_time: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    userEvent?: UserEventCreateNestedManyWithoutEventInput
    inviteScanner?: InviteScannerCreateNestedOneWithoutEventInput
    ticket: TicketCreateNestedOneWithoutEventInput
  }

  export type EventUncheckedCreateWithoutCompanyInput = {
    id?: string
    title: string
    description: string
    category: string
    location: string
    image: string
    event_date: string
    start_time: string
    end_time: string
    status?: string
    ticketId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    userEvent?: UserEventUncheckedCreateNestedManyWithoutEventInput
    inviteScanner?: InviteScannerUncheckedCreateNestedOneWithoutEventInput
  }

  export type EventCreateOrConnectWithoutCompanyInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutCompanyInput, EventUncheckedCreateWithoutCompanyInput>
  }

  export type EventCreateManyCompanyInputEnvelope = {
    data: EventCreateManyCompanyInput | EventCreateManyCompanyInput[]
  }

  export type UserCreateWithoutCompanyInput = {
    id?: string
    name: string
    email: string
    password: string
    user_type: string
    token?: string | null
    isVerify?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    SalesTickets?: SalesTicketsCreateNestedManyWithoutUserInput
    UserEvent?: UserEventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCompanyInput = {
    id?: string
    name: string
    email: string
    password: string
    user_type: string
    token?: string | null
    isVerify?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    SalesTickets?: SalesTicketsUncheckedCreateNestedManyWithoutUserInput
    UserEvent?: UserEventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCompanyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type EventUpsertWithWhereUniqueWithoutCompanyInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutCompanyInput, EventUncheckedUpdateWithoutCompanyInput>
    create: XOR<EventCreateWithoutCompanyInput, EventUncheckedCreateWithoutCompanyInput>
  }

  export type EventUpdateWithWhereUniqueWithoutCompanyInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutCompanyInput, EventUncheckedUpdateWithoutCompanyInput>
  }

  export type EventUpdateManyWithWhereWithoutCompanyInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutCompanyInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    category?: StringFilter<"Event"> | string
    location?: StringFilter<"Event"> | string
    image?: StringFilter<"Event"> | string
    event_date?: StringFilter<"Event"> | string
    start_time?: StringFilter<"Event"> | string
    end_time?: StringFilter<"Event"> | string
    status?: StringFilter<"Event"> | string
    ticketId?: StringFilter<"Event"> | string
    companyId?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Event"> | Date | string | null
  }

  export type UserUpsertWithoutCompanyInput = {
    update: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCompanyInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
  }

  export type UserUpdateWithoutCompanyInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SalesTickets?: SalesTicketsUpdateManyWithoutUserNestedInput
    UserEvent?: UserEventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCompanyInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SalesTickets?: SalesTicketsUncheckedUpdateManyWithoutUserNestedInput
    UserEvent?: UserEventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserEventCreateWithoutEventInput = {
    id?: string
    user: UserCreateNestedOneWithoutUserEventInput
  }

  export type UserEventUncheckedCreateWithoutEventInput = {
    id?: string
    userId: string
  }

  export type UserEventCreateOrConnectWithoutEventInput = {
    where: UserEventWhereUniqueInput
    create: XOR<UserEventCreateWithoutEventInput, UserEventUncheckedCreateWithoutEventInput>
  }

  export type UserEventCreateManyEventInputEnvelope = {
    data: UserEventCreateManyEventInput | UserEventCreateManyEventInput[]
  }

  export type InviteScannerCreateWithoutEventInput = {
    id?: string
    token: string
    total_scanner: number
    expiresAt: Date | string
    acceptedCount?: number
    createdAt?: Date | string
  }

  export type InviteScannerUncheckedCreateWithoutEventInput = {
    id?: string
    token: string
    total_scanner: number
    expiresAt: Date | string
    acceptedCount?: number
    createdAt?: Date | string
  }

  export type InviteScannerCreateOrConnectWithoutEventInput = {
    where: InviteScannerWhereUniqueInput
    create: XOR<InviteScannerCreateWithoutEventInput, InviteScannerUncheckedCreateWithoutEventInput>
  }

  export type TicketCreateWithoutEventInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    ticketType?: TicketTypeCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutEventInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    ticketType?: TicketTypeUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutEventInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput>
  }

  export type CompanyCreateWithoutEventsInput = {
    id?: string
    name: string
    email: string
    phone_number: string
    nuit_url?: string | null
    isVerify?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    user: UserCreateNestedOneWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutEventsInput = {
    id?: string
    name: string
    email: string
    phone_number: string
    nuit_url?: string | null
    isVerify?: boolean | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type CompanyCreateOrConnectWithoutEventsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutEventsInput, CompanyUncheckedCreateWithoutEventsInput>
  }

  export type UserEventUpsertWithWhereUniqueWithoutEventInput = {
    where: UserEventWhereUniqueInput
    update: XOR<UserEventUpdateWithoutEventInput, UserEventUncheckedUpdateWithoutEventInput>
    create: XOR<UserEventCreateWithoutEventInput, UserEventUncheckedCreateWithoutEventInput>
  }

  export type UserEventUpdateWithWhereUniqueWithoutEventInput = {
    where: UserEventWhereUniqueInput
    data: XOR<UserEventUpdateWithoutEventInput, UserEventUncheckedUpdateWithoutEventInput>
  }

  export type UserEventUpdateManyWithWhereWithoutEventInput = {
    where: UserEventScalarWhereInput
    data: XOR<UserEventUpdateManyMutationInput, UserEventUncheckedUpdateManyWithoutEventInput>
  }

  export type InviteScannerUpsertWithoutEventInput = {
    update: XOR<InviteScannerUpdateWithoutEventInput, InviteScannerUncheckedUpdateWithoutEventInput>
    create: XOR<InviteScannerCreateWithoutEventInput, InviteScannerUncheckedCreateWithoutEventInput>
    where?: InviteScannerWhereInput
  }

  export type InviteScannerUpdateToOneWithWhereWithoutEventInput = {
    where?: InviteScannerWhereInput
    data: XOR<InviteScannerUpdateWithoutEventInput, InviteScannerUncheckedUpdateWithoutEventInput>
  }

  export type InviteScannerUpdateWithoutEventInput = {
    token?: StringFieldUpdateOperationsInput | string
    total_scanner?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InviteScannerUncheckedUpdateWithoutEventInput = {
    token?: StringFieldUpdateOperationsInput | string
    total_scanner?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUpsertWithoutEventInput = {
    update: XOR<TicketUpdateWithoutEventInput, TicketUncheckedUpdateWithoutEventInput>
    create: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutEventInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutEventInput, TicketUncheckedUpdateWithoutEventInput>
  }

  export type TicketUpdateWithoutEventInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticketType?: TicketTypeUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutEventInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticketType?: TicketTypeUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type CompanyUpsertWithoutEventsInput = {
    update: XOR<CompanyUpdateWithoutEventsInput, CompanyUncheckedUpdateWithoutEventsInput>
    create: XOR<CompanyCreateWithoutEventsInput, CompanyUncheckedCreateWithoutEventsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutEventsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutEventsInput, CompanyUncheckedUpdateWithoutEventsInput>
  }

  export type CompanyUpdateWithoutEventsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    nuit_url?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutEventsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    nuit_url?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventCreateWithoutInviteScannerInput = {
    id?: string
    title: string
    description: string
    category: string
    location: string
    image: string
    event_date: string
    start_time: string
    end_time: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    userEvent?: UserEventCreateNestedManyWithoutEventInput
    ticket: TicketCreateNestedOneWithoutEventInput
    company: CompanyCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateWithoutInviteScannerInput = {
    id?: string
    title: string
    description: string
    category: string
    location: string
    image: string
    event_date: string
    start_time: string
    end_time: string
    status?: string
    ticketId: string
    companyId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    userEvent?: UserEventUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutInviteScannerInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutInviteScannerInput, EventUncheckedCreateWithoutInviteScannerInput>
  }

  export type EventUpsertWithoutInviteScannerInput = {
    update: XOR<EventUpdateWithoutInviteScannerInput, EventUncheckedUpdateWithoutInviteScannerInput>
    create: XOR<EventCreateWithoutInviteScannerInput, EventUncheckedCreateWithoutInviteScannerInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutInviteScannerInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutInviteScannerInput, EventUncheckedUpdateWithoutInviteScannerInput>
  }

  export type EventUpdateWithoutInviteScannerInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    event_date?: StringFieldUpdateOperationsInput | string
    start_time?: StringFieldUpdateOperationsInput | string
    end_time?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userEvent?: UserEventUpdateManyWithoutEventNestedInput
    ticket?: TicketUpdateOneRequiredWithoutEventNestedInput
    company?: CompanyUpdateOneRequiredWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutInviteScannerInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    event_date?: StringFieldUpdateOperationsInput | string
    start_time?: StringFieldUpdateOperationsInput | string
    end_time?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userEvent?: UserEventUncheckedUpdateManyWithoutEventNestedInput
  }

  export type TicketTypeCreateWithoutTicketInput = {
    id?: string
    name: string
    quantity: number
    price: number
    SalesTickets?: SalesTicketsCreateNestedManyWithoutTiketTypeInput
  }

  export type TicketTypeUncheckedCreateWithoutTicketInput = {
    id?: string
    name: string
    quantity: number
    price: number
    SalesTickets?: SalesTicketsUncheckedCreateNestedManyWithoutTiketTypeInput
  }

  export type TicketTypeCreateOrConnectWithoutTicketInput = {
    where: TicketTypeWhereUniqueInput
    create: XOR<TicketTypeCreateWithoutTicketInput, TicketTypeUncheckedCreateWithoutTicketInput>
  }

  export type TicketTypeCreateManyTicketInputEnvelope = {
    data: TicketTypeCreateManyTicketInput | TicketTypeCreateManyTicketInput[]
  }

  export type EventCreateWithoutTicketInput = {
    id?: string
    title: string
    description: string
    category: string
    location: string
    image: string
    event_date: string
    start_time: string
    end_time: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    userEvent?: UserEventCreateNestedManyWithoutEventInput
    inviteScanner?: InviteScannerCreateNestedOneWithoutEventInput
    company: CompanyCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateWithoutTicketInput = {
    id?: string
    title: string
    description: string
    category: string
    location: string
    image: string
    event_date: string
    start_time: string
    end_time: string
    status?: string
    companyId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    userEvent?: UserEventUncheckedCreateNestedManyWithoutEventInput
    inviteScanner?: InviteScannerUncheckedCreateNestedOneWithoutEventInput
  }

  export type EventCreateOrConnectWithoutTicketInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutTicketInput, EventUncheckedCreateWithoutTicketInput>
  }

  export type TicketTypeUpsertWithWhereUniqueWithoutTicketInput = {
    where: TicketTypeWhereUniqueInput
    update: XOR<TicketTypeUpdateWithoutTicketInput, TicketTypeUncheckedUpdateWithoutTicketInput>
    create: XOR<TicketTypeCreateWithoutTicketInput, TicketTypeUncheckedCreateWithoutTicketInput>
  }

  export type TicketTypeUpdateWithWhereUniqueWithoutTicketInput = {
    where: TicketTypeWhereUniqueInput
    data: XOR<TicketTypeUpdateWithoutTicketInput, TicketTypeUncheckedUpdateWithoutTicketInput>
  }

  export type TicketTypeUpdateManyWithWhereWithoutTicketInput = {
    where: TicketTypeScalarWhereInput
    data: XOR<TicketTypeUpdateManyMutationInput, TicketTypeUncheckedUpdateManyWithoutTicketInput>
  }

  export type TicketTypeScalarWhereInput = {
    AND?: TicketTypeScalarWhereInput | TicketTypeScalarWhereInput[]
    OR?: TicketTypeScalarWhereInput[]
    NOT?: TicketTypeScalarWhereInput | TicketTypeScalarWhereInput[]
    id?: StringFilter<"TicketType"> | string
    name?: StringFilter<"TicketType"> | string
    quantity?: IntFilter<"TicketType"> | number
    price?: FloatFilter<"TicketType"> | number
    ticketId?: StringFilter<"TicketType"> | string
  }

  export type EventUpsertWithoutTicketInput = {
    update: XOR<EventUpdateWithoutTicketInput, EventUncheckedUpdateWithoutTicketInput>
    create: XOR<EventCreateWithoutTicketInput, EventUncheckedCreateWithoutTicketInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutTicketInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutTicketInput, EventUncheckedUpdateWithoutTicketInput>
  }

  export type EventUpdateWithoutTicketInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    event_date?: StringFieldUpdateOperationsInput | string
    start_time?: StringFieldUpdateOperationsInput | string
    end_time?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userEvent?: UserEventUpdateManyWithoutEventNestedInput
    inviteScanner?: InviteScannerUpdateOneWithoutEventNestedInput
    company?: CompanyUpdateOneRequiredWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutTicketInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    event_date?: StringFieldUpdateOperationsInput | string
    start_time?: StringFieldUpdateOperationsInput | string
    end_time?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userEvent?: UserEventUncheckedUpdateManyWithoutEventNestedInput
    inviteScanner?: InviteScannerUncheckedUpdateOneWithoutEventNestedInput
  }

  export type SalesTicketsCreateWithoutTiketTypeInput = {
    id?: string
    qrCode: string
    paymentMethod: string
    isUsed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutSalesTicketsInput
  }

  export type SalesTicketsUncheckedCreateWithoutTiketTypeInput = {
    id?: string
    qrCode: string
    paymentMethod: string
    isUsed?: boolean
    userid: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalesTicketsCreateOrConnectWithoutTiketTypeInput = {
    where: SalesTicketsWhereUniqueInput
    create: XOR<SalesTicketsCreateWithoutTiketTypeInput, SalesTicketsUncheckedCreateWithoutTiketTypeInput>
  }

  export type SalesTicketsCreateManyTiketTypeInputEnvelope = {
    data: SalesTicketsCreateManyTiketTypeInput | SalesTicketsCreateManyTiketTypeInput[]
  }

  export type TicketCreateWithoutTicketTypeInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    event?: EventCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutTicketTypeInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    event?: EventUncheckedCreateNestedOneWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutTicketTypeInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutTicketTypeInput, TicketUncheckedCreateWithoutTicketTypeInput>
  }

  export type SalesTicketsUpsertWithWhereUniqueWithoutTiketTypeInput = {
    where: SalesTicketsWhereUniqueInput
    update: XOR<SalesTicketsUpdateWithoutTiketTypeInput, SalesTicketsUncheckedUpdateWithoutTiketTypeInput>
    create: XOR<SalesTicketsCreateWithoutTiketTypeInput, SalesTicketsUncheckedCreateWithoutTiketTypeInput>
  }

  export type SalesTicketsUpdateWithWhereUniqueWithoutTiketTypeInput = {
    where: SalesTicketsWhereUniqueInput
    data: XOR<SalesTicketsUpdateWithoutTiketTypeInput, SalesTicketsUncheckedUpdateWithoutTiketTypeInput>
  }

  export type SalesTicketsUpdateManyWithWhereWithoutTiketTypeInput = {
    where: SalesTicketsScalarWhereInput
    data: XOR<SalesTicketsUpdateManyMutationInput, SalesTicketsUncheckedUpdateManyWithoutTiketTypeInput>
  }

  export type TicketUpsertWithoutTicketTypeInput = {
    update: XOR<TicketUpdateWithoutTicketTypeInput, TicketUncheckedUpdateWithoutTicketTypeInput>
    create: XOR<TicketCreateWithoutTicketTypeInput, TicketUncheckedCreateWithoutTicketTypeInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutTicketTypeInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutTicketTypeInput, TicketUncheckedUpdateWithoutTicketTypeInput>
  }

  export type TicketUpdateWithoutTicketTypeInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event?: EventUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutTicketTypeInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event?: EventUncheckedUpdateOneWithoutTicketNestedInput
  }

  export type TicketTypeCreateWithoutSalesTicketsInput = {
    id?: string
    name: string
    quantity: number
    price: number
    ticket: TicketCreateNestedOneWithoutTicketTypeInput
  }

  export type TicketTypeUncheckedCreateWithoutSalesTicketsInput = {
    id?: string
    name: string
    quantity: number
    price: number
    ticketId: string
  }

  export type TicketTypeCreateOrConnectWithoutSalesTicketsInput = {
    where: TicketTypeWhereUniqueInput
    create: XOR<TicketTypeCreateWithoutSalesTicketsInput, TicketTypeUncheckedCreateWithoutSalesTicketsInput>
  }

  export type UserCreateWithoutSalesTicketsInput = {
    id?: string
    name: string
    email: string
    password: string
    user_type: string
    token?: string | null
    isVerify?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    company?: CompanyCreateNestedOneWithoutUserInput
    UserEvent?: UserEventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSalesTicketsInput = {
    id?: string
    name: string
    email: string
    password: string
    user_type: string
    token?: string | null
    isVerify?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    company?: CompanyUncheckedCreateNestedOneWithoutUserInput
    UserEvent?: UserEventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSalesTicketsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSalesTicketsInput, UserUncheckedCreateWithoutSalesTicketsInput>
  }

  export type TicketTypeUpsertWithoutSalesTicketsInput = {
    update: XOR<TicketTypeUpdateWithoutSalesTicketsInput, TicketTypeUncheckedUpdateWithoutSalesTicketsInput>
    create: XOR<TicketTypeCreateWithoutSalesTicketsInput, TicketTypeUncheckedCreateWithoutSalesTicketsInput>
    where?: TicketTypeWhereInput
  }

  export type TicketTypeUpdateToOneWithWhereWithoutSalesTicketsInput = {
    where?: TicketTypeWhereInput
    data: XOR<TicketTypeUpdateWithoutSalesTicketsInput, TicketTypeUncheckedUpdateWithoutSalesTicketsInput>
  }

  export type TicketTypeUpdateWithoutSalesTicketsInput = {
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    ticket?: TicketUpdateOneRequiredWithoutTicketTypeNestedInput
  }

  export type TicketTypeUncheckedUpdateWithoutSalesTicketsInput = {
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    ticketId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutSalesTicketsInput = {
    update: XOR<UserUpdateWithoutSalesTicketsInput, UserUncheckedUpdateWithoutSalesTicketsInput>
    create: XOR<UserCreateWithoutSalesTicketsInput, UserUncheckedCreateWithoutSalesTicketsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSalesTicketsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSalesTicketsInput, UserUncheckedUpdateWithoutSalesTicketsInput>
  }

  export type UserUpdateWithoutSalesTicketsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company?: CompanyUpdateOneWithoutUserNestedInput
    UserEvent?: UserEventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSalesTicketsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company?: CompanyUncheckedUpdateOneWithoutUserNestedInput
    UserEvent?: UserEventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutUserEventInput = {
    id?: string
    name: string
    email: string
    password: string
    user_type: string
    token?: string | null
    isVerify?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    company?: CompanyCreateNestedOneWithoutUserInput
    SalesTickets?: SalesTicketsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserEventInput = {
    id?: string
    name: string
    email: string
    password: string
    user_type: string
    token?: string | null
    isVerify?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    company?: CompanyUncheckedCreateNestedOneWithoutUserInput
    SalesTickets?: SalesTicketsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserEventInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserEventInput, UserUncheckedCreateWithoutUserEventInput>
  }

  export type EventCreateWithoutUserEventInput = {
    id?: string
    title: string
    description: string
    category: string
    location: string
    image: string
    event_date: string
    start_time: string
    end_time: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    inviteScanner?: InviteScannerCreateNestedOneWithoutEventInput
    ticket: TicketCreateNestedOneWithoutEventInput
    company: CompanyCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateWithoutUserEventInput = {
    id?: string
    title: string
    description: string
    category: string
    location: string
    image: string
    event_date: string
    start_time: string
    end_time: string
    status?: string
    ticketId: string
    companyId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    inviteScanner?: InviteScannerUncheckedCreateNestedOneWithoutEventInput
  }

  export type EventCreateOrConnectWithoutUserEventInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutUserEventInput, EventUncheckedCreateWithoutUserEventInput>
  }

  export type UserUpsertWithoutUserEventInput = {
    update: XOR<UserUpdateWithoutUserEventInput, UserUncheckedUpdateWithoutUserEventInput>
    create: XOR<UserCreateWithoutUserEventInput, UserUncheckedCreateWithoutUserEventInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserEventInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserEventInput, UserUncheckedUpdateWithoutUserEventInput>
  }

  export type UserUpdateWithoutUserEventInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company?: CompanyUpdateOneWithoutUserNestedInput
    SalesTickets?: SalesTicketsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserEventInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    isVerify?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company?: CompanyUncheckedUpdateOneWithoutUserNestedInput
    SalesTickets?: SalesTicketsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EventUpsertWithoutUserEventInput = {
    update: XOR<EventUpdateWithoutUserEventInput, EventUncheckedUpdateWithoutUserEventInput>
    create: XOR<EventCreateWithoutUserEventInput, EventUncheckedCreateWithoutUserEventInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutUserEventInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutUserEventInput, EventUncheckedUpdateWithoutUserEventInput>
  }

  export type EventUpdateWithoutUserEventInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    event_date?: StringFieldUpdateOperationsInput | string
    start_time?: StringFieldUpdateOperationsInput | string
    end_time?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inviteScanner?: InviteScannerUpdateOneWithoutEventNestedInput
    ticket?: TicketUpdateOneRequiredWithoutEventNestedInput
    company?: CompanyUpdateOneRequiredWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutUserEventInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    event_date?: StringFieldUpdateOperationsInput | string
    start_time?: StringFieldUpdateOperationsInput | string
    end_time?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inviteScanner?: InviteScannerUncheckedUpdateOneWithoutEventNestedInput
  }

  export type SalesTicketsCreateManyUserInput = {
    id?: string
    ticketTypeID: string
    qrCode: string
    paymentMethod: string
    isUsed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserEventCreateManyUserInput = {
    id?: string
    eventId: string
  }

  export type SalesTicketsUpdateWithoutUserInput = {
    qrCode?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tiketType?: TicketTypeUpdateOneRequiredWithoutSalesTicketsNestedInput
  }

  export type SalesTicketsUncheckedUpdateWithoutUserInput = {
    ticketTypeID?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesTicketsUncheckedUpdateManyWithoutUserInput = {
    ticketTypeID?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserEventUpdateWithoutUserInput = {
    event?: EventUpdateOneRequiredWithoutUserEventNestedInput
  }

  export type UserEventUncheckedUpdateWithoutUserInput = {
    eventId?: StringFieldUpdateOperationsInput | string
  }

  export type UserEventUncheckedUpdateManyWithoutUserInput = {
    eventId?: StringFieldUpdateOperationsInput | string
  }

  export type EventCreateManyCompanyInput = {
    id?: string
    title: string
    description: string
    category: string
    location: string
    image: string
    event_date: string
    start_time: string
    end_time: string
    status?: string
    ticketId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type EventUpdateWithoutCompanyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    event_date?: StringFieldUpdateOperationsInput | string
    start_time?: StringFieldUpdateOperationsInput | string
    end_time?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userEvent?: UserEventUpdateManyWithoutEventNestedInput
    inviteScanner?: InviteScannerUpdateOneWithoutEventNestedInput
    ticket?: TicketUpdateOneRequiredWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutCompanyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    event_date?: StringFieldUpdateOperationsInput | string
    start_time?: StringFieldUpdateOperationsInput | string
    end_time?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userEvent?: UserEventUncheckedUpdateManyWithoutEventNestedInput
    inviteScanner?: InviteScannerUncheckedUpdateOneWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutCompanyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    event_date?: StringFieldUpdateOperationsInput | string
    start_time?: StringFieldUpdateOperationsInput | string
    end_time?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserEventCreateManyEventInput = {
    id?: string
    userId: string
  }

  export type UserEventUpdateWithoutEventInput = {
    user?: UserUpdateOneRequiredWithoutUserEventNestedInput
  }

  export type UserEventUncheckedUpdateWithoutEventInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserEventUncheckedUpdateManyWithoutEventInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TicketTypeCreateManyTicketInput = {
    id?: string
    name: string
    quantity: number
    price: number
  }

  export type TicketTypeUpdateWithoutTicketInput = {
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    SalesTickets?: SalesTicketsUpdateManyWithoutTiketTypeNestedInput
  }

  export type TicketTypeUncheckedUpdateWithoutTicketInput = {
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    SalesTickets?: SalesTicketsUncheckedUpdateManyWithoutTiketTypeNestedInput
  }

  export type TicketTypeUncheckedUpdateManyWithoutTicketInput = {
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type SalesTicketsCreateManyTiketTypeInput = {
    id?: string
    qrCode: string
    paymentMethod: string
    isUsed?: boolean
    userid: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalesTicketsUpdateWithoutTiketTypeInput = {
    qrCode?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutSalesTicketsNestedInput
  }

  export type SalesTicketsUncheckedUpdateWithoutTiketTypeInput = {
    qrCode?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    userid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesTicketsUncheckedUpdateManyWithoutTiketTypeInput = {
    qrCode?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    userid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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