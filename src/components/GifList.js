import React from 'react'

const GifList = props => {

  return (
    <React.Fragment>
      {console.log(props.gifs)}
      {props.gifs.map(gif => <img key={gif.id} src={gif.images.original.url} alt="cool gifs"/>)}
    </React.Fragment>)

}

export default GifList
