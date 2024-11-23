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
  Button,
} from "react-native";
import {
  AntDesign,
  Entypo,
  FontAwesome6,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { Link } from "expo-router";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function AppointmentScreen() {
  const [isDonate, setIsDonate] = useState(true);
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);
  const onChange = (_: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };
  const tabs = [
    {
      title: "Blood Bank",
      icon: <Entypo name="drop" size={24} color="#FF546B" />,
    },
    {
      title: "Campaigns",
      icon: <FontAwesome6 name="hands-praying" size={24} color="#FF546B" />,
    },
    {
      title: "Appointments",
      icon: <AntDesign name="calendar" size={24} color="#FF546B" />,
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("@/assets/images/hospital2.png")}
        style={{
          height: 200,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 30,
            paddingTop: 30,
          }}
        >
          <View>
            <Link href="/donate" asChild>
              <Ionicons
                name="arrow-back"
                size={24}
                color="black"
                style={{
                  backgroundColor: "white",
                  padding: 10,
                  borderRadius: 25,
                }}
              />
            </Link>
          </View>
          <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
            <MaterialIcons
              name="wifi-calling-3"
              size={24}
              color="black"
              style={{
                backgroundColor: "white",
                padding: 10,
                borderRadius: 25,
              }}
            />
          </View>
        </View>
        <View style={{ position: "absolute", bottom: 10, right: 10 }}>
          <Text
            style={{
              color: "white",
              backgroundColor: "#DD383F",
              width: 120,
              textAlign: "center",
              borderRadius: 10,
            }}
          >
            7,000 Donated
          </Text>
        </View>
      </ImageBackground>

      <View
        style={{
          padding: 15,
          borderRadius: 20,
          marginHorizontal: 30,
          borderWidth: 2,
          borderColor: "#D6D6D6",
        }}
      >
        <View style={{ gap: 8 }}>
          <Text style={{ fontSize: 20, fontWeight: 600 }}>
            Shalby MultiSpeciality Hospital Blood Bank
          </Text>

          <View
            style={{
              justifyContent: "space-evenly",
              flexDirection: "row",
              opacity: 0.7,
            }}
          >
            <Text style={{ flex: 5 }}>
              Sector 63, Sahibzada Ajit Singh Nagar Punjab, 16002
            </Text>
            <Text style={{ flex: 1 }}>12 km</Text>
          </View>
          <View>
            <Text>Blood Bank Stock:</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 10 }}>
            {["AB+", "A+", "O-", "B+"].map((e, i) => (
              <View
                style={{
                  backgroundColor: "#FFEDEF",
                  height: 50,
                  width: 50,
                  justifyContent: "flex-end",
                  borderRadius: 10,
                  elevation: 2,
                }}
              >
                <ImageBackground
                  imageStyle={{
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                  }}
                  source={require("@/assets/images/b1.png")}
                >
                  <Text
                    style={{
                      color: "white",
                      padding: 10,
                      textAlign: "center",
                    }}
                    key={i}
                  >
                    {e}
                  </Text>
                </ImageBackground>
              </View>
            ))}
          </View>
          <View>
            <Pressable
              style={{ backgroundColor: "red", padding: 10 }}
              onPress={() => setShow((prev) => !prev)}
            >
              <Text>hello</Text>
            </Pressable>

            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={"date"}
                is24Hour={true}
                onChange={onChange}
              />
            )}
          </View>
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
