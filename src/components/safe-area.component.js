// We have created this for our safe area view to style it and create some default and easy consistency when we use safeareaview in our app

import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components/native";


export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  {/* ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}; important: UNDO THIS COMMENT IF APP BREAKS ON ANDROID.*/ }
   {
    /* This above margin-top: ${StatusBar.currentHeight}px; is causing an error is iOS so we will fix it */
    /* Here we are using a variable which is statusbar.currentheight & if it has a value then add margin-top statusbar.current height this means we are only applying a margin top if statusbar.current height exist or has a value*/
  }
`;
// IN the above SafeArea we have created a const component SafeArea to style our SafeArea we are doing by using styled-components that we have imported and installed.

// We have used reference variable here for statusbar.currentHeight as we cannot write it normally because we are writing it in a weird template.
