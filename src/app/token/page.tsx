import type { Metadata } from "next";
import { TokenUtilityPage } from "@/components/token/token-utility-page";

export const metadata: Metadata = {
  title: "Token Utility | Stackstock",
  description:
    "STACKSTOCK membership tiers, Pack Printer, XP progression, and burn statistics. The token is optional — packs always work without it.",
};

export default function TokenPage() {
  return <TokenUtilityPage />;
}
