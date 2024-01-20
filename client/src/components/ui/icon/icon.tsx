import { ICONS } from '@/constants/icons';
import { IconProps } from './type';
import { iconStyle } from './icon.css';

export const Icon = (props: IconProps) => {
    const { icon } = props;

    return (
        <img src={icon} className={iconStyle.link} />
    )
}
