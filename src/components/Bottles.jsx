import { useEffect, useState } from "react";
import Bottole from "./bottole";
import {addToLS} from "../localstorage/localstorage"

function Bottoles() {
  const [countries, setCountries] = useState([]);
  const [card, setCard] = useState([]);
 




  const handleCardBtn = (addedData) => {
    let newData = [...card, addedData];
    setCard(newData);
    addToLS(addedData.id)
    console.log()

  };



  useEffect(() => {
    fetch("bottoles.json")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);




  return (
    <div className="grid grid-cols-4 container mx-auto my-16">
      <div className="container mx-auto grid col-span-3 grid-cols-3 gap-8">
        {countries.map((element) => {
          return (
            <Bottole
              key={element.id}
              data={element}
              handleCardBtn={handleCardBtn}
            ></Bottole>
          );
        })}
      </div>
      {/* <h1>Card: {card.length}</h1>
       */}


       {/* card data table */}
      <div className="">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
                {
                    
                    card.map(product=>{
                        const {id, name, price} = product;
                        console.log(name)
                        return (
                            
                            <tr key={id}>
                                <th>{}</th>
                                <td>{name}</td>
                                <td>{price}</td>
                            </tr>
                        )
                    })
                }
                
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Bottoles;
