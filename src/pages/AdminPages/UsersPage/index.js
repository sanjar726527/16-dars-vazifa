import React from "react";
import { useState } from "react";

import UsersPageWrapper from "./UsersPageWrapper";

import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import Tables from "./Tables";

export const UsersPage = () => {
  const users = useSelector((user) => user.product.users);
  
  return (
    <UsersPageWrapper>
      <div className="container">
        <div className="applications-title">
          <h2>Arizlar</h2>
          <span>Yetib kelgan arizalarni kuzatishingiz mumkin</span>
        </div>
        <div className="applications-table pt-3">
          <Table>
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
                    <Tables user={user} index={index} />;
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
