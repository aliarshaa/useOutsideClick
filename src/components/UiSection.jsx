import { useRef, useState } from "react";
import useOutsideClick from "../hooks/useOutsideClick";

export default function UiSection() {
  const [openSectionOne, setOpenSectionOne] = useState(false);
  const [openSectionTwo, setOpenSectionTwo] = useState(false)


  return (
    <div className="justify-center items-center w-full relative flex gap-4">
      <SectionOne open={openSectionOne} setOpen={setOpenSectionOne} />
      <SectionTwo open={openSectionTwo} setOpen={setOpenSectionTwo} />
    </div>
  );
}

function SectionOne({ open, setOpen }) {
  const sectionOneRef = useRef();
  useOutsideClick(sectionOneRef, "sectionOne", () => setOpen(false));

  return (
    <div
      ref={sectionOneRef}
      className="bg-slate-400 justify-center items-center w-1/2 top[100%] z-10"
    >
      <h2
      id="sectionOne"
        onClick={() => setOpen(!open)}
        className="border border-solid border-black p-4 justify-center items-center cursor-pointer"
      >
        click here
      </h2>
      {open && (
        <div className="grid p-2 absolute bg-slate-300">
          <p className="grid justify-center items-center">you clicked!</p>
          <p className="grid justify-center items-center">
            click outside of the box to exit.
          </p>
        </div>
      )}
    </div>
  );
}

function SectionTwo({ open, setOpen }) {
  const sectionTwoRef = useRef();
  useOutsideClick(sectionTwoRef, "sectionTwo", () => setOpen(false));

  return (
    <div
    id="sectionTwo"
      ref={sectionTwoRef}
      className="bg-slate-400 justify-center items-center w-1/2 top[100%] z-10"
    >
      <h2
        onClick={() => setOpen(!open)}
        className="border border-solid border-black p-4 justify-center items-center cursor-pointer"
      >
        click here
      </h2>
      {open && (
        <div className="grid p-2 absolute bg-slate-300">
          <p className="grid justify-center items-center">you clicked!</p>
          <p className="grid justify-center items-center">
            click outside of the box to exit.
          </p>
        </div>
      )}
    </div>
  );
}