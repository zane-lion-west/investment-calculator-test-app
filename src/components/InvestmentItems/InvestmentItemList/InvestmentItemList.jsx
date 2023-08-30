import s from './InvestmentItemList.module.scss';

import InvestmentItem from '../InvestmentItem/InvestmentItem';

/**
 * @typedef InvestmentItemListProps
 * 
 * @param {InvestmentItemListProps} props
 * @returns {JSX.Element}
 */
const InvestmentItemList = ({}) => {
  return (
    <ul>
      {props.items.map(investmentItem => (
        <InvestmentItem
          key={investmentItem.id}
          id={investmentItem.id}
          saving={investmentItem.savings}
          contribution={investmentItem.contribution}
          return={investmentItem.return}
          duration={investmentItem.duration}
        >
        </InvestmentItem>
        
      ))}
    </ul>
  );
};

export default InvestmentItemList;
