'use client';

import { useState } from 'react';
import { Question } from '@/types';

interface QuestionsContainerProps {
  questions: Question[];
}

export function QuestionsContainer({ questions }: QuestionsContainerProps) {
  const [answers, setAnswers] = useState<{ [key: number]: boolean | null }>({});
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: number]: string;
  }>({});

  const handleAnswer = (
    questionIndex: number,
    isCorrect: boolean,
    selectedOption: string,
  ) => {
    setAnswers((prev) => ({
      ...prev,
      [questionIndex]: isCorrect,
    }));

    setSelectedOptions((prev) => ({
      ...prev,
      [questionIndex]: selectedOption,
    }));
  };

  return (
    <div className="space-y-6">
      {questions.map((question, index) => (
        <div
          key={index}
          className="rounded-2xl bg-neutral-100 p-3.5 shadow-sm lg:p-6"
        >
          <h2 className="mb-4 text-lg font-semibold">
            {index + 1}. {question.question}
          </h2>
          <ul className="space-y-2">
            {question.options.map((option, optionIndex) => (
              <QuestionOption
                key={optionIndex}
                questionIndex={index}
                optionIndex={optionIndex}
                optionText={option.text}
                isCorrect={option.is_correct}
                isSelected={selectedOptions[index] === option.text}
                isDisabled={answers[index] !== undefined}
                onSelect={() =>
                  handleAnswer(index, option.is_correct, option.text)
                }
              />
            ))}
          </ul>
          {answers[index] !== undefined && (
            <p
              className={`mt-3 text-right font-medium ${
                answers[index] ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {answers[index] ? 'Resposta correta!' : 'Resposta incorreta.'}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

interface QuestionOptionProps {
  questionIndex: number;
  optionIndex: number;
  optionText: string;
  isCorrect: boolean;
  isSelected: boolean;
  isDisabled: boolean;
  onSelect: () => void;
}

function QuestionOption({
  questionIndex,
  optionIndex,
  optionText,
  isSelected,
  isDisabled,
  onSelect,
}: QuestionOptionProps) {
  return (
    <li>
      <label
        htmlFor={`question-${questionIndex}-option-${optionIndex}`}
        className={`flex items-center gap-2 rounded-md border border-neutral-300 px-3 py-2 duration-100 ${isSelected ? 'border-blue-500 bg-blue-500/10' : ''} ${isDisabled ? 'cursor-default opacity-60' : 'cursor-pointer hover:bg-blue-500/5'}`}
      >
        <input
          id={`question-${questionIndex}-option-${optionIndex}`}
          type="radio"
          name={`question-${questionIndex}`}
          value={optionText}
          className="hidden"
          onChange={onSelect}
          disabled={isDisabled}
          checked={isSelected}
        />
        {optionText}
      </label>
    </li>
  );
}
