describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    split([1, 2, 3, 4]);
    expect(split([1, 2, 3, 4])).toEqual([[1, 2], [3, 4]]);

    split([1, 2, 3]);
    expect(split([1, 2, 3])).toEqual([[1, 2], [3]]);
  });
});

describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    merge([1], [2]);
    expect(merge([1], [2])).toEqual([1, 2]);
    merge([1, 4], [3, 6]);
    expect(merge([1, 4], [3, 6])).toEqual([1, 3, 4, 6]);
  });
});
