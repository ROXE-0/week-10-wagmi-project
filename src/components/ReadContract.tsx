import { useReadContract } from "wagmi";
import {
  SIMPLE_STORAGE_ADDRESS,
  SIMPLE_STORAGE_ABI,
} from "../contracts/contract";

function ReadContract() {
  const { data, isLoading, error } = useReadContract({
    address: SIMPLE_STORAGE_ADDRESS,
    abi: SIMPLE_STORAGE_ABI,
    functionName: "getNumber",
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h3>Read Contract</h3>
      <p>Stored Number: {data?.toString()}</p>
    </div>
  );
}

export default ReadContract;
