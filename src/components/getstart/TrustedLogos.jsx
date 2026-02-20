const TrustedLogos = () => {
  const brands = [
    { icon: "⚡", name: "nexora", color: "text-orange-400" },
    { icon: "🌊", name: "brightwave", color: "text-blue-400" },
    { icon: "💧", name: "bylewave", color: "text-cyan-400" },
    { icon: "🔗", name: "novahub", color: "text-green-400" },
  ];

  return (
    <div className="flex justify-around items-center px-6 py-4 mt-4 relative z-10">
      {brands.map((brand) => (
        <div key={brand.name} className="flex items-center gap-1">
          <span className={`text-sm ${brand.color}`}>{brand.icon}</span>
          <span className="text-xs font-semibold text-gray-300">{brand.name}</span>
        </div>
      ))}
    </div>
  );
};

export default TrustedLogos;