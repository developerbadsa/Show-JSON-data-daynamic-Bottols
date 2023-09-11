import { useEffect, useState } from "react";
import Bottole from "./bottole";

function Bottoles() {
  const [countries, setCountries] = useState([]);
  const [card, setCard] = useState([]);

  const handleCardBtn = (addedData) => {
    let newData = [...card, addedData];
    setCard(newData);
  };

  console.log(card);

  useEffect(() => {
    fetch("bottoles.json")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div className="grid grid-cols-2">
      <div className="container mx-auto grid grid-cols-2 gap-5">
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
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {/* <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td> */}

                
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Bottoles;
