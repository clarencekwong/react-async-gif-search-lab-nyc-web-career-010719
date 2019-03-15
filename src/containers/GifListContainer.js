import React from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
  state = {
    gifs: []
  }

  componentDidMount() {
    this.fetchGifs()
  }

  fetchGifs = (search="dog") => {
    let url = `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`
    fetch(url)
    .then(res => res.json())
    .then(({data}) => {
      this.setState({gifs: data})
    })
  }

  render() {
    return (
      <div>
        <GifList gifs={this.state.gifs}/>
        <GifSearch fetchGifs={this.fetchGifs}/>
      </div>
    )
  }
}
