<?php

class GetFollowing
{
    public $userId;
    public $sql;
    public $requete;
    public $connec;
    public $final;


    public function __construct($userId)
    {
        $this->userId = $userId;

        $this->connec = new PDO('mysql:host=localhost;dbname=my_twitter', 'root', '');
    }
    public function following()
    {

        try {
            $this->sql = 'SELECT username, id FROM user JOIN follow ON followed_user_id = user.id 
            WHERE follower_user_id = :userId';

            $this->requete = $this->connec->prepare($this->sql);
            $res = $this->requete->execute(
                array(
                    'userId' => $this->userId
                )
            );

            $this->final = $this->requete->fetchAll();

            return $this->final;
        } catch (PDOException $e) {
            return ("BAD LUCK! " . $e->getMessage());
        }
    }
}
