import { ICONS } from "@/constants/icons";
import { IconProps } from "./type";

export const Icon = (props: IconProps) => {
    const { name } = props;

    return (
        <img src={ICONS[name]} alt={name} />
    )
}
