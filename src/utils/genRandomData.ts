import { isNumber } from '@/utils/is';

export function genRandomNumber(range: [number, number] | number) {
  let _range = range;
  if (isNumber(_range)) {
    _range = [0, _range];
  }
  const [start, end] = _range;
  return Math.round(start + Math.random() * (end - start));
}

export function genRandomString(length: number) {
  let str = '';
  for (let i = 0; i < length; i++) {
    str = str.concat(String.fromCharCode(genRandomNumber([97, 122])));
  }
  return str;
}
