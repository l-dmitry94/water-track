import waters from '@/data/waters.json';
import WaterItem from './WaterItem';
import scss from './WaterList.module.scss';
import ScrollBar from '@/components/ui/ScrollBar';

const WaterList = () => {
    return (
        <section className={scss.waterSection}>
            <ScrollBar className={scss.scroll}>
                <div className={scss.waterList}>
                    {waters.map((water) => (
                        <WaterItem key={water.id} {...water} />
                    ))}
                </div>
            </ScrollBar>
        </section>
    );
};

export default WaterList;
