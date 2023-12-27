import { Button } from '@/components/ui/button/button';
import { Icon } from '@/components/ui/icon/icon';
import { ICON_NAMES } from '@/constants/icons';
import { buttonStyle } from '@/components/templates/buttons/style.css';

export const LightButton = () => {
    return (
        <Button className={buttonStyle}>
            <Icon name={ICON_NAMES.LIGHT} />
        </Button>
    )
}
