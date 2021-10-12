import { Rate } from 'antd';
import './style.scss'


const FeedbackCard = (props) => {

  return (
    <div className="feedback-card">
      <div className="feedback-card__header">
        <div className="feedback-card__header-title">{props.title}</div>
        <div className="feedback-card__header-auther">{props.auther}</div>
      </div>
      <div className="feedback-card__stars">
        <Rate disabled defaultValue={props.stars} />
      </div>
      <div className="feedback-card__text">{props.text}</div>
    </div>
  )
}


export default FeedbackCard;