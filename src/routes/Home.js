import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

// Component (상속)
class Home extends React.Component{
  // isLoading state는 컴포넌트가 마운트되면 true값이여야 한다. 
  state = {
    isLoading:true,
    movie: [],
  };

  //axios는 네트워크를 사용하므로 느리게 동작한다. 
  // 그래서 axios.get()을 이용해서 함수가 실행이 끝날 때까지 시간이 걸릴 수 있다고 해야한다. 
  //자바스크립트에게 getMovies() 함수는 시간이 필요하다. 이때, 2가지 키워드가 async, await이다.
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    //console.log(movies);
    this.setState({ movies, isLoading: false });
  }

  
  componentDidMount() {
    this.getMovies();
     
  }

  render() {
    // 문장 혹은 아이콘표시를 하기위해
    const { isLoading, movies } = this.state;
    return <section className="conteiner">{isLoading ? ( <div className="loader"><span className="laoder_text">'Loading...'</span></div> ): ( <div className="movies"> {movies.map((movie) => {
      //console.log(movie); 
      return <Movie 
        key = {movie.id}
        id={movie.id}
        year = {movie.year}
        title = {movie.title}
        summary = {movie.summary}
        poster = {movie.medium_cover_image}
        genres = {movie.genres}
      />;
    })}</div>
    )}</section>;
  }
}

export default Home;
