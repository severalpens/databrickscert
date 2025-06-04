"use client";
import { useState } from "react";
import sections from "./examOutline.json";
// Remove OpenAI import and client initialization

interface Topic {
  topic: string;
  answer: string;
}

interface Outline {
  section: number;
  title: string;
  topics: Topic[];
}

export default function ExamOutline() {
  const [outlines] = useState<Outline[]>(sections);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Exam Outline</h1>
      <div className="flex">
        <div className="list-disc pl-5">
          {outlines.map((outline) => (
            <div key={outline.section} className="mb-2">
              <h2 className="text-lg font-semibold">{`Section ${outline.section}: ${outline.title}`}</h2>
              <div className="list-inside list-circle">
                {outline.topics.map((topic, index) => (
                  <div key={index}>
                  <div
                    className="text-gray-700 text-lg cursor-pointer"
                    onClick={() => {
                      setSelectedTopic((prev) =>
                        prev && prev.topic === topic.topic ? null : topic
                      );
                    }}
                  >
                    {topic.topic}
                  </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {selectedTopic && (
          <div className="mt-4 p-4 border rounded bg-gray-50 max-w-md">
            <h3 className="text-xl font-semibold mb-2">{selectedTopic.topic}</h3>
            <p className="text-gray-700">{selectedTopic.answer}</p>
          </div>
        )}
      </div>
    </div>
  );
}
