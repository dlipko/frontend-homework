function tree(n) {
	if (!Number(n) || n < 3 || n == null) 
		return null;

	var level = n;
	var tree, space, branch, trunk;
	[tree, space, branch, trunk, backSpace] = ['', ' ', '*', '|', "\n"];
	
	while (--level) {
		// создаю строку джойном пустого массива нужным символом
		var freeSpace = Array(level).join(space);
		tree +=  freeSpace + Array(2*(n - level)).join(branch) + freeSpace + backSpace;
	}

	// добавиляю ствол
	var freeSpace = Array(n - 1).join(space);
	tree += freeSpace + trunk + freeSpace + backSpace;

	return tree;
}