import { CSS_SIZE_UNIT_REGEX } from "./RegExps";

export function cssSizeToInt(object) {
  const result = {};

  for (let [key, value] of Object.entries(object)) {
    const [number, _] = value.split(CSS_SIZE_UNIT_REGEX);

    const convertToNumber = Number(number);

    result[key] = convertToNumber;
  }

  return result;
}
