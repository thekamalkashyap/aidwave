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
} from "react-native";
import {
  Entypo,
  Fontisto,
  Ionicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { router } from "expo-router";
import api from "@/api";
import { useLoginStore } from "@/stores/login";
import { observer } from "mobx-react-lite";

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
    router.push("/(tabs)");
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
        <Image
          style={$signInImage}
          source={require("@/assets/signin/signin.png")}
        />
        <Text style={$welcomeText}>Welcome Back!</Text>
        <Text style={$learningText}>Login to your of Echoistic account.</Text>
        <View style={$inputContainer}>
          <View>
            <TextInput
              style={$input}
              keyboardType="email-address"
              value={userInfo.email}
              placeholder="info@echoistic.com"
              onChangeText={(value) =>
                setUserInfo({ ...userInfo, email: value })
              }
            />
            <Fontisto
              style={{ position: "absolute", left: 26, top: 17.8 }}
              name="email"
              size={20}
              color={"#A1A1A1"}
            />
            <View style={{ marginTop: 15 }}>
              <TextInput
                style={$input}
                keyboardType="default"
                secureTextEntry={!isPasswordVisible}
                defaultValue=""
                placeholder="********"
                onChangeText={handlePasswordValidation}
              />
              <TouchableOpacity
                style={$visibleIcon}
                onPress={() => setPasswordVisible(!isPasswordVisible)}
              >
                {isPasswordVisible ? (
                  <Ionicons
                    name="eye-off-outline"
                    size={23}
                    color={"#747474"}
                  />
                ) : (
                  <Ionicons name="eye-outline" size={23} color={"#747474"} />
                )}
              </TouchableOpacity>
              <SimpleLineIcons
                style={$icon2}
                name="lock"
                size={20}
                color={"#A1A1A1"}
              />
            </View>
            {error && (
              <View style={$errorContainer}>
                <Entypo name="cross" size={18} color={"red"} />
                <Text style={{ color: "red", fontSize: 11, marginTop: -1 }}>
                  {error}
                </Text>
              </View>
            )}
            <TouchableOpacity
              onPress={() => router.push("/(routes)/forgot-password")}
            >
              <Text style={$forgotSection}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                padding: 16,
                borderRadius: 8,
                marginHorizontal: 16,
                backgroundColor: "#2467EC",
                marginTop: 15,
              }}
              onPress={handleSignIn}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: 16,
                  fontFamily: "spaceGroteskSemiBold",
                }}
              >
                Sign In
              </Text>
            </TouchableOpacity>

            <View style={$redirect}>
              <Text style={{ fontSize: 18, fontFamily: "spaceGroteskBold" }}>
                Don't have an account?
              </Text>
              <TouchableOpacity onPress={() => router.push("/(routes)/signup")}>
                <Text style={$redirectText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default observer(LoginScreen);

const $ScrollViewStyle: ViewStyle = {
  flexGrow: 1,
  justifyContent: "center",
};

const $signInImage: ImageStyle = {
  width: "60%",
  height: 250,
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
