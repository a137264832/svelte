import { test } from '../../test';

export default test({
	html: `<button>0</button>`,

	async test({ assert, target, logs }) {
		const btn = target.querySelector('button');

		await btn?.click();
		assert.htmlEqual(target.innerHTML, `<button>1</button>`);

		await btn?.click();
		assert.htmlEqual(target.innerHTML, `<button>2</button>`);

		assert.deepEqual(logs, [100]);
	}
});
