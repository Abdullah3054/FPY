const StatsCard = ({ label, count, icon }) => (
  <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 flex justify-between items-center">
    <div>
      <p className="text-sm text-slate-600">{label}</p>
      <p className="text-xl font-semibold text-indigo-700">{count}</p>
    </div>
    <span className="text-2xl">{icon}</span>
  </div>
);

export default StatsCard;
