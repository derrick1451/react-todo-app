/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';

export default function Todoitem({
  itemprop, handleChange, delTodo, setUpdate,
}) {
  const [editing, setEditing] = useState(false);
  const [updateInput, setUpdateInput] = useState(itemprop.title);
  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleEditing = () => {
    setEditing(true);
  };
  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setUpdate(updateInput, itemprop.id);
      setEditing(false);
    }
  };

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  return (
    <li className="item">
      {' '}
      <div className="content">
        <input
          onChange={() => {
            handleChange(itemprop.id);
          }}
          checked={itemprop.completed}
          type="checkbox"
        />
        <button onClick={handleEditing} type="button">
          {' '}
          <AiFillEdit style={{ color: '#5e5e5e', fontSize: '16px' }} />
        </button>
        <button
          onClick={() => {
            delTodo(itemprop.id);
          }}
          type="button"
        >
          {' '}
          <FaTrash style={{ color: '#5e5e5e', fontSize: '16px' }} />
        </button>
        {' '}
        <span style={itemprop.completed ? completedStyle : null}>
          {updateInput}
        </span>
      </div>
      <input
        onChange={(e) => setUpdateInput(e.target.value)}
        onKeyDown={handleUpdatedDone}
        type="text"
        value={updateInput}
        className="textInput"
        style={editMode}
      />
    </li>
  );
}
