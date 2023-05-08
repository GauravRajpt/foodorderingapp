import React from "react";

export default function ShimmerUI() {
  return (
    <div className="flex flex-wrap m-3 justify-center">
      {Array(15)
        .fill("")
        .map((e) => {
          return (
            <div className="">
              <div className="w-56 border m-2 h-64 shadow-lg rounded-md"></div>
            </div>
          );
        })}
    </div>
  );
}
