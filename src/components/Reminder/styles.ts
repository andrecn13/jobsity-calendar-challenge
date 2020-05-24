import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    width: 70%;

    .github-picker {
      span div span {
        width: 100%;
        height: 100%;
      }
    }

    > div {
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;

      span {
        font-weight: 700;
      }

      div {
        display: flex;
        align-items: center;

        input {
          width: 50px;
        }
      }

      input {
        border: 1px solid rgba(34, 36, 38, 0.15);
        font-weight: 300;
        padding: 8px 12px;
        border-radius: 4px;

        &.has-error {
          border: 1px solid #dd1313;
        }
      }
    }

    button {
      width: 120px;
      padding: 10px 0;
      background-color: #1f1deb;
      border: none;
      box-shadow: none;
      color: #fff;
      border-radius: 4px;
      font-weight: bold;
      font-size: 0.9em;
    }
  }
`;
