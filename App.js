import React from "react";
import { AppRegistry } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Characters from "./componenents/Characters";
import CharacterDetails from "./componenents/CharacterDetail";
import AddCharacter from "./componenents/AddCharacter";
import EditCharacter from "./componenents/EditCharacter";
import CharacterDetail from "./componenents/CharacterDetail";
import ApolloClient from "apollo-boost";
import { gql, InMemoryCache, HttpLink } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const MainNavigator = createStackNavigator({
  Characters: { screen: Characters },
  CharacterDetail: { screen: CharacterDetail },
  AddCharacter: { screen: AddCharacter },
  EditCharacter: { screen: EditCharacter }
});

const MyRootComponent = createAppContainer(MainNavigator);

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  uri: "https://api.graph.cool/simple/v1/ck2zcwu9l1c3l01694qjr4fu1"
});

const App = () => (
  <ApolloProvider client={client}>
    <MyRootComponent />
  </ApolloProvider>
);

AppRegistry.registerComponent("CharSheets", ()=>App)
export default App;
