import type { SchemaType as ISchemaType } from "@dojoengine/sdk";

import { BigNumberish } from 'starknet';

type WithFieldOrder<T> = T & { fieldOrder: string[] };

// Type definition for `dojo_starter::models::Test` struct
export interface Test {
	player: string;
	remaining: BigNumberish;
}

// Type definition for `dojo_starter::models::TestValue` struct
export interface TestValue {
	remaining: BigNumberish;
}

export interface SchemaType extends ISchemaType {
	dojo_starter: {
		Test: WithFieldOrder<Test>,
		TestValue: WithFieldOrder<TestValue>,
	},
}
export const schema: SchemaType = {
	dojo_starter: {
		Test: {
			fieldOrder: ['player', 'remaining'],
			player: "",
			remaining: 0,
		},
		TestValue: {
			fieldOrder: ['remaining'],
			remaining: 0,
		},
	},
};
export enum ModelsMapping {
	Test = 'dojo_starter-Test',
	TestValue = 'dojo_starter-TestValue',
}