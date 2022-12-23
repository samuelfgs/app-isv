import { DataProvider, registerComponent } from "@plasmicapp/host";
import { usePlasmicQueryData } from "@plasmicapp/query";
import { createClient } from "@supabase/supabase-js";
import { FilterOperator } from "./types"
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
)

export interface Filter {
  column: string,
  operator: FilterOperator,
  value: any
}

interface SupabaseProps {
  key?: string;
  table: string;
  filters: Filter[];
  children: React.ReactNode;
  name?: string;
  order?: string;
  ascending: boolean;
}

export function SupabaseFetcher(props: SupabaseProps) {
  const { key, name, table, filters, children, order, ascending } = props;
  const { data, error } = usePlasmicQueryData(() => table ? JSON.stringify([
    table, filters, order, ascending
  ]) : null, async () => {
    let query = supabase.from(table).select();
    if (Array.isArray(filters)) {
      for (const filter of filters) {
        query = query.filter(filter.column, filter.operator, filter.value)
      }
    }
    if (order) {
      query = query.order(order, { ascending })
    }
    const { data, error } = await query;
    if (error !== null) {
      throw new Error(error.message);
    }
    return data;
  });

  if (error) {
    return <div>{error.message}</div>
  }
  return <DataProvider data={data} name={name ?? key ?? "supabase"}>
    {children}
  </DataProvider>
}

export function registerSupabase() {
  registerComponent(SupabaseFetcher, {
    name: "SupabaseFetcher",
    providesData: true,
    props: {
      table: "string",
      filters: "object",
      children: "slot",
      name: "string",
      key: "string",
      order: "string",
      ascending: "boolean",
    },
    importPath: "./components/supabase/supabase"
  })
}