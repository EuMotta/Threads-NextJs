import {

  Tooltip,
  ResponsiveContainer,

  PieChart,
  Pie,

} from 'recharts';

const Graph1 = ({raceResults}) => {
  const data = [
    {
      name: 'Cavalo 1',
      value: raceResults.filter((result) => result === 'Cavalo 1 venceu').length,
    },
    {
      name: 'Cavalo 2',
      value: raceResults.filter((result) => result === 'Cavalo 2 venceu').length,
    },
    {
      name: 'Empate',
      value: raceResults.filter((result) => result === 'Empate').length,
    },
  ];

  return (
    <Graphics3 data={data} />
  );
}

const Graphics3 = ({ data }) => (
  <ResponsiveContainer width={300} height={300} className="text-[#4144e0]">
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={80}
        label
      />
      <Tooltip />
    </PieChart>
  </ResponsiveContainer>
);

export default Graphics3;
