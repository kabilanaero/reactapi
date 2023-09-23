import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavigationIcon from '@mui/icons-material/Navigation';
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fab from '@mui/material/Fab';
import './detail.css'

const Detail = () => {



    let { id } = useParams();

    const [product, setProduct] = useState([]);
    console.log(product);

    const getposts = () => {
        fetch(`https://api.spacexdata.com/v3/launches/${id}`)
            .then((response) => response.json())
            .then((json) => setProduct(json))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getposts()
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='dcont'>
            {[product]?.map((pro, index) =>

                <div className='drow' key={index}>
                    <div className='dcol'>
                        <img src={pro.links?.mission_patch}
                            width="100%"
                            height="auto"
                        />
                    </div>

                    <div className='dcol'>
                        <h1 className='dh'>  {pro.mission_name}</h1>
                        <p className='dp'> {pro.details}</p>
                        <div className='rowb'>
                            <div >
                                <Link to={pro.links?.wikipedia}>
                                    <Fab variant="extended">
                                        <NavigationIcon sx={{ mr: 1 }} />
                                        Wikipedia
                                    </Fab>
                                </Link>
                            </div>
                            <div >
                                <Link to={pro.links?.youtube_id}>
                                    <Fab variant="extended">
                                        <NavigationIcon sx={{ mr: 1 }} />
                                        Youtube
                                    </Fab>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
            )}
            <div>
                    <Slider {...settings}>

                        {
                            [product]?.map(pro => pro.links?.flickr_images).flat().map((value, index) => {
                                return (
                                    <div key={index}>
                                        <img className='imgc' src={value} ></img>
                                    </div>
                                )
                            })
                        }

                    </Slider>
                    </div>
        </div>
    )
};
export default Detail;