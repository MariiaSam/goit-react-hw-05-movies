import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getSearchMovies } from "services/api";
import MovieList from "components/MovieList/MovieList";

import { SearchBar } from "components/SearchBar/SearchBar";

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
        .then(({ results }) => {
            setData(results)
        })
        .catch(error => console.log(`getSearchMovies:${error}`));
    }, [searchParams, page])
    
    return (
    <>
    <SearchBar onSubmit={handlerSubmit}/>
    {data.length > 0 && <MovieList movies={data} />}
    </>
    )
}

export default Movies


