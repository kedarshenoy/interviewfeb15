import './App.css';
import Leftdiv from './Components/Leftdiv';
import Rightdiv from './Components/Rightdiv';
import './Styles/left.css';
import './Styles/Right.css';

const divstyle={
  "display": "flex",
  // "width": "1440px",
  // "height": "1026px",
  "gap": "5px",
  "backgroundColor": "lightgray"
}

function App() {
  return (
    <div style={divstyle}>
      <Leftdiv></Leftdiv>
      <Rightdiv></Rightdiv>


      

    </div>
  );
}

export default App;
