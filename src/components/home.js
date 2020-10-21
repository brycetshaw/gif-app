import React, {useCallback, useContext} from "react";
import useSearchGifs from "../hooks/useSearchGifs";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";
import Gallery from "react-photo-gallery";
import SelectedImage from "./SelectedImage";

const Home = () => {
    const selection = useContext(Selection)

    const baseUrl = 'https://knowhow-react-challenge.prod.with-datafire.io/gif/'

    const {gifsArray, isLoading, SearchGifs} = useSearchGifs(baseUrl);

    const imageRenderer = useCallback(
        ({index, left, top, key, photo}) => (
            <SelectedImage
                selected={false}
                key={key}
                margin={"2px"}
                index={index}
                photo={photo}
                left={left}
                top={top}
            />
        ),
        []
    );

    return (
        <>
            <ModalHeader>
                <SearchGifs/>
                <Link to="/saved">
                    <Button type='button' className='btn btn-outline-light '>Saved</Button>
                </Link>
            </ModalHeader>
            <div>
                <Gallery photos={gifsArray.map(e => {
                        const target = e.images.original;
                        return {
                            src: target.url,
                            ...target,
                            key: e.id,
                            title: e.title,
                        }
                    }
                )} renderImage={imageRenderer}
                />
            </div>
        </>
    );
}

export default Home;
