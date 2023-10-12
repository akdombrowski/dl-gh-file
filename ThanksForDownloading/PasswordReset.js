const ghFlowFileURL =
  "https://api.github.com/repos/pingone-davinci/flows/contents/Solutions/CIAMPasswordless/OOTB_Password%20Reset%20-%20Main%20Flow.json?ref=main";
const ghFile = fetch(ghFlowFileURL);
const blob = new Blob([ghFile], { type: "text/plain" });
const url = URL.createObjectURL(blob);
const link = document.createElement("a");
const dateTime = getDateTime();
if (fileRef.current?.name) {
  link.download = "anthony---" + dateTime + "---" + fileRef.current.name;
} else {
  link.download = "anthony---" + dateTime;
}

link.href = url;
link.click();
