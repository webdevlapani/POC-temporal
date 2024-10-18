import { proxyActivities } from '@temporalio/workflow';
// Only import the activity types
import type * as activities from './activities';

const { Patch, Post, Put, Delete } = proxyActivities<typeof activities>({
  startToCloseTimeout: '30s',
  scheduleToCloseTimeout: '10m',
  retry: {
    initialInterval: '1m',
    maximumAttempts: 3,
  },
});

/** A workflow that simply calls an activity */
export async function example({ type, body, tableName, id }: any): Promise<string> {
  switch (type) {
    case 'Post':
      return await Post({ body, tableName });
    case 'Put':
      return await Put({ body, tableName, id });
    case 'Delete':
      return await Delete({ id, tableName });
    case 'Patch':
      return await Patch({ id, body, tableName });
    default:
      return await 'Wrong Type';
  }
}
