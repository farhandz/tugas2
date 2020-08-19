
const devideSort = (int) => {
    if(typeof int !== "number" || !int) {
       return "data harus number dan harus di isi"
    } else {
        const split = String(int).split(0)
        const intg = split.map((dt, i) => split[i].split('').sort().join('')).join('')
        return parseInt(intg)
    }
}
console.log(devideSort(3452626067570787))
console.log(devideSort('5956560159466056'))


