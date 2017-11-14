import React from 'react'
import styled from 'styled-components'
import Header from './Header'

const FormDiv = styled.form`
    margin: 25vh 25vw auto 25vw;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`
const Input = styled.input`
    color: #85144b;
    font-weight: Bold;
    font-family: 'Quicksand', sans-serif;
    margin: 10px auto 10px auto;
    display: block;
    width: 25vw;
    height: 3vh;
    background: #ffdab9;
    padding: 5px 5px 5px 5px;
    border: black;
`

const TextArea = styled.textarea`
    color: #85144b;
    font-weight: Bold;
    font-family: 'Quicksand', sans-serif;
    margin: 10px auto 10px auto;
    display: block;
    width: 25vw;
    height: 15vh;
    background: #ffdab9;
    padding: 5px 5px 5px 5px;
    border: black;
`

const Select = styled.select`
    color: #85144b;
    font-weight: Bold;
    font-family: 'Quicksand', sans-serif;
    margin: 10px auto 10px auto;
    display: block;
    width: 26vw;
    height: 5vh;
    background: #ffdab9;
    padding: 5px 5px 5px 5px;
    border: black;
`


const Title = styled.p`
    font-size: 1.75em;
    text-align: center;
    padding: 10px 10px 2px 10px;
    color: #953163;
    text-decoration: none;
    font-family: 'Quicksand', sans-serif;
    z-index: +1;
`

const InputHeading = Title.extend`
    font-size: 1em;
`

const Button = styled.button`
    font-size: 1.4em;
    padding: 5px 5px 5px 5px;
    text-align: center;
    margin-top: 30px;
    width: 100%;
    color: #FFFFF7;
    background: #953163;
    cursor: pointer;
    border: #ffdab9;
    font-family: 'Quicksand', sans-serif;
    &:hover{
        background: #4A1831;
    }
`

class NewPost extends React.Component {
  render() {
    return (
    <div>
      <Header page={"addPost"}/>
      <FormDiv>
        <Title>Create an inspiring new Post</Title>
        <InputHeading> Post Title </InputHeading>
        <Input />
        <InputHeading> Post Category </InputHeading>
        <Select>
            <option> One </option>
            <option> Two </option>
            <option> Three </option>
            <option> Four </option>
        </Select>
        <InputHeading> Post Content </InputHeading>
        <TextArea />
        <Button> Add Post </Button>
      </FormDiv>
    </div>
    );
  }
}


export default NewPost