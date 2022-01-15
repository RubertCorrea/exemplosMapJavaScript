/** O método has() retorna um booleano indicando se o elemento com a chave especificada existe ou não.
 * 
 * 
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map/has
 */

const map1 = new Map();
map1.set('bar', 'foo');

console.log(map1.has('bar'));
console.log(map1.has('baz'));