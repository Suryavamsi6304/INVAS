import React, { useState } from "react";
import AddMenuItemForm from "./AddMenuItemForm";
import ContactMessages from "./ContactMessages";

export const Admin = () => {
  const [showAddMenuItemForm, setShowAddMenuItemForm] = useState(true);
  const [showContactMessages, setShowContactMessages] = useState(false);

  const handleShowAddMenuItemForm = () => {
    setShowAddMenuItemForm(true);
    setShowContactMessages(false);
  };

  const handleShowContactMessages = () => {
    setShowAddMenuItemForm(false);
    setShowContactMessages(true);
  };

  return (
    <>
      <div>
        <button onClick={handleShowAddMenuItemForm}>
          Show Add Menu Item Form
        </button>
        <button onClick={handleShowContactMessages}>
          Show Contact Messages
        </button>
      </div>

      {showAddMenuItemForm && <AddMenuItemForm />}
      {showContactMessages && <ContactMessages />}
    </>
  );
};
