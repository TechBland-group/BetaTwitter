<?php

class LoginUser
{
    public $password;
    public $mail;
    public $sql;
    public $requete;
    public $connec;
    public $result;
    public $final;
    public $finalresult;


    public function __construct($pwd, $email)
    {
        $this->password = hash('ripemd160', $pwd);
        $this->mail = $email;
        $this->connec = new PDO('mysql:host=localhost;dbname=my_twitter', 'root', '');
  //  var_dump($this->password);
    }
    public function connection()
    {

        try {
            $this->sql = 'SELECT * FROM user WHERE email LIKE :email and pass LIKE :pass';

            $this->requete =  $this->connec->prepare($this->sql);
            $res = $this->requete->execute(array(
                'email' => $this->mail,
                'pass' => $this->password
            ));

            $this->final = $this->requete->fetchAll();

            return $this->final;
        } catch (PDOException) {
            return ("mauvais identifiant");
        }
    }
}
