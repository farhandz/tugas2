function tayoBIs(nilaiWal, nilaiAkhir, TypeArray) {
    if(nilaiWal < nilaiAkhir) {
        if (TypeArray.length <= 5) {
            return "data array kurang dari 5"
        } else {
            let data = TypeArray.filter(e => e > nilaiWal && e < nilaiAkhir)
            return data.sort(function (a, b) {
                return a - b
            })
        }
    } else {
        return "Nilai akhir harus lebih besar dari nilai awal"
    
    }
}

console.log(tayoBIs(5, 20, [2, 4, 14,]))

