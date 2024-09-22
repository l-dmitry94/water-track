import { FC } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { advantages } from '@/public/images';
import customers from '@/data/customers.json';
import scss from './Advantages.module.scss';

interface IAdvantages {
    auth?: boolean;
}

const Advantages: FC<IAdvantages> = ({ auth = false }) => {
    return (
        <section className={clsx(scss.advantagesSection, auth && scss.auth)}>
            <div className={scss.imageWrapper}>
                <Image
                    src={advantages}
                    fill
                    alt="advantages image"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={scss.image}
                />
            </div>

            <section className={scss.customers}>
                <ul className={scss.customersList}>
                    {customers.map((customer) => (
                        <li key={customer.id} className={scss.customer}>
                            {customer.name}
                        </li>
                    ))}
                </ul>
                <p className={scss.customersText}>
                    Our <span className={scss.customersTextColor}>happy</span> customers
                </p>
            </section>

            <section className={scss.advantages}>
                <ul className={scss.advantagesList}>
                    <li className={scss.advantagesListItem}>Habit drive</li>
                    <li className={scss.advantagesListItem}>View statistics</li>
                    <li className={scss.advantagesListItem}>Personal rate setting</li>
                </ul>
            </section>
        </section>
    );
};

export default Advantages;
