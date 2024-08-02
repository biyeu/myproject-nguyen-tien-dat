fetch("https://www.googleapis.com/books/v1/volumes?q=python")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))