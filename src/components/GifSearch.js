import React from 'react'

export default class GifSearch extends React.Component {
  state = {
    search: ''
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.fetchGifs(this.state.search)
    this.setState({search:''})
  }

  searchForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="search-form">Search</label>
        <input type="text" value={this.state.search} onChange={(e) => this.setState({search: e.target.value})}/>
      </form>
    )
  }

  render() {
    return (
      <React.Fragment>
        {this.searchForm()}
      </React.Fragment>
    )
  }
}
