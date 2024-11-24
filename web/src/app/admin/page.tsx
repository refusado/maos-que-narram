"use client";

import { useState } from "react";
import { PlusCircle, Trash, CheckCircle, Play } from "@phosphor-icons/react";

export default function AdminPage() {
  const [questions, setQuestions] = useState([
    { question: "", options: [{ text: "", is_correct: false }] },
  ]);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { question: "", options: [{ text: "", is_correct: false }] },
    ]);
  };

  const addOption = (questionIndex: number) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options.push({
      text: "",
      is_correct: false,
    });
    setQuestions(updatedQuestions);
  };

  const updateQuestion = (index: number, value: string) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].question = value;
    setQuestions(updatedQuestions);
  };

  const updateOption = (
    questionIndex: number,
    optionIndex: number,
    field: "text" | "is_correct",
    value: string | boolean
  ) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex][field] = value;
    setQuestions(updatedQuestions);
  };

  const removeOption = (questionIndex: number, optionIndex: number) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options.splice(optionIndex, 1);
    setQuestions(updatedQuestions);
  };

  const handleSubmit = () => {
    console.log("Enviando dados:", { questions });
    alert("Dados enviados com sucesso!");
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
        Add a New Story
      </h1>

      {/* General Story Details */}
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-2" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            type="text"
            placeholder="Enter a title"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-2" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-blue-200"
          >
            <option value="">Select a category</option>
            <option value="EDUCATIONAL">Educational</option>
            <option value="ANIMATED">Animated</option>
            <option value="MUSIC">Music</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            placeholder="Enter a description"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-blue-200"
          ></textarea>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-2" htmlFor="video-url">
            Video URL
          </label>
          <input
            id="video-url"
            type="text"
            placeholder="Enter a video URL"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="flex items-center mb-6">
          <button className="flex items-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
            <Play className="w-5 h-5 mr-2" /> Play Video
          </button>
        </div>
      </div>

      {/* Questions Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-700 mb-4 flex items-center">
          Questions
          <PlusCircle
            onClick={addQuestion}
            className="ml-3 w-6 h-6 text-blue-500 cursor-pointer hover:text-blue-700"
          />
        </h2>

        {questions.map((question, questionIndex) => (
          <div
            key={questionIndex}
            className="bg-gray-50 border border-gray-200 shadow rounded-lg p-6 mb-6"
          >
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Question {questionIndex + 1}
              </label>
              <input
                type="text"
                value={question.question}
                onChange={(e) => updateQuestion(questionIndex, e.target.value)}
                placeholder="Enter a question"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            <h3 className="text-lg font-semibold text-gray-700 mb-4">Options</h3>
            {question.options.map((option, optionIndex) => (
              <div
                key={optionIndex}
                className="flex items-center gap-3 mb-3"
              >
                <input
                  type="text"
                  value={option.text}
                  onChange={(e) =>
                    updateOption(questionIndex, optionIndex, "text", e.target.value)
                  }
                  placeholder="Enter an option"
                  className="flex-1 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-blue-200"
                />
                <button
                  type="button"
                  onClick={() =>
                    updateOption(
                      questionIndex,
                      optionIndex,
                      "is_correct",
                      !option.is_correct
                    )
                  }
                  className={`p-2 rounded-md border ${
                    option.is_correct
                      ? "bg-green-100 border-green-500 text-green-600"
                      : "bg-gray-100 border-gray-300 text-gray-500"
                  } hover:bg-green-200`}
                >
                  <CheckCircle className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => removeOption(questionIndex, optionIndex)}
                  className="p-2 bg-red-100 text-red-500 border border-red-300 rounded-md hover:bg-red-200"
                >
                  <Trash className="w-5 h-5" />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addOption(questionIndex)}
              className="text-blue-500 hover:text-blue-700 flex items-center gap-1 mt-2"
            >
              <PlusCircle className="w-5 h-5" /> Add Option
            </button>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition"
      >
        Submit
      </button>
    </div>
  );
}
