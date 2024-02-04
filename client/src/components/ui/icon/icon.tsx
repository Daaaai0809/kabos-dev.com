import { IconProps } from './type';
import { iconStyle } from './icon.css';
import Image from 'next/image';

export const Icon = (props: IconProps) => {
    const { icon, className } = props;

    return (
        <Image src={icon} className={`${iconStyle.link} ${className}`} alt='icon' width={32} height={32} />
    )
}
