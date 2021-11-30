const arr = [1, 2, 3];

arr.color = 'blue';
arr.name = 'aAAAA_AAAA';

for (let prop in arr) {
    console.log(prop, arr[prop]);
}

for (let i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
}
//delete시 칸이삭제되어 length도 사라짐