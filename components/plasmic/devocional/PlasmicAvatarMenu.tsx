// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gerk99sqDLqAi3xSqDhGNs
// Component: pyA9tk4uHk
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
import { Dropdown } from "../../code-components/Antd"; // plasmic-import: 4bYxzjh232/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_devocional.module.css"; // plasmic-import: gerk99sqDLqAi3xSqDhGNs/projectcss
import sty from "./PlasmicAvatarMenu.module.css"; // plasmic-import: pyA9tk4uHk/css

import UserIcon from "./icons/PlasmicIcon__User"; // plasmic-import: JCI1jingh/icon

export type PlasmicAvatarMenu__VariantMembers = {};

export type PlasmicAvatarMenu__VariantsArgs = {};
type VariantPropType = keyof PlasmicAvatarMenu__VariantsArgs;
export const PlasmicAvatarMenu__VariantProps = new Array<VariantPropType>();

export type PlasmicAvatarMenu__ArgsType = {
  url?: string;
};

type ArgPropType = keyof PlasmicAvatarMenu__ArgsType;
export const PlasmicAvatarMenu__ArgProps = new Array<ArgPropType>("url");

export type PlasmicAvatarMenu__OverridesType = {
  root?: p.Flex<"div">;
  antdDropdown?: p.Flex<typeof Dropdown>;
  img?: p.Flex<typeof p.PlasmicImg>;
  svg?: p.Flex<"svg">;
  logout?: p.Flex<"div">;
};

export interface DefaultAvatarMenuProps {
  url?: string;
  className?: string;
}

function PlasmicAvatarMenu__RenderFunc(props: {
  variants: PlasmicAvatarMenu__VariantsArgs;
  args: PlasmicAvatarMenu__ArgsType;
  overrides: PlasmicAvatarMenu__OverridesType;

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
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <Dropdown
        data-plasmic-name={"antdDropdown"}
        data-plasmic-override={overrides.antdDropdown}
        className={classNames("__wab_instance", sty.antdDropdown)}
        menu={
          <div
            data-plasmic-name={"logout"}
            data-plasmic-override={overrides.logout}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.logout
            )}
          >
            {(() => {
              try {
                return "Sair";
              } catch (e) {
                if (e instanceof TypeError) {
                  return "Enter some text";
                }
                throw e;
              }
            })()}
          </div>
        }
        trigger={"click" as const}
      >
        {true ? (
          <div className={classNames(projectcss.all, sty.freeBox__ox6QR)}>
            {(() => {
              try {
                return $props.url !== undefined;
              } catch (e) {
                if (e instanceof TypeError) {
                  return true;
                }
                throw e;
              }
            })() ? (
              <p.PlasmicImg
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(sty.img)}
                displayHeight={"100%" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"100%" as const}
                loading={"lazy" as const}
                src={(() => {
                  try {
                    return $props.url;
                  } catch (e) {
                    if (e instanceof TypeError) {
                      return undefined;
                    }
                    throw e;
                  }
                })()}
              />
            ) : null}
            {(() => {
              try {
                return $props.url === undefined;
              } catch (e) {
                if (e instanceof TypeError) {
                  return true;
                }
                throw e;
              }
            })() ? (
              <div className={classNames(projectcss.all, sty.freeBox___4L42W)}>
                {true ? (
                  <UserIcon
                    data-plasmic-name={"svg"}
                    data-plasmic-override={overrides.svg}
                    className={classNames(projectcss.all, sty.svg)}
                    role={"img"}
                  />
                ) : null}
              </div>
            ) : null}
          </div>
        ) : null}
      </Dropdown>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "antdDropdown", "img", "svg", "logout"],
  antdDropdown: ["antdDropdown", "img", "svg", "logout"],
  img: ["img"],
  svg: ["svg"],
  logout: ["logout"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  antdDropdown: typeof Dropdown;
  img: typeof p.PlasmicImg;
  svg: "svg";
  logout: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAvatarMenu__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAvatarMenu__VariantsArgs;
    args?: PlasmicAvatarMenu__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAvatarMenu__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicAvatarMenu__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicAvatarMenu__ArgProps,
          internalVariantPropNames: PlasmicAvatarMenu__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicAvatarMenu__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAvatarMenu";
  } else {
    func.displayName = `PlasmicAvatarMenu.${nodeName}`;
  }
  return func;
}

export const PlasmicAvatarMenu = Object.assign(
  // Top-level PlasmicAvatarMenu renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    antdDropdown: makeNodeComponent("antdDropdown"),
    img: makeNodeComponent("img"),
    svg: makeNodeComponent("svg"),
    logout: makeNodeComponent("logout"),

    // Metadata about props expected for PlasmicAvatarMenu
    internalVariantProps: PlasmicAvatarMenu__VariantProps,
    internalArgProps: PlasmicAvatarMenu__ArgProps
  }
);

export default PlasmicAvatarMenu;
/* prettier-ignore-end */
