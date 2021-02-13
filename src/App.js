import logo from './logo.svg';
import './App.css';
import QRCode from 'qrcode.react'
import {useEffect,useState} from 'react'
function App() { 

  const [dataQrcode, setDataQrcode] = useState('')
// console.log('xxxxxxxx',dataQrcode)
  return (
    <div className="App">
      <header className="App-header">
      <p>
            <h1>QRCode Generator</h1>
          </p>
          <p>
            <input type="text" onChange={(e)=>setDataQrcode(e.target.value)}/>
          </p>

          <QRCode size="500" value={dataQrcode} imageSettings={{height:'100px',width:'100px'}}/>

      </header>
    </div>
  );
}

export default App;
