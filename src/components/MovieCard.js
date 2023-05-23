import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'


const MovieCard = ({ dataDetails }) => {
    let urlImage = 'https://image.tmdb.org/t/p/w500/'
    return (
        <div className='col-lg-3 col-md-6 col-sm-12'>
            <Link to={`/movie/${dataDetails.id}`}>
                <Card className='cardFilm'>
                    <Card.Img variant="top" src={`${urlImage}${dataDetails.poster_path}`} />
                    <div className='overlay text-center p-2 text-light'>
                        <div className='info'>
                            <p>اسم الفيلم : {dataDetails.original_title}</p>
                            <p>تقييم الفيلم:{dataDetails.vote_count}</p>
                            <p>متوسط تقييم الفيلم:{dataDetails.vote_average}</p>
                            <p>تاريخ اصدار الفيلم:{dataDetails.release_date}</p>
                        </div>
                    </div>
                </Card>
            </Link>
        </div>
    )
}

export default MovieCard
