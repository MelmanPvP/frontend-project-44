install:
	'C:\Program Files\nodejs/npm.cmd' ci
brain-games:
	'C:\Program Files\nodejs/node.exe' bin/brain-games.js
publish:
	'C:\Program Files\nodejs/npm.cmd' publish --dry-run
lint:
	'C:\Program Files\nodejs/npx.cmd' eslint
brain-even:
	node bin/brain-even.js
brain-calc:
	node bin/brain-calc.js
brain-gcd:
	node bin/brain-gcd.js
brain-progression:
	node bin/brain-progression.js
brain-prime:
	node bin/brain-prime.js
