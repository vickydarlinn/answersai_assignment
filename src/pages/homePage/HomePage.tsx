import Button from "../../components/Button";
import useStore from "../../store";
import { FaHistory } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { BsLightningChargeFill } from "react-icons/bs";
import { BsStars } from "react-icons/bs";
import { HiDotsHorizontal } from "react-icons/hi";
import Card from "../../components/Card";
import { FaRegQuestionCircle } from "react-icons/fa";
import Graph from "../../components/Graph";
import Drawer from "../../components/Drawer";
import { useState } from "react";
import VariableForm from "./components/VariableForm";
import { IoIosArrowUp } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";

const HomePage = () => {
  const { selectedData } = useStore();
  const [isEditing, setIsEditing] = useState(true);

  const handleClose = () => {
    setIsEditing(false);
  };
  const showVariableForm = () => {
    setIsEditing(true);
  };

  return (
    <>
      <div className="p-5 ">
        <div className=" flex justify-between">
          <div className="flex items-center gap-3">
            <BsLightningChargeFill size={30} />
            <h2 className="font-bold text-3.5xl">{selectedData.title}</h2>
          </div>
          <div className="flex items-center gap-3 max-h-12">
            <div className="flex items-center justify-center bg-primary text-primary-foreground border border-border p-1 rounded ">
              <FaHistory size={20} />
            </div>
            <Button onClick={showVariableForm}>Edit Variables</Button>
            <div className="flex items-center justify-center bg-primary text-primary-foreground  border border-border p-1 rounded">
              <FiUpload size={20} />
            </div>
          </div>
        </div>

        <section className="text-secondary-foreground mt-10">
          <div className="flex items-center gap-3">
            <BsStars size={30} />
            <h3 className="font-semibold text-xl ">Best Scenario Results</h3>
            <div className="ml-auto border border-secondary-foreground rounded-xl p-1 px-2">
              <IoIosArrowUp />
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-4 text-sm">
            {selectedData.bestScenarioResults.map((res) => (
              <div className=" bg-secondary border-[0.5px] border-secondary p-4 rounded flex items-center justify-between gap-3">
                <p>{res.description}</p>
                <HiDotsHorizontal size={20} />
              </div>
            ))}
          </div>
        </section>

        <section className="flex gap-5 mt-10">
          <div className="w-2/3">
            <h3 className="mb-2 py-1 ">Graphs</h3>
            <Card className="flex flex-col p-4">
              <select
                className="self-end bg-background px-3 py-1 border border-border rounded text-primary-foreground text-sm outline-none mr-10"
                id="graph-select"
                value={"option1"}
              >
                <option value="option1">Unsatisfied Demand %</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
              <Graph
                data={selectedData.graphs.dataPoints}
                // data={selectedData.graphs.unsatisfiedDemand.dataPoints}
              />
            </Card>
          </div>
          <div className="w-1/3 flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <h3>Key Performance Indicator</h3>
              <div className="flex items-center text-sm border border-border px-3 py-1 rounded">
                <span>Variables</span>
                <FaPlus />
              </div>
            </div>
            <div className=" grid grid-cols-2 gap-5 h-full">
              {selectedData.keyPerformanceIndicators.map((data) => (
                <Card className="flex flex-col p-4 ">
                  <div className="flex items-center justify-between gap-1">
                    <h4 className="text-primary-foreground">{data.name}</h4>
                    <FaRegQuestionCircle />
                  </div>
                  <p className="text-xs mb-5 mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil iste cupiditate corporis harum
                  </p>
                  <span className="mt-auto  font-bold text-2xl text-primary-foreground self-end">
                    {data.value}
                  </span>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Drawer isOpen={isEditing} onClose={handleClose}>
        <VariableForm onClose={handleClose} />
      </Drawer>
    </>
  );
};

export default HomePage;
