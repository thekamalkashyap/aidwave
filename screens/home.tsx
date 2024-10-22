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
import { FontAwesome5, EvilIcons, AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView from "react-native-maps";

export default function HomeScreen() {
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
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "column",
            }}
          >
            <Text style={{ color: "#DD383F", fontSize: 24 }}>AB+</Text>
            <Text style={{ color: "#DD383F", fontSize: 20 }}>
              My Official Blood Type
            </Text>
          </View>
          <Image
            style={{
              height: 60,
              width: 60,
            }}
            source={require("@/assets/bloodpouch.png")}
          />
        </View>
      </ImageBackground>

      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          paddingHorizontal: 30,
        }}
      >
        <Text>Campaigns & Events</Text>
        <Text>See All</Text>
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

      <View style={{ paddingHorizontal: 30 }}>
        <Text style={{ fontSize: 20, fontWeight: 600 }}>
          What do you want ?
        </Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        {[...Array(4)].map((e, i) => (
          <View key={i}>
            <View
              style={{
                backgroundColor: "white",
                width: 60,
                height: 60,
                elevation: 3,
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
            </View>
            <Text style={{ fontSize: 12 }}>Donate Blood</Text>
          </View>
        ))}
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 30,
        }}
      >
        <Image
          style={{
            height: 150,
            width: "100%",
            objectFit: "cover",
            borderRadius: 10,
          }}
          source={require("@/assets/onboarding/Welcome_02.jpg")}
        />
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
