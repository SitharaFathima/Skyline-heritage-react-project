import React from "react";

// packages
import styled from "styled-components";
import { Link } from "react-router-dom";

// icons
import { CiSearch } from 'react-icons/ci';
import { RiFacebookLine } from 'react-icons/ri';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BiLogoYoutube } from 'react-icons/bi';

function MainHeader() {

    // mapping
    const Items = [
        { id: 1, title: "Home" ,  link: "home",},
        { id: 2, title: "About",  link: "about",},
        { id: 3, title: "Project" , link: "project",},
        { id: 4, title: "Testimonials",  link: "testimonials",},
        { id: 5, title: "Blogs",  link: "blogs", },
        { id: 6, title: "Contact",  link: "contact",},
    ];

    return (
        <>
            <Headere>
                <Heading>
                    <Links href="home">
                        <Logo
                            src={require("../../assets/images/logo.png")}
                            alt="Logo"
                        />
                    </Links>
                </Heading>
                <Navbare>
                    <Social>
                        <Arrow>
                            <RiFacebookLine size={11} />
                        </Arrow>
                        <Arrow>
                            <AiOutlineInstagram size={11} />
                        </Arrow>
                        <Arrow>
                            <BiLogoYoutube size={11} />
                        </Arrow>
                        <Search>
                            <InputBar />
                            <CiSearch size={17} />
                        </Search>
                    </Social>
                    <Navlists>
                        {Items.map((item) => (
                            <Lists
                                key={item.id}
                            >
                                <Item>
                                    {item.title}
                                </Item>
                            </Lists>
                        ))}
                    </Navlists>
                </Navbare>
            </Headere>
        </>
    );
}

export default MainHeader;

const Headere = styled.header`
    width: 100%;
    align-items: center;
    background-color: #fff;
    padding: 30px 220px 10px;
    display: flex;
    justify-content: space-between;
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
const Navbare = styled.div`
`;
const Social = styled.div`
    display: flex;
    justify-content:end;
    margin-bottom: 10px;
`;
const Arrow = styled.span`
    width:20px;
    height: 20px;
    display: inline-block;
    border: 1px solid #000;
    border-radius:50px;
    text-align: center;
    paddin-bottom: 3px;
    margin-right: 10px;
`;
const Search = styled.div`
    padding: 0px 4px;
    width: 40px;
    border: 1px solid #000;
    border-radius:4px;
    display: flex;
    margin-left: 10px;
`;
const InputBar = styled.input`
    display: inline-block;
    width: 100%;
`;
const Navlists = styled.ul`
    display: flex;
    list-style: none;
    li:first-child {
        background-color: #33CC66;
        color: #fff;
        padding: 0 8px;
    }
`;
const Lists = styled.li`
    margin-right: 25px;
    &:last-child {
        margin-right: 0px;
    }
    @media all and (max-width: 980px) {
        margin-right: 20px;
    }
    &:first-child  {
        a {
            background-color: #33CC66;
            color: #fff;
            padding: 0 8px;
        }
    &:last-child {
        margin-right: 0px;
    }
    
    @media all and (max-width: 980px) {
        margin-right: 20px;
    }
`;
const Item = styled(Link)`
    font-size: 14px;
    color: #666666;
`;

