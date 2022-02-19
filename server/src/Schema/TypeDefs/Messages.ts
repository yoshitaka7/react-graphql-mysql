import { GraphQLObjectType, GraphQLString, GraphQLBoolean } from "graphql";

//Messageオブジェクトの形宣言
export const MessageType = new GraphQLObjectType({
  name: "Message",
  fields: () => ({
    successful: { type: GraphQLBoolean },
    message: { type: GraphQLString }
  }),
});