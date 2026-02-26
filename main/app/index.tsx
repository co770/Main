import { View, Text, FlatList } from "react-native";
import {Ionicons} from '@expo/vector-icons'
const users = [
  { id: "1", name: "John",online:true},
  { id: "2", name: "Mary", online:false},
  { id: "3", name: "David", online:false },
];

export default function Index() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={users}
        renderItem={({ item }) => (
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',height:60,borderRadius:8,}}>
          <Ionicons name='person-circle' size={50} color="grey"/>
          <Text style={{ fontSize: 18, marginBottom: 10 }}>
            {item.name}
          </Text>
          <Text style={{color:item.online?'green':'red'}}>{item.online?"online":"offline"}</Text>
          </View>
        )}
      />
    </View>
  );
}