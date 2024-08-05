// fetch("https://www.googleapis.com/books/v1/volumes?q=python")
//     // .then(res => console.log(result))
//     .then(response => response.json())
//     .then(res => {
//         const data = res.volumeInfo
//         let row = ''
//         data.foreach(item => {
//             row += `<tr><td>${item.title}</td></tr><tr><td>${item.subtitle}</td></tr><tr><td>${item.authors}</td></tr>`
//         })
//         document.querySelector('#cont').innerHTML = row
//     })
//     .catch(error => console.log(error))