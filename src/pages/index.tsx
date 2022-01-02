import { DashboardLayout } from 'components/layouts/dashboardLayout';
import { NextPageWithLayout } from 'models/common';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledText = styled.h3`
  ${tw`text-30`};
`;

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <p className="text-2xl text-center text-primary-500">text</p>
      <StyledText>ssss</StyledText>
    </div>
  );
};

Home.Layout = DashboardLayout;

export default Home;
