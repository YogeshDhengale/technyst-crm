import { createAuth } from "@technyst-crm/auth";
import { createPrismaClient } from "@technyst-crm/db";

import { ENV } from "./env.server";

export const db = createPrismaClient(ENV);
export const auth = createAuth(ENV, db);
