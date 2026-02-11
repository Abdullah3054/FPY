const DashboardCard = ({ title, value }) => (
  <div className="bg-white rounded-xl p-4 card-shadow">
    <h4 className="text-sm text-slate-500">{title}</h4>
    <p className="text-2xl font-bold mt-1">{value}</p>
  </div>
);

export default DashboardCard;
