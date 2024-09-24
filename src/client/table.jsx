import React, { useEffect, useState } from 'react';

const DataTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch('http://localhost:5004/api/breeds')
      .then((response) => response.json())
      .then((data) => {
        setData(data); // Actualiza el estado con los datos recibidos
        setLoading(false); // Cambia el estado de loading
      })
      .catch((error) => console.error('Error al cargar los datos:', error));
  }, []); 
 
  if (loading) {
    return <div>Cargando datos...</div>;
  }

  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {data.map((breed) => (
          <tr key={breed.id}>
            <td>{breed.id}</td>
            <td>{breed.name}</td>
            <td>{breed.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
