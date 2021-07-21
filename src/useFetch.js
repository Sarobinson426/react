import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () => {
        // Make abort controller 
        const abort = new AbortController();

        setTimeout( () => {
            fetch(url, { signal: abort.signal })
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
                if(err.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    setError(err.message);
                    setIsPending(false);
                }
            });
        }, 1250);

        return () => abort.abort();
    }, [url]);

    return { data, isPending, error };
}

export default useFetch;