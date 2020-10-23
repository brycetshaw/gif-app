import React, {useState, useEffect} from 'react'
import { Form, Button} from "react-bootstrap";
import {fetchGifs} from "../lib/gifSearch";
import {useDispatch, useSelector} from "react-redux";
import {setResultsAction} from "../reducers/rootReducer";

    const SearchGifs = () => {
        const [searchParams, setSearchParams] = useState(useSelector(state => state.searchParams))
        const dispatch = useDispatch();

        const [formText, setFormText] = useState(useSelector(state => state.searchParams))

        useEffect(() => {
            if(searchParams.trim() === '') {
                return
            }
            const setResults = (results) => dispatch(setResultsAction(results));
            fetchGifs(searchParams)
                .then(res => setResults({
                    results:res,
                    searchParams:searchParams
                }))
                .catch(err => console.log(err));
        }, [searchParams, dispatch])



        const handleSubmit = (e) => {
            e.preventDefault();
            setSearchParams(formText)
        }

        const handleChange = (e) => {
            const val = e.target.value;
            setFormText(val);
        }
        return (
            <Form id="search-input" onSubmit={handleSubmit} onKeyDown={(e) => (e.key === "Enter") ? handleSubmit(e) :''} inline>
                <>
                    <Form.Control type='text' placeholder={(formText === '') ? 'Search' : formText} onChange={handleChange}/>
                    <Button variant='primary' type='submit'>Search</Button>
                </>
            </Form>
        );
    }


export default SearchGifs;

