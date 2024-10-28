<?php

require '../Model/modelProfil.php';
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
            header("Access-Control-Allow-Headers: * ");
        }
        exit(0);
    }
}
$userProfil = json_decode(file_get_contents("php://input"), true);
$profil = new ProfilUser($userProfil['pwd'], $userProfil['mail'], $userProfil['username']);
$modif = $profil->update();
echo json_encode($modif);
