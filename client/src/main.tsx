import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { setupBurnerManager } from "@dojoengine/create-burner"
import './index.css'
import App from './App.tsx'
import { init } from "@dojoengine/sdk";
import { SchemaType, schema } from "./dojo/typescript/models.gen.ts";
import { dojoConfig } from '../dojoConfig.ts'
import { DojoContextProvider } from './DojoContext.tsx'
import StarknetProvider from './starknet-provider.tsx'

async function main() {
  const sdk = await init<SchemaType>(
      {
          client: {
              rpcUrl: dojoConfig.rpcUrl,
              toriiUrl: dojoConfig.toriiUrl,
              relayUrl: dojoConfig.relayUrl,
              worldAddress: dojoConfig.manifest.world.address,
          },
          domain: {
              name: "WORLD_NAME",
              version: "1.0",
              chainId: "KATANA",
              revision: "1",
          },
      },
      schema
  );

  createRoot(document.getElementById("root")!).render(
      <StrictMode>
          <DojoContextProvider
              burnerManager={await setupBurnerManager(dojoConfig)}
          >
              <StarknetProvider>
                  <App sdk={sdk} />
              </StarknetProvider>
          </DojoContextProvider>
      </StrictMode>
  );
}

main().catch((error) => {
  console.error("Failed to initialize the application:", error);
});