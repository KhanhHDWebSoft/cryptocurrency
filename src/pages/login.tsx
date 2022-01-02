import * as React from 'react';
import { Card } from 'antd';
import { Form } from 'antd';
import CustomButton from 'components/form/CustomButton';
import CustomInput from 'components/form/CustomInput';
import CustomFormItem from 'components/form/CustomFormItem';

export default function Login() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Card className="w-1/4 h-auto">
        <Form>
          <CustomFormItem label="Username" name="username">
            <CustomInput />
          </CustomFormItem>
          <CustomFormItem
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <CustomInput type="password" />
          </CustomFormItem>
          <CustomButton className="mx-auto w-full">Login</CustomButton>
        </Form>
      </Card>
    </div>
  );
}
