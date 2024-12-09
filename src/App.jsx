import { useState } from "react";
import Header from "./component/Header";
import Result from "./component/Result";
import UserInput from "./component/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 5,
    duration: 10,
  });

  function handleUserInput(investmentType, newValue) {
    setUserInput((previousValue) => {
      return {
        ...previousValue,
        [investmentType]: +newValue,
      };
    });
  }
  return(
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleUserInput}/>
      <Result input={userInput}/>
    </>
  );
}

export default App;
