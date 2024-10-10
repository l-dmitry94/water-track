import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FieldValues, Path, PathValue, UseFormSetValue } from 'react-hook-form';
import {
    CldUploadButton,
    CloudinaryUploadWidgetInfo,
    CloudinaryUploadWidgetResults,
} from 'next-cloudinary';
import Icon from '@/components/ui/Icon';
import { ISession } from '@/types/session.types';
import scss from './Avatar.module.scss';

interface IAvatar<T extends FieldValues> extends ISession {
    setValue?: UseFormSetValue<T>;
}

const Avatar = <T extends FieldValues>({ session, setValue }: IAvatar<T>) => {
    const [avatar, setAvatar] = useState(session?.user?.image);

    useEffect(() => {
        if (setValue) {
            setValue('image' as Path<T>, avatar as PathValue<T, Path<T>>);
        }
    }, [avatar, setValue]);

    const uploadAvatar = (result: CloudinaryUploadWidgetResults) => {
        const info = result.info as CloudinaryUploadWidgetInfo;

        if ('secure_url' in info) {
            setAvatar(info.secure_url);
        }
    };
    return (
        <div className={scss.avatarWrapper}>
            <div className={scss.imageWrapper}>
                {avatar ? (
                    <Image
                        src={avatar}
                        alt="User avatar"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className={scss.image}
                    />
                ) : (
                    <Icon variant="user" className={scss.userIcon} />
                )}
            </div>

            <CldUploadButton
                uploadPreset={process.env.NEXT_PUBLIC_UPLOAD_PRESET}
                signatureEndpoint="/api/cloudinary"
                options={{
                    maxFiles: 1,
                    singleUploadAutoClose: false,
                    publicId: session?.user?.id,
                }}
                onSuccess={uploadAvatar}
                className={scss.uploadButton}
            >
                <Icon variant="upload" className={scss.uploadIcon} />
                <span className={scss.uploadText}>Upload a photo</span>
            </CldUploadButton>
        </div>
    );
};

export default Avatar;
