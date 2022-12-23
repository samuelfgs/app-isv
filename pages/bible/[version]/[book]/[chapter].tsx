// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import * as ph from "@plasmicapp/host";

import { PlasmicBible } from "../../../../components/plasmic/devocional/PlasmicBible";
import { useRouter } from "next/router";
import { GetStaticPropsContext, NextPageContext } from "next";

function Bible() {
  return (
    <ph.PageParamsProvider
      params={useRouter()?.query}
      query={useRouter()?.query}
    >
      <PlasmicBible />
    </ph.PageParamsProvider>
  );
}

export async function getStaticPaths() {
  const books = await (await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/bible/books/`)).json() as { abbrev: string, name: string, chapters: number }[];
  const versions = ["nvi"];
  return {
    paths: versions.flatMap(version => 
      books.flatMap((book) => Array.from(Array(book.chapters).keys())
        .flatMap(chapter => (
          {
            params: {
              version,
              book: book.abbrev,
              chapter: `${chapter + 1}`
            }
          }
        )
      ))
    ),
    fallback: "blocking", // can also be true or 'blocking'
  }
}
export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    // Passed to the page component as props
    props: { 
      ...context.params
    },
  }
}
export default Bible;
