import {
  View,
  ViewStyle,
  Text,
  TextInput,
  TextStyle,
  Image,
  ImageStyle,
  TouchableOpacity,
  ScrollView,
  Pressable,
  ImageBackground,
} from "react-native";

import { router } from "expo-router";
import api from "@/api";
import { useLoginStore } from "@/stores/login";
import { observer } from "mobx-react-lite";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

function LoginScreen() {
  const {
    isPasswordVisible,
    setPasswordVisible,
    userInfo,
    setUserInfo,
    error,
    setError,
  } = useLoginStore();

  const handlePasswordValidation = (value: string) => {
    const password = value;
    const passwordSpecialCharacter = /(?=.*[!@#$&*])/;
    const passwordOneNumber = /(?=.*[0-9])/;
    const passwordSixValue = /(?=.{6,})/;

    if (!passwordSpecialCharacter.test(password)) {
      setError("Write at least one special character");
      setUserInfo({ ...userInfo, password: "" });
    } else if (!passwordOneNumber.test(password)) {
      setError("Write at least one number");
      setUserInfo({ ...userInfo, password: "" });
    } else if (!passwordSixValue.test(password)) {
      setError("Write at least 6 characters");
      setUserInfo({ ...userInfo, password: "" });
    } else {
      setError("");
      setUserInfo({ ...userInfo, password: value });
    }
  };

  const handleSignIn = async () => {
    // router.push("/(tabs)");
    // await api
    //   .post("/login", {
    //     email: userInfo.email,
    //     password: userInfo.password,
    //   })
    //   .then(async (res) => {
    //     // await AsyncStorage.setItem("access_token", res?.data?.accessToken);
    //     // await AsyncStorage.setItem("refresh_token", res?.data?.refreshToken);
    //     router.push("/(tabs)");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={$ScrollViewStyle}>
        <ImageBackground
          source={require("@/assets/images/v4.png")}
          style={{
            height: hp(50),
            justifyContent: "center",
          }}
        >
          <Image style={$signInImage} source={require("@/assets/login.png")} />
        </ImageBackground>
        <View
          style={{
            height: hp(50),
            alignItems: "center",
            justifyContent: "center",
            gap: 30,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 30,
              fontFamily: "spaceGroteskBold",
            }}
          >
            Login & Register
          </Text>
          <Pressable
            style={{
              borderWidth: 2,
              borderRadius: 50,
              padding: 10,
              width: wp(70),
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("@/assets/google.png")}
              style={{ height: 30, width: 30, marginRight: 10 }}
            />
            <Text
              style={{
                fontSize: 24,
                fontFamily: "spaceGroteskBold",
                marginTop: -3,
              }}
            >
              Sign in with Google
            </Text>
          </Pressable>
          <Pressable
            style={{
              borderWidth: 2,
              borderRadius: 50,
              padding: 10,
              width: wp(70),
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("@/assets/facebook.png")}
              style={{ height: 30, width: 30, marginRight: 10 }}
            />
            <Text
              style={{
                fontSize: 24,
                fontFamily: "spaceGroteskBold",
                marginTop: -3,
              }}
            >
              Sign in with Google
            </Text>
          </Pressable>
          <Pressable
            onPress={() => router.push("/phone")}
            style={{
              borderWidth: 2,
              borderRadius: 50,
              padding: 10,
              width: wp(70),
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 24, fontFamily: "spaceGroteskBold" }}>
              Phone Number
            </Text>
          </Pressable>
          <View>
            <Text style={$learningText}>Aidwave Pvt. Ltd.</Text>
            <Text style={[$learningText, { opacity: 0.5, fontSize: 14 }]}>
              1.0.1 version
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default observer(LoginScreen);

const $ScrollViewStyle: ViewStyle = {
  flexGrow: 1,
};

const $signInImage: ImageStyle = {
  width: "100%",
  alignSelf: "center",
  marginBottom: 20,
};

const $welcomeText: TextStyle = {
  textAlign: "center",
  fontSize: 24,
  fontFamily: "spaceGroteskBold",
};

const $learningText: TextStyle = {
  textAlign: "center",
  color: "#575757",
  fontSize: 15,
  marginTop: 5,
};

const $inputContainer: ViewStyle = {
  marginHorizontal: 16,
  marginTop: 30,
  rowGap: 30,
};

const $input: TextStyle = {
  height: 55,
  marginHorizontal: 16,
  borderRadius: 8,
  paddingLeft: 40,
  fontSize: 16,
  backgroundColor: "white",
  color: "#A1A1A1",
};

const $visibleIcon: ViewStyle = {
  position: "absolute",
  right: 30,
  top: 15,
};

const $icon2: TextStyle = {
  position: "absolute",
  left: 23,
  top: 17.8,
  marginTop: -2,
};

const $forgotSection: TextStyle = {
  marginHorizontal: 16,
  textAlign: "right",
  fontSize: 16,
  marginTop: 10,
  fontFamily: "spaceGroteskSemiBold",
};

const $redirect: ViewStyle = {
  flexDirection: "row",
  marginHorizontal: 16,
  justifyContent: "center",
  marginBottom: 20,
  marginTop: 20,
};
const $redirectText: TextStyle = {
  fontSize: 18,
  fontFamily: "spaceGroteskSemiBold",
  color: "#2467EC",
  marginLeft: 5,
};

const $errorContainer: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  marginHorizontal: 16,
  position: "absolute",
  top: 140,
};
