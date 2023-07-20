import React from 'react';

// package
import styled from 'styled-components';
import { Link } from "react-router-dom";

// icons
import { RiFacebookCircleFill } from 'react-icons/ri';
import { BiLogoYoutube } from 'react-icons/bi';
import { FaWhatsapp } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import { TbMailFilled } from 'react-icons/tb';
import { IoIosArrowUp } from 'react-icons/io';

// images
import FlagImg from "../../assets/images/UAE.svg";
import FlagImge from "../../assets/images/india_v2.svg";



function Footer() { 
    return (
        <>
            <Content>
                <Contents>
                    <Top>
                        <Reach>REACH OUT TO US</Reach>
                        <MainCon>
                            <Item>
                                <Main>
                                    <Above>
                                        <Name>Phone number</Name>
                                        <Div>
                                            <Span>
                                                <Flag src={FlagImg} />
                                            </Span>
                                            <Connect>+919744403333|+91484162222</Connect>
                                        </Div>
                                    </Above>
                                    <Above>
                                        <Div>
                                            <Span>
                                                <Flag src={FlagImge} />
                                            </Span>
                                            <Connect>+919744403333|+91484162222</Connect>
                                        </Div>
                                    </Above>
                                </Main>
                                <Below>
                                    <Name>Email Address</Name>
                                        <Div>
                                            <Span>
                                                <TbMailFilled />
                                            </Span>
                                            <Connect>marketing@skylinebuilders.com</Connect>
                                        </Div>
                                </Below>
                            </Item>
                            <Item>
                                <Main>
                                    <Above>
                                        <Name>Location</Name>
                                        <Div>
                                            <Span>
                                                <MdLocationOn />    
                                            </Span>
                                            <Connect>Skyline House, NH Bypass, Near EMC Kochi-682028</Connect>
                                        </Div>
                                    </Above>
                                </Main>
                                <Below>
                                    <Name>Social Media</Name>
                                    <Div>
                                        <Span>
                                            <RiFacebookCircleFill />
                                        </Span>
                                        <Span>
                                            <AiOutlineInstagram />
                                        </Span>
                                        <Span>
                                            <FaWhatsapp />
                                        </Span>
                                        <Span>
                                            <BiLogoYoutube />
                                        </Span>
                                    </Div>
                                </Below>
                            </Item>
                        </MainCon>
                    </Top>
                    <FBottom>
                        <Left>
                            <Name>Building Blocks of Trust</Name>
                            <Heading>
                                <Links href="home">
                                    <Logo
                                        src={require("../../assets/images/logo.png")}
                                        alt="Logo"
                                    />
                                </Links>
                            </Heading>
                        </Left>
                        <Right>
                            <Award>AWARDS & AFFLIATIONS</Award> 
                            <Lists>
                                <Heading>
                                    <Links href="home">
                                        <Logo
                                            src={require("../../assets/images/da2.png")}
                                            alt="Logo"
                                        />
                                    </Links>
                                </Heading>
                                <Heading>
                                    <Links href="home">
                                        <Logo
                                            src={require("../../assets/images/logo3.png")}
                                            alt="Logo"
                                        />
                                    </Links>
                                </Heading>
                                <Heading>
                                    <Links href="home">
                                        <Logo
                                            src={require("../../assets/images/logo2.png")}
                                            alt="Logo"
                                        />
                                    </Links>
                                </Heading>
                                <Heading>
                                    <Links href="home">
                                        <Logo
                                            src={require("../../assets/images/logo1.png")}
                                            alt="Logo"
                                        />
                                    </Links>
                                </Heading>
                            </Lists>
                        </Right>
                    </FBottom>
                </Contents>
            </Content>
            <Blue>
                <CopyRight>
                    <Sub>Disclaimer | Privacy Policy</Sub>
                    <Sub>Skyline Builders &copy; or &#169; All Rights Reserved | Designed by Accolades Integrated</Sub>
                </CopyRight>
                <Red>
                    <SpanBox>
                        <IoIosArrowUp color="gray" />
                    </SpanBox>
                </Red>
            </Blue>
        </>
    )
}

const Content = styled.section`
    background: #FAF9F6;
    padding: 60px 100px 0px;
`;
const Contents = styled.div`
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    border-bottom:2px solid  #2b3f6c;
`;
const Reach = styled.h2`
    width: 20%;
    font-size:16px;
    color: #2b3f6c;
`;
const MainCon = styled.div`
    width: 70%;
`;
const Item = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 30px;
`;
const Main = styled.div`
    width: 65%;
`;
const Above = styled.div`
    
`;
const Name = styled.h5`
    font-size: 14px;
    color: #747474;
    margin: 12px 0;
`;
const Below = styled.div`
    width: 35%;
`;
const Flag = styled.img`
    display: block;
    width: 100%;
`;
const Span = styled.a`
    display: inline-block;
    width: 25px;
    height: 25px;
    margin-right: 5px;
`;
const Div = styled.span`
    display: flex;
    align-items: center;
`;
const Connect = styled.a`
    color: #747474;
    font-size: 18px;
    display:inline-block;
    margin-bottom: 15px;
    color:#2b3f6c;
`;
const FBottom = styled.div`
    padding: 35px 0;
    display: flex;
    justify-content: space-between;
`;
const Left = styled.div`
    border-right: 1px solid #747474;
    width: 17%;
`;
const Right = styled.div`
    width: 80%;
`;
const Award = styled.div`
    margin-bottom: 20px;
    font-size: 18px;
`;
const Lists = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;
const Heading = styled.h1`
    width: 80px;
`;
const Links = styled(Link)`
    display: inline-block;
`;
const Logo = styled.img`
    width: 100%;
    display: block;
    cursor: pointer;
`;
const Blue = styled.div`
    position: relative;
    padding: 10px 20px 6px ;
    background:#1c2951;
    text-align: center;
`;
const CopyRight = styled.div``;

const SpanBox = styled.span`
    display: inline-block;
    padding: 13px 18px 10px;
`;
const Sub = styled.h4`
    color: #fff;
    margin-bottom: 10px;
    font-size:14px;
`;
const Red = styled.div`
    background: #ee3c35;
    width: 50px;
    height: 40px;
    position: absolute;
    right: 20px;
    bottom: 0px;
`;
export default Footer