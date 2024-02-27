<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class LandingPageController extends Controller
{
    public function index() {
        return Inertia::render('Index',[
            'message' => 'Pesan',
            'contact' => '0987654321'
        ]);
    }
}
