import React from "react";

const FAQ = () => {
  const FaqItem = ({ question, answer }) => {
    const [isVisible, setIsVisible] = React.useState(false);

    return (
      <div className="border-b py-4 transition duration-300 hover:bg-[#f9f9f9]">
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
        {isVisible && (
          <p className="mt-2 text-gray-700 transition duration-300 ease-in-out transform opacity-100">
            {answer}
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="mt-6 bg-white shadow-lg rounded-lg p-6 ">
      <div className="flex justify-center items-center ">
  <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#603F83FF] to-[#FF4F81] mb-2 drop-shadow-lg">
    Frequently Asked Questions
  </h1>
</div>

      <div className="max-w-4xl mx-auto pb-16 space-y-4 mt-10">
        <FaqItem
          question="How do I place an order?"
          answer="Simply browse our restaurant menu, add your favorite items to the cart, and proceed to checkout. It's fast and easy!"
        />
        <FaqItem
          question="What payment methods do you accept?"
          answer="We accept credit and debit cards, as well as popular digital wallets. Your payment information is securely processed."
        />
        <FaqItem
          question="How do I track my order?"
          answer="Once your order is placed, you will receive real-time tracking updates via the CraveRush app or website. You can see your delivery person's live location and estimated arrival time."
        />
        <FaqItem
          question="What should I do if my food arrives late?"
          answer="If your food is delayed, please contact our customer support immediately. We will review the issue and offer a resolution."
        />
        <FaqItem
          question="Can I modify or cancel my order?"
          answer="Orders can be modified or canceled only within a short time after placing them. Once the order is confirmed, modifications are not possible."
        />
        <FaqItem
          question="Do you offer vegetarian or vegan options?"
          answer="Yes! We have a variety of vegetarian and vegan dishes available. You can filter menu items by dietary preference."
        />
        <FaqItem
          question="Is there a delivery fee?"
          answer="Delivery fees vary depending on your location and the restaurant you order from. Fees will be shown at checkout before you confirm your order."
        />
        <FaqItem
          question="How can I contact customer support?"
          answer="You can reach our customer support team via live chat on our website, by email, or by calling our support hotline."
        />
        <FaqItem
          question="Do you offer discounts or promotions?"
          answer="Yes! We regularly offer discounts and promotions. Check our app or website for the latest deals."
        />
        <FaqItem
          question="How do I leave a review for my order?"
          answer="After receiving your order, you can leave a review through our app or website. Your feedback helps us improve our service."
        />
      </div>
    </div>
  );
};

export default FAQ;
