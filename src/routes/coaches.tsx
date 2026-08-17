import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/coaches")({
  beforeLoad: () => {
    throw redirect({
      to: "/team",
    });
  },
  component: () => null,
});
