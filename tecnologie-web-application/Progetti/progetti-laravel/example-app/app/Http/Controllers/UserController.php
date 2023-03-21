<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{

   public function create(Request $request) {
        //username VARCHAR(255)
        //email VARCHAR(255)
        //name VARCHAR(255)
        //surname VARCHAR(255)
        //age INTEGER
        //title VARCHAR(255) DEFAULT NULL

        $validator = Validator::make(
            $request->all(),
            [
                'username' => 'required|max:255',
                'email' => ['required', 'max:255', 'email'],
                'name' => ['required', 'max:255'],
                'surname' => 'required|max:255',
                'age' => ['required', 'integer', 'max:130', 'min:18'],
                'title' => 'max:255'
            ]
        );

        if($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()
            ], 400);
        }
   }
}