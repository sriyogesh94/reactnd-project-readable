import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Title = styled(Link)`
        font-size: 2em;
        text-align: left;
        padding-left: 10px;
        color: #FFFFF7;
        text-decoration: none;
        font-family: 'Quicksand', sans-serif;
        z-index: +1;
        text-shadow:
        0 1px #808d93,
        -1px 0 #cdd2d5,
        -1px 2px #808d93;
        &:hover{
                color: #FFFFFF;
                text-shadow:
                0 1px #4A1831
        }
`

const NewPost = styled(Link)`
        border-radius: 3px;
        margin-top: 12px;
        padding: 0.25em 1em;
        background: transparent;
        text-decoration: none;
        color: #c0392b;
        background: #ecf0f1;
        font-family: 'Quicksand', sans-serif;
        cursor: pointer;
        position: absolute;
        right: 0;
        margin: 10px 10px 0px 0px;
        z-index: +1;
        &:hover{
            background: #4A1831;
        }
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

const Header = (props) => {
        return (
        <div>
           <HeaderBackground>
                <Title to="/"> Pulse </Title>
                {props.page === "addPost" ?
                <NewPost to='/'> Go Back </NewPost> :
                <NewPost to='/addPost'> Add a new Post </NewPost>
            }
           </HeaderBackground>
        </div>
        )}

export default Header