var foo = {
    name: 'foo',
    major: 'com',
};

console.log(foo.name);
console.log(foo['name']);
console.log(foo.nickname);

foo.major = 'abcd';
console.log(foo.major);
console.log(foo['major']);

foo.age = 27;
console.log(foo.age);

foo['full-name'] = 'foo bar';

// console.log(foo.full-name);
console.log(foo['full-name']);
