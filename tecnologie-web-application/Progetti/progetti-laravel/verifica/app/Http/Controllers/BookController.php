<?php

namespace App\Http\Controllers;
use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class BookController extends Controller
{
    public function create(Request $request)
    {
        // - id
        // - title VARCHAR(100)
        // - num_pages INTEGER
        // - abstract VARCHAR(255)
        // - editor_id UNSIGNED BIG INTEGER, Foreign Key su tabella editors
        // - author_id UNSIGNED BIG INTEGER, Foreign Key su tabella authors


    $validator = Validator::make($request->all(), [
        'title' => ['required', 'string','max:100'],
        'num_page' => ['required', 'integer'],
        'abstract' => ['required', 'string','max:255'],
        'editor_id' => ['required', 'integer'],
        'author_id' => ['required', 'integer']
    ]);

    if ($validator->fails()) {
        return response()->json([
            'errors' => $validator->errors()
        ], 400);
    }

    //Qui dovrò agire su DB facendo un INSERT
    $book = new Book();
    $book->name = $request->input('name');
    $book->num_page = $request->input('num_page');
    $book->abstract = $request->input('abstract');
    $book->editor_id = $request->input('editor_id');
    $book->author_id = $request->input('author_id');
    $book->save();

    return response()->json($book, 201);

}

public function delete(Request $request, $id)
{
    //DELETE http://localhost:8000/api/users/7
    //$id = 7

    //Operazione di DELETE su DB

    $book = Book::where('id', '=', $id)->firstOrFail();
    $book->delete();

    return response()->json(null, 204);
}

public function read(Request $request, $id)
{
    //GET http://localhost:8000/api/users/3
    //$id=3

    //Operazione di SELECT su DB
    //$user = User::findOrFail($id);
    $book = Book::where('id', '=', $id)->with(['author', 'editor'])->firstOrFail();
    return response()->json($book);

}

public function readAll(Request $request)
{
    //Operazione di SELECT su DB
    //SELECT * FROM users 
    $books = Book::get();
    return response()->json($books, 200);
}

public function update(Request $request, $id)
{
    //PUT http://localhost:8000/api/users/22
    //$id=22     

    //https://laravel.com/docs/10.x/validation
    $validator = Validator::make($request->all(), [
        'title' => ['required', 'string','max:100'],
        'num_page' => ['required', 'integer'],
        'abstract' => ['required', 'string','max:255'],
        'editor_id' => ['required', 'integer'],
        'author_id' => ['required', 'integer']
    ]);

    if ($validator->fails()) {
        return response()->json([
            'errors' => $validator->errors()
        ], 400);
    }

    //Ora eseguo la UPDATE su database
    $book = Book::where('id', '=', $id)->firstOrFail();
    $book->name = $request->input('name');
    $book->num_page = $request->input('num_page');
    $book->abstract = $request->input('abstract');
    $book->editor_id = $request->input('editor_id');
    $book->author_id = $request->input('author_id');
    $book->save();

    return response()->json($book, 200);

}
}