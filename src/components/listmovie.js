import React, { useEffect, useState } from 'react'
import MovieCard from "./MovieCard"
import Pagination from './Pagination'
import { useDispatch, useSelector } from 'react-redux';
import {getallMovieReudce} from '../redux/Actions/actionToReducer';
const ListMovie = ({ fetchData }) => {

    
    const [dataMovie, setDataMovie] = useState([]);


    let dispatch = useDispatch();
    useEffect(() => {
        dispatch((getallMovieReudce()))
    }, [])

    const data = useSelector((state) => state.movie)

    useEffect(() => {
        setDataMovie(data);
    }, [data])

    return (
        <div>
            <div className='row mt-5 py-4'>
                {
                    dataMovie ? (
                        dataMovie.map((item) => {
                            return (
                                <MovieCard key={item.id} dataDetails={item} />
                            )
                        })
                    ) : (<h1>لايوجد بيانات</h1>)
                }
                <Pagination fetchData={fetchData} />
            </div>
        </div>
    )
}

export default ListMovie
