const reverse = (str) => {
    if(typeof str !== "string" || !str) {
        console.log('harus di isi dan berupa string')
    } else {
        console.log(str.split(' ').reverse().join(' '))
    }
}

reverse("aku sayang kamu")