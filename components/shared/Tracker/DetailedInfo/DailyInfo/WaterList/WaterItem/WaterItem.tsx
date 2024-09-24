import { FC } from 'react';
import { format, parse } from 'date-fns';
import Icon from '@/components/ui/Icon';
import { IWater } from '@/types/waters.types';
import scss from './WaterItem.module.scss';

const WaterItem: FC<IWater> = ({ volume, time }) => {
    const date = parse(time, 'H:mm', new Date());
    const formattedTime = format(date, 'h:mm a');

    return (
        <div className={scss.waterItem}>
            <Icon variant="water-glass" className={scss.waterIcon} />

            <div className={scss.info}>
                <p className={scss.volume}>{`${volume} ml`}</p>
                <p className={scss.time}>{formattedTime}</p>
            </div>

            <div className={scss.controls}>
                <button className={scss.controlButton}>
                    <Icon variant="pencil" className={scss.controlIcon} />
                </button>
                <button className={scss.controlButton}>
                    <Icon variant="trash" className={scss.controlIcon} />
                </button>
            </div>
        </div>
    );
};

export default WaterItem;
