const CheckmarksList = ({ items }) => {
  return (
    <ul className="space-y-1 mb-5">
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-2 text-xs text-gray-200">
          <span className="w-4 h-4 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0">
            ✓
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default CheckmarksList;