import { init } from "@dojoengine/sdk";
// ModelNameInteface is exported from ./models.generated.ts
// This file contains mapping of your cairo contracts to torii client
import { schema } from "./dojo/typescript/models.gen";
import { dojoConfig } from "../dojoConfig";
 
export const db = await init(
    {
        client: {
            // This is local katana
            rpcUrl: "http://localhost:5050",
            // This is local torii
            toriiUrl: "http://localhost:8080",
            relayUrl: "/ip4/127.0.0.1/tcp/9090/tcp/80",
            worldAddress: dojoConfig.manifest.world.address,
        },
        // Those values are used
        domain: {
            name: "MyDojoProject",
            revision: "vx.x.x",
            chainId: "vx.x.x",
            version: "vx.x.x",
        },
    },
    schema
);