import React from 'react';
import './app.css'
//functional components - another term is dumb component- no logic inside all they do is render HTML.



// function App() {
//   return (
//     <div className="App">
//       <p>Hello World</p>
//     </div>
//   );
// }
//above code is the same as below code

const name = 'Kerry';
const lastname = 'Smith';
const purpleMode = true;

const RenderListItems = props => {
  return props.items.map((item, index) => {
    return <li key={index}>{item}</li>;
  });
}
const Greetings = props => (
  <div>
    <h1>Hello World</h1>
    <p>Hi my name is { purpleMode ? props.name : 'Kerry'}</p>
    <p>{props.lastName}</p>
    <ul>
      <p>My favorite things to do in quarantine</p>
      <RenderListItems items={["Play videogames", 'Sleep', 'Code']}/>
    </ul>
    <ul>
      <p>My favorite movies to watch during the pandemic</p>
      <RenderListItems items={["Plup fiction", 'John Wick', 'Harry Potter']}/>
    </ul>
  </div>
);




const App = props => 
   (
  <div className="colorBlue" style={{ fontSize: '40px', backgroundColor: purpleMode ? 'purple' : 'green'}}>
 <Greetings name={props.name} lastname={props.lastname}/>
{console.log(props)}
  </div>
  );


export default App;