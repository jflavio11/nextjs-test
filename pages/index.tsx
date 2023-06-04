import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'

const HomePage = () => {

  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    window
    .fetch('api/avo')
    .then(response => response.json())
    .then(({data, length}) => {
      console.log(data)
      setProductList(data)
    })
  }, [])

  return (
    <div>
      <div>Hello Next.js!</div>
      {productList.map( (product) => {
        return <div>{product.name}</div>
      })}
    </div>
  )
}

export default HomePage
