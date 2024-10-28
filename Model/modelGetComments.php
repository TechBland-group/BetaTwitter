<?php

class GetComment
{
    public $idPost;

    public $sql;
    public $requete;
    public $connec;
    public $final;


    public function __construct($idPost)
    {

        $this->idPost = $idPost;
        $this->connec = new PDO('mysql:host=localhost;dbname=my_twitter', 'root', '');
    }
    public function getComment()
    {

        try {
            $this->sql = 'SELECT username, body, post_id, post.id FROM post join user on user.id = 
            post.user_id where post_id = :idPost';

            $this->requete =  $this->connec->prepare($this->sql);
            $res = $this->requete->execute(array(
                'idPost' => $this->idPost,

            ));

            $this->final = $this->requete->fetchAll();

            return $this->final;
        } catch (PDOException $e) {
            return ("erreur lors de la recupération de l'id du commentaire crée: " . $e->getMessage());
        }
    }
}
