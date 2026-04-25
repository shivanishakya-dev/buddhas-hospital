import { Heart, Brain, Bone, Activity, Stethoscope, Microscope } from "lucide-react";

export const departments = [
  {
    id: "cardiology",
    title: "Cardiology",
    description: "Expert care for your heart, from prevention to advanced surgical treatments.",
    icon: Heart,
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    id: "neurology",
    title: "Neurology",
    description: "Specialized treatment for brain, spine, and nervous system disorders.",
    icon: Brain,
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    id: "orthopedics",
    title: "Orthopedics",
    description: "Committed to restoring your mobility and strength with advanced bone care.",
    icon: Bone,
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    id: "pediatrics",
    title: "Pediatrics",
    description: "Compassionate and gentle healthcare for children of all ages.",
    icon: Activity,
    color: "text-green-500",
    bg: "bg-green-50",
  },
  {
    id: "general-medicine",
    title: "General Medicine",
    description: "Comprehensive primary care for all your general health concerns.",
    icon: Stethoscope,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    id: "diagnostics",
    title: "Advanced Diagnostics",
    description: "State-of-the-art laboratory and imaging services for accurate results.",
    icon: Microscope,
    color: "text-teal-500",
    bg: "bg-teal-50",
  },
];
