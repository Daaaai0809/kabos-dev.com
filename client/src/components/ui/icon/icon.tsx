import { IconProps } from './type';
import { iconStyle } from './icon.css';
import Image from 'next/image';

export const Icon = (props: IconProps) => {
    const { icon } = props;

    return (
        <Image src={icon} className={iconStyle.link} alt='icon' />
    )
}
