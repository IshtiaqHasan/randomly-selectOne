import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Headphones from './components/Headphones/Headphones';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Headphones></Headphones>
      < hr />
      <h1 className='qusAns'>Questions & Answers</h1>
      <h2 className='ques'>Question1:  How React Works</h2>
      <h4 className='ans'>Answer: React is a JavaScript library that creates user interfaces (UIs) in a predictable and efficient way the use of declarative code. We can use it to help build single web page programs and mobile apps, or to build complex apps if we utilise it with different libraries. Whenever state of a component's changes, react state doesn't change one after the other. If any change happens React goes through its virtual DOM creates a list of those changes that need to be made to the actual DOM and update the change. The way React updates the DOM s known as Reconciliation which has two phase. Render & Commit phase. JSX is from render phase and turns into Javascript representation. And commit phase compares virtual and real DOM and makes changes.</h4>
      <h2 className='ques'>Question1:  How useState Works</h2>
      <h4 className='ans'> Answer: useState is nothing but a hook by which we can set variable in functional components. If we pass initial state to a function the current state value is returned by it with a variable and update this value to another function. One ore more state variables in function components can be declare by useState hook. We take the initial state in useState hook and it returns an array of two entries. Actually It returns a pair of values which are the current state and a function that updates it.</h4>
    </div>
  );
}

export default App;
