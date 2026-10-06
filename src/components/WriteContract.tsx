import { useState } from "react";
import { useWriteContract } from "wagmi";
import {
  SIMPLE_STORAGE_ADDRESS,
  SIMPLE_STORAGE_ABI,
} from "../contracts/contract";

function WriteContract() {
  const [number, setNumber] = useState("");

  const { writeContract, isPending } = useWriteContract();

  return (
    <div>
      <h3>Write Contract</h3>

      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <button
        disabled={!number || isPending}
        onClick={() =>
          writeContract({
            address: SIMPLE_STORAGE_ADDRESS,
            abi: SIMPLE_STORAGE_ABI,
            functionName: "setNumber",
            args: [BigInt(number)],
          })
        }
      >
        {isPending ? "Confirming..." : "Set Number"}
      </button>
    </div>
  );
}

export default WriteContract;
