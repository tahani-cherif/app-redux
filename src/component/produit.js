import { useDispatch } from "react-redux"
import { cartaction } from "../store/cartslice";

export const Produit=({id,nom,img,prix,quantite})=>{
    const dispatch=useDispatch();
    const addcart=()=>{
        dispatch(
            cartaction.addtocart({
                nom:nom,
                id:id,
                prix:prix,
                img:img
            })
        );
        console.log("test")
    }
    const deletecart=()=>{
        dispatch(
            cartaction.deletetocart({
                nom:nom,
                id:id,
                prix:prix,
                img:img
            })
        );
        console.log("test")
    }
  return(<div style={{display: "flex",justifyContent: "space-around",marginBottom: "21px"}}>
           <img src={img} width="70px"/>
           <p>nom produit :{nom}</p>
           <button onClick={deletecart}>-</button><p>{quantite}</p><button onClick={addcart}>+</button>
           <p>{prix*quantite}</p>  
        </div>)
}