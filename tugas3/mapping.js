const getMount = (callback) => {
    setTimeout(()=> {
        let error = true
        let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
            'Agustus', 'September', 'October', 'November', 'December']
        if (!error) {
            callback(null,month)
        } else {
            callback(new Error('sorry data not found', []))
        }
    }, 4000)
}


getMount((msg,month) => {
   if(msg) {
       console.error(msg.message)
   } else {
       month.map(mp => console.log(mp))
   }
})

// getMount(function(msg, month) {
//     if (msg) {
//        console.error(msg.error)
//    } else {
//        month.map(mp => console.log(mp))
//    }
// })