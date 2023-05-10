import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Tooltip,
  Cell,
  LineChart,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Bar,
} from 'recharts';

const Graph3 = ({ horseEfficiency1, horseEfficiency2, horseEfficiencyCalc1, horseEfficiencyCalc2 }) => {
  const data = [
    {
      name: 'Cavalo 1',
      eficiencia: horseEfficiency1,
      mediaEficiencia: horseEfficiencyCalc1,
    },
    {
      name: 'Cavalo 2',
      eficiencia: horseEfficiency2,
      mediaEficiencia: horseEfficiencyCalc2,
    },
  ];

  return (
    <ResponsiveContainer width={300} height={300}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="eficiencia" fill="#8884d8" />
          <Bar dataKey="mediaEficiencia" fill="#82ca9d" />
        </BarChart>
    </ResponsiveContainer>
  );
};
const Graph2 = ({ positionMedia1, positionMedia2, positionMediaCalc1, positionMediaCalc2 }) => {
  const data = [
    {
      name: 'Cavalo 1',
      atraso: positionMedia1,
      mediaAtraso: positionMediaCalc1,
    },
    {
      name: 'Cavalo 2',
      atraso: positionMedia2,
      mediaAtraso: positionMediaCalc2,
    },
  ];

  return (
    <ResponsiveContainer width={300} height={300}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="atraso" fill="#8884d8" />
          <Bar dataKey="mediaAtraso" fill="#82ca9d" />
        </BarChart>
    </ResponsiveContainer>
  );
};

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
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

/* Graficos Como usar */

const HowToGraph1 = () => {
  const data = [
    {
      name: 'Cavalo 1',
      value: 11,
    },
    {
      name: 'Cavalo 2',
      value: 12,
    },
    {
      name: 'Empate',
      value: 5,
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
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

const HowToGraph2 = () => {
  const data = [
    {
      name: 'Cavalo 1',
      atraso: 23132,
      mediaAtraso: Math.floor(2313/5),
    },
    {
      name: 'Cavalo 2',
      atraso: 35102,
      mediaAtraso: Math.floor(3510/4),
    },
  ];

  return (
    <ResponsiveContainer width={300} height={300}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="atraso" fill="#8884d8" />
          <Bar dataKey="mediaAtraso" fill="#82ca9d" />
        </BarChart>
    </ResponsiveContainer>
  );
};

export {Graph1, Graph2, Graph3, HowToGraph1, HowToGraph2};
