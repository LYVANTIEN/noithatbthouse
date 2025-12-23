import ImageFallback from "@components/ImageFallback";
import config from "@config/config.json";
import Link from "next/link";

const Logo = ({ src }) => {
  const { logo, logo_width, logo_height, logo_text, title } = config.site;

  return (
    <Link href="/" className="navbar-brand block">
      {src || logo ? (
        <ImageFallback
  src={src ?? logo}
  alt={title}
  width={300}
  height={260}
  sizes="(max-width: 768px) 140px, 180px"
  priority
  className="object-contain h-auto w-[140px] md:w-[180px]"
/>

      ) : logo_text ? (
        logo_text
      ) : (
        title
      )}
    </Link>
  );
};

export default Logo;
