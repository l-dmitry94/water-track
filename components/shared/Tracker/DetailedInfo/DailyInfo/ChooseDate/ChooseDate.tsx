import { format, isToday } from 'date-fns';
import scss from './ChooseDate.module.scss';

const ChooseDate = () => {
    const date = new Date();
    const today = isToday(date);

    return <h2 className={scss.date}>{today ? 'Today' : format(date, 'd, MMMM')}</h2>;
};

export default ChooseDate;
