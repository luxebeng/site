const js = import("./node_modules/@luxebeng/zkmove-wasm/zkmove_wasm.js");
js.then((js) => {
  js.verify("WebAssembly");
});

