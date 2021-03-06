import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ProductsProvider } from "./Context/products-context.js";
import { VideosProvider } from "./Context/videos-context.js";
import { ToastProvider } from "./Context/toast-context.js";
import { TokenProvider } from "./Context/token-context.js";
import { makeServer } from "./server";

makeServer();

ReactDOM.render(
  <ProductsProvider>
    <VideosProvider>
      <ToastProvider>
        <TokenProvider>
          <App />
        </TokenProvider>
      </ToastProvider>
    </VideosProvider>
  </ProductsProvider>,
  document.getElementById("root")
);
