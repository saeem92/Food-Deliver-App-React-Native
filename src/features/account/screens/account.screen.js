import React from "react";

import { Spacer } from "../../../components/spacer/spacer.component";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  Title,
  AnimationWrapper,
} from "../components/account.styles";
import { colors } from "../../../infrastructure/theme/colors";
import LottieView from "lottie-react-native";

export const AccountScreen = ({ navigation }) => {
    return (
      <AccountBackground>
        <AccountCover />
        <AnimationWrapper>
         <LottieView
           key="animation"
           autoPlay
           loop
           resizeMode="cover"
           source={require("../../../../assets/watermelon.json")}
         />
       </AnimationWrapper>
        <Title>Food Delivery App</Title>
        <AccountContainer>
          <AuthButton
            icon="lock-open-outline"
            color={colors.brand.primary}
            mode="contained"
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </AuthButton>
          <Spacer size="large">
            <AuthButton
              icon="email"
              color={colors.brand.primary}
              mode="contained"
              onPress={() => navigation.navigate("Register")}
            >
              Register
            </AuthButton>
          </Spacer>
        </AccountContainer>
      </AccountBackground>
    );
  };