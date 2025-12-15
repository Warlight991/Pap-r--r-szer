
import { useState, useEffect } from 'react'
import { Link, useParams} from 'react-router-dom'
import '../App.css'

const ListaKomponens = ({ elem }) => {
  return(
      <li>{elem.name} 
      <br /><br />{elem.price}<br /><br />
      <Link to={"/"}>
      <i className="bi bi-backspace-fill "></i> Vissza</Link></li>
    )
}
export const ItemDetails = () => {
  const [item,setItem] = useState({})
  const [loading, setLoading] = useState(true);
const params = useParams();
const id = params.itemId;
    useEffect(() => {
      fetch(`http://localhost:3005/items/${id}`)
      .then((res) => (res.json())
      .then (d => {
        if (d && d.item) {
          setItem(d.item);
          console.log (d.item);
        } else {
          setItem(d);
          console.log(d);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
      );
    }, [id]);
    if (loading) return <div className="spinner-border text-danger">Betöltés...</div>;
    if (!item) return <p>Elem nem található!</p>;


  return (
    <div className="container">
        <div className="row m-5 p-5 border">
          <ListaKomponens elem={item} />
        </div>
    </div>
  )
}