import { GetByIdPipe } from './get-by-id.pipe';
import { DataService } from '@im-common';

describe('GetByIdPipe', () => {
  it('create an instance', () => {
    const pipe = new GetByIdPipe({} as DataService);
    expect(pipe).toBeTruthy();
  });
});
