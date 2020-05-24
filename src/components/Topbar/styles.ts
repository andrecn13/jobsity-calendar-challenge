import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;

  button {
    background-color: #fff;
    border: 1px solid #d1d1d1;
    border-radius: 50%;
    box-shadow: none;
    padding: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    &:first-child {
      border-radius: 4px;
      font-size: 0.9em;
      font-weight: 700;

      svg {
        margin-right: 6px;
      }
    }

    & + button {
      margin-left: 10px;
    }

    &:hover {
      background-color: ${shade(0.05, '#FFF')};
    }

    svg {
      color: #1f1deb;
    }
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div > strong {
    font-size: 1.4em;
  }
`;
