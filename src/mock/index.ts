import moment from 'moment';
import { useCallback, useMemo } from 'react';

export type Payslip = {
  id: number;
  fromDate: moment.Moment;
  toDate: moment.Moment;
  file: string;
}

const NUMBER_OF_WEEKS = 24
const WEEK_INCREMENT = 2
const START_DATE = new Date('2023-01-01');
const FILE_PATH = '/my-payslip.pdf'

export const generateMockData = () => {
  const payslips: Payslip[] = [];
  for (let i = 0; i < NUMBER_OF_WEEKS; i++) {
    const fromDate = i == 0 ? moment(START_DATE) : moment(payslips[i - 1].toDate);
    const toDate = moment(fromDate).add(WEEK_INCREMENT, 'weeks')
    payslips.push({
      id: i,
      fromDate: fromDate,
      toDate: toDate,
      file: FILE_PATH
    });
  }
  return payslips;
}

export const usePayslips = () => {

  const payslips = useMemo(() => generateMockData(), []);

  const getPayslipById = useCallback((payslipId: number) => {
    return payslips.find(payslip => payslip.id === payslipId)
  }, [payslips])

  return useMemo(() => ({
    payslips,
    getPayslipById,
  }), [payslips])
}
