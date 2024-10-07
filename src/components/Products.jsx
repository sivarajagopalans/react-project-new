import React from 'react'
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react'

export const Products = () => {
  const [products, setProducts] = useState({
    data: [],
    limit: 10,
    activePage: 1
  });
  const apiFetch = async () => {
    const url = 'http://api.postiefs.com/api/products/view/all';
    const response = await fetch(url);
    const data = await response.json();
    setProducts((prev) => ({ ...prev, data: data.data.data }));
    console.log(data);

  }
  console.log(products);

  useEffect(() => {
    apiFetch();
  }, []);


  // const handlePageChange = async (pageNumber) => {
  //   setProducts((prev) => ({ ...prev, activePage: pageNumber }));
  //   let url = `http://api.postiefs.com/api/products/view/all?page=${pageNumber}`
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   setProducts((prev) => ({
  //     ...prev,
  //     data: data.data.data
  //   }));
  // }


return (
  <div>
    <Table className='table' bordered border={1} >
      <thead className='text-center'>
        <tr>
          <th>Id</th>
          <th className='text-center'>Title</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody className='text-center'>
        {products.data.map((product) => {
          return (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.description}</td>
            </tr>
          )
        })
        }
      </tbody>

    </Table>

    <div>
        <button onClick={()=>handlePageChange()}>pre</button>
        <button onClick={()=>handlePageChange()}>Next</button>
      </div>
  </div>
)
}