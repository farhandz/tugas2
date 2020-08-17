const fetch = require('node-fetch');
let url = "https://jsonplaceholder.typicode.com/users";
let setting = {method: "Get"}
fetch(url, setting)
.then(data => {
    return data.json()
})
.then(ress => {
        ress.map(rs => {
            console.log(rs.name)
        })
})
.catch((eror) => {
    console.error(eror.message)
}) 


