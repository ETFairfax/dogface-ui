import React from 'react'
import { useParams } from 'react-router-dom'
// import { useSelector } from 'store/hooks/useSelector'

const Detail: React.FC = () => {
    let { group } = useParams()

    return <div>{group}</div>
}

export default Detail
