import { useState } from 'react';
import { StepperContext } from './contexts/StepperContext';
import './App.css';
import Stepper from './components/Stepper';
import StepperControl from './components/StepperControl';
import Account from './components/steps/Account';
import Final from './components/steps/Final';
import Details from './components/steps/Details';
import Payment from './components/steps/Payment';

function App() {
const [currentStep, setCurrentStep] = useState(1)
const [userData, setUserData] = useState('');
const [finalData, setFinalData] = useState([]);

//tittle of the forms
  const steps = [
    "Account information",
    "Personal detail",
    "Payment",
    "Complete"
  ];

  //to determin the component that will show

  const displayStep = (step) => {
    switch(step){
      case 1:
        return <Account />
        case 2:
        return <Details />
        case 3: 
        return <Payment />
        case 4:
        return <Final />
        default:
    }
  }

  const handleClick = (direction) => {
    let newStep = currentStep;

    if (userData !== ""){
      direction === "next" ? newStep++ : newStep--;

    }
    //check if the steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  

    
  }
  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
      {/* stepper */}
      <div className='container horizontal mt-5'>
      <Stepper 
      steps={steps}
      currentStep={currentStep}
      />

       {/* Display Components */}
       <div className='my-10 p-10'>
        <StepperContext.Provider value={{
          userData,
          setUserData,
          finalData,
          setFinalData
        }}>
          {displayStep(currentStep)}
        </StepperContext.Provider>
       </div>
      </div>

   

      {/*  Navigation controls*/}
      {currentStep !== steps.length && 
      <StepperControl
      handleClick = {handleClick}
      currentStep = {currentStep}
      step = {steps}
      userData={ userData}
      
      />
    }
    </div>
  );
}

export default App;
