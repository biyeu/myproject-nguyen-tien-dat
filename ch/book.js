const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const bookId = urlParams.get('id');

document.addEventListener('DOMContentLoaded', function () {
    fetchBookData();
});

function fetchBookData() {
    const apiUrl = `https://www.googleapis.com/books/v1/volumes/${bookId}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayBook(data))
        .catch(error => console.error('Error fetching data:', error));
}

function displayBook(book) {
    const container = document.getElementById('book-container');
    if (!book) {
        container.innerHTML = 'Book data could not be retrieved.';
        return;
    }

    const bookInfo = book.volumeInfo;
    const title = bookInfo.title;
    const authors = bookInfo.authors.join(', ');
    const description = bookInfo.description;
    const imageUrl = bookInfo.imageLinks ? bookInfo.imageLinks.thumbnail : '';

    container.innerHTML = `
        <div style="text-align: center;">
            <img src="${imageUrl}" alt="${title}" style="max-width: 100%; height: auto;">
        </div>
        <h2>${title}</h2>
        <p>By ${authors}</p>
        <p>${description}</p>
        <a href="${bookInfo.infoLink}" target="_blank" class="button">Read More</a>
    `;
}

