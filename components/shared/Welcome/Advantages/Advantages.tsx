import Image from 'next/image';
import { advantages } from '@/public/images';
import customers from './customers.json';
import scss from './Advantages.module.scss';

const Advantages = () => {
    return (
        <section className={scss.advantagesSection}>
            <div className={scss.imageWrapper}>
                <Image
                    src={advantages}
                    fill
                    alt="advantages image"
                    priority
                    className={scss.image}
                />
            </div>

            <section className={scss.customers}>
                <ul className={scss.customersList}>
                    {customers.map((customer) => (
                        <li key={customer.id}>{customer.name}</li>
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
