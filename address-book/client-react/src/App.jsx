import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  React.useEffect(() => {
    fetch("/api/oddballs")
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <input type="text" name="search" />
      <ContactList />
    </div>
  );
};

const ContactList = () => {
  return (
    <>
      <Contact />
      <Contact />
      <Contact />
      <Contact />
    </>
  );
};

const Contact = () => {
  return <p>Contact</p>;
};

export default App;
