import React from "react";
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const SimplePagination = ({ onNext, onPrev, counter }) => {
  const [active, setActive] = React.useState(1);

  const next = () => {
    if (active === 10) return;
    setActive(active + 1);
    if (onNext) {
      onNext();
    }
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
    if (onPrev) {
      onPrev();
    }
  };

  return (
    <div className="flex items-center gap-8">
      <IconButton
        size="sm"
        variant="outlined"
        onClick={prev}
        disabled={counter === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
      <Typography color="gray" className="font-normal">
        Page <strong className="text-gray-900">{counter}</strong> of{" "}
        <strong className="text-gray-900">10</strong>
      </Typography>
      <IconButton
        size="sm"
        variant="outlined"
        onClick={next}
        disabled={counter === 10}
      >
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
    </div>
  );
};

export default SimplePagination;
