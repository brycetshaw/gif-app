import Gallery from 'react-photo-gallery';
import React, { useCallback } from 'react';

import GifItem from './gifItem';

const GifArea = ({ gifs }) => {
    const imageRenderer = useCallback(
        ({ index, left, top, key, photo, isSelected }) => (
            <GifItem
                selected={isSelected}
                key={key}
                margin={'2px'}
                index={index}
                photo={photo}
                left={left}
                top={top}
            />
        ),
        []
    );

    return (
        <div>
            <Gallery photos={gifs} renderImage={imageRenderer} />
        </div>
    );
};
export default GifArea;
