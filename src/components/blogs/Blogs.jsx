import React from 'react';

// package
import styled from 'styled-components';

// images
import Handimg from "../../assets/images/home10.jpeg";

function Blogs() {
    return (
        <>
            <BlogsContainer>
                <Main>
                    <Who>
                        <Hr />
                        <We>BLOGS</We>
                    </Who>
                    <Contents>
                        <Left>
                            <Container>
                                <Hand src={Handimg} />
                            </Container>
                        </Left>
                        <Right>
                            <Lorem>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing prediet.</Lorem>
                            <WhoTwo>
                                <Read>10 JULY 2023</Read>
                                <Line />
                            </WhoTwo>
                            <Paragraph>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam consequuntur iusto, cum modi amet consectetur adipisicing elit. Quisquam consequuntur iusto, cum modi reiciendis Quisquam consequuntur iusto, cum modi reiciendis similique officia fugiat nulla quibusdam in eius tempore, magni fugit itaque, error unde deserunt provident. Ipsam.</Paragraph>
                            <WhoTwo>
                                <Read>Read more</Read>
                                <Line />
                            </WhoTwo>
                        </Right>
                    </Contents>
                </Main>
            </BlogsContainer>
        </>
    )
}

const BlogsContainer = styled.section`
    padding: 60px 220px;
    position: relative;
`;
const Main = styled.div`
    
`;
const Contents = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Left = styled.div`
    width: 46%;
`;
const Container = styled.div`
    width: 100%;
    margin-left: 30px;
`;
const Hand = styled.img`
    display: block;
    width: 100%;
`;
const Right = styled.div`
    width: 46%;
`;
const Lorem = styled.h3`
    color: #33CC66;
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 30px;
`;
const Paragraph = styled.p`
    font-size: 10px;
    margin-bottom: 20px;
`;
const Who = styled.div`
    display: flex;
    align-items: center;
    transform: rotate(-90deg);
    position: absolute;
    top: 160px;
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
const WhoTwo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;
const Line = styled.hr`
    border: 1px solid  #747474;
    width: 20%;
    margin-left: 10px;
`;
const Read = styled.h3`
    color: #747474;
    font-size: 12px;
`;
export default Blogs
