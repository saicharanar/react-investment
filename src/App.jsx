import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import { useState } from "react";
import { calculateInvestmentResults, formatter } from "./util/investment.js";
import ResultsTable from "./components/ResultsTable.jsx";

const initialInvestment = {
  duration: 1,
  expectedReturn: 5,
  initialInvestment: 200,
  annualInvestment: 15000,
};

function App() {
  const [investment, setInvestment] = useState(initialInvestment);

  function handleOnChange(newInvestment) {
    setInvestment((prevInvestment) => {
      return { ...prevInvestment, ...newInvestment };
    });
  }

  return (
    <>
      <Header />
      <UserInput
        investment={investment}
        onChange={(newInvestment) => handleOnChange(newInvestment)}
      />
      {investment.duration < 1 && <p className="center">Invalid Duration</p>}
      <ResultsTable results={calculateInvestmentResults(investment)} />
    </>
  );
}

export default App;
