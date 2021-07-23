import styled from '@emotion/styled';
import chevronDown from 'assets/chevron-down-solid.svg';
import { breakpoints } from 'breakpoints';

export const FiltersComponent = styled.div`
  display: flex;
  flex-direction: column;
  ${breakpoints.desktop} {
    flex-direction: row;
  }
`;

export const Control = styled.span`
  display: block;
  margin: 0 0 16px;
  width: 100%;
  & > label {
    display: block;
    font-weight: 600;
    margin-bottom: 8px;
  }
  ${breakpoints.desktop} {
    min-width: 200px;
    width: auto;
    margin-left: 24px;
    &:first-of-type {
      margin-left: 0;
    }
  }
`;

export const Input = styled.input`
  border-radius: 4px;
  border: 1px #758ba0 solid;
  color: ${({ theme }) => theme.contrastColor};
  display: block;
  font-size: 16px;
  line-height: 1em;
  padding: 12px 10px;
  width: 100%;
`;

export const Select = styled.select`
  appearance: none;
  background: #fff url(${chevronDown}) no-repeat 94% center;
  background-size: 0.8em;
  border-radius: 4px;
  border: 1px #758ba0 solid;
  display: block;
  font-size: 16px;
  line-height: 1.13em;
  padding: 12px 32px 12px 10px;
  position: relative;
  width: 100%;
`;
