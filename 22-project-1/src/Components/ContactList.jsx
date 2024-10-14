// import React from 'react'
import "../App.css";
import DeleteIcon from "@mui/icons-material/Delete";
function ContactList(props) {
  const { contact, removeIcon } = props;
  const contactLIst = contact.map((val) => {
    return (
      <div className="contactLIsts">
        <div>{val.data.name}</div>
        <div>{val.data.email}</div>
        <span onClick={() => removeIcon(val.id)}>
          <DeleteIcon />
        </span>
      </div>
    );
  });
  return (
    <div>
      {/* <h1 className="contactList">Contact List</h1> */}
      <div>{contactLIst}</div>
    </div>
  );
}

export default ContactList;
