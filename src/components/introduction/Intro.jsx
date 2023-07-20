import React from 'react';

// package
import styled from 'styled-components';

// images
import Homeimg from "../../assets/images/image14.jpeg";

function Intro() {

// mapping
    const datas = [
        { id: 1, title: "15+" ,  name: "Projects",},
        { id: 2, title: "500+",  name: "Plots",},
        { id: 3, title: "10+" , name: "Locations",},
    ]
    return (
        <>
            <Container>
                <Content>
                    <Who>
                        <Hr />
                        <We>WHO WE ARE</We>
                    </Who>
                    <Top>
                        <Name>Lorem ipsum dolor sit amet,<br /> consectetur adipisicing elitt imperdiet.</Name>
                        <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eveniet accusantium reiciendis ipsam omnis quidem quia modi minus ipsum velit asperiores perferendis distinctio esse, earum deserunt fugit quisquam vitae id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eveniet accusantium reiciendis ipsam omnis quidem quia modi minus ipsum velit asperiores perferendis distinctio esse, earum deserunt fugit quisquam vitae id.Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eveniet accusantium reiciendis ipsam omnis quidem quia modi minus ipsum velit asperiores perferendis distinctio esse, earum deserunt fugit quisquam vitae id.</Paragraph>
                        <Imager>
                            <HomeImg src={Homeimg} alt='Home' />
                        </Imager>
                    </Top>
                    <Bottom>
                    <WhoTwo>
                        <Line />
                        <Read>Read more</Read>
                    </WhoTwo>
                    </Bottom>
                    <Items>
                        <MainBox>
                            {datas.map((item) => (
                            <List>
                                <Model>
                                    <Count>{item.title}</Count>
                                    <Project>{item.name}</Project>      
                                </Model> 
                                <Bind>
                                    <Spiral></Spiral>
                                </Bind>
                            </List>
                            ))}
                        </MainBox>
                    </Items>
                </Content>
            </Container>
        </>
    )
}

const Container = styled.section`
    padding: 0px 220px 60px;
    position: relative;
`;
const Content = styled.div``;
const Who = styled.div`
    display: flex;
    align-items: center;
    transform: rotate(-90deg);
    position: absolute;
    top: 124px;
    left: 104px;
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
const Top = styled.div`
    padding: 0 100px;
    margin-bottom: 30px;
`;
const Name = styled.h2`
    color: #33CC66;
    font-weight: bold;
    margin-bottom: 30px;
`;
const Paragraph = styled.p`
    font-size: 12px;
    margin-bottom: 25px;
    text-align: justify;
`;
const Imager = styled.div``;
const HomeImg = styled.img`
    display: block;
    width: 100%;
    border-radius: 5px;
`;
const Bottom = styled.div`
    padding: 0 100px;
`;
const WhoTwo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
`;
const Line = styled.hr`
    border: 1px dashed  #747474;
    width: 92%;
    margin-right: 10px;
`;
const Read = styled.h3`
    color: #747474;
    font-size: 12px;
`;
const Items = styled.div`
    padding: 0 100px;
`;
const MainBox = styled.div`
    display: flex;
    justify-content: space-between;
`;
const List = styled.div`
    border:1px solid #33CC66;
    width: 32%;
    border-radius:25px;
`;
const Count = styled.h3`
    color: #33CC66;
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 5px;
`;
const Model = styled.div`
    padding: 10px 30px 0;
`;
const Project = styled.p`
    font-size: 12px;
    margin-bottom:20px;
`;
const Bind = styled.div`
    position: relative;
`;
const Spiral = styled.div`
    padding: 14px;
    width:30%;
    right: -1px;
    top: -29px;
    position: absolute;
    border: 1px solid #33CC66;
    border-top-left-radius:25px;
    border-bottom-right-radius:25px;
`;



export default Intro