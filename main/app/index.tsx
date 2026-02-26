import { View, Text, FlatList } from "react-native";
import {Ionicons} from '@expo/vector-icons'
const users = [
  { id: "1", name: "John" },
  { id: "2", name: "Mary" },
  { id: "3", name: "David" },
];

export default function Index() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={users}
        renderItem={({ item }) => (
        <View style={{flexDirection:'row'}}>
          <Ionicons name='person-circle' size={50} color="grey"/>
          <Text style={{ fontSize: 18, marginBottom: 10 }}>
            {item.name}
          </Text>
          </View>
        )}
      />
    </View>
  );
}