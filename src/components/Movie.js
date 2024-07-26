const Movie = (props) => {
  return (
    <div className='movie'>
        <img src={props.img} alt="" />
        <p>{props.title}</p>
        <p>Year: {props.year}</p>
        <p>imdbID: {props.imd}</p>
    </div>
  )
}

export default Movie
