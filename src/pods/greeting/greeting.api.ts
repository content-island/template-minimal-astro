import type { Greeting } from "./greeting.model";
import { client } from "#/lib/client";

export async function getGreeting(): Promise<Greeting | null> {
  const greeting = await client.getContent<Greeting>({
    contentType: "greeting",
  });

  return greeting;
}
