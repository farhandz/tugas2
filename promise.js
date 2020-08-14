const cobaPromise = new Promise((resolve, reject) => {
    const time = 300
    setTimeout(() => {
        if(time == 3000) {
            resolve("i love u 3000")
        } else {
            reject('maaf kamu terlalu baik')
        }
    }, 3000)
})

cobaPromise.then(cb => console.log(cb)).catch(er => console.log(er))



// cobaPromise = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const time = false
//             if(time){
//                 resolve("i love you 3000")
//             } else {
//                 resolve("kamu terlalu baik")
//             }
//         }, 2000)
//     })
// }

// const coba = cobaPromise()



// cobaAync = async () => {
//     try {
//         const data = await coba
//         console.log(data)

//     } catch (error) {
//         console.log(error)
//     }
// }

// cobaAync()


// console.log("syncronus")
// console.log("syncronus2")




