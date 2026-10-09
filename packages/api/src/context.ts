import type { Session } from "@technyst-crm/auth";
import type { Database } from "@technyst-crm/db";

export type Context = {
  session: Session | null;
  db: Database;
};
