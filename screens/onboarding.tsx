import {
  View,
  Text,
  Image,
  ImageStyle,
  ViewStyle,
  TextStyle,
  ImageBackground,
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
      renderDoneButton={() => (
        <View style={$buttonStyle}>
          <Text style={$buttonText}>Finish</Text>
        </View>
      )}
      showSkipButton={false}
      showNextButton={false}
      showPrevButton={false}
      dotStyle={$dotStyle}
      activeDotStyle={$activeDotStyle}
    />
  );
}

const renderItem = ({ item }: { item: onboardingSwiperDataType }) => (
  <View style={$container}>
    <View style={{ justifyContent: "flex-end", height: hp(50) }}>
      <Image source={item.image} style={$imageStyle} />
    </View>
    <ImageBackground
      source={item.background}
      resizeMode="cover"
      style={{
        width: "100%",
        paddingTop: item.paddingTop,
        height: hp(50),
        marginTop: item.marginTop,
      }}
    >
      <Text style={$titleText}>{item.title}</Text>
      <View style={{ marginTop: 15 }}>
        {item.description.map((desc, index) => (
          <Text key={index} style={$descText}>
            {desc}
          </Text>
        ))}
      </View>
    </ImageBackground>
  </View>
);

const $container: ViewStyle = {
  flex: 1,
  // paddingHorizontal: 16,
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#ffffff",
};

const $imageStyle: ImageStyle = {
  width: responsiveWidth(80),
  height: responsiveWidth(80),
  // marginBottom: 30,
};

const $titleText: TextStyle = {
  fontFamily: "spaceGroteskBold",
  fontSize: hp("3.5%"),
  textAlign: "center",
  color: "white",
};

const $descText: TextStyle = {
  fontSize: hp("2%"),
  color: "white",
  textAlign: "center",
  fontFamily: "spaceGroteskRegular",
  marginVertical: 5,
};

const $buttonStyle: ViewStyle = {
  borderWidth: 2,
  borderColor: "white",
  borderRadius: 5,
  paddingHorizontal: 25,
  paddingVertical: 5,
  marginTop: -40,
};

const $buttonText: TextStyle = {
  color: "white",
  textAlign: "center",
  fontFamily: "spaceGroteskBold",
};

const $dotStyle: ViewStyle = {
  backgroundColor: "#ffffff50",
  width: responsiveWidth(2.5),
  height: responsiveWidth(2.5),
  borderRadius: 5,
  marginHorizontal: 5,
};

const $activeDotStyle: ViewStyle = {
  backgroundColor: "#ffffff",
  width: responsiveWidth(2.5),
  height: responsiveWidth(2.5),
  borderRadius: 5,
  marginHorizontal: 5,
};
