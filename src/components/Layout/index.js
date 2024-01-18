import React from 'react';
import { Typography } from 'antd';

import { StyledLayout, StyledHeader, StyledContent } from './styled';

const { Title } = Typography;

const AppLayout = ({ children }) => (
    <StyledLayout>
      <StyledHeader>
        <Title level={3}>Weather App</Title>
      </StyledHeader>
      <StyledContent>
        {children}
      </StyledContent>
    </StyledLayout>
  );

export default AppLayout;