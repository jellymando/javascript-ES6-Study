//키 값을 가지는 새로운 Array Iterator 객체를 반환합니다.


var a = ['a', 'b', 'c'];
var iterator = a.entries();

for (let e of iterator) {
  console.log(e);
}
// [0, 'a']
// [1, 'b']
// [2, 'c'] 
