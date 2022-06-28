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
    id: 4,
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
  }
}

export default resolvers;
