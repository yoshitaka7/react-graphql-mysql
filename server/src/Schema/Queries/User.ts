import { GraphQLList } from "graphql";
import { UserType } from "../TypeDefs/User";
import { Users } from "../../Entities/Users";

//全ユーザー取得
export const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  resolve() {
    return Users.find();
  },
};