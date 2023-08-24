import s from './calculatorForm.module.scss';
import buttons from '../components/buttons/Buttons';


/**
 * @typedef calculatorFormProps
 * 
 * @param {calculatorFormProps} props
 * @returns {JSX.Element}
 */
const calculatorForm = ({}) => {
  return (
    <div className={s.wrapper}>
       <form className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" />
          </p>
        </div>
        <p className="actions">

          <button type="reset" className="buttonAlt">
            Reset
          </button>

          <Buttons>Reset</Buttons>
          <Buttons>Calculate</Buttons>
        
          <button type="submit" className="button">
            Calculate
          </button>
        
        
        </p>
      </form>
    </div>
  );
};

export default calculatorForm;
