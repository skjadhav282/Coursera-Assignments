import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import Apples from './fruitComponents/Apples';
import Pears from './fruitComponents/Pears';
import Bag from './fruitComponents/Bag';
import Card from './cardComponents/Card';

function App() {
  return (
    <div className="App">
        <Heading firstName="Bob" />
        <Heading firstName="Alice" />
        <Heading firstName="Intruder" />

      <div>
        <h3> Fruit Example</h3>
        <Bag children={<Apples color="yellow" number="5" />} />
        <Bag children={<Pears friend="Peter" />} />
      </div>

      <div>
      <h1>Task: Add three Card elements</h1>
        <Card  h2="First card's h2" h3="First card's h3"/>
        <Card  h2="Second card's h2" h3="Second card's h3"/>
        <Card  h2="Third card's h2" h3="Third card's h3"/>
     
    </div>
    </div>

    

  
);
}

export default App;
