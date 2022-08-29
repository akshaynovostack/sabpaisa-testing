import logo from './logo.svg';
import './App.css';
import { PaymentModal } from 'pg-test-project';
import { Button } from "reactstrap";
import { useState } from 'react';
function App() {
  const [isOpen, openPg] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={() => openPg(true)}>Open Payment Gateway</Button>

        <PaymentModal isOpen={isOpen} label={"testing"} />
      </header>
    </div>
  );
}

export default App;
