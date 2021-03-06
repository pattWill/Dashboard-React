
import '../assets/css/app.css';
import TopBar from './TopBar';
import Footer from './Footer';
import ContentRowTop from './ContentRowTop';
import LastMovieInDB from './LastMovieInDB'
import GenresInDb from './GenresInDb'
import SlideBar from './SlideBar';
import React from "react";
function App() {
  return (

    <div id ='wrapper'> 
    <SlideBar />  
		<div id="content-wrapper" className="d-flex flex-column">
			<div id="content">
           
      <TopBar />
      <ContentRowTop />
      <LastMovieInDB />
      <GenresInDb />
      <Footer />
    </div>
    </div>
    </div>
  );
}

export default App;
