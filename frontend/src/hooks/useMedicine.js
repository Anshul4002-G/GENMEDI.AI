import { useContext } from "react";
import { MedicineContext } from "../context/MedicineContext";

export function useMedicine() {
  const context = useContext(MedicineContext);
  if (!context) {
    throw new Error("useMedicine must be used within MedicineProvider");
  }
  return context;
}
