import SectionBox from "@/components/layout/sectionBox";
import mongoose from "mongoose";
import Chart from "@/components/chart";
import Link from "next/link";
import { event } from "@/models/event";
import { page } from "@/models/page";
import { user } from "@/models/user";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { isToday } from "date-fns";

export default async function AnalyticsPage() {
  mongoose.connect(process.env.MONGO_URI);
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect('/');
  }

  const User = await user.findOne({ email: session.user.email }).lean();
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
            format: "%Y-%m-%d",
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

  if (!User || User.subscriptionStatus !== 'pro') {
    return (
      <SectionBox>
        <h2>Аналитика не е достапна на овој план</h2>
        <p>Доколку сакате да го надградите профилот <Link href="/#cenovnik" className="text-[#2563eb] hover:[#1d4ed8] hover:underline">кликнете тука</Link></p>
      </SectionBox>
    )
  }

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
          <div key={link.url} className="flex gap-6 items-center justify-center border-t border-[#e5e7eb] py-4">
            <div className="text-[#3b82f6] pl-4">
              <FontAwesomeIcon icon={faLink} />
            </div>
            <div className="grow">
              <h3>{link.title || 'Нема наслов'}</h3>
              <p className="text-[#6b7280] text-sm">{link.subtitle || 'Нема поднаслов'}</p>
              <a target="_blank" href={link.url} className="text-[#1d4ed8] text-xs">{link.url}</a>
            </div>
            <div className="text-center flex items-center justify-center gap-4">
              <div className="flex flex-col gap-2">
                <span className="text-xl">{clicks.filter(c => c.uri === link.url && isToday(c.createdAt)).length}</span>
                <span className="text-[#9ca3af] text-xs uppercase font-bold">Денес:</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xl">{clicks.filter(c => c.uri === link.url).length}</span>
                <span className="text-[#9ca3af] text-xs uppercase font-bold">Вкупно:</span>
              </div>
            </div>
          </div>
        ))}
      </SectionBox>
    </div>
  )
}