import { SvgIcon } from "@mui/material";
import React, { memo } from "react";

const ArrowDoneIcon = ({ props }) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="m18 7-1.41-1.41-6.34 6.34 1.41 1.41zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12zM.41 13.41 6 19l1.41-1.41L1.83 12z"></path>
    </SvgIcon>
  );
};

export default memo(ArrowDoneIcon);
