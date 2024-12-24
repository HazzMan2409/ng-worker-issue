const worker = new Worker(
  new URL(
    "../node_modules/monaco-editor/esm/vs/language/json/json.worker",
    import.meta.url
  )
);
console.log("my worker", worker);
