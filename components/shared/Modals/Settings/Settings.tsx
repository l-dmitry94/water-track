import { useState } from 'react';
import { useSession } from 'next-auth/react';
import toast from 'react-hot-toast';
import Form from '@/components/ui/Form';
import Button from '@/components/ui/Button';
import ScrollBar from '@/components/ui/ScrollBar';
import WaterLoader from '@/components/ui/WaterLoader';
import Avatar from './Avatar';
import Gender from './Gender';
import UserInfo from './UserInfo';
import DailyNorma from './DailyNorma';
import AdditionalInfo from './AdditionalInfo';
import Volume from './Volume';
import settingsValidationSchema from './settingsValidationSchema';
import { updateUser } from '@/services/auth.api';
import scss from './Settings.module.scss';

export interface ISettings {
    image?: string | null;
    gender: 'woman' | 'man';
    name?: string | null;
    email: string;
    weight: number;
    activeTime: number;
    volume: string | number;
}

const Settings = ({ onClose }: { onClose: () => void }) => {
    const { data: session, update: updateSession } = useSession();
    const [isLoading, setIsLoading] = useState(false);
    const [weight, setWeight] = useState<number | undefined>(session?.user?.weight);
    const [activeTime, setActiveTime] = useState<number | undefined>(session?.user?.activeTime);
    const [gender, setGender] = useState<ISettings['gender']>(session?.user?.gender);

    const handleSubmit = async (data: ISettings) => {
        const formatedData = {
            ...data,
            name: data.name || null,
            weight: Number(data.weight),
            activeTime: Number(data.activeTime),
            volume: Number(data.volume) * 1000,
        };

        try {
            setIsLoading(true);
            const response = await updateUser(formatedData);

            updateSession({ ...formatedData });
            setIsLoading(false);

            toast.success(response.data.message);

            onClose();
        } catch (error: any) {
            toast.error(error.response.data.message || 'An error occurred');
            setIsLoading(false);
        }
    };

    return (
        <>
            <Form onSubmit={handleSubmit} validationSchema={settingsValidationSchema}>
                {(register, errors, setValue) => (
                    <div className={scss.wrapper}>
                        <Avatar<ISettings> session={session} setValue={setValue} />

                        <ScrollBar className={scss.scrollBar}>
                            <Gender<ISettings>
                                session={session}
                                gender={gender}
                                setGender={setGender}
                                setValue={setValue}
                            />
                            <div className={scss.infoWrapper}>
                                <div className={scss.container}>
                                    <UserInfo<ISettings>
                                        session={session}
                                        register={register}
                                        setValue={setValue}
                                        errors={errors}
                                    />

                                    <DailyNorma />
                                </div>
                                <div className={scss.container}>
                                    <AdditionalInfo<ISettings>
                                        weight={weight}
                                        activeTime={activeTime}
                                        setWeight={setWeight}
                                        setActiveTime={setActiveTime}
                                        session={session}
                                        register={register}
                                        setValue={setValue}
                                        errors={errors}
                                    />

                                    <Volume
                                        weight={weight}
                                        activeTime={activeTime}
                                        gender={gender}
                                        session={session}
                                        register={register}
                                        setValue={setValue}
                                        errors={errors}
                                    />
                                </div>
                            </div>

                            <Button type="submit" className={scss.saveButton}>
                                Save
                            </Button>
                        </ScrollBar>
                    </div>
                )}
            </Form>

            {isLoading && <WaterLoader />}
        </>
    );
};

export default Settings;
