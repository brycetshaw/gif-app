const baseUrl = 'https://knowhow-react-challenge.prod.with-datafire.io/gif/';
const transformResponse = (e) => {
    const target = e.images.original;
    return {
        src: target.url,
        width: parseInt(target.width),
        height: parseInt(target.height),
        ...target,
        key: e.id,
        title: e.title,
        username:e.username
    }
}

export const fetchGifs = async (searchParams) => {

    const targetUrl = (query) => `${baseUrl}search?q=${query}`
    const parsedResponse = (async () => {
        const response = await fetch(targetUrl(searchParams))
        const json = await response.json();
        return json;
    })()
        .then(res => {
            console.log(res)
            return res.data.map(transformResponse)})
    return parsedResponse
}

