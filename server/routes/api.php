<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\StoryController;

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

// Agrupamento de rotas protegidas
Route::middleware('auth:sanctum')->group(function () {
    Route::prefix('stories')->group(function () {
        // Criar uma nova história
        Route::post('/', [StoryController::class, 'store'])->name('stories.create');

        // Listar todas as histórias
        Route::get('/', [StoryController::class, 'index'])->name('stories.list');

        // Detalhar uma história específica
        Route::get('/{id}', [StoryController::class, 'show'])->name('stories.show');

        // Atualizar uma história existente
        Route::put('/{id}', [StoryController::class, 'update'])->name('stories.update');

        // Deletar uma história
        Route::delete('/{id}', [StoryController::class, 'destroy'])->name('stories.delete');
    });
});
