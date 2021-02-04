import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAGHQL_URI,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          project: {
            keyArgs: false,
            merge(existing = [], incoming) {
              let sorted = [...existing, ...incoming].slice().sort();
              // https://stackoverflow.com/questions/45439961/remove-duplicate-values-from-an-array-of-objects-in-javascript
              const result = sorted.reduce((unique, o) => {
                if (!unique.some((obj: any) => obj.__ref === o.__ref)) {
                  unique.push(o);
                }
                return unique;
              }, []);
              return result;
            },
          },
        },
      },
    },
  }),
});
