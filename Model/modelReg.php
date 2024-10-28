<?php

use PDO;

class RegisterUser
{
    public $username;
    public $name;
    public $birthdate;
    public $email;
    public $pass;
    public $sql;
    public $sqlMail;
    public $requete;
    public $requeteMail;
    public $result;
    public $resultMail;
    public $data;
    public $connec;

    public function __construct($username, $name, $birthdate, $email, $pass)
    {
        $this->username = $username;
        $this->name = $name;
        $this->birthdate = $birthdate;
        $this->email = $email;
        $this->pass = hash('ripemd160', $pass);
        $this->connec = new PDO('mysql:host=localhost;dbname=my_twitter', 'root', '');
    }

    public function register()
    {
        try {
            $this->sql = 'INSERT INTO user (username, name, birthdate, email, pass, created_at, modif_at)
             VALUES (:username, :name, :birthdate, :email, :pass, now(), now())';

            $this->requete =  $this->connec->prepare($this->sql);

            $this->requete->bindParam(':username', $this->username);
            $this->requete->bindParam(':name', $this->name);
            $this->requete->bindParam(':birthdate', $this->birthdate);
            $this->requete->bindParam(':email', $this->email);
            $this->requete->bindParam(':pass', $this->pass);
            $this->result = $this->requete->execute();
            return $this->result;
        } catch (PDOException) {
            return ("email déja enregistré");
        }
    }
}
