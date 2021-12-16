const ATMDeposit = ({onChange, isDeposit, validTransaction}) => {
  const choice = ["Deposit", "Cash Back"];
  return (
    <label className="label huge">
      <h3>{choice[Number(!isDeposit)]}</h3>
      <input type="number" onChange={onChange}></input>
      <input type="submit" value = "Submit"></input>
    </label>
  );
};

const Account = () => {
  const [deposit, setDeposit] = React.useState(0)
  const [accountState, setAccountState] = React.useState(0);
  const [isDeposit,setIsDeposit] = React.useState(true);
  const [atmMode, setAtmMode] = React.useState("");
  const [validTransaction, setValidTransaction] = React.useState(false);

  let status = `Account Balance $ ${deposit}`;
  //console.log("rerendered")
  const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    //set new value of deposit size
    setDeposit(Number(event.target.value));
    //do validation, changing validTransaction as appropriate
    if (Number(event.target.value)<=0) {
      setValidTransaction(false);
      return;
    } else if (atmMode == "Cash Back" && Number(event.target.value < accountState)) {
      setValidTransaction(false);
      return;
    } else{
      setValidTransaction(true);
    }
  };

  const handleSubmit = () => {
    let newtotal = isDeposit ? accountState + ammount : accountState - ammount;
    setAccountState(newtotal);
    setValidTransaction(false)
    event.preventDefault();
  };


  return (
    <form onSubmit={handleSubmit}>
      <h2 id = 'total'>{status}</h2>
      <select onChange = {(e) => handleModeSelect(e)} name="mode" id="mode-select">
        <option id="no-selection" value=""></option>
        <option id="deposit-selection" value="Deposit">Deposit</option>
        <option id="cashback-selection" value="Cash Back">Cash Back</option>
      </select>
      <br/>
      {
        atmMode && <ATMDeposit onChange={handleChange} isDeposit = {isDeposit} validTransaction = {validTransaction}> Ammount </ATMDeposit>
      }
    </form>
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));
