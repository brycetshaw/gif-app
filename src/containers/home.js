import React from "react";
import useSearchGifs from "../components/useSearchGifs";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";

import GifArea from "../components/gifArea";

const Home = () => {
    const {gifsArray, SearchGifs} = useSearchGifs();

    return (
        <>
            <ModalHeader>
                <SearchGifs/>
                <Link to="/saved">
                    <Button type='button' className='btn btn-outline-light '>Saved</Button>
                </Link>
            </ModalHeader>
            <GifArea gifs={gifsArray}/>
        </>
    );
}

export default Home;
