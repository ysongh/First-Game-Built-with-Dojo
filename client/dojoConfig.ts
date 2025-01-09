import { createDojoConfig } from "@dojoengine/core";
 
import manifest from "../contract/manifest_dev.json";
 
export const dojoConfig = createDojoConfig({
    toriiUrl: "http://127.0.0.1:8080/",
    manifest,
});