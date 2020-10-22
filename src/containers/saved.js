import React from "react";
import ModalHeader from "react-bootstrap/ModalHeader";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import GifArea from "../components/gifArea";
import {useSelector} from "react-redux";

const Saved = () => {
    const saved = useSelector(state => state.saved)
    return (
        <>
            <ModalHeader>
                <Link to="/">
                    <Button type='button' className='btn btn-outline-light '>Back</Button>
                </Link>
            </ModalHeader>
            <GifArea gifs={saved}/>
        </>
    )
}

export default Saved;
