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
      <FlatList
        data={users}
        renderItem={({ item }) => (
        
        
        <TouchableOpacity>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',height:60,borderRadius:8,}}>
          <View style={{alignItems:'center',flexDirection:'row',gap:5}}>
          <Ionicons name='person-circle' size={50} color="grey"/>
          <View>
            
          <Text style={{ fontSize: 12,}}>
            {item.name}
          </Text>
          <Text></Text>
          </View>
          
          
          </View>
          <Text style={{color:item.online?'green':'red'}}>{item.online?"online":"offline"}</Text>
          </View>
          </TouchableOpacity>
          
          
        )}
      />
    </View>
  );
}