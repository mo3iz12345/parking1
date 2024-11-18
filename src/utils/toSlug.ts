export function toSlug(str: string): string {
    let slug = str.toLowerCase();
    slug = slug.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    slug = slug.replace(/[^a-z0-9\s-]/g, "")
               .trim()
               .replace(/\s+/g, "-")
               .replace(/-+/g, "-")
    return slug;
  }
  