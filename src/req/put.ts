import { run } from '../client';

export async function runPut() {
  await run({
    type: 'Put',
    id: 'iOsUmpIBcUDZo-sWzuER',
    body: {
      userName: 'alex',
    },
    tableName: 'user',
  });
}

runPut().catch((err) => {
  console.error(err);
  process.exit(1);
});
