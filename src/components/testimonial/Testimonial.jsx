import React from 'react';

// package
import styled from 'styled-components';

// mapping
const pro = [
    { 
        id: 1,
        img: require('../../assets/images/man.png'),
        des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam consequuntur iusto, cum modi amet consectetur adipisicing elit consectetur adipisicing elit cum modi amet consectetur adipisicing elit consectetur elit.",
        date: "Mr.Arun Thomas",
    },
    { 
        id: 2, 
        img: require('../../assets/images/man1.png'),
        des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam consequuntur iusto, cum modi amet consectetur adipisicing elit consectetur adipisicing elit cum modi amet consectetur adipisicing elit consectetur elit .",
        date: "Mr.Arjun Raj",
    },
    { 
        id: 3,
        img: require('../../assets/images/man2.jpeg') ,
        des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam consequuntur iusto, cum modi amet consectetur adipisicing elit consectetur adipisicing elit cum modi amet consectetur adipisicing elit consectetur elit.",
        date: "Ms.Rasiya",
    },
]

function Testimonial() {
    return (
        <>
            <Containere>
                <Who>
                    <Hr />
                    <We>TESTIMONIAL</We>
                </Who>
                <Content>
                {pro.map((item) => (
                    <Item >
                        <Left>
                            <Container>
                                <Hand src={item.img} />
                            </Container>
                        </Left>
                        <Right>
                            <Paragraph>{item.des}</Paragraph>
                            <WhoTwo>
                                <Read>{item.date}</Read>
                                <Line />
                            </WhoTwo>
                        </Right>
                    </Item>
                    ))}
                </Content>
            </Containere>
        </>
    )
}
const Containere = styled.section`
    padding: 100px 220px 60px;
    background-color: #ebebeb;
    position: relative;
`;
const Who = styled.div`
    display: flex;
    align-items: center;
    transform: rotate(-90deg);
    position: absolute;
    top: 173px;
    left: 95px;
`;
const Hr = styled.hr`
    border: 1px solid  #747474;
    width: 160px;
    margin-right: 10px;
`;
const We = styled.h3`
    color: #747474;
    font-size: 10px;
`;
const Content = styled.div`
    display:flex;
    margin-left: 37px;
`;
const Item = styled.div`
    width: 98%;
    margin-right: 5px;
    border: 1px solid  #747474;
    padding: 25px 25px 25px;
`;
const Left = styled.div`
    width: 32%;
    position: relative;
    margin-bottom: 40px;
`;
const Container = styled.div`
    position: absolute;
    top: -71px;
`;
const Hand = styled.img`
    display: block;
    width: 100%;
    border: 1px solid  #747474;
`;
const Right = styled.div`
    
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
    width: 50%;
    margin: 0 10px;
`;
const Read = styled.h3`
    color: #33CC66;
    font-size: 14px;
    font-weight: bold;
`;
export default Testimonial