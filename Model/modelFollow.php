<?php

class Following
{
    public $follower_user_id;
    public $followed_user_id;
    public $is_following;

    public $sql;
    public $requete;
    public $connec;
    public $final;


    public function __construct($follower_user_id, $followed_user_id, $is_following)
    {
        $this->follower_user_id = $follower_user_id;
        $this->followed_user_id = $followed_user_id;
        $this->is_following = $is_following;

        $this->connec = new PDO('mysql:host=localhost;dbname=my_twitter', 'root', '');
    }
    public function followUnfollow()
    {

        try {
            if ($this->is_following == true) {
                $this->sql = 'delete  from follow where follower_user_id = 
                :follower_user_id and followed_user_id = :followed_user_id;';
            } elseif ($this->is_following == false) {
                $this->sql = 'insert into follow( follower_user_id, followed_user_id,
                 follow_created_at) values(:follower_user_id, :followed_user_id, NOW());';
            }

            $this->requete =  $this->connec->prepare($this->sql);
            $res = $this->requete->execute(array(
                'follower_user_id' => $this->follower_user_id,
                'followed_user_id' => $this->followed_user_id
            ));

            $this->final = $this->requete->fetchAll();

            return true;
        } catch (PDOException $e) {
            return ("erreur dans le model de follow: " . $e->getMessage());
        }
    }
}
