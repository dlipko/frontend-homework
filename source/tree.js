const tree = n => {
	if (!Number(n) || n < 3 || n == null) {
		return null;
	}

	let [level, tree] = [n, ''];
	const [space, branch, trunk, backSpace] = [' ', '*', '|', '\n'];
	
	while (--level) {
		const freeSpace = space.repeat(level - 1);
		tree +=  freeSpace + branch.repeat(2 * (n - level) - 1) + freeSpace + backSpace;
	}

	// добавляю ствол
	const freeSpace = space.repeat(n - 2);
	tree += freeSpace + trunk + freeSpace + backSpace;

	return tree;
}