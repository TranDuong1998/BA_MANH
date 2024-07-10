import { SvgIcon } from "@mui/material";
import React, { memo } from "react";

const ScheduleIcon = ({ props }) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 16H5V10h14zM9 14H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm-8 4H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2z"></path>
    </SvgIcon>
  );
};

export default memo(ScheduleIcon);