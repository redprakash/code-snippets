import styles from './App.module.scss';
import { useState } from 'react';
//import Card from './components/Card/';

function App() {
  const [bgStyle, setbgStyle] = useState({
    backgroundColor: 'wheat',
    color: 'black',
  });
  const [btnText, setBtnText] = useState('Change To Dark');
  const [modeText, setModeText] = useState('Dark');
  const changeMode = () => {
    if (bgStyle.color === 'black') {
      setbgStyle({
        backgroundColor: 'black',
        color: 'wheat',
      });
      setBtnText('Change to Light');
      setModeText('LIGHT');
    } else {
      setbgStyle({
        backgroundColor: 'wheat',
        color: 'black',
      });
      setBtnText('Change To Dark');
      setModeText('DARK');
    }
  };
  return (
    <div className={styles.App} style={bgStyle}>
      <h1>Hello Lets create {modeText} Mode</h1>
      <button onClick={changeMode} className={styles.Button}>
        {btnText}
      </button>
    </div>
  );
}

export default App;
