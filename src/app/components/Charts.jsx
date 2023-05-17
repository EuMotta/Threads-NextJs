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
  Line,
  Brush,
  ComposedChart,
  Area,
} from 'recharts';

/* Horse */
const Graph3 = ({
  horseEfficiency1,
  horseEfficiency2,
  horseEfficiencyCalc1,
  horseEfficiencyCalc2,
}) => {
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
        <CartesianGrid strokeDasharray="3 3" stroke="#2B71C5" />
        <XAxis dataKey="name" tick={{ fill: '#0086ea' }} />
        <YAxis tick={{ fill: '#0086ea' }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="eficiencia" fill="#8884d8" />
        <Bar dataKey="mediaEficiencia" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};
const Graph2 = ({
  positionMedia1,
  positionMedia2,
  positionMediaCalc1,
  positionMediaCalc2,
}) => {
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
        <CartesianGrid strokeDasharray="3 3" stroke="#2B71C5" />
        <XAxis dataKey="name" tick={{ fill: '#0086ea' }} />
        <YAxis tick={{ fill: '#0086ea' }} />
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
/* Horse End */

/* CallCenter */
const Graph1CallCenter = ({ attendantStats }) => {
  const data = attendantStats.map((stat, index) => ({
    name: `At ${index + 1}`,
    value: stat,
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        width={500}
        height={200}
        data={data}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
        backgroundColor="#0086ea"
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#2B71C5" />
        <XAxis dataKey="name" tick={{ fill: '#0086ea' }} />
        <YAxis tick={{ fill: '#0086ea' }} />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#0086ea" fill="#0086ea" />
        <Brush />
      </LineChart>
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
  const COLORS = ['#0088FE', '#140062', '#FCC201'];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart width={200} height={200}>
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
      mediaAtraso: Math.floor(23132 / 2),
    },
    {
      name: 'Cavalo 2',
      atraso: 35102,
      mediaAtraso: Math.floor(35102 / 2),
    },
    {
      name: 'Cavalo 3',
      atraso: 32131,
      mediaAtraso: Math.floor(32131 / 2),
    },
    {
      name: 'Cavalo 4',
      atraso: 24640,
      mediaAtraso: Math.floor(24640 / 2),
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
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
        <CartesianGrid strokeDasharray="3 3" stroke="#2B71C5" />
        <XAxis dataKey="name" tick={{ fill: '#0086ea' }} />
        <YAxis tick={{ fill: '#0086ea' }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="atraso" fill="#8884d8" />
        <Bar dataKey="mediaAtraso" fill="#140062" />
      </BarChart>
    </ResponsiveContainer>
  );
};
const HowToGraph3 = () => {
  const data = [
    {
      name: 'Atendente 1',
      atendimentos: 21,
    },
    {
      name: 'Atendente 2',
      atendimentos: 20,
    },
    {
      name: 'Atendente 3',
      atendimentos: 19,
    },
    {
      name: 'Atendente 4',
      atendimentos: 21,
    },
    {
      name: 'Atendente 5',
      atendimentos: 20,
    },
    {
      name: 'Atendente 6',
      atendimentos: 20,
    },
    {
      name: 'Atendente 7',
      atendimentos: 21,
    },
    {
      name: 'Atendente 8',
      atendimentos: 21,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        width={500}
        height={200}
        data={data}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#2B71C5" />
        <XAxis dataKey="name" tick={{ fill: '#0086ea' }} />
        <YAxis domain={[18, 22]} tick={{ fill: '#0086ea' }} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="atendimentos"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
        <Brush />
      </LineChart>
    </ResponsiveContainer>
  );
};
const HowToGraph4 = () => {
  const data = [
    {
      name: 'Atendente 1',
      atendimentos: 21,
      velocidadeMédia: 15,
      solucionados: 21,
    },
    {
      name: 'Atendente 2',
      atendimentos: 20,
      velocidadeMédia: 15,
      solucionados: 19,
    },
    {
      name: 'Atendente 3',
      atendimentos: 19,
      velocidadeMédia: 15,
      solucionados: 18,
    },
    {
      name: 'Atendente 4',
      atendimentos: 21,
      velocidadeMédia: 15,
      solucionados: 20,
    },
    {
      name: 'Atendente 5',
      atendimentos: 20,
      velocidadeMédia: 15,
      solucionados: 17,
    },
    {
      name: 'Atendente 6',
      atendimentos: 20,
      velocidadeMédia: 15,
      solucionados: 17,
    },
    {
      name: 'Atendente 7',
      atendimentos: 21,
      velocidadeMédia: 15,
      solucionados: 17,
    },
    {
      name: 'Atendente 8',
      atendimentos: 21,
      velocidadeMédia: 15,
      solucionados: 16,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <ComposedChart
        width={200}
        height={200}
        data={data}
        margin={{
          top: 20,
          right: 80,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#2B71C5" />
        <XAxis
          dataKey="name"
          label={{ value: 'Pages', position: 'insideBottomRight', offset: 0 }}
          scale="band"
          tick={{ fill: '#0086ea' }}
        />
        <YAxis label={{ value: 'Index', angle: -90, position: 'insideLeft' }} tick={{ fill: '#0086ea' }} />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="atendimentos"
          fill="#8884d8"
          stroke="#8884d8"
        />
        <Bar dataKey="velocidadeMédia" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="solucionados" stroke="#ff7300" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export {
  Graph1,
  Graph2,
  Graph3,
  HowToGraph1,
  HowToGraph2,
  HowToGraph3,
  Graph1CallCenter,
  HowToGraph4,
};
