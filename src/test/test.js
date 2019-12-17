let arr = [
    {
        id:0,
        a:"a"
    },
    {
        id:1,
        a:"b"
    },
    {
        id:2,
        a:"c"
    },
    {
        id:3,
        a:"d"
    }
];
arr.splice(arr.findIndex(e => e.id === 2), 1)
console.log(arr)

// let ret = arr.filter((item, index)=>{
//
//     if (item.id == 2) {
//         console.log("index:",index)
//
//         return item.id == 2
//     }
// })
//
// console.log(ret)
