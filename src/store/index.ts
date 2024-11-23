import { create } from "zustand";
import { devtools } from "zustand/middleware";
import data from "../data.json";

type DataType = typeof data;
type TabKey = keyof DataType;

interface StoreState {
  currentTabKey: TabKey;
  selectedData: DataType[TabKey];
  setCurrentTabKey: (key: TabKey) => void;
}

const useStore = create<StoreState>()(
  devtools((set) => ({
    currentTabKey: Object.keys(data)[0] as TabKey,
    selectedData: data[Object.keys(data)[0] as TabKey],
    setCurrentTabKey: (key: TabKey) =>
      set(() => ({
        currentTabKey: key,
        selectedData: data[key],
      })),
  }))
);

export default useStore;
