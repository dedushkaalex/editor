import { initTRPC } from "@trpc/server";

const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;

export const appRouter = router({
  greeting: publicProcedure.query(() => "hello tRPC v10!"),
});

export type AppRouter = typeof appRouter;
