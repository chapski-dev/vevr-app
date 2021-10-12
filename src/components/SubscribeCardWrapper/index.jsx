import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import SubscribeCard from '../SubscribeCard';
import './style.scss';

const SubscribeCardWrapper = () => {

  const history = useHistory();
  const [subscribeCards, setSubscribeCards] = useState([]);
  const handleCardActive = (index) => {
    const newSubscribeCard = subscribeCards.map((card, i) => ({ ...card, active: i === index}))
    setSubscribeCards(newSubscribeCard);
    console.log(subscribeCards);
  }
  const handleGoToLink = () => {
    subscribeCards.find((card) => {
      if(card.active === true){
        document.location.assign(card.link);  
      }
    }) 
  }
  useEffect(() => {
    setSubscribeCards([
      {save: false, month: 1, price: 14.99, pricePerMonth: 14.99, sale: false,  link:'https://www.google.com/search?q=1'},
      {save: 80, month: 12, price: 39.99, pricePerMonth: 3.33, sale: false,  link:'https://www.google.com/search?q=2'},
      {save: 30, month: 3, price: 14.99, pricePerMonth: 9.99, sale: true,  link:'https://www.google.com/search?q=3'},
    ])
  }, [])
  return (
    <>
      <div className="subscribe-card-wrapper">
       {subscribeCards.map((item, index) => (
         <SubscribeCard
         item={item}
         save={item.save}
         month={item.month}
         price={item.price}
         pricePerMonth={item.pricePerMonth}
         sale={item.sale}
         link={item.link}
         active={item.active}
         onCardClick={() => handleCardActive(index)}
         />
       ))}
      </div>
      <div className="subscribe-card-wrapper__btn-wrapper">
        <button className="continue-btn" onClick={handleGoToLink}>Сontinue</button>
      </div>
      <div className="subscribe-card-wrapper__discription">
        <span>
        Recurring billing. Cancel anytime.
        </span>
      </div>
     </>
  )
}

export default SubscribeCardWrapper;