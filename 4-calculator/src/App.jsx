import styles from "./App.module.css";
import ButtonContainer from "./Components/ButtonContainer.module";
import Display from "./Components/Display";

function App() {
  return (
    <div className={styles.calculator}>
      <Display></Display>
      <ButtonContainer />
    </div>
  );
}

export default App;
