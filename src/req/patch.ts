import { run } from '../client';

export async function runPatch() {
  await run({
    type: 'Patch',
    id: 'iOsUmpIBcUDZo-sWzuER',
    body: {
      userName: 'max',
    },
    tableName: 'user',
  });
}

runPatch().catch((err) => {
  console.error(err);
  process.exit(1);
});
