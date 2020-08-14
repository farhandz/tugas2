const fetch = require('node-fetch')

const data = fetch("https://jsonplaceholder.typicode.com/posts")
const comment = fetch("https://jsonplaceholder.typicode.com/comments")

Promise.all([data, comment]).then(values => {
    return Promise.all(values.map(r => process(r.json())))
})  

// .then(data => {
//     data.map(dt => {
//         dt.map(dt => {
//             console.log(dt.email)
//         })
//     })
// })

let process = (as) => {
    as.then(dt => {
        dt.map(e => console.log(e.email))
    })
}

