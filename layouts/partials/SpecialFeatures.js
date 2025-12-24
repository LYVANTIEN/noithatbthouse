import ImageFallback from "@layouts/components/ImageFallback";
import { markdownify } from "@lib/utils/textConverter";

const SpecialFeatures = ({ speciality }) => {
  return (
    <section className="section">
      <div className="container">
        <div className="row items-center justify-center mb-[80px]">
          <div className="animate lg:col-6 lg:order-2">
            <ImageFallback
              className="mx-auto"
              src={speciality.primary.image}
              width={575}
              height={511}
              alt="primary speciality"
            />
          </div>
          <div className="animate lg:col-5 lg:order-1">
            <p>{speciality.primary.subtitle}</p>
            {markdownify(
              speciality.primary.title,
              "h2",
              "mt-4 section-title bar-left font-extrabold text-[32px] sm:text-[36px] lg:text-[42px] [text-shadow:0_12px_8px_rgba(184,142,90,0.45)]"
            )}
            {markdownify(speciality.primary.description, "p", "mt-10")}
          </div>
        </div>
        <div className="row items-center justify-center mb-[80px]">
          <div className="animate lg:col-6">
            <ImageFallback
              className="mx-auto"
              src={speciality.secondary.image}
              width={575}
              height={511}
              alt="secondary speciality"
            />
          </div>
          <div className="animate lg:col-5">
            <p>{speciality.secondary.subtitle}</p>
            {markdownify(
              speciality.secondary.title,
              "h2",
              "mt-4 section-title bar-left font-extrabold text-[32px] sm:text-[36px] lg:text-[42px] [text-shadow:0_12px_8px_rgba(184,142,90,0.45)]"
            )}
            {markdownify(speciality.secondary.description, "p", "mt-10")}
          </div>
        </div>
        <div className="row items-center justify-center">
          <div className="animate lg:col-6 lg:order-2">
            <ImageFallback
              className="mx-auto"
              src={speciality.Third.image}
              width={575}
              height={511}
              alt="Third speciality"
            />
          </div>
          <div className="animate lg:col-5 lg:order-1">
            <p>{speciality.Third.subtitle}</p>
            {markdownify(
              speciality.Third.title,
              "h2",
              "mt-4 section-title bar-left font-extrabold text-[32px] sm:text-[36px] lg:text-[42px] [text-shadow:0_12px_8px_rgba(184,142,90,0.45)]"
            )}
            {markdownify(speciality.Third.description, "p", "mt-10")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialFeatures;
