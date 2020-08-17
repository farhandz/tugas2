const  readlineSync = require('readline-sync'),
chalk = require('chalk')
const Data = (callback) => {
    return new Promise ((resolve, reject) => {
        // aplikasi pemghitung jumlah pengeluaran sehari hari
        const gaji = readlineSync.question('masukan jumlah gaji anda tuan?  ');
        const parseINt = parseInt(gaji)
    let hasil = 0
    while (true) {
        console.log("input jumlah pengeluaran anda")
        command = readlineSync.question()
        if(command == "=") {
            setTimeout(() =>{
               if(gaji > hasil){
                   resolve(`total pendapatan bersih anda ${gaji - hasil}`)
               } else {
                   reject("kerja lagi boss anak istri masih kelaparan")
               }
            }, 2000)
            break
            } else {
                hasil += parseInt(command)
           }    
       }
    })
}

const data = Data()

// data.then(dt => console.log(dt))
// .catch(err => console.log(err))

const Aync = async () => {
    try {
        const tayo = await data 
        console.log(tayo)
    } catch (error) {
        console.log(error)
    }
}

Aync()