import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ShortenUrlPage = () => {
    const {url} = useParams()
    useEffect(() => {
        if(url){
            window.location.href = `http://localhost:8080/${url}`
        }
    }, [url])
  return null
}

export default ShortenUrlPage