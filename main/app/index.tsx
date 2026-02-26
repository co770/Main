import { View, Text, FlatList,TouchableOpacity} from "react-native";
import {Ionicons} from '@expo/vector-icons'
const users = [
  { id: "1", name: "John",online:true,message:"hello ezra,how are you i hope you are good"},
  { id: "2", name: "Mary", online:false,message:"have you sent the 1million?"},
  { id: "3", name: "David", online:false,message:'hi' },
];

export default function Index() {
  return (
    <View style={{ flex: 1, padding: 20,gap:5 }}>
<FlatList data={users} keyExtractor={(item)=>item.id}
renderItem={({item})=>(
<View
<TouchableOpacity>
  <Text style={{fontWeight:'bold'}}>{item.name}</Text>
  <Text>{item.message}</Text>
</TouchableOpacity>
</View>
)}/>
    </View>
  );
}