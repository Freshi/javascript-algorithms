import BubbleSort from '../BubbleSort';
import {
  equalArr,
  notSortedArr,
  reverseArr,
  sortedArr,
  SortTester,
} from '../../SortTester';

describe('BubbleSort', () => {
  it('should sort array', () => {
    SortTester.testSort(BubbleSort);
  });

  it('should sort array with custom comparator', () => {
    SortTester.testSortWithCustomComparator(BubbleSort);
  });

  it('should do stable sorting', () => {
    SortTester.testSortStability(BubbleSort);
  });

  it('should visit EQUAL array element specified number of times', () => {
    const expectedNumberOfVisits = 20;

    SortTester.testAlgorithmTimeComplexity(
      BubbleSort,
      equalArr,
      expectedNumberOfVisits,
    );
  });

  it('should visit SORTED array element specified number of times', () => {
    const expectedNumberOfVisits = 20;

    SortTester.testAlgorithmTimeComplexity(
      BubbleSort,
      sortedArr,
      expectedNumberOfVisits,
    );
  });

  it('should visit NOT SORTED array element specified number of times', () => {
    const expectedNumberOfVisits = 280;

    SortTester.testAlgorithmTimeComplexity(
      BubbleSort,
      notSortedArr,
      expectedNumberOfVisits,
    );
  });

  it('should visit REVERSE SORTED array element specified number of times', () => {
    const expectedNumberOfVisits = 400;

    SortTester.testAlgorithmTimeComplexity(
      BubbleSort,
      reverseArr,
      expectedNumberOfVisits,
    );
  });
});