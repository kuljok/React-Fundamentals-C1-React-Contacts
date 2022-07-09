import {useState} from "react";
import "../css/App.css";
import ListContacts from "./ListContacts";

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      const getContacts = async () => {
        const res = await ContactsAPI.getAll();
        setContacts();
      };
    };

    getContacts();
  }, []);
  const removeContact = (contact) => {
    setContacts(contacts.filter((c) => c.id !== contact.id));
  }


  return (
      <div>
        <ListContacts contacts={contacts} onDeleteContact={removeContact} />
      </div>
  );
};

export default App;
