var foo = {
    name: 'foo',
}
var prop;
for (prop in foo) {
    console.log(prop, foo[prop]);
}