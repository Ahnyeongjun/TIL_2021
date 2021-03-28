js = generator

변수에 next를 통하여 값으 받으면, yield로 리턴할 때 값을 입력받음

즉, 처음 next(1) 에 넣으면 값이 무시되고, 두번째 next() 에서 값이 들어가고 바로 value에 적용됨.

```
function* generatorFunction() {
    console.log('a');
    let a = yield;
    console.log('c');
    yield c = a + 1;
    console.log('d');
    yield d = a + c;
 }
 const generator = generatorFunction();

generator.next(1) // {value: undefined, done: false}
generator.next(2) // {value: 3, done: false}
generator.next()  // {value: 5, done: false}
generator.next()  // {value: undefined, done: true} 
```

