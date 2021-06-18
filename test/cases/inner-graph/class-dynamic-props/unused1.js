import { a, b, c, D } from "./module";

class Unused {
	[a()]() {}
	[b] = 1;
	get [c]() {}
}

class Unused2 extends D {
	[a()]() {}
	[b] = 1;
	get [c]() {}
}

export {};
