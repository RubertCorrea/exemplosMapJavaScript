/** O método get() retorna um elemento específico do objeto Map. Se o valor associado à chave for um objeto, será retornado a referência do objeto e qualquer mudança no mesmo irá afetar o valor que está dentro do objeto Map.
 * 
 * 
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map/get
 */

const map1 = new Map();
map1.set('bar', 'foo');

console.log(map1.get('bar'));
console.log(map1.get('baz'));