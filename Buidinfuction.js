// build in function

//1. toString() = mengembalikan array ke string
    // const data = [1,2,3,4,5]
    // const ty = data.toString()
    // console.log(typeof ty)


// 2. reverse() = menghasilkan output terbalik dari sebelumya
    // const data = ["farhan", "ammar", "dzakwan"]
    // const ty = data.reverse()
    // console.log(ty);

//3.  toLowerCase() = > menghasilkan output string akan menjadi hruf kecil
    // let str = "Hello World!";
    // let res = str.toLowerCase();
    // console.log(res)

//4.  toUpperCase() = mengasilkan output berupa string yang akan menjadi hruf kapital smua
    // let str = "Hello World!";
    // let res = str.toUpperCase();
    // console.log(res)

//5. includes() = mencari kata dan mencockan kata tersebut keedalam string dan hasil kembalianya(return) berupa boolean
    // const bis = "tayo"
    // const inc = bis.includes('ay')
    // console.log(inc)

// sort() = mengurutkan index array mulai dari yang terkecil
// let data = [1,5,2,12,10,3,9]
// data = data.sort((a,b) => {
//     return a-b
// })
// console.log(data)


//6. reduce() = menjumlahkan semua nilai pada array
    // const data = [1,2,3,4,5]
    // const rd = data.reduce((jml,ttl) => {
    //     return jml + ttl
    // })
    // console.log(rd)

//7. filter = memfilter isi dari array
    // const data = ["farhan", "ammar", "dzakwan"]
    // const fl = data.filter(fl => fl.length == 5)
    // console.log(fl);

//8.  map() looping sebuah araray dan menghasilkan array baru
    // const data = ["farhan", "ammar", "dzakwan"]
    // const mp = data.map((dt,i) => dt)
    // console.log(mp)
    // console.log(mp.sort()))


// 9. foreach() = funsinya sama dengan map tetapi map tidak mengembalikan array baru jadi tidak bisa menggunakan method array seperti sort, filter dll
    // let data = ["farhan", "ammar", "dzakwan"]
    // data.forEach(function(dt){
    //     console.log(dt)
    // })


//10.  shift() = menghapus array index pertama / 0 dan mengubah length/panjang dari sebuah array
// const array1 = [2,1, 2, 3];
// const firstElement = array1.shift();
// console.log(array1.length);
// console.log(firstElement);
// expected output: 1




// perbedaan map dan forEach

// const data = [

//     {
//         userId: 1,
//         id: 1,
//         title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//         body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
//     },
//     {
//         userId: 1,
//         id: 2,
//         title: "qui est esse",
//         body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
//     },
//     {
//         userId: 1,
//         id: 3,
//         title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//         body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"
//     },

// ]


// const fe = data.forEach((dt,i) => {
//     return dt.title
// })
// const mp = data.map(e=> e.title)
// console.log(mp)

// data.map(dt => {
//     console.log(dt.title)
// })

// const fe = data.forEach(function(dt){
//     return dt
// })

// data.forEach(function(dt) {
//     console.log(dt.title)
// })
