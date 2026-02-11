import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#1D4ED8', '#4338CA', '#93C5FD'];

const PieChartComp = ({ data }) => (
  <div className="bg-white p-4 rounded-xl card-shadow h-72">
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={85} label>
          {data.map((entry, index) => <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />)}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default PieChartComp;
