import { Link } from "react-router-dom";
import { role } from "../../../lib/data";

const menuItems = [
  {
    title: "القائمة",
    items: [
      {
        icon: "/src/assets/dashboard/home.png",
        label: "الرئيسية",
        href: "userHome",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/src/assets/dashboard/teacher.png",
        label: "المعلمين",
        href: "list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/src/assets/dashboard/student.png",
        label: "التلاميذ",
        href: "list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/src/assets/dashboard/parent.png",
        label: "الأباء",
        href: "list/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/src/assets/dashboard/subject.png",
        label: "المواد الدراسية",
        href: "list/subjects",
        visible: ["admin"],
      },
      {
        icon: "/src/assets/dashboard/class.png",
        label: "الصفوف الدراسية",
        href: "list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/src/assets/dashboard/lesson.png",
        label: "الكورسات",
        href: "list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/src/assets/dashboard/exam.png",
        label: "الإختبارات",
        href: "list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },

      {
        icon: "/src/assets/dashboard/result.png",
        label: "النتائج",
        href: "list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },

      {
        icon: "/src/assets/dashboard/message.png",
        label: "الرسائل",
        href: "list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/src/assets/dashboard/announcement.png",
        label: "الإعلانات",
        href: "list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "أُخْرَىٰ",
    items: [
      {
        icon: "/src/assets/dashboard/profile.png",
        label: "الصفحة الشخصية",
        href: "profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/src/assets/dashboard/setting.png",
        label: "الإعدادات",
        href: "settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/src/assets/dashboard/logout.png",
        label: "الخروج",
        href: "logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

const DashboardMenu = () => {
  return (
    <div>
      {menuItems.map((item) => (
        <div className="flex flex-col gap-2" key={item.title}>
          <span className="hidden my-4 font-light text-brand-800 lg:flex">
            {item.title}
          </span>
          {item.items.map((i) => {
            if (i.visible.includes(role)) {
              return (
                <Link
                  to={i.href}
                  key={i.label}
                  className="flex items-center justify-center gap-4 py-3 text-gray-700 rounded-md md:px-2 hover:bg-brand-100 lg:justify-start"
                >
                  <img src={i.icon} alt="menu-icon" className="w-10 h-10" />
                  <span className="hidden lg:block">{i.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default DashboardMenu;
