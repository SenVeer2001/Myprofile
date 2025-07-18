import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Here you would typically send the form data to your backend or email service
    alert("Message sent! (This is a demo)");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-16 px-4 max-w-6xl mx-auto relative">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#3498db]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2c3e50]/5 rounded-full blur-3xl -z-10"></div>

      <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <p className="text-lg mb-8">
            I'm interested in freelance opportunities – especially ambitious or large projects. However, if you have other requests or questions, don't hesitate to contact me using the form.          
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-lg bg-white/5 backdrop-blur-sm flex items-center justify-center border border-white/10 group-hover:border-[#3498db] transition-colors">
                <Phone className="text-[#3498db]" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Phone</h3>
                <p className="text-gray-400">+91 9876543210</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-lg bg-white/5 backdrop-blur-sm flex items-center justify-center border border-white/10 group-hover:border-[#3498db] transition-colors">
                <Mail className="text-[#3498db]" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Email</h3>
                <p className="text-gray-400">pradeep1022@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-lg bg-white/5 backdrop-blur-sm flex items-center justify-center border border-white/10 group-hover:border-[#3498db] transition-colors">
                <MapPin className="text-[#3498db]" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Location</h3>
                <p className="text-gray-400">Noida, Uttar Pradesh, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#3498db] focus:outline-none focus:ring-1 focus:ring-[#3498db] transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#3498db] focus:outline-none focus:ring-1 focus:ring-[#3498db] transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#3498db] focus:outline-none focus:ring-1 focus:ring-[#3498db] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#3498db] focus:outline-none focus:ring-1 focus:ring-[#3498db] transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-[#3498db] to-[#2c3e50] text-white rounded-lg hover:shadow-lg transition-all flex items-center gap-2 hover:scale-105"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;