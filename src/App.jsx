import './App.scss';
import Slider from './components/Slider';
import Header from './components/Header/index';
import SubscribeCardWrapper from './components/SubscribeCardWrapper/index';
import { ThemeContext } from './context/theme-context/ThemeContext';
import { useContext } from 'react';

function App() {
  const { activeTheme } = useContext(ThemeContext);
  return (
      <div className={`App ${activeTheme} `}>
        <Header />
        <Slider />
        <SubscribeCardWrapper />
      </div>
  );
}

export default App;
