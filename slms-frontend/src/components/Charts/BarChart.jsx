import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const BarChartComp = ({ data }) => (
  <div className="bg-white p-4 rounded-xl card-shadow h-72">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="score" fill="#1D4ED8" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default BarChartComp;
