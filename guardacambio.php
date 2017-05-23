<?php
	include("utilerias.php"); //include= incluye todo el documento importado - requiere= solo incluye lo que necesitas D:
	$conexion = conecta();
	
	$u= GetSQLValueString($_POST["txtUsuario"],"text");
	$n= GetSQLValueString($_POST["txtNombre"], "text");
	$c= GetSQLValueString(md5($_POST["txtClave"]), "text");
	$d= GetSQLValueString($_POST["txtDepto"], "int");
	$v= GetSQLValueString($_POST["txtVigencia"], "int");

	//VALIDAR QUE EL USUARIO NO SEA REPETIDO
	$consulta= sprintf("update set nombre=%s, clave=%s, departamento=%d, vigencia=%d  where usuario=%s", $n, $c, $d, $v, $u); 
Mysql_query($consulta)
	if(mysql_num_rows($respuesta)>0){
		print("Usuario actualizado /o/ ");
		
	}else{

		print("Usuario no modificado prro lol");
	}
?>