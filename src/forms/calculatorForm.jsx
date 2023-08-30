import s from './CalculatorForm.module.scss';
import Inputs from '../components/inputs/Inputs';
import { useState } from 'react';


/**
 * @typedef CalculatorFormProps
 * 
 * @param {CalculatorFormProps} props
 * @returns {JSX.Element}
 */
const CalculatorForm = ({}) => {

  const [enteredSavings, setEnteredSavings] = useState('');
  const [enteredContribution, setEnteredContribution] = useState('');
  const [enteredReturn, setEnteredReturn] = useState('');
  const [enteredDuration, setEnteredDuration] = useState('');
  
  const [isSavingsValid, setIsSavingsValid] = useState(true);
  const [isContributionValid, setIsContributionValid] = useState(true);
  const [isReturnValid, setIsReturnValid] = useState(true);
  const [isDurationValid, setIsDurationValid] =useState(true);

  const savingsChangeHandler = event => {
    setEnteredSavings(event.target.value);
  }

  const contributionChangeHandler = event => {
    setEnteredContribution(event.target.value);
  }

  const returnChangeHandler = event => {
    setEnteredReturn(event.target.value);
  }

  const durationChangeHandler = event => {
    setEnteredDuration(event.target.value);
  }

  const onResetHandler = () => {
      setEnteredSavings('');
      setEnteredContribution('');
      setEnteredReturn('');
      setEnteredDuration('');    

  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const investmentData = {
      savings: enteredSavings,
      yearlyContribution: enteredContribution,
      expectedReturn: enteredReturn,
      duration: enteredDuration
    };
  
  };

  return (
    <div className={s.wrapper}>
       <form className={s.form} onSubmit={onSubmitHandler}>
        <div className={s.input_group}>

          <Inputs htmlForLabel="current-savings" inputLabel="Current Savings ($)" inputType="number" inputId="current-savings" value={enteredSavings} onChange={savingsChangeHandler} />
          <Inputs htmlForLabel="yearly-contribution" inputLabel="Yearly Savings ($)" inputType="number" inputId="yearly-contribution" value={enteredContribution} onChange={contributionChangeHandler} />
 
        </div>
        <div className={s.input_group}>
 
          <Inputs htmlForLabel="expected-return" inputLabel="Expected Interest (%, per year)" inputType="number" inputId="expected-return" value={enteredReturn} onChange={returnChangeHandler} />
          <Inputs htmlForLabel="duration" inputLabel="Investment Duration (years)" inputType="number" inputId="duration" value={enteredDuration} onChange={durationChangeHandler} />
          
        </div>
        <p className={s.actions}>

          <button type="reset" className={s.buttonAlt} onClick={onResetHandler}>
            Reset
          </button>
          <button type="submit" className={s.button}>
            Calculate
          </button>

        </p>
      </form>
    </div>
  );
};

export default CalculatorForm;
