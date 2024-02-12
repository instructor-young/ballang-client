import Link from "next/link";

interface BrandLinkProps {
  href: string;
  label: string;
  isActive: boolean;
}

function BrandLink({ href, label, isActive }: BrandLinkProps) {
  return (
    <Link
      href={href}
      className="text-slate-700 data-[active=true]:text-black data-[active=true]:font-semibold hover:text-black transition-all"
      data-active={isActive}
    >
      {label}
    </Link>
  );
}

export default BrandLink;
