import s from './Button.module.scss';

/**
 * @typedef ButtonProps
 * 
 * @param {ButtonProps} props
 * @returns {JSX.Element}
 */
const Button = (props) => {
  return (
    <button type={props.buttonType} className={props.buttonClassName} onClick={props.buttonOnClick}>
      {props.children}
    </button>
  );
};

export default Button;
