<?php

class GetTweet
{
    public $body;
    public $user_id;
    public $connec;
    public $sql;
    public $result;
    public $final;
    public $requete;

    public function __construct($user_id)
    {
        $this->user_id = $user_id;
        $this->connec = new PDO('mysql:host=localhost;dbname=my_twitter', 'root', '');
    }
    public function getTweet()
    {
        try {
            $this->sql = "SELECT post.*, user.username
            FROM post
            JOIN user ON post.user_id = user.id
            LEFT JOIN follow ON post.user_id = follow.followed_user_id
            WHERE (post.user_id = :id_utilisateur OR follow.follower_user_id = :id_utilisateur)
            ORDER BY id DESC
            ";

            $this->requete =  $this->connec->prepare($this->sql);
            $res = $this->requete->execute(array(
                'id_utilisateur' => $this->user_id
            ));

            $this->final = $this->requete->fetchAll();

            return $this->final;
        } catch (PDOException) {
            return ("mauvais identifiant");
        }
    }
}
