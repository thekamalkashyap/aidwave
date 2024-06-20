import {
  View,
  Text,
  Image,
  ImageStyle,
  ViewStyle,
  TextStyle,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { router } from "expo-router";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import {
  responsiveWidth,
  responsiveHeight,
} from "react-native-responsive-dimensions";
import { onboardingSwiperDataType } from "@/types/global";
import { onboardingSwiperData } from "@/data/onboardingSwiperData";

export default function OnBoardingScreen() {
  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={onboardingSwiperData}
      onDone={() => {
        router.push("/login");
      }}
      onSkip={() => {
        router.push("/login");
      }}
      renderNextButton={() => (
        <View style={$buttonStyle}>
          <Text style={$buttonText}>Next</Text>
        </View>
      )}
      renderDoneButton={() => (
        <View style={$buttonStyle}>
          <Text style={$buttonText}>Done</Text>
        </View>
      )}
      showSkipButton={false}
      dotStyle={$dotStyle}
      bottomButton={true}
      activeDotStyle={$activeDotStyle}
    />
  );
}

const renderItem = ({ item }: { item: onboardingSwiperDataType }) => (
  <View style={$container}>
    <Image source={item.image} style={$imageStyle} />
    <Text style={$titleText}>{item.title}</Text>
    <View style={{ marginTop: 15 }}>
      {item.description.map((desc, index) => (
        <Text key={index} style={$descText}>
          {desc}
        </Text>
      ))}
    </View>
  </View>
);

const $container: ViewStyle = {
  flex: 1,
  paddingHorizontal: 16,
  alignItems: "center",
  justifyContent: "center",
};

const $imageStyle: ImageStyle = {
  width: responsiveWidth(60),
  height: responsiveWidth(60),
  marginBottom: 30,
};

const $titleText: TextStyle = {
  fontFamily: "spaceGroteskBold",
  fontSize: hp("3.5%"),
  textAlign: "center",
};

const $descText: TextStyle = {
  fontSize: hp("2%"),
  color: "#575757",
  textAlign: "center",
  fontFamily: "spaceGroteskRegular",
  marginVertical: 5,
};

const $buttonStyle: ViewStyle = {
  backgroundColor: "#2467EC",
  width: responsiveWidth(88),
  height: responsiveHeight(5.5),
  alignSelf: "center",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 5,
  marginVertical: 20,
};

const $buttonText: TextStyle = {
  color: "white",
  textAlign: "center",
  fontFamily: "spaceGroteskBold",
};

const $dotStyle: ViewStyle = {
  backgroundColor: "#C6C7CC",
  width: responsiveWidth(2.5),
  height: responsiveWidth(2.5),
  borderRadius: 5,
  marginHorizontal: 5,
};

const $activeDotStyle: ViewStyle = {
  backgroundColor: "#2467EC",
  width: responsiveWidth(2.5),
  height: responsiveWidth(2.5),
  borderRadius: 5,
  marginHorizontal: 5,
};
