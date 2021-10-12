import { Swiper, SwiperSlide} from "swiper/react";
import { useEffect, useState } from "react";
import SwiperCore, {Autoplay} from 'swiper';
import 'swiper/swiper.scss';
import FeedbackCard from "../FeedbackCard";
import './style.scss'


SwiperCore.use([Autoplay]);

const Slider = () => {

  const [feedbackInfo, setFeedbackInfo] = useState([]);


  useEffect(() => {
    setFeedbackInfo([
      { title: 'Fantastic!', auther: 'lila_lane', stars: 5, feedback: 'I can say I am 💯 happy with this app. 15 pounds off in 30 days!'},
      { title: 'Fantastic!', auther: 'lila_lane', stars: 5, feedback: 'I can say I am 💯 happy with this app. 15 pounds off in 30 days!'},
      { title: 'Fantastic!', auther: 'lila_lane', stars: 5, feedback: 'I can say I am 💯 happy with this app. 15 pounds off in 30 days!'},
      { title: 'Fantastic!', auther: 'lila_lane', stars: 5, feedback: 'I can say I am 💯 happy with this app. 15 pounds off in 30 days!'},
    ])
  }, []);

  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={1.15}
      loop={true}
      autoplay={{
        "delay": 5000,
        "disableOnInteraction": true,
      }}
      centeredSlides={true} 
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {feedbackInfo.map((card) => {
        return (
        <SwiperSlide>
          <FeedbackCard
            card={card}
            title={card.title}
            auther={card.auther}
            stars={card.stars}
            text={card.feedback}     
          />
        </SwiperSlide>
        )
      })}
    </Swiper>
  );
};

export default Slider;