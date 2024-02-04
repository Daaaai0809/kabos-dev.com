import React from 'react';
import { Icon } from '@/components/ui/icon/icon';
import { Line } from '@/components/ui/line/line';
import { ICONS } from '@/constants/icons';
import Image from 'next/image';
import { profileCardStyle } from './profileCard.css';

export const ProfileCard = () => {
    return (
        <div className={profileCardStyle.div}>
            <Image src='/me.svg' alt='me' className={profileCardStyle.image} width={120} height={120} />
            <h2 className={profileCardStyle.h2}>
                Daaaai0809 / Kabos
            </h2>
            <span className={profileCardStyle.span}>
                <a href='https://github.com/Daaaai0809' className={profileCardStyle.anchor}>
                    <Icon icon={ICONS.light_github} />
                </a>
                <a href='https://twitter.com/daradara_kabos' className={profileCardStyle.anchor}>
                    <Icon icon={ICONS.light_x} />
                </a>
            </span>
            <Line />
        </div>
    );
}
