import { run } from '../client';

export async function runPost() {
  await run({
    type: 'Post',
    tableName: 'user',
    body: {
      userName: 'hello',
      password: '123',
    },
  });
}

runPost().catch((err) => {
  console.error(err);
  process.exit(1);
});
