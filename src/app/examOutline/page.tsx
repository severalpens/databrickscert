"use client";
import { useState } from "react";
import sections from "./examOutline.json";
// Remove OpenAI import and client initialization

interface Outline {
  section: number;
  title: string;
  topics: string[];
}

export default function ExamOutline() {
  const [outlines] = useState<Outline[]>(sections);
  const handleTopicClick = async (event: React.MouseEvent<HTMLLIElement>) => {
    const topic = event.currentTarget.textContent;
    if (topic) {
      try {
        const response = await fetch("/examOutline/api", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ topic }),
        });
        const data = await response.json();
        if (data.content) {
          alert(data.content);
        } else {
          alert("Error: " + (data.error || "Unknown error"));
        }
      } catch (error) {
        console.error("Error fetching explanation:", error);
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Exam Outline</h1>
      <ul className="list-disc pl-5">
        {outlines.map((outline) => (
          <li key={outline.section} className="mb-2">
            <h2 className="text-lg font-semibold">{`Section ${outline.section}: ${outline.title}`}</h2>
            <ul className="list-inside list-circle">
              {outline.topics.map((topic, index) => (
                <li
                  key={index}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={handleTopicClick}
                >
                  {topic}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
