import { FC, ReactNode } from 'react';
import ReactModal from 'react-modal';
import clsx from 'clsx';
import Icon from '../Icon';
import scss from './Modal.module.scss';

export interface IModal {
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
    title: string;
    positionTitle?: 'left' | 'center';
    profile?: boolean;
}
const Modal: FC<IModal> = ({
    isOpen,
    onClose,
    positionTitle = 'left',
    profile,
    title,
    children,
}) => {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            closeTimeoutMS={300}
            ariaHideApp={false}
            bodyOpenClassName={scss.bodyOpen}
            overlayClassName={scss.overlay}
            className={clsx(scss.modal, profile && scss.profile)}
        >
            <button type="button" className={scss.closeButton} onClick={onClose}>
                <Icon variant="close" className={scss.closeIcon} />
            </button>

            <h2 className={clsx(scss.title, scss[positionTitle])}>{title}</h2>

            {children}
        </ReactModal>
    );
};

export default Modal;
