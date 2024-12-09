import { calculateInvestmentResults, formatter } from "../util/investment.js";

import PropTypes from "prop-types";

export default function Result({ input }) {
  const resultData = calculateInvestmentResults(input);

  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>

      <tbody>
        {resultData.map((eachYearData) => {
          const totalInterestData =
            eachYearData.valueEndOfYear -
            eachYearData.annualInvestment * eachYearData.year -
            initialInvestment;
          const totalAmountInvested =
            eachYearData.valueEndOfYear - totalInterestData;
          return (
            <tr key={eachYearData.year}>
              <td>{eachYearData.year}</td>
              <td>{formatter.format(eachYearData.valueEndOfYear)}</td>
              <td>{formatter.format(eachYearData.interest)}</td>
              <td>{formatter.format(totalInterestData)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

// Below code to remove EsLint error: 'xyz' is missing in props validationeslintreact/prop-types
Result.propTypes = {
  input: PropTypes.object,
};
