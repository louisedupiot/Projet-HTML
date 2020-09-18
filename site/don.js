console.log("Ce programme JS vient d'être chargé");
$(document).ready(function()
{
	console.log("Le document est prêt");

	$('#nom').keyup(function(event)
		{
			console.log("Une touche a été appuyée");
			var texte=$("#nom").val();
			if(/[^a-zA-Z '-]/.test(texte))
			{
				$('#erreur-nom').show();
			}
			else
			{
				$('#erreur-nom').hide();
			}
			texte=texte.toLowerCase();
			texte=texte.replace(/[^a-z]+/g,"-");
			$('#login').val(texte);
		});

	$('.email_label').keyup(function(event)
		{
			console.log('saisie email');
			var email=$('.email_label').val();
			$('#erreur-email').toggle(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(email)===false);
		});

	$('#mdp').keyup(function(event)
		{
			console.log("saisie du mdp");
			var mdp=$("#mdp").val();
			$('#erreur-mdp').toggle(mdp.length<6);
			var confirm=$('#conf').val();
			$('#erreur-conf').toggle(mdp!==confirm);

		});

	$('#conf').keyup(function(event)
		{
			console.log('confirmation');
			var mdp=$('#mdp').val();
			var confirm=$('#conf').val();
			$('#erreur-conf').toggle(mdp!==confirm);
		});

		$('form').submit(function(event)
			{
				if(CCC)
				{
					DDD;
					EEE('Merci de corriger les erreurs.');
				}
			});

	console.log("La mise en place est finie. En attente d'événements...");
});
