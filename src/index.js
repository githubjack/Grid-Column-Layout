import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import { PadBox } from "@bedrock-layout/padbox";
import { Center } from "@bedrock-layout/center";
import "@bedrock-layout/css-reset/lib/reset.css";
import ContactList from "./Grid";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <PadBox
      as={Center}
      padding="lg"
      maxWidth="85rem"
      style={{ fontFamily: "sans-serif" }}
    >
      <ContactList />
    </PadBox>
  </StrictMode>
);
