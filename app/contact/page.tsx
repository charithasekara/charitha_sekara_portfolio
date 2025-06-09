"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { BentoGrid, BentoCard } from "@/components/bento-grid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Send,
  MessageSquare,
  PhoneIcon as BrandWhatsapp,
  BellIcon as BrandTelegram,
  Mail,
  TwitterIcon as BrandTwitter,
  LinkedinIcon as BrandLinkedin,
  Calendar,
  MapPin,
  CheckCircle,
  FileText,
  InstagramIcon as BrandInstagram,
  Music,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import {
  IconBrandBehance,
  IconBrandDribbble,
  IconBrandTelegram,
} from "@tabler/icons-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("C8QiEsAzk0AUMbaHx");
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // Replace with your EmailJS service ID, template ID, and public key
    const serviceId = "service_7qywyib";
    const templateId = "template_nt886ea";
    const publicKey = "C8QiEsAzk0AUMbaHx";

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        publicKey
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        alert(
          `Failed to send message: ${
            error.text || "Unknown error"
          }. Please try again.`
        );
      });
  };

  return (
    <section className="py-10">
      <BentoGrid className="container main-layout mx-auto">
        {/* Card 1: Contact Form */}
        <BentoCard colSpan={3} rowSpan={2} hasPersistentHover>
          <div className="space-y-4 h-full flex flex-col">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-800/50 border-gray-700 rounded-xl focus:border-purple-500"
                required
              />
            </div>
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-800/50 rounded-xl border-gray-700 focus:border-purple-500"
                required
              />
            </div>
            <div className="flex-grow">
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="bg-gray-800/50 rounded-xl border-gray-700 focus:border-purple-500 h-full min-h-[120px]"
                required
              />
            </div>
            <Button onClick={handleSubmit} className="btn-primary w-full">
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </div>
        </BentoCard>

        {/* Card 2: Let's Work Together */}
        {/* <BentoCard colSpan={3} rowSpan={1}>
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-purple-500/20 text-purple-500">
                <MessageSquare className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium text-white">Let's Work Together</h3>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              Feel free to reach out through any of the channels listed here.
            </p>
            <p className="text-sm text-gray-400">I typically respond within 24 hours during business days.</p>
          </div>
        </BentoCard> */}

        {/* Card 3: WhatsApp */}
        <BentoCard colSpan={1} rowSpan={1} variant="minimal">
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500/20 text-green-500 mb-2">
              <BrandWhatsapp className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-white">WhatsApp</h3>
            <p className="text-sm text-gray-300 text-wrap">
              +94702516984, +94721996364
            </p>
          </div>
        </BentoCard>

        {/* Card 7: LinkedIn */}
        <BentoCard colSpan={1} rowSpan={1} variant="minimal">
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600/20 text-blue-600 mb-2">
              <BrandLinkedin className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-white">LinkedIn</h3>
            <p className="text-sm text-gray-300">@charithaweerasekara</p>
          </div>
        </BentoCard>

        {/* Card 4: Telegram */}
        <BentoCard colSpan={1} rowSpan={1} variant="minimal">
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 text-blue-500 mb-2">
              <IconBrandTelegram stroke={2} className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-white">Telegram</h3>
            <p className="text-sm text-gray-300">@charitha</p>
          </div>
        </BentoCard>

        {/* Card 5: Email */}
        <BentoCard colSpan={2} rowSpan={1} variant="minimal">
          <div className="flex flex-col items-center justify-center text-center  h-full">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-red-500/20 text-red-500 mb-3">
              <Mail className="h-6 w-6" />
            </div>

            <h3 className="text-lg font-medium text-white">Email Me</h3>
            <p className="text-sm text-gray-300 mt-1 text-wrap">
              charithmadhushansekara@gmail.com
            </p>
            {/* <p className="text-xs text-gray-400">For project inquiries and collaborations</p> */}
          </div>
        </BentoCard>

        {/* Card 6: Twitter */}

        {/* Card 11: Resume */}
        <BentoCard colSpan={1} rowSpan={1}>
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-yellow-500/20 text-yellow-500">
                <FileText className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium text-white">My Resume</h3>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Get a detailed overview in PDF format.
            </p>
            <div className="mt-auto">
              <a
                href="/Charitha_Weerasekara_Resume.pdf"
                download="Charitha_Weerasekara_Resume.pdf"
                aria-label="Download Charitha's resume"
              >
                <Button className="btn-primary w-full">Download PDF</Button>
              </a>
            </div>
          </div>
        </BentoCard>

        <BentoCard colSpan={1} rowSpan={1} variant="minimal">
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-800/20 text-blue-800 mb-2">
              <IconBrandBehance stroke={2} className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-white">Behance</h3>
            <p className="text-sm text-gray-300">@charithasekara</p>
          </div>
        </BentoCard>

        <BentoCard colSpan={1} rowSpan={1} variant="minimal">
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-500/20 text-pink-500 mb-2">
              <IconBrandDribbble stroke={2} className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-white">Dribble</h3>
            <p className="text-sm text-gray-300">@charithasekara</p>
          </div>
        </BentoCard>

        {/* Card 9: Location */}
        {/* <BentoCard colSpan={1} rowSpan={1} variant="minimal">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-500/20 text-blue-500">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-white">Location</h3>
              <p className="text-sm text-gray-300 mt-1">Sri Lanka | Anuradhapura</p>
            </div>
          </div>
        </BentoCard> */}

        {/* Card 10: Availability */}
        {/* <BentoCard colSpan={1} rowSpan={1} variant="minimal">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-green-500/20 text-green-500">
              <CheckCircle className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-white">Availability</h3>
              <p className="text-sm text-gray-300 mt-1">Available to Work</p>
            </div>
          </div>
        </BentoCard> */}

        {/* Card 8: Schedule a Call */}
        <BentoCard colSpan={2} rowSpan={1}>
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-purple-500/20 text-purple-500">
                <Calendar className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium text-white">
                Schedule a Call
              </h3>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Book a 30-minute consultation call to discuss your project
              requirements and how I can help.
            </p>
            <div className="mt-auto">
              <Button className="btn-primary w-full">Book a Time Slot</Button>
            </div>
          </div>
        </BentoCard>

        {/* Card 12: Other Ways to Connect */}
        {/* <BentoCard colSpan={3} rowSpan={1} variant="featured">
          <div className="flex flex-col h-full">
            <h3 className="text-xl font-bold text-white mb-3">Other Ways to Connect</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-500/20 text-pink-500 mb-2">
                  <BrandInstagram className="h-5 w-5" />
                </div>
                <span className="text-sm text-white">Instagram</span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500/20 text-green-500 mb-2">
                  <Music className="h-5 w-5" />
                </div>
                <span className="text-sm text-white">Spotify</span>
              </div>
            </div>
          </div>
        </BentoCard> */}
        {/* New Card: Quick Response */}
        <BentoCard colSpan={2} rowSpan={1} variant="minimal">
          <div className="flex items-center justify-center h-full text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 text-purple-500 flex items-center justify-center mb-2">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-white">Quick Response</h3>
              <p className="text-sm text-gray-300">Usually within 24 hours</p>
            </div>
          </div>
        </BentoCard>
      </BentoGrid>
    </section>
  );
}
