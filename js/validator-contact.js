$( document ).ready( function () {
    var $successMsg = $(".contact-Thakns");
      $( "#contact_form" ).validate( {
        rules: {
          name: "required",
          email: {required: true, email: true},   
          razon: "required",               
          message: "required"
          },
        messages: {
          name: "Por favor Ingrese su Nombre",
          email:{required: "Por favor Ingrese un Correo Electronico",
                email:"El formato de correo electrónico no es válido EJ: example@mail.com"},
          razon: "Por favor ingrese La Razón Social",                    
          message: "Por favor escriba un mensaje."
          },
        errorElement: "span",
        submitHandler: function(form) {          
          $successMsg.addClass('show');
          $(form).ajaxSubmit();  
        },
        errorPlacement: function ( error, element ) {
          // Add the `invalid-feedback` class to the error element
          error.addClass( "invalid-feedback" );
          error.insertAfter( element );
        },
        highlight: function ( element, errorClass, validClass ) {
          $( element ).addClass("is-invalid").removeClass("is-valid");
        },
        unhighlight: function (element, errorClass, validClass) {
          $( element ).addClass("is-valid").removeClass("is-invalid");
        }
        
      } );
    } );

