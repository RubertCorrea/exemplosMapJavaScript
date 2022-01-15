/** O método delete() remove o elemento específico do objeto Map através de sua chave.
 * 
 * 
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map/delete
 */

const map1 = new Map();
map1.set('bar', 'foo');


console.log(map1.delete('bar'));
// resultado: true
// (true indica que foi removido com sucesso)

console.log(map1.has('bar'));
// resultado: false