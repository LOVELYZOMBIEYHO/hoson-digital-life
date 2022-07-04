import Link from "next/link";

export default function CategoryLabel({ children }) {
  const colorKey = {
    "digital-marketing": "yellow",
    "web-development": "red",
  };

  return (
    <div className={`bg-${colorKey[children]}-600 text-right btnCategoryLabel`}>
      <Link href={`/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  );
}
