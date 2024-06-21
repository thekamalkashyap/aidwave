import {
  View,
  ViewStyle,
  Text,
  TextStyle,
  ScrollView,
  Image,
  ImageStyle,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import {
  AntDesign,
  Entypo,
  Fontisto,
  Ionicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { useState } from "react";
import { commonStyles } from "@/styles/common/common.styles";
import { router } from "expo-router";

export default function SignUpScreen() {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [buttonSpinner, setButtonSpinner] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [required, setRequired] = useState("");
  const [error, setError] = useState({
    password: "",
  });

  const handlePasswordValidation = (value: string) => {
    const password = value;
    const passwordSpecialCharacter = /(?=.*[!@#$&*])/;
    const passwordOneNumber = /(?=.*[0-9])/;
    const passwordSixValue = /(?=.{6,})/;

    if (!passwordSpecialCharacter.test(password)) {
      setError({
        ...error,
        password: "Write at least one special character",
      });
      setUserInfo({ ...userInfo, password: "" });
    } else if (!passwordOneNumber.test(password)) {
      setError({
        ...error,
        password: "Write at least one number",
      });
      setUserInfo({ ...userInfo, password: "" });
    } else if (!passwordSixValue.test(password)) {
      setError({
        ...error,
        password: "Write at least 6 characters",
      });
      setUserInfo({ ...userInfo, password: "" });
    } else {
      setError({
        ...error,
        password: "",
      });
      setUserInfo({ ...userInfo, password: value });
    }
  };

  const handleSignIn = async () => {
    router.push("/(routes)/verify");
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={$ScrollViewStyle}>
        <Image
          style={$signUpImage}
          source={require("@/assets/signin/signin.png")}
        />
        <Text style={$welcomeText}>Let's get started!</Text>
        <Text style={$learningText}>
          Create an account to Becodemy to get all features
        </Text>
        <View style={$inputContainer}>
          <View>
            <TextInput
              style={[$input, { paddingLeft: 40, marginBottom: -12 }]}
              keyboardType="default"
              value={userInfo.name}
              placeholder="shahriar sajeeb"
              onChangeText={(value) =>
                setUserInfo({ ...userInfo, name: value })
              }
            />
            <AntDesign
              style={{ position: "absolute", left: 26, top: 14 }}
              name="user"
              size={20}
              color={"#A1A1A1"}
            />
          </View>
          <View>
            <TextInput
              style={[$input, { paddingLeft: 40 }]}
              keyboardType="email-address"
              value={userInfo.email}
              placeholder="support@becodemy.com"
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
            {required && (
              <View style={$errorContainer}>
                <Entypo name="cross" size={18} color={"red"} />
              </View>
            )}
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
            {error.password && (
              <View style={[commonStyles.errorContainer, { top: 145 }]}>
                <Entypo name="cross" size={18} color={"red"} />
                <Text style={{ color: "red", fontSize: 11, marginTop: -1 }}>
                  {error.password}
                </Text>
              </View>
            )}

            <TouchableOpacity style={$buttonStyle} onPress={handleSignIn}>
              {buttonSpinner ? (
                <ActivityIndicator size="small" color={"white"} />
              ) : (
                <Text style={$buttonText}>Sign Up</Text>
              )}
            </TouchableOpacity>

            <View style={$redirect}>
              <Text style={{ fontSize: 18, fontFamily: "spaceGroteskBold" }}>
                Already have an account?
              </Text>
              <TouchableOpacity onPress={() => router.push("/(routes)/login")}>
                <Text style={$redirectText}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const $ScrollViewStyle: ViewStyle = {
  flexGrow: 1,
  justifyContent: "center",
};

const $signUpImage: ImageStyle = {
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

const $buttonStyle: ViewStyle = {
  padding: 16,
  borderRadius: 8,
  marginHorizontal: 16,
  backgroundColor: "#2467EC",
  marginTop: 15,
};

const $buttonText: TextStyle = {
  color: "white",
  textAlign: "center",
  fontSize: 16,
  fontFamily: "spaceGroteskBold",
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
