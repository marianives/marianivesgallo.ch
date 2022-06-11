import './App.css';
import Home from './components/Home';
import Ausbildung from './components/Ausbildung';
import Skills from './components/Skills';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home></Home>
        <Ausbildung></Ausbildung>
        <Skills></Skills>
      </header>
    </div>
  );
}

export default App;
