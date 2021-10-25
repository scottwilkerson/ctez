import BigNumber from 'bignumber.js';

type TFormatNumber = (value: string | number, shiftedBy?: number) => number;

export const formatNumber: TFormatNumber = (value, shiftedBy = -6) => {
  return new BigNumber(value).shiftedBy(shiftedBy).toNumber() ?? 0;
};

export const formatNumberStandard = (value: number | string | null | undefined) => {
  if (value === null) {
    return 0;
  }
  return Number(value).toLocaleString('en-US', { maximumFractionDigits: 6, useGrouping: false });
};
