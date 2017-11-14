import React from 'react'
import Header from './Header'
import HomePage from './HomePage'
import { Route } from 'react-router-dom'

const rootPage = () => (
    <div>
        <Header />
        <HomePage />
    </div>
)

const AddPost = () => (
        <p> This is awesome!! </p>
)

const App = () => {
    return (
        <div>
          <Route exact path='/' component={rootPage}/>
          <Route path='/addPost' component={AddPost}/>
        </div>
)}

export default App