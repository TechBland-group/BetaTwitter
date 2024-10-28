<?php

class GetComment
{
    public $body;
    public $id_de_base;
    public $connec;
    public $sql;
    public $result;
    public $final;
    public $requete;

    public function __construct($id_de_base)
    {
        $this->id_de_base = $id_de_base;
        $this->connec = new PDO('mysql:host=localhost;dbname=my_twitter', 'root', '');
    }
    public function getPost()
    {
        try {
            $this->sql = "SELECT body from post where id = :id_de_base;";

            $this->requete =  $this->connec->prepare($this->sql);
            $res = $this->requete->execute(array(
                'id_de_base' => $this->id_de_base
            ));

            $this->final = $this->requete->fetchAll();

            return $this->final;
        } catch (PDOException) {
            return ("commentaire haineux");
        }
    }
}
