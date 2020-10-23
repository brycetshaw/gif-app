import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSavedAction, removeSavedAction } from '../reducers/rootReducer';
import { Figure } from 'react-bootstrap';
import Checkmark from './checkmark';

const imgStyle = {
    transition:
        'transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s',
};
const selectedImgStyle = {
    transform: 'translateZ(0px) scale3d(0.9, 0.9, 1)',
    transition:
        'transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s',
};
const cont = {
    backgroundColor: '#eee',
    cursor: 'pointer',
    overflow: 'hidden',
    position: 'relative',
};

const GifItem = ({ index, photo, margin, direction, top, left }) => {
    const saved = useSelector((state) => state.saved);
    const [isSelected, setIsSelected] = useState(
        saved.some((val) => val.key === photo.key)
    );
    const dispatch = useDispatch();

    const addSaved = (photo) => dispatch(addSavedAction(photo));
    const removeSaved = (photo) => dispatch(removeSavedAction(photo));

    //calculate x,y scale
    const sx = (100 - (30 / photo.width) * 100) / 100;
    const sy = (100 - (30 / photo.height) * 100) / 100;
    selectedImgStyle.transform = `translateZ(0px) scale3d(${sx}, ${sy}, 1)`;

    if (direction === 'column') {
        cont.position = 'absolute';
        cont.left = left;
        cont.top = top;
    }

    const handleOnClick = (e) => {
        setIsSelected(!isSelected);
        if (!isSelected) {
            addSaved(photo);
        } else {
            removeSaved(photo);
        }
    };

    return (
        <div
            data-cy={`gif-item-${index}`}
            style={{
                margin,
                width: photo.width,
                ...cont,
                backgroundColor: 'white',
            }}
            className={!isSelected ? 'not-selected' : 'selected'}
        >
            <Checkmark selected={isSelected} />
            <Figure>
                <Figure.Image
                    style={
                        isSelected
                            ? { ...imgStyle, ...selectedImgStyle }
                            : { ...imgStyle }
                    }
                    width={photo.width}
                    height={photo.height}
                    alt={photo.title}
                    src={photo.src}
                    onClick={handleOnClick}
                />
                <Figure.Caption>
                    <em>
                        {` ${photo.title}`}{' '}
                        <strong>
                            {photo.username ? ` (${photo.username})` : ''}
                        </strong>
                    </em>
                </Figure.Caption>
            </Figure>
            <style>{`.not-selected:hover{outline:2px solid #06befa}`}</style>
        </div>
    );
};

export default GifItem;
