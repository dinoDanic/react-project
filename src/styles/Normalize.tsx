import { css, Global } from "@emotion/react";
import { normalize } from "@kodiui/kodiui";

const myStyle = css``;

export const Normalize = () => {
  return (
    <>
      <Global styles={normalize} />
      <Global styles={myStyle} />
    </>
  );
};
