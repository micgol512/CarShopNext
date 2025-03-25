import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    PG_user: process.env.PG_user,
    PG_host: process.env.PG_host,
    PG_database: process.env.PG_database,
    PG_password: process.env.PG_password,
    PG_port: process.env.PG_port,
  },
  /* config options here */
};

export default nextConfig;
