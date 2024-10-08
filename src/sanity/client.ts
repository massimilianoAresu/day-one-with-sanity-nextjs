import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "va9hvs58",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});