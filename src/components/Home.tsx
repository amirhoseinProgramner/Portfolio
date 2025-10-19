import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { SplineScene } from "./ui/splite";

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden font-shabnam">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 min-h-screen flex items-center pt-16 lg:pt-0">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6">
            {/* تغییر اصلی اینجاست - از lg به md */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* تغییر از lg به md */}
              <div className="md:col-span-6 xl:col-span-5 md:pr-8 mt-20 lg:mt-0">
                <div className="text-right space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 leading-tight">
                        امیرحسین
                        <br />
                        فیروزی
                      </h1>
                      <div className="h-1 w-24 ml-auto bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                    </div>

                    <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-300">
                      طراح و برنامه‌نویس فول‌استک
                    </p>
                  </div>

                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-md ml-auto">
                    خلق تجربه‌های دیجیتالی چشمگیر با استفاده از فناوری‌های مدرن.
                    متخصص در طراحی وب سه‌بعدی و توسعه رابط‌های کاربری پیشرفته.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 justify-end pt-4">
                    <button
                      onClick={() => onNavigate("projects")}
                      className="group relative px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-semibold overflow-hidden transition-all duration-200 hover:shadow-lg hover:scale-105 min-w-[160px]"
                    >
                      <span className="relative z-10 flex items-center gap-2 justify-center">
                        مشاهده پروژه‌ها
                        <ArrowRight
                          className="group-hover:translate-x-1 transition-transform"
                          size={18}
                        />
                      </span>
                    </button>

                    <button
                      onClick={() => onNavigate("contact")}
                      className="group px-6 py-3 border border-blue-400/60 rounded-lg font-semibold transition-all duration-200 hover:bg-blue-400/10 hover:shadow-lg min-w-[160px]"
                    >
                      تماس با من
                    </button>
                  </div>

                  <div className="flex gap-3 justify-end pt-6">
                    {[
                      {
                        icon: Github,
                        href: "https://github.com/amirhoseinProgramner",
                      },
                      { icon: Linkedin, href: "#" },
                      { icon: Mail, href: "amirhosseinfiroozi84@gmail.com" },
                    ].map((SocialIcon, index) => (
                      <a
                        key={index}
                        href={SocialIcon.href}
                        className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800/30 border border-gray-700/50 hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-200 hover:scale-110"
                      >
                        <SocialIcon.icon
                          className="text-gray-400 hover:text-blue-400 transition-colors"
                          size={18}
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* تغییر از lg به md و اضافه کردن ارتفاع برای md */}
              <div className="md:col-span-6 xl:col-span-7 relative h-[400px] sm:h-[500px] md:h-[450px] lg:h-[550px] xl:h-[600px]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full max-w-2xl mx-auto rounded-lg overflow-hidden">
                    <SplineScene
                      scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
