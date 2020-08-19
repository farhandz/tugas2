const devideSort = (...int) => {
    const data = int.join(' ').split(0)
    let tayo = ''
    for(let i = 0; i < data.length; i++) {
        let hh = data[i].split('').sort().join('')
        tayo += hh
    }
    return tayo
}
console.log(devideSort(5956560159466056))
