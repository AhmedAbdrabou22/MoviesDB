import React from 'react'
import MovieCard from "./MovieCard"
import Pagination from './Pagination'
const ListMovie = ({listDataMovie , fetchData}) => {
    return (
        <div>
            <div className='row mt-5 py-4'>
                {
                    listDataMovie.length >=1 ? (
                        listDataMovie.map((item)=>{
                            return(
                                <MovieCard key={item.id} dataDetails={item}/>
                            )
                        })
                    ):(<h1>لايوجد بيانات</h1>)
                }
                <Pagination fetchData={fetchData}/>
            </div>
        </div>
    )
}

export default ListMovie
