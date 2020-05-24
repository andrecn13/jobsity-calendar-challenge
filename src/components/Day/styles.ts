import styled, { css } from 'styled-components';
import { shade, readableColor } from 'polished';

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

    &:hover {
      background-color: ${shade(0.05, '#FFF')};

      .add-reminder {
        opacity: 1;
      }
    }

    &.disabled {
      pointer-events: none;
      color: #e2e2e2;
    }
  }
`;

export const Label = styled.span`
  top: 10px;
  right: 10px;
  position: absolute;

  font-weight: 700;
  font-size: 0.9em;

  &.selected {
    color: #fff;
    background-color: #1f1deb;
    padding: 6px;
    border-radius: 50%;
  }
`;

interface EventProps {
  color: string;
}
export const Event = styled.span`
  display: block;
  padding: 2px 16px 2px 2px;
  color: white;
  height: auto;
  width: calc(100% - 60px);
  font-size: 0.85em;
  cursor: pointer;
  margin-bottom: 5px;

  background-color: ${(props) => props.color};
  color: ${(props) => readableColor(props.color || '#1f1deb')};
`;

export const Action = styled.span`
  border-radius: 50%;
  display: block;
  position: absolute;
  right: 8px;
  bottom: 10px;
  opacity: 0;
  cursor: pointer;

  transition: opacity 0.2s;

  svg {
    color: #1f1deb;
    height: 20px;
    width: 20px;
  }
`;
