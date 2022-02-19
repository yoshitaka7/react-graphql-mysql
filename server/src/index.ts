import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./Schema";
import cors from "cors";
import { createConnection } from "typeorm";
import { Users } from "./Entities/Users";

const main = async () => {
  //mysqlサーバーとの接続
  await createConnection({
    type: "mysql",
    database: "GraphqlCRUD",
    username: "root",
    password: "tvad1980",
    logging: true,
    synchronize: true,
    entities: [Users]
  })

  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
  }))

  //3001番ポートでDBサーバー
  app.listen(3001, () => {
    console.log("server running on port 3001")
  });
};

main().catch((err) => {
  console.log(err);
})