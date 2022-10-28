import { Item } from "./item";


export const Items=()=>{
    const produit=[
        {
            nom:"pc lenovo",
            id:123,
            prix:2500,
            img:"https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/2/0/20ve000mfe_2.jpg",
            quantite:0,
        },
        {
            nom:"pc MSI",
            id:124,
            prix:3500,
            img:"https://www.tunisianet.com.tn/137586-large/pc-portable-msi-gl65-9se-i7-9e-gen-16-go-rtx-2060.jpg",
            quantite:0,
        },
        {
            nom:"pc hp",
            id:125,
            prix:2700,
            img:"https://www.miscentre.com.tn/wp-content/uploads/2021/03/ordinateur-portable-hp-15-2r0m7ea-1.jpg",
            quantite:0,
        },
        {
            nom:"pc dell",
            id:126,
            prix:2300,
            img:"https://www.tunisianet.com.tn/66986-large/pc-portable-dell-inspiron-5559-i5-6e-gen-8-go-noir.jpg",
            quantite:0,
        }
    ];
    return(<div style={{display: "flex",justifyContent: "space-around"}}>
            {
                produit.map((item)=>(
                    <Item nom={item.nom} id={item.id} prix={item.prix} img={item.img}/>
                ))
            }
          </div>)
}