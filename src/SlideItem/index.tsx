import React, { ReactNode } from 'react';

export interface SlideItemProps {
    children: ReactNode,
    type: 'left' | 'right' | 'overlay-left' | 'overlay-right'
}

function SlideItem({children, ...props}: SlideItemProps) {
    return (
        <div style={{ width: '100%', height: '100%' }}>
            {children}
        </div>
    )
}

export default SlideItem;
