let name = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope', "FarhAn", "anTo", "TOAn", "pAn"]
const Filtrname = (str, int, callback) => {
    const tlc = name.map(t => t.toLowerCase())  
    let data = tlc.filter(nm => nm.toLowerCase().includes(str.toLowerCase()))
    return callback(data, int)
}
const limit = (data, int) => {
   data =  data.forEach((dt, i) =>data[i].charAt(0).toUpperCase() + data[i].substr(1))
    // for (let i = 0; i < data.length; i++) {
    //     data[i] = data[i].charAt(0).toUpperCase() + data[i].substring(1);
    // }
    if(int > data.length ) {return "inputan data melebihi jumlah yang ditentukan "}
    return data.filter((fl, i) => {
        // console.log(fl)
        // console.log(i < int)
        if (i < int) {
            return true
        }
    })    
}
console.log(Filtrname('An', 3, limit))
