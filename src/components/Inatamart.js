import { useState } from "react";

export const Section = ({
  title,
  discreption,
  isVisible,
  setIsvisible,
  setIshide,
}) => {
  return (
    <div className="border-solid border-2 border-black-100 shadow-lg m-3 rounded-md">
      <h3 className=" font-bold  text-xl ">{title}</h3>
      {isVisible ? (
        <button className="m-2 border" onClick={() => setIshide()}>
          hide
        </button>
      ) : (
        <button className="border m-2" onClick={() => setIsvisible()}>
          show
        </button>
      )}

      {isVisible && <p>{discreption}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleconfig, setVisiblecongig] = useState("");
  return (
    <div>
      <Section
        isVisible={visibleconfig == "about"}
        setIsvisible={() => setVisiblecongig("about")}
        setIshide={() => setVisiblecongig("")}
        title={"About"}
        discreption={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      />
      <Section
        isVisible={visibleconfig == "team"}
        setIsvisible={() => setVisiblecongig("team")}
        setIshide={() => setVisiblecongig("")}
        title={"Team"}
        discreption={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      />
      <Section
        isVisible={visibleconfig == "services"}
        setIsvisible={() => setVisiblecongig("services")}
        setIshide={() => setVisiblecongig("")}
        title={"Services"}
        discreption={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      />
    </div>
  );
};
export default Instamart;
