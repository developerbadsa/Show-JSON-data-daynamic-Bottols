import { useEffect, useState } from "react";
import Bottole from "./bottole";



function Bottoles(){

    const [countries, setCountries] = useState([]);

    useEffect(()=>{
        fetch('bottoles.json')
        .then(res=>res.json())
        .then(data=>setCountries(data))

    } ,[])


return (

    <div className="container mx-auto grid grid-cols-3 gap-5">


        
       {

            countries.map(element =>{

               return <Bottole key={element.id} data={element}></Bottole>
            } )

       }
    
    </div>
)
}

export default Bottoles;
