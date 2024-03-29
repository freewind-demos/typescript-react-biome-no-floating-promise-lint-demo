async function test() {
	return new Promise((resolve) => {
		setTimeout(() => resolve("test"), 1000);
	});
}

// Biome has no 'no-floating-promise' rule
test();
