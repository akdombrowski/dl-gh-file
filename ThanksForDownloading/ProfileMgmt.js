const dlFlowFileFromGH = () => {
  const ghFlowFileURL =
    "https://api.github.com/repos/pingone-davinci/flows/contents/Solutions/CIAMPasswordless/OOTB_Basic%20Profile%20Management.json?ref=main";
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
};

/**
 * Wait for page to load to start the FIDO authentication process
 */
if (document.readyState === "loading") {
  // Loading hasn't finished yet
  document.addEventListener("DOMContentLoaded", dlFlowFileFromGH);
} else {
  // `DOMContentLoaded` has already fired
  const webAuthnSupportSubmitBtn = document.getElementById(
    "webAuthnSupportSubmitBtn"
  );
  if (webAuthnSupportSubmitBtn) {
    webAuthnSupportSubmitBtn.addEventListener("click", dlFlowFileFromGH);
  }

  return dlFlowFileFromGH();
}
