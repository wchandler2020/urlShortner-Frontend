import React from "react";
import { FaLink, FaShareAlt, FaEdit, FaChartLine } from "react-icons/fa";
import img1 from "../../assets/images/about/shortner_img.jpeg";
import img2 from "../../assets/images/about/analytics_img.jpeg";
import img3 from "../../assets/images/about/security_img.jpeg";
import img4 from "../../assets/images/about/speed_img.jpeg";

const About = () => {
  return (
    <div className="px-5 pt-2 min-h-[calc(100vh-64px)] sm:px-8 lg:px-14">
      <div className="py-8 sm:py-10 w-full">
        <h1 className="text-slate-800 text-6xl sm:text-4xl font-bold mb-3 text-center">
          Why EZ Short
        </h1>
        <p className="text-gray-700 mb-10 text-center text-[14px]">
          EZ Short makes URL shortening effortless and efficient. With just a
          few clicks, you can generate clean, shareable links that are easy to
          manage and track. Whether you're streamlining communication, promoting
          content, or monitoring engagement, EZ Short provides a seamless way to
          handle your links—all in one simple, intuitive platform.
        </p>
        <div className="space-y-6 w-full">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl sm:text-3xl font-semibold text-slate-800 mb-3 text-center lg:text-left">
              Simple URL Shortening
            </h2>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <img
                className="w-48 h-48 rounded-lg object-contain md:w-24 md:h-24"
                src={img1}
                alt="Simple URL Shortening"
              />
              <p className="text-gray-600 text-sm sm:text-lg">
                Discover how effortless it can be to create short, memorable
                URLs tailored to your needs. With our user-friendly interface,
                you don't need any technical knowledge or complex setup—just a
                few clicks, and your link is ready to go. Whether you're sharing
                content on social media, through email, or embedding it on a
                website, our streamlined process makes shortening URLs quick,
                reliable, and hassle-free. Built for speed and simplicity, our
                platform helps you save time while maintaining full control over
                your links.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl sm:text-3xl font-semibold text-slate-800 mb-3 text-center lg:text-left">
              Powerful Analytics
            </h2>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <img
                className="w-48 h-48 rounded-lg object-contain md:w-24 md:h-24"
                src={img2}
                alt="Powerful Analytics"
              />
              <p className="text-gray-600 text-sm sm:text-lg">
                Gain deep insights into your link performance with our
                comprehensive analytics dashboard. Monitor key metrics like
                total clicks, unique visitors, geographic distribution, device
                types, and traffic sources in real time. Our platform also
                supports UTM parameters, allowing you to accurately track the
                effectiveness of specific marketing campaigns across channels.
                Easily filter and segment your data to focus on what matters
                most. With customizable reports and export options, you can
                tailor insights for your team, clients, or
                stakeholders—empowering you to optimize strategies, demonstrate
                ROI, and make smarter, data-driven decisions.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl sm:text-3xl font-semibold text-slate-800 mb-3 text-center lg:text-left">
              Enhanced Security
            </h2>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <img
                className="w-48 h-48 rounded-lg object-contain md:w-24 md:h-24"
                src={img3}
                alt="Enhanced Security"
              />
              <p className="text-gray-600 text-sm sm:text-lg">
                Rest assured with our robust security measures designed to
                protect both your data and your users. Every shortened URL is
                backed by advanced encryption protocols, ensuring that your
                links cannot be tampered with or exploited. We actively monitor
                for suspicious activity and offer built-in safeguards against
                phishing, malware, and spam. Our platform also includes options
                for password-protected links, expiration settings, and
                domain-level control, giving you full authority over who can
                access your content and for how long. Whether you're sharing
                links internally or publicly, our security-first infrastructure
                ensures that your data remains safe, private, and fully under
                your control.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl sm:text-3xl font-semibold text-slate-800 mb-3 text-center lg:text-left">
              Fast and Reliable
            </h2>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <img
                className="w-48 h-48 rounded-lg object-contain md:w-24 md:h-24"
                src={img4}
                alt="Fast and Reliable"
              />
              <p className="text-gray-600 text-sm sm:text-lg">
                Enjoy lightning-fast redirects and exceptional uptime with our
                highly reliable and scalable infrastructure. Our globally
                distributed servers are optimized for speed, ensuring that every
                shortened URL loads instantly—no matter where your users are
                located. Built on top-tier cloud architecture with automatic
                load balancing and failover support, our system is engineered to
                handle high traffic volumes without compromising performance.
                You can count on consistent availability, with 99.9% uptime and
                round-the-clock monitoring to detect and resolve any issues
                before they impact your users. Whether you're sharing a single
                link or managing thousands, your URLs remain responsive,
                accessible, and seamlessly integrated into your workflow—every
                time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
