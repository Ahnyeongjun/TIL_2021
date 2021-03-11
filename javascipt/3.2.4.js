var foo = {
    name: 'foo',
    nick: '1',
}
console.log(foo.name);
delete foo.name
console.log(foo.name);
delete foo;
console.log(foo.nick);