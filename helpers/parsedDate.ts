import { set } from 'date-fns';

const parsedDate = (date: string) => {
    const currentTime = new Date();

    return set(new Date(date), {
        hours: currentTime.getHours(),
        minutes: currentTime.getMinutes(),
        seconds: currentTime.getSeconds(),
    }).toISOString();
};

export default parsedDate;
