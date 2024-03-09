import React from "react";
import styled, { css } from "styled-components";

interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "horizontal" | "vertical";
}

const Row: React.FC<RowProps> = styled.div<RowProps>`
  display: flex;
  ${(props) =>
    props.type === "horizontal" &&
    css`
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    `}
  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6;
    `}
`;

Row.defaultProps = {
  type: "vertical",
};

export default Row;
