import React from 'react'
import styled from 'styled-components'

const SideBar = styled.div`
    width: 190px;
    position: fixed;
    margin-top: 0px;
    margin-left: 10px;
    z-index: -1;
    box-shadow: 0 5px 10px rgba(0,0,0,0.19), 0 3px 3px rgba(0,0,0,0.23);
    @media (max-width: 700px) {
        width: 100px;
        z-index: -1;
    }
`

const PostContentDiv = styled.div`
    width: auto;
    margin: 65px 25px 0px 265px;
    position: relative;
    overflow: hidden
    z-index: -1;
    @media (max-width: 700px) {
        margin: 65px 25px 0px 150px;
        z-index: -1;
	}
`

const HomePage = () => {
    return (
        <div>
            <SideBar>
            </SideBar>
            <PostContentDiv>
            </PostContentDiv>
        </div>
    )
}

export default HomePage
