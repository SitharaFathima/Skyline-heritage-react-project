import React from 'react'

// package
import styled from 'styled-components';

// icons
import { RiArrowDownSFill } from 'react-icons/ri';

function Forms() {
    return (
        <>
            <Container>
                <Data>
                    <Who>
                        <Hr />
                        <We>PROJECT ENQUIRY</We>
                    </Who>
                    <Datas>
                        <Lists>
                            <Item>
                                <ListItem>
                                    <Box>
                                        <Name>
                                            <option value="" hidden>Select Name</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </Name>
                                        <Ri>
                                            <RiArrowDownSFill size={20} />
                                        </Ri>
                                    </Box>
                                </ListItem>
                                <List placeholder='Name' />
                                <List placeholder='Email' />
                            </Item>
                            <Item>
                                <List placeholder='mobile' />
                                <Text rows="5" cols="50" placeholder='Message'></Text>
                            </Item>
                        </Lists>
                        <Red>Submit</Red>
                    </Datas>
                </Data>
            </Container>
        </>
    )
}
const Container = styled.section`
    padding: 60px 220px;
    position: relative;
`;
const Data = styled.div`
    
`;
const Who = styled.div`
    display: flex;
    align-items: center;
    transform: rotate(-90deg);
    position: absolute;
    top: 143px;
    left: 128px;
`;
const Hr = styled.hr`
    border: 1px solid #747474;
    width: 80px;
    margin-right: 10px;
`;
const We = styled.h3`
    color: #747474;
    font-size: 9px;
`;
const Datas = styled.div`
    margin-left: 38px;
`;
const Lists = styled.div`
    display: flex;
    justify-content: space-between;
`;
const ListItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`;
const List = styled.input`
    padding:12px 20px;
    border: 1px solid #747474;
    font-size: 12px;
    margin-bottom: 10px;
`;
const Item = styled.div`
    width: 48%;
    display: flex;
    flex-direction: column;
`;
const Text = styled.textarea`
    padding: 10px 15px;
    border: 1px solid #747474;
    font-size: 12px;
`;
const Box = styled.div`
    position: relative;
    width: 100%;
    border: 1px solid #747474;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Name = styled.select`
    width: 100%;
    padding:13px 20px;
    color: #747474;
    font-size: 12px;
    -webkit-appearance: none;
    option {
        color: red;
        padding: 0px 2px 1px;
        }
`;
const Ri = styled.button`
    position: absolute;
    right: 10px;
`;
const Red = styled.div`
    font-size: 14px;
    background: #FF0000;
    color: #fff;
    padding: 10px 30px;
    text-align: center;
    width: 10%;
`;

export default Forms