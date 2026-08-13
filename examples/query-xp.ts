/**
 * Query a wallet's XP profile.
 *
 * XP is awarded only after a stock purchase settles on-chain — failed and
 * refunded openings never earn XP, so these numbers are proof of settled volume.
 */
import { StackStockClient, NotDeployedError } from "@stackstock/sdk";

const client = new StackStockClient({ chain: "robinhood" });

async function main() {
  const wallet = "0x0000000000000000000000000000000000000001";

  const [profile, benefits] = await Promise.all([
    client.xp.profileOf(wallet),
    client.membership.benefitsOf(wallet),
  ]);

  console.log(`Level ${profile.level} (${benefits.tierName})`);
  console.log(`  lifetime XP: ${profile.lifetimeXP}`);
  console.log(`  season XP:   ${profile.seasonXP}`);
  console.log(`  streak:      ${profile.dailyStreak} days`);
  console.log(`  XP rate:     ${benefits.xpMultiplierBps / 10_000}x`);
  console.log(`  prestige:    ${profile.prestigeCount}`);
}

main().catch((error) => {
  if (error instanceof NotDeployedError) console.log(error.message);
  else throw error;
});
