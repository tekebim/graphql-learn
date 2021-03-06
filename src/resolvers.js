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
    },
    movies: () => {
      return movies
    },
    movie: (parent, args, context, info) => {
      return movies.find((movie) => movie.id == args.id)
      // args se trouve toujours en deuxième paramètre, il contient les paramètres de la requête.
    }
  },
  Mutation: {
    addMovie: (parent, args) => {
      // Le corps de la fonction sera adaptée dans un cas concret.
      let movie = {
        id: movies.length + 1,
        title: args.title,
        plot: args.plot
      };
      movies.push(movie);

      return movie;
    }
  }
}

export default resolvers;
// On exporte le resolvers pour que GraphPack puisse l'utiliser
