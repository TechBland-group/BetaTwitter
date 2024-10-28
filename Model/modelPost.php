<?php

class Post
{
    public $body;
    public $user_id;

    public $sql;
    public $requete;
    public $connec;
    public $final;


    public function __construct($body, $user_id)
    {
        $this->body = $body;
        $this->user_id = $user_id;
        $this->connec = new PDO('mysql:host=localhost;dbname=my_twitter', 'root', '');
        //  var_dump($this->password);
    }
    public function savePost()
    {

        try {
            $this->sql = 'INSERT INTO post(body, user_id, created_at, status) VALUES
             ( :body, :user_id, NOW(), "active")';

            $this->requete =  $this->connec->prepare($this->sql);
            $res = $this->requete->execute(array(
                'body' => $this->body,
                'user_id' => $this->user_id
            ));

            $this->final = $this->requete->fetchAll();

            return $this->final;
        } catch (PDOException $e) {
            return ("erreur dans le model post: " . $e->getMessage());
        }
    }
}
