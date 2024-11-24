<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\StoryController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\AnswerController;

use App\Http\Controllers\VideoProcessingController;

Route::post('/process-video', [VideoProcessingController::class, 'processVideo']);

// Rota para autenticação e geração de token de acesso
Route::post('/auth/login', function (Request $request) {
    $request->validate([
        'email' => 'required|email',
        'password' => 'required',
    ]);

    $user = User::where('email', $request->email)->first();

    if (!$user || !Hash::check($request->password, $user->password)) {
        return response()->json(['message' => 'Credenciais inválidas'], 401);
    }

    $token = $user->createToken('auth_token')->plainTextToken;

    return response()->json([
        'message' => 'Login bem-sucedido',
        'access_token' => $token,
        'token_type' => 'Bearer',
        'user' => $user,
    ], 200);
})->name('auth.login');


Route::get('/list/stories', [StoryController::class, 'index'])->name('stories.list');


// Agrupamento de rotas protegidas
Route::middleware('auth:sanctum')->group(function () {
    Route::prefix('stories')->group(function () {
        // Criar uma nova história
        Route::post('/', [StoryController::class, 'store'])->name('stories.create');
        

        // Detalhar uma história específica
        Route::get('/{id}', [StoryController::class, 'show'])->name('stories.show');

        // Atualizar uma história existente
        Route::put('/{id}', [StoryController::class, 'update'])->name('stories.update');

        // Deletar uma história
        Route::delete('/{id}', [StoryController::class, 'destroy'])->name('stories.delete');
    });
});

Route::prefix('questions')->group(function () {
    Route::post('/', [QuestionController::class, 'store'])->name('questions.create'); // Criar uma pergunta
    Route::get('/', [QuestionController::class, 'index'])->name('questions.list'); // Listar todas as perguntas
    Route::get('/{id}', [QuestionController::class, 'show'])->name('questions.show'); // Exibir uma pergunta
    Route::put('/{id}', [QuestionController::class, 'update'])->name('questions.update'); // Atualizar uma pergunta
    Route::delete('/{id}', [QuestionController::class, 'destroy'])->name('questions.delete'); // Excluir uma pergunta
});

Route::prefix('answers')->group(function () {
    Route::post('/', [AnswerController::class, 'store'])->name('answers.create'); // Criar uma resposta
    Route::get('/{question_id}', [AnswerController::class, 'index'])->name('answers.list'); // Listar respostas de uma pergunta
    Route::put('/{id}', [AnswerController::class, 'update'])->name('answers.update'); // Atualizar uma resposta
    Route::delete('/{id}', [AnswerController::class, 'destroy'])->name('answers.delete'); // Excluir uma resposta
});
