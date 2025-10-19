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
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "نام الزامی است";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "نام باید حداقل ۲ کاراکتر باشد";
    }

    if (!formData.email.trim()) {
      newErrors.email = "ایمیل الزامی است";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "فرمت ایمیل معتبر نیست";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "موضوع الزامی است";
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "موضوع باید حداقل ۳ کاراکتر باشد";
    }

    if (!formData.message.trim()) {
      newErrors.message = "پیام الزامی است";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "پیام باید حداقل ۱۰ کاراکتر باشد";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // استفاده از EmailJS یا سرویس مشابه برای ارسال واقعی ایمیل
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});

        // بازنشانی فرم پس از ۴ ثانیه
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        throw new Error("خطا در ارسال پیام");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setErrors({ submit: "خطا در ارسال پیام. لطفاً دوباره تلاش کنید." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // پاک کردن خطای فیلد هنگام تایپ
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "ایمیل",
      content: "amirhosseinfiroozi84@gmail.com",
      href: "mailto:amirhosseinfiroozi84@gmail.com",
      ariaLabel: "ارسال ایمیل به امیرحسین فیروزی",
    },
    {
      icon: Phone,
      title: "تلفن",
      content: "09939044953",
      href: "tel:+989939044953",
      ariaLabel: "تماس تلفنی با امیرحسین فیروزی",
    },
    {
      icon: MapPin,
      title: "مکان",
      content: "خیابان ولیعصر خیابان مختاری پلاک ۲",
      href: "https://maps.google.com/?q=خیابان ولیعصر خیابان مختاری پلاک ۲ تهران",
      ariaLabel: "مشاهده موقعیت مکانی روی نقشه",
    },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-24 pb-16 px-6 shabnam-font"
      role="main"
      aria-label="صفحه تماس با امیرحسین فیروزی"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"
          aria-hidden="true"
        ></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
          aria-hidden="true"
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <header className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 text-glow mb-4">
            تماس با من
          </h1>
          <p className="text-xl text-gray-400">
            بیایید روی پروژه بعدی شما همکاری کنیم
          </p>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6 animate-fade-in">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : "_self"}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : ""}
                className="block bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-400/50 transition-all duration-300 group hover:shadow-xl hover:scale-105"
                aria-label={item.ariaLabel}
              >
                <div className="w-14 h-14 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400 group-hover:text-blue-300 transition-colors">
                  {item.content}
                </p>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div
            className="lg:col-span-2 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 space-y-6 backdrop-blur-sm"
              noValidate
              aria-labelledby="contact-form-title"
            >
              <h2 id="contact-form-title" className="sr-only">
                فرم تماس با امیرحسین فیروزی
              </h2>

              {/* Name & Email Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300"
                  >
                    نام *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 bg-gray-900/50 border-2 rounded-lg focus:outline-none transition-all duration-300 text-white placeholder-gray-500 ${
                      errors.name
                        ? "border-red-400 shake-animation"
                        : "border-gray-700 focus:border-blue-400"
                    }`}
                    placeholder="امیرحسین فیروزی"
                    aria-describedby={errors.name ? "name-error" : undefined}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p
                      id="name-error"
                      className="text-red-400 text-sm mt-1 animate-fade-in"
                      role="alert"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300"
                  >
                    ایمیل *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 bg-gray-900/50 border-2 rounded-lg focus:outline-none transition-all duration-300 text-white placeholder-gray-500 ${
                      errors.email
                        ? "border-red-400 shake-animation"
                        : "border-gray-700 focus:border-blue-400"
                    }`}
                    placeholder="example@email.com"
                    aria-describedby={errors.email ? "email-error" : undefined}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p
                      id="email-error"
                      className="text-red-400 text-sm mt-1 animate-fade-in"
                      role="alert"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject Field */}
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300"
                >
                  موضوع *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 bg-gray-900/50 border-2 rounded-lg focus:outline-none transition-all duration-300 text-white placeholder-gray-500 ${
                    errors.subject
                      ? "border-red-400 shake-animation"
                      : "border-gray-700 focus:border-blue-400"
                  }`}
                  placeholder="پرسش درباره پروژه"
                  aria-describedby={
                    errors.subject ? "subject-error" : undefined
                  }
                  aria-invalid={!!errors.subject}
                />
                {errors.subject && (
                  <p
                    id="subject-error"
                    className="text-red-400 text-sm mt-1 animate-fade-in"
                    role="alert"
                  >
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300"
                >
                  پیام *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 bg-gray-900/50 border-2 rounded-lg focus:outline-none transition-all duration-300 text-white placeholder-gray-500 resize-none ${
                    errors.message
                      ? "border-red-400 shake-animation"
                      : "border-gray-700 focus:border-blue-400"
                  }`}
                  placeholder="درباره پروژه خود توضیح دهید..."
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <p
                    id="message-error"
                    className="text-red-400 text-sm mt-1 animate-fade-in"
                    role="alert"
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className="group relative w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 glow-effect"
                aria-live="polite"
                aria-label={
                  isSubmitting
                    ? "در حال ارسال پیام"
                    : submitted
                    ? "پیام با موفقیت ارسال شد"
                    : "ارسال پیام"
                }
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      در حال ارسال...
                    </>
                  ) : submitted ? (
                    "✅ پیام ارسال شد!"
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

              {/* Submit Error */}
              {errors.submit && (
                <div
                  className="p-4 bg-red-500/20 border border-red-400 rounded-lg animate-fade-in"
                  role="alert"
                >
                  <p className="text-red-400 text-center">{errors.submit}</p>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Footer Section */}
        <div
          className="mt-16 text-center text-gray-500 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <p>آماده همکاری به صورت فریلنس هستم</p>
          <p className="mt-2">زمان پاسخگویی: ظرف ۲۴ ساعت</p>
        </div>
      </div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-5px);
          }
          75% {
            transform: translateX(5px);
          }
        }
        .shake-animation {
          animation: shake 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
}
