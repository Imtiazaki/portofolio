import React from 'react'


function Download() {
    const downloadCvAtURL = (url) => {
        fetch(url)
            .then((response) => response.blob())
            .then((blob) => {
                const blobURl = window.URL.createObjectURL( new Blob((blob)) )
                const fileName = url.split('/').pop()
                const aTag = document.createElement('a')
                aTag.href = url
                aTag.setAttribute("downloaded", fileName)
                document.body.appendChild(aTag)
                aTag.click()
                aTag.remove()
            })
    }
  return (
    <div>
        
    </div>
  )
}

export default Download
