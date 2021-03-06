import React, { Component } from "react";
import UsersList from "../components/UsersList";
class Users extends Component {
  users = [
    {
      id: "u1",
      name: "Jay-Z",
      image:
        "https://i.insider.com/5e3b33270ce3d15c650b3ced?width=600&format=jpeg&auto=webp",
      places: 3,
    },
    {
      id: "u2",
      name: "Snoop Dog",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/17/Snoop_Dogg_2019_by_Glenn_Francis.jpg",
      places: 1,
    },
  ];
  render() {
    return <UsersList users={this.users} />;
  }
}

export default Users;
