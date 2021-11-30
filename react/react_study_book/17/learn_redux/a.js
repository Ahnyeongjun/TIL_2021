// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word === 'elite');
// const result2 = words.find(word => word === 'elite');
// const result3 = words.findIndex(word => word === 'elite');

// console.log(result3);

// console.log(result2);

// console.log(result);

function* generatorFunction() {
    console.log('a');
    let a = yield;
    let b = yield;
    yield c = a + b;
    yield d = a + c;
}

const generator = generatorFunction();

generator.next();
generator.next(1);
generator.next(1);
generator.next();