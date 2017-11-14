import React from 'react'
import styled from 'styled-components'

const Title = styled.a`
        font-size: 2.5em;
        text-align: left;
        padding-left: 10px;
        color: #FFFFF7;
        text-decoration: none;
        font-family: 'Quicksand', sans-serif;
        z-index: +1;
`

const NewPost = styled.a`
        border-radius: 3px;
        padding: 0.25em 1em;
        background: transparent;
        color: #c0392b;
        background: #ecf0f1;
        font-family: 'Quicksand', sans-serif;
        cursor: pointer;
        position: absolute;
        right: 0;
        margin: 10px 10px 0px 0px;
        z-index: +1;
`

const HeaderBackground = styled.div`
        position:fixed;
        height: 50px;
        left:0;
        top:0;
        float:left;
        width:100%;
        background: #953163;
        z-index: +1;
`

const Header = () => {
        return (
        <div>
           <HeaderBackground>
                <Title href="#"> Pulse </Title>
                <NewPost onClick={() => console.log("success")}> add a new post </NewPost>
           </HeaderBackground>
        </div>
        )}

export default Header