import { z } from "zod";
import { locationSchema } from "../routes/home/schemas/location-schema.ts";

export type Location = z.infer<typeof locationSchema>
