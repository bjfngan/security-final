import React from 'react'

export const DownloadPage = (setFlag) => {

    return (
        <div className="App-header">
            <h1>DownloadPage</h1>
            <a download="test.txt" href="https://drive.google.com/file/d/1HuOFv4GxaCmyzb8yFjS06HXTejzuJmI9/view?usp=sharing">Test File</a>
        </div>
    )
}
