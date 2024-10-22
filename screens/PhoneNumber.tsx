import {
  View,
  ViewStyle,
  Text,
  TextStyle,
  Image,
  ImageStyle,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useRef, useState } from "react";
import { router } from "expo-router";

export default function PhoneNumberScreen() {
  const [code, setCode] = useState(new Array(4).fill(""));

  const inputs = useRef<any>([...Array(4)].map(() => React.createRef()));

  const handleInput = (text: any, index: any) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 3) {
      inputs.current[index + 1].current.focus();
    }

    if (text === "" && index > 0) {
      inputs.current[index - 1].current.focus();
    }
  };

  const handleSumbit = async () => {
    const otp = code.join("");
  };

  return (
    <View style={$container}>
      <Text style={$headerText}>Verify Number</Text>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <View
          style={{
            width: 80,
            height: 60,
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, marginLeft: -6 }}>+91</Text>
        </View>
        <View style={{ flex: 1 }}>
          <TextInput style={$inputBox} />
        </View>
      </View>
      <View style={{ marginTop: 10 }}>
        <TouchableOpacity
          style={$buttonStyle}
          onPress={() => router.push("/verify")}
        >
          <Text style={$buttonText}>Get OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
