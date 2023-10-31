import React from 'react'

function TodoList(props) {
  return (
    <li className="list-item">
        {props.item}
        <span className='icons'>
        <i class="fa-solid fa-trash icon-delete"
         onClick={e=>{
          props.deleteItem(props.index)
      }}></i>
       
        </span>
    </li>
  )
}

export default Todolist