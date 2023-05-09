import { PieChart, Pie, ResponsiveContainer, Tooltip, Cell } from 'recharts';

const Graph1 = ({ victoryHorse1, victoryHorse2, draw }) => {
  const data = [
    {
      name: 'Cavalo 1',
      value: victoryHorse1,
    },
    {
      name: 'Cavalo 2',
      value: victoryHorse2,
    },
    {
      name: 'Empate',
      value: draw,
    },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <ResponsiveContainer width={300} height={300}>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip content={name} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Graph1;
