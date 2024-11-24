import data from "../data.json";

export type DataType = typeof data;

export type TabKey = keyof DataType;

export interface StoreState {
  currentTabKey: TabKey;
  selectedData: DataType[TabKey];
  setCurrentTabKey: (key: TabKey) => void;
  toggleVariableSelection: (categoryId: number, variableId: number) => void;
}

export interface AuthState {
  user: null | User;
  setUser: (user: User) => void;
  logout: () => void;
}

export interface User {
  displayName: string;
  email: string;
}
