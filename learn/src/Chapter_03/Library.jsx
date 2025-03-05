import React from "react";
import Book from "./Book";

function Library(props) {
  return (
  <div>
    <Book name"파이썬" num0fPage={300} />
    <Book name"AWS" num0fPage={400} />
    <Book name"리액트" num0fPage={500} />
    </div>
  );
}

export default Library;

