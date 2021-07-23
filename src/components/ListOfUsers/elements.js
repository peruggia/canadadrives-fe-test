import styled from '@emotion/styled';
import { breakpoints } from 'breakpoints';

export const List = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  background-color: ${({ theme }) => theme.fade};
  border-radius: 8px;
  padding: 15px 15px;
  display: flex;
  margin-bottom: 16px;
  display: flex;
  box-shadow: ${({ theme }) => theme.shadow};
  border: ${({ theme }) => theme.border};
`;

export const Avatar = styled.img`
  border-radius: 100%;
  width: 80px;
  height: 80px;
  margin-right: 16px;

  ${breakpoints.desktop} {
    width: 50px;
    height: 50px;
  }
`;

export const Info = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;

  ${breakpoints.desktop} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Names = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
