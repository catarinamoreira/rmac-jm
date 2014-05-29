<?php require_once("assets/translations.php"); ?>
<?php require_once("assets/init.php"); ?>
<?php require_once('assets/Mobile_Detect.php'); $detect = new Mobile_Detect; ?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title><?php echo translate("Jerónimo Martins - Relatório e Contas 2013"); ?></title>
        <meta name="description" content="<?php echo translate("Relatório e Contas Jerónimo Martins 2013. Há mais de 220 anos a inovar em direção a um mundo melhor e mais sustentável."); ?>">
        <meta name="keywords" content="Relatório e Contas, relatório e contas 2013, jeronimo martins, jerónimo martins, relatorio e contas 2013, sustentabilidade, ara, pingo doce, biedronka, unilever jerónimo martins, JM relatorio e contas, annual report.">
        <link rel="canonical" href="<?php echo CURRENT_URL; ?>">
        
        <meta property="og:type" content="website">
        <meta property="og:image" content="<?php echo BASE_URL; ?>assets/images/fb-<?php echo $GLOBALS['currentLanguage']; ?>.png">
        <meta property="og:title" content="<?php echo translate("Jerónimo Martins - Relatório e Contas 2013"); ?>">
        <meta property="og:url" content="<?php echo CURRENT_URL; ?>">
        <meta property="og:description" content="<?php echo translate("Relatório e Contas Jerónimo Martins 2013. Há mais de 220 anos a inovar em direção a um mundo melhor e mais sustentável."); ?>">
        
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <link rel="shortcut icon" type="image/x-icon" href="<?php echo BASE_URL; ?>assets/images/favicon.ico"/>
        <link rel="stylesheet" href="<?php echo BASE_URL; ?>assets/css/normalize.css">
        <link rel="stylesheet" href="<?php echo BASE_URL; ?>assets/css/main.css">
        <?php if($GLOBALS['currentLanguage'] == "en") : ?>
        	<link rel="stylesheet" href="<?php echo BASE_URL; ?>assets/css/chapters-en.css">
        <?php endif; ?>
        <link rel="stylesheet" href="<?php echo BASE_URL; ?>assets/player/mediaelementplayer.min.css" />
    	<link rel="stylesheet" href="<?php echo BASE_URL; ?>assets/player/mejs-skins.css" />
    	<!--[if lte IE 8]>
			 <link rel="stylesheet" href="<?php echo BASE_URL; ?>assets/css/main.ie.css">
		<![endif]-->
		<!--[if gte IE 9]>
		  <style type="text/css"> * {filter: none !important;} </style>
		<![endif]-->
        
        <script src="<?php echo BASE_URL; ?>assets/js/vendor/modernizr-2.6.2.min.js"></script>
   	<script>
   		var translateList = <?php echo json_encode($GLOBALS['translations']) ?>;
   	</script>
    </head>
    <body class="hidden <?php if(!isset($_COOKIE['eucookie'])) echo 'cookie'; ?>" data-language="<?php echo $GLOBALS['currentLanguage']; ?>" data-baseurl="<?php echo BASE_URL; ?>" data-currenturl="<?php echo CURRENT_URL; ?>">
    	<?php if(!isset($_COOKIE['eucookie'])): ?>
			<div id="eucookielaw">
				<div>
					<p><?php echo translate("Este website utiliza <i>cookies</i> de acordo com a política em vigor. Ao continuar a navegação está a aceitar a sua utilização. Caso pretenda saber mais, consulte a nossa"); ?> <a href="<?php echo BASE_URL.$GLOBALS['currentLanguage']."/"; ?><?php echo translate("politica-de-cookies"); ?>"><?php echo translate("Política de <i>Cookies</i> aqui"); ?></a>.</p>
					<a id="removecookie" href="javascript:;"></a>
				</div>
				<span class="border"></span>
			</div>
		<?php endif; ?>
		<div class="mobilecontainer">
			<span class="border first"></span>
			<span class="border second"></span>
			<span class="border third"></span>
		</div>
    	<div class="left">
    		<a href="javascript:;" class="logo gotopage" page-id="1"><img src="<?php echo BASE_URL; ?>assets/images/logo.png" /></a>
    		<p class="capit"><span class="bar"></span><?php echo translate("Capítulos"); ?><span class="border"></span></p>
    	</div>
    	<nav class="left">
    		<a href="javascript:;" class="openmenu"></a>
    		<div>
    			<div class="menu-container <?php echo $GLOBALS['menu']; ?>">
		    		<ul class="first">
		    			<li class="restrain"><a href="javascript:;" class="gotopage" page-id="6"><span><?php echo translate("Mensagem do Presidente"); ?></span></a><span class="border"></span></li>
		    			<li class="restrain"><a href="javascript:;" class="gotopage" page-id="7"><span><?php echo translate("Mensagem do<br> Administrador-Delegado"); ?></span></a><span class="border"></span></li>
		    			<li><a href="javascript:;" class="number number-1 gotopage" page-id="10"><span class="number"></span><span><span><?php echo translate("O Grupo<br> Jerónimo Martins"); ?></span></span></a><span class="border"></span>
		    				<div>
			    				<span class="border top"></span> 
			    				<ul>
			    					<li><a href="javascript:;" class="gotopage" page-id="14"><span><span><?php echo translate("Perfil e Estrutura"); ?></span></span></a></li>
			    					<li><a href="javascript:;" class="gotopage" page-id="23"><span><span><?php echo translate("Posicionamento Estratégico"); ?></span></span></a></li>
			    					<li><a href="javascript:;" class="gotopage" page-id="24"><span><span><?php echo translate("Prémios e Reconhecimentos"); ?></span></span></a></li>
			    				</ul>
			    				<span class="border bottom"></span>
		    				</div>
		    			</li>
		    			<li><a href="javascript:;" class="number number-2 gotopage" page-id="26"><span class="number"></span><span><span><?php echo translate("Relatório consolidado<br> de Gestão"); ?></span></span></a><span class="border"></span>
		    				<div>
			    				<span class="border top"></span>
			    				<ul>
			    					<li><a href="javascript:;" class="gotopage" page-id="30"><span><span><?php echo translate("Factos-Chave do Ano"); ?></span></span></a></li>
			    					<li><a href="javascript:;" class="gotopage" page-id="30"><span><span><?php echo translate("Enquadramentos de 2013"); ?></span></span></a></li>
			    					<li><a href="javascript:;" class="gotopage" page-id="34"><span><span><?php echo translate("Desempenho do Grupo"); ?></span></span></a></li>
			    					<li><a href="javascript:;" class="gotopage" page-id="47"><span><span><?php echo translate("Desempenho das Áreas de Negócio"); ?></span></span></a></li>
			    					<li><a href="javascript:;" class="gotopage" page-id="61"><span><span><?php echo translate("Perspectivas para 2014"); ?></span></span></a></li>
			    					<li><a href="javascript:;" class="gotopage" page-id="66"><span><span><?php echo translate("Factos Subsequentes"); ?></span></span></a></li>
			    					<li><a href="javascript:;" class="gotopage" page-id="67"><span><span><?php echo translate("Proposta de Aplicação de Resultados"); ?></span></span></a></li>
			    					<li><a href="javascript:;" class="gotopage" page-id="67"><span><span><?php echo translate("Anexo ao Relatório Consolidado de Gestão"); ?></span></span></a></li>
			    				</ul>
			    				<span class="border bottom"></span>
		    				</div>
		    			</li>
		    			<li><a href="javascript:;" class="number number-3 gotopage" page-id="70"><span class="number"></span><span><span><?php echo translate("Demonstrações<br> Financeiras Consolidadas"); ?></span></span></span></a><span class="border"></span>
		    				<div>
			    				<span class="border top"></span>
			    				<ul>
			    					<li><a href="javascript:;" class="gotopage" page-id="74"><span><span><?php echo translate("Demonstrações Financeiras Consolidadas"); ?></span></span></a></li>
			    					<li><a href="javascript:;" class="gotopage" page-id="144"><span><span><?php echo translate("Declaração do Conselho de Administração"); ?></span></span></a></li>
			    					<li><a href="javascript:;" class="gotopage" page-id="145"><span><span><?php echo translate("Certificação Legal de Contas e Relatório de Auditoria"); ?></span></span></a></li>
			    					<li><a href="javascript:;" class="gotopage" page-id="146"><span><span><?php echo translate("Relatório e Parecer da Comissão de Auditoria"); ?></span></span></a></li>
			    				</ul>
			    				<span class="border bottom"></span>
		    				</div>
		    			</li>
		    			<li><a href="javascript:;" class="number number-4 gotopage" page-id="148"><span class="number"></span><span><span><?php echo translate("Governo da Sociedade"); ?></span></span></span></a><span class="border"></span>
		    				<div>
			    				<span class="border top"></span>
			    				<ul>
			    					<li><a href="javascript:;" class="gotopage" page-id="152"><span><span>I. <?php echo translate("Informação Obrigatória Sobre Estrutura Accionista, Organização E Sociedade e Governo da Sociedade"); ?></span></span></a></li>
			    					<li class="extra"><a href="javascript:;" class="gotopage" page-id="152"><span><span>A. <?php echo translate("Estrutura de Accionista"); ?></span></span></a></li>
			    					<li class="extra"><a href="javascript:;" class="gotopage" page-id="157"><span><span>B. <?php echo translate("Órgãos Socias e Comissões"); ?></span></span></a></li>
			    					<li class="extra"><a href="javascript:;" class="gotopage" page-id="178"><span><span>C. <?php echo translate("Organização Interna"); ?></span></span></a></li>
			    					<li class="extra"><a href="javascript:;" class="gotopage" page-id="192"><span><span>D. <?php echo translate("Remunerações"); ?></span></span></a></li>
			    					<li class="extra"><a href="javascript:;" class="gotopage" page-id="195"><span><span>E. <?php echo translate("Transacções com Partes Relacionadas"); ?></span></span></a></li>
			    					<li class="extra"><a href="javascript:;" class="gotopage" page-id="197"><span><span>II. <?php echo translate("Avaliação do Governo Societário"); ?></span></span></a></li>
			    				</ul>
			    				<span class="border bottom"></span>
		    				</div>
		    			</li>
		    			<li><a href="javascript:;" class="number number-5 gotopage" page-id="200"><span class="number"></span><span><span><?php echo translate("Responsabilidade corporativa<br> na criação de valor"); ?></span></span></span></a><span class="border"></span>
		    				<div>
			    				<span class="border top"></span>
			    				<ul>
			    					<li><a href="javascript:;" class="gotopage" page-id="204"><span><span><?php echo translate("A Nossa Abordagem"); ?></span></span></a></li>
			    					<li><a href="javascript:;" class="gotopage" page-id="206"><span><span><?php echo translate("Envolvimento com os <i>Stakeholders</i>"); ?></span></span></a></li>
			    					<li><a href="javascript:;" class="gotopage" page-id="210"><span><span><?php echo translate("<i>Highlights 2013</i>"); ?></span></span></a></li>
			    					<li><a href="javascript:;" class="gotopage" page-id="211"><span><span><?php echo translate("Promover a Saúde pela Alimentação"); ?></span></span></a></li>
			    					<li><a href="javascript:;" class="gotopage" page-id="216"><span><span><?php echo translate("Respeitar o Ambiente"); ?></span></span></a></li>
			    					<li><a href="javascript:;" class="gotopage" page-id="224"><span><span><?php echo translate("Comprar com Responsabilidade"); ?></span></span></a></li>
			    					<li><a href="javascript:;" class="gotopage" page-id="229"><span><span><?php echo translate("Apoiar as Comunidades Envolventes"); ?></span></span></a></li>
			    					<li><a href="javascript:;" class="gotopage" page-id="232"><span><span><?php echo translate("Ser um Empregador de Referência"); ?></span></span></a></li>
			    					<li><a href="javascript:;" class="gotopage" page-id="238"><span><span><?php echo translate("Compromissos para 2012-2014"); ?></span></span></a></li>
			    					<li><a href="javascript:;" class="gotopage" page-id="240"><span><span><?php echo translate("Os Princípios <i>Global Compact</i>"); ?></span></span></a></li>
			    				</ul>
			    				<span class="border bottom"></span>
		    				</div>
		    			</li>
						<li><a href="javascript:;" class="number number-6 gotopage" page-id="242"><span class="number"></span><span><span><?php echo translate("Relatório e contas individual"); ?></span></span></span></a><span class="border"></span>
							<div>
			    				<span class="border top"></span>
			    				<ul>
			    					<li><a href="javascript:;" class="gotopage" page-id="246"><span><span><?php echo translate("Relatório de Gestão"); ?></span></span></a></li>
			    					<li><a href="javascript:;" class="gotopage" page-id="254"><span><span><?php echo translate("Demonstrações Financeiras Individuais"); ?></span></span></a></li>
			    					<li><a href="javascript:;" class="gotopage" page-id="300"><span><span><?php echo translate("Certificação Legal de Contas e Relatório de Auditoria"); ?></span></span></a></li>
			    					<li><a href="javascript:;" class="gotopage" page-id="301"><span><span><?php echo translate("Relatório da Comissão de Auditoria"); ?></span></span></a></li>
			    				</ul>
			    				<span class="border bottom"></span>
		    				</div>
						</li>
						<li class="indice"><span class="bar"></span><a href="javascript:;" class="gotopage" page-id="2"><span class="icon"></span><span><span></span><?php echo translate("Índice"); ?></span></span></a><span class="border"></span></li>
		    		</ul>
		    		<ul class="second fixed">
		    			<li class="restrain <?php if(isset($GLOBALS['selected']) && $GLOBALS['selected'] == "terms") echo 'selected'; ?>"><span class="bar"></span><a href="<?php echo BASE_URL.$GLOBALS['currentLanguage']."/"; ?><?php echo translate("termos-e-condicoes"); ?>"></span><span><?php echo translate("Termos e Condições"); ?></span></a><span class="border"></span></li>
		    			<li class="restrain <?php if(isset($GLOBALS['selected']) && $GLOBALS['selected'] == "policy") echo 'selected'; ?>"><span class="bar"></span><a href="<?php echo BASE_URL.$GLOBALS['currentLanguage']."/"; ?><?php echo translate("politica-de-cookies"); ?>"><span><?php echo translate("Política de Cookies"); ?></span></a><span class="border"></span></li>
		    		</ul>
	    		</div>
    		</div>
    	</nav>
    	<div class="nav right">
    		<?php 
    			$languagesURLPT = "javascript:;";
				$languagesURLEN = "javascript:;";
				if($GLOBALS['menu'] == "blank" && $GLOBALS['selected'] == "terms"){
					$languagesURLPT = BASE_URL.'pt/termos-e-condicoes';
					$languagesURLEN = BASE_URL.'en/terms-and-conditions';
				}
				if($GLOBALS['menu'] == "blank" && $GLOBALS['selected'] == "policy"){
					$languagesURLPT = BASE_URL.'pt/politica-de-cookies';
					$languagesURLEN = BASE_URL.'en/cookie-policy';
				}
    		?>
    		<ul class="left languages desktop">
    			<li><a href="<?php echo $languagesURLPT; ?>" <?php if($GLOBALS['currentLanguage'] == "pt") echo 'class="selected"'; ?> data-language="pt"><span>PT</span></a></li>
    			<li><a href="<?php echo $languagesURLEN; ?>" <?php if($GLOBALS['currentLanguage'] == "en") echo 'class="selected"'; ?> data-language="en"><span>EN</span></a></li>
    		</ul>
    		<ul class="left languages mobile">
    			<?php if($GLOBALS['currentLanguage'] == "pt") : ?>
    				<li><a href="javascript:;" class="selected" data-language="pt"><span>PT</span></a></li>
    				<li><a href="<?php echo $languagesURLEN; ?>" data-language="en"><span>EN</span></a></li>
    			<?php else: ?>
    				<li><a href="javascript:;" class="selected" data-language="en"><span>EN</span></a></li>
    				<li><a href="<?php echo $languagesURLPT; ?>" data-language="pt"><span>PT</span></a></li>
    			<?php endif; ?>
    			<li class="arrow"></li>
    		</ul>
    		<ul class="left history">
    			<li class="relatory"><a href="javascript:;"><span class="icon"></span><span class="value"><span><?php echo translate("O meu Relatório"); ?></span></span></a>
    				<div class="relatory-container">
    					<div>
	    					<p><?php echo translate("Páginas <br>selecionadas"); ?></p>
	    					<div class="scroller">
	    						<ul class="clearfix">
	    						
	    						</ul>
	    					</div>
    					</div>
    					<ul>
    						<li><a href="javascript:;"><?php echo translate("Imprimir"); ?><span class="icon"></span></a></li>
    						<li><a href="javascript:;"><?php echo translate("Guardar"); ?><span class="icon"></span></a></li>
    					</ul>
    				</div>
    				
    			</li>
    		</ul>
    	</div>
    	<?php if($GLOBALS['menu'] == "self") : ?>
    	<div class="nav bottom">
    		<ul class="clearfix">
    			<li class="star">
    				<a href="javascript:;"><span class="icon"></span></a>
    				<div class="hint normal">
    					<span class="container">
    						<span class="value"><?php echo translate("Adicionar página ao Meu Relatório"); ?><span class="arrow"></span></span>
    						<span class="shadow"><span class="arrow"></span></span>
    					</span>
    				</div>
    				<div class="hint added">
    					<span class="container">
    						<span class="value"><?php echo translate("Página adicionada ao Meu Relatório"); ?><span class="arrow"></span></span>
    						<span class="shadow"><span class="arrow"></span></span>
    					</span>
    				</div>
    				<div class="hint selected">
    					<span class="container">
    						<span class="value"><?php echo translate("Remover página do Meu Relatório"); ?><span class="arrow"></span></span>
    						<span class="shadow"><span class="arrow"></span></span>
    					</span>
    				</div>
    			</li>
    			<li class="pagenumber">1</li>
    		</ul>
    	</div>
    	<div class="navigation">
    		<a href="javascript:;" class="previous disabled"><span></span></a>
    		<a href="javascript:;" class="next"><span></span></a>
    	</div>
		<?php endif;  ?>