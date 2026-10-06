import { usePrivy } from "@privy-io/react-auth";
import AppKitWallet from "./components/AppKitWallet";
import ReadContract from "./components/ReadContract";
import WriteContract from "./components/WriteContract";
function App() {
  const { login, logout, authenticated, user } = usePrivy();

  return (
    <div>
      <h1>Web3 Wallet Project</h1>
      <hr />
      <ReadContract />

      <hr />
      <WriteContract />

      <h2>Privy</h2>

      {!authenticated ? (
        <button onClick={login}>Connect with Privy</button>
      ) : (
        <div>
          <p>Privy wallet connected!</p>
          <p>User ID: {user?.id}</p>

          <button onClick={logout}>Disconnect Privy</button>
        </div>
      )}

      <hr />

      <h2>AppKit + wagmi</h2>

      <AppKitWallet />
    </div>
  );
}

export default App;
