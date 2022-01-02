import { DashboardLayout } from 'components/layouts/dashboardLayout';
import { NextPageWithLayout } from 'models/common';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledText = styled.h3`
  ${tw`text-30`};
`;

const News: NextPageWithLayout = () => {
  return (
    <div>
      <p className="text-2xl text-center text-primary-500">news</p>
      <StyledText>news</StyledText>
      <StyledText>news</StyledText>
      <StyledText>news</StyledText>
      <StyledText>news</StyledText>
    </div>
  );
};

News.Layout = DashboardLayout;

export default News;
