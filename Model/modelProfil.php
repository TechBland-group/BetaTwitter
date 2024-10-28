<?php

class ProfilUser
{
    public $username;
    public $password;
    public $mail;
    public $sql;
    public $requete;
    public $connec;
    public $result;
    public $final;
    public $finalresult;


    public function __construct($pwd, $email, $username)
    {
        $this->password = hash('ripemd160', $pwd);
        $this->username = $username;
        $this->mail = $email;
        $this->connec = new PDO('mysql:host=localhost;dbname=my_twitter', 'root', '');
        //  var_dump($this->password);
    }
    public function update()
    {

        try {
            $this->sql = 'UPDATE user SET username = :username, email = :email,pass = :pass WHERE id = 1';

            $this->requete = $this->connec->prepare($this->sql);
            $res = $this->requete->execute(
                array(
                    'username' => $this->username,
                    'email' => $this->mail,
                    'pass' => $this->password
                )
            );

            $this->final = $this->requete->fetchAll();

            return $this->final;
        } catch (PDOException $e) {
            return "BAD LUCK! " . $e->getMessage() ;
        }
    }
}
