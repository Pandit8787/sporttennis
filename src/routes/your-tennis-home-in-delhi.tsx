import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/your-tennis-home-in-delhi")({
  beforeLoad: () => {
    throw redirect({
      to: "/home-to-all-tennis-players",
    });
  },
  component: () => null,
});
