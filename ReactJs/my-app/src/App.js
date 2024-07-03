import logo from './logo.svg';
import './App.css';


let name="Rajnish Maurya";
function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>

    <div className="container">
      <h1>Hello {name}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt placeat voluptatem ex odit atque eligendi sit iusto dicta officia dignissimos. Quod dolorem ab cupiditate, fugiat quam tempora numquam quo possimus eligendi, minus molestiae assumenda error dolore vero illo in eum.</p>
    </div>
    </>
  );
}

export default App;
