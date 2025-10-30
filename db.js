// db.js
import 'dotenv/config';
import http from 'http';
import { neon } from '@neondatabase/serverless';

// Cria a conexão com o banco de dados Neon/Postgres
export const sql = neon(process.env.DATABASE_URL);

