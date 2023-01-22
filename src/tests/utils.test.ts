import { formatViews } from 'utils';

describe('Utils', () => {
  it('should format views with "formatViews" function', () => {
    expect(formatViews(4)).toEqual('4');
    expect(formatViews(999)).toEqual('999');
    
    expect(formatViews(1000)).toEqual('1K');
    expect(formatViews(1100)).toEqual('1.1K');
    expect(formatViews(99325)).toEqual('99.3K');
    expect(formatViews(100325)).toEqual('100.3K');
    expect(formatViews(999325)).toEqual('999.3K');

    expect(formatViews(2896926)).toEqual('2.9M');
    expect(formatViews(2896926000)).toEqual('2.9B');
  });
});

export {};