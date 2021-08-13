import React from 'react'

export const DownloadPage = (setFlag) => {

    return (
        <div className="App-header">
        <h1 class="title">Video Presentation</h1>

        <iframe 
             width="853" 
             height="505" 
             src="https://www.youtube.com/embed/k1f0A-v6q3o" 
             title="YouTube video player" 
             frameborder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
             allowfullscreen>

             </iframe>

            <a href="https://docs.google.com/document/d/1f4OOFVQLsdlTFezGkjTG39a2PkEC4vcAJbJFRv8iR1o/edit?usp=sharing">Final Report</a>
        </div>
    )
}
