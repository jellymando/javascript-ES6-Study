#배열의 일부를 복사한 뒤, 배열의 길이를 수정하지 않고 동일한 배열의 다른 위치에 덮어쓰고 반환.
#arr.copyWithin(target[, start[, end]])
#target: target번째부터 덮어쓴다. 음수를 지정하면 인덱스를 배열의 끝에서부터 계산.
#start: start번째부터 복사.
#end: end 전까지만 복사. 지정하지 않으면 배열의 끝까지 복사.


["Banana", "Orange", "Apple", "Mango"].copyWithin(0,2);
//2번째부터의 요소를 0번째부터 덮어쓴다.
//["Apple", "Mango", "Apple", "Mango"]

["Banana", "Orange", "Apple", "Mango"].copyWithin(2,0);
//0번째부터의 요소를 2번째부터 덮어쓴다.
//["Banana", "Orange", "Banana", "Orange"]

[1, 2, 3, 4, 5].copyWithin(-2);
//-2번째부터 배열을 덮어쓴다.
//[1, 2, 3, 1, 2]

[1, 2, 3, 4, 5].copyWithin(0, 3, 4);
//3번째부터 4 이전까지 복사해서 0번째부터 덮어쓴다.
//[4 ,2, 3, 4, 5]
