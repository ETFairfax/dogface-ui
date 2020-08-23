import React from 'react'
import { useSelector } from 'store/hooks/useSelector'

const Detail: React.FC = () => {
    const { breedGroups } = useSelector(({ breedGroups }) => breedGroups)

    return <div>Foo </div>
}

export default Detail
