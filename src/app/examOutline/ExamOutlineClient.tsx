"use client";
import { useState } from "react";

interface Topic {
  topic: string;
  answer: string;
}

interface Outline {
  section: number;
  title: string;
  topics: Topic[];
}

export default function ExamOutlineClient({ outlines }: { outlines: Outline[] }) {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  return (
    <div className="flex">
      <div className="list-disc pl-5 max-h-screen overflow-y-auto">
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
          {selectedTopic.answer
            .split(/\n\n+/)
            .map((paragraph, idx) => (
              <div key={idx} className="text-gray-700 mb-4">
                {paragraph.split(/\n/).map((line, i, arr) => (
                  <p key={i}>
                    {line}
                    {i < arr.length - 1 && <br />}
                  </p>
                ))}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
