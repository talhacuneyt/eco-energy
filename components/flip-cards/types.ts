import React from "react";

export interface FlipCardProps {
  description: string;
  href: string;
  image: string;
  text: string | React.ReactNode;
  title: string;
}
