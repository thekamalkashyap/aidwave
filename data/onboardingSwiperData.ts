import { onboardingSwiperDataType } from "@/types/global";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export const onboardingSwiperData: onboardingSwiperDataType[] = [
  {
    title: "Donate Blood",
    description: ["Request & Donate", "Blood online in a few steps."],
    image: require("@/assets/onboarding/img1.png"),
    background: require("@/assets/images/v1.png"),
    marginTop: hp(11.5),
    paddingTop: hp(12),
  },
  {
    title: "Find Nearby Hospitals",
    description: ["GPS to locate Hospitals and", "Blood Banks."],
    image: require("@/assets/onboarding/img2.png"),
    background: require("@/assets/images/v2.png"),
    marginTop: hp(12.35),
    paddingTop: hp(12),
  },
  {
    title: "Emergency Services",
    description: ["Get a ambulane & medical ", "services in a few clicks"],
    image: require("@/assets/onboarding/img3.png"),
    background: require("@/assets/images/v3.png"),
    marginTop: hp(0),
    paddingTop: hp(19),
  },
];
