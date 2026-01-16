import Banner from "./components/Banner";
import ImageFallback from "./components/ImageFallback";
import { markdownify } from "@lib/utils/textConverter";

const ThankYou = ({ data }) => {
  const { frontmatter, content } = data;

  return (
    <section className="section">
      {/* Banner giống Contact */}
      <Banner title={frontmatter.title} />

      <div className="container">
        <div className="section row items-center justify-center">

          {/* Hình minh hoạ */}
          <div className="animate lg:col-5">
            <ImageFallback
              className="mx-auto lg:pr-10"
              src="/images/vectors/contact.png"
              width={497}
              height={397}
              alt="Thank you"
            />
          </div>

          {/* Nội dung cảm ơn */}
          <div className="animate lg:col-5">
            <div className="rounded-xl bg-white p-8 shadow-[0_4px_25px_rgba(0,0,0,0.05)] text-center">

              {/* Icon */}
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              {/* Nội dung markdown */}
              <div className="content text-gray-600">
                {markdownify(content, "div")}
              </div>

              {/* Nút hành động */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a href="/" className="btn btn-primary px-8">
                  Quay về trang chủ
                </a>

                <a
                  href="tel:0913477124"
                  className="btn btn-outline-primary px-8"
                >
                  📞 Gọi ngay
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ThankYou;
