import { addToLS } from "../localstorage/localstorage";

function Bottole({data, handleCardBtn}) {

    const {id, name, seller, price, img} = data;


  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {name}</h2>
          <p >Price: {price}</p>
          <div className="card-actions justify-center">
            <button onClick={()=>handleCardBtn(data)} className="btn btn-primary">Add to Card</button>
          </div>
        </div>
      </div>
    </div>
  );
 }

export default Bottole;
