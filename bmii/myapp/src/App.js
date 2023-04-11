import logo from './logo.svg';
import './App.css';
import { useState } from "react";
function App() {
  const [age, setAge] = useState(18);
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [category, setCategory] = useState("");
  const [bmi, setBmi] = useState("")
  function calculate() {
    const heightBy = height / 39.37;
    const bmiBy = weight / (heightBy * heightBy)
    setBmi(bmiBy.toFixed(1));



    if (gender == "male") {
      if (bmiBy < 18.5) {
        setCategory("underWeight")
      }
      else if (bmiBy < 18.5 && bmiBy <= 24.9) {
        setCategory("normal Weight")
      }
      else if (bmiBy < 18.5 && bmiBy <= 24.9) {
        setCategory("normal Weight")
      }
      else if (bmiBy < 25 && bmiBy <= 29.9) {
        setCategory("Over Weight")
      }
      else {
        setCategory("obesity")
      }
    }
    else {
      if (bmiBy < 20.5) {
        setCategory("underweight")
      }
      else if (bmiBy >= 20.5 && bmiBy <= 26.9) {
        setCategory("normal weight")
      }
      else if (bmiBy >= 27 && bmiBy <= 31.9) {
        setCategory("over weight")
      }
      else {
        setCategory("obesity")
      }
    }
  }



  return (
    <div className="App">
      <label>Age</label>
      <input type="number" min="2" max="100" value={age} onChange={(e) => setAge(e.target.value)} />
      <label>Gender</label>
      <select value={gender} onChange={(e) => setGender(e.target.value)} >
        <option value="male" >Male</option>
        <option value="female">Female</option>
      </select>
      <label>Height(inches)</label>
      <input type="number" min="24" max="96" value={height} onChange={(e) => setHeight(e.target.value)} />
      <label>weight(kg)</label>
      <input type="number" step="0.1" value={weight} onChange={(e) => setWeight(e.target.value)} />
      <button onClick={calculate}>Compute</button>
      {bmi > 0 && (
        <div>
          <p>BMI:{bmi}</p>
          <p>Category:{category}</p>
        </div>
      )}
    </div>
  );
}

export default App;
