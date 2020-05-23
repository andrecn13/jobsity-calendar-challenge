import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;

  margin: 0;
  padding: 0;
  width: 100%;
  border-bottom: 1px solid #d1d1d1;

  div {
    position: relative;
    height: 120px;
    flex: 1;

    border-right: 1px solid #d1d1d1;
    cursor: pointer;

    &.disabled {
      pointer-events: none;
      color: #e2e2e2;
    }

    &.selected {
      span {
        color: #fff;
        background-color: #1f1deb;
        padding: 6px;
        border-radius: 50%;
      }
    }

    span {
      top: 10px;
      right: 10px;
      position: absolute;

      font-weight: 700;
      font-size: 0.9em;
    }
  }
`;
