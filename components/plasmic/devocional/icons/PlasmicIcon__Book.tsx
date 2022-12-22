// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BookIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BookIcon(props: BookIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "plasmic-default__svg plasmic_default__all plasmic_default__svg NewPage__svg__e6Vmp"
      )}
      role={"img"}
      height={"1em"}
      width={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"1.5"}
        d={
          "M19.25 5.75a1 1 0 00-1-1H14a2 2 0 00-2 2v12.5l.828-.828a4 4 0 012.829-1.172h2.593a1 1 0 001-1V5.75zm-14.5 0a1 1 0 011-1H10a2 2 0 012 2v12.5l-.828-.828a4 4 0 00-2.829-1.172H5.75a1 1 0 01-1-1V5.75z"
        }
      ></path>
    </svg>
  );
}

export default BookIcon;
/* prettier-ignore-end */
