import SECTION_DATA from "./section.data";

const INITIAL_STATE = {
  collections: SECTION_DATA
};

const sectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default sectionReducer;
