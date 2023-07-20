import React from 'react';

// icons
import { RiArrowDownSFill } from 'react-icons/ri';

// package
import styled from 'styled-components';

function Enquire() {
    return (
        <>
            <Container>
                <Lists>
                    <List>
                        <Box>
                            <Name>Select project</Name>
                            <RiArrowDownSFill size={11} />
                        </Box>
                    </List>
                    <List>Name</List>
                    <List>Mobile</List>
                    <List>Email</List>
                    <Red>Enquire Now</Red>
                </Lists>
            </Container>
        </>
    )
}

const Container = styled.section`
    padding: 40px 220px 40px;
`;
const Lists = styled.div`
    display: flex;
    justify-content: space-between;
`;
const List = styled.div`
    padding:10px 20px;
    border: 1px solid #747474;
    border-radius: 50px;
    width: 20%;
    font-size: 12px;
`;
const Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Name = styled.div`
`;
const Red = styled.div`
    font-size: 14px;
    background: #FF0000;
    color: #fff;
    border-radius: 50px;
    padding: 10px 30px;
    text-align: center;
`;

export default Enquire