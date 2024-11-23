import { useState } from "react";
import { IoClose } from "react-icons/io5";
import TextInput from "../../../components/TextInput";
import Button from "../../../components/Button";
import useStore from "../../../store";
import Card from "../../../components/Card";
import { BsStars } from "react-icons/bs";
import { TbReload } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { IoInformationCircleSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

interface variable {
  name: string;
  hoverDescription: string;
}

interface VariableFormProps {
  onClose: () => void;
}

const VariableForm = ({ onClose }: VariableFormProps) => {
  const { selectedData, toggleVariableSelection } = useStore();
  const [hoveredVariable, setHoveredVariable] = useState<variable | null>(null);
  const [hoverTimer, setHoverTimer] = useState<number | null>(null);

  const handleMouseEnter = (variable: variable) => {
    const timer = setTimeout(() => {
      setHoveredVariable(variable);
    }, 1500);
    console.log(timer);
    setHoverTimer(timer);
  };

  const handleMouseLeave = () => {
    if (hoverTimer) {
      clearTimeout(hoverTimer);
      setHoverTimer(null);
      setHoveredVariable(null);
    }
  };

  const handleVariableClick = (categoryId: number, variableId: number) => {
    toggleVariableSelection(categoryId, variableId);
  };

  return (
    <>
      <div className="flex justify-between my-5 text-2xl">
        <span>{selectedData.sidebar.title}</span>
        <IoClose onClick={onClose} className="cursor-pointer" />
      </div>
      <div className="flex gap-2 my-5">
        <TextInput />
        <Button className=" flex items-center gap-1">
          <BsStars />
          Autofill
        </Button>
        <Button className="flex items-center gap-1 text-secondary-foreground border border-secondary">
          <TbReload />
          Rerun
        </Button>
      </div>
      <Card
        className={`!bg-background p-4 ${
          hoveredVariable ? "border-b-0 rounded-b-none" : ""
        } `}
      >
        <div className=" ">
          {selectedData.sidebar.categories.map((category) => (
            <div key={category.name} className="my-4">
              <span className="block font-medium">{category.name}</span>
              <div className="flex gap-5 mt-2 flex-wrap">
                {category.variables.map((variable) => (
                  <div
                    key={variable.name}
                    className={`rounded-2xl flex items-center gap-3 text-sm border border-border py-1 px-3 cursor-pointer ${
                      variable.isSelected
                        ? "border-secondary-foreground bg-[#282e16] text-secondary-foreground"
                        : ""
                    }`}
                    onMouseEnter={() => handleMouseEnter(variable)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() =>
                      handleVariableClick(category.id, variable.id)
                    }
                  >
                    <span> {variable.name}</span>
                    <div className="flex items-center gap-1">
                      {" "}
                      <BsStars />
                      {variable.isSelected ? <FaCheck /> : <FaPlus />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {hoveredVariable && (
        <Card
          className={`p-4 rounded-t-none transform transition-opacity duration-500 ${
            hoveredVariable ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <h4 className=" flex items-center gap-2 text-primary-foreground my-3">
            <span>{hoveredVariable.name}</span>
            <IoInformationCircleSharp />
          </h4>
          <p className="text-sm"> {hoveredVariable.hoverDescription}</p>
        </Card>
      )}

      <Card className="my-5 p-4 flex justify-between items-center">
        <h4 className="text-secondary-foreground">Primary Variables</h4>
        <div className="ml-auto border border-secondary-foreground rounded-xl p-1 px-2">
          <IoIosArrowDown />
        </div>
      </Card>
      <Card className="my-5 p-4 flex justify-between items-center">
        <h4 className="text-secondary-foreground">Secondary Variables</h4>
        <div className="ml-auto border border-secondary-foreground rounded-xl p-1 px-2">
          <IoIosArrowDown />
        </div>
      </Card>
    </>
  );
};

export default VariableForm;
