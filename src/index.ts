import { Hono } from "hono";
import { testSchema } from "../core/schema/test";

const app = new Hono();

app
	.get("/", (c) => {
		return c.text("Hello Hono!");
	})
	.post("/", async (c) => {
		console.log(testSchema.safeParse(await c.json()));

		return c.text("posted");
	});

export default app;
