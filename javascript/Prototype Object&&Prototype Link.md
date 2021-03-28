js 프로토타입

객체.prototype 에는 object가 어딘가에 있고 object 안의 값을 사용할 수 있다.

prototype 에는 link와 object가 있다.

## Prototype Object&&Prototype Link

객체를 함수로 쓰게해준다.



함수를 정의하면 함수만 생성되는 것이아닌 prototype object도 생성됨 prototype에는 constructor와 _proto__를 가지고있음 생성자에는  object와 함께 생성된 함수 가르키고 proto는 모든 객체가 다 가지고 있는 속성이다. 더 자세히 말해보면 객체가 생성될 때 조상이었던 함수의 Prototype Object를 가리킨다.