import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const ListaKomponens = ({ elemek }) => {
  return(
  <ol>
    {elemek.map((elem, index) => (
      
      <li key={index}> {elem.name} - 
      <br /><br />{elem.price}<br /><br />
      <Link to={"/item/" + elem.id}>
      <i className="bi bi-eye"></i> Részletek</Link></li>
    )
    )}
  </ol>);
}
export const ItemsList = () => {
  const [items,setItems] = useState([])
  const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch(`http://localhost:3005/items`)
      .then((res) => (res.json()))
      .then (d => {
        if(Array.isArray(d)) {
        setItems(d);
        console.log(d);
        } else if (d && d.data && typeof d.data === 'object') {
          setItems(Object.values(d.data));
          console.log (d.data);
        } else {
          setItems([]);
          console.log(d);
        }
      })
     .catch((err) => console.log(err))
      .finally(() => setLoading(false))

    }, []);
    if (loading) return <div className="spinner-border text-danger">Betöltés...</div>;
    if (!items.length) return <p>Nincs adat!</p>;


  return (
    <div className="container">
        <div className="row m-5 p-5 border">
          <ListaKomponens elemek={items} />
        </div>
    </div>
  )
}