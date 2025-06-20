// global.d.ts
import 'next';

declare module 'next' {
  export type PageProps<T = {}> = {
    params: T;
    searchParams?: { [key: string]: string | string[] | undefined };
  };
}