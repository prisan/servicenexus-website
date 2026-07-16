import { type ContactMessage, type InsertContactMessage, contactMessages } from "@shared/schema";
import { db } from "./db";

export interface IStorage {
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
}

export class DatabaseStorage implements IStorage {
  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const [result] = await db.insert(contactMessages).values(message).returning();
    return result;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return await db.select().from(contactMessages);
  }
}

export const storage = new DatabaseStorage();
