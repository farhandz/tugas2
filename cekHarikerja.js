const cekHarikerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataArray = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', ]
            let cek = dataArray.find(d => {
                return d == day
            })
            if(cek){
                resolve(cek)
            } else {
                reject('Hari  ini bukan hari kerja')
            }
        }, 3000)
    })
}
const tampung = cekHarikerja('kamis')
// tampung.then(tp => console.log(tp))
// .catch(err => console.error(err.message))
const Async = async() => {
    try {
        const data = await tampung
        console.log(data)
    } catch (error) {
        console.log(error.message)
    }
}
Async()