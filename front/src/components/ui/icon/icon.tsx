import { ICONS } from '@/constants/icons';
import { IconProps } from './type';
import { iconStyle } from './icon.css';

export const Icon = (props: IconProps) => {
    const { name } = props;

    return (
        <img src={ICONS[name]} alt={name} className={iconStyle.link} />
    )
}
