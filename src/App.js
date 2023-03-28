import './App.css';
import React, {useEffect, useState} from "react";
import ClientsTable from "./components/ClientsTable";
import CountryFilter from "./components/CountryFilter";


function App() {
  const [currentFilter, setFilter] = useState("All");
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [clients, setItems] = useState([]);

  useEffect(() => {
    fetch("https://621ea12e849220b1fc9e06ad.mockapi.io/clients")
        .then(res => res.json())
        .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
        )
  }, [])


  if (error) {
    return (<div>Erreur : {error.message}</div>);
  } else if (!isLoaded) {
    return (<div>Chargement en cours...</div>);
  } else {
    return (
        <div>
          <CountryFilter clients={clients} setFilter={setFilter}/>
          <ClientsTable clients={clients} currentFilter={currentFilter}/>
        </div>
    );
  }
}

export default App;