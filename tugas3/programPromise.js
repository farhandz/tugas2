const readlineSync = require("readline-sync");
const Data = () => {
    return new Promise((resolve,reject) => {
        const nama = readlineSync.question("masukan nama doi?")
        console.log(`hai ${nama} mau jadian sama aku engga?`)
        console.log(`${nama}: tunggu 5 detik yah baru aku jawab`);
        setTimeout(() => {
          console.log('udah 5 detik nih aku tanya lagi yah??')
          answer = readlineSync.question('mau jadi pacarku engga? kalau mau ketik yes....!?', {
            trueValue: ['yes', 'yeah', 'yep'],
            falseValue: ['no', 'nah', 'nope', "kamu terlalu baik", "motormu masih beat"]
          });
          if (answer === true) {
              resolve("yey diterima")
          } else if (answer === false) {
            reject("yah ditolak")
          } else {
            console.log('Sorry. What does "' + answer + '" you said mean?');
          }
        }, 5000)
    })
}

const data = Data()
// data.then(dt => {
//     console.log(dt)
// })
// .catch(data => console.log(data))

const Async = async () => {
  try {
    const as = await data;
    console.log(as);
  } catch (error) {
    console.log(error);
  }
};
Async();


