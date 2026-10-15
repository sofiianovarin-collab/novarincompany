import { useEffect } from "react";

type DocumentMetaProps = {
  title: string;
  description: string;
};

export function DocumentMeta({ title, description }: DocumentMetaProps) {
  useEffect(() => {
    const meta = document.querySelector('meta[name="description"]');
    const previousTitle = document.title;
    const previousDescription = meta?.getAttribute("content") ?? "";
    document.title = title;
    meta?.setAttribute("content", description);
    return () => {
      document.title = previousTitle;
      meta?.setAttribute("content", previousDescription);
    };
  }, [title, description]);

  return null;
}
