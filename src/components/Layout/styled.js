import { Layout } from 'antd';
import styled from 'styled-components';

const { Header, Content } = Layout;

export const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

export const StyledHeader = styled(Header)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1890ff;
  padding-bottom: 10px;

  h3 {
    color: #fff;
  }
`;

export const StyledContent = styled(Content)`
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
