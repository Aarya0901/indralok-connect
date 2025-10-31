import { useEffect, useState } from "react";
import { Bell } from "lucide-react";

const announcements = [
  "Annual General Meeting scheduled for December 15, 2025 at 6:00 PM",
  "Reminder: Monthly maintenance due by 10th of every month",
  "New parking guidelines effective from January 1, 2025",
  "Festival celebration event - Diwali on November 12, 2025",
  "Water supply maintenance on Sunday, 8 AM - 2 PM",
];

const NewsTicker = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-primary text-primary-foreground py-2 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3">
          <Bell className="h-4 w-4 flex-shrink-0 animate-pulse" />
          <div className="flex-1 overflow-hidden">
            <div className="animate-slide-in">
              <p className="text-sm font-medium whitespace-nowrap">
                {announcements[currentIndex]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
