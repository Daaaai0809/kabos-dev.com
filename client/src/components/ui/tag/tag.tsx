import React from 'react';
import { tagStyle } from './tag.css';

export const Tag = ({ tagName }: { tagName: string }) => {
    return (
        <div>
            <span className={tagStyle.link}>{tagName}</span>
        </div>
    )
}
