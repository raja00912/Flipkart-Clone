import React, { useEffect } from 'react'
import axios from "axios";

function Products() {

    const getData = async () => {
        const products = {
            title: "Roadter Shirt",
            description: "Men's Shirt",
            image: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Faf%2F5b%2Faf5bc2554eac0ea2a3649dc9b730751614636733.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
            price: 799,
            category: "Shirt"
        }
        try {
            let res = await axios.post(`https://flipkart-clone-rho.vercel.app/products`, {
                products
            })
            console.log(res);
        }
        catch (err) {
            console.log(err);
        }

    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div>products</div>
    )
}

export default Products