import fr, { type Content } from "./fr";
import pt from "./pt";
import en from "./en";
import es from "./es";
import de from "./de";
import type { Lang } from "./routes";

export const content: Record<Lang, Content> = { fr, pt, en, es, de };
export * from "./routes";
