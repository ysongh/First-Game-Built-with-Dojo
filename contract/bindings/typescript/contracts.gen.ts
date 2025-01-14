import { DojoProvider } from "@dojoengine/core";
import { Account, AccountInterface, BigNumberish, CairoOption, CairoCustomEnum, ByteArray } from "starknet";
import * as models from "./models.gen";

export function setupWorld(provider: DojoProvider) {

	const actions_spawn = async (snAccount: Account | AccountInterface) => {
		try {
			return await provider.execute(
				snAccount,
				{
					contractName: "actions",
					entrypoint: "spawn",
					calldata: [],
				},
				"dojo_starter",
			);
		} catch (error) {
			console.error(error);
		}
	};

	return {
		actions: {
			spawn: actions_spawn,
		},
	};
}