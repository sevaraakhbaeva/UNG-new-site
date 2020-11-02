import React, { CSSProperties, FC } from "react";
import { SvgIcon } from "@material-ui/core";

interface VisionIconProp {
  style: CSSProperties;
  [key: string]: any;
}

const VisionIcon: FC<VisionIconProp> = ({ style, ...rest }) => {
  return (
    <SvgIcon style={{ ...style }} {...rest}>
      <svg
        width="22"
        height="16"
        viewBox="0 0 22 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.785706 7.99888C0.785706 7.99888 4.49999 0.570312 11 0.570312C17.5 0.570312 21.2143 7.99888 21.2143 7.99888C21.2143 7.99888 17.5 15.4275 11 15.4275C4.49999 15.4275 0.785706 7.99888 0.785706 7.99888Z"
          stroke="#191919"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11 10.7846C12.5385 10.7846 13.7857 9.53739 13.7857 7.99888C13.7857 6.46038 12.5385 5.21317 11 5.21317C9.46148 5.21317 8.21428 6.46038 8.21428 7.99888C8.21428 9.53739 9.46148 10.7846 11 10.7846Z"
          stroke="#191919"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

export default VisionIcon;
