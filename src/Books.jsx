import { useState } from "react";
import "./App.css";

function Books() {
  const [books, setBooks] = useState([
    { id: 1, title: "The Great Gatsby", author: "S. Scott Fitzgerald" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
  ]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  
  const addBook = () => {
    if (!title.trim() || !author.trim()) return;

    const exists = books.some(
      (b) =>
        b.title.toLowerCase() === title.toLowerCase() &&
        b.author.toLowerCase() === author.toLowerCase()
    );

    if (exists) {
      alert("Book already exists!");
      return;
    }

    const newBook = {
      id: Date.now(),
      title,
      author,
    };

    setBooks([...books, newBook]);
    setTitle("");
    setAuthor("");
  };

 
  const removeBook = (id) => {
    setBooks(books.filter((b) => b.id !== id));
  };


  const filteredBooks = books.filter(
    (b) =>
      b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="heading">Library Management System</h1>

      {}
      <div className="card">
        <input
          className="search"
          type="text"
          placeholder="Search books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="form">
          <input
            type="text"
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button className="addBtn" onClick={addBook}>
            Add Book
          </button>
        </div>
      </div>

      {}
      {filteredBooks.length > 0 ? (
        filteredBooks.map((book) => (
          <div className="bookCard" key={book.id}>
            <div>
              <h2>{book.title}</h2>
              <p>by {book.author}</p>
            </div>

            <button className="removeBtn" onClick={() => removeBook(book.id)}>
              Remove
            </button>
          </div>
        ))
      ) : (
        <p style={{ textAlign: "center", color: "#555" }}>
          No books found 📭
        </p>
      )}
    </div>
  );
}

export default Books;
