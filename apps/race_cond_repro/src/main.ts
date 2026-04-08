import { CogsConnection } from "@clockworkdog/cogs-client";
import * as manifest from "./cogs-plugin-manifest.js";
import "./style.css";

const cogsConnection = new CogsConnection(manifest);
console.log("Plugin launched");

cogsConnection.store.addEventListener("items", (event) => {
  console.log("Data store event:");
  console.log(event);
});

const initial = cogsConnection.store.getItem("testValue");

setTimeout(() => {
  if (!cogsConnection.store.getItem("testValue")) {
    console.log("Setting up store");
    cogsConnection.store.setItems({ testValue: "test123" });
    console.log(
      "It looks like it's the first time you ran this plugin. The store has been set, just turn it off and on again in COGS and hopefully you'll see the race condition!",
    );
  } else {
    console.log("Initial testValue: " + initial);
    console.log(
      "testValue after 2 seconds: " + cogsConnection.store.getItem("testValue"),
    );
  }
}, 2000);
