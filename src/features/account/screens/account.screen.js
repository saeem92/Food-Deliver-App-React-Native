import React from "react";

import { Spacer } from "../../../components/spacer/spacer.component";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  Title,
} from "../components/account.styles";
import { colors } from "../../../infrastructure/theme/colors";

export const AccountScreen = ({ navigation }) => {
    return (
      <AccountBackground>
        <AccountCover />
        <Title>Meals To Go</Title>
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