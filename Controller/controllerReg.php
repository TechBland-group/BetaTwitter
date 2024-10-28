<?php

require_once('../Model/modelReg.php');
header("Access-Control-Allow-Origin: *");
header("Content-type: application/json");

if (isset($_SERVER['HTTP_REFERER'])) {
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');


    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])) {
        header("Access-Control-Allow-Methods: GET, POST, PUT, PATCH, OPTIONS");
    }

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])) {
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
    }


    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])) {
            header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
        }

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])) {
            header("Access-Control-Allow-Headers: *");
        }
        exit(0);
    }
}
$user = json_decode(file_get_contents("php://input"), true);
$validation = new RegisterUser(
    $user['username'],
    $user['name'],
    $user['birthdate'],
    $user['email'],
    $user['pass'],
);

$final = $validation->register();
echo json_encode($final);
