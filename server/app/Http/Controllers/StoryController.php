<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\StoryService;
use Illuminate\Support\Facades\Validator;

class StoryController extends Controller
{
    protected $service;

    public function __construct(StoryService $service)
    {
        $this->service = $service;
    }

    public function store(Request $request)
    {
        // Validação dos dados recebidos
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'category' => 'required|string|max:100',
            'description' => 'nullable|string|max:1000',
            'video_url' => 'required|url'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Cria a história utilizando o serviço
        $story = $this->service->createStory($request->all());

        return response()->json(['message' => 'Story created successfully!', 'data' => $story], 201);
    }

    public function show($id)
    {
        $story = $this->service->getStoryById($id);

        return response()->json(['data' => $story], 200);
    }
}

