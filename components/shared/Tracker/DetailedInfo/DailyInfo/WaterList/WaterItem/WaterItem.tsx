import { FC } from 'react';
import { format, parse } from 'date-fns';
import Icon from '@/components/ui/Icon';
import { IWater } from '@/types/waters.types';
import scss from './WaterItem.module.scss';

interface IWaterItem extends IWater {
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
}

const WaterItem: FC<IWaterItem> = ({ volume, time, id, onEdit, onDelete }) => {
    const date = parse(time, 'H:mm', new Date());
    const formattedTime = format(date, 'h:mm a');

    return (
        <>
            <div className={scss.waterItem}>
                <Icon variant="water-glass" className={scss.waterIcon} />

                <div className={scss.info}>
                    <p className={scss.volume}>{`${volume} ml`}</p>
                    <p className={scss.time}>{formattedTime}</p>
                </div>

                <div className={scss.controls}>
                    <button onClick={() => onEdit(id!)} className={scss.controlButton}>
                        <Icon variant="pencil" className={scss.controlIcon} />
                    </button>
                    <button onClick={() => onDelete(id!)} className={scss.controlButton}>
                        <Icon variant="trash" className={scss.controlIcon} />
                    </button>
                </div>
            </div>
        </>
    );
};

export default WaterItem;
