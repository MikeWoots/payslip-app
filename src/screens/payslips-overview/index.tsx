import React from 'react'
import { useEffect, useState } from 'react';
import { generateMockData, Payslip } from '@/mock';
import { PayslipCard } from '@/screens/payslips-overview/components/payslip-card';
import classnames from './index.module.css';

const PayslipOverview = () => {

  const [payslips, setPayslips] = useState<Payslip[]>([]);

  useEffect(() => {
    const data = generateMockData()
    setPayslips(data)
  }, [])

  return (
    <div>
      <p className={classnames.title}>My Payslips</p>
        <ul>
          {
            payslips.sort((a,b) => a.fromDate > b.fromDate ? -1 : 1).map((payslip) =>
              <PayslipCard key={payslip.id} payslip={payslip}/>
            )
          }
        </ul>
    </div>
  )
}

export default PayslipOverview;
