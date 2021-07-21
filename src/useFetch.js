import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () => {
        fetch(url)
            .then( (response) => {
                if(response.ok !== true) {
                    throw Error('The resource could not be loaded');
                }
                return response.json();
            })
            .then( (data) => {
                setIsPending(false);
                setData(data);
            })
            .catch( (err) => {
                setError(err.message);
                setIsPending(false);
            });
    }, [url]);

    return { data, isPending, error };
}

export default useFetch;