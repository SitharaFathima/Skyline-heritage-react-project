import React from 'react';

// package
import styled from 'styled-components';

function Black() {
// mapping
const values = [
    { 
        id: 1,
        img: require('../../assets/images/garden4.jpeg'),
        title: "Project's Name",
        icon: require('../../assets/images/degree.png'),
    },
    { 
        id: 2, 
        img: require('../../assets/images/garden1.jpeg'),
        title: "Project's Name",
        icon: require('../../assets/images/degree.png'),
    },
    { 
        id: 3,
        img: require('../../assets/images/garden2.jpeg') ,
        title: "Project's Name",
        icon: require('../../assets/images/degree.png'),
    },
    { 
        id: 4, 
        img: require('../../assets/images/garden3.jpeg') ,
        title: "Project's Name",
        icon: require('../../assets/images/degree.png'),
    },
    { 
        id: 5, 
        img: require('../../assets/images/garden4.jpeg') ,
        title: "Project's Name",
        icon: require('../../assets/images/degree.png'),
    },
    { 
        id: 6,
        img: require('../../assets/images/garden5.jpeg') ,
        title: "Project's Name",
        icon: require('../../assets/images/degree.png'),
    },
]

    return (
        <>
            <Container>
                <Main>
                    <Left>
                        <Who>
                            <We>360&deg;</We>
                            <Hr />
                        </Who>
                        <Heading>360&deg;</Heading>
                        <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ipsa cumque harum exercitationem. Expedita nobis laudantium officiis ad blanditiis eius corporis ipsam sit, reprehenderit earum dolorum.</Paragraph>
                    </Left>
                    <Right>
                        <Who>
                            <We>Projects in 360&deg;</We>
                            <Hr />
                        </Who>
                        <Gallery>
                            {values.map((item) => (
                            <Lists>
                                <Box><Img src={item.img} /></Box>
                                <LName><Angle src={item.icon} /></LName>
                                <Transparent className='one'>
                                    <PName>{item.title}</PName>
                                    
                                </Transparent>
                            </Lists>
                            ))}
                        </Gallery>
                        <WhoTwo>
                            <Line />
                            <Read>View more</Read>
                        </WhoTwo>
                    </Right>
                </Main>
            </Container>
        </>
    )
}

const Container = styled.section`
    padding: 40px 220px 40px;
    background: #2E2E2E;
`;
const Main = styled.div`
    display: flex;
`;
const Left = styled.div`
    width: 73%;
`;
const Heading = styled.h2`
    font-size: 300px;
    background: -webkit-linear-gradient(#fff, #333);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;
const Who = styled.div`
    display: flex;
    align-items: center;
    margin-bottom:40px;
`;
const Hr = styled.hr`
    border: 1px solid #747474;
    width: 195px;
`;
const We = styled.h3`
    color: #747474;
    font-size: 12px;
    margin-right: 10px;
`;
const Right = styled.div`
    width: 27%;
`;
const Paragraph = styled.p`
    color: #fff;
    font-size: 12px;
    width: 80%;
`;
const Gallery = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 45px;
`;
const Lists = styled.div`
    width: 49%;
    position: relative;
    margin-bottom: 6px;
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
    position: absolute;
    bottom: 0px;
    width: 100%;
    text-align: center;
    padding: 4px 20px;
    background-color: rgba(0, 0, 0, 0.5);
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
`;
const PName = styled.h5`
    display: block;
    font-size: 10px;
    color: #fff;
    margin-bottom: 2px;
`;
const WhoTwo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 35px;
    justify-content: flex-end;
`;
const Line = styled.hr`
    border: 1px dashed  #747474;
    width: 74%;
    margin-right: 10px;
`;
const Read = styled.h3`
    color: #747474;
    font-size: 12px;
`;
const LName = styled.div`
    position: absolute;
    width: 20px;
    height: 20px;
    top: 30px;
    right:60px;
`;
const Angle = styled.img`
    display: block;
    width: 100%;
`;
export default Black