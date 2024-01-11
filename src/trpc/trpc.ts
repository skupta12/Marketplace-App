import { ExpressContent } from "@/server";
import { initTRPC } from "@trpc/server";

const t = initTRPC.context<ExpressContent>().create()

export const router = t.router
export const publicProcedure =  t.procedure