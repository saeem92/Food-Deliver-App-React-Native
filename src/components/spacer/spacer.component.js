import React from "react";
import {View} from "react-native";
import styled from "styled-components/native";
// THIS IS OUR SPACER COMPONENT WE HAVE CREATED THIS TO ADD MARGIN INSIDE OUR CARD COMPONENT.
// WE ARE USING IT TO PUSH OUR ICON,OPENOW SVG AND CLOSED TEMPORARILY TEXT TO THE LEFT IN CARD COMPONENT WITHOUT USING ADDTIONAL INLINE STYLING WHICH WAS MAKING OUR CODE REDUNDANT.
// 



const TopSmall = styled.View`
margin-Top: ${(props) => props.theme.space[1]};
`;
// THE ABOVE CODE IS A STYLED-COMPONENT.

const TopMedium = styled.View`
margin-Top: ${(props) => props.theme.space[2]};
`;
// THE ABOVE CODE IS A STYLED-COMPONENT. and we are taking these props from sizes.js

const TopLarge = styled.View`
margin-Top: ${(props) => props.theme.space[3]};
`;
// THE ABOVE CODE IS A STYLED-COMPONENT. and we are taking these props from sizes.js

const LeftSmall = styled.View`
margin-left: ${(props) => props.theme.space[1]};
`;
// THE ABOVE CODE IS A STYLED-COMPONENT. and we are taking these props from sizes.js

const LeftMedium = styled.View`
margin-left: ${(props) => props.theme.space[2]};
`;
// THE ABOVE CODE IS A STYLED-COMPONENT. and we are taking these props from sizes.js

const LeftLarge = styled.View`
margin-left: ${(props) => props.theme.space[3]};
`;
// THE ABOVE CODE IS A STYLED-COMPONENT. and we are taking these props from sizes.js


export const Spacer = ({variant}) => {
    if(variant === "top.medium"){
        return<TopMedium />;
    }
    if(variant === "top.large"){
        return<TopLarge />;
    }
    if(variant === "left.small"){
        return<LeftSmall />;
    }
    if(variant ==="left.medium"){
        return<LeftMedium />;
    }
    if(variant ==="left.large"){
        return<LeftLarge />;
    }
     return <TopSmall />;
    };
