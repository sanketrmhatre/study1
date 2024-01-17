import './App.css';
let name = "sanket";
function App() {
  return (
    <>
    <nav>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>

    </nav>
    <div className='container'>
    <h1>Hello {name}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut deleniti libero incidunt tempore doloremque, consequatur similique maiores eos, modi voluptatum repellat accusantium nemo deserunt a, quibusdam dolore facilis praesentium. Vero.</p>
    </div>
    </>
  );
}

export default App;
