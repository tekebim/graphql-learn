const users = [
  {
    id: 1,
    name: "Jhon",
    email: "jhondoe@gmail.com",
    password: "D0S8739jdsklq"
  },
  {
    id: 2,
    name: "Eric",
    email: "ericdoe@gmail.com",
    password: "LdsjDIk2866SD"
  },
  {
    id: 3,
    name: "Mike",
    email: "mikedoe@gmail.com",
    password: "0978JldLSdazd"
  },
  {
    id: 4,
    name: "Jessica",
    email: "jessicadoe@gmail.com",
    password: "ezide72829ds"
  },
  {
    id: 5,
    name: "Alicia",
    email: "aliciadoe@gmail.com",
    password: "ezdjDsodl9282"
  },
]

const resolvers = {
  Query: {
    users: () => {
      return users;
    },
    user: (parent, args, context, info) => {
      return users.find((user) => user.id == args.id)
    },
    latestUsers: () => {
      return users.slice(-3);
    }
  },
  Mutation: {
    addUser: (parent, args) => {
      let user = {
        id: users.length + 1,
        name: args.name,
        email: args.email,
        password: args.password,
      }

      users.push(user);

      return user;
    },
    editUser: (parent, args) => {
      const indexUserFound = users.findIndex(user => {
        return user.id == args.id;
      });

      if (args.name !== null && args.name !== undefined) {
        users[indexUserFound].name = args.name
      }

      if (args.email !== null && args.email !== undefined) {
        users[indexUserFound].email = args.email
      }

      if (args.password !== null && args.password !== undefined) {
        users[indexUserFound].password = args.password
      }

      return users[indexUserFound];
    },
    deleteUser: (parent, args) => {
      const indexUserFound = users.findIndex(user => {
        return user.id == args.id;
      });

      if (!indexUserFound) {
        return false
      }

      users.splice(indexUserFound, 1)
      return true;
    }
  }
}
export default resolvers;
