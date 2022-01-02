import { FormItemProps, Form } from 'antd';
import React, { memo } from 'react';
import tw from 'twin.macro';
import styled from '@emotion/styled';

const ItemStyle = styled(Form.Item)`
  &.ant-form-item {
    ${tw`block!`}
  }
`;

export default memo(function CustomFormItem({ children, ...rest }: FormItemProps) {
  return <ItemStyle {...rest}>{children}</ItemStyle>;
});
