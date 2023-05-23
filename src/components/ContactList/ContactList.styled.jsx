import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 10px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

export const ListBtnDel = styled.button`
  width: 30px;
  padding: 3px;
  border-radius: 5px;
  border: none;
  background-color: ${p => p.theme.colors.accentLight};
  transition: all 0.2s ease-in-out;
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.accentDark};
    color: #fff;
    box-shadow: -2px -2px 5px #fff,
      2px 2px 5px ${p => p.theme.colors.accentDark};
    svg {
      fill: #fff;
      stroke: #fff;
    }
  }
`;
