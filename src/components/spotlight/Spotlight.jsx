import React from 'react'

// package
import styled from 'styled-components';

// images
import Bgimg from "../../assets/images/home2.jpeg";

// icons
import { CiSearch } from 'react-icons/ci';
import { SlArrowDown } from 'react-icons/sl';

function Spotlight() {
    return (
        <>
            <Section>
                <Contents>
                    <Headings>
                        <Title>Invest in a Plot, <br /> Build Your Heritage.</Title>
                        <Paragraph>Build a home where cherished memories will be made for generations to come</Paragraph>
                    </Headings>
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
                </Contents>
            </Section>
        </>
    )
}

const Section = styled.section`
    padding: 0px 220px 70px;
    position: relative
`;
const Contents = styled.div`
    background: url(${Bgimg}) ;
    background-size: cover;                     
    background-repeat: no-repeat;
    background-position: center center; 
    display: flex;
    flex-direction: column;
    height:65vh;
    justify-content: end;
    border-radius:6px;
    padding-bottom:50px;
`;
const Headings = styled.div`
    padding-left: 10%;
`;
const Title = styled.h2`
    color: #fff;
    font-weight: bold;
    font-size:40px;
`;
const Paragraph = styled.p`
    color: #fff;
    font-size: 12px;
    width:30%;
`;
const Box = styled.div`
`;
const Form = styled.form`
    position: absolute;
    left:330px;
    bottom: 46px;
    text-align: center;
    background: #fff;
    display: flex;
    justify-content: space-between;
    width: 58%;
    padding: 15px;
    border: 1px solid #000;
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
export default Spotlight