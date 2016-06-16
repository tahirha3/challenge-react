import React from 'react'
import { connect } from 'react-redux'

import NewTodo from './NewTodo'
import { addTodo, deleteTodo } from '../actions'

const Todos = ({todos, dispatch}) => (
  <div>
    <h1>Todos</h1>    
    <NewTodo onChange={e => {
      if(e.keyCode == 13){
        dispatch(addTodo(e.target.value))
        e.target.value = ''
      }
    }}/>
    {todos.map((todo, index) => <p key={index}>{todo} <button className="slds-button" onClick={e => {
      dispatch(deleteTodo(index))
    }}>X</button></p>)}
    
  </div>
)

const mapStateToProps = state => ({
    todos: state.todos
});

export default connect(mapStateToProps)(Todos)

