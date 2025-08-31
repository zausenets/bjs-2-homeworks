class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state *= 1.5;
	}

	set state(value) {
		if (value < 0) {
			this._state = 0;
		} else if (value > 100) {
			this._state = 100;
		} else {
			this._state = value;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

class Library {
	constructor(name, books) {
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

class Student {
	constructor(name, marks) {
		this.name = name;
		this.marks = {};
	}

	addMark(value, subject) {
		if (value >= 2 && value <= 5) {
			if (!this.marks.hasOwnProperty(subject)) {
				this.marks[subject] = [];
			}
			this.marks[subject].push(value);
		}
		return;
	}

	getAverageBySubject(subject) {
		if (this.marks.hasOwnProperty(subject)) {
			let sum = this.marks[subject].reduce((acc, item) => acc + item, 0);
			return sum / this.marks[subject].length;
		}
		return 0;
	}

	getAverage() {
		let subjects = Object.keys(this.marks); // [предметы]
		if (subjects.length === 0) {
			return 0;
		}
		let sum = 0;
		for (let subject of subjects) {
			sum += this.getAverageBySubject(subject);
		}
		return sum / subjects.length;
	}
}