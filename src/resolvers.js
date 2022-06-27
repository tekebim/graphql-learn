const hello = "hello world !";

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
