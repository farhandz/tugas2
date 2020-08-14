const getMount = (callback) => {
    
    setTimeout(()=> {
        let error = true
        let month = null
        if (!error) {
            callback(null,month)
        } else {
            callback(new Error('sorry data not found', []))
        }
    }, 4000)
}


// getMount((undifined,month) => {
//    if(undifined || !month) {
//        console.error(undifined.message)
//    } else {
//        month.map(mp => console.log(mp))
//    }
// })

getMount(function(msg, month) {
    if (msg) {
       console.error(msg.message)
   } else {
       month.map(mp => console.log(mp))
   }
})