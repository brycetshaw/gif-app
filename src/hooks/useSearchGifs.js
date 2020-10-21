import React, {useState, useEffect} from 'react'
import { Form, Button} from "react-bootstrap";


const useSearchGifs = (baseUrl) => {
    const [searchParams, setSearchParams] = useState('pedro')
    const [gifsArray, setGifsArray] = useState([])
    const [isLoading, setLoading] = useState(false)


    useEffect(() => {
        (async () => {
            if(searchParams.length > 0) {
                setLoading(true)

                const targetUrl = (query) => `${baseUrl}search?q=${query}`
                const response = await fetch(targetUrl(searchParams));
                const data = await response.json()
                console.log(data);
                setGifsArray(data.data)
                setLoading(false)
            }
        })()

    }, [searchParams, baseUrl])


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

    return {gifsArray, isLoading, SearchGifs};
}

export default useSearchGifs;

