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

export default function SettingsScreen() {
  const links = [
    {
      title: "Edit Profile",
      icon: <FontAwesome name="user" size={24} color="#FF546B" />,
      url: "/edit-profile",
    },
    {
      title: "Edit Profile",
      icon: <FontAwesome name="user" size={24} color="#FF546B" />,
      url: "/edit-profile",
    },
    {
      title: "Edit Profile",
      icon: <FontAwesome name="user" size={24} color="#FF546B" />,
      url: "/edit-profile",
    },
    {
      title: "Edit Profile",
      icon: <FontAwesome name="user" size={24} color="#FF546B" />,
      url: "/edit-profile",
    },
    {
      title: "Edit Profile",
      icon: <FontAwesome name="user" size={24} color="#FF546B" />,
      url: "/edit-profile",
    },
    {
      title: "Edit Profile",
      icon: <FontAwesome name="user" size={24} color="#FF546B" />,
      url: "/edit-profile",
    },
    {
      title: "Edit Profile",
      icon: <FontAwesome name="user" size={24} color="#FF546B" />,
      url: "/edit-profile",
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            backgroundColor: "#FF546B",
            paddingHorizontal: 20,
            paddingTop: 15,
            paddingBottom: 100,
          }}
        >
          <View style={{ alignItems: "flex-end" }}>
            <Feather name="settings" size={24} color="white" />
          </View>
          <View style={{ alignItems: "center" }}>
            <Image
              style={{
                height: 150,
                width: 150,
                backgroundColor: "white",
                borderRadius: 150,
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
        <View
          style={{
            backgroundColor: "white",
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 10,
            marginHorizontal: 30,
            marginTop: -50,
            elevation: 5,
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          {[...Array(3)].map((e, i) => (
            <View
              key={i}
              style={{
                width: 100,
                height: 80,
                padding: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{
                  height: 40,
                  width: 40,
                }}
                source={require("@/assets/bloodpouch.png")}
              />
              <Text style={{ fontSize: 12 }}>Donate Blood</Text>
            </View>
          ))}
        </View>
        <View style={{ marginHorizontal: 30 }}>
          {links.map((link, index) => (
            <Pressable
              key={index}
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 18,
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  gap: 30,
                }}
              >
                {link.icon}
                <Text style={{ fontSize: 20, color: "#686868" }}>
                  {link.title}
                </Text>
              </View>
              <Entypo name="arrow-long-right" size={24} color="black" />
            </Pressable>
          ))}
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

const $container: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  padding: 20,
  paddingVertical: 80,
  backgroundColor: "#fff",
};

const $verifyImage: ImageStyle = {
  width: "60%",
  height: 250,
  alignSelf: "center",
  marginBottom: 20,
};

const $headerText: TextStyle = {
  fontSize: 22,
  fontWeight: "bold",
  marginBottom: 10,
};

const $subText: TextStyle = {
  fontSize: 16,
  color: "#666",
  marginBottom: 20,
  textAlign: "center",
};

const $inputContainer: ViewStyle = {
  flexDirection: "row",
  marginBottom: 20,
};

const $inputBox: TextStyle = {
  height: 60,
  borderWidth: 1,
  borderColor: "#ddd",
  textAlign: "center",
  marginRight: 10,
  borderRadius: 30,
  fontSize: 20,
};

const $loginLink: ViewStyle = {
  flexDirection: "row",
  marginTop: 30,
};

const $loginText: TextStyle = {
  color: "#3876EE",
  marginLeft: 5,
  fontSize: 16,
  fontFamily: "spaceGroteskBold",
};

const $backText: TextStyle = {
  fontSize: 16,
  fontFamily: "spaceGroteskBold",
};

const $buttonStyle: ViewStyle = {
  padding: 16,
  borderRadius: 30,
  marginHorizontal: 16,
  backgroundColor: "#FA304F",
  marginTop: 15,
  height: 60,
};

const $buttonText: TextStyle = {
  color: "white",
  textAlign: "center",
  fontSize: 16,
  fontFamily: "spaceGroteskBold",
};
