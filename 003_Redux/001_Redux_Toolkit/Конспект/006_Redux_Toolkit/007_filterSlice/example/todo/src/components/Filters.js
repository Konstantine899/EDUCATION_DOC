import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../store/filters/slices/filter-slice";

const Filters = () => {
  const dispatch = useDispatch();
  const activeFilter = useSelector((state) => state.filter);

  const handleFilter = (val) => dispatch(setFilter(val));

  return (
    <div>
      <button
        style={{
          backgroundColor: activeFilter === "all" ? "peru" : "lightgray",
        }}
        onClick={() => handleFilter("all")}
      >
        all
      </button>
      <button
        style={{
          backgroundColor: activeFilter === "active" ? "peru" : "lightgray",
        }}
        onClick={() => handleFilter("active")}
      >
        active
      </button>
      <button
        style={{
          backgroundColor: activeFilter === "completed" ? "peru" : "lightgray",
        }}
        onClick={() => handleFilter("completed")}
      >
        completed
      </button>
    </div>
  );
};

export default Filters;
