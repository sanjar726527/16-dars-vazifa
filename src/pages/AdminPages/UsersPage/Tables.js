import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from "react-redux";

const Tables = ({ user, index, ...props }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editName, setEditName] = useState(user.name);
  const dispatch = useDispatch();
  console.log(isEdit);
  const removeTask = (index) => {
    dispatch({ type: "REMOVE_TASK", payload: index });
  };
  const editTask = () => {
    setIsEdit(!isEdit);
  };
  const saveTask = () => {
    setIsEdit(!isEdit);
    dispatch({ type: "EDIT_TASK", payload: { index, editName } });
  };
  return (
    <>
      <td>{user.id}</td>
      <td>
        <input
          type="text"
          className="form-control"
          value={editName}
          readOnly={!isEdit}
          onChange={(e) => setEditName(e.target.value)}
        />
      </td>
      <td>{user.number}</td>
      <td>{user.position}</td>
      <td colSpan={2}>
        {isEdit ? (
          <button className="btn btn-success me-2" onClick={editTask}>
            <FiEdit size={22} />
          </button>
        ) : (
          <button className="btn btn-warning me-2" onClick={saveTask}>
            <FiEdit size={22} />
          </button>
        )}
        <button
          className="btn btn-outline-danger"
          onClick={() => removeTask(index)}
        >
          <RiDeleteBin5Line fill="red" size={22} />
        </button>
      </td>
    </>
  );
};

export default Tables;
