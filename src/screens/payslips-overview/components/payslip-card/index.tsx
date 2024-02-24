import React from 'react'
import { Payslip } from '@/mock';
import classnames from './index.module.css';
import { useNavigate } from 'react-router-dom';

export const PayslipCard = ({payslip}: {payslip: Payslip}) => {
  const navigate = useNavigate();

  return (
    <section className={classnames.Card}>
      <p className={classnames.CardHeader}>{payslip.fromDate.format('MMMM, YYYY')}</p>
      <section
        className={'InlineFlexCenteredSpaceBetween'}>
        <div className={'FlexRow'}>
          <p className={classnames.Text}>{payslip.fromDate.format('DD MMM YYYY')}</p>
          <p className={classnames.Text} style={{marginRight: 2, marginLeft: 2}}> - </p>
          <p className={classnames.Text}>{payslip.toDate.format('DD MMM YYYY')}</p>
        </div>
        <button className={classnames.Button} onClick={() => navigate(`/payslip-details/${payslip.id}`)}>
          <p className={classnames.ButtonText}>View details</p>
        </button>
      </section>
    </section>
    )
}
