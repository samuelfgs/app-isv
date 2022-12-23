// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gerk99sqDLqAi3xSqDhGNs
// Component: j6IfZ_mJCm
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
import Header from "../../Header"; // plasmic-import: VJAoJHfiRt/component
import AvatarMenu from "../../AvatarMenu"; // plasmic-import: pyA9tk4uHk/component
import SpaceForFixed from "../../SpaceForFixed"; // plasmic-import: b-yBAoSFVG/component
import Post from "../../Post"; // plasmic-import: az5Tv6-qkFR/component
import { TextArea } from "../../code-components/TextArea"; // plasmic-import: YiApBrkKpK/codeComponent
import Footer from "../../Footer"; // plasmic-import: 4xq6KX_FCQ/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_devocional.module.css"; // plasmic-import: gerk99sqDLqAi3xSqDhGNs/projectcss
import sty from "./PlasmicDevocional.module.css"; // plasmic-import: j6IfZ_mJCm/css

import SendIcon from "./icons/PlasmicIcon__Send"; // plasmic-import: SZMvTzr6S/icon

export type PlasmicDevocional__VariantMembers = {};

export type PlasmicDevocional__VariantsArgs = {};
type VariantPropType = keyof PlasmicDevocional__VariantsArgs;
export const PlasmicDevocional__VariantProps = new Array<VariantPropType>();

export type PlasmicDevocional__ArgsType = {
  months?: any;
};

type ArgPropType = keyof PlasmicDevocional__ArgsType;
export const PlasmicDevocional__ArgProps = new Array<ArgPropType>("months");

export type PlasmicDevocional__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  text?: p.Flex<"div">;
  post?: p.Flex<typeof Post>;
  textArea?: p.Flex<typeof TextArea>;
  svg?: p.Flex<"svg">;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultDevocionalProps {}

function PlasmicDevocional__RenderFunc(props: {
  variants: PlasmicDevocional__VariantsArgs;
  args: PlasmicDevocional__ArgsType;
  overrides: PlasmicDevocional__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          months: [
            "Janeiro",
            "Fevereiro",
            "Março",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Dezembro"
          ]
        },
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
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <SpaceForFixed
            className={classNames("__wab_instance", sty.spaceForFixed__bDiXp)}
            height={90 as const}
          />

          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            {(() => {
              try {
                return `${$ctx.params.day} de ${
                  $props.months[$ctx.params.month]
                } de ${$ctx.params.year}`;
              } catch (e) {
                if (e instanceof TypeError) {
                  return "Enter some text";
                }
                throw e;
              }
            })()}
          </div>

          <Post
            data-plasmic-name={"post"}
            data-plasmic-override={overrides.post}
            className={classNames("__wab_instance", sty.post)}
          />

          <SpaceForFixed
            className={classNames("__wab_instance", sty.spaceForFixed__wVqp)}
            height={110 as const}
          />

          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__fGvHx)}>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__hwW8S)}
              >
                <TextArea
                  data-plasmic-name={"textArea"}
                  data-plasmic-override={overrides.textArea}
                  className={classNames("__wab_instance", sty.textArea)}
                  placeholder={"Escreva um comentario" as const}
                  value={"" as const}
                />

                <SendIcon
                  data-plasmic-name={"svg"}
                  data-plasmic-override={overrides.svg}
                  className={classNames(projectcss.all, sty.svg)}
                  role={"img"}
                />
              </p.Stack>

              <Footer
                data-plasmic-name={"footer"}
                data-plasmic-override={overrides.footer}
                className={classNames("__wab_instance", sty.footer)}
              />
            </div>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "text", "post", "textArea", "svg", "footer"],
  header: ["header"],
  text: ["text"],
  post: ["post"],
  textArea: ["textArea"],
  svg: ["svg"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  text: "div";
  post: typeof Post;
  textArea: typeof TextArea;
  svg: "svg";
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDevocional__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDevocional__VariantsArgs;
    args?: PlasmicDevocional__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDevocional__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicDevocional__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicDevocional__ArgProps,
          internalVariantPropNames: PlasmicDevocional__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicDevocional__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDevocional";
  } else {
    func.displayName = `PlasmicDevocional.${nodeName}`;
  }
  return func;
}

export const PlasmicDevocional = Object.assign(
  // Top-level PlasmicDevocional renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    text: makeNodeComponent("text"),
    post: makeNodeComponent("post"),
    textArea: makeNodeComponent("textArea"),
    svg: makeNodeComponent("svg"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicDevocional
    internalVariantProps: PlasmicDevocional__VariantProps,
    internalArgProps: PlasmicDevocional__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicDevocional;
/* prettier-ignore-end */
