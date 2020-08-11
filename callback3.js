function tayoBIs(nilaiWal, nilaiAkhir, TypeArray) {
    if(nilaiWal < nilaiAkhir) {
        return "Nilai akhir harus lebih besar dari nilai awal"
    } else {
    if(TypeArray.length <= 5){
        return "Jumlah angka dalam dataArray tidak ada"
    }  else{
        let data = TypeArray.filter(e => e > 5 && e < 20)
     return data.sort(function(a,b) {
        return a-b
      })
    }

    }
}

console.log(tayoBIs(20, 5 , [2, 25, 4,]))
