export type Opaque<T, K> = T & { __opaque__: K };
export type JsonString<T> = Opaque<string, T>;

export interface AuthWithEmailAndPassword {
  email: string;
  password: string;
}

export interface HasId<T> {
  id: T;
}
