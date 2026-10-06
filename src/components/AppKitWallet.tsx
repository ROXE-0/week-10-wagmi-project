import { useAppKit } from "@reown/appkit/react";
import { useAccount } from "wagmi";

function AppKitWallet() {
  const { open } = useAppKit();
  const { address, chain } = useAccount();

  return (
    <div>
      <button onClick={() => open()}>Connect Wallet with AppKit</button>

      {address && (
        <div>
          <p>Wallet: {address}</p>
          <p>Network: {chain?.name}</p>
          <p>Chain ID: {chain?.id}</p>
        </div>
      )}
    </div>
  );
}

export default AppKitWallet;
