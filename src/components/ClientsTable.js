import React from 'react';
import ClientItem from "./ClientItem";

function ClientsTable({clients, currentFilter}) {
    let items = [];
    for (let i = 0; i < clients.length; i++) {
        if (currentFilter === 'All' || clients[i].country === currentFilter) {
            items.push(ClientItem(clients[i]));
        }
    }
    return (
        <table border="2" cellspacing="3"> {items} </table>
    );

}

export default ClientsTable;
