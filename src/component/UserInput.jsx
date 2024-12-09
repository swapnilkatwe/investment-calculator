
export default function UserInput({userInput, onChange}) {

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
                onChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Anual Investment</label>
          <input
            type="number"
            required
            value={userInput.anualInvestment}
            onChange={(event) =>
                onChange("anualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Returns</label>
          <input
            type="number"
            required
            value={userInput.expectedReturns}
            onChange={(event) =>
                onChange("expectedReturns", event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) =>
                onChange("duration", event.target.value)
            }
          />
        </p>
      </div>
    </section>
  );
}
