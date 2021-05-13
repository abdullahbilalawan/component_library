import react from "react";
import ReactDOM from "react-dom";
import PrimaryButton, { secondaryButton } from "./components/Buttons";
import {GlobalStyle} from './utils'

const App = () => {
  return (
    <div>
      <PrimaryButton>Hello world</PrimaryButton>
      <br></br>
      <br></br>
      <PrimaryButton>the other button</PrimaryButton>
      <secondaryButton>Hello world</secondaryButton>
      <GlobalStyle />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
