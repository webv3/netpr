//dropDown de busca
var jqueryDropDown = function(){
	var html_content =	'<span class="value">selecione a empresa</span>'+
						'<a href="#" class="bt-drop-down">drop-down</a>'+
						'<div class="options">'+
						'	<ul>'+
						'    </ul>'+
						'	<span class="base">&nbsp;</span>'+
						'</div>';
	$(".jqueryDropDown").hide();
	
	$(".jqueryDropDown").after(html_content);
	
	$(".jqueryDropDown option").each(function(){
		$(".busca li.empresa .options ul").append("<li>" + $(this).val() + "</li>");
	});
	
	$(".busca li.empresa .bt-drop-down").live("click",function(){
		$(this).toggleClass("selected");
		$(".busca li.empresa .options ul").slideToggle(150);
		return false;
	});
	$(".busca li.empresa .options ul li").live("click",function(){
		var content = $(this).text();
		$(".busca li.empresa .value").text(content);
		
		$(".jqueryDropDown option").each(function(){
			if( $(this).text() == content){
				$(this).attr("selected", true);
			}
		});
		return false;
	});
}



//adiciona marca daqua no campo de busca - palavra chave
var marcaDaquaBusca = function(){
	var marcaDagua = $(".busca li.palavra-chave input").attr("alt");
	$(".busca li.palavra-chave input[type='text']").val(marcaDagua);
	$(".busca li.palavra-chave input[type='text']").focus(function(){
		if( $(this).val() == marcaDagua){
			$(this).val('');
		}
	});
	$(".busca li.palavra-chave input[type='text']").blur(function(){
		if( $(this).val() == ''){
			$(this).val(marcaDagua);
		}
	});
}



//muda cor de fundo dos boxs de resultado de busca quando passa mouse no link MAIS
var mudaCorFundoBtMais = function(){
	$(".resultado-busca #content .col1 .section .mais").mouseover(function() {;
    	$(this).parents(".section").css("background-color","#ebebeb");
	}).mouseout(function(){
		$(this).parents(".section").css("background-color","#fff");
	});
}



//galeria de fotos - troca as imagens com a paginação
var galeriaDeFotos = function(){
	$(".paginacao-galeria-fotos li a").click(function(){
		
		//testa se não é os botões next e prev
		if( $(this).parent().hasClass("prev") == false){
			if( $(this).parent().hasClass("next") == false){
				var image_alvo = $(this).attr("href");
				$(".galeria-fotos li").hide();
				$(image_alvo).show();
				$(this).parents("ul:eq(0)").find("li a").removeClass("selected");
				$(this).addClass("selected");
			}
		}
		return false;
	});
	
	//next e prev
	$(".paginacao-galeria-fotos li.next a").click(function(){
		var current_image = $(this).parents("ul:eq(0)").find("li a.selected").attr("href");
		if( $(this).parents("ul:eq(0)").find("li a.selected").parent().next().hasClass("next") == false){
			$(current_image).hide();
			$(current_image).next().show();
			$(this).parents("ul:eq(0)").find("li a.selected").parent().next().find("a").addClass("selected");
			$(this).parents("ul:eq(0)").find("li a.selected:eq(0)").removeClass("selected");
		}
		return false;
	});
	$(".paginacao-galeria-fotos li.prev a").click(function(){
		var current_image = $(this).parents("ul:eq(0)").find("li a.selected").attr("href");
		if( $(this).parents("ul:eq(0)").find("li a.selected").parent().prev().hasClass("prev") == false){
			$(current_image).hide();
			$(current_image).prev().show();
			$(this).parents("ul:eq(0)").find("li a.selected").parent().prev().find("a").addClass("selected");
			$(this).parents("ul:eq(0)").find("li a.selected:eq(1)").removeClass("selected");
		}
		return false;
	});
};



//invoca as funções
$(function(){
	jqueryDropDown();
	marcaDaquaBusca();
	mudaCorFundoBtMais();
	galeriaDeFotos();
});