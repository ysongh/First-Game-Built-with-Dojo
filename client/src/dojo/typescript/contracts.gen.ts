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

	const actions_move = async (snAccount: Account | AccountInterface, direction: models.Direction) => {
		try {
			return await provider.execute(
				snAccount,
				{
					contractName: "actions",
					entrypoint: "move",
					calldata: [direction],
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
			move: actions_move,
		},
	};
}