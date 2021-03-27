import React from 'react';
import styled from 'styled-components';

const Logo = styled.section`
    .logo-circle{
        background:#0084ff;
        border-radius:50%;
        width:40px;
        height:40px;
        display:flex;
        justify-content:center;
        align-items:flex-end; 
        margin-left:10px;
        margin-top:10px;
        cursor:pointer;
    }

    .logo-circle>i{
        color:white;
        font-size:2em;
    }
`;

const FBLogo = () => {
    return (
        <Logo>
            <div className="logo-circle">
                <i class="fab fa-facebook-f"></i>
            </div>
        </Logo>
    )
}

export default FBLogo;