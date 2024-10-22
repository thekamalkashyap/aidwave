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
import { FontAwesome5, EvilIcons, AntDesign, Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DonateScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require("@/assets/images/h1.png")}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 30,
            paddingTop: 30,
          }}
        >
          <View>
            <Text style={{ color: "white", opacity: 0.7, fontSize: 20 }}>
              Welcome to Aidwave,
            </Text>
            <Text style={{ color: "white", fontSize: 20 }}>
              Hi, Gurpreet Kaur
            </Text>
          </View>
          <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
            <FontAwesome5 name="bell" size={24} color="white" />
            <Image
              style={{
                height: 40,
                width: 40,
                backgroundColor: "white",
                borderRadius: 50,
              }}
              source={require("@/assets/login.png")}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 30,
            marginTop: 10,
          }}
        >
          <EvilIcons name="location" size={30} color="white" />
          <View>
            <Text style={{ color: "white" }}>Locality:</Text>
            <Text style={{ color: "white" }}>
              Neelam Hospital Rajpura, 140401
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#FFEDEF",
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 20,
            marginHorizontal: 30,
            marginTop: 10,
            elevation: 7,
            flexDirection: "row-reverse",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "column",
              flex: 3,
              gap: 5,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: 600 }}>
              Blood Donation Campaign
            </Text>
            <Text style={{ fontSize: 14, opacity: 0.7 }}>
              Location: Neelam Hospital, Rajpura
            </Text>
            <Text style={{ fontSize: 14, opacity: 0.7 }}>
              Date: 28 Aug 2024, 10:00 AM
            </Text>
            <View
              style={{
                width: "100%",
                alignItems: "flex-end",
              }}
            >
              <Pressable
                style={{
                  backgroundColor: "#FF687C",
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 10,
                }}
              >
                <Text style={{ color: "white" }}>Register</Text>
              </Pressable>
            </View>
          </View>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Image
              style={{
                height: 80,
                width: 80,
              }}
              source={require("@/assets/bloodpouch.png")}
            />
          </View>
        </View>
      </ImageBackground>

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
              backgroundColor: "#FF546B",
              paddingVertical: 10,
              paddingHorizontal: 50,
              borderRadius: 20,
            }}
          >
            <Text>Donate blood</Text>
          </Pressable>
          <Pressable
            style={{
              //   backgroundColor: "#FF546B",
              paddingVertical: 10,
              paddingHorizontal: 50,
              borderRadius: 20,
            }}
          >
            <Text>Request blood</Text>
          </Pressable>
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        {[...Array(3)].map((e, i) => (
          <View key={i}>
            <View
              style={{
                // backgroundColor: "white",
                width: 100,
                height: 90,
                // elevation: 3,
                borderWidth: 1,
                borderColor: "#D6D6D6",
                padding: 10,
                borderRadius: 10,
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
          </View>
        ))}
      </View>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          paddingHorizontal: 30,
        }}
      >
        <Text>Request in Nearby Location:</Text>
        <View style={{ flexDirection: "row", gap: 6 }}>
          <Entypo name="map" size={18} color="#DD383F" />
          <Text style={{ color: "#DD383F" }}>Map</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          borderWidth: 2,
          borderRadius: 10,
          borderColor: "#828382",
          marginTop: 10,
          marginHorizontal: 20,
          padding: 20,
        }}
      >
        <View>
          <Image
            style={{
              height: 40,
              width: 40,
              backgroundColor: "white",
              borderRadius: 50,
            }}
            source={require("@/assets/login.png")}
          />
          <Text>12 km</Text>
        </View>
        <View style={{ gap: 6 }}>
          <Text>Neelam Hospital Blood Bank</Text>
          <Text>Rajpura, Punjab</Text>
          <Text>Blood Type Needed:</Text>
          <View style={{ flexDirection: "row", gap: 10, marginTop: 6 }}>
            {["AB+", "A+", "O-", "B+"].map((e, i) => (
              <Text
                style={{
                  color: "#DD383F",
                  backgroundColor: "#FFEDEF",
                  padding: 10,
                  borderRadius: 10,
                  elevation: 1,
                }}
                key={i}
              >
                {e}
              </Text>
            ))}
          </View>
        </View>
        <View style={{ justifyContent: "space-between" }}>
          <Text
            style={{
              backgroundColor: "#FFEDEF",
              color: "#DD383F",
              borderRadius: 4,
              padding: 4,
            }}
          >
            Urgent
          </Text>
          <Pressable
            style={{ backgroundColor: "#DD383F", padding: 4, borderRadius: 4 }}
          >
            <Text style={{ color: "white" }}>Donate</Text>
          </Pressable>
        </View>
      </View>
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
