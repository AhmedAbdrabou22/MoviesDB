import Container from 'react-bootstrap/esm/Container';
import NavBar from './components/navBar'
import ListMovie from './components/listmovie'
import axios from 'axios'
import  { useEffect, useState } from 'react';
import DetailsFilm from './components/DetailsFilm'
import { BrowserRouter , Routes , Route }  from 'react-router-dom';

import {useDispatch, useSelector} from 'react-redux'

import getallMovieReudce from "./redux/Actions/actionToReducer"

function App() {
  return (
    <div className="App">

      <NavBar />

      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ListMovie/>}/>
            <Route path="/movie/:id" element={<DetailsFilm />}/>
          </Routes>
        </BrowserRouter>
            {/* <ListMovie listDataMovie={dataMovie} fetchData={fetchData} />
            <DetailsFilm /> */}
      </Container>


    </div>
  );
}

export default App;
