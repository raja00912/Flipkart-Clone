import React, { useEffect } from 'react'
import axios from "axios";

function Products() {

    // const getData = async () => {
    //     // const products = {
    //     //     title: "Roadter Shirt",
    //     //     description: "Men's Shirt",
    //     //     image: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Faf%2F5b%2Faf5bc2554eac0ea2a3649dc9b730751614636733.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    //     //     price: 799,
    //     //     category: "Shirt"
    //     // }
    //     try {
    //         let res = await axios.get(`https://flipkart-clone-rho.vercel.app/products`)
    //         console.log(res.data);
    //     }
    //     catch (err) {
    //         console.log(err);
    //     }

    // }

    const postdata = async () => {
        const details = {
            title: "Men Graphic Print Round Neck White T-Shirt",
            description: "Men's T-Shirt",
            image1: "https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/x/j/5/xs-bwtrnful-z55-blive-original-imaggvyuc8emdn9g.jpeg?q=70",
            image2: "https://rukminim1.flixcart.com/image/832/832/l3vxbbk0/t-shirt/e/y/x/xs-bwtrnful-z55-blive-original-imagewfuzszh3y5c.jpeg?q=70",
            price: 499,
            category: "T-Shirt"
        }
        try {
            let res = await axios.post(`https://flipkart-clone-rho.vercel.app/products`, {
                details
            })
            console.log(res);
        }
        catch (err) {
            console.log(err);
        }
        // getData();
    }

    useEffect(() => {
        postdata();
    }, [])

    return (
        <div>products</div>
    )
}

export default Products