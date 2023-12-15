import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [input, setInput] = useState(0);
  const [currency, setCurrency] = useState("INR");
  const [currency2, setCurrency2] = useState("INR");
  const [convert, setConvert] = useState("0");

  // useEffect(() => {
  //   console.log(input, "inputValue");
  // }, [input]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
    // console.log(input, "inputValue")
    // setConvert(e.target.value * 83)
    if (currency === "USD" && currency2 === "EUR") {
      setConvert(e.target.value * 0.92);
    } else if (currency === "USD" && currency2 === "INR") {
      setConvert(e.target.value * 83.31);
    } else if (currency === "USD" && currency2 === "USD") {
      setConvert(e.target.value * 1);
    } else if (currency === "INR" && currency2 === "INR") {
      setConvert(e.target.value * 1);
    } else if (currency === "INR" && currency2 === "USD") {
      setConvert(e.target.value * 0.012003);
    } else if (currency === "INR" && currency2 === "EUR") {
      setConvert(e.target.value * 0.010971);
    } else if (currency === "EUR" && currency2 === "INR") {
      setConvert(e.target.value * 90.8);
    } else if (currency === "EUR" && currency2 === "EUR") {
      setConvert(e.target.value * 1);
    } else if (currency === "EUR" && currency2 === "USD") {
      setConvert(e.target.value * 1.09);
    }
  };

  const handleInput2Change = (e) => {
    setConvert(e.target.value);
    // setConvert(e.target.value * 83)
    if (currency === "USD" && currency2 === "EUR") {
      setInput(e.target.value * 0.92);
    } else if (currency === "USD" && currency2 === "INR") {
      setInput(e.target.value * 83.31);
    } else if (currency === "USD" && currency2 === "USD") {
      setInput(e.target.value * 1);
    } else if (currency === "INR" && currency2 === "INR") {
      setInput(e.target.value * 1);
    } else if (currency === "INR" && currency2 === "USD") {
      setInput(e.target.value * 0.012003);
    } else if (currency === "INR" && currency2 === "EUR") {
      setInput(e.target.value * 0.010971);
    } else if (currency === "EUR" && currency2 === "INR") {
      setInput(e.target.value * 90.8);
    } else if (currency === "EUR" && currency2 === "EUR") {
      setInput(e.target.value * 1);
    } else if (currency === "EUR" && currency2 === "USD") {
      setInput(e.target.value * 1.09);
    }
  };

  const currencyChange = (e) => {
    setCurrency(e.target.value);
    if (currency === "USD" && currency2 === "EUR") {
      // setConvert(e.target.value * 0.92);//inpt
      setConvert(input * 0.92);
    } else if (e.target.value === "USD" && currency2 === "INR") {
      setConvert(input * 83.31);
    } else if (e.target.value === "USD" && currency2 === "USD") {
      setConvert(input * 1);
    } else if (e.target.value === "INR" && currency2 === "INR") {
      setConvert(input * 1);
    } else if (e.target.value === "INR" && currency2 === "USD") {
      setConvert(input * 0.012003);
    } else if (e.target.value === "INR" && currency2 === "EUR") {
      setConvert(input * 0.010971);
    } else if (e.target.value === "EUR" && currency2 === "INR") {
      setConvert(input * 90.8);
    } else if (e.target.value === "EUR" && currency2 === "EUR") {
      setConvert(input * 1);
    } else if (e.target.value === "EUR" && currency2 === "USD") {
      setConvert(input * 1.09);
    }
  };

  const currencyChange2 = (e) => {
    setCurrency2(e.target.value);
    if (currency === "USD" && currency2 === "EUR") {
      setConvert(e.target.value * 0.92);
    } else if (e.target.value === "USD" && currency2 === "INR") {
      setConvert(input * 83.31);
    } else if (e.target.value === "USD" && currency2 === "USD") {
      setConvert(input * 1);
    } else if (e.target.value === "INR" && currency2 === "INR") {
      setConvert(input * 1);
    } else if (e.target.value === "INR" && currency2 === "USD") {
      setConvert(input * 0.012003);
    } else if (e.target.value === "INR" && currency2 === "EUR") {
      setConvert(input * 0.010971);
    } else if (e.target.value === "EUR" && currency2 === "INR") {
      setConvert(input * 90.8);
    } else if (e.target.value === "EUR" && currency2 === "EUR") {
      setConvert(input * 1);
    } else if (e.target.value === "EUR" && currency2 === "USD") {
      setConvert(input * 1.09);
    }
  };

  return (
    <div className="app">
      {/* header */}
      <h4>CURRENCY CONVERTER</h4>
      <h1></h1>
      <div className="currencyConverter">
        <div className="currencyConverter-container">
          <select
            value={currency}
            onChange={currencyChange}
            className="currencyConverter__dropdowns"
          >
            <option value="INR">Indian Rupee</option>
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
          </select>
          <select
            className="currencyConverter__dropdowns"
            value={currency2}
            onChange={currencyChange2}
          >
            <option value="INR">Indian Rupee</option>
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
          </select>
        </div>
        <div className="currencyConverter__input currencyConverter-container">
          <input
            type="number"
            value={input}
            onChange={handleInputChange}
            className="currencyConverter__inputs"
          />
          <button>
            SWITCH
          </button>
          <input
            type="number"
            value={convert}
            onChange={handleInput2Change}
            className="currencyConverter__inputs"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
