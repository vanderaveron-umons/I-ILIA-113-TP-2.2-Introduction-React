import React from 'react';

function ClientItem(client) {
    return (
        <tr>
            <td>{client.id}</td>
            <td>{client.name}</td>
            <td>{client.city}</td>
            <td>{client.country}</td>
        </tr>
    );
}

export default ClientItem;