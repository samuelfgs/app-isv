
import * as React from 'react';
import { DataProvider, PlasmicCanvasHost, registerComponent } from '@plasmicapp/host';
import { usePlasmicQueryData } from '@plasmicapp/query';
import { registerTextArea } from '../components/code-components/TextArea';
import { registerAll as registerAntD } from '../components/code-components/Antd';
export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}
import "@plasmicpkgs/antd/dist/antd.css";
import { registerSupabase } from '../components/supabase/supabase';

export const Fetcher = (props: any) => {
  const { data, error } = usePlasmicQueryData(props.endpoint, async () => {
    return await (await fetch(`/api/bible/${props.endpoint}/`)).json();
  });
  return <DataProvider data={data} name={props.name ?? "fetchedData"}>
    {props.children}
  </DataProvider>
}

registerComponent(Fetcher, {
  name: "Fetcher",
  providesData: true,
  props: {
    endpoint: "string",
    children: "slot",
    name: "string",
  },
  importPath: "./pages/plasmic-host"
});

registerTextArea();
registerAntD();
registerSupabase();