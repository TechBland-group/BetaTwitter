<?php

class SearchUser
{
    public $username;
    public $connec;
    public $sql;
    public $result;
    public $final;
    public $requete;

    public function __construct($username)
    {
        $this->username = $username;
        $this->connec = new PDO('mysql:host=localhost;dbname=my_twitter', 'root', '');
    }
    public function getUser()
    {
        try {
            $this->sql = 'SELECT username, id from user where username like :username ';

            $this->requete =  $this->connec->prepare($this->sql);
            $res = $this->requete->execute(array(
                'username' => $this->username . '%'
            ));

            $this->final = $this->requete->fetchAll();

            return $this->final;
        } catch (PDOException $e) {
            return ("problème de requête userSearch:  " . $e->getMessage());
        }
    }
}
