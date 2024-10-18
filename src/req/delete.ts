import { run } from '../client';

export async function runDelete() {
  await run({ type: 'Delete', id: '123', tableName: 'user' });
}

runDelete().catch((err) => {
  console.error(err);
  process.exit(1);
});
