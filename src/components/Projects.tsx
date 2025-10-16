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

const projects: Project[] = [
  {
    id: 1,
    title: "وبسایت پورتفولیو سه‌بعدی",
    description:
      "یک وبسایت پورتفولیو جذاب با انیمیشن‌های پیشرفته سه‌بعدی و المان‌های تعاملی.",
    image:
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
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
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
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
    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
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
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
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
    image:
      "https://images.pexels.com/photos/4162481/pexels-photo-4162481.jpeg?auto=compress&cs=tinysrgb&w=800",
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
    image:
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React", "API", "Maps"],
    demoUrl: "#",
    githubUrl: "#",
    longDescription:
      "داشبورد آب و هوا با پیش‌بینی‌های دقیق، نقشه‌های تعاملی و هشدارهای شدید. شامل پیشنهادات مبتنی بر موقعیت و مصورسازی داده‌های تاریخی آب و هوا.",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-24 pb-16 px-6 shabnam-font">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 text-glow mb-4">
            پروژه‌های منتخب
          </h1>
          <p className="text-xl text-gray-400">
            آخرین کارها و تجربیات خلاقانه من را کاوش کنید
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-400/50 transition-all duration-300 card-3d preserve-3d cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-blue-400 group-hover:text-glow transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-400 rounded-full border border-blue-400/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-2">
                  <a
                    href={project.demoUrl}
                    className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={16} />
                    مشاهده دمو
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={16} />
                    مشاهده کد
                  </a>
                </div>
              </div>

              <div className="absolute inset-0 border-2 border-blue-400/0 group-hover:border-blue-400/30 rounded-xl transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-gray-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 overflow-hidden rounded-t-2xl">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors"
              >
                <X className="text-white" size={20} />
              </button>
            </div>

            <div className="p-8 space-y-6">
              <h2 className="text-4xl font-bold text-blue-400 text-glow">
                {selectedProject.title}
              </h2>

              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 text-sm font-medium bg-blue-500/20 text-blue-400 rounded-full border border-blue-400/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-300 text-lg leading-relaxed">
                {selectedProject.longDescription}
              </p>

              <div className="flex gap-4 pt-4">
                <a
                  href={selectedProject.demoUrl}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all glow-effect"
                >
                  <ExternalLink size={20} />
                  مشاهده دمو
                </a>
                <a
                  href={selectedProject.githubUrl}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border-2 border-blue-400 rounded-lg font-semibold hover:bg-blue-400/10 transition-all"
                >
                  <Github size={20} />
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
