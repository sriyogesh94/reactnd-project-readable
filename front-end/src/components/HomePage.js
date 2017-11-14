import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const FlexDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 65px;
`

const CategoryBar = styled.div`
    width: 18vw;
    margin-top: 4%;
    position: fixed;
    display: flex;
    flex-direction: column;
    z-index: +1;
    box-shadow: 0 5px 10px rgba(0,0,0,0.19), 0 3px 3px rgba(0,0,0,0.23);
`

const Category = styled.button`
font-size: 2em;
border: none;
width: 100%;
height: 10vh;
background: #2980b9;
text-decoration: none;
text-align: center;
color: #FFFFFF;
font-family: 'Quicksand', sans-serif;
cursor: pointer;
&:hover{
    background: #4A1831;
}
`

const PostContentDiv = styled.div`
margin-left: 20vw;
width: 75vw;
display: flex;
flex-direction: column;
`

const Button = styled.button`
font-size: 1.4em;
padding: 5px 5px 5px 5px;
text-align: center;
margin-top: 30px;
width: 100%;
height: 7vh;
color: #FFFFF7;
background: #953163;
cursor: pointer;
border: #ffdab9;
font-family: 'Quicksand', sans-serif;
&:hover{
    background: #4A1831;
}
`

const Title = styled.p`
font-size: 1.4em;
text-align: center;
padding: 10px 10px 2px 10px;
color: #953163;
text-decoration: none;
font-family: 'Quicksand', sans-serif;
z-index: +1;
`

const PostCard = styled.div`
padding: 5px 0px 0px 0px;
margin: 5px 20px 5px 5px;
box-shadow: 0 5px 10px rgba(0,0,0,0.19), 0 3px 3px rgba(0,0,0,0.23);
`
const PostCardDiv = styled.div`
    display: flex;
    flex-direction: row;
`

const VoteDiv = styled.div`
    display: flex;
    flex-direction: column;
`
const Select = styled.select`
color: #85144b;
font-weight: Bold;
font-family: 'Quicksand', sans-serif;
width: 20vw;
margin: auto 0px auto auto;
height: 5vh;
background: #ffdab9;
padding: 5px 5px 5px 5px;
border: black;
`

const HomePage = () => (
    <FlexDiv>
        <CategoryBar>
            <Category>
                One
            </Category>
            <Category>
                Two
            </Category>
            <Category>
                Three
            </Category>
        </CategoryBar>
        <PostContentDiv>
            <PostCardDiv>
                <Title style={{fontSize:"3em"}}>Post Feed</Title>
                <Select>
                    <option>Sort By Score</option>
                    <option>Sort By Likes</option>
                    <option>Sort By Dislikes</option>
                    <option>Sort By Date</option>
                </Select>
            </PostCardDiv>
            <PostCardDiv>
                <VoteDiv>
                    <Button> + </Button>
                    <Title> 88 </Title>
                    <Button> - </Button>
                </VoteDiv>
                <PostCard>
                    <VoteDiv style={{flexDirection: "row", justifyContent: "center"}}>
                        <Title style={{fontSize: "2em"}}> Post Title</Title>
                        <Button style={{width: '8%'}}> Edit </Button>
                    </VoteDiv>
                    <Title>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of
                    Lorem Ipsum.
                    </Title>
                    <Title>Comments: 22 & Author: John Doe</Title>
                    <Button>View Detailed Post</Button>
                </PostCard>
            </PostCardDiv>
            <PostCardDiv>
                <VoteDiv>
                    <Button> + </Button>
                    <Title> 88 </Title>
                    <Button> - </Button>
                </VoteDiv>
                <PostCard>
                    <VoteDiv style={{flexDirection: "row", justifyContent: "center"}}>
                        <Title style={{fontSize: "2em"}}> Post Title</Title>
                        <Button style={{width: '8%'}}> Edit </Button>
                    </VoteDiv>
                    <Title>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of
                    Lorem Ipsum.
                    </Title>
                    <Title>Comments: 22 & Author: John Doe</Title>
                    <Button>View Detailed Post</Button>
                </PostCard>
            </PostCardDiv>
            <PostCardDiv>
                <VoteDiv>
                    <Button> + </Button>
                    <Title> 88 </Title>
                    <Button> - </Button>
                </VoteDiv>
                <PostCard>
                    <VoteDiv style={{flexDirection: "row", justifyContent: "center"}}>
                        <Title style={{fontSize: "2em"}}> Post Title</Title>
                        <Button style={{width: '8%'}}> Edit </Button>
                    </VoteDiv>
                    <Title>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of
                    Lorem Ipsum.
                    </Title>
                    <Title>Comments: 22 & Author: John Doe</Title>
                    <Button>View Detailed Post</Button>
                </PostCard>
            </PostCardDiv>
            <PostCardDiv>
                <VoteDiv>
                    <Button> + </Button>
                    <Title> 88 </Title>
                    <Button> - </Button>
                </VoteDiv>
                <PostCard>
                    <VoteDiv style={{flexDirection: "row", justifyContent: "center"}}>
                        <Title style={{fontSize: "2em"}}> Post Title</Title>
                        <Button style={{width: '8%'}}> Edit </Button>
                    </VoteDiv>
                    <Title>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of
                    Lorem Ipsum.
                    </Title>
                    <Title>Comments: 22 & Author: John Doe</Title>
                    <Button>View Detailed Post</Button>
                </PostCard>
            </PostCardDiv>
            <PostCardDiv>
                <VoteDiv>
                    <Button> + </Button>
                    <Title> 88 </Title>
                    <Button> - </Button>
                </VoteDiv>
                <PostCard>
                    <VoteDiv style={{flexDirection: "row", justifyContent: "center"}}>
                        <Title style={{fontSize: "2em"}}> Post Title</Title>
                        <Button style={{width: '8%'}}> Edit </Button>
                    </VoteDiv>
                    <Title>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of
                    Lorem Ipsum.
                    </Title>
                    <Title>Comments: 22 & Author: John Doe</Title>
                    <Button>View Detailed Post</Button>
                </PostCard>
            </PostCardDiv>
        </PostContentDiv>
    </FlexDiv>
)

export default HomePage
