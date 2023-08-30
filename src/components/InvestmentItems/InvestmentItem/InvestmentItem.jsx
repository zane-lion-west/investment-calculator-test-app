import s from './InvestmentItems.module.scss';

/**
 * @typedef InvestmentItemsProps
 * 
 * @param {InvestmentItemsProps} props
 * @returns {JSX.Element}
 */
const InvestmentItem = (props) => {
  return (
    <li className={s.wrapper}>
       {props.children} 
    </li>
  );
};

export default InvestmentItem;


