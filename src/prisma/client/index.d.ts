
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
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model PointEarning
 * 
 */
export type PointEarning = $Result.DefaultSelection<Prisma.$PointEarningPayload>
/**
 * Model PointAllocation
 * 
 */
export type PointAllocation = $Result.DefaultSelection<Prisma.$PointAllocationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Customers
 * const customers = await prisma.customer.findMany()
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
   * // Fetch zero or more Customers
   * const customers = await prisma.customer.findMany()
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pointEarning`: Exposes CRUD operations for the **PointEarning** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PointEarnings
    * const pointEarnings = await prisma.pointEarning.findMany()
    * ```
    */
  get pointEarning(): Prisma.PointEarningDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pointAllocation`: Exposes CRUD operations for the **PointAllocation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PointAllocations
    * const pointAllocations = await prisma.pointAllocation.findMany()
    * ```
    */
  get pointAllocation(): Prisma.PointAllocationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
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
    Customer: 'Customer',
    Project: 'Project',
    PointEarning: 'PointEarning',
    PointAllocation: 'PointAllocation'
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
      modelProps: "customer" | "project" | "pointEarning" | "pointAllocation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      PointEarning: {
        payload: Prisma.$PointEarningPayload<ExtArgs>
        fields: Prisma.PointEarningFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PointEarningFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointEarningPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PointEarningFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointEarningPayload>
          }
          findFirst: {
            args: Prisma.PointEarningFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointEarningPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PointEarningFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointEarningPayload>
          }
          findMany: {
            args: Prisma.PointEarningFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointEarningPayload>[]
          }
          create: {
            args: Prisma.PointEarningCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointEarningPayload>
          }
          createMany: {
            args: Prisma.PointEarningCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PointEarningCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointEarningPayload>[]
          }
          delete: {
            args: Prisma.PointEarningDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointEarningPayload>
          }
          update: {
            args: Prisma.PointEarningUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointEarningPayload>
          }
          deleteMany: {
            args: Prisma.PointEarningDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PointEarningUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PointEarningUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointEarningPayload>[]
          }
          upsert: {
            args: Prisma.PointEarningUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointEarningPayload>
          }
          aggregate: {
            args: Prisma.PointEarningAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePointEarning>
          }
          groupBy: {
            args: Prisma.PointEarningGroupByArgs<ExtArgs>
            result: $Utils.Optional<PointEarningGroupByOutputType>[]
          }
          count: {
            args: Prisma.PointEarningCountArgs<ExtArgs>
            result: $Utils.Optional<PointEarningCountAggregateOutputType> | number
          }
        }
      }
      PointAllocation: {
        payload: Prisma.$PointAllocationPayload<ExtArgs>
        fields: Prisma.PointAllocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PointAllocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointAllocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PointAllocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointAllocationPayload>
          }
          findFirst: {
            args: Prisma.PointAllocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointAllocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PointAllocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointAllocationPayload>
          }
          findMany: {
            args: Prisma.PointAllocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointAllocationPayload>[]
          }
          create: {
            args: Prisma.PointAllocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointAllocationPayload>
          }
          createMany: {
            args: Prisma.PointAllocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PointAllocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointAllocationPayload>[]
          }
          delete: {
            args: Prisma.PointAllocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointAllocationPayload>
          }
          update: {
            args: Prisma.PointAllocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointAllocationPayload>
          }
          deleteMany: {
            args: Prisma.PointAllocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PointAllocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PointAllocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointAllocationPayload>[]
          }
          upsert: {
            args: Prisma.PointAllocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointAllocationPayload>
          }
          aggregate: {
            args: Prisma.PointAllocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePointAllocation>
          }
          groupBy: {
            args: Prisma.PointAllocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<PointAllocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.PointAllocationCountArgs<ExtArgs>
            result: $Utils.Optional<PointAllocationCountAggregateOutputType> | number
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
      isolationLevel?: Prisma.TransactionIsolationLevel
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
    customer?: CustomerOmit
    project?: ProjectOmit
    pointEarning?: PointEarningOmit
    pointAllocation?: PointAllocationOmit
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
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    earnings: number
    allocations: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    earnings?: boolean | CustomerCountOutputTypeCountEarningsArgs
    allocations?: boolean | CustomerCountOutputTypeCountAllocationsArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountEarningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointEarningWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountAllocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointAllocationWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    allocations: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    allocations?: boolean | ProjectCountOutputTypeCountAllocationsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountAllocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointAllocationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    totalEarned: number | null
    available: number | null
    used: number | null
  }

  export type CustomerSumAggregateOutputType = {
    totalEarned: number | null
    available: number | null
    used: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    shopifyCustomerId: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    totalEarned: number | null
    available: number | null
    used: number | null
    lastActivity: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    shopifyCustomerId: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    totalEarned: number | null
    available: number | null
    used: number | null
    lastActivity: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    shopifyCustomerId: number
    email: number
    firstName: number
    lastName: number
    totalEarned: number
    available: number
    used: number
    lastActivity: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    totalEarned?: true
    available?: true
    used?: true
  }

  export type CustomerSumAggregateInputType = {
    totalEarned?: true
    available?: true
    used?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    shopifyCustomerId?: true
    email?: true
    firstName?: true
    lastName?: true
    totalEarned?: true
    available?: true
    used?: true
    lastActivity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    shopifyCustomerId?: true
    email?: true
    firstName?: true
    lastName?: true
    totalEarned?: true
    available?: true
    used?: true
    lastActivity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    shopifyCustomerId?: true
    email?: true
    firstName?: true
    lastName?: true
    totalEarned?: true
    available?: true
    used?: true
    lastActivity?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    shopifyCustomerId: string
    email: string
    firstName: string | null
    lastName: string | null
    totalEarned: number
    available: number
    used: number
    lastActivity: Date
    createdAt: Date
    updatedAt: Date
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopifyCustomerId?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    totalEarned?: boolean
    available?: boolean
    used?: boolean
    lastActivity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    earnings?: boolean | Customer$earningsArgs<ExtArgs>
    allocations?: boolean | Customer$allocationsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopifyCustomerId?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    totalEarned?: boolean
    available?: boolean
    used?: boolean
    lastActivity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopifyCustomerId?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    totalEarned?: boolean
    available?: boolean
    used?: boolean
    lastActivity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    shopifyCustomerId?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    totalEarned?: boolean
    available?: boolean
    used?: boolean
    lastActivity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shopifyCustomerId" | "email" | "firstName" | "lastName" | "totalEarned" | "available" | "used" | "lastActivity" | "createdAt" | "updatedAt", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    earnings?: boolean | Customer$earningsArgs<ExtArgs>
    allocations?: boolean | Customer$allocationsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      earnings: Prisma.$PointEarningPayload<ExtArgs>[]
      allocations: Prisma.$PointAllocationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shopifyCustomerId: string
      email: string
      firstName: string | null
      lastName: string | null
      totalEarned: number
      available: number
      used: number
      lastActivity: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
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
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    earnings<T extends Customer$earningsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$earningsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointEarningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    allocations<T extends Customer$allocationsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$allocationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointAllocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly shopifyCustomerId: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly firstName: FieldRef<"Customer", 'String'>
    readonly lastName: FieldRef<"Customer", 'String'>
    readonly totalEarned: FieldRef<"Customer", 'Int'>
    readonly available: FieldRef<"Customer", 'Int'>
    readonly used: FieldRef<"Customer", 'Int'>
    readonly lastActivity: FieldRef<"Customer", 'DateTime'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.earnings
   */
  export type Customer$earningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointEarning
     */
    select?: PointEarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointEarning
     */
    omit?: PointEarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointEarningInclude<ExtArgs> | null
    where?: PointEarningWhereInput
    orderBy?: PointEarningOrderByWithRelationInput | PointEarningOrderByWithRelationInput[]
    cursor?: PointEarningWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PointEarningScalarFieldEnum | PointEarningScalarFieldEnum[]
  }

  /**
   * Customer.allocations
   */
  export type Customer$allocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointAllocation
     */
    select?: PointAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointAllocation
     */
    omit?: PointAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointAllocationInclude<ExtArgs> | null
    where?: PointAllocationWhereInput
    orderBy?: PointAllocationOrderByWithRelationInput | PointAllocationOrderByWithRelationInput[]
    cursor?: PointAllocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PointAllocationScalarFieldEnum | PointAllocationScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    target: number | null
    current: number | null
    progress: number | null
    order: number | null
  }

  export type ProjectSumAggregateOutputType = {
    target: number | null
    current: number | null
    progress: number | null
    order: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    story: string | null
    target: number | null
    current: number | null
    progress: number | null
    image: string | null
    status: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    story: string | null
    target: number | null
    current: number | null
    progress: number | null
    image: string | null
    status: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    title: number
    description: number
    story: number
    breakdown: number
    target: number
    current: number
    progress: number
    image: number
    status: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    target?: true
    current?: true
    progress?: true
    order?: true
  }

  export type ProjectSumAggregateInputType = {
    target?: true
    current?: true
    progress?: true
    order?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    story?: true
    target?: true
    current?: true
    progress?: true
    image?: true
    status?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    story?: true
    target?: true
    current?: true
    progress?: true
    image?: true
    status?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    story?: true
    breakdown?: true
    target?: true
    current?: true
    progress?: true
    image?: true
    status?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    title: string
    description: string
    story: string | null
    breakdown: JsonValue | null
    target: number
    current: number
    progress: number
    image: string | null
    status: string
    order: number
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    story?: boolean
    breakdown?: boolean
    target?: boolean
    current?: boolean
    progress?: boolean
    image?: boolean
    status?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    allocations?: boolean | Project$allocationsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    story?: boolean
    breakdown?: boolean
    target?: boolean
    current?: boolean
    progress?: boolean
    image?: boolean
    status?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    story?: boolean
    breakdown?: boolean
    target?: boolean
    current?: boolean
    progress?: boolean
    image?: boolean
    status?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    story?: boolean
    breakdown?: boolean
    target?: boolean
    current?: boolean
    progress?: boolean
    image?: boolean
    status?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "story" | "breakdown" | "target" | "current" | "progress" | "image" | "status" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    allocations?: boolean | Project$allocationsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      allocations: Prisma.$PointAllocationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      story: string | null
      breakdown: Prisma.JsonValue | null
      target: number
      current: number
      progress: number
      image: string | null
      status: string
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    allocations<T extends Project$allocationsArgs<ExtArgs> = {}>(args?: Subset<T, Project$allocationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointAllocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly title: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly story: FieldRef<"Project", 'String'>
    readonly breakdown: FieldRef<"Project", 'Json'>
    readonly target: FieldRef<"Project", 'Int'>
    readonly current: FieldRef<"Project", 'Int'>
    readonly progress: FieldRef<"Project", 'Float'>
    readonly image: FieldRef<"Project", 'String'>
    readonly status: FieldRef<"Project", 'String'>
    readonly order: FieldRef<"Project", 'Int'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.allocations
   */
  export type Project$allocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointAllocation
     */
    select?: PointAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointAllocation
     */
    omit?: PointAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointAllocationInclude<ExtArgs> | null
    where?: PointAllocationWhereInput
    orderBy?: PointAllocationOrderByWithRelationInput | PointAllocationOrderByWithRelationInput[]
    cursor?: PointAllocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PointAllocationScalarFieldEnum | PointAllocationScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model PointEarning
   */

  export type AggregatePointEarning = {
    _count: PointEarningCountAggregateOutputType | null
    _avg: PointEarningAvgAggregateOutputType | null
    _sum: PointEarningSumAggregateOutputType | null
    _min: PointEarningMinAggregateOutputType | null
    _max: PointEarningMaxAggregateOutputType | null
  }

  export type PointEarningAvgAggregateOutputType = {
    orderTotal: number | null
    netSales: number | null
    points: number | null
  }

  export type PointEarningSumAggregateOutputType = {
    orderTotal: number | null
    netSales: number | null
    points: number | null
  }

  export type PointEarningMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    orderId: string | null
    orderTotal: number | null
    netSales: number | null
    points: number | null
    isGuest: boolean | null
    createdAt: Date | null
  }

  export type PointEarningMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    orderId: string | null
    orderTotal: number | null
    netSales: number | null
    points: number | null
    isGuest: boolean | null
    createdAt: Date | null
  }

  export type PointEarningCountAggregateOutputType = {
    id: number
    customerId: number
    orderId: number
    orderTotal: number
    netSales: number
    points: number
    isGuest: number
    createdAt: number
    _all: number
  }


  export type PointEarningAvgAggregateInputType = {
    orderTotal?: true
    netSales?: true
    points?: true
  }

  export type PointEarningSumAggregateInputType = {
    orderTotal?: true
    netSales?: true
    points?: true
  }

  export type PointEarningMinAggregateInputType = {
    id?: true
    customerId?: true
    orderId?: true
    orderTotal?: true
    netSales?: true
    points?: true
    isGuest?: true
    createdAt?: true
  }

  export type PointEarningMaxAggregateInputType = {
    id?: true
    customerId?: true
    orderId?: true
    orderTotal?: true
    netSales?: true
    points?: true
    isGuest?: true
    createdAt?: true
  }

  export type PointEarningCountAggregateInputType = {
    id?: true
    customerId?: true
    orderId?: true
    orderTotal?: true
    netSales?: true
    points?: true
    isGuest?: true
    createdAt?: true
    _all?: true
  }

  export type PointEarningAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PointEarning to aggregate.
     */
    where?: PointEarningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointEarnings to fetch.
     */
    orderBy?: PointEarningOrderByWithRelationInput | PointEarningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PointEarningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointEarnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointEarnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PointEarnings
    **/
    _count?: true | PointEarningCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PointEarningAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PointEarningSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PointEarningMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PointEarningMaxAggregateInputType
  }

  export type GetPointEarningAggregateType<T extends PointEarningAggregateArgs> = {
        [P in keyof T & keyof AggregatePointEarning]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePointEarning[P]>
      : GetScalarType<T[P], AggregatePointEarning[P]>
  }




  export type PointEarningGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointEarningWhereInput
    orderBy?: PointEarningOrderByWithAggregationInput | PointEarningOrderByWithAggregationInput[]
    by: PointEarningScalarFieldEnum[] | PointEarningScalarFieldEnum
    having?: PointEarningScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PointEarningCountAggregateInputType | true
    _avg?: PointEarningAvgAggregateInputType
    _sum?: PointEarningSumAggregateInputType
    _min?: PointEarningMinAggregateInputType
    _max?: PointEarningMaxAggregateInputType
  }

  export type PointEarningGroupByOutputType = {
    id: string
    customerId: string | null
    orderId: string
    orderTotal: number
    netSales: number
    points: number
    isGuest: boolean
    createdAt: Date
    _count: PointEarningCountAggregateOutputType | null
    _avg: PointEarningAvgAggregateOutputType | null
    _sum: PointEarningSumAggregateOutputType | null
    _min: PointEarningMinAggregateOutputType | null
    _max: PointEarningMaxAggregateOutputType | null
  }

  type GetPointEarningGroupByPayload<T extends PointEarningGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PointEarningGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PointEarningGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PointEarningGroupByOutputType[P]>
            : GetScalarType<T[P], PointEarningGroupByOutputType[P]>
        }
      >
    >


  export type PointEarningSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    orderId?: boolean
    orderTotal?: boolean
    netSales?: boolean
    points?: boolean
    isGuest?: boolean
    createdAt?: boolean
    customer?: boolean | PointEarning$customerArgs<ExtArgs>
  }, ExtArgs["result"]["pointEarning"]>

  export type PointEarningSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    orderId?: boolean
    orderTotal?: boolean
    netSales?: boolean
    points?: boolean
    isGuest?: boolean
    createdAt?: boolean
    customer?: boolean | PointEarning$customerArgs<ExtArgs>
  }, ExtArgs["result"]["pointEarning"]>

  export type PointEarningSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    orderId?: boolean
    orderTotal?: boolean
    netSales?: boolean
    points?: boolean
    isGuest?: boolean
    createdAt?: boolean
    customer?: boolean | PointEarning$customerArgs<ExtArgs>
  }, ExtArgs["result"]["pointEarning"]>

  export type PointEarningSelectScalar = {
    id?: boolean
    customerId?: boolean
    orderId?: boolean
    orderTotal?: boolean
    netSales?: boolean
    points?: boolean
    isGuest?: boolean
    createdAt?: boolean
  }

  export type PointEarningOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "orderId" | "orderTotal" | "netSales" | "points" | "isGuest" | "createdAt", ExtArgs["result"]["pointEarning"]>
  export type PointEarningInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | PointEarning$customerArgs<ExtArgs>
  }
  export type PointEarningIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | PointEarning$customerArgs<ExtArgs>
  }
  export type PointEarningIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | PointEarning$customerArgs<ExtArgs>
  }

  export type $PointEarningPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PointEarning"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string | null
      orderId: string
      orderTotal: number
      netSales: number
      points: number
      isGuest: boolean
      createdAt: Date
    }, ExtArgs["result"]["pointEarning"]>
    composites: {}
  }

  type PointEarningGetPayload<S extends boolean | null | undefined | PointEarningDefaultArgs> = $Result.GetResult<Prisma.$PointEarningPayload, S>

  type PointEarningCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PointEarningFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PointEarningCountAggregateInputType | true
    }

  export interface PointEarningDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PointEarning'], meta: { name: 'PointEarning' } }
    /**
     * Find zero or one PointEarning that matches the filter.
     * @param {PointEarningFindUniqueArgs} args - Arguments to find a PointEarning
     * @example
     * // Get one PointEarning
     * const pointEarning = await prisma.pointEarning.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PointEarningFindUniqueArgs>(args: SelectSubset<T, PointEarningFindUniqueArgs<ExtArgs>>): Prisma__PointEarningClient<$Result.GetResult<Prisma.$PointEarningPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PointEarning that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PointEarningFindUniqueOrThrowArgs} args - Arguments to find a PointEarning
     * @example
     * // Get one PointEarning
     * const pointEarning = await prisma.pointEarning.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PointEarningFindUniqueOrThrowArgs>(args: SelectSubset<T, PointEarningFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PointEarningClient<$Result.GetResult<Prisma.$PointEarningPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PointEarning that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointEarningFindFirstArgs} args - Arguments to find a PointEarning
     * @example
     * // Get one PointEarning
     * const pointEarning = await prisma.pointEarning.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PointEarningFindFirstArgs>(args?: SelectSubset<T, PointEarningFindFirstArgs<ExtArgs>>): Prisma__PointEarningClient<$Result.GetResult<Prisma.$PointEarningPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PointEarning that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointEarningFindFirstOrThrowArgs} args - Arguments to find a PointEarning
     * @example
     * // Get one PointEarning
     * const pointEarning = await prisma.pointEarning.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PointEarningFindFirstOrThrowArgs>(args?: SelectSubset<T, PointEarningFindFirstOrThrowArgs<ExtArgs>>): Prisma__PointEarningClient<$Result.GetResult<Prisma.$PointEarningPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PointEarnings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointEarningFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PointEarnings
     * const pointEarnings = await prisma.pointEarning.findMany()
     * 
     * // Get first 10 PointEarnings
     * const pointEarnings = await prisma.pointEarning.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pointEarningWithIdOnly = await prisma.pointEarning.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PointEarningFindManyArgs>(args?: SelectSubset<T, PointEarningFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointEarningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PointEarning.
     * @param {PointEarningCreateArgs} args - Arguments to create a PointEarning.
     * @example
     * // Create one PointEarning
     * const PointEarning = await prisma.pointEarning.create({
     *   data: {
     *     // ... data to create a PointEarning
     *   }
     * })
     * 
     */
    create<T extends PointEarningCreateArgs>(args: SelectSubset<T, PointEarningCreateArgs<ExtArgs>>): Prisma__PointEarningClient<$Result.GetResult<Prisma.$PointEarningPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PointEarnings.
     * @param {PointEarningCreateManyArgs} args - Arguments to create many PointEarnings.
     * @example
     * // Create many PointEarnings
     * const pointEarning = await prisma.pointEarning.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PointEarningCreateManyArgs>(args?: SelectSubset<T, PointEarningCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PointEarnings and returns the data saved in the database.
     * @param {PointEarningCreateManyAndReturnArgs} args - Arguments to create many PointEarnings.
     * @example
     * // Create many PointEarnings
     * const pointEarning = await prisma.pointEarning.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PointEarnings and only return the `id`
     * const pointEarningWithIdOnly = await prisma.pointEarning.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PointEarningCreateManyAndReturnArgs>(args?: SelectSubset<T, PointEarningCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointEarningPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PointEarning.
     * @param {PointEarningDeleteArgs} args - Arguments to delete one PointEarning.
     * @example
     * // Delete one PointEarning
     * const PointEarning = await prisma.pointEarning.delete({
     *   where: {
     *     // ... filter to delete one PointEarning
     *   }
     * })
     * 
     */
    delete<T extends PointEarningDeleteArgs>(args: SelectSubset<T, PointEarningDeleteArgs<ExtArgs>>): Prisma__PointEarningClient<$Result.GetResult<Prisma.$PointEarningPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PointEarning.
     * @param {PointEarningUpdateArgs} args - Arguments to update one PointEarning.
     * @example
     * // Update one PointEarning
     * const pointEarning = await prisma.pointEarning.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PointEarningUpdateArgs>(args: SelectSubset<T, PointEarningUpdateArgs<ExtArgs>>): Prisma__PointEarningClient<$Result.GetResult<Prisma.$PointEarningPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PointEarnings.
     * @param {PointEarningDeleteManyArgs} args - Arguments to filter PointEarnings to delete.
     * @example
     * // Delete a few PointEarnings
     * const { count } = await prisma.pointEarning.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PointEarningDeleteManyArgs>(args?: SelectSubset<T, PointEarningDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PointEarnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointEarningUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PointEarnings
     * const pointEarning = await prisma.pointEarning.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PointEarningUpdateManyArgs>(args: SelectSubset<T, PointEarningUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PointEarnings and returns the data updated in the database.
     * @param {PointEarningUpdateManyAndReturnArgs} args - Arguments to update many PointEarnings.
     * @example
     * // Update many PointEarnings
     * const pointEarning = await prisma.pointEarning.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PointEarnings and only return the `id`
     * const pointEarningWithIdOnly = await prisma.pointEarning.updateManyAndReturn({
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
    updateManyAndReturn<T extends PointEarningUpdateManyAndReturnArgs>(args: SelectSubset<T, PointEarningUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointEarningPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PointEarning.
     * @param {PointEarningUpsertArgs} args - Arguments to update or create a PointEarning.
     * @example
     * // Update or create a PointEarning
     * const pointEarning = await prisma.pointEarning.upsert({
     *   create: {
     *     // ... data to create a PointEarning
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PointEarning we want to update
     *   }
     * })
     */
    upsert<T extends PointEarningUpsertArgs>(args: SelectSubset<T, PointEarningUpsertArgs<ExtArgs>>): Prisma__PointEarningClient<$Result.GetResult<Prisma.$PointEarningPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PointEarnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointEarningCountArgs} args - Arguments to filter PointEarnings to count.
     * @example
     * // Count the number of PointEarnings
     * const count = await prisma.pointEarning.count({
     *   where: {
     *     // ... the filter for the PointEarnings we want to count
     *   }
     * })
    **/
    count<T extends PointEarningCountArgs>(
      args?: Subset<T, PointEarningCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PointEarningCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PointEarning.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointEarningAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PointEarningAggregateArgs>(args: Subset<T, PointEarningAggregateArgs>): Prisma.PrismaPromise<GetPointEarningAggregateType<T>>

    /**
     * Group by PointEarning.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointEarningGroupByArgs} args - Group by arguments.
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
      T extends PointEarningGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PointEarningGroupByArgs['orderBy'] }
        : { orderBy?: PointEarningGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PointEarningGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPointEarningGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PointEarning model
   */
  readonly fields: PointEarningFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PointEarning.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PointEarningClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends PointEarning$customerArgs<ExtArgs> = {}>(args?: Subset<T, PointEarning$customerArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PointEarning model
   */
  interface PointEarningFieldRefs {
    readonly id: FieldRef<"PointEarning", 'String'>
    readonly customerId: FieldRef<"PointEarning", 'String'>
    readonly orderId: FieldRef<"PointEarning", 'String'>
    readonly orderTotal: FieldRef<"PointEarning", 'Float'>
    readonly netSales: FieldRef<"PointEarning", 'Float'>
    readonly points: FieldRef<"PointEarning", 'Int'>
    readonly isGuest: FieldRef<"PointEarning", 'Boolean'>
    readonly createdAt: FieldRef<"PointEarning", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PointEarning findUnique
   */
  export type PointEarningFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointEarning
     */
    select?: PointEarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointEarning
     */
    omit?: PointEarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointEarningInclude<ExtArgs> | null
    /**
     * Filter, which PointEarning to fetch.
     */
    where: PointEarningWhereUniqueInput
  }

  /**
   * PointEarning findUniqueOrThrow
   */
  export type PointEarningFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointEarning
     */
    select?: PointEarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointEarning
     */
    omit?: PointEarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointEarningInclude<ExtArgs> | null
    /**
     * Filter, which PointEarning to fetch.
     */
    where: PointEarningWhereUniqueInput
  }

  /**
   * PointEarning findFirst
   */
  export type PointEarningFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointEarning
     */
    select?: PointEarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointEarning
     */
    omit?: PointEarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointEarningInclude<ExtArgs> | null
    /**
     * Filter, which PointEarning to fetch.
     */
    where?: PointEarningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointEarnings to fetch.
     */
    orderBy?: PointEarningOrderByWithRelationInput | PointEarningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PointEarnings.
     */
    cursor?: PointEarningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointEarnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointEarnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PointEarnings.
     */
    distinct?: PointEarningScalarFieldEnum | PointEarningScalarFieldEnum[]
  }

  /**
   * PointEarning findFirstOrThrow
   */
  export type PointEarningFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointEarning
     */
    select?: PointEarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointEarning
     */
    omit?: PointEarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointEarningInclude<ExtArgs> | null
    /**
     * Filter, which PointEarning to fetch.
     */
    where?: PointEarningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointEarnings to fetch.
     */
    orderBy?: PointEarningOrderByWithRelationInput | PointEarningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PointEarnings.
     */
    cursor?: PointEarningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointEarnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointEarnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PointEarnings.
     */
    distinct?: PointEarningScalarFieldEnum | PointEarningScalarFieldEnum[]
  }

  /**
   * PointEarning findMany
   */
  export type PointEarningFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointEarning
     */
    select?: PointEarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointEarning
     */
    omit?: PointEarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointEarningInclude<ExtArgs> | null
    /**
     * Filter, which PointEarnings to fetch.
     */
    where?: PointEarningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointEarnings to fetch.
     */
    orderBy?: PointEarningOrderByWithRelationInput | PointEarningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PointEarnings.
     */
    cursor?: PointEarningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointEarnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointEarnings.
     */
    skip?: number
    distinct?: PointEarningScalarFieldEnum | PointEarningScalarFieldEnum[]
  }

  /**
   * PointEarning create
   */
  export type PointEarningCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointEarning
     */
    select?: PointEarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointEarning
     */
    omit?: PointEarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointEarningInclude<ExtArgs> | null
    /**
     * The data needed to create a PointEarning.
     */
    data: XOR<PointEarningCreateInput, PointEarningUncheckedCreateInput>
  }

  /**
   * PointEarning createMany
   */
  export type PointEarningCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PointEarnings.
     */
    data: PointEarningCreateManyInput | PointEarningCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PointEarning createManyAndReturn
   */
  export type PointEarningCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointEarning
     */
    select?: PointEarningSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PointEarning
     */
    omit?: PointEarningOmit<ExtArgs> | null
    /**
     * The data used to create many PointEarnings.
     */
    data: PointEarningCreateManyInput | PointEarningCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointEarningIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PointEarning update
   */
  export type PointEarningUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointEarning
     */
    select?: PointEarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointEarning
     */
    omit?: PointEarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointEarningInclude<ExtArgs> | null
    /**
     * The data needed to update a PointEarning.
     */
    data: XOR<PointEarningUpdateInput, PointEarningUncheckedUpdateInput>
    /**
     * Choose, which PointEarning to update.
     */
    where: PointEarningWhereUniqueInput
  }

  /**
   * PointEarning updateMany
   */
  export type PointEarningUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PointEarnings.
     */
    data: XOR<PointEarningUpdateManyMutationInput, PointEarningUncheckedUpdateManyInput>
    /**
     * Filter which PointEarnings to update
     */
    where?: PointEarningWhereInput
    /**
     * Limit how many PointEarnings to update.
     */
    limit?: number
  }

  /**
   * PointEarning updateManyAndReturn
   */
  export type PointEarningUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointEarning
     */
    select?: PointEarningSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PointEarning
     */
    omit?: PointEarningOmit<ExtArgs> | null
    /**
     * The data used to update PointEarnings.
     */
    data: XOR<PointEarningUpdateManyMutationInput, PointEarningUncheckedUpdateManyInput>
    /**
     * Filter which PointEarnings to update
     */
    where?: PointEarningWhereInput
    /**
     * Limit how many PointEarnings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointEarningIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PointEarning upsert
   */
  export type PointEarningUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointEarning
     */
    select?: PointEarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointEarning
     */
    omit?: PointEarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointEarningInclude<ExtArgs> | null
    /**
     * The filter to search for the PointEarning to update in case it exists.
     */
    where: PointEarningWhereUniqueInput
    /**
     * In case the PointEarning found by the `where` argument doesn't exist, create a new PointEarning with this data.
     */
    create: XOR<PointEarningCreateInput, PointEarningUncheckedCreateInput>
    /**
     * In case the PointEarning was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PointEarningUpdateInput, PointEarningUncheckedUpdateInput>
  }

  /**
   * PointEarning delete
   */
  export type PointEarningDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointEarning
     */
    select?: PointEarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointEarning
     */
    omit?: PointEarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointEarningInclude<ExtArgs> | null
    /**
     * Filter which PointEarning to delete.
     */
    where: PointEarningWhereUniqueInput
  }

  /**
   * PointEarning deleteMany
   */
  export type PointEarningDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PointEarnings to delete
     */
    where?: PointEarningWhereInput
    /**
     * Limit how many PointEarnings to delete.
     */
    limit?: number
  }

  /**
   * PointEarning.customer
   */
  export type PointEarning$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
  }

  /**
   * PointEarning without action
   */
  export type PointEarningDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointEarning
     */
    select?: PointEarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointEarning
     */
    omit?: PointEarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointEarningInclude<ExtArgs> | null
  }


  /**
   * Model PointAllocation
   */

  export type AggregatePointAllocation = {
    _count: PointAllocationCountAggregateOutputType | null
    _avg: PointAllocationAvgAggregateOutputType | null
    _sum: PointAllocationSumAggregateOutputType | null
    _min: PointAllocationMinAggregateOutputType | null
    _max: PointAllocationMaxAggregateOutputType | null
  }

  export type PointAllocationAvgAggregateOutputType = {
    points: number | null
  }

  export type PointAllocationSumAggregateOutputType = {
    points: number | null
  }

  export type PointAllocationMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    projectId: string | null
    points: number | null
    type: string | null
    source: string | null
    createdAt: Date | null
  }

  export type PointAllocationMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    projectId: string | null
    points: number | null
    type: string | null
    source: string | null
    createdAt: Date | null
  }

  export type PointAllocationCountAggregateOutputType = {
    id: number
    customerId: number
    projectId: number
    points: number
    type: number
    source: number
    createdAt: number
    _all: number
  }


  export type PointAllocationAvgAggregateInputType = {
    points?: true
  }

  export type PointAllocationSumAggregateInputType = {
    points?: true
  }

  export type PointAllocationMinAggregateInputType = {
    id?: true
    customerId?: true
    projectId?: true
    points?: true
    type?: true
    source?: true
    createdAt?: true
  }

  export type PointAllocationMaxAggregateInputType = {
    id?: true
    customerId?: true
    projectId?: true
    points?: true
    type?: true
    source?: true
    createdAt?: true
  }

  export type PointAllocationCountAggregateInputType = {
    id?: true
    customerId?: true
    projectId?: true
    points?: true
    type?: true
    source?: true
    createdAt?: true
    _all?: true
  }

  export type PointAllocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PointAllocation to aggregate.
     */
    where?: PointAllocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointAllocations to fetch.
     */
    orderBy?: PointAllocationOrderByWithRelationInput | PointAllocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PointAllocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointAllocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointAllocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PointAllocations
    **/
    _count?: true | PointAllocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PointAllocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PointAllocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PointAllocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PointAllocationMaxAggregateInputType
  }

  export type GetPointAllocationAggregateType<T extends PointAllocationAggregateArgs> = {
        [P in keyof T & keyof AggregatePointAllocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePointAllocation[P]>
      : GetScalarType<T[P], AggregatePointAllocation[P]>
  }




  export type PointAllocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointAllocationWhereInput
    orderBy?: PointAllocationOrderByWithAggregationInput | PointAllocationOrderByWithAggregationInput[]
    by: PointAllocationScalarFieldEnum[] | PointAllocationScalarFieldEnum
    having?: PointAllocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PointAllocationCountAggregateInputType | true
    _avg?: PointAllocationAvgAggregateInputType
    _sum?: PointAllocationSumAggregateInputType
    _min?: PointAllocationMinAggregateInputType
    _max?: PointAllocationMaxAggregateInputType
  }

  export type PointAllocationGroupByOutputType = {
    id: string
    customerId: string | null
    projectId: string
    points: number
    type: string
    source: string | null
    createdAt: Date
    _count: PointAllocationCountAggregateOutputType | null
    _avg: PointAllocationAvgAggregateOutputType | null
    _sum: PointAllocationSumAggregateOutputType | null
    _min: PointAllocationMinAggregateOutputType | null
    _max: PointAllocationMaxAggregateOutputType | null
  }

  type GetPointAllocationGroupByPayload<T extends PointAllocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PointAllocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PointAllocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PointAllocationGroupByOutputType[P]>
            : GetScalarType<T[P], PointAllocationGroupByOutputType[P]>
        }
      >
    >


  export type PointAllocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    projectId?: boolean
    points?: boolean
    type?: boolean
    source?: boolean
    createdAt?: boolean
    customer?: boolean | PointAllocation$customerArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pointAllocation"]>

  export type PointAllocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    projectId?: boolean
    points?: boolean
    type?: boolean
    source?: boolean
    createdAt?: boolean
    customer?: boolean | PointAllocation$customerArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pointAllocation"]>

  export type PointAllocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    projectId?: boolean
    points?: boolean
    type?: boolean
    source?: boolean
    createdAt?: boolean
    customer?: boolean | PointAllocation$customerArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pointAllocation"]>

  export type PointAllocationSelectScalar = {
    id?: boolean
    customerId?: boolean
    projectId?: boolean
    points?: boolean
    type?: boolean
    source?: boolean
    createdAt?: boolean
  }

  export type PointAllocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "projectId" | "points" | "type" | "source" | "createdAt", ExtArgs["result"]["pointAllocation"]>
  export type PointAllocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | PointAllocation$customerArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type PointAllocationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | PointAllocation$customerArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type PointAllocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | PointAllocation$customerArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $PointAllocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PointAllocation"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs> | null
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string | null
      projectId: string
      points: number
      type: string
      source: string | null
      createdAt: Date
    }, ExtArgs["result"]["pointAllocation"]>
    composites: {}
  }

  type PointAllocationGetPayload<S extends boolean | null | undefined | PointAllocationDefaultArgs> = $Result.GetResult<Prisma.$PointAllocationPayload, S>

  type PointAllocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PointAllocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PointAllocationCountAggregateInputType | true
    }

  export interface PointAllocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PointAllocation'], meta: { name: 'PointAllocation' } }
    /**
     * Find zero or one PointAllocation that matches the filter.
     * @param {PointAllocationFindUniqueArgs} args - Arguments to find a PointAllocation
     * @example
     * // Get one PointAllocation
     * const pointAllocation = await prisma.pointAllocation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PointAllocationFindUniqueArgs>(args: SelectSubset<T, PointAllocationFindUniqueArgs<ExtArgs>>): Prisma__PointAllocationClient<$Result.GetResult<Prisma.$PointAllocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PointAllocation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PointAllocationFindUniqueOrThrowArgs} args - Arguments to find a PointAllocation
     * @example
     * // Get one PointAllocation
     * const pointAllocation = await prisma.pointAllocation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PointAllocationFindUniqueOrThrowArgs>(args: SelectSubset<T, PointAllocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PointAllocationClient<$Result.GetResult<Prisma.$PointAllocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PointAllocation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointAllocationFindFirstArgs} args - Arguments to find a PointAllocation
     * @example
     * // Get one PointAllocation
     * const pointAllocation = await prisma.pointAllocation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PointAllocationFindFirstArgs>(args?: SelectSubset<T, PointAllocationFindFirstArgs<ExtArgs>>): Prisma__PointAllocationClient<$Result.GetResult<Prisma.$PointAllocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PointAllocation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointAllocationFindFirstOrThrowArgs} args - Arguments to find a PointAllocation
     * @example
     * // Get one PointAllocation
     * const pointAllocation = await prisma.pointAllocation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PointAllocationFindFirstOrThrowArgs>(args?: SelectSubset<T, PointAllocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__PointAllocationClient<$Result.GetResult<Prisma.$PointAllocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PointAllocations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointAllocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PointAllocations
     * const pointAllocations = await prisma.pointAllocation.findMany()
     * 
     * // Get first 10 PointAllocations
     * const pointAllocations = await prisma.pointAllocation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pointAllocationWithIdOnly = await prisma.pointAllocation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PointAllocationFindManyArgs>(args?: SelectSubset<T, PointAllocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointAllocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PointAllocation.
     * @param {PointAllocationCreateArgs} args - Arguments to create a PointAllocation.
     * @example
     * // Create one PointAllocation
     * const PointAllocation = await prisma.pointAllocation.create({
     *   data: {
     *     // ... data to create a PointAllocation
     *   }
     * })
     * 
     */
    create<T extends PointAllocationCreateArgs>(args: SelectSubset<T, PointAllocationCreateArgs<ExtArgs>>): Prisma__PointAllocationClient<$Result.GetResult<Prisma.$PointAllocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PointAllocations.
     * @param {PointAllocationCreateManyArgs} args - Arguments to create many PointAllocations.
     * @example
     * // Create many PointAllocations
     * const pointAllocation = await prisma.pointAllocation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PointAllocationCreateManyArgs>(args?: SelectSubset<T, PointAllocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PointAllocations and returns the data saved in the database.
     * @param {PointAllocationCreateManyAndReturnArgs} args - Arguments to create many PointAllocations.
     * @example
     * // Create many PointAllocations
     * const pointAllocation = await prisma.pointAllocation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PointAllocations and only return the `id`
     * const pointAllocationWithIdOnly = await prisma.pointAllocation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PointAllocationCreateManyAndReturnArgs>(args?: SelectSubset<T, PointAllocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointAllocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PointAllocation.
     * @param {PointAllocationDeleteArgs} args - Arguments to delete one PointAllocation.
     * @example
     * // Delete one PointAllocation
     * const PointAllocation = await prisma.pointAllocation.delete({
     *   where: {
     *     // ... filter to delete one PointAllocation
     *   }
     * })
     * 
     */
    delete<T extends PointAllocationDeleteArgs>(args: SelectSubset<T, PointAllocationDeleteArgs<ExtArgs>>): Prisma__PointAllocationClient<$Result.GetResult<Prisma.$PointAllocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PointAllocation.
     * @param {PointAllocationUpdateArgs} args - Arguments to update one PointAllocation.
     * @example
     * // Update one PointAllocation
     * const pointAllocation = await prisma.pointAllocation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PointAllocationUpdateArgs>(args: SelectSubset<T, PointAllocationUpdateArgs<ExtArgs>>): Prisma__PointAllocationClient<$Result.GetResult<Prisma.$PointAllocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PointAllocations.
     * @param {PointAllocationDeleteManyArgs} args - Arguments to filter PointAllocations to delete.
     * @example
     * // Delete a few PointAllocations
     * const { count } = await prisma.pointAllocation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PointAllocationDeleteManyArgs>(args?: SelectSubset<T, PointAllocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PointAllocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointAllocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PointAllocations
     * const pointAllocation = await prisma.pointAllocation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PointAllocationUpdateManyArgs>(args: SelectSubset<T, PointAllocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PointAllocations and returns the data updated in the database.
     * @param {PointAllocationUpdateManyAndReturnArgs} args - Arguments to update many PointAllocations.
     * @example
     * // Update many PointAllocations
     * const pointAllocation = await prisma.pointAllocation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PointAllocations and only return the `id`
     * const pointAllocationWithIdOnly = await prisma.pointAllocation.updateManyAndReturn({
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
    updateManyAndReturn<T extends PointAllocationUpdateManyAndReturnArgs>(args: SelectSubset<T, PointAllocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointAllocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PointAllocation.
     * @param {PointAllocationUpsertArgs} args - Arguments to update or create a PointAllocation.
     * @example
     * // Update or create a PointAllocation
     * const pointAllocation = await prisma.pointAllocation.upsert({
     *   create: {
     *     // ... data to create a PointAllocation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PointAllocation we want to update
     *   }
     * })
     */
    upsert<T extends PointAllocationUpsertArgs>(args: SelectSubset<T, PointAllocationUpsertArgs<ExtArgs>>): Prisma__PointAllocationClient<$Result.GetResult<Prisma.$PointAllocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PointAllocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointAllocationCountArgs} args - Arguments to filter PointAllocations to count.
     * @example
     * // Count the number of PointAllocations
     * const count = await prisma.pointAllocation.count({
     *   where: {
     *     // ... the filter for the PointAllocations we want to count
     *   }
     * })
    **/
    count<T extends PointAllocationCountArgs>(
      args?: Subset<T, PointAllocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PointAllocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PointAllocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointAllocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PointAllocationAggregateArgs>(args: Subset<T, PointAllocationAggregateArgs>): Prisma.PrismaPromise<GetPointAllocationAggregateType<T>>

    /**
     * Group by PointAllocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointAllocationGroupByArgs} args - Group by arguments.
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
      T extends PointAllocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PointAllocationGroupByArgs['orderBy'] }
        : { orderBy?: PointAllocationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PointAllocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPointAllocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PointAllocation model
   */
  readonly fields: PointAllocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PointAllocation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PointAllocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends PointAllocation$customerArgs<ExtArgs> = {}>(args?: Subset<T, PointAllocation$customerArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PointAllocation model
   */
  interface PointAllocationFieldRefs {
    readonly id: FieldRef<"PointAllocation", 'String'>
    readonly customerId: FieldRef<"PointAllocation", 'String'>
    readonly projectId: FieldRef<"PointAllocation", 'String'>
    readonly points: FieldRef<"PointAllocation", 'Int'>
    readonly type: FieldRef<"PointAllocation", 'String'>
    readonly source: FieldRef<"PointAllocation", 'String'>
    readonly createdAt: FieldRef<"PointAllocation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PointAllocation findUnique
   */
  export type PointAllocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointAllocation
     */
    select?: PointAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointAllocation
     */
    omit?: PointAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointAllocationInclude<ExtArgs> | null
    /**
     * Filter, which PointAllocation to fetch.
     */
    where: PointAllocationWhereUniqueInput
  }

  /**
   * PointAllocation findUniqueOrThrow
   */
  export type PointAllocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointAllocation
     */
    select?: PointAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointAllocation
     */
    omit?: PointAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointAllocationInclude<ExtArgs> | null
    /**
     * Filter, which PointAllocation to fetch.
     */
    where: PointAllocationWhereUniqueInput
  }

  /**
   * PointAllocation findFirst
   */
  export type PointAllocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointAllocation
     */
    select?: PointAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointAllocation
     */
    omit?: PointAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointAllocationInclude<ExtArgs> | null
    /**
     * Filter, which PointAllocation to fetch.
     */
    where?: PointAllocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointAllocations to fetch.
     */
    orderBy?: PointAllocationOrderByWithRelationInput | PointAllocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PointAllocations.
     */
    cursor?: PointAllocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointAllocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointAllocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PointAllocations.
     */
    distinct?: PointAllocationScalarFieldEnum | PointAllocationScalarFieldEnum[]
  }

  /**
   * PointAllocation findFirstOrThrow
   */
  export type PointAllocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointAllocation
     */
    select?: PointAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointAllocation
     */
    omit?: PointAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointAllocationInclude<ExtArgs> | null
    /**
     * Filter, which PointAllocation to fetch.
     */
    where?: PointAllocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointAllocations to fetch.
     */
    orderBy?: PointAllocationOrderByWithRelationInput | PointAllocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PointAllocations.
     */
    cursor?: PointAllocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointAllocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointAllocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PointAllocations.
     */
    distinct?: PointAllocationScalarFieldEnum | PointAllocationScalarFieldEnum[]
  }

  /**
   * PointAllocation findMany
   */
  export type PointAllocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointAllocation
     */
    select?: PointAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointAllocation
     */
    omit?: PointAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointAllocationInclude<ExtArgs> | null
    /**
     * Filter, which PointAllocations to fetch.
     */
    where?: PointAllocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointAllocations to fetch.
     */
    orderBy?: PointAllocationOrderByWithRelationInput | PointAllocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PointAllocations.
     */
    cursor?: PointAllocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointAllocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointAllocations.
     */
    skip?: number
    distinct?: PointAllocationScalarFieldEnum | PointAllocationScalarFieldEnum[]
  }

  /**
   * PointAllocation create
   */
  export type PointAllocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointAllocation
     */
    select?: PointAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointAllocation
     */
    omit?: PointAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointAllocationInclude<ExtArgs> | null
    /**
     * The data needed to create a PointAllocation.
     */
    data: XOR<PointAllocationCreateInput, PointAllocationUncheckedCreateInput>
  }

  /**
   * PointAllocation createMany
   */
  export type PointAllocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PointAllocations.
     */
    data: PointAllocationCreateManyInput | PointAllocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PointAllocation createManyAndReturn
   */
  export type PointAllocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointAllocation
     */
    select?: PointAllocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PointAllocation
     */
    omit?: PointAllocationOmit<ExtArgs> | null
    /**
     * The data used to create many PointAllocations.
     */
    data: PointAllocationCreateManyInput | PointAllocationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointAllocationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PointAllocation update
   */
  export type PointAllocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointAllocation
     */
    select?: PointAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointAllocation
     */
    omit?: PointAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointAllocationInclude<ExtArgs> | null
    /**
     * The data needed to update a PointAllocation.
     */
    data: XOR<PointAllocationUpdateInput, PointAllocationUncheckedUpdateInput>
    /**
     * Choose, which PointAllocation to update.
     */
    where: PointAllocationWhereUniqueInput
  }

  /**
   * PointAllocation updateMany
   */
  export type PointAllocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PointAllocations.
     */
    data: XOR<PointAllocationUpdateManyMutationInput, PointAllocationUncheckedUpdateManyInput>
    /**
     * Filter which PointAllocations to update
     */
    where?: PointAllocationWhereInput
    /**
     * Limit how many PointAllocations to update.
     */
    limit?: number
  }

  /**
   * PointAllocation updateManyAndReturn
   */
  export type PointAllocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointAllocation
     */
    select?: PointAllocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PointAllocation
     */
    omit?: PointAllocationOmit<ExtArgs> | null
    /**
     * The data used to update PointAllocations.
     */
    data: XOR<PointAllocationUpdateManyMutationInput, PointAllocationUncheckedUpdateManyInput>
    /**
     * Filter which PointAllocations to update
     */
    where?: PointAllocationWhereInput
    /**
     * Limit how many PointAllocations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointAllocationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PointAllocation upsert
   */
  export type PointAllocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointAllocation
     */
    select?: PointAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointAllocation
     */
    omit?: PointAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointAllocationInclude<ExtArgs> | null
    /**
     * The filter to search for the PointAllocation to update in case it exists.
     */
    where: PointAllocationWhereUniqueInput
    /**
     * In case the PointAllocation found by the `where` argument doesn't exist, create a new PointAllocation with this data.
     */
    create: XOR<PointAllocationCreateInput, PointAllocationUncheckedCreateInput>
    /**
     * In case the PointAllocation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PointAllocationUpdateInput, PointAllocationUncheckedUpdateInput>
  }

  /**
   * PointAllocation delete
   */
  export type PointAllocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointAllocation
     */
    select?: PointAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointAllocation
     */
    omit?: PointAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointAllocationInclude<ExtArgs> | null
    /**
     * Filter which PointAllocation to delete.
     */
    where: PointAllocationWhereUniqueInput
  }

  /**
   * PointAllocation deleteMany
   */
  export type PointAllocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PointAllocations to delete
     */
    where?: PointAllocationWhereInput
    /**
     * Limit how many PointAllocations to delete.
     */
    limit?: number
  }

  /**
   * PointAllocation.customer
   */
  export type PointAllocation$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
  }

  /**
   * PointAllocation without action
   */
  export type PointAllocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointAllocation
     */
    select?: PointAllocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointAllocation
     */
    omit?: PointAllocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointAllocationInclude<ExtArgs> | null
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


  export const CustomerScalarFieldEnum: {
    id: 'id',
    shopifyCustomerId: 'shopifyCustomerId',
    email: 'email',
    firstName: 'firstName',
    lastName: 'lastName',
    totalEarned: 'totalEarned',
    available: 'available',
    used: 'used',
    lastActivity: 'lastActivity',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    story: 'story',
    breakdown: 'breakdown',
    target: 'target',
    current: 'current',
    progress: 'progress',
    image: 'image',
    status: 'status',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const PointEarningScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    orderId: 'orderId',
    orderTotal: 'orderTotal',
    netSales: 'netSales',
    points: 'points',
    isGuest: 'isGuest',
    createdAt: 'createdAt'
  };

  export type PointEarningScalarFieldEnum = (typeof PointEarningScalarFieldEnum)[keyof typeof PointEarningScalarFieldEnum]


  export const PointAllocationScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    projectId: 'projectId',
    points: 'points',
    type: 'type',
    source: 'source',
    createdAt: 'createdAt'
  };

  export type PointAllocationScalarFieldEnum = (typeof PointAllocationScalarFieldEnum)[keyof typeof PointAllocationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    shopifyCustomerId?: StringFilter<"Customer"> | string
    email?: StringFilter<"Customer"> | string
    firstName?: StringNullableFilter<"Customer"> | string | null
    lastName?: StringNullableFilter<"Customer"> | string | null
    totalEarned?: IntFilter<"Customer"> | number
    available?: IntFilter<"Customer"> | number
    used?: IntFilter<"Customer"> | number
    lastActivity?: DateTimeFilter<"Customer"> | Date | string
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    earnings?: PointEarningListRelationFilter
    allocations?: PointAllocationListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    shopifyCustomerId?: SortOrder
    email?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    totalEarned?: SortOrder
    available?: SortOrder
    used?: SortOrder
    lastActivity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    earnings?: PointEarningOrderByRelationAggregateInput
    allocations?: PointAllocationOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shopifyCustomerId?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    email?: StringFilter<"Customer"> | string
    firstName?: StringNullableFilter<"Customer"> | string | null
    lastName?: StringNullableFilter<"Customer"> | string | null
    totalEarned?: IntFilter<"Customer"> | number
    available?: IntFilter<"Customer"> | number
    used?: IntFilter<"Customer"> | number
    lastActivity?: DateTimeFilter<"Customer"> | Date | string
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    earnings?: PointEarningListRelationFilter
    allocations?: PointAllocationListRelationFilter
  }, "id" | "shopifyCustomerId">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    shopifyCustomerId?: SortOrder
    email?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    totalEarned?: SortOrder
    available?: SortOrder
    used?: SortOrder
    lastActivity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    shopifyCustomerId?: StringWithAggregatesFilter<"Customer"> | string
    email?: StringWithAggregatesFilter<"Customer"> | string
    firstName?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    totalEarned?: IntWithAggregatesFilter<"Customer"> | number
    available?: IntWithAggregatesFilter<"Customer"> | number
    used?: IntWithAggregatesFilter<"Customer"> | number
    lastActivity?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    story?: StringNullableFilter<"Project"> | string | null
    breakdown?: JsonNullableFilter<"Project">
    target?: IntFilter<"Project"> | number
    current?: IntFilter<"Project"> | number
    progress?: FloatFilter<"Project"> | number
    image?: StringNullableFilter<"Project"> | string | null
    status?: StringFilter<"Project"> | string
    order?: IntFilter<"Project"> | number
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    allocations?: PointAllocationListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    story?: SortOrderInput | SortOrder
    breakdown?: SortOrderInput | SortOrder
    target?: SortOrder
    current?: SortOrder
    progress?: SortOrder
    image?: SortOrderInput | SortOrder
    status?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    allocations?: PointAllocationOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    title?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    story?: StringNullableFilter<"Project"> | string | null
    breakdown?: JsonNullableFilter<"Project">
    target?: IntFilter<"Project"> | number
    current?: IntFilter<"Project"> | number
    progress?: FloatFilter<"Project"> | number
    image?: StringNullableFilter<"Project"> | string | null
    status?: StringFilter<"Project"> | string
    order?: IntFilter<"Project"> | number
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    allocations?: PointAllocationListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    story?: SortOrderInput | SortOrder
    breakdown?: SortOrderInput | SortOrder
    target?: SortOrder
    current?: SortOrder
    progress?: SortOrder
    image?: SortOrderInput | SortOrder
    status?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    title?: StringWithAggregatesFilter<"Project"> | string
    description?: StringWithAggregatesFilter<"Project"> | string
    story?: StringNullableWithAggregatesFilter<"Project"> | string | null
    breakdown?: JsonNullableWithAggregatesFilter<"Project">
    target?: IntWithAggregatesFilter<"Project"> | number
    current?: IntWithAggregatesFilter<"Project"> | number
    progress?: FloatWithAggregatesFilter<"Project"> | number
    image?: StringNullableWithAggregatesFilter<"Project"> | string | null
    status?: StringWithAggregatesFilter<"Project"> | string
    order?: IntWithAggregatesFilter<"Project"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type PointEarningWhereInput = {
    AND?: PointEarningWhereInput | PointEarningWhereInput[]
    OR?: PointEarningWhereInput[]
    NOT?: PointEarningWhereInput | PointEarningWhereInput[]
    id?: StringFilter<"PointEarning"> | string
    customerId?: StringNullableFilter<"PointEarning"> | string | null
    orderId?: StringFilter<"PointEarning"> | string
    orderTotal?: FloatFilter<"PointEarning"> | number
    netSales?: FloatFilter<"PointEarning"> | number
    points?: IntFilter<"PointEarning"> | number
    isGuest?: BoolFilter<"PointEarning"> | boolean
    createdAt?: DateTimeFilter<"PointEarning"> | Date | string
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
  }

  export type PointEarningOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrderInput | SortOrder
    orderId?: SortOrder
    orderTotal?: SortOrder
    netSales?: SortOrder
    points?: SortOrder
    isGuest?: SortOrder
    createdAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
  }

  export type PointEarningWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PointEarningWhereInput | PointEarningWhereInput[]
    OR?: PointEarningWhereInput[]
    NOT?: PointEarningWhereInput | PointEarningWhereInput[]
    customerId?: StringNullableFilter<"PointEarning"> | string | null
    orderId?: StringFilter<"PointEarning"> | string
    orderTotal?: FloatFilter<"PointEarning"> | number
    netSales?: FloatFilter<"PointEarning"> | number
    points?: IntFilter<"PointEarning"> | number
    isGuest?: BoolFilter<"PointEarning"> | boolean
    createdAt?: DateTimeFilter<"PointEarning"> | Date | string
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
  }, "id">

  export type PointEarningOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrderInput | SortOrder
    orderId?: SortOrder
    orderTotal?: SortOrder
    netSales?: SortOrder
    points?: SortOrder
    isGuest?: SortOrder
    createdAt?: SortOrder
    _count?: PointEarningCountOrderByAggregateInput
    _avg?: PointEarningAvgOrderByAggregateInput
    _max?: PointEarningMaxOrderByAggregateInput
    _min?: PointEarningMinOrderByAggregateInput
    _sum?: PointEarningSumOrderByAggregateInput
  }

  export type PointEarningScalarWhereWithAggregatesInput = {
    AND?: PointEarningScalarWhereWithAggregatesInput | PointEarningScalarWhereWithAggregatesInput[]
    OR?: PointEarningScalarWhereWithAggregatesInput[]
    NOT?: PointEarningScalarWhereWithAggregatesInput | PointEarningScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PointEarning"> | string
    customerId?: StringNullableWithAggregatesFilter<"PointEarning"> | string | null
    orderId?: StringWithAggregatesFilter<"PointEarning"> | string
    orderTotal?: FloatWithAggregatesFilter<"PointEarning"> | number
    netSales?: FloatWithAggregatesFilter<"PointEarning"> | number
    points?: IntWithAggregatesFilter<"PointEarning"> | number
    isGuest?: BoolWithAggregatesFilter<"PointEarning"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PointEarning"> | Date | string
  }

  export type PointAllocationWhereInput = {
    AND?: PointAllocationWhereInput | PointAllocationWhereInput[]
    OR?: PointAllocationWhereInput[]
    NOT?: PointAllocationWhereInput | PointAllocationWhereInput[]
    id?: StringFilter<"PointAllocation"> | string
    customerId?: StringNullableFilter<"PointAllocation"> | string | null
    projectId?: StringFilter<"PointAllocation"> | string
    points?: IntFilter<"PointAllocation"> | number
    type?: StringFilter<"PointAllocation"> | string
    source?: StringNullableFilter<"PointAllocation"> | string | null
    createdAt?: DateTimeFilter<"PointAllocation"> | Date | string
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type PointAllocationOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrderInput | SortOrder
    projectId?: SortOrder
    points?: SortOrder
    type?: SortOrder
    source?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
  }

  export type PointAllocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PointAllocationWhereInput | PointAllocationWhereInput[]
    OR?: PointAllocationWhereInput[]
    NOT?: PointAllocationWhereInput | PointAllocationWhereInput[]
    customerId?: StringNullableFilter<"PointAllocation"> | string | null
    projectId?: StringFilter<"PointAllocation"> | string
    points?: IntFilter<"PointAllocation"> | number
    type?: StringFilter<"PointAllocation"> | string
    source?: StringNullableFilter<"PointAllocation"> | string | null
    createdAt?: DateTimeFilter<"PointAllocation"> | Date | string
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type PointAllocationOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrderInput | SortOrder
    projectId?: SortOrder
    points?: SortOrder
    type?: SortOrder
    source?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PointAllocationCountOrderByAggregateInput
    _avg?: PointAllocationAvgOrderByAggregateInput
    _max?: PointAllocationMaxOrderByAggregateInput
    _min?: PointAllocationMinOrderByAggregateInput
    _sum?: PointAllocationSumOrderByAggregateInput
  }

  export type PointAllocationScalarWhereWithAggregatesInput = {
    AND?: PointAllocationScalarWhereWithAggregatesInput | PointAllocationScalarWhereWithAggregatesInput[]
    OR?: PointAllocationScalarWhereWithAggregatesInput[]
    NOT?: PointAllocationScalarWhereWithAggregatesInput | PointAllocationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PointAllocation"> | string
    customerId?: StringNullableWithAggregatesFilter<"PointAllocation"> | string | null
    projectId?: StringWithAggregatesFilter<"PointAllocation"> | string
    points?: IntWithAggregatesFilter<"PointAllocation"> | number
    type?: StringWithAggregatesFilter<"PointAllocation"> | string
    source?: StringNullableWithAggregatesFilter<"PointAllocation"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PointAllocation"> | Date | string
  }

  export type CustomerCreateInput = {
    id?: string
    shopifyCustomerId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    totalEarned?: number
    available?: number
    used?: number
    lastActivity?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    earnings?: PointEarningCreateNestedManyWithoutCustomerInput
    allocations?: PointAllocationCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    shopifyCustomerId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    totalEarned?: number
    available?: number
    used?: number
    lastActivity?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    earnings?: PointEarningUncheckedCreateNestedManyWithoutCustomerInput
    allocations?: PointAllocationUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopifyCustomerId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    totalEarned?: IntFieldUpdateOperationsInput | number
    available?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
    lastActivity?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    earnings?: PointEarningUpdateManyWithoutCustomerNestedInput
    allocations?: PointAllocationUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopifyCustomerId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    totalEarned?: IntFieldUpdateOperationsInput | number
    available?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
    lastActivity?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    earnings?: PointEarningUncheckedUpdateManyWithoutCustomerNestedInput
    allocations?: PointAllocationUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    shopifyCustomerId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    totalEarned?: number
    available?: number
    used?: number
    lastActivity?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopifyCustomerId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    totalEarned?: IntFieldUpdateOperationsInput | number
    available?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
    lastActivity?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopifyCustomerId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    totalEarned?: IntFieldUpdateOperationsInput | number
    available?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
    lastActivity?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    title: string
    description: string
    story?: string | null
    breakdown?: NullableJsonNullValueInput | InputJsonValue
    target: number
    current?: number
    progress?: number
    image?: string | null
    status?: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    allocations?: PointAllocationCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    story?: string | null
    breakdown?: NullableJsonNullValueInput | InputJsonValue
    target: number
    current?: number
    progress?: number
    image?: string | null
    status?: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    allocations?: PointAllocationUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    story?: NullableStringFieldUpdateOperationsInput | string | null
    breakdown?: NullableJsonNullValueInput | InputJsonValue
    target?: IntFieldUpdateOperationsInput | number
    current?: IntFieldUpdateOperationsInput | number
    progress?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    allocations?: PointAllocationUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    story?: NullableStringFieldUpdateOperationsInput | string | null
    breakdown?: NullableJsonNullValueInput | InputJsonValue
    target?: IntFieldUpdateOperationsInput | number
    current?: IntFieldUpdateOperationsInput | number
    progress?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    allocations?: PointAllocationUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    title: string
    description: string
    story?: string | null
    breakdown?: NullableJsonNullValueInput | InputJsonValue
    target: number
    current?: number
    progress?: number
    image?: string | null
    status?: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    story?: NullableStringFieldUpdateOperationsInput | string | null
    breakdown?: NullableJsonNullValueInput | InputJsonValue
    target?: IntFieldUpdateOperationsInput | number
    current?: IntFieldUpdateOperationsInput | number
    progress?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    story?: NullableStringFieldUpdateOperationsInput | string | null
    breakdown?: NullableJsonNullValueInput | InputJsonValue
    target?: IntFieldUpdateOperationsInput | number
    current?: IntFieldUpdateOperationsInput | number
    progress?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointEarningCreateInput = {
    id?: string
    orderId: string
    orderTotal: number
    netSales: number
    points: number
    isGuest?: boolean
    createdAt?: Date | string
    customer?: CustomerCreateNestedOneWithoutEarningsInput
  }

  export type PointEarningUncheckedCreateInput = {
    id?: string
    customerId?: string | null
    orderId: string
    orderTotal: number
    netSales: number
    points: number
    isGuest?: boolean
    createdAt?: Date | string
  }

  export type PointEarningUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    orderTotal?: FloatFieldUpdateOperationsInput | number
    netSales?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    isGuest?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneWithoutEarningsNestedInput
  }

  export type PointEarningUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: StringFieldUpdateOperationsInput | string
    orderTotal?: FloatFieldUpdateOperationsInput | number
    netSales?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    isGuest?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointEarningCreateManyInput = {
    id?: string
    customerId?: string | null
    orderId: string
    orderTotal: number
    netSales: number
    points: number
    isGuest?: boolean
    createdAt?: Date | string
  }

  export type PointEarningUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    orderTotal?: FloatFieldUpdateOperationsInput | number
    netSales?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    isGuest?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointEarningUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: StringFieldUpdateOperationsInput | string
    orderTotal?: FloatFieldUpdateOperationsInput | number
    netSales?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    isGuest?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointAllocationCreateInput = {
    id?: string
    points: number
    type?: string
    source?: string | null
    createdAt?: Date | string
    customer?: CustomerCreateNestedOneWithoutAllocationsInput
    project: ProjectCreateNestedOneWithoutAllocationsInput
  }

  export type PointAllocationUncheckedCreateInput = {
    id?: string
    customerId?: string | null
    projectId: string
    points: number
    type?: string
    source?: string | null
    createdAt?: Date | string
  }

  export type PointAllocationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneWithoutAllocationsNestedInput
    project?: ProjectUpdateOneRequiredWithoutAllocationsNestedInput
  }

  export type PointAllocationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointAllocationCreateManyInput = {
    id?: string
    customerId?: string | null
    projectId: string
    points: number
    type?: string
    source?: string | null
    createdAt?: Date | string
  }

  export type PointAllocationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointAllocationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type PointEarningListRelationFilter = {
    every?: PointEarningWhereInput
    some?: PointEarningWhereInput
    none?: PointEarningWhereInput
  }

  export type PointAllocationListRelationFilter = {
    every?: PointAllocationWhereInput
    some?: PointAllocationWhereInput
    none?: PointAllocationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PointEarningOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PointAllocationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    shopifyCustomerId?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    totalEarned?: SortOrder
    available?: SortOrder
    used?: SortOrder
    lastActivity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    totalEarned?: SortOrder
    available?: SortOrder
    used?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    shopifyCustomerId?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    totalEarned?: SortOrder
    available?: SortOrder
    used?: SortOrder
    lastActivity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    shopifyCustomerId?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    totalEarned?: SortOrder
    available?: SortOrder
    used?: SortOrder
    lastActivity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    totalEarned?: SortOrder
    available?: SortOrder
    used?: SortOrder
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
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    story?: SortOrder
    breakdown?: SortOrder
    target?: SortOrder
    current?: SortOrder
    progress?: SortOrder
    image?: SortOrder
    status?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    target?: SortOrder
    current?: SortOrder
    progress?: SortOrder
    order?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    story?: SortOrder
    target?: SortOrder
    current?: SortOrder
    progress?: SortOrder
    image?: SortOrder
    status?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    story?: SortOrder
    target?: SortOrder
    current?: SortOrder
    progress?: SortOrder
    image?: SortOrder
    status?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    target?: SortOrder
    current?: SortOrder
    progress?: SortOrder
    order?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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

  export type CustomerNullableScalarRelationFilter = {
    is?: CustomerWhereInput | null
    isNot?: CustomerWhereInput | null
  }

  export type PointEarningCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    orderId?: SortOrder
    orderTotal?: SortOrder
    netSales?: SortOrder
    points?: SortOrder
    isGuest?: SortOrder
    createdAt?: SortOrder
  }

  export type PointEarningAvgOrderByAggregateInput = {
    orderTotal?: SortOrder
    netSales?: SortOrder
    points?: SortOrder
  }

  export type PointEarningMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    orderId?: SortOrder
    orderTotal?: SortOrder
    netSales?: SortOrder
    points?: SortOrder
    isGuest?: SortOrder
    createdAt?: SortOrder
  }

  export type PointEarningMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    orderId?: SortOrder
    orderTotal?: SortOrder
    netSales?: SortOrder
    points?: SortOrder
    isGuest?: SortOrder
    createdAt?: SortOrder
  }

  export type PointEarningSumOrderByAggregateInput = {
    orderTotal?: SortOrder
    netSales?: SortOrder
    points?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type PointAllocationCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    projectId?: SortOrder
    points?: SortOrder
    type?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type PointAllocationAvgOrderByAggregateInput = {
    points?: SortOrder
  }

  export type PointAllocationMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    projectId?: SortOrder
    points?: SortOrder
    type?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type PointAllocationMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    projectId?: SortOrder
    points?: SortOrder
    type?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type PointAllocationSumOrderByAggregateInput = {
    points?: SortOrder
  }

  export type PointEarningCreateNestedManyWithoutCustomerInput = {
    create?: XOR<PointEarningCreateWithoutCustomerInput, PointEarningUncheckedCreateWithoutCustomerInput> | PointEarningCreateWithoutCustomerInput[] | PointEarningUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PointEarningCreateOrConnectWithoutCustomerInput | PointEarningCreateOrConnectWithoutCustomerInput[]
    createMany?: PointEarningCreateManyCustomerInputEnvelope
    connect?: PointEarningWhereUniqueInput | PointEarningWhereUniqueInput[]
  }

  export type PointAllocationCreateNestedManyWithoutCustomerInput = {
    create?: XOR<PointAllocationCreateWithoutCustomerInput, PointAllocationUncheckedCreateWithoutCustomerInput> | PointAllocationCreateWithoutCustomerInput[] | PointAllocationUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PointAllocationCreateOrConnectWithoutCustomerInput | PointAllocationCreateOrConnectWithoutCustomerInput[]
    createMany?: PointAllocationCreateManyCustomerInputEnvelope
    connect?: PointAllocationWhereUniqueInput | PointAllocationWhereUniqueInput[]
  }

  export type PointEarningUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<PointEarningCreateWithoutCustomerInput, PointEarningUncheckedCreateWithoutCustomerInput> | PointEarningCreateWithoutCustomerInput[] | PointEarningUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PointEarningCreateOrConnectWithoutCustomerInput | PointEarningCreateOrConnectWithoutCustomerInput[]
    createMany?: PointEarningCreateManyCustomerInputEnvelope
    connect?: PointEarningWhereUniqueInput | PointEarningWhereUniqueInput[]
  }

  export type PointAllocationUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<PointAllocationCreateWithoutCustomerInput, PointAllocationUncheckedCreateWithoutCustomerInput> | PointAllocationCreateWithoutCustomerInput[] | PointAllocationUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PointAllocationCreateOrConnectWithoutCustomerInput | PointAllocationCreateOrConnectWithoutCustomerInput[]
    createMany?: PointAllocationCreateManyCustomerInputEnvelope
    connect?: PointAllocationWhereUniqueInput | PointAllocationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PointEarningUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<PointEarningCreateWithoutCustomerInput, PointEarningUncheckedCreateWithoutCustomerInput> | PointEarningCreateWithoutCustomerInput[] | PointEarningUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PointEarningCreateOrConnectWithoutCustomerInput | PointEarningCreateOrConnectWithoutCustomerInput[]
    upsert?: PointEarningUpsertWithWhereUniqueWithoutCustomerInput | PointEarningUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: PointEarningCreateManyCustomerInputEnvelope
    set?: PointEarningWhereUniqueInput | PointEarningWhereUniqueInput[]
    disconnect?: PointEarningWhereUniqueInput | PointEarningWhereUniqueInput[]
    delete?: PointEarningWhereUniqueInput | PointEarningWhereUniqueInput[]
    connect?: PointEarningWhereUniqueInput | PointEarningWhereUniqueInput[]
    update?: PointEarningUpdateWithWhereUniqueWithoutCustomerInput | PointEarningUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: PointEarningUpdateManyWithWhereWithoutCustomerInput | PointEarningUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: PointEarningScalarWhereInput | PointEarningScalarWhereInput[]
  }

  export type PointAllocationUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<PointAllocationCreateWithoutCustomerInput, PointAllocationUncheckedCreateWithoutCustomerInput> | PointAllocationCreateWithoutCustomerInput[] | PointAllocationUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PointAllocationCreateOrConnectWithoutCustomerInput | PointAllocationCreateOrConnectWithoutCustomerInput[]
    upsert?: PointAllocationUpsertWithWhereUniqueWithoutCustomerInput | PointAllocationUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: PointAllocationCreateManyCustomerInputEnvelope
    set?: PointAllocationWhereUniqueInput | PointAllocationWhereUniqueInput[]
    disconnect?: PointAllocationWhereUniqueInput | PointAllocationWhereUniqueInput[]
    delete?: PointAllocationWhereUniqueInput | PointAllocationWhereUniqueInput[]
    connect?: PointAllocationWhereUniqueInput | PointAllocationWhereUniqueInput[]
    update?: PointAllocationUpdateWithWhereUniqueWithoutCustomerInput | PointAllocationUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: PointAllocationUpdateManyWithWhereWithoutCustomerInput | PointAllocationUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: PointAllocationScalarWhereInput | PointAllocationScalarWhereInput[]
  }

  export type PointEarningUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<PointEarningCreateWithoutCustomerInput, PointEarningUncheckedCreateWithoutCustomerInput> | PointEarningCreateWithoutCustomerInput[] | PointEarningUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PointEarningCreateOrConnectWithoutCustomerInput | PointEarningCreateOrConnectWithoutCustomerInput[]
    upsert?: PointEarningUpsertWithWhereUniqueWithoutCustomerInput | PointEarningUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: PointEarningCreateManyCustomerInputEnvelope
    set?: PointEarningWhereUniqueInput | PointEarningWhereUniqueInput[]
    disconnect?: PointEarningWhereUniqueInput | PointEarningWhereUniqueInput[]
    delete?: PointEarningWhereUniqueInput | PointEarningWhereUniqueInput[]
    connect?: PointEarningWhereUniqueInput | PointEarningWhereUniqueInput[]
    update?: PointEarningUpdateWithWhereUniqueWithoutCustomerInput | PointEarningUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: PointEarningUpdateManyWithWhereWithoutCustomerInput | PointEarningUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: PointEarningScalarWhereInput | PointEarningScalarWhereInput[]
  }

  export type PointAllocationUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<PointAllocationCreateWithoutCustomerInput, PointAllocationUncheckedCreateWithoutCustomerInput> | PointAllocationCreateWithoutCustomerInput[] | PointAllocationUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PointAllocationCreateOrConnectWithoutCustomerInput | PointAllocationCreateOrConnectWithoutCustomerInput[]
    upsert?: PointAllocationUpsertWithWhereUniqueWithoutCustomerInput | PointAllocationUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: PointAllocationCreateManyCustomerInputEnvelope
    set?: PointAllocationWhereUniqueInput | PointAllocationWhereUniqueInput[]
    disconnect?: PointAllocationWhereUniqueInput | PointAllocationWhereUniqueInput[]
    delete?: PointAllocationWhereUniqueInput | PointAllocationWhereUniqueInput[]
    connect?: PointAllocationWhereUniqueInput | PointAllocationWhereUniqueInput[]
    update?: PointAllocationUpdateWithWhereUniqueWithoutCustomerInput | PointAllocationUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: PointAllocationUpdateManyWithWhereWithoutCustomerInput | PointAllocationUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: PointAllocationScalarWhereInput | PointAllocationScalarWhereInput[]
  }

  export type PointAllocationCreateNestedManyWithoutProjectInput = {
    create?: XOR<PointAllocationCreateWithoutProjectInput, PointAllocationUncheckedCreateWithoutProjectInput> | PointAllocationCreateWithoutProjectInput[] | PointAllocationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PointAllocationCreateOrConnectWithoutProjectInput | PointAllocationCreateOrConnectWithoutProjectInput[]
    createMany?: PointAllocationCreateManyProjectInputEnvelope
    connect?: PointAllocationWhereUniqueInput | PointAllocationWhereUniqueInput[]
  }

  export type PointAllocationUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<PointAllocationCreateWithoutProjectInput, PointAllocationUncheckedCreateWithoutProjectInput> | PointAllocationCreateWithoutProjectInput[] | PointAllocationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PointAllocationCreateOrConnectWithoutProjectInput | PointAllocationCreateOrConnectWithoutProjectInput[]
    createMany?: PointAllocationCreateManyProjectInputEnvelope
    connect?: PointAllocationWhereUniqueInput | PointAllocationWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PointAllocationUpdateManyWithoutProjectNestedInput = {
    create?: XOR<PointAllocationCreateWithoutProjectInput, PointAllocationUncheckedCreateWithoutProjectInput> | PointAllocationCreateWithoutProjectInput[] | PointAllocationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PointAllocationCreateOrConnectWithoutProjectInput | PointAllocationCreateOrConnectWithoutProjectInput[]
    upsert?: PointAllocationUpsertWithWhereUniqueWithoutProjectInput | PointAllocationUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: PointAllocationCreateManyProjectInputEnvelope
    set?: PointAllocationWhereUniqueInput | PointAllocationWhereUniqueInput[]
    disconnect?: PointAllocationWhereUniqueInput | PointAllocationWhereUniqueInput[]
    delete?: PointAllocationWhereUniqueInput | PointAllocationWhereUniqueInput[]
    connect?: PointAllocationWhereUniqueInput | PointAllocationWhereUniqueInput[]
    update?: PointAllocationUpdateWithWhereUniqueWithoutProjectInput | PointAllocationUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: PointAllocationUpdateManyWithWhereWithoutProjectInput | PointAllocationUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: PointAllocationScalarWhereInput | PointAllocationScalarWhereInput[]
  }

  export type PointAllocationUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<PointAllocationCreateWithoutProjectInput, PointAllocationUncheckedCreateWithoutProjectInput> | PointAllocationCreateWithoutProjectInput[] | PointAllocationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PointAllocationCreateOrConnectWithoutProjectInput | PointAllocationCreateOrConnectWithoutProjectInput[]
    upsert?: PointAllocationUpsertWithWhereUniqueWithoutProjectInput | PointAllocationUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: PointAllocationCreateManyProjectInputEnvelope
    set?: PointAllocationWhereUniqueInput | PointAllocationWhereUniqueInput[]
    disconnect?: PointAllocationWhereUniqueInput | PointAllocationWhereUniqueInput[]
    delete?: PointAllocationWhereUniqueInput | PointAllocationWhereUniqueInput[]
    connect?: PointAllocationWhereUniqueInput | PointAllocationWhereUniqueInput[]
    update?: PointAllocationUpdateWithWhereUniqueWithoutProjectInput | PointAllocationUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: PointAllocationUpdateManyWithWhereWithoutProjectInput | PointAllocationUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: PointAllocationScalarWhereInput | PointAllocationScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutEarningsInput = {
    create?: XOR<CustomerCreateWithoutEarningsInput, CustomerUncheckedCreateWithoutEarningsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutEarningsInput
    connect?: CustomerWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CustomerUpdateOneWithoutEarningsNestedInput = {
    create?: XOR<CustomerCreateWithoutEarningsInput, CustomerUncheckedCreateWithoutEarningsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutEarningsInput
    upsert?: CustomerUpsertWithoutEarningsInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutEarningsInput, CustomerUpdateWithoutEarningsInput>, CustomerUncheckedUpdateWithoutEarningsInput>
  }

  export type CustomerCreateNestedOneWithoutAllocationsInput = {
    create?: XOR<CustomerCreateWithoutAllocationsInput, CustomerUncheckedCreateWithoutAllocationsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutAllocationsInput
    connect?: CustomerWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutAllocationsInput = {
    create?: XOR<ProjectCreateWithoutAllocationsInput, ProjectUncheckedCreateWithoutAllocationsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutAllocationsInput
    connect?: ProjectWhereUniqueInput
  }

  export type CustomerUpdateOneWithoutAllocationsNestedInput = {
    create?: XOR<CustomerCreateWithoutAllocationsInput, CustomerUncheckedCreateWithoutAllocationsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutAllocationsInput
    upsert?: CustomerUpsertWithoutAllocationsInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutAllocationsInput, CustomerUpdateWithoutAllocationsInput>, CustomerUncheckedUpdateWithoutAllocationsInput>
  }

  export type ProjectUpdateOneRequiredWithoutAllocationsNestedInput = {
    create?: XOR<ProjectCreateWithoutAllocationsInput, ProjectUncheckedCreateWithoutAllocationsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutAllocationsInput
    upsert?: ProjectUpsertWithoutAllocationsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutAllocationsInput, ProjectUpdateWithoutAllocationsInput>, ProjectUncheckedUpdateWithoutAllocationsInput>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type PointEarningCreateWithoutCustomerInput = {
    id?: string
    orderId: string
    orderTotal: number
    netSales: number
    points: number
    isGuest?: boolean
    createdAt?: Date | string
  }

  export type PointEarningUncheckedCreateWithoutCustomerInput = {
    id?: string
    orderId: string
    orderTotal: number
    netSales: number
    points: number
    isGuest?: boolean
    createdAt?: Date | string
  }

  export type PointEarningCreateOrConnectWithoutCustomerInput = {
    where: PointEarningWhereUniqueInput
    create: XOR<PointEarningCreateWithoutCustomerInput, PointEarningUncheckedCreateWithoutCustomerInput>
  }

  export type PointEarningCreateManyCustomerInputEnvelope = {
    data: PointEarningCreateManyCustomerInput | PointEarningCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type PointAllocationCreateWithoutCustomerInput = {
    id?: string
    points: number
    type?: string
    source?: string | null
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutAllocationsInput
  }

  export type PointAllocationUncheckedCreateWithoutCustomerInput = {
    id?: string
    projectId: string
    points: number
    type?: string
    source?: string | null
    createdAt?: Date | string
  }

  export type PointAllocationCreateOrConnectWithoutCustomerInput = {
    where: PointAllocationWhereUniqueInput
    create: XOR<PointAllocationCreateWithoutCustomerInput, PointAllocationUncheckedCreateWithoutCustomerInput>
  }

  export type PointAllocationCreateManyCustomerInputEnvelope = {
    data: PointAllocationCreateManyCustomerInput | PointAllocationCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type PointEarningUpsertWithWhereUniqueWithoutCustomerInput = {
    where: PointEarningWhereUniqueInput
    update: XOR<PointEarningUpdateWithoutCustomerInput, PointEarningUncheckedUpdateWithoutCustomerInput>
    create: XOR<PointEarningCreateWithoutCustomerInput, PointEarningUncheckedCreateWithoutCustomerInput>
  }

  export type PointEarningUpdateWithWhereUniqueWithoutCustomerInput = {
    where: PointEarningWhereUniqueInput
    data: XOR<PointEarningUpdateWithoutCustomerInput, PointEarningUncheckedUpdateWithoutCustomerInput>
  }

  export type PointEarningUpdateManyWithWhereWithoutCustomerInput = {
    where: PointEarningScalarWhereInput
    data: XOR<PointEarningUpdateManyMutationInput, PointEarningUncheckedUpdateManyWithoutCustomerInput>
  }

  export type PointEarningScalarWhereInput = {
    AND?: PointEarningScalarWhereInput | PointEarningScalarWhereInput[]
    OR?: PointEarningScalarWhereInput[]
    NOT?: PointEarningScalarWhereInput | PointEarningScalarWhereInput[]
    id?: StringFilter<"PointEarning"> | string
    customerId?: StringNullableFilter<"PointEarning"> | string | null
    orderId?: StringFilter<"PointEarning"> | string
    orderTotal?: FloatFilter<"PointEarning"> | number
    netSales?: FloatFilter<"PointEarning"> | number
    points?: IntFilter<"PointEarning"> | number
    isGuest?: BoolFilter<"PointEarning"> | boolean
    createdAt?: DateTimeFilter<"PointEarning"> | Date | string
  }

  export type PointAllocationUpsertWithWhereUniqueWithoutCustomerInput = {
    where: PointAllocationWhereUniqueInput
    update: XOR<PointAllocationUpdateWithoutCustomerInput, PointAllocationUncheckedUpdateWithoutCustomerInput>
    create: XOR<PointAllocationCreateWithoutCustomerInput, PointAllocationUncheckedCreateWithoutCustomerInput>
  }

  export type PointAllocationUpdateWithWhereUniqueWithoutCustomerInput = {
    where: PointAllocationWhereUniqueInput
    data: XOR<PointAllocationUpdateWithoutCustomerInput, PointAllocationUncheckedUpdateWithoutCustomerInput>
  }

  export type PointAllocationUpdateManyWithWhereWithoutCustomerInput = {
    where: PointAllocationScalarWhereInput
    data: XOR<PointAllocationUpdateManyMutationInput, PointAllocationUncheckedUpdateManyWithoutCustomerInput>
  }

  export type PointAllocationScalarWhereInput = {
    AND?: PointAllocationScalarWhereInput | PointAllocationScalarWhereInput[]
    OR?: PointAllocationScalarWhereInput[]
    NOT?: PointAllocationScalarWhereInput | PointAllocationScalarWhereInput[]
    id?: StringFilter<"PointAllocation"> | string
    customerId?: StringNullableFilter<"PointAllocation"> | string | null
    projectId?: StringFilter<"PointAllocation"> | string
    points?: IntFilter<"PointAllocation"> | number
    type?: StringFilter<"PointAllocation"> | string
    source?: StringNullableFilter<"PointAllocation"> | string | null
    createdAt?: DateTimeFilter<"PointAllocation"> | Date | string
  }

  export type PointAllocationCreateWithoutProjectInput = {
    id?: string
    points: number
    type?: string
    source?: string | null
    createdAt?: Date | string
    customer?: CustomerCreateNestedOneWithoutAllocationsInput
  }

  export type PointAllocationUncheckedCreateWithoutProjectInput = {
    id?: string
    customerId?: string | null
    points: number
    type?: string
    source?: string | null
    createdAt?: Date | string
  }

  export type PointAllocationCreateOrConnectWithoutProjectInput = {
    where: PointAllocationWhereUniqueInput
    create: XOR<PointAllocationCreateWithoutProjectInput, PointAllocationUncheckedCreateWithoutProjectInput>
  }

  export type PointAllocationCreateManyProjectInputEnvelope = {
    data: PointAllocationCreateManyProjectInput | PointAllocationCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type PointAllocationUpsertWithWhereUniqueWithoutProjectInput = {
    where: PointAllocationWhereUniqueInput
    update: XOR<PointAllocationUpdateWithoutProjectInput, PointAllocationUncheckedUpdateWithoutProjectInput>
    create: XOR<PointAllocationCreateWithoutProjectInput, PointAllocationUncheckedCreateWithoutProjectInput>
  }

  export type PointAllocationUpdateWithWhereUniqueWithoutProjectInput = {
    where: PointAllocationWhereUniqueInput
    data: XOR<PointAllocationUpdateWithoutProjectInput, PointAllocationUncheckedUpdateWithoutProjectInput>
  }

  export type PointAllocationUpdateManyWithWhereWithoutProjectInput = {
    where: PointAllocationScalarWhereInput
    data: XOR<PointAllocationUpdateManyMutationInput, PointAllocationUncheckedUpdateManyWithoutProjectInput>
  }

  export type CustomerCreateWithoutEarningsInput = {
    id?: string
    shopifyCustomerId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    totalEarned?: number
    available?: number
    used?: number
    lastActivity?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    allocations?: PointAllocationCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutEarningsInput = {
    id?: string
    shopifyCustomerId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    totalEarned?: number
    available?: number
    used?: number
    lastActivity?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    allocations?: PointAllocationUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutEarningsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutEarningsInput, CustomerUncheckedCreateWithoutEarningsInput>
  }

  export type CustomerUpsertWithoutEarningsInput = {
    update: XOR<CustomerUpdateWithoutEarningsInput, CustomerUncheckedUpdateWithoutEarningsInput>
    create: XOR<CustomerCreateWithoutEarningsInput, CustomerUncheckedCreateWithoutEarningsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutEarningsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutEarningsInput, CustomerUncheckedUpdateWithoutEarningsInput>
  }

  export type CustomerUpdateWithoutEarningsInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopifyCustomerId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    totalEarned?: IntFieldUpdateOperationsInput | number
    available?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
    lastActivity?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    allocations?: PointAllocationUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutEarningsInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopifyCustomerId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    totalEarned?: IntFieldUpdateOperationsInput | number
    available?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
    lastActivity?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    allocations?: PointAllocationUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateWithoutAllocationsInput = {
    id?: string
    shopifyCustomerId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    totalEarned?: number
    available?: number
    used?: number
    lastActivity?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    earnings?: PointEarningCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutAllocationsInput = {
    id?: string
    shopifyCustomerId: string
    email: string
    firstName?: string | null
    lastName?: string | null
    totalEarned?: number
    available?: number
    used?: number
    lastActivity?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    earnings?: PointEarningUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutAllocationsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutAllocationsInput, CustomerUncheckedCreateWithoutAllocationsInput>
  }

  export type ProjectCreateWithoutAllocationsInput = {
    id?: string
    title: string
    description: string
    story?: string | null
    breakdown?: NullableJsonNullValueInput | InputJsonValue
    target: number
    current?: number
    progress?: number
    image?: string | null
    status?: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUncheckedCreateWithoutAllocationsInput = {
    id?: string
    title: string
    description: string
    story?: string | null
    breakdown?: NullableJsonNullValueInput | InputJsonValue
    target: number
    current?: number
    progress?: number
    image?: string | null
    status?: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateOrConnectWithoutAllocationsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutAllocationsInput, ProjectUncheckedCreateWithoutAllocationsInput>
  }

  export type CustomerUpsertWithoutAllocationsInput = {
    update: XOR<CustomerUpdateWithoutAllocationsInput, CustomerUncheckedUpdateWithoutAllocationsInput>
    create: XOR<CustomerCreateWithoutAllocationsInput, CustomerUncheckedCreateWithoutAllocationsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutAllocationsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutAllocationsInput, CustomerUncheckedUpdateWithoutAllocationsInput>
  }

  export type CustomerUpdateWithoutAllocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopifyCustomerId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    totalEarned?: IntFieldUpdateOperationsInput | number
    available?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
    lastActivity?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    earnings?: PointEarningUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutAllocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopifyCustomerId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    totalEarned?: IntFieldUpdateOperationsInput | number
    available?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
    lastActivity?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    earnings?: PointEarningUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type ProjectUpsertWithoutAllocationsInput = {
    update: XOR<ProjectUpdateWithoutAllocationsInput, ProjectUncheckedUpdateWithoutAllocationsInput>
    create: XOR<ProjectCreateWithoutAllocationsInput, ProjectUncheckedCreateWithoutAllocationsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutAllocationsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutAllocationsInput, ProjectUncheckedUpdateWithoutAllocationsInput>
  }

  export type ProjectUpdateWithoutAllocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    story?: NullableStringFieldUpdateOperationsInput | string | null
    breakdown?: NullableJsonNullValueInput | InputJsonValue
    target?: IntFieldUpdateOperationsInput | number
    current?: IntFieldUpdateOperationsInput | number
    progress?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateWithoutAllocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    story?: NullableStringFieldUpdateOperationsInput | string | null
    breakdown?: NullableJsonNullValueInput | InputJsonValue
    target?: IntFieldUpdateOperationsInput | number
    current?: IntFieldUpdateOperationsInput | number
    progress?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointEarningCreateManyCustomerInput = {
    id?: string
    orderId: string
    orderTotal: number
    netSales: number
    points: number
    isGuest?: boolean
    createdAt?: Date | string
  }

  export type PointAllocationCreateManyCustomerInput = {
    id?: string
    projectId: string
    points: number
    type?: string
    source?: string | null
    createdAt?: Date | string
  }

  export type PointEarningUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    orderTotal?: FloatFieldUpdateOperationsInput | number
    netSales?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    isGuest?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointEarningUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    orderTotal?: FloatFieldUpdateOperationsInput | number
    netSales?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    isGuest?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointEarningUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    orderTotal?: FloatFieldUpdateOperationsInput | number
    netSales?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    isGuest?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointAllocationUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutAllocationsNestedInput
  }

  export type PointAllocationUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointAllocationUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointAllocationCreateManyProjectInput = {
    id?: string
    customerId?: string | null
    points: number
    type?: string
    source?: string | null
    createdAt?: Date | string
  }

  export type PointAllocationUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneWithoutAllocationsNestedInput
  }

  export type PointAllocationUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointAllocationUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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