import React from 'react'
import classnames from './index.module.css';
import { useNavigate} from "react-router-dom";

const PayslipDetails = () => {
  const navigate = useNavigate();
  return (
    <div id='payslip-details'>
      <button onClick={() => navigate(-1)}>Back</button>
      <h2 className={classnames.title}>Details</h2>
    </div>
  )
}

export default PayslipDetails;
