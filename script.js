const myLibrary = [];

function addBookToLibrary(event) {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;
  const actualBook = new Book(
    title,
    author,
    pages,
    read,
    (id = crypto.randomUUID())
  );

  myLibrary.push(actualBook);
  updateUI();

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

function updateUI() {
  const bookscontainer = document.getElementById("books-container");
  bookscontainer.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    const card = document.createElement("div");
    card.style.backgroundColor = "rgba(180, 180, 172, 1)";
    card.style.width = "fit-content";
    card.style.minWidth = "410px";
    card.style.height = "270px";
    card.style.borderRadius = "15px";

    const cardtitlediv = document.createElement("div");
    cardtitlediv.style.display = "flex";
    cardtitlediv.style.justifyContent = "center";
    cardtitlediv.style.gap = "10px";
    cardtitlediv.style.marginTop = "20px";
    card.appendChild(cardtitlediv);
    const titletext = document.createElement("div");
    titletext.textContent = "Title: ";
    cardtitlediv.appendChild(titletext);
    const actualtitle = document.createElement("div");
    actualtitle.textContent = myLibrary[i].title;
    actualtitle.style.color = "blue";
    cardtitlediv.style.fontSize = "20px";

    cardtitlediv.appendChild(actualtitle);

    const cardauthordiv = document.createElement("div");
    cardauthordiv.style.display = "flex";
    cardauthordiv.style.justifyContent = "center";
    cardauthordiv.style.gap = "10px";
    cardauthordiv.style.marginTop = "20px";
    card.appendChild(cardauthordiv);
    const authortext = document.createElement("div");
    authortext.textContent = "Author: ";
    cardauthordiv.appendChild(authortext);
    const actualauthor = document.createElement("div");
    actualauthor.textContent = myLibrary[i].author;
    actualauthor.style.color = "white";
    cardauthordiv.style.fontSize = "20px";
    cardauthordiv.appendChild(actualauthor);

    const cardpagesdiv = document.createElement("div");
    cardpagesdiv.style.display = "flex";
    cardpagesdiv.style.justifyContent = "center";
    cardpagesdiv.style.gap = "10px";
    cardpagesdiv.style.marginTop = "20px";
    card.appendChild(cardpagesdiv);
    const pagestext = document.createElement("div");
    pagestext.textContent = "Pages: ";
    pagestext.style.fontSize = "20px";
    cardpagesdiv.appendChild(pagestext);
    const actualpages = document.createElement("div");
    actualpages.textContent = myLibrary[i].pages;
    actualpages.style.fontSize = "20px";
    actualpages.style.color = "rgba(184, 52, 140, 1)";
    cardpagesdiv.appendChild(actualpages);

    const cardreaddiv = document.createElement("div");
    cardreaddiv.style.display = "flex";
    cardreaddiv.style.justifyContent = "center";
    cardreaddiv.style.gap = "10px";
    cardreaddiv.style.marginTop = "20px";
    card.appendChild(cardreaddiv);
    const readtext = document.createElement("div");
    readtext.textContent = "Status: ";
    readtext.style.fontSize = "20px";
    cardreaddiv.appendChild(readtext);
    const actualread = document.createElement("div");
    if (myLibrary[i].read) {
      actualread.textContent = "Read";
      actualread.style.color = "green";
    } else {
      actualread.textContent = "Not yet read";
      actualread.style.color = "red";
    }
    actualread.style.fontSize = "20px";
    cardreaddiv.appendChild(actualread);
    bookscontainer.appendChild(card);

    const buttonscontainer = document.createElement("div");
    buttonscontainer.style.display = "flex";
    buttonscontainer.style.justifyContent = "center";
    buttonscontainer.style.gap = "40px";
    buttonscontainer.style.marginTop = "40px";
    card.appendChild(buttonscontainer);
    const markbutton = document.createElement("div");
    markbutton.style.border = "none";
    markbutton.style.borderRadius = "12px";
    markbutton.style.paddingTop = "10px";
    markbutton.style.paddingBottom = "10px";
    markbutton.style.paddingLeft = "30px";
    markbutton.style.paddingRight = "30px";
    markbutton.style.backgroundColor = "rgb(116, 115, 102)";
    markbutton.textContent = "Change Status";
    markbutton.style.color = "white";
    buttonscontainer.appendChild(markbutton);
    if (myLibrary[i].read) {
      actualread.textContent = "Read";
      actualread.style.color = "green";
    } else {
      actualread.textContent = "Not yet read";
      actualread.style.color = "red";
    }
    markbutton.addEventListener("click", (e) => {
      changeReadStatus(myLibrary[i].id);
    });
    markbutton.addEventListener("mouseover", (e) => {
      markbutton.style.backgroundColor = "rgb(124, 123, 109)";
      markbutton.style.cursor = "pointer";
    });
    markbutton.addEventListener("mouseout", (e) => {
      markbutton.style.backgroundColor = "rgb(116, 115, 102)";
    });

    const removebutton = document.createElement("div");
    removebutton.style.border = "none";
    removebutton.style.borderRadius = "12px";
    removebutton.style.paddingTop = "10px";
    removebutton.style.paddingBottom = "10px";
    removebutton.style.paddingLeft = "30px";
    removebutton.style.paddingRight = "30px";
    removebutton.style.backgroundColor = "red";
    removebutton.textContent = "Remove Book";
    removebutton.style.color = "white";
    buttonscontainer.appendChild(removebutton);
    removebutton.addEventListener("mouseover", (e) => {
      removebutton.style.backgroundColor = "rgba(245, 64, 64, 1)";
      removebutton.style.cursor = "pointer";
    });
    removebutton.addEventListener("mouseout", (e) => {
      removebutton.style.backgroundColor = "red";
    });
    removebutton.addEventListener("click", (e) => {
      removeBook(myLibrary[i].id);
    });
  }
}

function changeReadStatus(id) {
  let index = myLibrary.findIndex((item) => item.id == id);
  myLibrary[index].read = !myLibrary[index].read;
  updateUI();
}

function removeBook(id) {
  let index = myLibrary.findIndex((item) => item.id == id);
  myLibrary.splice(index, 1);
  updateUI();
}
