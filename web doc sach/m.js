fetch("https://www.googleapis.com/books/v1/volumes?q=bmw")
  .then(response => response.json())
  .then(result => {this.setState({ books: result.items})})