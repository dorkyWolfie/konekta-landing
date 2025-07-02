'use client';
import { formatISO9075, format, parseISO, addDays, differenceInDays } from "date-fns";
import { CartesianGrid, LineChart, Tooltip, XAxis, YAxis, Line, ResponsiveContainer } from "recharts";

export default function Chart({data}) {
  const xLabelKey = Object.keys(data[0]).find(key => key !== 'date');

  const dataWithoutGaps = [];

  data.forEach((value, index) => {
    const dateObj = parseISO(value.date);
    const formattedDate = format(dateObj, 'dd-MM');

    dataWithoutGaps.push({
      date: formattedDate,
      [xLabelKey]: value?.[xLabelKey] || 0,
    });

    const nextDateRaw = data?.[index + 1]?.date;
    if (nextDateRaw) {
      const nextDate = parseISO(nextDateRaw);
      const daysBetween = differenceInDays(nextDate, dateObj);

      if (daysBetween > 1) {
        for (let i = 1; i < daysBetween; i++) {
          const dateBetween = addDays(dateObj, i);
          const formattedBetweenDate = format(dateBetween, 'dd-MM');

          dataWithoutGaps.push({
            date: formattedBetweenDate,
            [xLabelKey]: 0,
          });
        }
      }
    }
  });

  return (
    <div>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart width={730} height={250} data={dataWithoutGaps} margin={{ top: 5, right: 30,   left: 20, bottom: 5 }}>
          <CartesianGrid horizontal={false} strokeWidth="3" stroke="#f5f5f5" />
          <XAxis dataKey="date" axisLine={false} tickLine={false} tickMargin={10} tick={{fill:  '#aaa'}} />
          <YAxis axisLine={false} tickLine={false} tickMargin={10} tick={{fill: '#aaa'}} />
          <Tooltip />
          <Line type="monotone" dataKey={xLabelKey} stroke="#2B7FFF" strokeWidth="2" fill="#2B7FFF" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}