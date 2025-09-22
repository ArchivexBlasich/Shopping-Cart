import { useOutletContext } from "react-router";
import type { DashboardContextType } from "../../../models/DashboardContextType.model"; 

export function useDashboardContext() {
  return useOutletContext<DashboardContextType>();
}