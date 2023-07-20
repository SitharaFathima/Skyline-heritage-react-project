import React, { useState } from 'react';

// package
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// icons
import { MdKeyboardArrowRight } from 'react-icons/md';
import { MdKeyboardArrowLeft } from 'react-icons/md';

function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
        <One
        onClick={onClick}>
            <MdKeyboardArrowLeft />
        </One>   
    );
}
 
function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <Two 
        onClick={onClick}>
            <MdKeyboardArrowRight />
        </Two>
    );
  }

// mapping
const pro = [
    { 
        id: 1,
        img: require('../../assets/images/home21.jpeg'),
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing prediet.",
        des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam consequuntur iusto, cum modi amet consectetur adipisicing elit consectetur adipisicing elit cum modi amet consectetur adipisicing elit consectetur elit.",
        date: "10 JULY 2023",
    },
    { 
        id: 2, 
        img: require('../../assets/images/home22.jpeg'),
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing prediet.",
        des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam consequuntur iusto, cum modi amet consectetur adipisicing elit consectetur adipisicing elit cum modi amet consectetur adipisicing elit consectetur elit .",
        date: "20 AUGUST 2023",
    },
    { 
        id: 3,
        img: require('../../assets/images/home21.jpeg') ,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing prediet.",
        des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam consequuntur iusto, cum modi amet consectetur adipisicing elit consectetur adipisicing elit cum modi amet consectetur adipisicing elit consectetur elit.",
        date: "10 JULY 2023",
    },
    { 
        id: 4, 
        img: require('../../assets/images/home22.jpeg') ,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing prediet.",
        des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam consequuntur iusto, cum modi amet consectetur adipisicing elit consectetur adipisicing elit cum modi amet consectetur adipisicing elit consectetur elit.",
        date: "20 AUGUST 2023",
    },
    { 
        id: 5, 
        img: require('../../assets/images/home22.jpeg') ,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing prediet.",
        des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam consequuntur iusto, cum modi amet consectetur adipisicing elit consectetur adipisicing elit cum modi amet consectetur adipisicing elit consectetur elit.",
        date: "20 AUGUST 2023",
    },
    { 
        id: 6,
        img: require('../../assets/images/home21.jpeg') ,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing prediet.",
        des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam consequuntur iusto, cum modi amet consectetur adipisicing elit consectetur adipisicing elit cum modi amet consectetur adipisicing elit consectetur elit.",
        date: "10 JULY 2023",
    },
]

function Slideres () {

    const settings = {
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        dots: false,
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 2.2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    
    

    return (
        <>
            <Containeres>
                <Slider {...settings}>
                    {pro.map((item) => (
                    <Content>
                        <Item >
                            <Left>
                                <Container>
                                    <Hand src={item.img} />
                                </Container>
                            </Left>
                            <Right>
                                <Lorem>{item.title}</Lorem>
                                <Paragraph>{item.des}</Paragraph>
                                <WhoTwo>
                                    <Read>{item.date}</Read>
                                    <Line />
                                    <Read>Read more</Read>
                                </WhoTwo>
                            </Right>
                        </Item>
                    </Content>
                    ))}
                </Slider>
                <Slides>
                    <Arrowimg>
                    </Arrowimg>
		        </Slides>
            </Containeres>
        </>
    )
}
const Containeres = styled.section`
    padding: 0px 207px 40px;
`;
const Content = styled.div`
    display: flex;
    width: 100%;
`;
const Item = styled.div`
    display: flex;
    justify-content: space-between;
    width: 98%;
    margin-right: 5px;
    border: 1px solid  #747474;
    padding: 25px 25px 25px;
`;
const Left = styled.div`
    width: 32%;
`;
const Container = styled.div``;
const Hand = styled.img`
    display: block;
    width: 100%;
`;
const Right = styled.div`
    width: 62%;
`;
const Lorem = styled.h3`
    color: #33CC66;
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 10px;
`;
const Paragraph = styled.p`
    font-size: 10px;
    margin-bottom: 20px;
`;
const WhoTwo = styled.div`
    display: flex;
    align-items: center;
`;
const Line = styled.hr`
    border: 1px solid #747474;
    width: 40%;
    margin: 0 10px;
`;
const Read = styled.h3`
    color: #747474;
    font-size: 10px;
`;
const Slides = styled.div``;
const Arrowimg = styled.div`
    position : relative;
`;
const One = styled.button`
    cursor: pointer;
    border: 1px solid #747474;
    border-radius:50px;
    padding:1px 3px;
    position: absolute;
    background-color: #fff;
    display: inline-block;
    color: #9e9696;
    z-index:100;
    font-size: 20px;
    top: 80px;
    left: -18px;
    @media all and (max-width: 480px){
        font-size: 20px;
    }
    @media all and (max-width: 360px){
        right: 51px;
    }
    @media all and (max-width: 1280px){
        right: 38px;
    } 
    @media all and (max-width: 480px){
        right: 55px;
    } 
`;
const Two = styled.button`
    cursor: pointer;
    position: absolute;
    border: 1px solid #747474;
    border-radius:50px;
    padding:1px 3px;
    background-color: #fff;
    z-index:100;
    top: 80px;
    left: 1068px;
    display: inline-block;
    color: #9e9696;
    font-size: 20px;
    @media all and (max-width: 1380px){
        left: 803px;
    }
    @media all and (max-width: 1280px){
        left: 700px;
    }
    @media all and (max-width: 1080px){
        left: 645px;
    }
    @media all and (max-width: 980px){
        left: 443px;
    }
    @media all and (max-width: 768px){
        left: 347px;
    }
    @media all and (max-width: 640px){
        left: 345px;
    }
    @media all and (max-width: 480px){
        left: 220px;
        font-size: 20px;
    } 
    @media all and (max-width: 360px){
        left: 179px;
    }  
`;
export default Slideres;