type FilterType<source, types> = Pick<
  source,
  {
    [K in keyof source]: source[K] extends types ? K : never;
  }[keyof source]
>;

interface Example {
  name: string;
  title: string;
  height: number;
}
type newType = FilterType<Example, string>;
// {
//   name: string;
//   title: string;
// }
