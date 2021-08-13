<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\ImageCourse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ImageCourseController extends Controller
{
    public function create(Request $request)
    {
        $rules = [
            'image' => 'required|url',
            'course_id' => 'required|integer'
        ];
        $data = $request->all();
        $validator = Validator::make($data, $rules);
        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => $validator->errors()
            ], 400);
        }
        $course_id = $request->input('course_id');
        $course = Course::find($course_id);
        if (!$course) {
            return response()->json([
                'status' => 'error',
                'message' => 'course not found'
            ], 404);
        }
        $imageCourse = ImageCourse::create($data);
        return response()->json([
            'status' => 'success',
            'message' => $imageCourse
        ]);
    }
    public function destroy($id){
        $imageCourse = ImageCourse::find($id);
        if(!$imageCourse){
            return response()->json([
                'status' => 'error',
                'message' => 'ImageCourse not found'
            ], 404);
        }
        $imageCourse->delete();
        return response()->json([
            'status' => 'success',
            'message' => 'imageCourse deleted'
        ]);
    }
}
