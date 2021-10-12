import { useContext, useEffect, useState } from 'react';
import './style.scss'
import HeaderPoint from '../HeaderPoint';
import { ThemeContext } from '../../context/theme-context/ThemeContext';



const Header = () => {
  const { activeTheme, setActiveTheme } = useContext(ThemeContext);
  const [point, setPoint] = useState([]);

  useEffect(() => {
    setPoint([
      {title: 'Extr. Obese'},
      {title: 'Obese'},
      {title: 'Overweight'},
      {title: 'Healthy'},
    ])
  }, []);

  return (
    <header className="header">
      <button className="header-close-btn" onClick={() => setActiveTheme(activeTheme === 'dark' ? 'light' : 'dark')}>✕</button>
      <h1 className="header-title">Try Verv for free</h1>
      <div className="header-svg-wrapper">

        <svg id='lineOne' className='lineOne' width="320" height="54" viewBox="0 0 320 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.951181" filter="url(#filter0_d)">
            <path d="M0 2.20214C0 2.20214 56.2997 1.00908 92.052 6.85769C127.804 12.7063 141.35 19.7155 183.52 25.5641C231.239 30.7629 286.694 44 325 44" 
            stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" shape-rendering="crispEdges"
            />
          </g>
          <defs>
          <filter id="filter0_d" x="-5.5" y="0.601967" width="336" height="52.898" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
          </filter>
          </defs>
        </svg>
        <svg className='lineTwo' width="320" height="104" viewBox="0 0 320 104" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 2.04272C0 2.04272 83.3999 1.40196 107.203 10.3725C131.007 19.343 132.162 30.5455 165.437 39.0303C198.712 47.5152 211.224 71.0984 241.829 83.2727C261.784 91.2108 267.552 87.73 288.18 94.9474C299.188 98.799 312.138 102 329 102" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div className="free">
          Free
        </div>
        <div className="pro">
          PRO
        </div>
      </div>
      <div className="header-img-wrapper">
        <img src="./girl.png" alt="" className="header-img"/>
      </div>
      <div className="header-points-row">
        {point.map((item) => {
          return (
            <HeaderPoint
              item={item} 
              title={item.title}
            />
          )
        })}
      </div>
    </header>
  )
}


export default Header;