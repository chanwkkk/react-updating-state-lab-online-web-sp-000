// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component{

  constructor(){
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
}

  }

  handleBitrate = () =>{
    this.setState({
      settings: Object.assign({},this.state.settings, {bitrate: 12}))
    })
  }

  handleResolution = () =>{

  }


    render(){
        return(
        <div>
           <button className = "bitrate" onClick = {this.handleBitrate}>Bitrate</button>
           <button className = "resolution" onClick = {this.handleResolution}>Bitrate</button>
       </div>
        )
    }

}
