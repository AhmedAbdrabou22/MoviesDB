import axios from "axios"
const getallMovieReudce =()=>{
    return async(dis)=>{
        let resultsData = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=aa5ed79e8f6f2bf32f15742168ab68ba&language=ar`)
        dis({type : "getAllMovies" , data :resultsData.data.results ,  pageCount:resultsData.data.total_pages})
    }
}

const getallMovieReudceSearch =(query)=>{
    return async(dis)=>{
        let resultsData = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=aa5ed79e8f6f2bf32f15742168ab68ba&query=${query}&language=ar`)
        dis({type : "getAllMovies" , data :resultsData.data.results , pageCount:resultsData.data.total_pages})
    }
}

const getallMovieReudceSearchByPage =(page)=>{
    return async(dis)=>{
        let resultsData = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=aa5ed79e8f6f2bf32f15742168ab68ba&language=ar&page=${page}`)
        dis({type : "getAllMovies" , data :resultsData.data.results , pageCount:resultsData.data.total_pages})
    }
}


export  {getallMovieReudce , getallMovieReudceSearch ,getallMovieReudceSearchByPage}
































//we can not use async and await in axios because will show error middleware

//Setub  midlleware in store.js page

//npm i redux-thunk
//import thunk from 'redux-thunk'
//import { applyMiddleware } from "redux";



//to wait response from api we use middleware , thunk and we use high order function to use async and await  , and use dis to go reducer after the data come from api