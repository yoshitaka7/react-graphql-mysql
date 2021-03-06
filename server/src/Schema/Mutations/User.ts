import { GraphQLString, GraphQLID } from 'graphql';
import { UserType } from '../TypeDefs/User';
import { MessageType } from '../TypeDefs/Messages';
import { Users } from '../../Entities/Users';

//ユーザー作成
export const CREATE_USER = {
  type: UserType,
  args: {
    name: {type: GraphQLString},
    username: {type: GraphQLString},
    password: {type: GraphQLString},
  },
  resolve(parent: any, args: any) {
    const { name, username, password } = args;
    Users.insert({  name, username, password });
    return args;
  },
}

//パスワード更新
export const UPDATE_PASSWORD = {
  type: MessageType,
  args: {
    username: {type: GraphQLString},
    oldPassword: {type: GraphQLString},
    newPassword: {type: GraphQLString},
  },
  async resolve(parent: any, args: any) {
    const { username, oldPassword, newPassword } = args;
    const user = await Users.findOne({ username: username });

    if (!user) {
      throw new Error("username doesnt exit")
    }
    const userPassword = user?.password;

    if (oldPassword === userPassword) {
      await Users.update(
        { username: username },
        { password: newPassword }
      );
      return { successful: true, message: "password update" };
    } else {
      throw new Error("password do not match")
    }
  }
}

//ユーザー削除
export const DELETE_USER = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const id = args.id
    await Users.delete(id)

    return { successful: true, message: "DELETE SUCCESS"}
  },
}