import { IncomingMessage, ServerResponse } from "http";

export interface User {
  id: string;
  username: string;
  password: string;
  role: "admin" | "user";
  balance: number;
}

export interface Car {
  id: string;
  model: string;
  price: number;
  owner_id: string | null;
}

export type RequestHandler = (
  req: IncomingMessage,
  res: ServerResponse
) => Promise<void>;

export interface TokenPayload {
  userId: string;
  exp?: number;
}

export type MessageType = "info" | "success" | "error";
