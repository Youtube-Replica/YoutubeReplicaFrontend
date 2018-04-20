import React, { Component } from 'react'
import { map, pathOr, propEq, filter } from 'ramda'

class Videos extends Component {
  render() {
    const video = (video) => {
      return (
        <div key={video.id} className="ba br3 pa4 mv2 bg-light-gray b--red">
          <a href={video.link} target="_blank">
            <img className="w-100" src={pathOr(
            'https://placeholdit.imgix.net/~text?txtsize=28&txt=300%C3%97300&w=300&h=300',
            ['thumbnails', 'high', 'url'], video)} alt={video.title} />
          </a>
          <h3 className="f5">{video.title}</h3>
          <div className="cf">
            <a
              className="fr pa2 ba br2 bg-midnight-blue no-underline"
              target="_blank"
              href={video.link}
            >Watch</a>
          </div>
        </div>
      )
    }

    const videosOnly = filter(propEq('kind', 'youtube#video'), this.props.videos)

    return (
      <div>
        {propEq('length', 0, videosOnly) ? <div>No Videos Found...</div> : null}
        {map(video, videosOnly)}
      </div>
    )
  }
}



export default Videos
