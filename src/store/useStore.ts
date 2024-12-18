import { create } from "zustand";
import { devtools } from "zustand/middleware";
import data from "../data.json";
import { TabKey, StoreState } from "../types";

const useStore = create<StoreState>()(
  devtools((set) => ({
    currentTabKey: Object.keys(data)[0] as TabKey,
    selectedData: data[Object.keys(data)[0] as TabKey],
    setCurrentTabKey: (key: TabKey) =>
      set(() => ({
        currentTabKey: key,
        selectedData: data[key],
      })),
    toggleVariableSelection: (categoryId, variableId) =>
      set((state) => {
        const updatedCategories = state.selectedData.sidebar.categories.map(
          (category) => {
            if (category.id === categoryId) {
              return {
                ...category,
                variables: category.variables.map((variable) =>
                  variable.id === variableId
                    ? { ...variable, isSelected: !variable.isSelected }
                    : variable
                ),
              };
            }
            return category;
          }
        );

        return {
          selectedData: {
            ...state.selectedData,
            sidebar: {
              ...state.selectedData.sidebar,
              categories: updatedCategories,
            },
          },
        };
      }),
  }))
);

export default useStore;
