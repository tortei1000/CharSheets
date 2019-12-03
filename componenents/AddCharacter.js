import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation, useNavigationParam } from 'react-navigation-hooks'

const AddCharacter = () => {
  const {navigate} = useNavigation()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Add Book</Text>
        <Button title="Go to Details" onPress={() => navigate("CharacterDetail")} />
      <Button title="Go to Add Book" onPress={() => navigate("AddCharacter")} />
      <Button title="Go to Edit Book" onPress={() => navigate("EditCharacter")} />
      </View>
  )
}

export default AddCharacter
