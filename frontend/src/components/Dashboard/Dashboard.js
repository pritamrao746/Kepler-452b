import React from 'react';
import styled from "styled-components";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import ISCVisualizer from "../ISCVisualizer/ISCVisualizer";
import WCCVisualizer from "../WCCVisualizer/WCCVisualizer";
import './Dashboard.css';

const Page = styled.div`
    // width: 100%;
    display: grid;
    min-height: 100vh;
    column-gap: 45px;
    grid-template-columns: 5fr 15fr; 
    // grid-template-rows: auto;
    background-color: ${props => props.theme.pageBackground};
    color: ${props => props.theme.textColor};
`;

const Toggle = styled.button`
    cursor: pointer;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: none;
    background-color: ${props => props.theme.titleColor};
    color: ${props => props.theme.pageBackground};
    &:focus {
        outline: none;
    }
    transition: all .5s ease;
`;

const Container = styled.div`

`;

function Dashboard({ theme, setTheme }) {

    console.log(theme);

    const changeTheme = () => {
        if(theme === "light") setTheme("dark");
        else setTheme("light");
    }

    const moonIcon = <HiMoon size={40} />;
    const sunIcon = <CgSun size={40} />;
    const icon = (theme === "light") ? moonIcon : sunIcon;

    return (
        <Page>
             {/* <div class="grid-container"> */}
                <div class="filter-wrap">
                    <p> Filters </p>
                </div>
                <div class="charts-wrap">
                    <div class="flex-container">
                        <div class="mode-icon">
                            <Toggle onClick={changeTheme}>
                                { icon }
                            </Toggle>
                        </div>
                    </div>
                    <div>
                        <p> Charts </p>
                        <ISCVisualizer />
                        <WCCVisualizer />
                    </div>
                </div>
            {/* </div> */}
        </Page>
    )
}

export default Dashboard;
