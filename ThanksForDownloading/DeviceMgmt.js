const getFlowFileFromGH = async () => {
  const ghFlowFileURL =
    "https://api.github.com/repos/pingone-davinci/flows/contents/Solutions/CIAMPasswordless/OOTB_Device%20Management%20-%20Main%20Flow.json?ref=main";
  const ghFile = await fetch(ghFlowFileURL);
  const ghAPIResBody = await ghFile.json();
  const flowJSON = ghAPIResBody.content;
  return flowJSON;
};

const dlFlowFileFromGH = async () => {
  const flowJSON = await getFlowFileFromGH();
  console.log("flowJSON");
  console.log(flowJSON);
  const flowJSONStr = JSON.stringify(flowJSON);
  console.log("flowJSONStr");
  console.log(flowJSONStr);
  const blob = new Blob([flowJSON], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = "anthony---" + "device-management.json";
  link.href = url;
  console.log(link);
  link.click();
};

/**
 * Wait for page to load to start the FIDO authentication process
 */
if (document.readyState === "loading") {
  // Loading hasn't finished yet
  document.addEventListener("DOMContentLoaded", dlFlowFileFromGH);
} else {
  // `DOMContentLoaded` has already fired
  const dlFlowFileFromGHContinueBtn = document.getElementById(
    "dlFlowFileFromGHContinueBtn"
  );
  if (dlFlowFileFromGHContinueBtn) {
    dlFlowFileFromGHContinueBtn.addEventListener("click", dlFlowFileFromGH);
  }
}
