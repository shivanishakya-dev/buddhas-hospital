import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Specialized Medical Services",
  description: "Explore our wide range of medical departments, from Cardiology to Neurology, equipped with the latest technology.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
