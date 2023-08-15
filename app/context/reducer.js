const reducer = (state, action) => {
  if (action.type === "CHANGE_THEME") {
    return { ...state, theme: action.payload };
  }

  if (action.type === "RESUME_MODAL") {
    return { ...state, modal: action.payload };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
