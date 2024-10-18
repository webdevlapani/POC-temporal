import { Client } from '@opensearch-project/opensearch';

const client = new Client({
  node: 'https://localhost:9200', // Your OpenSearch server URL
  requestTimeout: 60000,
  auth: {
    username: 'admin', // Your username
    password: 'Admdfsdin@123', // Your password
  },
  ssl: {
    rejectUnauthorized: false, // Set to true if you are using a valid SSL certificate
  },
});

export default client;

export async function Post({ body, tableName }: { body: any; tableName: string }): Promise<string> {
  // throw new Error('Simulated failure');
  try {
    const response = await client.index({
      index: tableName,
      body,
    });
    console.log('Document indexed:', response);
  } catch (error) {
    console.error('Error indexing document:', error);
  }
  return `Post called! , Body: ${body} , TableName: ${tableName}`;
}

export async function Delete({ id, tableName }: { id: string; tableName: string }): Promise<string> {
  try {
    const response = await client.delete({
      index: tableName,
      id, // Specify the document ID
    });
    console.log('Document deleted:', response);
  } catch (error) {
    console.error('Error deleting document:', error);
  }
  return `Delete called! , ID: ${id}, TableName: ${tableName}`;
}

export async function Put({ id, body, tableName }: { id: string; body: any; tableName: string }): Promise<string> {
  try {
    const response = await client.index({
      index: tableName,
      id, // Specify the document ID
      body,
    });
    console.log('Document updated:', response);
  } catch (error) {
    console.error('Error updating document:', error);
  }
  return `Put called! , ID: ${id}, Body: ${body}, TableName: ${tableName}`;
}

export async function Patch({ id, body, tableName }: { id: string; body: any; tableName: string }): Promise<string> {
  try {
    const response = await client.update({
      index: tableName,
      id, // Specify the document ID
      body: {
        doc: body, // Specify the fields to update
      },
    });
    console.log('Document patched:', response);
  } catch (error) {
    console.error('Error patching document:', error);
  }
  return `Patch called! , ID: ${id}, Body: ${body}, TableName: ${tableName}`;
}
