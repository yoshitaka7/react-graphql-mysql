import React from 'react';
import { GET_ALL_USERS } from "../Graphql/Queries"
import { DELETE_USER } from "../Graphql/Mutation";
import { useQuery, useMutation } from '@apollo/client'

function ListOfUsers() {
  const { data } = useQuery(GET_ALL_USERS);  //ユーザーデータ取得

  const [deleteUser, { error }] = useMutation(DELETE_USER);  //押下時idを渡してMutation走らせる

  return <div>
    {data &&
        data.getAllUsers.map((user: any) => {
          return (
            <div key={user.name}>
              {user.name} / {user.username}
              <button onClick={() => {deleteUser({ variables: { id: user.id } });}}>Delete User</button>
            </div>
          );
        })}
  </div>;
}

export default ListOfUsers;