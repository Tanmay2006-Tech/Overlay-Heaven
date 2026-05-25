type ClassValue =
  | string
  | number
  | null
  | boolean
  | undefined
  | ClassValue[]
  | { [key: string]: boolean | null | undefined };

function toClassNames(value: ClassValue): string[] {
  if (!value) return [];
  if (typeof value === "string" || typeof value === "number") return [String(value)];
  if (Array.isArray(value)) return value.flatMap(toClassNames);
  if (typeof value === "object") {
    return Object.entries(value)
      .filter(([, enabled]) => Boolean(enabled))
      .map(([className]) => className);
  }
  return [];
}

function classGroupKey(className: string): string {
  const parts = className.split(":");
  const utility = parts.pop() ?? "";
  const variants = parts.join(":");
  const normalized = utility.startsWith("!") ? utility.slice(1) : utility;
  const group = normalized.split("-")[0] ?? normalized;
  return variants ? `${variants}:${group}` : group;
}

export function cn(...inputs: ClassValue[]) {
  const merged = new Map<string, string>();

  for (const className of inputs.flatMap(toClassNames)) {
    const key = classGroupKey(className);
    if (merged.has(key)) merged.delete(key);
    merged.set(key, className);
  }

  return Array.from(merged.values()).join(" ");
}

export function formatNumber(num: number): string {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
  if (num >= 1000) return (num / 1000).toFixed(1) + "K";
  return num.toString();
}

export function generateSparkles(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 8 + 4,
    color: ["#FF6BB5", "#B66DFF", "#6DB8FF", "#6DFFD4", "#FFE96D"][
      Math.floor(Math.random() * 5)
    ],
    delay: Math.random() * 3,
    duration: Math.random() * 3 + 2,
  }));
}

export const categoryLabels: Record<string, string> = {
  "desktop-pet": "Desktop Pet",
  "obs-overlay": "OBS Overlay",
  widget: "Widget",
  "theme-pack": "Theme Pack",
  mascot: "Mascot",
  "stream-pack": "Stream Pack",
};

export const categoryColors: Record<string, string> = {
  "desktop-pet": "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300",
  "obs-overlay": "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  widget: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  "theme-pack": "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  mascot: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
  "stream-pack": "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
};
