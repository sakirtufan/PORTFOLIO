import React, { Component } from "react";
import BookList from "./BookList";
import BookContextProvider from "../contexts/BookContext";
import ThemeContextProvider from "../contexts/ThemeContext";

export default class Portfolio extends Component {
  render() {
    return (
      <ThemeContextProvider>
        <BookContextProvider>
          <BookList />
        </BookContextProvider>
      </ThemeContextProvider>
    );
  }
}
