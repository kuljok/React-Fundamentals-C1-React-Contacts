import {useState} from "react";
import "../css/App.css";
import ListContacts from "./ListContacts";

const App = () => {
  const [contacts, setCotacts] = useState([
    {
      id: "karen",
      name: "Karen Isgrigg",
      handle: "karen_isgrigg",
      avatarURL: "http://localhost:3000/avatars/karen.jpeg",
    },
    {
      id: "richard",
      name: "Richard Kalehoff",
      handle: "richardkalehoff",
      avatarURL: "http://localhost:3000/avatars/richard.jpeg",
    },
    {
      id: "tyler",
      name: "Tyler McGinnis",
      handle: "tylermcginnis",
      avatarURL: "http://localhost:3000/avatars/tyler.jpeg",
    },
  ]);


  return (
      <div>
        <ListContacts contacts={contacts} />
      </div>
  );
};

export default App;
