import './App.css';
import Calculator from './components/calculator/calculator';
import Heroes from './components/heroes/heroes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Beers from './components/beers/beers';

function App() {

  const variant = 'primary';

  return (
    <div className="App">
      <Tabs defaultActiveKey="beers" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="calculator" title="Calculator">
        <Calculator />
        </Tab>
        <Tab eventKey="heroes" title="Heroes">
          <Heroes />
        </Tab>
        <Tab eventKey="beers" title="Beers">
          <Beers/>
        </Tab>
      </Tabs>
      
    </div>

  );
}

export default App;
