import SectionBox from "@/components/layout/sectionBox";
import { event } from "@/models/event";
import { page } from "@/models/page";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import mongoose from "mongoose";
import Chart from "@/components/chart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { format, formatISO9075, isToday } from "date-fns";

export default async function AnalyticsPage() {
  mongoose.connect(process.env.MONGO_URI);
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect('/');
  }

  const Page = await page.findOne({owner: session?.user?.email});
  
  const groupedViews = await event.aggregate([
    {
      $match: {
        type: "view",
        uri: Page.uri,
      },
    },
    {
      $group: {
        _id: {
          $dateToString: {
            date: "$createdAt",
            format: "%d-%m-%Y",
          },
        },
        count: { "$count": {} },
      },
    },
    {
      $sort: {
        _id: 1,
      },
    }
  ]);

  const clicks = await event.find({
    page: Page.uri,
    type: 'click',
  });

  return (
    <div>
      <SectionBox>
        <h2 className="text-xl mb-6 font-bold text-center">Прегледи</h2>
        <Chart data={groupedViews.map(o => ({
          'date': o._id, 
          'views': o.count
          }))} />
      </SectionBox>
      <SectionBox>
        <h2 className="text-xl mb-6 font-bold text-center">Кликови</h2>
        {Page.links.map(link => (
          <div key={link.url} className="flex gap-6 items-center justify-center border-t border-gray-200 py-4">
            <div className="text-blue-500 pl-4">
              <FontAwesomeIcon icon={faLink} />
            </div>
            <div className="grow">
              <h3>{link.title || 'Без име'}</h3>
              <p className="text-gray-500 text-sm">{link.subtitle || 'Без подпис'}</p>
              <a target="_blank" href={link.url} className="text-blue-700 text-xs">{link.url}</a>
            </div>
            <div className="text-center flex items-center justify-center gap-4">
              <div className="flex flex-col gap-2">
                <span className="text-xl">{clicks.filter(c => c.uri === link.url && isToday(c.createdAt)).length}</span>
                <span className="text-gray-400 text-xs uppercase font-bold">Денес:</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xl">{clicks.filter(c => c.uri === link.url).length}</span>
                <span className="text-gray-400 text-xs uppercase font-bold">Вкупно:</span>
              </div>
            </div>
          </div>
        ))}
      </SectionBox>
    </div>
  )
}