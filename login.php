<?php 
	if(isset($_POST['sub']))
	{
		$bdd = new PDO('mysql:host=localhost;dbname=mysql','newuser','123456');
		$sql = "SELECT * FROM user WHERE user = '" . $_POST['user'] . "'";
		$rs = $bdd->query($sql);
		$lignes = $rs->fetchAll();
		if(count($lignes) == 1)
		{
			if(password_verify($_POST['mdp'], $lignes[0]['mdp']))
			{
				echo 'mdp good<br>';
				session_start();
				$_SESSION['user'] = $lignes[0]['user'];
				$_SESSION['mail'] = $lignes[0]['mail'];
				header('Location: home.php');
			}

		}
		echo 'auth failed<br>';
	}


?>


<form method='post'>
	Login :<input type="text" name="user" required><br>
	MDP :  <input type="password" name="mdp"required ><br>
	<input type="submit" name="sub" value="Login">
</form>