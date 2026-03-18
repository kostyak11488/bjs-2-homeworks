class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for (let book of this.books) {
      if (book[type] === value) {
        return book;
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        return this.books.splice(i, 1)[0];
      }
    }
    return null;
  }
}
const library = new Library("Библиотека имени Ленина");

library.addBook(
  new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  )
);
library.addBook(
  new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); // null
console.log(library.findBookBy("releaseDate", 1924).name); // "Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); // 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); // 3
// 1. Создаём библиотеку
const testLibrary = new Library("Тестовая библиотека");

// 2. Добавляем несколько изданий
testLibrary.addBook(new NovelBook("Автор 1", "Роман 1", 1919, 200));
testLibrary.addBook(new FantasticBook("Автор 2", "Фантастика 1", 2000, 300));
testLibrary.addBook(new DetectiveBook("Автор 3", "Детектив 1", 2010, 250));

// 3. Находим книгу, изданную в 1919 году
let oldBook = testLibrary.findBookBy("releaseDate", 1919);
console.log("Книга 1919 года:", oldBook ? oldBook.name : "не найдена");

// 4. Выдаём любую книгу
const givenBook = testLibrary.giveBookByName("Роман 1");
console.log("Выданная книга:", givenBook ? givenBook.name : "не выдана");

// 5. Повреждаем выданную книгу
if (givenBook) {
  givenBook.state = 10;
  console.log("Состояние после повреждения:", givenBook.state);

  // 6. Восстанавливаем книгу
  givenBook.fix();
  console.log("Состояние после восстановления:", givenBook.state);

  // 7. Пытаемся добавить восстановленную книгу обратно
  testLibrary.addBook(givenBook);
  console.log("Книг в библиотеке после попытки добавить:", testLibrary.books.length);
}
