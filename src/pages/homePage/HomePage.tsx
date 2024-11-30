import { useState } from "react";

import { useStore } from "../../store";

import Button from "../../components/Button";
import Card from "../../components/Card";
import Graph from "../../components/Graph";
import Drawer from "../../components/Drawer";
import VariableForm from "./components/VariableForm";

import { IoIosArrowUp } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { FaHistory } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { BsLightningChargeFill } from "react-icons/bs";
import { FaRegQuestionCircle } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";

const HomePage = () => {
  const { selectedData } = useStore();
  const [isEditing, setIsEditing] = useState(false);

  const handleClose = () => {
    setIsEditing(false);
  };
  const showVariableForm = () => {
    setIsEditing(true);
  };

  return (
    <>
      <div className="p-8 ">
        <div className=" flex justify-between font-roobert ">
          <div className=" flex  items-center gap-3 font-bold text-3.5xl">
            <BsLightningChargeFill size={30} />
            <h2 className=" ">{selectedData.title}</h2>
          </div>
          <div className="flex items-center gap-3 max-h-12">
            <div className="flex items-center justify-center bg-primary  border border-border p-[9px] rounded text-[#B9B9B9] ">
              <FaHistory size={20} />
            </div>
            <Button
              className="hidden sm:flex font-medium px-[10px] py-[7px]"
              onClick={showVariableForm}
            >
              Edit Variables
            </Button>
            <div className=" sm:hidden flex items-center justify-center bg-primary text-primary-foreground  border border-border p-1 rounded">
              <FaEdit size={20} />
            </div>
            <div className="flex items-center justify-center bg-primary  text-[#B9B9B9]  border border-border p-[9px] rounded">
              <FiUpload size={20} />
            </div>
          </div>
        </div>

        <section className="text-[#DCFF7FFD] mt-10">
          <div className="flex items-center gap-3 text-2xl font-semibold">
            <BsStars size={18} />
            <h3 className=" ">Best Scenario Results</h3>
            <div className="ml-auto border border-[#C8E972] rounded-[56px]  px-[10px] py-[5px]">
              <IoIosArrowUp />
            </div>
          </div>
          <div className="flex flex-col gap-6 mt-6">
            {selectedData.bestScenarioResults.map((res) => (
              <div
                key={res.id}
                className=" bg-[#CCFF0005] border-[0.5px] border-[#C8E972] py-[15px] px-[24px] rounded-md flex items-center justify-between gap-3  text-[#B3E237] font-medium text-base"
              >
                <p>{res.description}</p>
                <HiDotsHorizontal size={20} />
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col xl:flex-row gap-5 mt-10 ">
          <div className="xl:w-3/5 flex flex-col">
            <h3 className="mb-2 py-1 font-roobert font-semibold text-2xl ">
              Graphs
            </h3>
            <Card className="flex flex-col flex-1 justify-evenly p-4">
              <select
                className="self-end  px-3 py-1 border border-border rounded text-primary-foreground text-sm outline-none mr-10 bg-[#18181A80]"
                id="graph-select"
                value={"option1"}
              >
                <option value="option1">Unsatisfied Demand %</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
              <Graph data={selectedData.graphs.dataPoints} />
            </Card>
          </div>
          <div className="xl:w-2/5 flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <h3 className="py-1 font-roobert font-semibold text-2xl ">
                Key Performance Indicator
              </h3>
              <div className="flex items-center text-sm border border-border px-3 py-1 rounded gap-1">
                <span>Variables</span>
                <FaPlus />
              </div>
            </div>
            <div className=" grid sm:grid-cols-2 gap-5 h-full">
              {selectedData.keyPerformanceIndicators.map((data) => (
                <Card key={data.id} className="flex flex-col p-[30px] ">
                  <div className="flex items-center justify-between gap-1">
                    <h4 className="text-primary-foreground font-medium text-lg">
                      {data.name}
                    </h4>
                    <FaRegQuestionCircle />
                  </div>
                  <p className="text-xs mb-5 mt-3 font-light text-[#BBBBBB]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil iste cupiditate corporis harum
                  </p>
                  <span className="mt-auto  font-bold text-3.5xl font-roobert text-primary-foreground self-end">
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
