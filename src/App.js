import './App.css';
import { PaymentModal } from 'pg-test-project';
import { Button } from "reactstrap";
import { useState } from 'react';









function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [clientCode, setClientCode] = useState("");
  const [clientTxnId, setClientTxnId] = useState("");


  const onSubmit = (e) => {
    e.preventDefault();

    if (clientCode !== "" && clientTxnId !== "") {
      setIsOpen(!isOpen)

    } else {
      alert("please all fields")
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <form class="ui form" onSubmit={onSubmit} style={{ width: "350px" }}>
          <div class="field">
            <label style={{ textAlign: "left", color: "#fff", fontSize: "18px", marginBottom: "10px", letterSpacing: "0.4px" }}>ClientCode</label>
            <input type="text" value={clientCode} onChange={(e) => setClientCode(e.target.value)} />
          </div>
          <div class="field" style={{ marginTop: "25px" }}>
            <label style={{ textAlign: "left", color: "#fff", fontSize: "18px", marginBottom: "10px", letterSpacing: "0.4px" }}>ClientTxnId</label>
            <input type="text" value={clientTxnId} onChange={(e) => setClientTxnId(e.target.value)} />
          </div>

          <button class="ui button" type="submit">Submit</button>
        </form>
        {(clientTxnId && clientCode) &&
          <PaymentModal clientCode={clientCode} clientTxnId={clientTxnId} isOpen={isOpen} label={"testing"} />
        }

      </header>
    </div>
  );
}

export default App;
