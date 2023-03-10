// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LikeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LikeIcon(props: LikeIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      xmlSpace={"preserve"}
      viewBox={"0 0 47 47"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M44.732 23.195l-4.528-.001a2.269 2.269 0 00-2.267 2.264v19.164a2.267 2.267 0 002.267 2.266h4.528A2.267 2.267 0 0047 44.622v-19.16a2.268 2.268 0 00-2.268-2.267zm-1.805 21.326a1.858 1.858 0 11-2.629-2.628 1.86 1.86 0 012.629 2.628zM29.078 9.795c.197-2.889.969-4.351 1.238-7.204C30.47.965 28.767.112 25.669.112c-3.098 0-4.298 2.773-4.648 3.718-.774 2.092 0 8.985 0 12.394 0 2.686-4.805 4.16-10.303 4.169C3.155 20.408 0 18.6 0 23.345c0 1.642 1.013 2.973 2.265 2.972-1.252 0-2.266 1.334-2.265 2.974 0 1.64 1.013 2.974 2.265 2.971C1.013 32.264.001 33.595 0 35.233c0 1.645 1.015 2.973 2.265 2.975-1.25-.002-2.265 1.33-2.264 2.975 0 1.643 1.013 2.972 2.264 2.972 0 0 3.219.003 15.429.003h16.671c.625 0 1.131-.507 1.132-1.134V25.82a1.125 1.125 0 00-.129-.524c-.001 0-6.833-7.523-6.29-15.501z"
        }
      ></path>
    </svg>
  );
}

export default LikeIcon;
/* prettier-ignore-end */
