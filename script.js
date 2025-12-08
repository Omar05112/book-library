const myLibrary = [];

function addBookToLibrary(event) {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;
  const wagwan = new Book(
    title,
    author,
    pages,
    read,
    (id = crypto.randomUUID())
  );

  myLibrary.push(wagwan);

  const card = document.createElement("div");
  card.style.backgroundColor = "white";
  card.style.width = "300px";
  card.style.height = "120px";
  card.textContent = title;

  const bookscontainer = document.getElementById("books-container");
  bookscontainer.appendChild(card);

  console.log(myLibrary);
  event.preventDefault();
}

const forminale = document.querySelector("form");

forminale.addEventListener("submit", addBookToLibrary);

function Book(title, author, pages, read, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = id;
}
