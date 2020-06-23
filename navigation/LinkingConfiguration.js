import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    Root: {
      path: "root",
      screens: {
        Home: "home",
        News: "News",
        Filter: "Filter",
        Company: "Company",
        About: "About",
      },
    },
  },
};
