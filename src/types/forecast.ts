import { z } from "zod";
import { forecastSchema } from "../routes/home/schemas/forecast-schema.ts";

export type Forecast = z.infer<typeof forecastSchema>
