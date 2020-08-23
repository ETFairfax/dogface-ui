import React from 'react'
import { useParams } from 'react-router-dom'

const Detail: React.FC = () => {
    let { group } = useParams()

    return <div>{group}</div>
}

export default Detail
