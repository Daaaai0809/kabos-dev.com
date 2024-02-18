import { mdBlockStyles } from "./index.css";
import { useMDBlock } from "./useMDBlock";

export const MDBlock = ({ markdown }: { markdown: string }) => {
    const { MDBlockJSX } = useMDBlock(markdown);

    return (
        <div className={mdBlockStyles.div}>
            {MDBlockJSX}
        </div>
    );
}
