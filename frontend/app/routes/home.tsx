import Welcome from "~/welcome";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Legal Assistant Document Search Portal" },
    { name: "description", content: "Search Legal Documents" },
  ];
}

export default function Home() {
  return <Welcome />;
}
