import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Expert Doctors",
  description: "Meet our team of world-class specialists dedicated to providing the best medical care and treatment.",
};

export default function DoctorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
