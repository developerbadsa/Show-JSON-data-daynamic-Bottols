function getStoredData() {
  const storedCard = localStorage.getItem("card");

  if (storedCard) {
    return JSON.parse(storedCard);
  } else {
    return [];
  }
}


// save card to localStorage
function saveCardToLS(card) {
  const convertToString = JSON.stringify(card);
  localStorage.setItem('card', convertToString);
}


function addToLS(id){
     const card = getStoredData()
     card.push(id);
     saveCardToLS(card)
}


export {addToLS, getStoredData}
