// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component{

  handleBitrate = () =>{

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
