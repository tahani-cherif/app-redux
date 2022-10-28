import { createSlice } from "@reduxjs/toolkit";


const cartslice=createSlice({
  name:"cart",
  initialState:{
    itemliste:[],
    totalquantite:0,
    totalprix:0,
    panier:false
  },
  reducers:{
     addtocart(state,action){
       const  newitem=action.payload;
        let finditem=state.itemliste.find((item)=>item.id===newitem.id);
        if(finditem)
        {
            state.totalprix+=newitem.prix;
            finditem.quantite++;
        }
        else{
            state.itemliste.push({
                nom:newitem.nom,
                id:newitem.id,
                prix:newitem.prix,
                img:newitem.img,
                quantite:1
            });
            state.totalquantite++;
            state.totalprix+=newitem.prix;
        }
     },
    deletetocart(state,action){
        const  newitem=action.payload;
         let finditem=state.itemliste.find((item)=>item.id===newitem.id );
         if(finditem.quantite==1)
         {  state.totalquantite--;
            state.totalprix-=finditem.prix;
            state.itemliste= state.itemliste.filter((item)=>item.id!==newitem.id);
          
         }
         else{
            state.totalprix-=newitem.prix;
            finditem.quantite--;
         }
      },
      affichepanier(state,action){
                 state.panier=!state.panier;
      }
  }
})
export const cartaction=cartslice.actions;
export default cartslice;