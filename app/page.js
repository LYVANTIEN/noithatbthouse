export const runtime = "nodejs";
import Cta from "@layouts/components/Cta";
import GSAPWrapper from "@layouts/components/GSAPWrapper";
import Features from "@layouts/partials/Features";
import HomeBanner from "@layouts/partials/HomeBanner";
import SeoMeta from "@layouts/partials/SeoMeta";
import ShortIntro from "@layouts/partials/ShortIntro";
import SpecialFeatures from "@layouts/partials/SpecialFeatures";
import Testimonial from "@layouts/partials/Testimonial";
import { getListPage } from "@lib/contentParser";

const Home = async () => {
  const homepage = await getListPage("content/_index.md");
  const { frontmatter } = homepage;
  const { banner, brands, features, intro, speciality, testimonial } =
    frontmatter;
  return (
    <GSAPWrapper>
      <SeoMeta title="Nội Thất BT House" />
      <HomeBanner banner={banner} brands={brands} />
      <Features features={features} />
        <div
        style={{
          marginTop: "40px",
          display: "flex",
          justifyContent: "center",
          background: "rgba(255,255,255,0.3)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          padding: "30px",
          borderRadius: "16px",
        }}
      >
        <iframe
          src="https://heyzine.com/flip-book/92cbc79e97.html"
          width="70%"
          height="600px"
          style={{
            border: "none",
            borderRadius: "10px",
          }}
          loading="lazy"
        />
      </div>
      <ShortIntro intro={intro} />
      <SpecialFeatures speciality={speciality} />
      {/* <Testimonial testimonial={testimonial} /> */}
      <Cta />
    </GSAPWrapper>
  );
};

export default Home;
