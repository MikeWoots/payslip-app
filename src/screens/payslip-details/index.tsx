import React, { useCallback } from 'react'
import classnames from './index.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { usePayslips } from '@/mock';

const PayslipDetails = () => {
  const navigate = useNavigate();
  let { payslipId } = useParams();
  const { getPayslipById } = usePayslips()
  const payslip = getPayslipById(parseInt(payslipId))

  const downloadPDF = useCallback(async () => {
        const a = document.createElement('a');
        a.href = payslip.file;
        a.download = `Payslip ${payslip.fromDate.format('MMMM YYYY')}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
  }, [payslip])

  return (
    <div id='payslip-details'>
      <section className={'FlexRow'}>
        <button className={classnames.BackButton} onClick={() => navigate(-1)}>
          <FaArrowLeft className={classnames.BackArrow}/>
        </button>
        <h2 className={classnames.Title}>Details</h2>
      </section>
      <section className={classnames.Card}>
        <p className={classnames.CardHeader}>{payslip.fromDate.format('MMMM, YYYY')}</p>
        <section className={'FlexRow'}>
          <p className={classnames.SectionHeader}>Payslip ID:</p>
          <p className={classnames.Text}>{payslip.id}</p>
        </section>
        <b className={classnames.SectionHeader}>Payment period</b>
        <section className={'InlineFlexCenteredSpaceBetween'}>
          <div>
            <p className={classnames.Text}>From:</p>
            <p className={classnames.Text}>{payslip.fromDate.format('DD MMM YYYY')}</p>
          </div>
          <div>
            <p className={classnames.Text}>To:</p>
            <p className={classnames.Text}>{payslip.toDate.format('DD MMM YYYY')}</p>
          </div>
        </section>
        <button className={classnames.Button} onClick={() => downloadPDF()}>
          <p className={classnames.ButtonText}>Download PDF</p>
        </button>
      </section>
    </div>
  )
}

export default PayslipDetails;
