import { cube } from './math.js'
import { one } from './one.js'
import './index.css'
import $  from 'jquery'
console.log(cube(5))
function getTwo() {
  return import(/* webpackChunkName: "two" */ './two.js').then(({two}) => {
    two()
  })
}
console.log($('div'))
getTwo()
function getComponent() {
  return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack11111112222222222222222222', 'cube =' + cube(5), 'one=' + one()], ' ');

    return element;

  }).catch(error => 'An error occurred while loading the component');
}

getComponent().then(component => {
  document.body.appendChild(component);
})