import { onboardingSwiperDataType } from "@/types/global";

export const onboardingSwiperData: onboardingSwiperDataType[] = [
  {
    title: "Personalize Your Profile",
    description: [
      "Create a profile that stands out. Upload a picture, add a bio, and set your display name.",
      "Let others know a bit about you!",
    ],
    image: require("@/assets/onboarding/intro1.png"),
  },
  {
    title: "Connect and Start Chatting",
    description: [
      "Start connecting with friends and discover new conversations.",
      "Your voice matters in Echoistic!",
    ],
    image: require("@/assets/onboarding/intro2.png"),
  },
  {
    title: "Discover Features",
    description: [
      "Explore the unique features Echoistic offers. Customize your chat themes and use voice notes.",
      "Discover how Echoistic can enhance your conversations.",
    ],
    image: require("@/assets/onboarding/intro3.png"),
  },
];
