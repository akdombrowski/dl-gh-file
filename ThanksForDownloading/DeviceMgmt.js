const flowName = "device-management.json";

const getFlowFileFromGH = async () => {
  const ghFlowFileURL =
    "https://api.github.com/repos/pingone-davinci/flows/contents/Solutions/CIAMPasswordless/OOTB_Device%20Management%20-%20Main%20Flow.json?ref=main";
  const ghFile = await fetch(ghFlowFileURL);
  const ghAPIResBody = await ghFile.json();
  const flowJSON = ghAPIResBody.content;
  return flowJSON;
};

const dlFlowFileFromGH = async () => {
  const flowB64 = await getFlowFileFromGH();
  console.log("flowB64");
  console.log(flowB64);
  const flowJSON = JSON.parse(atob(flowB64));
  console.log("flowJSON");
  console.log(flowJSON);
  const flowJSONStr = JSON.stringify(flowJSON, null, 2);
  console.log("flowJSONStr");
  console.log(flowJSONStr);
  const blob = new Blob([flowJSONStr], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = "anthony---" + "device-management.json";
  link.href = url;
  console.log(link);
  link.click();
};

const runIfPageCompletedLoading = (event) => {
  if (document.readyState === "complete") {
    dlFlowFileFromGH();
  }
};

/**
 * Wait for page to load to start the FIDO authentication process
 */
if (document.readyState !== "complete") {
  // Loading hasn't finished yet
  document.addEventListener("readystatechange", runIfPageCompletedLoading);
} else {
  // Page had completed loading, ready to run function
  const dlBtn = document.getElementById("dlBtn");
  if (dlBtn) {
    dlBtn.addEventListener("click", async () => {
      await dlFlowFileFromGH();
    });
  }
}
