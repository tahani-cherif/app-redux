import './App.css';
import { Items } from './component/items';
import { useDispatch, useSelector } from 'react-redux';
import { Produit } from './component/produit';
import { cartaction } from './store/cartslice';

function App() {
  const quantite=useSelector((state)=>state.cart.totalquantite);
  const somme=useSelector((state)=>state.cart.totalprix);
  const tab=useSelector((state)=>state.cart.itemliste);
  const aff=useSelector((state)=>state.cart.panier);
  const dispatch=useDispatch();
  const affiche=()=>{dispatch(
  cartaction.affichepanier()  )}

  return (
    <div className="App">
      <di style={{display:"flex",justifyContent:"end"}}>
      <button style={{height:"26px",marginTop:"28px",marginRight: "15px"}} onClick={affiche}>Panier</button>
      <p style={{textAlign: "right",marginRight: "28px",fontSize: "x-large"}}>Item:{quantite}</p>
      </di>
      <Items/>
      {aff && <div style={{marginTop:"40px"}}>
       {
        tab.map((item)=>(<Produit nom={item.nom} prix={item.prix} img={item.img} quantite={item.quantite} id={item.id}/>))
       }
       </div>}
      <p style={{textAlign: "right",marginRight: "28px",fontSize: "x-large"}}>Totale:{somme}dt</p>
    </div>
  );
}

export default App;
