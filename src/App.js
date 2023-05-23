import Container from 'react-bootstrap/esm/Container';
import NavBar from './components/navBar'
import ListMovie from './components/listmovie'
import axios from 'axios'
import  { useEffect, useState } from 'react';
import DetailsFilm from './components/DetailsFilm'
import { BrowserRouter , Routes , Route }  from 'react-router-dom';

function App() {
  const [dataMovie, setDataMovie] = useState([]);

  let fetchData = async (pageNum) => {
    let resultsData = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=aa5ed79e8f6f2bf32f15742168ab68ba&language=ar&page=${pageNum}`)
    setDataMovie(resultsData.data.results)
  }

  const searchByquery = async (query) => {
    if (query === "") {
      fetchData()
    } else {
      // setDataMovie(dataMovie)
      let searchFilterData = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=aa5ed79e8f6f2bf32f15742168ab68ba&query=${query}&language=ar&page=1`)
      setDataMovie(searchFilterData.data.results)
    }
  }

  useEffect(() => { fetchData() }, [])

  return (
    <div className="App">

      <NavBar searchByquery={searchByquery} />

      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ListMovie listDataMovie={dataMovie} fetchData={fetchData} />}/>
            <Route path="/movie" element={<DetailsFilm />}/>
          </Routes>
        </BrowserRouter>
            {/* <ListMovie listDataMovie={dataMovie} fetchData={fetchData} />
            <DetailsFilm /> */}
      </Container>


    </div>
  );
}

export default App;
