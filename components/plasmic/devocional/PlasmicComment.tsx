// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gerk99sqDLqAi3xSqDhGNs
// Component: d1IXvSf1Cl
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Avatar from "../../Avatar"; // plasmic-import: Zx9A6DxqtB/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_devocional.module.css"; // plasmic-import: gerk99sqDLqAi3xSqDhGNs/projectcss
import sty from "./PlasmicComment.module.css"; // plasmic-import: d1IXvSf1Cl/css

export type PlasmicComment__VariantMembers = {};

export type PlasmicComment__VariantsArgs = {};
type VariantPropType = keyof PlasmicComment__VariantsArgs;
export const PlasmicComment__VariantProps = new Array<VariantPropType>();

export type PlasmicComment__ArgsType = {
  author?: React.ReactNode;
  text?: React.ReactNode;
  avatar?: React.ReactNode;
};

type ArgPropType = keyof PlasmicComment__ArgsType;
export const PlasmicComment__ArgProps = new Array<ArgPropType>(
  "author",
  "text",
  "avatar"
);

export type PlasmicComment__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultCommentProps {
  author?: React.ReactNode;
  text?: React.ReactNode;
  avatar?: React.ReactNode;
  className?: string;
}

function PlasmicComment__RenderFunc(props: {
  variants: PlasmicComment__VariantsArgs;
  args: PlasmicComment__ArgsType;
  overrides: PlasmicComment__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      {true ? (
        <div className={classNames(projectcss.all, sty.freeBox___2R5Mz)}>
          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__hbMc)}>
              {p.renderPlasmicSlot({
                defaultContents: (
                  <Avatar
                    className={classNames("__wab_instance", sty.avatar__oBhXi)}
                  />
                ),

                value: args.avatar
              })}
            </div>
          ) : null}
        </div>
      ) : null}
      {true ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__hQf0)}
        >
          <div className={classNames(projectcss.all, sty.freeBox__wm0Dy)}>
            {p.renderPlasmicSlot({
              defaultContents: "Discípulo X",
              value: args.author,
              className: classNames(sty.slotTargetAuthor)
            })}
          </div>

          <div className={classNames(projectcss.all, sty.freeBox__g8Trr)}>
            {p.renderPlasmicSlot({
              defaultContents:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the ",
              value: args.text
            })}
          </div>
        </p.Stack>
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicComment__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicComment__VariantsArgs;
    args?: PlasmicComment__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicComment__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicComment__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicComment__ArgProps,
          internalVariantPropNames: PlasmicComment__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicComment__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicComment";
  } else {
    func.displayName = `PlasmicComment.${nodeName}`;
  }
  return func;
}

export const PlasmicComment = Object.assign(
  // Top-level PlasmicComment renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicComment
    internalVariantProps: PlasmicComment__VariantProps,
    internalArgProps: PlasmicComment__ArgProps
  }
);

export default PlasmicComment;
/* prettier-ignore-end */