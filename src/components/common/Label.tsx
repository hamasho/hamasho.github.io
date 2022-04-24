import { FC } from "react";
import { css } from "@emotion/react";
import { colors } from "../../styles/constants";

const Label: FC<{ text: string }> = ({ text }) => {
  return (
    <div
      css={css({
        borderRadius: "100px",
        overflow: "hidden",
        backgroundColor: colors.blue,
        color: "white",
        fontSize: "0.75rem",
        fontWeight: "bold",
        padding: "4px 8px",
      })}
    >
      {text}
    </div>
  );
};

export default Label;
