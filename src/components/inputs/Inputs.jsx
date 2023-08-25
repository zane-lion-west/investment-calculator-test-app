import s from './Inputs.module.scss';

/**
 * @typedef InputsProps
 * 
 * @param {InputsProps} props
 * @returns {JSX.Element}
 */
const Inputs = ({htmlForLabel, inputLabel, inputType, inputId}) => {
  return (
    <div className={s.wrapper}>
      <p>
       <label htmlFor={htmlForLabel}>{inputLabel}</label>
       <input type={inputType} id={inputId} />
      </p>
    </div>
  );
};

export default Inputs;
