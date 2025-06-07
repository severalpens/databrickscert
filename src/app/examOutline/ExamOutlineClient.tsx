"use client";
import { useState } from "react";

interface FlatTopic {
  id: number;
  section: string;
  topic: string;
  answer: string;
}

interface SectionGroup {
  section: string;
  topics: FlatTopic[];
}

export default function ExamOutlineClient({ topics }: { topics: FlatTopic[] }) {
  const [selectedTopic, setSelectedTopic] = useState<FlatTopic | null>(null);

  // Group topics by section
  const grouped: SectionGroup[] = Object.entries(
    topics.reduce((acc, topic) => {
      if (!acc[topic.section]) acc[topic.section] = [];
      acc[topic.section].push(topic);
      return acc;
    }, {} as Record<string, FlatTopic[]>)
  ).map(([section, topics]) => ({ section, topics }));

  return (
    <div className="flex">
      <div className="list-disc pl-5 max-h-screen overflow-y-auto">
        {grouped.map((group) => (
          <div key={group.section} className="mb-2">
            <h2 className="text-lg font-semibold">{group.section}</h2>
            <div className="list-inside list-circle">
              {group.topics.map((topic) => (
                <div key={topic.id}>
                  <div
                    className="text-gray-700 text-lg cursor-pointer"
                    onClick={() => {
                      setSelectedTopic((prev) =>
                        prev && prev.id === topic.id ? null : topic
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
