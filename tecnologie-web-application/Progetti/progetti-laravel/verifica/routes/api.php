<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\BookController;
use App\Http\Controllers\AuthorController;
use App\Http\Controllers\EditorController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


//http://localhost:8000/api

//POST http://localhost:8000/api/books
Route::post('/books', [BookController::class, 'create']);
//DELETE http://localhost:8000/api/books/id 
Route::delete('/books/{id}', [BookController::class, 'delete']);
//GET http://localhost:8000/api/books/id
Route::get('/books/{id}', [BookController::class, 'read']);
//GET http://localhost:8000/api/books
Route::get('/books', [BookController::class, 'readAll']);
//PUT http://localhost:8000/api/books/id
Route::put('/books/{id}', [BookController::class, 'update']);


//POST http://localhost:8000/api/editors
Route::post('/editors', [EditorController::class, 'create']);
//DELETE http://localhost:8000/api/editors/id 
Route::delete('/editors/{id}', [EditorController::class, 'delete']);
//GET http://localhost:8000/api/editors/id
Route::get('/editors/{id}', [EditorController::class, 'read']);
//GET http://localhost:8000/api/editors
Route::get('/editors', [EditorController::class, 'readAll']);
//PUT http://localhost:8000/api/editors/id
Route::put('/editors/{id}', [EditorController::class, 'update']);

//POST http://localhost:8000/api/authors
Route::post('/authors', [AuthorController::class, 'create']);
//DELETE http://localhost:8000/api/authors/id 
Route::delete('/authors/{id}', [AuthorController::class, 'delete']);
//GET http://localhost:8000/api/authors/id
Route::get('/authors/{id}', [AuthorController::class, 'read']);
//GET http://localhost:8000/api/authors
Route::get('/authors', [AuthorController::class, 'readAll']);
//PUT http://localhost:8000/api/authors/id
Route::put('/authors/{id}', [AuthorController::class, 'update']);
