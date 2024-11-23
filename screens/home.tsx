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
import { FontAwesome5, EvilIcons, AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView from "react-native-maps";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { Link, LinkProps } from "expo-router";

export default function HomeScreen() {
  const whatDoYOuWant = [
    {
      title: "Donate Blood",
      src: require("@/assets/images/bloodpouch.png"),
      link: "/donate",
    },
    {
      title: "Medicine",
      src: require("@/assets/images/tablets.png"),
      link: "/donate",
    },
    {
      title: "Lab Tests",
      src: require("@/assets/images/bloodtest.png"),
      link: "/donate",
    },
    {
      title: "Subscriptions",
      src: require("@/assets/images/calendar.png"),
      link: "/donate",
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ gap: 20 }}>
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
            <View
              style={{ flexDirection: "row", gap: 20, alignItems: "center" }}
            >
              <FontAwesome5 name="bell" size={24} color="white" />
              <Image
                style={{
                  height: 40,
                  width: 40,
                  backgroundColor: "white",
                  borderRadius: 50,
                }}
                source={require("@/assets/images/profile.png")}
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
                height: 60,
                width: 60,
              }}
              source={require("@/assets/images/firstaid.png")}
            />
          </View>
        </View>

        <View style={{ paddingHorizontal: 30 }}>
          <Text style={{ fontSize: 20, fontWeight: 600 }}>
            What do you want ?
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          {whatDoYOuWant.map((e, i) => (
            <Link key={i} href={e.link as LinkProps["href"]} asChild>
              <Pressable style={{ gap: 10, alignItems: "center" }}>
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
                    source={e.src}
                  />
                </View>
                <Text style={{ fontSize: 12 }}>{e.title}</Text>
              </Pressable>
            </Link>
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
              // objectFit: "cover",
              objectFit: "contain",
              borderRadius: 10,
            }}
            source={require("@/assets/images/ad1.png")}
          />
        </View>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            paddingHorizontal: 30,
          }}
        >
          <Text>Services</Text>
          <Text>See All</Text>
        </View>
        <View
          style={{
            paddingHorizontal: 30,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <ImageBackground
            source={require("@/assets/images/s1.png")}
            style={{
              height: wp(40),
              width: wp(40),
              // flexDirection: "row",
              padding: 10,
            }}
            imageStyle={{ borderRadius: 10 }}
          >
            <View style={{ marginTop: 15 }}>
              <Text style={{ fontSize: 18, fontWeight: 600, color: "white" }}>
                Blood Test
              </Text>
              <Text style={{ fontSize: 14, color: "white" }}>
                available at the comfort of your home
              </Text>
            </View>
            <Text
              style={{
                fontSize: 11,
                color: "black",
                paddingHorizontal: 10,
                paddingVertical: 5,
                backgroundColor: "#FCD8D8",
                borderBottomLeftRadius: 20,
                position: "absolute",
                top: 0,
                right: 0,
              }}
            >
              @ Just ₹629 Only
            </Text>
            <Pressable
              style={{
                width: 100,
                position: "absolute",
                bottom: 10,
                right: 10,
              }}
            >
              <LinearGradient
                end={{ x: 1, y: 0.2 }}
                colors={["#F6A9A9", "#C64747"]}
                style={{ paddingVertical: 4, borderRadius: 20 }}
              >
                <Text style={{ color: "white", textAlign: "center" }}>
                  Book Now
                </Text>
              </LinearGradient>
            </Pressable>
          </ImageBackground>
          <ImageBackground
            source={require("@/assets/images/s2.png")}
            style={{
              height: wp(40),
              width: wp(40),
              // flexDirection: "row",
              padding: 10,
            }}
            imageStyle={{ borderRadius: 10 }}
          >
            <View style={{ marginTop: 15 }}>
              <Text style={{ fontSize: 18, fontWeight: 600, color: "white" }}>
                Donate Blood
              </Text>
              <Text style={{ fontSize: 14, color: "white" }}>
                at our Nearest Campaign.
              </Text>
            </View>
            <Text
              style={{
                fontSize: 11,
                color: "black",
                paddingHorizontal: 10,
                paddingVertical: 5,
                backgroundColor: "#FCD8D8",
                borderBottomLeftRadius: 20,
                position: "absolute",
                top: 0,
                right: 0,
              }}
            >
              Help us Save Lives.
            </Text>
            <Pressable
              style={{
                width: 100,
                position: "absolute",
                bottom: 10,
                right: 10,
              }}
            >
              <LinearGradient
                end={{ x: 1, y: 0.2 }}
                colors={["#F6A9A9", "#C64747"]}
                style={{ paddingVertical: 4, borderRadius: 20 }}
              >
                <Text style={{ color: "white", textAlign: "center" }}>
                  Book Now
                </Text>
              </LinearGradient>
            </Pressable>
          </ImageBackground>
        </View>
        <View
          style={{
            backgroundColor: "#FFEDEF",
            paddingVertical: 10,
            paddingHorizontal: 20,
            marginTop: 10,
            elevation: 7,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "column",
              flex: 3,
              gap: 10,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: 600 }}>
              Get Medicine Refill Every Month
            </Text>
            <Text style={{ fontSize: 14, opacity: 0.7 }}>
              Subscribe and Schedule next Deliveries
            </Text>
            <Text style={{ fontSize: 14, opacity: 0.7 }}>
              Subscribe for 6 months and get one month free
            </Text>
            <View
              style={{
                width: "100%",
                alignItems: "flex-start",
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
                objectFit: "contain",
              }}
              source={require("@/assets/images/calendar.png")}
            />
          </View>
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
