import React from "react";
import {
  StyleSheet,
  FlatList,
  ActivityIndicator,
  View,
  Text,
  TouchableHighlight
} from "react-native";
import { ListItem, Button } from "react-native-elements";
import { useNavigation, useNavigationParam } from "react-navigation-hooks";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const Characters = () => {
  const { navigate } = useNavigation();
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading)
    return (
      <View style={styles.activity}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  if (error)
    return (
      <View style={styles.activity}>
        <Text>`Error! ${error.message}`</Text>
      </View>
    );

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <FlatList
        data={data.allCharacterses}
        renderItem={({ item }) => (
          <Text
            onPress={() => {
              navigate("CharacterDetail", { id: `${item.id}` });
            }}
          >
            {item.name}
          </Text>
        )}
        keyExtractor={item => item.id}
      />
      <Text>Character List</Text>
      <Button
        title="Go to Details"
        onPress={() => navigate("CharacterDetail")}
      />
      <Button title="Go to Add Book" onPress={() => navigate("AddCharacter")} />
      <Button
        title="Go to Edit Book"
        onPress={() => navigate("EditCharacter")}
      />
    </View>
  );
};

const GET_CHARACTERS = gql`
  {
    allCharacterses {
      id
      name
    }
  }
`;

Characters.navigationOptions = ({ navigation }) => ({
  title: "Characters",
  headerRight: (
    <Button
      buttonStyle={{ padding: 0, backgroundColor: "transparent" }}
      icon={{ name: "add-circle", style: { marginRight: 0, fontSize: 28 } }}
      onPress={() => {
        navigation.push("AddBook");
      }}
    />
  )
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
  activity: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Characters;
