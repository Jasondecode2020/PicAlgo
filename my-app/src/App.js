import Patterns from "./components/Patterns"
import "./App.css"

function App() {
  return (
    <div className="App">
      <div className="uk-container uk-container-center">
        <h1 className="uk-margin-large-top">Leetcode Problems Index</h1>
        <h2 className="uk-h3" id="whitelabel">Patterns</h2>
        <ul>
          <Patterns />
        </ul>
      </div>
    </div>
  );
}

export default App;
