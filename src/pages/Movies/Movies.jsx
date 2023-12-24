import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import { SearchBar } from "components/SearchBar/SearchBar";
import { getSearchMovies } from "services/api";
import MovieList from "components/MovieList/MovieList";

const Movies = () => {
    const [data, setData] = useState([])

    const [page] = useState(1)

    const [searchParams, setSearchParams] = useSearchParams()

    const handlerSubmit = (value) => {
        setSearchParams({ query: value })
    }

    useEffect(() => {
        const query = searchParams.get('query') || ''

        if(!query) return
        getSearchMovies (query, page)
        .then(({ results}) => {
            setData(results)
        })
        .catch(error => console.log(`fetchTrendigMovies:${error}`));
    }, [searchParams, page])
    
    return (
    <>
    <SearchBar onSubmit={handlerSubmit}/>
    {data.length > 0 && <MovieList movies={data} />}
    </>
    )
}

export default Movies


