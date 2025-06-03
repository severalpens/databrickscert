"use client";
import { useState } from "react";
import sections from "./examOutline.json"

interface Outline {
  section: number;
  title: string;
  topics: string[];
}

export default function ExamOutline() {
  const [outlines, ] = useState<Outline[]>(sections);


    return (
        <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Exam Outline</h1>
        <ul className="list-disc pl-5">
            {outlines.map((outline) => (
            <li key={outline.section} className="mb-2">
                <h2 className="text-lg font-semibold">{`Section ${outline.section}: ${outline.title}`}</h2>
                <ul className="list-inside list-circle">
                {outline.topics.map((topic, index) => (
                    <li key={index}>
                        <a href={`https://bing.com/search?q=Databricks ${outline.title} ${topic}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        {topic}
                        </a>
                        </li>
                ))}
                </ul>
            </li>
            ))}
        </ul>
        </div>
    );

}
