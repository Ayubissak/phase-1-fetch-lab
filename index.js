function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((json) => renderBooks(json));
}

function renderBooks(booksData) {
  // Code to render the booksData as needed, for example, creating HTML elements to display book titles
  console.log(booksData); // You can replace this with actual rendering code
}

// Call fetchBooks when index.html is loaded
document.addEventListener("DOMContentLoaded", fetchBooks);
