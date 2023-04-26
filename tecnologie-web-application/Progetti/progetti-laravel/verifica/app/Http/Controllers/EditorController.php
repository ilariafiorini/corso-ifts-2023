<?php

namespace App\Http\Controllers;
use App\Models\Editor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class EditorController extends Controller
{
    public function create(Request $request)
    {
    //https://laravel.com/docs/10.x/validation
    $validator = Validator::make($request->all(), [
        'name' => ['required', 'string','max:100'],
        'vat_number' => ['required', 'string','max:20']
    ]);

    if ($validator->fails()) {
        return response()->json([
            'errors' => $validator->errors()
        ], 400);
    }

    //Qui dovrò agire su DB facendo un INSERT
    $editor = new Editor();
    $editor->name = $request->input('name');
    $editor->vat_number = $request->input('vat_number');
    $editor->save();

    return response()->json($editor, 201);

}

public function delete(Request $request, $id)
{
    //DELETE http://localhost:8000/api/users/7
    //$id = 7

    //Operazione di DELETE su DB

    $editor = Editor::where('id', '=', $id)->firstOrFail();
    $editor->delete();

    return response()->json(null, 204);
}

public function read(Request $request, $id)
{
    //GET http://localhost:8000/api/users/3
    //$id=3

    //Operazione di SELECT su DB
    //$user = User::findOrFail($id);
    $editor = Editor::where('id', '=', $id)->with('books')->firstOrFail();

    return response()->json($editor);

}

public function readAll(Request $request)
{
    //Operazione di SELECT su DB
    //SELECT * FROM users 
    $editors = Editor::get();
    return response()->json($editors, 200);
}

public function update(Request $request, $id)
{
    //PUT http://localhost:8000/api/users/22
    //$id=22     

    //https://laravel.com/docs/10.x/validation
    $validator = Validator::make($request->all(), [
        'name' => ['required', 'string','max:100'],
        'vat_number' => ['required', 'string','max:20']
    ]);

    if ($validator->fails()) {
        return response()->json([
            'errors' => $validator->errors()
        ], 400);
    }

    //Ora eseguo la UPDATE su database
    $editor = Editor::where('id', '=', $id)->firstOrFail();
    $editor->name = $request->input('name');
    $editor->vat_number = $request->input('vat_number');
    $editor->save();

    return response()->json($editor, 200);

}
}