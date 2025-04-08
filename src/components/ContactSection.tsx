
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageSquare, User } from "lucide-react";

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Show success toast (in a real app, this would happen after API call success)
    toast({
      title: "Message sent",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });

    // Clear the form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4 text-gradient-pink">Get in Touch</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential collaborations? Drop me a message.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <Input
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="pl-10 py-6 bg-card/50 border-white/10 text-white placeholder:text-white/50"
              />
              <User className="absolute left-3 top-3 text-light-purple" size={16} />
            </div>
            
            <div className="relative">
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="pl-10 py-6 bg-card/50 border-white/10 text-white placeholder:text-white/50"
              />
              <Mail className="absolute left-3 top-3 text-light-purple" size={16} />
            </div>

            <div className="relative">
              <Textarea
                id="message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="pl-10 min-h-[150px] resize-none bg-card/50 border-white/10 text-white placeholder:text-white/50"
              />
              <MessageSquare className="absolute left-3 top-3 text-light-purple" size={16} />
            </div>

            <Button 
              type="submit" 
              className="apple-button w-full bg-gradient-to-r from-pink-500/80 to-purple-600/80 hover:from-pink-500/90 hover:to-purple-600/90 text-white"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
