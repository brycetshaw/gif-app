import React, {useState, useEffect} from 'react'
import { Form, Button} from "react-bootstrap";
import {fetchGifs} from "../lib/gifSearch";

const useSearchGifs = () => {
    const [searchParams, setSearchParams] = useState('pedro')
    const [gifsArray, setGifsArray] = useState([])

    useEffect(() => {

        if(searchParams.trim() === '') {
            return
        }

        fetchGifs(searchParams)
            .then(res => {
                console.log(res)
                return res
                }
            )
            .then(res => setGifsArray(res))
            .catch(err => console.log(err));

    }, [searchParams,])

    const SearchGifs = () => {
        const [formText, setFormText] = useState('')

        const handleSubmit = (e) => {
            e.preventDefault();
            setSearchParams(formText)
        }

        const handleChange = (e) => {
            const val = e.target.value;
            setFormText(val);
        }
        return (
            <Form onSubmit={handleSubmit} inline>
                <>
                    <Form.Control type='text' placeholder="Search" onChange={handleChange}/>
                    <Button variant='primary' type='submit'>Search</Button>
                </>
            </Form>
        );
    }
    return {gifsArray, SearchGifs};
}

export default useSearchGifs;

