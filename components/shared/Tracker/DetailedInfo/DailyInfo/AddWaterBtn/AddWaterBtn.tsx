import Button from '@/components/ui/Button';
import scss from './AddWaterBtn.module.scss';
import Icon from '@/components/ui/Icon';

const AddWaterBtn = () => {
    return (
        <Button variant="text" className={scss.button}>
            <div className={scss.iconWrapper}>
                <Icon variant="plus" className={scss.iconPlus} />
            </div>
            Add water
        </Button>
    );
};

export default AddWaterBtn;
