<?php

class Post
{
    public $user_id;
    public $post_id;
    public $sql;
    public $sqlBody;
    public $body;
    public $bodyRequete;
    public $requete;
    public $connec;
    public $final;


    public function __construct($user_id, $post_id)
    {
        $this->post_id = $post_id;
        $this->user_id = $user_id;
        $this->connec = new PDO('mysql:host=localhost;dbname=my_twitter', 'root', '');
    }
    public function retweet()
    {

        try {
            $this->sqlBody = 'select body from post where id = :post_id';
            $this->bodyRequete = $this->connec->prepare($this->sqlBody);
            $this->bodyRequete->execute(array(
                'post_id' => $this->post_id
            ));
            $this->body = $this->bodyRequete->fetchAll();

            $this->sql = 'INSERT INTO post(user_id, post_id, body, created_at, status)
             VALUES ( :user_id, :post_id, :contenu, NOW(), "active")';

            $this->requete =  $this->connec->prepare($this->sql);
            $res = $this->requete->execute(array(
                'post_id' => $this->post_id,
                'user_id' => $this->user_id,
                'contenu' => $this->body[0][0]
            ));

            $this->final = $this->requete->fetchAll();

            return $this->final;
        } catch (PDOException $e) {
            return ("erreur dans le model post: " . $e->getMessage());
        }
    }
}
