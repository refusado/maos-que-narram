<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Answer;

class AnswerController extends Controller
{
    public function index($question_id)
    {
        $answers = Answer::where('question_id', $question_id)->get();
        return response()->json(['data' => $answers], 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'question_id' => 'required|exists:questions,id',
            'content' => 'required|string|max:1000',
        ]);

        $answer = Answer::create($validated);

        return response()->json(['message' => 'Answer created successfully!', 'data' => $answer], 201);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'content' => 'sometimes|string|max:1000',
        ]);

        $answer = Answer::findOrFail($id);
        $answer->update($validated);

        return response()->json(['message' => 'Answer updated successfully!', 'data' => $answer], 200);
    }

    public function destroy($id)
    {
        $answer = Answer::findOrFail($id);
        $answer->delete();

        return response()->json(['message' => 'Answer deleted successfully!'], 200);
    }
}
