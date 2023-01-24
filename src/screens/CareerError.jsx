import React from 'react'
import { useRouteError } from 'react-router-dom'

const CareerError = () => {

    const error = useRouteError()
  return (
    <div>{error.message}</div>
  )
}

export default CareerError