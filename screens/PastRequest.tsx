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
  ScrollView,
} from "react-native";
import { FontAwesome5, EvilIcons, AntDesign, Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PastRequestScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ gap: 20 }}>
        <View style={{ flexDirection: "row", gap: 20 }}>
          <Entypo name="arrow-long-left" size={24} color="#FF546B" />
          <Text style={{ fontSize: 18, fontWeight: 600 }}>Past Request</Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            paddingHorizontal: 30,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: "auto",
              backgroundColor: "#FFEDEF",
              flexDirection: "row",
              elevation: 4,
              borderRadius: 20,
            }}
          >
            <Pressable
              style={{
                // backgroundColor: "#FF546B",
                paddingVertical: 10,
                paddingHorizontal: 50,
                borderRadius: 20,
              }}
            >
              <Text>Pending</Text>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: "#FF546B",
                paddingVertical: 10,
                paddingHorizontal: 50,
                borderRadius: 20,
              }}
            >
              <Text>Fulfilled</Text>
            </Pressable>
          </View>
        </View>
        {[...Array(5)].map((_, i) => (
          <View
            key={i}
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              borderWidth: 2,
              borderRadius: 10,
              borderColor: "#D9D9D9",
              marginTop: 10,
              marginHorizontal: 15,
              padding: 20,
            }}
          >
            <View style={{ gap: 6, flex: 2 }}>
              <Text>Request ID: #DF32SA</Text>
              <Text>Date: 28-Aug-2024</Text>
              <Text>Blood Requested: AB+</Text>
              <Text>Status: Fulfilled</Text>
            </View>
            <View style={{ gap: 6, flex: 1 }}>
              <Text>🏥 Hospital</Text>
              <Text>Gian Sagar Hospital Rajpura, Punjab</Text>
              <Pressable
                style={{
                  backgroundColor: "#DD383F",
                  padding: 4,
                  borderRadius: 4,
                }}
              >
                <Text style={{ color: "white", textAlign: "center" }}>
                  View
                </Text>
              </Pressable>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
