const hello = "hello world !";

const movies = [
  {
    id: 1,
    title: "Star Wars : L'attaque des clones",
    plot: "Film avec des sabres lasers."
  },
  {
    id: 2,
    title: "Joker",
    plot: "Un clown pas content"
  },
  {
    id: 3,
    title: "Jurassic World",
    plot: "Des dinosaures qui s'échappent"
  }
]

const resolvers = {
  Query: {
    // Query fait référence au type Query du schema.graphql
    test: () => {
      return hello
    }
  }
}

export default resolvers;
// On exporte le resolvers pour que GraphPack puisse l'utiliser
