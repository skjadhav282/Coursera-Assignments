/*function Heading() {
  return <h1>This is an h1 heading</h1>;
}*/
import Heading from "./Heading";

function App(props) {
  return ( 
    <div className="App">
      <h1>{props.title}</h1> 
        <Heading /> 
    </div> 
  ); 
} 
 
export default App;