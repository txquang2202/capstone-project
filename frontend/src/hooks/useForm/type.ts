/* eslint-disable @typescript-eslint/no-explicit-any */

type ArrayKey = number;

type IsTuple<T extends ReadonlyArray<any>> = number extends T['length'] ? false : true;

type Primitive = null | undefined | string | number | boolean | symbol | bigint;

type IsEqual<T1, T2> = T1 extends T2
  ? (<G>() => G extends T1 ? 1 : 2) extends <G>() => G extends T2 ? 1 : 2
    ? true
    : false
  : false;

type AnyIsEqual<T1, T2> = T1 extends T2 ? (IsEqual<T1, T2> extends true ? true : never) : never;

type TupleKeys<T extends ReadonlyArray<any>> = Exclude<keyof T, keyof any[]>;

type PathImpl<K extends string | number, V, TraversedTypes> = V extends Primitive
  ? `${K}`
  : true extends AnyIsEqual<TraversedTypes, V>
  ? `${K}`
  : `${K}` | `${K}.${PathInternal<V, TraversedTypes | V>}`;

type PathInternal<T, TraversedTypes = T> = T extends ReadonlyArray<infer V>
  ? IsTuple<T> extends true
    ? {
        [K in TupleKeys<T>]-?: PathImpl<K & string, T[K], TraversedTypes>;
      }[TupleKeys<T>]
    : PathImpl<ArrayKey, V, TraversedTypes>
  : {
      [K in keyof T]-?: PathImpl<K & string, T[K], TraversedTypes>;
    }[keyof T];

type Path<T> = T extends any ? PathInternal<T> : never;

export type FieldValues = Record<string, any>;

export type FieldPath<TFieldValues> = Path<TFieldValues>;

export type PathValue<T, P> = T extends any
  ? P extends `${infer K}.${infer R}`
    ? K extends keyof T
      ? R extends Path<T[K]>
        ? PathValue<T[K], R>
        : never
      : K extends `${ArrayKey}`
      ? T extends ReadonlyArray<infer V>
        ? PathValue<V, R & Path<V>>
        : never
      : never
    : P extends keyof T
    ? T[P]
    : P extends `${ArrayKey}`
    ? T extends ReadonlyArray<infer V>
      ? V
      : never
    : never
  : never;

export type FieldPathValue<
  TFieldValues,
  TFieldPath extends FieldPath<TFieldValues> | keyof TFieldValues,
> = PathValue<TFieldValues, TFieldPath>;

type Config<T> = {
  value: T;
  message: string;
};

export type FormRequired = boolean | Config<boolean>;
export type FormNumber = number | Config<number>;
export type FormPattern = RegExp | string | Config<RegExp | string>;
