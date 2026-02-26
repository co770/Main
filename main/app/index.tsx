import { View, Text, TouchableOpacity, FlatList } from "react-native";

const users = [
  { id: "1", name: "John", online: true },
  { id: "2", name: "Mary", online: false },
];

export default function Users() {
  return (
    <FlatList
      data={users}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={{
            flexDirection: "row",
            padding: 15,
            alignItems: "center",
            borderBottomWidth: 0.5,
          }}
        >
          {/* Avatar */}
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: "#ccc",
              marginRight: 10,
            }}
          />

          {/* Name + status */}
          <View>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {item.name}
            </Text>
            <Text style={{ color: item.online ? "green" : "gray" }}>
              {item.online ? "Online" : "Offline"}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}