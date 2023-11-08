const UserInput = () => {
  return (
    <section id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input
            type="number"
            name="initialInvestment"
            id="initial-investment"
          />
        </div>
        <div>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input type="number" name="annualInvestment" id="annual-investment" />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label htmlFor="expected-return">Expected Return</label>
          <input type="number" name="expected-return" id="expected-return" />
        </div>
        <div>
          <label htmlFor="duration">Duration</label>
          <input type="number" name="duration" id="duration" />
        </div>
      </div>
    </section>
  );
};

export default UserInput;
