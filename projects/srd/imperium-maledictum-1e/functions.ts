import { DataService } from '@im-common';
import { Item } from '@imperium-maledictum-1e/models/common';

const MONO_EDGE_FN = (item: Item, data: DataService): Item => {
  const penetration = item.data?.penetration ?? 0;
  return {
    ...item,
    data: {
      ...item?.data,
      penetration: penetration + 2
    }
  };
};

const SILENCER_FN = (item: Item, data: DataService): Item => {
  const loud = 'c49d210c43eb9344';
  const traits = item.data?.traits ?? [];

  return {
    ...item,
    data: {
      ...item?.data,
      traits: traits.filter(id => id !== loud)
    }
  };
};

export const itemFunctionsMap: Map<string, (item: Item, data: DataService) => Item> = new Map()
  .set('MONO_EDGE_FN', MONO_EDGE_FN)
  .set('SILENCER_FN', SILENCER_FN);
