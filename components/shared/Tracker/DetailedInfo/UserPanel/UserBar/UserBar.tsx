import { FC, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import Skeleton from 'react-loading-skeleton';
import Icon from '@/components/ui/Icon';
import UserBarPopover from './UserBarPopover';
import { ISession } from '@/types/session.types';
import scss from './UserBar.module.scss';

const UserBar: FC<ISession> = ({ session }) => {
    const [popoverIsOpen, setPopoverIsOpen] = useState(false);

    const togglePopover = () => {
        setPopoverIsOpen(!popoverIsOpen);
    };

    return (
        <div className={scss.userBarWrapper}>
            <button onClick={togglePopover} className={scss.userBar}>
                {session ? (
                    <p className={scss.name}>{session?.user?.name || 'User'}</p>
                ) : (
                    <Skeleton className={scss.nameSkeleton} />
                )}

                {session ? (
                    <div
                        className={clsx(
                            scss.imageWrapper,
                            session?.user?.image && scss.userImageWrapper
                        )}
                    >
                        {session?.user?.image ? (
                            <Image
                                src={session?.user?.image}
                                alt="User avatar"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className={scss.image}
                            />
                        ) : (
                            <Icon variant="user" className={scss.userIcon} />
                        )}
                    </div>
                ) : (
                    <Skeleton circle className={scss.imageSkeleton} />
                )}

                <Icon
                    variant="chevron-down"
                    className={clsx(scss.chevronDownIcon, popoverIsOpen && scss.open)}
                />
            </button>

            <UserBarPopover isOpen={popoverIsOpen} onClose={togglePopover} />
        </div>
    );
};

export default UserBar;
