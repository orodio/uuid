import "babel-polyfill"

const CHARS = "0123456789abcdefghijklmnopqrstuvwxyz"
const char  = () => CHARS[~~(Math.random() * CHARS.length)]

const group = (len = 4, res = "") =>
  !!len
    ? group(len - 1, res + char())
    : res

export default () =>
  [8,4,4,4,12]
    .map(n => group(n))
    .join("-")
