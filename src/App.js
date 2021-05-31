import { Route } from "react-router";
import "./App.css";
import CardDetail from "./pages/CardDetail";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Main} />
      <Route exact path="/card/:id" render={(props) => <CardDetail />} />
    </div>
  );
}

export default App;
