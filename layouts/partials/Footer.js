import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import Logo from "@layouts/components/Logo";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";

const Footer = () => {
  const { copyright, footer_content } = config.params;
  const { email, phone, location } = config.contact_info;
  return (
    <footer className="">
      <div className="container">
        <div className="row border-y border-border py-12">
          <div className="animate md:col-6 lg:col-3">
            <Logo />
            {markdownify(footer_content, "p", "mt-3")}
          </div>
          <div className="animate mt-8 md:col-6 lg:col-3 lg:mt-0">
            <h3 className="h5">Socials</h3>
            <div className="mt-5">
              {email && <Link href={`mailto:${email}`}>{email}</Link>}
              {/* social icons */}
              <Social source={social} className="social-icons mt-5" />
            </div>
          </div>
          <div className="animate mt-8 md:col-6 lg:col-3 lg:mt-0">
            <h3 className="h5">Địa chỉ liên hệ</h3>
            <ul className="mt-5 leading-10">
              <li>{markdownify(location)}</li>
              {phone && (
                <li>
                  <Link href={`tel:${phone}`}>{phone}</Link>
                </li>
              )}
            </ul>
          </div>
          <div className="animate mt-8 md:col-6 lg:col-3 lg:mt-0">
            <h3 className="h5">Thông tin thêm</h3>
            {/* footer menu */}
            <ul className="mt-5 leading-10">
              {menu.footer.map((menu) => (
                <li key={menu.name}>
                  <a
                    href={menu.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary hover:underline"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
            {/* Google Map */}
            <div className="mt-4 overflow-hidden rounded-lg border shadow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1544.3478995436005!2d105.80093770339538!3d10.003785876524377!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0633bdc51daa5%3A0xab49e0a2dca5fa3e!2zTuG7mWkgdGjhuqV0IEJUIEhvdXNl!5e0!3m2!1svi!2s!4v1768529459457!5m2!1svi!2s"
                width="350"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
        {/* copyright */}
        <div className=" py-6 text-center">
          {markdownify(copyright, "p", "footer-copy-write")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
