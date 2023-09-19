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
  const [searchBarValue, setSearchBarValue] = useState("")
  const [editButton, setEditButton] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  return (
    <div className={styles.wraper}>
      <MainMenur  
        setScreen={setScreen}
        setSelectedContact={setSelectedContact}
        searchBarValue={searchBarValue}
        setSearchBarValue={setSearchBarValue}
        setEditButton={setEditButton}
        setFormData={setFormData}
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
          editButton={editButton}
          setEditButton={setEditButton}
        />
      }
      {screen == "contact-screen" &&
        <ContactScreen
          contact={selectedContact}
          setScreen={setScreen}
          setFormData={setFormData}
          hashTable={hashTable}
        />
      }
    </div>
  )
}