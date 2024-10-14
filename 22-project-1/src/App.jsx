// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useEffect, useState } from "react";
import "./App.css";
import AddContacts from "./Components/AddContacts";
import ContactList from "./Components/ContactList";
import Header from "./Components/Header";
import uuid4 from "uuid4";
// import { useState } from "react";
function App() {
  const localStorageKey = "contact";
  const [contact, setContact] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey)) || [];
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contact));
  }, [contact]);
  const addContact = (data) => {
    // console.log(data,"data from app.jsx");
    setContact([...contact, { id: uuid4(), data }]);
  };

  const removeIcon = (id) => {
    const updateLIst = contact.filter((val) => {
      return val.id !== id;
    });
    setContact(updateLIst);
  };
  return (
    <>
      <div className="App">
        <Header />
        <AddContacts addContact={addContact} />
        <ContactList contact={contact} removeIcon={removeIcon} />
      </div>
    </>
  );
}

export default App;
