//cd /Applications/XAMPP/xamppfiles/htdocs/pw2171server
var iniciaApp = function() {
  //console.log("Hola App");

  var entrar= function() {
    var usuario = $('#txtUsuario').val();
    var clave = $('#txtClave').val();
    var parametros="opcion=valida"+
                    "&usuario="+usuario+
                    "&clave="+clave+
                    "&id="+Math.random();
    var validaEntrada = $.ajax({
      method:"POST",
      url:"php/datos.php",
      data:parametros,
      dataType:"json"
    });
    validaEntrada.done(function(data){
     // alert(data.respuesta);
     if (data.respuesta==true) {
      $("#datosUsuario").hide();
      $("nav").show("slow");
      $("#secUsuarios").show("slow");
     }else{
      alert("Usuario no válido prro")
     }
    });
    validaEntrada.fail(function(jqError,textStatus){
      alert ("Solicitud fallida : "+textStatus);

    });
 
  }

  var teclaUsuario= function(tecla) {
    if(tecla.which===13){
      $('#txtClave').focus();
    }
  }
  var teclaClave= function(tecla) {
    if(tecla.which===13){
      $('#btnEntrar').focus();
      entrar();
    }
  }
  var datosUsuario=function(){
    var usuario=$("#txtNomUsuario").val();
    var parametros="opcion=datosusuario"+
                    "&usuario="+usuario+
                    "&id="+Math.random();
    var du=$.ajax({
      method:"POST",
      url:"php/datos.php",
      data:parametros,
      dataType:"json"
    });
    du.done(function(data){
      if (data.respuesta==true) {
        $("#txtNomNombre").val(data.nombre);
        $("#txtNomClave").val(data.clave);
        $("#txtNomDepto").val(data.departamento);
        $("#txtNomVigencia").val(data.vigencia);
      }else{
        $("#txtNomNombre").focus();
      }

    });
    du.fail(function(jqError, txtStatus){

    });
  }
    var teclaNomUsuario=function(tecla){
      if(tecla.which==13){
        datosUsuario();
      }

  }
  var altas=function(){
    
    var usuario        =$("#txtNomUsuario").val();
    var nombre         =$("#txtNomNombre").val();
    var clave          =$("#txtNomClave").val();
    var depto          =$("#txtNomDepto").val();
    var vigencia       =$("#txtNomVigencia").val();
    
    var parametros="opcion=alta"+
                   "&usuario="+usuario+
                   "&nombre="+nombre+
                   "&clave="+clave+
                   "&departamento="+depto+
                   "&vigencia="+vigencia+
                   "&id="+Math.random();

    var altaUsuario=$.ajax({
      method:"POST",
        url:"php/datos.php",
        data:parametros,
        dataType:"json"
      });
      altaUsuario.done (function(data){
        if (data.respuesta==true) {
          alert("usuario dado de lalta");
        }else{
          alert("usuario existente o no se pudo registrar");
        }
      });
      altaUsuario.fail(function(jqError, textStatus){
          alert ('hisdhadk'+textStatus);
      });


  }
    
  //Eventos
  $('#btnEntrar').on('click', entrar);
  $('#txtUsuario').on('keypress', teclaUsuario);
  $('#txtClave').on('keypress', teclaClave);
  $('#txtNomUsuario').on("keypress", teclaNomUsuario);
  $('#btnAltas').on('click', altas);
}

//Hasta que la pagina esté bien cargada
$(document).ready(iniciaApp);
