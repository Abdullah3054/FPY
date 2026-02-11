import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const LineChartComp = ({ data }) => (
  <div className="bg-white p-4 rounded-xl card-shadow h-72">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="attendance" stroke="#4338CA" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default LineChartComp;
