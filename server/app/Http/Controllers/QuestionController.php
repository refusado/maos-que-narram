<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Question;

class QuestionController extends Controller
{
    public function index()
    {
        $questions = Question::all();
        return response()->json(['data' => $questions], 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'story_id' => 'required|exists:stories,id',
            'content' => 'required|string|max:1000',
        ]);

        $question = Question::create($validated);

        return response()->json(['message' => 'Question created successfully!', 'data' => $question], 201);
    }

    public function show($id)
    {
        $question = Question::findOrFail($id);
        return response()->json(['data' => $question], 200);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'content' => 'sometimes|string|max:1000',
        ]);

        $question = Question::findOrFail($id);
        $question->update($validated);

        return response()->json(['message' => 'Question updated successfully!', 'data' => $question], 200);
    }

    public function destroy($id)
    {
        $question = Question::findOrFail($id);
        $question->delete();

        return response()->json(['message' => 'Question deleted successfully!'], 200);
    }
}
