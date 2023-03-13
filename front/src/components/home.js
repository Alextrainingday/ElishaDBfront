import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Shop from './shop';
import { responsive, shopData } from './shopData';


export default function home() {

    const shop = shopData.map(item => (
        <Shop
            key={item.id}
            name={item.name}
            url={item.imageurl}
            address={item.address}
            openTime={item.open_time}
            closeTime={item.close_time}
            size={item.size}
            class={item.class}
            rating={item.rating}
            site={item.site} />
    ));


    return (
        <div>
            <header>
                <h3>The essence of this website is to highlight shops within the Petrogradskiy island, their locations and analyse their market advantages based on their location</h3>
            </header>
            <div className='home-container'>
                <Carousel responsive={responsive}>
                    {shop}
                </Carousel>

            </div>
        </div>
    )
}