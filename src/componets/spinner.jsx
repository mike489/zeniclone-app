import React from "react";
import { DotSpinner } from "@uiball/loaders";

export function CustomSpinner() {
  return (
    <div className="flex items-center justify-center w-full py-10">
      <DotSpinner size={50} speed={0.9} color="black" />
    </div>
  );
}
