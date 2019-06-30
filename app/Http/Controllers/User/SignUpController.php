<?php

namespace App\Http\Controllers\User;

use App\Http\Requests\User\SignUpRequest;
use App\Http\Controllers\Controller;
use App\User;

class SignUpController extends Controller
{
    public function signup(SignUpRequest $request)
    {
        return response()->json(User::signUp($request->validated()));
    }
}
