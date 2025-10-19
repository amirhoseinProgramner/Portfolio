import { ExternalLink, Github, X } from "lucide-react";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  longDescription: string;
}

// استفاده از عکس‌های شخصی از پوشه public
const projects: Project[] = [
  {
    id: 1,
    title: "وبسایت پورتفولیو سه‌بعدی",
    description:
      "یک وبسایت پورتفولیو جذاب با انیمیشن‌های پیشرفته سه‌بعدی و المان‌های تعاملی.",
    image: "/images/1.jpg", // مسیر عکس شخصی
    tags: ["React", "Three.js", "WebGL"],
    demoUrl: "#",
    githubUrl: "#",
    longDescription:
      "یک وبسایت پورتفولیو پیشرفته با گرافیک سه‌بعدی در زمان واقعی، سیستم ذرات و تعاملات کاربری جذاب. با استفاده از فناوری‌های مدرن وب برای نمایش مهارت‌های توسعه خلاقانه ساخته شده است.",
  },
  {
    id: 2,
    title: "پلتفرم فروشگاه آنلاین",
    description:
      "راهکار مدرن تجارت الکترونیک با فرآیند پرداخت روان و مدیریت موجودی.",
    image: "/images/2.jpg", // مسیر عکس شخصی
    tags: ["Next.js", "TypeScript", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
    longDescription:
      "پلتفرم کامل فروشگاه آنلاین با پیگیری موجودی در زمان واقعی، پردازش امن پرداخت و داشبورد مدیریت بصری. بهینه شده برای عملکرد و نرخ تبدیل بالا.",
  },
  {
    id: 3,
    title: "اپلیکیشن چت هوش مصنوعی",
    description:
      "اپلیکیشن چت در زمان واقعی با هوش مصنوعی، پاسخ‌های هوشمند و گفتگوهای طبیعی.",
    image: "/images/3.jpg", // مسیر عکس شخصی
    tags: ["React", "Node.js", "OpenAI"],
    demoUrl: "#",
    githubUrl: "#",
    longDescription:
      "اپلیکیشن چت هوشمند با استفاده از هوش مصنوعی برای ارائه پاسخ‌های مبتنی بر محتوا. ویژگی‌ها شامل پیام‌رسانی در زمان واقعی، تاریخچه گفتگو و شخصیت‌های قابل تنظیم AI است.",
  },
  {
    id: 4,
    title: "سیستم مدیریت وظایف",
    description:
      "ابزار مدیریت پروژه مشارکتی با ویژگی‌های تیمی و تحلیل‌های پیشرفته.",
    image: "/images/4.jpg", // مسیر عکس شخصی
    tags: ["Vue.js", "Firebase", "Tailwind"],
    demoUrl: "#",
    githubUrl: "#",
    longDescription:
      "پلتفرم مدیریت وظایف جامع برای تیم‌ها. شامل تخته کانبان، نمودار گانت، پیگیری زمان و گزارش‌دهی پیشرفته برای افزایش بهره‌وری.",
  },
  {
    id: 5,
    title: "اپلیکیشن ردیاب تناسب اندام",
    description: "اپلیکیشن موبایل با برنامه‌های تمرینی و ردیابی پیشرفت.",
    image: "/images/5.jpg", // مسیر عکس شخصی
    tags: ["React Native", "Redux", "Charts"],
    demoUrl: "#",
    githubUrl: "#",
    longDescription:
      "راهکار کامل ردیابی تناسب اندام با برنامه‌های تمرینی شخصی، ردیابی تغذیه و تحلیل پیشرفت دقیق. شامل اشتراک‌گذاری اجتماعی و چالش‌های جامعه‌ای.",
  },
  {
    id: 6,
    title: "داشبورد آب و هوا",
    description:
      "اپلیکیشن زیبا با پیش‌بینی‌ها، نقشه‌ها و هشدارهای آب و هوای لحظه‌ای.",
    image: "/images/6.jpg", // مسیر عکس شخصی
    tags: ["React", "API", "Maps"],
    demoUrl: "#",
    githubUrl: "#",
    longDescription:
      "داشبورد آب و هوا با پیش‌بینی‌های دقیق، نقشه‌های تعاملی و هشدارهای شدید. شامل پیشنهادات مبتنی بر موقعیت و مصورسازی داده‌های تاریخی آب و هوا.",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>(
    {}
  );

  const handleImageError = (projectId: number) => {
    setImageErrors((prev) => ({ ...prev, [projectId]: true }));
  };

  // Fallback gradient برای زمانی که عکس بارگذاری نشد
  const getFallbackImage = (projectId: number) => {
    const colors = [
      "from-blue-500 to-purple-600",
      "from-green-500 to-blue-600",
      "from-orange-500 to-red-600",
      "from-purple-500 to-pink-600",
      "from-teal-500 to-blue-600",
      "from-yellow-500 to-orange-600",
    ];
    return colors[projectId % colors.length];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-24 pb-16 px-4 sm:px-6 shabnam-font">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 text-glow mb-4">
            پروژه‌های منتخب
          </h1>
          <p className="text-lg sm:text-xl text-gray-400">
            آخرین کارها و تجربیات خلاقانه من را کاوش کنید
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-400/50 transition-all duration-300 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 sm:h-52 overflow-hidden">
                {imageErrors[project.id] ? (
                  // Fallback gradient وقتی عکس بارگذاری نشد
                  <div
                    className={`w-full h-full bg-gradient-to-br ${getFallbackImage(
                      project.id
                    )} flex items-center justify-center`}
                  >
                    <span className="text-white font-bold text-lg">
                      {project.title}
                    </span>
                  </div>
                ) : (
                  // عکس اصلی
                  <img
                    src={project.image}
                    alt={`تصویر پروژه ${project.title}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                    onError={() => handleImageError(project.id)}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>

              <div className="p-4 sm:p-6 space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-400 group-hover:text-glow transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium bg-blue-500/20 text-blue-400 rounded-full border border-blue-400/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 sm:gap-4 pt-2">
                  <a
                    href={project.demoUrl}
                    className="flex items-center gap-2 text-xs sm:text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                    مشاهده دمو
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-xs sm:text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={14} className="sm:w-4 sm:h-4" />
                    مشاهده کد
                  </a>
                </div>
              </div>

              <div className="absolute inset-0 border-2 border-blue-400/0 group-hover:border-blue-400/30 rounded-xl transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-gray-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-48 sm:h-64 overflow-hidden rounded-t-2xl">
              {imageErrors[selectedProject.id] ? (
                <div
                  className={`w-full h-full bg-gradient-to-br ${getFallbackImage(
                    selectedProject.id
                  )} flex items-center justify-center`}
                >
                  <span className="text-white font-bold text-2xl">
                    {selectedProject.title}
                  </span>
                </div>
              ) : (
                <img
                  src={selectedProject.image}
                  alt={`تصویر پروژه ${selectedProject.title}`}
                  className="w-full h-full object-cover"
                  onError={() => handleImageError(selectedProject.id)}
                />
              )}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors"
                aria-label="بستن modal"
              >
                <X className="text-white w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            <div className="p-4 sm:p-8 space-y-6">
              <h2 className="text-2xl sm:text-4xl font-bold text-blue-400 text-glow">
                {selectedProject.title}
              </h2>

              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium bg-blue-500/20 text-blue-400 rounded-full border border-blue-400/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                {selectedProject.longDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                <a
                  href={selectedProject.demoUrl}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all glow-effect text-sm sm:text-base"
                >
                  <ExternalLink size={18} className="sm:w-5 sm:h-5" />
                  مشاهده دمو
                </a>
                <a
                  href={selectedProject.githubUrl}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-3 border-2 border-blue-400 rounded-lg font-semibold hover:bg-blue-400/10 transition-all text-sm sm:text-base"
                >
                  <Github size={18} className="sm:w-5 sm:h-5" />
                  مشاهده کد
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
