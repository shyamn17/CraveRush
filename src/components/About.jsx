import React from "react";
import delivery from "../Assets/delivery.jpg";
import fresh from "../Assets/fresh.jpg";
import order from "../Assets/order.jpg"

const FeatureCard = ({ title, description, imageUrl }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transform hover:scale-105 transition-transform duration-300">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#603F83FF] mb-3">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const FaqItem = ({ question, answer }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div className="border-b py-4">
      <div className="flex justify-between items-center">
        <h4 className="text-xl font-semibold text-[#603F83FF]">{question}</h4>
        <button
          className="text-[#603F83FF] hover:text-[#503F73] transition duration-300 flex items-center space-x-2"
          onClick={() => setIsVisible(!isVisible)}
        >
          <span
            className={`transition-all duration-300 transform ${isVisible ? "rotate-45 text-green-600" : "rotate-0 text-gray-600"}`}
          >
           {isVisible ? (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 15l6-6 6 6" /> 
  </svg>
) : (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9l6 6 6-6" /> 
  </svg>
)}
          </span>
        </button>
      </div>
      {isVisible && <p className="mt-2 text-gray-700">{answer}</p>}
    </div>
  );
};

const About = () => {
  return (
<div className="max-w-7xl mx-auto p-6">
  <div className="flex flex-col items-center justify-center text-center p-6 mb-11">

    <div>
    <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#603F83FF] to-[#FF4F81] mb-11 drop-shadow-lg">
        About CraveRush
      </h1>
      <p className="text-lg max-w-6xl mx-auto">
        "At <strong>CraveRush</strong>, we understand that food is not just about sustenance — it's about experiencing the flavors that bring joy, comfort, and satisfaction. That’s why we’ve worked tirelessly to build a service that offers not only convenience but also an exceptional culinary experience. Whether you're in the mood for a warm, hearty meal after a long day, or craving a light bite to fuel your afternoon, CraveRush is your go-to solution.<br/>
With a user-friendly platform that makes ordering effortless, you can explore a wide range of dishes from local favorites to international cuisines. Our team at CraveRush carefully selects our restaurant partners to ensure that every dish meets the highest standards of quality and taste. From pizzas and burgers to sushi and vegan delights, we provide you with choices that cater to every preference, dietary need, and craving.<br/>
What sets CraveRush apart is our commitment to speed without compromising quality. We’ve optimized our delivery network to ensure your food arrives fresh and on time, right when you need it. Our riders are trained to navigate your area quickly and efficiently, ensuring the perfect delivery experience.<br/>
We also understand the importance of sustainability. That's why we’re focused on reducing our environmental impact by using eco-friendly packaging and minimizing waste. CraveRush is not just about delivering food — it’s about delivering it responsibly, with care for both our customers and the planet.<br/>
When you choose CraveRush, you're choosing a reliable, trustworthy partner that puts your needs first. We strive to be more than just a food delivery service — we’re here to make your every meal more delightful, one delivery at a time."
      </p>
    </div>
  </div>

      <h2 className="text-3xl font-semibold text-center text-[#603F83FF] mb-9">Why Choose CraveRush?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        <FeatureCard
          title="Fast Delivery"
          description="With CraveRush, you never have to wait too long. We deliver your favorite meals hot and fresh, right to your doorstep in record time."
          imageUrl={delivery} />
           <FeatureCard
          title="24/7 Availability"
          description="CraveRush is available around the clock. Whether it's breakfast, lunch, or dinner, we are always ready to satisfy your cravings anytime."
          imageUrl={order} />
          <FeatureCard
          title="Fresh Ingredients"
          description="We partner with only the best restaurants that use fresh, locally-sourced ingredients to make sure every meal is of the highest quality."
          imageUrl={fresh} />
      </div>

      <div className="bg-[#F5F5F5] p-8 mt-12 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-[#603F83FF] mb-6">What Our Customers Say</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="w-full sm:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">
              "CraveRush has changed the way I experience food delivery! The meals always arrive fresh and on time. I love it!"
            </p>
            <p className="font-semibold text-[#603F83FF]">Sarah L.</p>
            <p className="text-gray-500">Regular Customer</p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">
              "Amazing variety of food options. I can always find something delicious and healthy with CraveRush!"
            </p>
            <p className="font-semibold text-[#603F83FF]">John M.</p>
            <p className="text-gray-500">Health-conscious Foodie</p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-semibold text-center text-[#603F83FF] mb-6">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto">
          <FaqItem
            question="How do I place an order?"
            answer="Simply browse our restaurant menu, add your favorite items to the cart, and proceed to checkout. It's fast and easy!" />
          <FaqItem
            question="What payment methods do you accept?"
            answer="We accept credit and debit cards, as well as popular digital wallets. Your payment information is securely processed." />
          <FaqItem
            question="How do I track my order?"
            answer="Once your order is placed, you will receive real-time tracking updates via the CraveRush app or website. You can see your delivery person's live location and estimated arrival time." />
          <FaqItem
            question="What should I do if my food arrives late?"
            answer="If your food is delayed, please contact our customer support immediately. We will review the issue and offer a resolution." />
          <FaqItem
            question="Can I modify or cancel my order?"
            answer="Orders can be modified or canceled only within a short time after placing them. Once the order is confirmed, modifications are not possible." />
        </div>
      </div>
    </div>
  );
};

export default About;
