"use client";

import React from "react";
import { X } from "lucide-react";

interface WorkExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WorkExperienceModal = ({ isOpen, onClose }: WorkExperienceModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="bg-gray-900/90 rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto shadow-xl border border-gray-700 transform transition-all duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-gray-900/80 backdrop-blur-md py-4 px-6 flex justify-between items-center border-b border-gray-700">
          <h2 className="text-2xl font-semibold text-white">Work Experience</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          <h2 className="text-xl font-bold text-white">Wavenet Pvt Ltd</h2>

          {/* SCM Project */}
          <div className="bg-gray-800/50 rounded-xl p-5 border-l-4 border-purple-500 hover:border-purple-400 transition-all duration-300 shadow-md hover:shadow-purple-900/20">
            <h3 className="text-lg font-medium text-white mb-2">SCM (Supply Chain Management) Project</h3>
            <h4 className="text-sm font-medium text-purple-400 mb-2">Version 1.0 & 2.0</h4>
            <ul className="space-y-2 text-gray-300 list-disc pl-5">
              <li>Developed List Management UI using HTML, CSS, JS, JQuery.</li>
              <li>Redesigned UI with Figma; created dashboard and responsive layouts.</li>
              <li>Integrated user feedback to improve usability and accessibility.</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              {["Figma", "Angular", "SCSS", "Bootstrap", "Material UI", "HTML", "CSS", "JS", "JQuery"].map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* VSMS Admin Project */}
          <div className="bg-gray-800/50 rounded-xl p-5 border-l-4 border-purple-500 hover:border-purple-400 transition-all duration-300 shadow-md hover:shadow-purple-900/20">
            <h3 className="text-lg font-medium text-white mb-2">VSMS Admin Project</h3>
            <p className="text-gray-300 mb-4">Built User Management Page UI for intuitive navigation.</p>
            <div className="flex flex-wrap gap-2">
              {["HTML", "CSS", "JS", "JQuery"].map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Campaign Manager */}
          <div className="bg-gray-800/50 rounded-xl p-5 border-l-4 border-purple-500 hover:border-purple-400 transition-all duration-300 shadow-md hover:shadow-purple-900/20">
            <h3 className="text-lg font-medium text-white mb-2">Campaign Manager Project</h3>
            <p className="text-gray-300 mb-4">Designed Rate Card UI for demo showcasing.</p>
            <div className="flex flex-wrap gap-2">
              {["HTML", "CSS", "JS", "JQuery"].map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Ahasa Lite */}
          <div className="bg-gray-800/50 rounded-xl p-5 border-l-4 border-purple-500 hover:border-purple-400 transition-all duration-300 shadow-md hover:shadow-purple-900/20">
            <h3 className="text-lg font-medium text-white mb-2">Ahasa Lite Project</h3>
            <p className="text-gray-300 mb-4">Improved UI responsiveness using Angular, TypeScript, SCSS.</p>
            <div className="flex flex-wrap gap-2">
              {["Angular", "TypeScript", "SCSS"].map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Hypermart */}
          <div className="bg-gray-800/50 rounded-xl p-5 border-l-4 border-purple-500 hover:border-purple-400 transition-all duration-300 shadow-md hover:shadow-purple-900/20">
            <h3 className="text-lg font-medium text-white mb-2">Hypermart Project</h3>
            <p className="text-gray-300 mb-4">Designed marketplace banners/logos in Figma/Illustrator and developed user management UI with Angular stack.</p>
            <div className="flex flex-wrap gap-2">
              {["Figma", "Adobe Illustrator", "Angular", "TypeScript", "SCSS"].map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Other Contributions */}
          <div className="bg-gray-800/50 rounded-xl p-5 border-l-4 border-purple-500 hover:border-purple-400 transition-all duration-300 shadow-md hover:shadow-purple-900/20">
            <h3 className="text-lg font-medium text-white mb-2">Other Contributions</h3>
            <p className="text-sm text-purple-400 mb-2">Moratuwa University</p>
            <p className="text-gray-300">Conducted UX workshop introducing industry-level UI/UX development practices.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceModal;