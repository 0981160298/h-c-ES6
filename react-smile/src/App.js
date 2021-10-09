import logo from './logo.svg';
import './App.css';
import Learn from './components/hello';
import Learning from './components/learning';
import ColorBox from './components/ColoBox';
import CountDown from './components/Countdown';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        {/* <Learn name='Mango' weight='12' />
        <Learn name='Orange' weight='13' />
        <Learn name='apple' weight='11' /> */}

         {/* <Learning/> */}


        <CountDown seconds={30} />

         {/* tạo 2 màu */}
        <ColorBox color="deeppink"/>
        <ColorBox color="green"/>

        

        
      </header>
    </div>
  );
}

export default App;
