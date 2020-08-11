// build in function

// toString() = mengembalikan array ke 
// const data = [1,2,3,4,5]
// const ty = data.toString()
// console.log(typeof ty)


// reverse() = menghasilkan output terbalik dari sebelumya
// const data = ["farhan", "ammar", "dzakwan"]
// const ty = data.reverse()
// console.log(ty);

// toLowerCase() = > menghasilkan output string akan menjadi hruf kecil
// let str = "Hello World!";
// let res = str.toLowerCase();
// console.log(res)

// toUpperCase() = mengasilkan output berupa string yang akan menjadi hruf kapital smua
// let str = "Hello World!";
// let res = str.toUpperCase();
// console.log(res)

// includes() = mencari kata dan mencockan kata tersebut keedalam string dan hasil kembalianya(return) berupa boolean
// const bis = "tayo"
// const inc = bis.includes('ay')
// console.log(inc)

// sort() = mengurutkan index array mulai dari yang terkecil
// let data = [1,5,2,12,10,3,9]
// data = data.sort((a,b) => {
//     return a-b
// })
// console.log(data)


// reduce() = menjumlahkan semua nilai pada array
// const data = [1,2,3,4,5]
// const rd = data.reduce((jml,ttl) => {
//     return jml + ttl
// })
// console.log(rd)

// filter = memfilter isi dari array
// const data = ["farhan", "ammar", "dzakwan"]
// const fl = data.filter(fl => fl.length == 5)
// console.log(fl);

// map() looping sebuah araray dan menghasilkan array baru
// const data = ["farhan", "ammar", "dzakwan"]
// const mp = data.map((dt,i) => dt)
// console.log(mp)
// console.log(mp.sort())

// const data = [
//     {
//         id: 1,
//         name: "Leanne Graham",
//         username: "Bret",
//         email: "Sincere@april.biz",
//         address: {
//             street: "Kulas Light",
//             suite: "Apt. 556",
//             city: "Gwenborough",
//             zipcode: "92998-3874",
//             geo: {
//                 lat: "-37.3159",
//                 lng: "81.1496"
//             }
//         },
//         phone: "1-770-736-8031 x56442",
//         website: "hildegard.org",
//         company: {
//             name: "Romaguera-Crona",
//             catchPhrase: "Multi-layered client-server neural-net",
//             bs: "harness real-time e-markets"
//         }
//     },

// ]

// const mp = data.map((e => e.company.name))
// console.log(mp)


// foreach() = funsinya sama dengan map tetapi map tidak mengembalikan array baru jadi tidak bisa menggunakan method array seperti sort, filter dll
// let data = ["farhan", "ammar", "dzakwan"]
// data.forEach(function(dt){
//     console.log(dt)
// })


// shift() = menghapus array index pertama / 0 dan mengubah length/panjang dari sebuah array

const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
console.log(firstElement);
// expected output: 1
