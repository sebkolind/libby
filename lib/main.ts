import { Options } from "./types";

const main = (options: Options) => {
  const str = `${options.foo} + ${options.bar}`;

  return str;
};

export { main };
