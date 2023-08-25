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
  
  const onResetHandler = () => {};
  const onSubmitHandler = () => {};

  return (
    <div className={s.wrapper}>
       <form className={s.form}>
        <div className={s.input_group}>

          <Inputs htmlForLabel="current-savings" inputLabel="Current Savings ($)" inputType="number" inputId="current-savings"/>
          <Inputs htmlForLabel="yearly-contribution" inputLabel="Yearly Savings ($)" inputType="number" inputId="yearly-contribution" />
 
        </div>
        <div className={s.input_group}>
 
          <Inputs htmlForLabel="expected-return" inputLabel="Expected Interest (%, per year)" inputType="number" inputId="expected-return" />
          <Inputs htmlForLabel="duration" inputLabel="Investment Duration (years)" inputType="number" inputId="duration" />
          
        </div>
        <p className={s.actions}>

          <button type="reset" className={s.buttonAlt} onClick={onResetHandler}>
            Reset
          </button>
          <button type="submit" className={s.button} onClick={onSubmitHandler}>
            Calculate
          </button>

        </p>
      </form>
    </div>
  );
};

export default CalculatorForm;
