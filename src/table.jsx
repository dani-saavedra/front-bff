import React, { useEffect, useState } from 'react';

const DataTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  /*
  useEffect(() => {
    // Realiza la petición a una API REST (usaremos una API de ejemplo)
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setData(data); // Actualiza el estado con los datos recibidos
        setLoading(false); // Cambia el estado de loading
      })
      .catch((error) => console.error('Error al cargar los datos:', error));
  }, []); // El segundo argumento [] asegura que se ejecute una vez al montar el componente
 */
  if (loading) {
    return <div>Cargando datos...</div>;
  }

  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Usuario</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
