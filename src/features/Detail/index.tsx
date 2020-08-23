import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchBreedImagesThunk } from 'store/breeds/thunks'

const Detail: React.FC = () => {
    let { group } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchBreedImagesThunk(group))
    })

    return <div>{group}</div>
}

export default Detail
