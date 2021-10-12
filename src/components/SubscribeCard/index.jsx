import './style.scss'



function CreateSubscribeCardSave (saveLabel) {
  if (saveLabel === null || saveLabel === false || saveLabel === undefined) return false;
  if (saveLabel >= 50) {
    return (
      <div className="subscribe-card__save big">
        SAVE {saveLabel}%
      </div>
    )
  } else {
    return (
      <div className="subscribe-card__save">
        SAVE {saveLabel}%
      </div>
    )
  }
}
function CreateSubscribeCardSale (saleLabel) {
  if (saleLabel === null || saleLabel === false) return false;
  return (
    <div className="subscribe-card__sale">sale</div>
  )
}

const SubscribeCard = (props) => {

  return (
    <div className={`subscribe-card ${props.active ? 'active' : ''}`} onClick={props.onCardClick}>
      {CreateSubscribeCardSave(props.save)}
      <div className="subscribe-card__info">
        <div className="subscribe-card__info-month"> {props.month} month </div>
        <div className="subscribe-card__info-price"> ${props.price} / month </div>
        <div className="subscribe-card__info-price-per-month">month: ${props.pricePerMonth}</div>
      </div>
      {CreateSubscribeCardSale(props.sale)}
    </div>
  )
}


export default SubscribeCard;