const ghFile = fetch(
  "url"
);
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
