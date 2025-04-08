
import React from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-black text-white">
      <div className="container-section">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <p className="text-lg font-semibold">Portfolio</p>
            <p className="text-gray-400">
              © {currentYear} All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" 
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" 
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" 
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="mailto:me@example.com" 
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              me@example.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
