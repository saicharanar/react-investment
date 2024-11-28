import { formatter } from "../util/investment.js";

export default function ResultsTable({ results }) {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Interest Earned</th>
          <th>Value At End Of Year</th>
          <th>Annual Investment</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result, index) => (
          <tr key={index}>
            <td key={result.year}>{result.year}</td>
            <td key={result.interest}>{formatter.format(result.interest)}</td>
            <td key={result.valueEndOfYear}>
              {formatter.format(result.valueEndOfYear)}
            </td>
            <td key={result.annualInvestment}>
              {formatter.format(result.annualInvestment)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
