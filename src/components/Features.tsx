import React from "react";

const features = [
  {
    title: "Global Network",
    description: "Connect with developers worldwide to collaborate and grow.",
    icon: "🌐",
  },
  {
    title: "Job Opportunities",
    description: "Find your dream job with our curated developer listings.",
    icon: "💼",
  },
  {
    title: "Learning Resources",
    description: "Access tutorials and courses to sharpen your skills.",
    icon: "📚",
  },
  {
    title: "Community Support",
    description: "Get help and feedback from fellow developers.",
    icon: "🤝",
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-gray-100 text-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Why DevConnect?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map(({ title, description, icon }) => (
            <div
              key={title}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
