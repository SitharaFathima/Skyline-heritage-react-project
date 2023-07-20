import React from 'react';

// package
import styled from 'styled-components';
import { Link } from "react-router-dom";

// images
import Bgimg from "../../assets/images/home2.jpeg";

// icons
import { CiSearch } from 'react-icons/ci';
import { SlArrowDown } from 'react-icons/sl';

function Home() {
    return (
        <Container>
            <Content>
                <Logo>
                    <LinkTag>
                        <LogoImg src={require("../../assets/images/logo.png")} alt="Logo" />
                    </LinkTag>
                </Logo>
                <Desc>
                    <Heading>Invest in a Plot, Build Your Heritage</Heading>  
                    <Paragraph>Build a home where cherished memories will be made for generations to come</Paragraph>
                    <Box>
                        <Form>
                            <Left>
                                <Arrow>
                                    <CiSearch size={14} />
                                </Arrow>
                                <Input placeholder="Search Project Name" />
                            </Left>
                            <Right>
                                <Location>
                                    <Span>Locations</Span>
                                    <Arrow>
                                        <SlArrowDown size={11} />
                                    </Arrow>
                                </Location>
                                <Green>Find Plot</Green>
                            </Right>
                        </Form>
                    </Box>
                </Desc>
            </Content>
            <ButtonBox>
                <Symbol>
                    <Small>!</Small>
                </Symbol>
            </ButtonBox>
        </Container>
    )
}

const Container = styled.section`
    height: 100vh;
    padding: 50px 50px 80px;
    background: linear-gradient(rgba(0, 62, 133, 1.5), rgba(0, 23, 107, 0.5)), url(${Bgimg}) center/cover no-repeat ;
`;
const Content = styled.div``;
const Logo = styled.h1`
    width: 80px;
    margin: 0 auto 120px;
`;
const LinkTag = styled(Link)`
    display: inline-block;
`;
const LogoImg = styled.img`
    width: 100%;
    display: block;
`;
const Desc = styled.div``;
const Heading = styled.h2`
    color: #fff;
    font-size:32px;
    text-align: center;
    font-weight: bold;
`;
const Paragraph = styled.p`
    color: #fff;
    text-align: center;
    font-size: 13px;
    margin: 3px 0 10px;
`;
const Box = styled.div``;
const Form = styled.form`
    text-align: center;
    background: #fff;
    display: flex;
    justify-content: space-between;
    width: 30%;
    margin: 0 auto;
    padding: 8px;
    border-radius: 8px;
`;
const Left = styled.div`
    display: flex;
    align-items: center;
`;
const Input = styled.input`
    &::placeholder {
        font-size: 11px;
    }
`;
const Arrow = styled.span`
    width: 23px;
    height: 17px;
    display: inline-block;
    margin: 0 5px;
`;
const Right = styled.div`
    display: flex;
`;
const Location = styled.div`
    display: flex;
    align-items: center;
`;
const Span = styled.span`
    font-size: 11px;
    display: inline-block;
    color: #747474;
`;
const Green = styled.button`
    background: #33CC66;
    padding: 5px 30px;
    color: #fff;
    font-size: 12px;
    border-radius: 2px;
`;
const ButtonBox = styled.div`
    text-align: center;
    position: absolute;
    width: 100%;
    z-index: 10;
    bottom: 12%;
    left: -16px;
`;
const Symbol = styled.button`
    padding: 0px 8px 6px;
    border-radius: 50px;
    border: 1px solid #fff;
    margin:0 auto;
    text-align: center;
`;
const Small = styled.small`
    color: #fff;
    font-size: 28px;
`;
export default Home