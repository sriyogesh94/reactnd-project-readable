import React from 'react'
import Header from './Header'
import HomePage from './HomePage'
import NewPost from './NewPost'
import { Route } from 'react-router-dom'

const rootPage = () => (
    <div>
        <Header page={"root"}/>
        <HomePage />
    </div>
)

const App = () => {
    return (
        <div>
          <Route exact path='/' component={rootPage}/>
          <Route path='/addPost' component={NewPost}/>
        </div>
)}

export default App