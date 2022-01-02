import { Input, InputProps } from 'antd';
import React, { memo } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledInput = styled(Input)`
  &.ant-input {
    ${tw`py-10! border-radius[8px] block`}
  }

  &.ant-input-affix-wrapper:focus,
  &.ant-input-affix-wrapper-focused,
  &.ant-input:focus,
  &.ant-input-focused {
    ${tw`border-firstColor! shadow-none`};
  }
`;

export default memo(function CustomInput(props: InputProps) {
  return <StyledInput {...props} />;
});
