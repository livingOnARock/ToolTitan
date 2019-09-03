import React, { useReducer } from "react";
import ToolsContext from "./toolsContext";
import ToolsReducer from "./toolsReducer";

import powerTools from "../../data/powerTools";

import { SET_CATEGORY, CLEAR_TOOLS, SET_ACTIVETOOLS } from "../types";

const ToolsState = props => {
  const initialState = {
    tools: powerTools,
    category: "drills",
    toolsByCat: [],
    activeTools: []
  };
  const [state, dispatch] = useReducer(ToolsReducer, initialState);

  const setCategory = category => {
    dispatch({
      type: SET_CATEGORY,
      payload: category
    });
  };

  const setActiveTools = (category, type) => {
    const tools = [];

    const toolz = Object.keys(state.tools);
    toolz.map(tool => {
      if ((state.tools[tool].category = category)) {
        tools.push(tool);
      }
    });

    dispatch({
      type: SET_ACTIVETOOLS,
      payload: tools
    });
  };

  // clear users
  const clearTools = () => dispatch({ type: CLEAR_TOOLS });

  return (
    <ToolsContext.Provider
      value={{
        tools: state.tools,
        category: state.category,
        activeTools: state.activeTools,
        setActiveTools,
        setCategory,
        clearTools
      }}
    >
      {props.children}
    </ToolsContext.Provider>
  );
};

export default ToolsState;
