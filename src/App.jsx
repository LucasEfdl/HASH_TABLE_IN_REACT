import { useState } from "react";
import styles from "./App.module.css"


import MainMenur from "./components/mainMenu";
import HomeScreem from "./components/homeScreem";
import ContactScreen from "./components/contactScreen";
import EditScreem from "./components/editScreem";

import { createHashTable } from "./hooks/useHashTable"


export default function App() {
  const [hashTable, setHashTable] = useState(() => createHashTable())
  const [screen, setScreen] = useState("home-screen")
  const [selectedContact, setSelectedContact] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  return (
    <div className={styles.wraper}>
      <MainMenur 
        screen={screen} 
        setScreen={setScreen} 
        selectedContact={selectedContact}
        setSelectedContact={setSelectedContact}
        hashTable={hashTable}
      />
      {screen == "home-screen" && 
        <HomeScreem/>
      }
      {screen == "edit-screen" && 
        <EditScreem 
          name="Name..." 
          email="Email..." 
          phone="Phone..."
          formData={formData}
          setFormData={setFormData}
          hashTable={hashTable}
          setHashTable={setHashTable}
          setScreen={setScreen}
        />
      }
      {screen == "contact-screen" &&
        <ContactScreen
          name={selectedContact.name}
          email={selectedContact.email}
          phone={selectedContact.phone}
          setScreen={setScreen}
          hashTable={hashTable}
        />
      }
    </div>
  )
}