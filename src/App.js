import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Movie from './components/Movie';
import movies from './movie.json';
// import React, {useState} from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
        {
          movies.map((element, index) => {
            return (
              <Movie
                key = {index}
                imd={element.imdbID}
                title={element.Title}
                year={element.Year}
                img={element.Poster}
              />
            );
          })
        }
      </div>
      <Footer />
    </div>
      
  );
}

export default App;

// function App() {
//   const[num, setNum] = useState(1);

//   function inc(n) {
//     setNum(num+ n);
//   }
//   function dec(n) {
//     setNum(num - n);
//   }
//   function mul(n) {
//     setNum(num * n);
//   }
//   function res (n) {
//     setNum (0);
//   }



//   return(
//     <div className="App">
//       <Header />
//       <div className='main'>
//         <h1 className='heading'>{num}</h1>
//         <div className='buttons'>
//         <button className='btn' onClick={() => inc(1)}>incerment</button>
//         <button className='btn'onClick={() => dec(1)}>decrement</button>
//         <button className='btn'onClick={() => mul(2)}>multiplication</button>
//         <button className='btn'onClick={() => res(0)}>reset</button>
//         </div>
//       </div>
//     </div>
//   )
// }


// export default App;

