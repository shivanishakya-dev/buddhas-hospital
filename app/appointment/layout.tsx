import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description: "Schedule your visit with our specialists easily through our online appointment system.",
};

export default function AppointmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
