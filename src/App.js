import classes from "./App.module.scss";
import Header from "./components/header/header";
import Headline from "./components/headline/headline";

function App() {
  return (
    <div className={`${classes["app"]}`}>
      <Header />
      <Headline header="Posts" desc="Click the button to render posts" />
    </div>
  );
}

export default App;
