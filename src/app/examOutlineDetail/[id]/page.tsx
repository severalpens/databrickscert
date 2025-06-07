import path from "path";
import { promises as fs } from "fs";
import ExamOutlineDetailClient from "../ExamOutlineDetailClient";

export const dynamic = "force-dynamic";

interface Topic {
  id: number;
  section: string;
  topic: string;
  answer: string;
}

export default async function ExamOutlineDetailPage(callbackFunction) {
  const functionResult = await callbackFunction;
  const params = await functionResult.params;
  const { id } = params;
  const idConverted = parseInt(id);
  const filePath = path.join(process.cwd(), "src/app/flattenedTopics.json");
  const fileContents = await fs.readFile(filePath, "utf-8");
  const topics: Topic[] = JSON.parse(fileContents);

  // Find the topic by id
  const topicIndex = topics.findIndex((t) => t.id === idConverted);
  const topic = topics[topicIndex];
  if (!topic)
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Topic Not Found</h1>
        <p className="text-red-600">The requested topic does not exist.</p>
      </div>
    );

  // Determine previous and next topics
  const prevTopic = topicIndex > 0 ? topics[topicIndex - 1] : null;
  const nextTopic =
    topicIndex < topics.length - 1 ? topics[topicIndex + 1] : null;

  return (
    <div className="container mx-auto p-4 mt-20"> {/* Added mt-20 for navbar offset */}
      <h1 className="text-2xl font-bold mb-4">Topic Detail</h1>
      <div className="mx-auto p-4 border rounded bg-gray-50">
        <div className="flex justify-between mb-4"> {/* Flexbox for nav buttons */}
          {prevTopic ? (
            <a
              href={`/examOutlineDetail/${prevTopic.id}`}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              Previous
            </a>
          ) : (
            <span />
          )}
          {nextTopic ? (
            <a
              href={`/examOutlineDetail/${nextTopic.id}`}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              Next
            </a>
          ) : (
            <span />
          )}
        </div>
        <ExamOutlineDetailClient topic={topic} prevId={prevTopic ? prevTopic.id : null} nextId={nextTopic ? nextTopic.id : null} />
      </div>
    </div>
  );
}
