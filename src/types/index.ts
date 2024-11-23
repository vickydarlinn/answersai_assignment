import data from "../data.json";

export type DataType = typeof data;

export type TabKey = keyof DataType;

export interface StoreState {
  currentTabKey: TabKey;
  selectedData: DataType[TabKey];
  setCurrentTabKey: (key: TabKey) => void;
  toggleVariableSelection: (categoryId: number, variableId: number) => void;
}
