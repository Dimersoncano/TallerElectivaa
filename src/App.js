import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [productos, setProductos] = useState([]);

  // Consumir API de Platzi
  const cargarProductos = async () => {
    try {
      const respuesta = await fetch('https://api.escuelajs.co/api/v1/products');
      const datos = await respuesta.json();
      setProductos(datos.slice(0, 10)); // Solo los primeros 10
    } catch (error) {
      console.error('Hubo un error al obtener los productos:', error);
    }
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  return (
    <div className="App">
      <h1 style={{ color: '#2c3e50' }}>Catálogo de Eliecer Gómez</h1>
      <section className="lista-productos">
        {productos.map((item) => (
          <article key={item.id} className="tarjeta-producto">
            <img src={item.images[0]} alt={item.title} width="100%" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <strong>Precio: ${item.price}</strong>
          </article>
        ))}
      </section>
    </div>
  );
}

export default App;



