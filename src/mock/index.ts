import { v4 as uuid } from 'uuid'
import moment from 'moment';

export type Payslip = {
  id: string;
  fromDate: moment.Moment;
  toDate: moment.Moment;
  file: string;
}

const NUMBER_OF_WEEKS = 24
const WEEK_INCREMENT = 2
const START_DATE = new Date('2023-01-01');
const FILE_PATH = ''

export const generateMockData = () => {
  const payslips: Payslip[] = [];
  for (let i = 0; i < NUMBER_OF_WEEKS; i++) {
    const fromDate = i == 0 ? moment(START_DATE) : moment(payslips[i - 1].toDate);
    const toDate = moment(fromDate).add(WEEK_INCREMENT, 'weeks')
    payslips.push({
      id: uuid(),
      fromDate: fromDate,
      toDate: toDate,
      file: FILE_PATH
    });
  }
  return payslips;
}
