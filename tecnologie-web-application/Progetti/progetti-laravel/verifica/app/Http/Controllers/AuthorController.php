<?php

namespace App\Http\Controllers;
use App\Models\Author;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AuthorController extends Controller
{
    public function create(Request $request)
    {
    //https://laravel.com/docs/10.x/validation
    $validator = Validator::make($request->all(), [
        'name' => ['required', 'string','max:100'],
        'surname' => ['required', 'string','max:100']
    ]);

    if ($validator->fails()) {
        return response()->json([
            'errors' => $validator->errors()
        ], 400);
    }

    //Qui dovrò agire su DB facendo un INSERT
    $author = new Author();
    $author->name = $request->input('name');
    $author->surname = $request->input('surname');
    $author->save();

    return response()->json($author, 201);

}

public function delete(Request $request, $id)
{
    //DELETE http://localhost:8000/api/users/7
    //$id = 7

    //Operazione di DELETE su DB

    $author = Author::where('id', '=', $id)->firstOrFail();
    $author->delete();

    return response()->json(null, 204);
}

public function read(Request $request, $id)
{
    //GET http://localhost:8000/api/users/3
    //$id=3

    //Operazione di SELECT su DB
    //$user = User::findOrFail($id);
    $author = Author::where('id', '=', $id)->with('books')->firstOrFail();

    return response()->json($author);

}

public function readAll(Request $request)
{
    //Operazione di SELECT su DB
    //SELECT * FROM users 
    $authors = Author::get();
    return response()->json($authors, 200);
}

public function update(Request $request, $id)
{
    //PUT http://localhost:8000/api/users/22
    //$id=22     

    //https://laravel.com/docs/10.x/validation
    $validator = Validator::make($request->all(), [
        'name' => ['required', 'string','max:100'],
        'surname' => ['required', 'string','max:100']
    ]);

    if ($validator->fails()) {
        return response()->json([
            'errors' => $validator->errors()
        ], 400);
    }

    //Ora eseguo la UPDATE su database
    $author = Author::where('id', '=', $id)->firstOrFail();
    $author->name = $request->input('name');
    $author->surname = $request->input('surname');
    $author->save();

    return response()->json($author, 200);

}
}
