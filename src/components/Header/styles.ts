import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  background-color: #fff;

  div {
    padding: 10px 20px;
    border: 1px solid #d1d1d1;
    flex: 1;
    text-align: center;
    font-weight: 700;
    font-size: 0.9em;

    & + div {
      border-left: none;
    }
  }
`;
