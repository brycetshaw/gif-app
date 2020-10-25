import React, { useEffect } from 'react';
import SearchGifs from '../components/useSearchGifs';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/ModalHeader';

import GifArea from '../components/gifArea';
import { useSelector } from 'react-redux';
import { AuthButton } from '../components/useAuth';

const Home = () => {
    const gifsArray = useSelector((state) => state.results);

    return (
        <>
            <ModalHeader>
                <AuthButton />
                <SearchGifs />
                <Link to="/saved">
                    <Button type="button" className="btn btn-outline-light ">
                        Saved
                    </Button>
                </Link>
            </ModalHeader>
            <GifArea gifs={gifsArray} />
        </>
    );
};

export default Home;
