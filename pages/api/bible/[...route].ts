import type { NextApiRequest, NextApiResponse } from 'next'
import { json } from 'stream/consumers';

import nvi from "../../../data/nvi.json";

export interface BibleBook {
  abbrev: string;
  name: string;
  chapters: string[][];
}

const bible: Record<string, BibleBook[]> = {
  nvi: (nvi as BibleBook[])
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { route } = req.query;
  console.log("dale", "query")
  if (!Array.isArray(route)) {
    res.status(500).json({ error: "route is not an array" })
    return ;
  }
  if (route.length === 0) {
    res.status(500).json({ error: "route array is empty" })
    return ;
  }
  if (route[0] === "books") {
    const books = bible.nvi.map(book => ({
      abbrev: book.abbrev,
      name: book.name,
      chapters: book.chapters.length
    }));
    res.status(200).json(books);
    return ;
  }
  if (route.length !== 3) {
    res.status(500).json({ error: "route unexpected: [version, bookAbbrev, chapter]" })
    return ;
  }
  const [version, bookAbbrev, chapter] = route;
  if (!(version in bible)) {
    res.status(500).json({ error: `version not found: ${version}` })
    return ;
  }
  const book = bible[version].find(book => book.abbrev === bookAbbrev);
  if (!book) {
    res.status(500).json({ error: `book not found: ${bookAbbrev}`});
    return ;
  }

  if (isNaN(+chapter) || +chapter > book.chapters.length) {
    res.status(500).json({ error: `chapter not found: ${chapter} in book: ${bookAbbrev}`});
    return ;
  }
  
  res.status(200).json(book.chapters[+chapter-1]);
}

