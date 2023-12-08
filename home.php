<?php 
	session_start();
	if(isset($_SESSION['user']))
	{
		echo "Bonjour " . $_SESSION['user'] . " votre mail est ". $_SESSION['mail'] . "<br><a href='logout.php'>Deconnexion</a>";
	}
	else
	{
		echo "<a href='login.php'>Connexion</a><br>";

	}

?>