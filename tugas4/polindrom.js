data = (polimcrom) => {
    if(typeof polimcrom !== "string" || !polimcrom) {
        console.log("input harus string dan harus di isi")
    } else {
        const pol = polimcrom.split('').reverse().join('')
        if (pol === polimcrom) {
            console.log("ini polindrom")
        } else {
            console.log("ini bukan polindrom")
        }
    }
    
}

data("malam")