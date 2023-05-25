const getAllMovies = (state = {movie : [] , pageCount: 0} , action)=>{

    switch(action.type){
        case "getAllMovies":
            return{movie :action.data  , pageCount:action.page}
        default:
            return{state}
    }

}


export default getAllMovies;