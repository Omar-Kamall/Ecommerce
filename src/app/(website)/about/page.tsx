import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about our company and our mission.",
  keywords: ["about us", "company", "mission", "values"],
};

const AboutUs = () => {
  return (
    <section className="max-w-4xl min-h-screen flex flex-col justify-center mx-auto px-4 py-10 text-white">
      <h1 className="text-3xl font-bold mb-4 text-green-400">About Us</h1>

      <p className="mb-4 leading-relaxed">
        Welcome to our store! We are passionate about providing high-quality
        products at the best prices, with a smooth and enjoyable shopping
        experience.
      </p>

      <p className="mb-4 leading-relaxed">
        Our mission is to make online shopping easy, fast, and reliable. We
        carefully select our products to ensure they meet your expectations in
        quality and value.
      </p>

      <p className="mb-4 leading-relaxed">
        Whether you are looking for the latest trends or everyday essentials,
        we’ve got you covered.
      </p>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Why Choose Us?</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>High-quality products</li>
          <li>Affordable prices</li>
          <li>Fast and reliable delivery</li>
          <li>Customer support you can trust</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutUs;
