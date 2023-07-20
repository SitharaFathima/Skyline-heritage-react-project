import React from 'react';

// package
import styled from 'styled-components';

// icons
import { CiSearch } from 'react-icons/ci';
import { SlArrowDown } from 'react-icons/sl';

function Projects() {
    
    // mapping
    const values = [
        { 
            id: 1,
            img: require('../../assets/images/garden4.jpeg'),
            title: "Project's Name",
            location: "Location",
        },
        { 
            id: 2, 
            img: require('../../assets/images/garden1.jpeg'),
            title: "Project's Name",
            location: "Location",
        },
        { 
            id: 3,
            img: require('../../assets/images/garden2.jpeg') ,
            title: "Project's Name",
            location: "Location",
        },
        { 
            id: 4, 
            img: require('../../assets/images/garden3.jpeg') ,
            title: "Project's Name",
            location: "Location",
        },
        { 
            id: 5, 
            img: require('../../assets/images/garden4.jpeg') ,
            title: "Project's Name",
            location: "Location",
        },
        { 
            id: 6,
            img: require('../../assets/images/garden5.jpeg') ,
            title: "Project's Name",
            location: "Location",
        },
    ]
    
    return (
        <>
            <Container>
                <Content>
                    <Heading>PROJECTS</Heading>
                    <Flex>
                        <Left>
                            <Items>
                                <Name> All Projects</Name>
                                <Arrow>
                                    <SlArrowDown size={11} />
                                </Arrow>
                            </Items>
                            <Items>
                                <Name>All Locations</Name>
                                <Arrow>
                                    <SlArrowDown size={8} />
                                </Arrow>
                            </Items>
                            <Items>
                                <Name>All plots</Name>
                                <Arrow>
                                    <SlArrowDown size={8} />
                                </Arrow>
                            </Items>   
                        </Left>
                        <Right>
                            <Form>
                                <Arrow>
                                    <CiSearch size={10} />
                                </Arrow>
                                <Input placeholder='Search Project Name' />
                            </Form>
                            <Green>Find Plot</Green>
                        </Right>
                        
                    </Flex>
                    <Gallery>
                    {values.map((item) => (
                        <Lists>
                            <Box><Img src={item.img} /></Box>
                            <Transparent className='one'>
                                <PName>{item.title}</PName>
                                <LName>{item.location}</LName>
                            </Transparent>
                        </Lists>
                    ))}
                    </Gallery>
                    <WhoTwo>
                        <Line />
                        <Read>Read more</Read>
                    </WhoTwo>
                </Content>
            </Container>
        </>
    )
}

const Container = styled.section`
    padding: 60px 220px 40px;
    background-color: #ebebeb;
`;
const Content = styled.div`
`;
const Heading = styled.h3`
    color: #747474;
    font-size:12px;
    font-weight:bold;
    margin-bottom:30px;
`;
const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`;
const Left = styled.div`
    display: flex;
    align-items: center;
`;
const Items = styled.div`
    display: flex;
    text-align: center;
    font-size: 12px;
    padding: 4px 15px;
    border: 1px solid #747474;
    border-radius: 50px;
    margin-right: 10px;
    &:first-child{
        border: 1px solid #33CC66;
        padding:8px 25px;
        color: #33CC66;
        font-weight: bold;
    }
`;
const Name = styled.h4`
    font-size: 10px;
`;
const Arrow = styled.div`
    display: inline-block;
    margin-left: 5px;
`;
const Right = styled.div`
    display: flex;
`;
const Green = styled.button`
    background: #33CC66;
    padding: 5px 30px;
    color: #fff;
    font-size: 12px;
    border-radius: 2px;
    margin-left: 10px;
`;
const Form = styled.form`
    padding: 5px 10px;
    background: #fff;
`;
const Input = styled.input`
    margin-left: 5px;
    &::placeholder {
        font-size: 10px;
    }
`;
const Gallery = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 20px;
`;
const Lists = styled.div`
    width: 33%;
    position: relative;
    margin-bottom: 6px;
    &:first-child {
        & .one{
            position: absolute;
            bottom: 0px;
            width: 100%;
            padding: 10px 50px;
            background-color: rgba(0, 0, 0, 0.5);
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
        }
        h5{
            display: block;
            font-size: 12px;
            font-weight: bold;
            color: #fff;
            margin-bottom: 2px;
        }
        h6{
            display: block;
            font-size: 12px;
            color: #fff;
        }
    }
`;
const Box = styled.div`
    width: 100%;
`;
const Img = styled.img`
    width: 100%;
    display: block;
    border-radius: 6px;
`;
const Transparent = styled.div`
`;
const PName = styled.h5`
    display: none;
`;
const LName = styled.h6`
    display: none;
`;
const WhoTwo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 35px;
    justify-content: flex-end;
`;
const Line = styled.hr`
    border: 1px dashed  #747474;
    width: 6%;
    margin-right: 10px;
`;
const Read = styled.h3`
    color: #747474;
    font-size: 12px;
`;
export default Projects