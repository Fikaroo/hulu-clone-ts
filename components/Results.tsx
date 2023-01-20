import React from "react";
import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";
import { MovieType } from "../types";

const Results = ({ results }: { results: MovieType[] }) => {
  return (
    <FlipMove className="grid flex-wrap justify-center grid-cols-1 p-2 px-5 my-10 md:grid-cols-2 xl:grid-cols-3 3xl:flex">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  );
};

export default Results;
