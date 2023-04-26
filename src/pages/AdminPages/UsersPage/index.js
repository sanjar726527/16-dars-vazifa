import React from "react";
import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import UsersPageWrapper from "./UsersPageWrapper";

import { useDispatch, useSelector } from "react-redux";

export const UsersPage = () => {
  const [isEdit, setIsEdit] = useState(false);

  const users = useSelector((user) => user.product.users);
  const dispatch = useDispatch();

  const handleShow = (user) => {
    setIsEdit(true);
    dispatch({ type: "EDIT_POSITION", payload: user });
  };

  const removeTask = (index) => {
    dispatch({ type: "REMOVE_TASK", payload: index });
    console.log("remove task", index, users);
  };
  return (
    <UsersPageWrapper>
      <div className="container">
        <div className="applications-title">
          <h2>Arizlar</h2>
          <span>Yetib kelgan arizalarni kuzatishingiz mumkin</span>
        </div>
        <div className="applications-table pt-3">
          <Table >
            <thead>
              <tr>
                <th>#</th>
                <th>To’liq ismi</th>
                <th>Telefon raqami</th>
                <th>Roli</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.number}</td>
                    <td>{user.position}</td>
                    <td colSpan={2}>
                      <Button
                        variant="outline"
                        onClick={() => handleShow(user)}
                      >
                        <FiEdit size={22} />
                      </Button>
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => removeTask(index)}
                      >
                        <RiDeleteBin5Line fill="red" size={22} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>

          <div className="all-price">
            <h5>Jami</h5>
            <h5>{users.length} ta akkaunt</h5>
          </div>
        </div>
      </div>
    </UsersPageWrapper>
  );
};
