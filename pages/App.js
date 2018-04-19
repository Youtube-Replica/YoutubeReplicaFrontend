import React, { Component } from 'react'
import 'tachyons/css/tachyons.css'

import fetch from 'isomorphic-fetch'
import Search from '../components/search'
import Videos from '../components/videos'

const url = 'https://youtube-api.now.sh'
const code = 'codeisfun'

class App extends Component {
  constructor() {
    super()
    this.state = {
      videos: []
    }
    this.search = this.search.bind(this)
  }
  search (text) {
    fetch(`${url}/?q=${encodeURI(text)}&code=${code}`)
      .then(res => res.json())
      .then(json => this.setState({videos: json}))

  }
  componentDidMount () {
    const searchText = 'Mercedes Benz'
    this.search(searchText)
  }
  render() {
    return (
      <div className="pa4">
        <h2 className="w-100 bg-dark-red white tc pa4 br2 georgia">Youtube Search</h2>
        <Search search={this.search} />
        <Videos videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
