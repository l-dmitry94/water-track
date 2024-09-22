import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import scss from './AddWaterButton.module.scss';

const AddWaterButton = () => {
    return (
        <div className={scss.buttonWrapper}>
            <Button variant="contained" className={scss.button}>
                <Icon variant="plus" className={scss.icon} />
                Add water
            </Button>
        </div>
    );
};

export default AddWaterButton;
