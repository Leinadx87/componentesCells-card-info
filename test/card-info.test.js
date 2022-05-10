import { html, fixture, assert, fixtureCleanup } from '@open-wc/testing'; // eslint-disable-line import/no-extraneous-dependencies
import '../card-info.js';

suite('CardInfo', () => {
  let el;

  teardown(() => fixtureCleanup());

  setup(async () => {
    el = await fixture(html`<card-info></card-info>`);
    await el.updateComplete;
  });

  test('instantiating the element with default properties works', () => {
    const element = el.shadowRoot.querySelector('p');
    assert.equal(element.innerText, 'Welcome to Cells');
  });

});
