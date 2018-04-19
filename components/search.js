import React, { Component } from 'react'

class Search extends Component {
  constructor() {
    super()
    this.state = {
      searchText: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (e) {
    this.setState({searchText: e.target.value})
  }
  handleSubmit (e) {
    e.preventDefault()
    this.props.search(this.state.searchText)
    this.setState({searchText: ''})
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset className="b--white pa0">
          <label className="db mb2">Search YouTube</label>
          <input
            value={this.state.searchText}
            onChange={this.handleChange}
            className="pa2 w-100" type="text" placeholder="type title to search..." />
        </fieldset>
        <div className="cf">
          <button className="ba br2 white pa2 bg-blue mt2 w-100">Search</button>
        </div>
      </form>
    )
  }
}

export default Search
