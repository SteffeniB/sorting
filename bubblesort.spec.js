describe('Bubble Sort', function() {
  beforeAll(function() {
    spyOn(arr, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
  });
  it('counts the number of times function swap was called', function() {
    arr.bubbleSort();
    expect(arr.swap.count()).toEqual(0);
  });

  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });

  it('handles a single item', function() {
    expect(bubbleSort([0])).toEqual([0]);
  });

  it('handles many items', function() {
    expect(bubbleSort([0, 2, 5, 6, 3])).toEqual([0, 2, 3, 5, 6]);
  });

  it('handles many items', function() {
    expect(bubbleSort(['d', 'c', 'a', 'f', 'e'])).toEqual([
      'a',
      'c',
      'd',
      'e',
      'f',
    ]);
  });
});
