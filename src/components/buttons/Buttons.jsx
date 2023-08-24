import s from './buttons.module.scss';

/**
 * @typedef buttonsProps
 * 
 * @param {buttonsProps} props
 * @returns {JSX.Element}
 */



const buttons = ({}) => {
  return (
    <div className={s.wrapper}>
          <button type="reset" className="buttonAlt">
            Reset
          </button>
    </div>
  );
};

export default buttons;
