<?php

class FollowCheck
{
    public $is_follower;
    public $is_followed;

    public $sql;
    public $requete;
    public $connec;
    public $final;


    public function __construct($is_follower, $is_followed)
    {
        $this->is_follower = $is_follower;
        $this->is_followed = $is_followed;
        $this->connec = new PDO('mysql:host=localhost;dbname=my_twitter', 'root', '');
    }
    public function checkFollow()
    {

        try {
            $this->sql = 'SELECT * from follow where follower_user_id = 
            :is_follower AND followed_user_id  = :is_followed';

            $this->requete =  $this->connec->prepare($this->sql);
            $res = $this->requete->execute(array(
                'is_follower' => $this->is_follower,
                'is_followed' => $this->is_followed
            ));

            $this->final = $this->requete->fetchAll();
            if ($this->final) {
                return true;
            } else {
                return false;
            }
        } catch (PDOException $e) {
            return ("erreur dans la vérif de follow: " . $e->getMessage());
        }
    }
}
