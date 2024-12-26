import React, { useState, useEffect } from "react";
import BookModel from "../Models/BookModel";
import { SpinnerLoading } from "../Utils/SpinnerLoding";
import { SearchBook } from "./component/SearchBook";

export const SearchBookPage = () => {
  const [books, setBooks] = useState<BookModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      const baseURL = "http://localhost:8080/api/books";
      const URL = `${baseURL}?page=0&size=5`;

      const response = await fetch(URL);

      if (!response.ok) {
        throw new Error("Something went wrong!!");
      }

      const responseJson = await response.json();

      const responseData = responseJson._embedded.books;

      const loadedBook: BookModel[] = [];

      for (const ele in responseData) {
        loadedBook.push({
          id: responseData[ele].id,
          title: responseData[ele].title,
          author: responseData[ele].author,
          description: responseData[ele].description,
          copies: responseData[ele].copies,
          copiesAvailable: responseData[ele].copiesAvailable,
          img: responseData[ele].img,
        });
      }
      setBooks(loadedBook);
      setIsLoading(false);
    };
    fetchBooks().catch((error: any) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return <SpinnerLoading />;
  }
  if (httpError) {
    return (
      <div className="container m-5">
        <p>{httpError}</p>
      </div>
    );
  }

  function setSearch(value: string): void {
    throw new Error("Function not implemented.");
  }

  function searchHandleChange(): void {
    throw new Error("Function not implemented.");
  }

  function categoryField(arg0: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div>
      <div className="container">
        <div>
          <div className="row mt-5">
            <div className="col-6">
              <div className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-labelledby="Search"
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button
                  className="btn btn-outline-success"
                  onClick={() => searchHandleChange()}
                >
                  Search
                </button>
              </div>
            </div>
            <div className="col-4">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li onClick={() => categoryField("All")}>
                    <a className="dropdown-item" href="#">
                      All
                    </a>
                  </li>
                  <li onClick={() => categoryField("FE")}>
                    <a className="dropdown-item" href="#">
                      Front End
                    </a>
                  </li>
                  <li onClick={() => categoryField("BE")}>
                    <a className="dropdown-item" href="#">
                      Back End
                    </a>
                  </li>
                  <li onClick={() => categoryField("Data")}>
                    <a className="dropdown-item" href="#">
                      Data
                    </a>
                  </li>
                  <li onClick={() => categoryField("DevOps")}>
                    <a className="dropdown-item" href="#">
                      DevOps
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {books.map((book) => (
            <SearchBook book={book} key={book.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
