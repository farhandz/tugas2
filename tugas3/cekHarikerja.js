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
const tampung = cekHarikerja('sabtu')
// tampung.then(tp => console.log(`hari ${tp} hari kerja`))
// .catch(err => console.error(err))
const Async = async() => {
    try {
         const hari = await tampung
        console.log(`hari ${hari} hari kerjaa`)
    } catch (error) {
        console.log(error)
    }
}
Async()