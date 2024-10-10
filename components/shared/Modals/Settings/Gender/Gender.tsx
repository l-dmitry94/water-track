import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { FieldValues, Path, PathValue, UseFormSetValue } from 'react-hook-form';
import { ISession } from '@/types/session.types';
import scss from './Gender.module.scss';
import Title from '@/components/ui/Title';

interface IGender<T extends FieldValues> extends ISession {
    setValue: UseFormSetValue<T>;
    gender: 'woman' | 'man';
    setGender: Dispatch<SetStateAction<'woman' | 'man'>> | undefined;
}

const Gender = <T extends FieldValues>({ gender, setGender, setValue }: IGender<T>) => {
    useEffect(() => {
        if (gender) {
            setValue('gender' as Path<T>, gender as PathValue<T, Path<T>>);
        }
    }, [gender, setValue]);

    const handleGenderChange = (selectedGender: 'woman' | 'man') => {
        if (setGender) {
            setGender(selectedGender);
        }
    };
    return (
        <div className={scss.wrapper}>
            <Title>Your gender identity</Title>

            <div className={scss.radioGroup}>
                <div>
                    <input
                        type="radio"
                        name="gender"
                        id="woman"
                        value="woman"
                        defaultChecked={gender === 'woman'}
                        onChange={() => handleGenderChange('woman')}
                        // onChange={() =>
                        //     setValue('gender' as Path<T>, 'woman' as PathValue<T, Path<T>>)
                        // }
                        className={scss.radioHidden}
                    />
                    <label htmlFor="woman" className={scss.label}>
                        <span className={scss.radio}>
                            <span className={scss.circle}></span>
                        </span>

                        <p className={scss.gender}>Woman</p>
                    </label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="gender"
                        id="man"
                        value="man"
                        defaultChecked={gender === 'man'}
                        onChange={() => handleGenderChange('man')}
                        className={scss.radioHidden}
                    />
                    <label htmlFor="man" className={scss.label}>
                        <span className={scss.radio}>
                            <span className={scss.circle}></span>
                        </span>

                        <p className={scss.gender}>Man</p>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Gender;
