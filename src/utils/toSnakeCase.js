import { compose, map, is, curry, zipObj, keys, values } from "ramda";

export const mapKeys = curry((fn, obj) =>
  zipObj(map(fn, keys(obj)), values(obj))
);

const toSnake = (str) => {
  return str
    .replace(/\./g, "__")
    .replace(/([A-Z])/g, ($1) => "_" + $1.toLowerCase());
};

const toSnakeCase = (data) => {
  if (is(Array, data)) {
    return map(toSnakeCase, data);
  }

  if (is(Object, data)) {
    return compose(map(toSnakeCase), mapKeys(toSnake))(data);
  }

  return data;
};

export default toSnakeCase;
