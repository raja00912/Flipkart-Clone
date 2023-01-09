import React, { useEffect } from 'react'

function Products() {

    const getData = async () => {
        let res = await fetch(`https://flipkart-clone-rho.vercel.app/products`)
        let data = await res.json();
        console.log(data);;
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div>products</div>
    )
}

export default Products