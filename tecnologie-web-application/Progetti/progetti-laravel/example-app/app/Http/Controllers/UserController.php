<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function test(Request $request){
        $demo = [
            'name'=> 'stefano',
            'surname'=> 'Bianchini',
            'active'=> true

        ];
        //return response(json_encode($demo), 201,['Content-Type' => 'application/json'] );
        return response()->json($demo);
    }
}
