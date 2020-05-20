import { cube } from './math'
import $ from './jquery'
export function one(x) {
  console.log('one')
  console.log($('div'))
  return cube(1);
}