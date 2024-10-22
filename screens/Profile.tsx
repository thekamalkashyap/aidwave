import {
  View,
  ViewStyle,
  Text,
  TextStyle,
  Image,
  ImageStyle,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import { Feather, EvilIcons, Entypo, FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            backgroundColor: "#FF546B",
            padding: 20,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flexDirection: "row", gap: 20 }}>
              <Entypo name="arrow-long-left" size={24} color="white" />
              <Text style={{ color: "white", fontSize: 18, fontWeight: 600 }}>
                Edit Profile
              </Text>
            </View>
            <Feather name="settings" size={24} color="white" />
          </View>
          <View style={{ alignItems: "center" }}>
            <Image
              style={{
                height: 120,
                width: 120,
                backgroundColor: "white",
                borderRadius: 120,
              }}
              source={require("@/assets/login.png")}
            />
            <View>
              <Text style={{ color: "white", fontSize: 20 }}>
                Gurpreet Kaur
              </Text>
              <Text style={{ color: "white", fontSize: 16 }}>
                +91 7814564603
              </Text>
            </View>
          </View>
        </View>

        <View style={{ margin: 20, gap: 20 }}>
          <View>
            <Text style={{ fontSize: 18, marginLeft: 10, color: "#DD383F" }}>
              Name
            </Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderRadius: 10,
                borderColor: "grey",
                padding: 10,
                color: "#FF546B",
                fontSize: 16,
              }}
              placeholderTextColor={"grey"}
              placeholder="Name"
              value="Gurpreet Kaur"
            />
          </View>
          <View>
            <Text style={{ fontSize: 18, marginLeft: 10, color: "#DD383F" }}>
              Age
            </Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderRadius: 10,
                borderColor: "grey",
                padding: 10,
                color: "#FF546B",
                fontSize: 16,
              }}
              placeholderTextColor={"grey"}
              placeholder="Age"
              value="20"
            />
          </View>
          <View>
            <Text style={{ fontSize: 18, marginLeft: 10, color: "#DD383F" }}>
              Gender
            </Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderRadius: 10,
                borderColor: "grey",
                padding: 10,
                color: "#FF546B",
                fontSize: 16,
              }}
              placeholderTextColor={"grey"}
              placeholder="Gender"
              value="trans"
            />
          </View>
          <View>
            <Text style={{ fontSize: 18, marginLeft: 10, color: "#DD383F" }}>
              Blood Group
            </Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderRadius: 10,
                borderColor: "grey",
                padding: 10,
                color: "#FF546B",
                fontSize: 16,
              }}
              placeholderTextColor={"grey"}
              placeholder="Blood Group"
              value="AB+"
            />
          </View>
          <View>
            <Text style={{ fontSize: 18, marginLeft: 10, color: "#DD383F" }}>
              Aadhaar card
            </Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderRadius: 10,
                borderColor: "grey",
                padding: 10,
                color: "#FF546B",
                fontSize: 16,
              }}
              placeholderTextColor={"grey"}
              placeholder="Name"
              value="123801234712"
            />
          </View>
          <Pressable
            style={{
              backgroundColor: "#FF546B",
              padding: 10,
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 16 }}>Save</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
  },
});
