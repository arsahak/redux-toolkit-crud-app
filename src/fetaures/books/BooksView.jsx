import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBook } from "./BooksSlice";

const BooksView = () => {
  const books = useSelector((state) => state.booksReducer.books);
  const dispatch = useDispatch();
  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id));
  };
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg bg-slate-50 p-8 border rounded-sm sm:w-[700px] mt-16 p-5">
      <h2 className="text-xl font-semibold flex justify-center mb-6">
        Book List
      </h2>

      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Id
            </th>
            <th scope="col" class="px-6 py-3">
              Title
            </th>
            <th scope="col" class="px-6 py-3">
              Author
            </th>
            <th scope="col" class="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books.map((book, i) => {
              const { id, title, author } = book;
              return (
                <tr class="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {i + 1}
                  </th>
                  <td class="px-6 py-4">{title}</td>
                  <td class="px-6 py-4">{author}</td>
                  <td class="px-6 py-4">
                    <Link
                      to="/edit-book"
                      state={{ id, title, author }}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-2"
                    >
                      <button>Edit</button>
                    </Link>
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      onClick={() => {
                        handleDeleteBook(id);
                      }}
                    >
                      Remove
                    </a>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default BooksView;
