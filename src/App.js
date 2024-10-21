import { useState } from 'react';
import './App.css';
import image from './assests/bmi.png';

function App() {
  const [height,setheight]=useState("");
  const [weight,setweight]=useState("");
  const [bmi,setBmi]=useState(null);
  const [bmistatus,setBmistatus]=useState("");
  const [error,seterror]=useState("");
  const calculateBmi=()=>{
    const invalidh=/^\d+$/.test(height);
    const invalidw=/^\d+$/.test(weight);
    if(invalidh && invalidw){
       const heightinmeter=height/100;
       const bmivalue=weight/(heightinmeter*heightinmeter);
       setBmi(bmivalue.toFixed(2));
       if(bmivalue<18.5){
        setBmistatus("Under Weight");
       }else if(bmivalue>=18.5 && bmivalue<24.9){
        setBmistatus("Normal Weight");
       }else if(bmivalue>=24.9 && bmivalue<29.9){
        setBmistatus("Over Weight");
       }else{
        setBmistatus("Obese");
       }
       seterror("");
    }else{
      setBmi(null);
      setBmistatus("");
      seterror("Please enter valid numeric values for Height and Weight");
    }
  }
  const clearall=()=>{
    setheight("");
    setweight("");
    setBmi(null);
    setBmistatus("");
  }
  return (
    <div className="App"><div>

    
      <div className='data'>
        <img src={image} alt='bmi'/>
      </div>
      <div className='bmi'>
        <h2 className='heading'>
          BMI Calculator
        </h2>
       {error && <p className='error'>{error}</p>}
        <div className='input-form'>
          <label htmlFor='height'>Height (cm)</label>
          <input type='number' id='height' value={height} onChange={(e)=>setheight(e.target.value)}/>
        </div>
        <div className='input-form'>
          <label htmlFor='height'>weight (kg)</label>
          <input type='number' id='weight' value={weight} onChange={(e)=>setweight(e.target.value)}/>
        </div>
        <button className='button' onClick={calculateBmi}>Calculate BMI</button>
        <button className='button1' onClick={clearall}>Clear</button>
{bmi!==null &&         <div className='result'>
          <p>BMI: {bmi}</p>
          <p>Status: {bmistatus}</p>
        </div>}
      </div>
      <p><a href='https://yogeeswaran-m.vercel.app/'>Designed by Yogeeswaran M</a></p></div>
    </div>
  );
}

export default App;
