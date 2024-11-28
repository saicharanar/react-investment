export default function UserInput({
  investment: { duration, expectedReturn, initialInvestment, annualInvestment },
  onChange,
}) {
  return (
    <main id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="initial-investment">INITIAL INVESTMENT</label>
          <input
            id="initial-investment"
            type="number"
            value={initialInvestment}
            onChange={(event) => {
              onChange({ initialInvestment: Number(event.target.value) });
            }}
          />
        </div>
        <div>
          <label htmlFor="annual-investment">ANNUAL INVESTMENT</label>
          <input
            id="annual-investment"
            type="number"
            value={annualInvestment}
            onChange={(event) => {
              onChange({ annualInvestment: Number(event.target.value) });
            }}
          />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label htmlFor="expected-return">EXPECTED RETURN</label>
          <input
            id="expected-return"
            type="number"
            value={expectedReturn}
            onChange={(event) =>
              onChange({ expectedReturn: Number(event.target.value) })
            }
          />
        </div>
        <div>
          <label htmlFor="duration">DURATION</label>
          <input
            id="duration"
            type="number"
            value={duration}
            onChange={(event) =>
              onChange({ duration: Number(event.target.value) })
            }
          />
        </div>
      </div>
    </main>
  );
}
