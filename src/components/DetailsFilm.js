import React, { useEffect, useState } from 'react'
import axios  from 'axios';
import { useParams  , Link } from 'react-router-dom'
import {Row} from 'react-bootstrap'
// import axios from 'axios'

const DetailsFilm = () => {
    const params = useParams();// can access the paramters in url (Return Object)
    // console.log(params.id);

    const [dataId , setDataId] = useState([])

    const fetchFilmbyId = async()=>{

        const detailFilmById = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=aa5ed79e8f6f2bf32f15742168ab68ba&language=ar`);
        // console.log(detailFilmById.data);
        setDataId(detailFilmById.data)
        // console.log(detailFilmById.data);
        // console.log(dataId);
    }

    useEffect(()=>{
        fetchFilmbyId()
    })

    return (
        <div className='mt-5 py-4 container'>
            <div className='row justify-content-between align-items-center'>
                <div className='col-lg-3 col-sm-12 col-md-12 rightSide'>
                    <img src={`https://image.tmdb.org/t/p/w500/`+ dataId.poster_path} alt="No" className="w-100"/>
                </div>

                <div className='col-lg-8 col-md-12 col-sm-12 leftSide text-center'>
                    <div>
                        <h3> اسم الفيلم :{dataId.title}</h3>
                        <hr/>
                        <h3>تاريخ الفيلم : {dataId.release_date}</h3>
                        <hr/>
                        <h3>عد المقيمين : {dataId.vote_count}</h3>
                        <hr/>
                        <h3>متوسط التقييم : {dataId.vote_average}</h3>
                        <hr/>
                        <h3>اسم الفيلم بالانجليزيه: {dataId.original_title}</h3>
                        <hr/>
                        <h3>حالة الفيلم : {dataId.status}</h3>
                    </div>
                </div>
            </div>
            <Row className='mt-3 story'>
                <div>
                    <h3>
                        القصه : <span className='fs-5'>{dataId.overview}</span>
                    </h3>
                </div>
            </Row>
            <div className='m-auto text-center mt-3 btns'>
                <Link to="/">
                    <button className='btn btn-dark mx-2'> الصفحه الرئيسيه</button>
                </Link>
                <a href={dataId.homepage}>
                    <button className='btn btn-dark mx-2'>مشاهدة الفيلم</button>
                </a>
            </div>
        </div>
    )
}

export default DetailsFilm
