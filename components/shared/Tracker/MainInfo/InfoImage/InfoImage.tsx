import Image from 'next/image';
import { bottle } from '@/public/images';
import scss from './InfoImage.module.scss';

const InfoImage = () => {
    return (
        <div className={scss.imageWrapper}>
            <Image
                src={bottle}
                alt="bottle"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className={scss.image}
            />
        </div>
    );
};

export default InfoImage;
