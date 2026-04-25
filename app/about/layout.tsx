import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Compassionate Care",
  description: "Learn more about the mission, history, and values of Buddha's Hospital, where we combine advanced medical technology with human compassion.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
