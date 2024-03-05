/**
 * @jest-environment jsdom
 */

import { getHeaderTitles, headerTitles, HeaderTitles } from '@/lib/utils';

// Describe the test suite
describe('getHeaderTitles function', () => {
  // Test case for each entry in headerTitles
  headerTitles.forEach((titleEntry: HeaderTitles) => {
    // Extract key and value from each entry
    const [key, expectedValue] = Object.entries(titleEntry)[0];

    // Test for each key in headerTitles
    it(`returns "${expectedValue}" for pathname "/${key}/tag/params"`, () => {
      // Call the function with the modified key and expect the result
      const result = getHeaderTitles(`/${key}/tag/params`);
      expect(result).toEqual(expectedValue);
    });
  });

  // Additional test case for a non-existing key
  it('returns an empty string for an unknown pathname', () => {
    const result = getHeaderTitles('/unknownPath/tag/params');
    expect(result).toEqual('');
  });
});