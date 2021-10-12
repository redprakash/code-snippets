import styles from './App.module.scss';
import { useState } from 'react';
//import Card from './components/Card/';

function App() {
  const [bgStyle, setbgStyle] = useState({
    //these are the default value or Intital state of the div where I am changing color i.e App
    backgroundColor: 'wheat',
    color: 'black',
  });
  const [btnText, setBtnText] = useState('Change To Dark');
  const [modeText, setModeText] = useState('Light');
  const changeMode = () => {
    if (bgStyle.color === 'black') {
      setbgStyle({
        backgroundColor: 'black',
        color: 'wheat',
      });
      setBtnText('Change to Light');
      setModeText('DARK');
    } else {
      setbgStyle({
        backgroundColor: 'wheat',
        color: 'black',
      });
      setBtnText('Change To Dark');
      setModeText('LIGHT');
    }
  };
  return (
    <div className={styles.App} style={bgStyle}>
      <h1>Hello you are in {modeText} Mode</h1>
      <button onClick={changeMode} className={styles.Button}>
        {btnText}
      </button>
    </div>
  );
}

export default App;
