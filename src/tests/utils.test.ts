import { formatNumber, getOptions } from 'utils';

describe('Utils', () => {
  it('should format number with "formatNumber" function', () => {
    expect(formatNumber(4)).toEqual('4');
    expect(formatNumber(999)).toEqual('999');
    
    expect(formatNumber(1000)).toEqual('1K');
    expect(formatNumber(1100)).toEqual('1.1K');
    expect(formatNumber(99325)).toEqual('99.3K');
    expect(formatNumber(100325)).toEqual('100.3K');
    expect(formatNumber(999325)).toEqual('999.3K');

    expect(formatNumber(2896926)).toEqual('2.9M');
    expect(formatNumber(2896926000)).toEqual('2.9B');
  });

  it('should return options object with "getOptions" function', () => {
    const testParams = { id: 123, someParam: 'test', another: true };
    
    const expectedOptions = {
      method: 'GET',
      url: 'https://yt-api.p.rapidapi.com/someEndPoint',
      params: testParams,
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_X_RAPID_API_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_X_RAPID_API_HOST,
      },
    };

    expect(getOptions('someEndPoint', testParams)).toEqual(expectedOptions);
  });
});

export {};