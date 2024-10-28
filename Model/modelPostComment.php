<?php

class Comment
{
    public $body;
    public $user_id;
    public $post_id;

    public $sql;
    public $requete;
    public $connec;
    public $final;


    public function __construct($post_id, $user_id, $body)
    {
        $this->post_id = $post_id;
        $this->body = $body;
        $this->user_id = $user_id;
        $this->connec = new PDO('mysql:host=localhost;dbname=my_twitter', 'root', '');
        //  var_dump($this->password);
    }
    public function postComment()
    {

        try {
            $this->sql = 'INSERT INTO post(body, user_id, post_id, created_at, status) 
            VALUES ( :body, :user_id, :post_id, NOW(), "active")';

            $this->requete =  $this->connec->prepare($this->sql);
            $res = $this->requete->execute(array(
                'body' => $this->body,
                'user_id' => $this->user_id,
                'post_id' => $this->post_id
            ));

            $this->final = $this->requete->fetchAll();

            return $this->final;
        } catch (PDOException $e) {
            return ("erreur dans le model post: " . $e->getMessage());
        }
    }
}
