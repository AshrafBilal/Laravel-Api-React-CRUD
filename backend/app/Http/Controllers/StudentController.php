<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    public function index(){
        $students = Student::all();

        return response()->json([
            'status' => 200,
            'students' => $students,
        ]);
    }

    public function store(Request $request){
        
        $student = new Student;
        $student->name = $request->input('name');
        $student->course = $request->input('course');
        $student->email = $request->input('email');
        $student->phone = $request->input('phone');

        $student->save();

        return response()->json([
            'status' => 200,
            'message' => 'Student Added Successfully',
        ]);
    }
}
