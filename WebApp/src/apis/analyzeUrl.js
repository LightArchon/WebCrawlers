import ajax from "./index";
const analyze = url => {
  ajax.post("/analyze", {
    url: url
  });
};

export default analyze;
