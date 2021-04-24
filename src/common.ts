import { paramCase } from 'param-case';

export function convertName(name: string) {
  name = paramCase(name);
  name = name.replace(/^create-/g, '');
  name = name.replace(/^delete-/g, '');
  name = name.replace(/^find-/g, '');
  name = name.replace(/^get-/g, '');
  name = name.replace(/^mutation-/g, '');
  name = name.replace(/^update-/g, '');
  return name;
}

export function isNil<T>(val: T) {
  return val == null;
}
