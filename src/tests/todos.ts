import { Client } from 'pg';
import { success, failure } from '@shared/handlers';

interface Event {
  body: string;
}

interface Context {
  getRemainingTimeInMillis: () => number;
}

export async function getTodos({ event, context }: { event: Event; context: Context }) {
  const clientOptions = {
    user: 'your_db_user',
    host: 'your_db_host',
    database: 'your_db_name',
    password: 'your_db_password',
    port: 5432, 
  };
  const requestBody = JSON.parse(event.body);
  console.log(requestBody)
  const client = new Client(clientOptions);

  await client.connect();

  try {
    const result = await client.query('SELECT * FROM todos');
    const remainingTime = context.getRemainingTimeInMillis();
    console.log(remainingTime)

    client.end();

    return success({
      message: `${result.rowCount} item(s) returned`,
      data: result.rows,
      status: true,
    });
  } catch (e: any) {
    console.error(e.stack);

    client.end();

    return failure({ message: e.message, status: false });
  }
}
