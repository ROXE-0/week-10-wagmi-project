import { createAppKit } from "@reown/appkit/react";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { mainnet, sepolia } from "@reown/appkit/networks";

const projectId = import.meta.env.VITE_REOWN_PROJECT_ID;

export const networks = [mainnet, sepolia];

export const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
});

createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: [mainnet, sepolia],
  metadata: {
    name: "Week 10 Wagmi Project",
    description: "Learning AppKit and wagmi",
    url: window.location.origin,
    icons: ["https://avatars.githubusercontent.com/u/179229932"],
  },
});

export const config = wagmiAdapter.wagmiConfig;
