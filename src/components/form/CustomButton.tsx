import { Button, ButtonProps } from 'antd';
import React, { memo } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledButton = styled(Button)`
  /* &.ant-btn {
    ${tw`text-white inline-block bg-firstColor p-4 font-medium cursor-pointer duration-150 hover:(bg-altColor)`}
  } */

  &.ant-btn {
    ${tw`fhd:(h-56 leading-30 text-25) leading-18 h-44 rounded-7 border-firstColor bg-firstColor hover:(bg-altColor border-altColor) text-white`}
  }
`;

export default memo(function CustomButton(props: ButtonProps) {
  return <StyledButton {...props} />;
});
