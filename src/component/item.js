import { useDispatch } from "react-redux"
import { cartaction } from "../store/cartslice";


export const Item=({id,nom,prix,img})=>{
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
                id:id,
                prix:prix,
                img:img
            })
        );
        console.log("test")
    }
        
    return (<div>
             <img src={img} width="200px"/>
              <h6>{nom}</h6>
              <p>{id}</p>
              <p>{prix}</p>
              <div style={{display: "flex",justifyContent: "space-around"}}>
              <button onClick={addcart}>add to cart</button>
              <button onClick={deletecart}>delete to cart</button>
              </div>
            </div>)
}