import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-24 pb-16 px-6 shabnam-font">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 text-glow mb-4">
            تماس با من
          </h1>
          <p className="text-xl text-gray-400">
            بیایید روی پروژه بعدی شما همکاری کنیم
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6 animate-fade-in">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-400/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">ایمیل</h3>
              <p className="text-gray-400">contact@johndoe.com</p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-400/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">تلفن</h3>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-400/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">مکان</h3>
              <p className="text-gray-400">سان فرانسیسکو، کالیفرنیا</p>
            </div>
          </div>

          <div
            className="lg:col-span-2 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300"
                  >
                    نام
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border-2 border-gray-700 rounded-lg focus:border-blue-400 focus:outline-none transition-all duration-300 text-white placeholder-gray-500"
                    placeholder="امیرحسین فیروزی"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300"
                  >
                    ایمیل
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border-2 border-gray-700 rounded-lg focus:border-blue-400 focus:outline-none transition-all duration-300 text-white placeholder-gray-500"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300"
                >
                  موضوع
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border-2 border-gray-700 rounded-lg focus:border-blue-400 focus:outline-none transition-all duration-300 text-white placeholder-gray-500"
                  placeholder="پرسش درباره پروژه"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300"
                >
                  پیام
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900/50 border-2 border-gray-700 rounded-lg focus:border-blue-400 focus:outline-none transition-all duration-300 text-white placeholder-gray-500 resize-none"
                  placeholder="درباره پروژه خود توضیح دهید..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className="group relative w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 glow-effect"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    "در حال ارسال..."
                  ) : submitted ? (
                    "پیام ارسال شد!"
                  ) : (
                    <>
                      ارسال پیام
                      <Send
                        className="group-hover:translate-x-1 transition-transform"
                        size={20}
                      />
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </form>
          </div>
        </div>

        <div
          className="mt-16 text-center text-gray-500 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <p>آماده همکاری به صورت فریلنس هستم</p>
          <p className="mt-2">زمان پاسخگویی: ظرف ۲۴ ساعت</p>
        </div>
      </div>
    </div>
  );
}
