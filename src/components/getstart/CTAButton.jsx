const CTAButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full py-3 rounded-full font-bold text-base shadow-lg hover:scale-105 transition-all duration-300"
      style={{ background: "linear-gradient(90deg, #e040fb, #9c27b0)" }}
    >
      {text}
    </button>
  );
};

export default CTAButton;