import { FilterTruthyPipe } from './filter-truthy.pipe';

describe('FilterTruthyPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterTruthyPipe();
    expect(pipe).toBeTruthy();
  });
});
