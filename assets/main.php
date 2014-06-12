<?php $GLOBALS['menu'] = "self"; include('../header.php'); ?>
<div class="page-container">
	<div id="p1" class="page withBG">
		<img src="<?php echo BASE_URL; ?>assets/images/blue-gradient.png" class="background" />
		<div class="hidden">
			<div class="center">
				<img src="<?php echo BASE_URL; ?>assets/images/<?php echo $GLOBALS["currentLanguage"]; ?>/homepage.png" />
				<span class="buttoncontainer clearfix relativetodoc"><span><a href="<?php echo BASE_URL; ?>export/PDFs/jmrc13_<?php echo $GLOBALS["currentLanguage"]; ?>.pdf" target="_blank" class="button pdf orange"><?php echo translate("Download em PDF"); ?> <span class="icon"></span></a></span></span>
			</div>
		</div>
	</div>
	<?php /*<div id="page-1" class="page withBG">
		<img src="<?php echo BASE_URL; ?>assets/images/blue-gradient.png" class="background" />
		<div class="hidden">
			<div class="center">
				<div class="video">
					<img src="<?php echo BASE_URL; ?>assets/images/homepage-video.png" />
					<div class="clearfix videos-container">
						<div class="left col-2">
							<div>
								<a href="javascript:;" class="gotopage clearfix" page-id="3">
									<span class="video-content">
										<span style="height:170px;">
											<span class="value">
												<span><?php echo translate("Mensagem"); ?></span><br>
												<span><?php echo translate("do Presidente"); ?></span>
											</span>
											<span class="play"><span></span></span>
										</span>
									</span>
								</a>
							</div>
						</div>
						<div class="right col-2">
							<div>
								<a href="javascript:;" class="gotopage clearfix" page-id="4">
									<span class="video-content">
										<span style="height:170px;">
											<span class="value">
												<span><?php echo translate("Mensagem do"); ?></span><br>
												<span><?php echo translate("Administrador-Delegado"); ?></span>
											</span>
											<span class="play"><span></span></span>
										</span>
									</span>
								</a>
							</div>
						</div>
					</div>
					<a href="#" class="button pdf orange right">Download em PDF <span class="icon"></span></a>
				</div>
			</div>
		</div>
	</div>*/ ?>
	
	
	<div id="p2" class="page indice withBG">
		<img src="<?php echo BASE_URL; ?>assets/images/blue-gradient.png" class="background" />
		<div>
			<div>
				<div class="row">
					<div class="mobclear">
						<div class="left yellow col-3">
							<div>
								<span>1</span>
								<ul>
									<li class="featured">
										<a href="javascript:;" class="gotopage clearfix" page-id="6">
											<span class="value clearfix"><span><?php echo translate("Mensagem do Presidente"); ?></span></span>
											<span class="number">6</span>
										</a>
									</li>
									<li class="featured">
										<a href="javascript:;" class="gotopage clearfix" page-id="7">
											<span class="value clearfix"><span><?php echo translate("Mensagem do<br> Administrador-Delegado"); ?></span></span>
											<span class="number">7</span>
										</a>
									</li>
									<li class="featured">
										<a href="javascript:;" class="gotopage clearfix" page-id="10">
											<span class="value clearfix"><span><?php echo translate("O Grupo<br> Jerónimo Martins"); ?></span></span>
										</a>
									</li>
								</ul>
								<ul>
									<li>
										<a href="javascript:;" class="gotopage" page-id="14">
											<span class="value"><b>1.</b> <?php echo translate("Perfil e Estrutura"); ?></span><span class="number">14</span>
										</a>
									</li>
									<li>
										<a href="javascript:;" class="gotopage" page-id="23">
											<span class="value"><b>2.</b> <?php echo translate("Posicionamento Estratégico"); ?></span><span class="number">23</span>
										</a>
									</li>
									<li>
										<a href="javascript:;" class="gotopage" page-id="24">
											<span class="value"><b>3.</b> <?php echo translate("Prémios e Reconhecimentos"); ?></span><span class="number">24</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div class="left blue col-3">
							<div>
								<span>2</span>
								<ul>
									<li class="featured">
										<a href="javascript:;" class="gotopage clearfix" page-id="26">
											<span class="value clearfix"><span><?php echo translate("Relatório consolidado<br> de Gestão"); ?></span></span>
										</a>
									</li>
								</ul>
								<ul>
									<li><a href="javascript:;" class="gotopage" page-id="30"><span class="value"><b>1.</b> <?php echo translate("Factos-Chave do Ano"); ?></span><span class="number">30</span></a></li>
			    					<li><a href="javascript:;" class="gotopage" page-id="30"><span class="value"><b>2.</b> <?php echo translate("Enquadramentos de 2013"); ?></span><span class="number">30</span></a></li>
			    					<li><a href="javascript:;" class="gotopage" page-id="34"><span class="value"><b>3.</b> <?php echo translate("Desempenho do Grupo"); ?></span><span class="number">34</span></a></li>
			    					<li><a href="javascript:;" class="gotopage" page-id="47"><span class="value"><b>4.</b> <?php echo translate("Desempenho das Áreas de Negócio"); ?></span><span class="number">47</span></a></li>
			    					<li><a href="javascript:;" class="gotopage" page-id="61"><span class="value"><b>5.</b> <?php echo translate("Perspectivas para 2014"); ?></span><span class="number">61</span></a></li>
			    					<li><a href="javascript:;" class="gotopage" page-id="66"><span class="value"><b>6.</b> <?php echo translate("Factos Subsequentes"); ?></span><span class="number">66</span></a></li>
			    					<li><a href="javascript:;" class="gotopage" page-id="67"><span class="value"><b>7.</b> <?php echo translate("Proposta de Aplicação de Resultados"); ?></span><span class="number">67</span></a></li>
			    					<li><a href="javascript:;" class="gotopage" page-id="67"><span class="value"><b>8.</b> <?php echo translate("Anexo ao Relatório Consolidado de Gestão"); ?></span><span class="number">67</span></a></li>
								</ul>
							</div>
						</div>
					</div>
					<div class="left orange col-3 last">
						<div>
							<span>3</span>
							<ul>
								<li class="featured">
									<a href="javascript:;" class="gotopage clearfix" page-id="70">
										<span class="value clearfix"><span><?php echo translate("Demonstrações<br> Financeiras Consolidadas"); ?></span></span>
									</a>
								</li>
							</ul>
							<ul>
								<li><a href="javascript:;" class="gotopage" page-id="74"><span class="value"><b>1.</b> <?php echo translate("Demonstrações Financeiras Consolidadas"); ?></span><span class="number">74</span></a></li>
		    					<li><a href="javascript:;" class="gotopage" page-id="144"><span class="value"><b>2.</b> <?php echo translate("Declaração do Conselho de Administração"); ?></span><span class="number">144</span></a></li>
		    					<li><a href="javascript:;" class="gotopage" page-id="145"><span class="value"><b>3.</b> <?php echo translate("Certificação Legal de Contas e Relatório de Auditoria"); ?></span><span class="number">145</span></a></li>
		    					<li><a href="javascript:;" class="gotopage" page-id="146"><span class="value"><b>4.</b> <?php echo translate("Relatório e Parecer da Comissão de Auditoria"); ?></span><span class="number">146</span></a></li>
							</ul>
						</div>
					</div>
					<div class="left yellow col-3 extracol">
						<div>
							<span>4</span>
							<ul>
								<li class="featured">
									<a href="javascript:;" class="gotopage clearfix" page-id="148">
										<span class="value clearfix"><span><?php echo translate("Governo da<br> Sociedade"); ?></span></span>
									</a>
								</li>
							</ul>
							<ul>
								<li><a href="javascript:;" class="gotopage" page-id="152"><span class="value"><b>Parte I.</b> <?php echo translate("Informação Obrigatória Sobre Estrutura Accionista, Organização E Sociedade e Governo da Sociedade"); ?></span><span class="number">146</span></a></li>
		    					<li class="extra"><a href="javascript:;" class="gotopage" page-id="152"><span class="value"><b>Secção A.</b> <?php echo translate("Estrutura de Accionista"); ?></span><span class="number">152</span></a></li>
		    					<li class="extra"><a href="javascript:;" class="gotopage" page-id="157"><span class="value"><b>Secção B.</b> <?php echo translate("Órgãos Socias e Comissões"); ?></span><span class="number">157</span></a></li>
		    					<li class="extra"><a href="javascript:;" class="gotopage" page-id="178"><span class="value"><b>Secção C.</b> <?php echo translate("Organização Interna"); ?></span><span class="number">178</span></a></li>
		    					<li class="extra"><a href="javascript:;" class="gotopage" page-id="192"><span class="value"><b>Secção D.</b> <?php echo translate("Remunerações"); ?></span><span class="number">192</span></a></li>
		    					<li class="extra"><a href="javascript:;" class="gotopage" page-id="195"><span class="value"><b>Secção E.</b> <?php echo translate("Transacções com Partes Relacionadas"); ?></span><span class="number">195</span></a></li>
		    					<li class="extra"><a href="javascript:;" class="gotopage" page-id="197"><span class="value"><b>Parte II.</b> <?php echo translate("Avaliação do Governo Societário"); ?></span><span class="number">197</span></a></li>
							</ul>
						</div>
					</div>
				</div>
				<div class="row second">
					<div class="left yellow col-3">
						<div>
							<span>4</span>
							<ul>
								<li class="featured">
									<a href="javascript:;" class="gotopage clearfix" page-id="148">
										<span class="value clearfix"><span><?php echo translate("Governo da<br> Sociedade"); ?></span></span>
									</a>
								</li>
							</ul>
							<ul>
								<li><a href="javascript:;" class="gotopage" page-id="152"><span class="value"><b>Parte I.</b> <?php echo translate("Informação Obrigatória Sobre Estrutura Accionista, Organização E Sociedade e Governo da Sociedade"); ?></span><span class="number">146</span></a></li>
		    					<li class="extra"><a href="javascript:;" class="gotopage" page-id="152"><span class="value"><b>Secção A.</b> <?php echo translate("Estrutura de Accionista"); ?></span><span class="number">152</span></a></li>
		    					<li class="extra"><a href="javascript:;" class="gotopage" page-id="157"><span class="value"><b>Secção B.</b> <?php echo translate("Órgãos Socias e Comissões"); ?></span><span class="number">157</span></a></li>
		    					<li class="extra"><a href="javascript:;" class="gotopage" page-id="178"><span class="value"><b>Secção C.</b> <?php echo translate("Organização Interna"); ?></span><span class="number">178</span></a></li>
		    					<li class="extra"><a href="javascript:;" class="gotopage" page-id="192"><span class="value"><b>Secção D.</b> <?php echo translate("Remunerações"); ?></span><span class="number">192</span></a></li>
		    					<li class="extra"><a href="javascript:;" class="gotopage" page-id="195"><span class="value"><b>Secção E.</b> <?php echo translate("Transacções com Partes Relacionadas"); ?></span><span class="number">195</span></a></li>
		    					<li class="extra"><a href="javascript:;" class="gotopage" page-id="197"><span class="value"><b>Parte II.</b> <?php echo translate("Avaliação do Governo Societário"); ?></span><span class="number">197</span></a></li>
							</ul>
						</div>
					</div>
					<div class="left blue col-3">
						<div>
							<span>5</span>
							<ul>
								<li class="featured">
									<a href="javascript:;" class="gotopage clearfix" page-id="200">
										<span class="value clearfix"><span><?php echo translate("Responsabilidade corporativa<br> na criação de valor"); ?></span></span>
									</a>
								</li>
							</ul>
							<ul>
								<li><a href="javascript:;" class="gotopage" page-id="204"><span class="value"><b>1.</b> <?php echo translate("A Nossa Abordagem"); ?></span><span class="number">204</span></a></li>
		    					<li><a href="javascript:;" class="gotopage" page-id="206"><span class="value"><b>2.</b> <?php echo translate("Envolvimento com os <i>Stakeholders</i>"); ?></span><span class="number">206</span></a></li>
		    					<li><a href="javascript:;" class="gotopage" page-id="210"><span class="value"><b>3.</b> <?php echo translate("<i>Highlights 2013</i>"); ?></span><span class="number">210</span></a></li>
		    					<li><a href="javascript:;" class="gotopage" page-id="211"><span class="value"><b>4.</b> <?php echo translate("Promover a Saúde pela Alimentação"); ?></span><span class="number">211</span></a></li>
		    					<li><a href="javascript:;" class="gotopage" page-id="216"><span class="value"><b>5.</b> <?php echo translate("Respeitar o Ambiente"); ?></span><span class="number">216</span></a></li>
		    					<li><a href="javascript:;" class="gotopage" page-id="224"><span class="value"><b>6.</b> <?php echo translate("Comprar com Responsabilidade"); ?></span><span class="number">224</span></a></li>
		    					<li><a href="javascript:;" class="gotopage" page-id="229"><span class="value"><b>7.</b> <?php echo translate("Apoiar as Comunidades Envolventes"); ?></span><span class="number">229</span></a></li>
		    					<li><a href="javascript:;" class="gotopage" page-id="232"><span class="value"><b>8.</b> <?php echo translate("Ser um Empregador de Referência"); ?></span><span class="number">232</span></a></li>
		    					<li><a href="javascript:;" class="gotopage" page-id="238"><span class="value"><b>9.</b> <?php echo translate("Compromissos para 2012-2014"); ?></span><span class="number">238</span></a></li>
		    					<li><a href="javascript:;" class="gotopage" page-id="240"><span class="value"><b>10.</b> <?php echo translate("Os Princípios <i>Global Compact</i>"); ?></span><span class="number">240</span></a></li>
							</ul>
						</div>
					</div>
					<div class="left orange col-3 last">
						<div>
							<span>6</span>
							<ul>
								<li class="featured">
									<a href="javascript:;" class="gotopage clearfix" page-id="242">
										<span class="value clearfix"><span><?php echo translate("Relatório e contas<br> individual"); ?></span></span>
									</a>
								</li>
							</ul>
							<ul>
								<li><a href="javascript:;" class="gotopage" page-id="246"><span class="value"><b>1.</b> <?php echo translate("Relatório de Gestão"); ?></span><span class="number">246</span></a></li>
		    					<li><a href="javascript:;" class="gotopage" page-id="254"><span class="value"><b>2.</b> <?php echo translate("Demonstrações Financeiras Individuais"); ?></span><span class="number">254</span></a></li>
		    					<li><a href="javascript:;" class="gotopage" page-id="300"><span class="value"><b>3.</b> <?php echo translate("Certificação Legal de Contas e Relatório de Auditoria"); ?></span><span class="number">300</span></a></li>
		    					<li><a href="javascript:;" class="gotopage" page-id="301"><span class="value"><b>4.</b> <?php echo translate("Relatório da Comissão de Auditoria"); ?></span><span class="number">301</span></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<?php /*<div id="page-3" class="page withBG">
		<img src="<?php echo BASE_URL; ?>assets/images/blue-gradient.png" class="background" />
		<img src="<?php echo BASE_URL; ?>assets/images/video-president.png" class="president" />
		<div class="hidden">
			<div class="videoarea">
				<span class="featured"><?php echo translate("Mensagem<br> do Presidente"); ?></span>
				<div class="video">
					<div>
						<video width="100%" height="315" poster="<?php echo BASE_URL; ?>assets/videos/echo-hereweare.jpg" controls="controls" preload="none">
						    <source type="video/mp4" src="<?php echo BASE_URL; ?>assets/videos/echo-hereweare.mp4" />
						    <object width="100%" height="315" type="application/x-shockwave-flash" data="<?php echo BASE_URL; ?>assets/player/flashmediaelement.swf">
						        <param name="movie" value="<?php echo BASE_URL; ?>assets/player/flashmediaelement.swf" />
						        <param name="flashvars" value="controls=true&file=<?php echo BASE_URL; ?>assets/videos/echo-hereweare.mp4" />
						        <img src="<?php echo BASE_URL; ?>assets/videos/echo-hereweare.jpg" width="100%" height="315" title="No video playback capabilities" />
						    </object>
						</video>
					 </div>
				</div>
			</div>
		</div>
	</div>
	<div id="page-4" class="page withBG">
		<img src="<?php echo BASE_URL; ?>assets/images/blue-gradient.png" class="background" />
		<img src="<?php echo BASE_URL; ?>assets/images/video-president.png" class="president" />
		<div class="hidden">
			<div class="videoarea">
				<span class="featured"><?php echo translate("Mensagem do<br> Administrador-Delegado"); ?></span>
				<div class="video">
					<div>
						<video width="100%" height="315" poster="<?php echo BASE_URL; ?>assets/videos/echo-hereweare.jpg" controls="controls" preload="none">
						    <source type="video/mp4" src="<?php echo BASE_URL; ?>assets/videos/echo-hereweare.mp4" />
						    <object width="100%" height="315" type="application/x-shockwave-flash" data="<?php echo BASE_URL; ?>assets/player/flashmediaelement.swf">
						        <param name="movie" value="<?php echo BASE_URL; ?>assets/player/flashmediaelement.swf" />
						        <param name="flashvars" value="controls=true&file=<?php echo BASE_URL; ?>assets/videos/echo-hereweare.mp4" />
						        <img src="<?php echo BASE_URL; ?>assets/videos/echo-hereweare.jpg" width="100%" height="315" title="No video playback capabilities" />
						    </object>
						</video>
					 </div>
				</div>
			</div>
		</div>
	</div>*/ ?>
	<?php function addChapter1Page1($type) {
		 echo '<div id="'.translate("o-grupo-jeronimo-martins").'" data-page="10" class="p10 page withBG chapter1-page1 chapter-to-animate">
			<div>
				<img src="'.BASE_URL.'assets/images/chapter-1-page-1-bg-1.png" class="background" />
				<img src="'.BASE_URL.'assets/images/relatory-'.$type.'/chapter-1-page-1-nmb-1.png" class="number animate-top-to-bottom" />
				<div class="title-container elements-container animate-block right-to-left">
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-1-page-1-title-1.png" class="title-1" />
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-1-page-1-title-2.png" class="title-2" />
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-1-page-1-title-3.png" class="title-3" />
				</div>
			</div>
		</div>';
	} ?>
	<?php function addChapter1Page2() {
		echo '<div id="p12" class="page withBG chapter1-page2 chapter-to-animate">
			<div>
				<img src="'.BASE_URL.'assets/images/chapter-1-page-2-bg-1.jpg" class="background resize-width align-bottom" />
				<img src="'.BASE_URL.'assets/images/chapter-1-page-2-nmb-1.png" class="number animate-top-to-bottom" />
				<div class="title-container-1 elements-container animate-block left-to-right">
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-1-page-2-title-1.png" class="title-1" />
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-1-page-2-title-2.png" class="title-2" />
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-1-page-2-title-3.png" class="title-3" />
				</div>
				<div class="title-container-2 elements-container animate-block left-to-right">
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-1-page-2-title-4.png" class="title-1" />
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-1-page-2-title-5.png" class="title-2" />
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-1-page-2-title-6.png" class="title-3" />
				</div>
			</div>
		</div>';
	} ?>
	<?php function addChapter2Page1($type) {
		echo '<div  id="'.translate("relatorio-consolidado-de-gestao").'" data-page="26" class="p26 page withBG chapter2-page1 chapter-to-animate">
			<div>
				<img src="'.BASE_URL.'assets/images/chapter-2-page-1-bg-1.jpg" class="background" />
				<img src="'.BASE_URL.'assets/images/relatory-'.$type.'/chapter-2-page-1-nmb-1.png" class="number animate-top-to-bottom" />
				<div class="title-container elements-container animate-block right-to-left">
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-2-page-1-title-1.png" class="title-1" />
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-2-page-1-title-2.png" class="title-2" />
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-2-page-1-title-3.png" class="title-3" />
				</div>
			</div>
		</div>';
	} ?>
	<?php function addChapter2Page2() {
		echo '<div id="p28" class="page withBG chapter2-page2 chapter-to-animate">
			<div>
				<img src="'.BASE_URL.'assets/images/chapter-2-page-2-bg-1.jpg" class="background resize-height align-right" />
				<img src="'.BASE_URL.'assets/images/chapter-2-page-2-nmb-1.png" class="number animate-top-to-bottom" />
				<div class="title-container-1 elements-container show-white animate-block left-to-right">
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-2-page-2-title-1.png" class="title-1" />
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-2-page-2-title-2.png" class="title-2" />
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-2-page-2-title-3.png" class="title-3" />
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-2-page-2-title-4.png" class="title-4" />
				</div>
				<div class="title-container-2 elements-container show-white animate-block left-to-right">
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-2-page-2-title-5.png" class="title-1" />
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-2-page-2-title-6.png" class="title-2" />
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-2-page-2-title-7.png" class="title-3" />
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-2-page-2-title-8.png" class="title-4" />
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-2-page-2-title-9.png" class="title-5" />
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-2-page-2-title-10.png" class="title-6" />
				</div>
			</div>
		</div>';
	} ?>
	<?php function addChapter3Page1($pageNumber,$type) {
		echo '<div id="'.translate("demonstracoes-financeiras-consolidadas").'" data-page="'.$pageNumber.'" class="p'.$pageNumber.' page withBG chapter3-page1 chapter-to-animate">
			<div>
				<img src="'.BASE_URL.'assets/images/blue-gradient.png" class="background" />
				<img src="'.BASE_URL.'assets/images/relatory-'.$type.'/chapter-3-page-1-nmb-1.png" class="number animate-top-to-bottom" />
				<div class="title-container elements-container animate-block right-to-left">
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-3-page-1-title-1.png" class="title-1" />
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-3-page-1-title-2.png" class="title-2" />
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-3-page-1-title-3.png" class="title-3" />
				</div>
			</div>
		</div>';
	} ?>
	<?php function addChapter3Page2($pageNumber) {
		echo '<div id="p'.$pageNumber.'" class="page withBG chapter3-page2 chapter-to-animate">
			<div>
				<img src="'.BASE_URL.'assets/images/chapter-3-page-2-bg-1.jpg" class="background resize-height align-right" />
				<img src="'.BASE_URL.'assets/images/chapter-3-page-2-nmb-1.png" class="number animate-top-to-bottom" />
				<div class="title-container-1 elements-container show-white animate-block left-to-right">
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-3-page-2-title-1.png" class="title-1" />
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-3-page-2-title-2.png" class="title-2" />
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-3-page-2-title-3.png" class="title-3" />
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-3-page-2-title-4.png" class="title-4" />';
					if($GLOBALS["currentLanguage"] == "en")
						echo '<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-3-page-2-title-9.png" class="title-5" />';
					
				echo '</div>
				<div class="title-container-2 elements-container show-white animate-block left-to-right">
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-3-page-2-title-5.png" class="title-1" />
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-3-page-2-title-6.png" class="title-2" />
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-3-page-2-title-7.png" class="title-3" />
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-3-page-2-title-8.png" class="title-4" />
				</div>
			</div>
		</div>';
	} ?>
	<?php function addChapter4Page1($pageNumber,$type) {
		echo '<div id="'.translate("governo-da-sociedade").'" data-page="'.$pageNumber.'" class="p'.$pageNumber.' page withBG chapter4-page1 chapter-to-animate">
			<div>
				<img src="'.BASE_URL.'assets/images/chapter-4-page-1-bg-1.jpg" class="background" />
				<img src="'.BASE_URL.'assets/images/relatory-'.$type.'/chapter-4-page-1-nmb-1.png" class="number animate-top-to-bottom" />
				<div class="title-container elements-container animate-block right-to-left">
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-4-page-1-title-1.png" class="title-1" />
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-4-page-1-title-2.png" class="title-2" />
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-4-page-1-title-3.png" class="title-3" />
				</div>
			</div>
		</div>';
	} ?>
	<?php function addChapter4Page2($pageNumber) {
		echo '<div id="p'.$pageNumber.'" class="page withBG chapter4-page2 chapter-to-animate">
			<div>
				<img src="'.BASE_URL.'assets/images/chapter-4-page-2-bg-1.jpg" class="background resize-width align-bottom" />
				<img src="'.BASE_URL.'assets/images/chapter-4-page-2-nmb-1.png" class="number animate-top-to-bottom" />
				<div class="title-container-1 elements-container animate-block left-to-right">
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-4-page-2-title-1.png" class="title-1" />
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-4-page-2-title-2.png" class="title-2" />
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-4-page-2-title-3.png" class="title-3" />
				</div>
				<div class="title-container-2 elements-container show-white animate-block left-to-right">
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-4-page-2-title-4.png" class="title-1" />
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-4-page-2-title-5.png" class="title-2" />
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-4-page-2-title-6.png" class="title-3" />
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-4-page-2-title-7.png" class="title-4" />';
					if($GLOBALS["currentLanguage"] == "pt")
						echo '<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-4-page-2-title-8.png" class="title-5" />';
				echo '</div>
			</div>
		</div>';
	} ?>
	<?php function addChapter5Page1($pageNumber,$type) {
		echo '<div id="'.translate("responsabilidade-corporativa-na-criacao-de-valor").'" data-page="'.$pageNumber.'" class="p'.$pageNumber.' page withBG chapter5-page1 chapter-to-animate">
			<div>
				<img src="'.BASE_URL.'assets/images/chapter-5-page-1-bg-1.jpg" class="background" />
				<img src="'.BASE_URL.'assets/images/relatory-'.$type.'/chapter-5-page-1-nmb-1.png" class="number animate-top-to-bottom" />
				<div class="title-container elements-container animate-block right-to-left">
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-5-page-1-title-1.png" class="title-1" />
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-5-page-1-title-2.png" class="title-2" />
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-5-page-1-title-3.png" class="title-3" />
				</div>
			</div>
		</div>';
	} ?>
	<?php function addChapter5Page2($pageNumber) {
		echo '<div id="p'.$pageNumber.'" class="page withBG chapter5-page2 chapter-to-animate">
			<div>
				<img src="'.BASE_URL.'assets/images/chapter-5-page-2-bg-1.jpg" class="background resize-height align-right" />
				<img src="'.BASE_URL.'assets/images/chapter-5-page-2-nmb-1.png" class="number animate-top-to-bottom" />
				<div class="title-container-1 elements-container show-white animate-block left-to-right">
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-5-page-2-title-1.png" class="title-1" />
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-5-page-2-title-2.png" class="title-2" />
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-5-page-2-title-3.png" class="title-3" />
				</div>
				<div class="title-container-2 elements-container show-white animate-block left-to-right">
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-5-page-2-title-4.png" class="title-1" />
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-5-page-2-title-5.png" class="title-2" />
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-5-page-2-title-6.png" class="title-3" />
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-5-page-2-title-7.png" class="title-4" />
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-5-page-2-title-8.png" class="title-5" />
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-5-page-2-title-9.png" class="title-6" />
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-5-page-2-title-10.png" class="title-7" />
				</div>
			</div>
		</div>';
	} ?>
	<?php function addChapter6Page1($pageNumber,$type) {
		echo '<div id="'.translate("relatorio-e-contas-individual").'" data-page="'.$pageNumber.'" class="p'.$pageNumber.' page withBG chapter6-page1 chapter-to-animate">
			<div>
				<img src="'.BASE_URL.'assets/images/chapter-6-page-1-bg-1.jpg" class="background" />
				<img src="'.BASE_URL.'assets/images/relatory-'.$type.'/chapter-6-page-1-nmb-1.png" class="number animate-top-to-bottom" />
				<div class="title-container elements-container animate-block right-to-left">
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-6-page-1-title-1.png" class="title-1" />
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-6-page-1-title-2.png" class="title-2" />
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-6-page-1-title-3.png" class="title-3" />
				</div>
			</div>
		</div>';
	} ?>
	<?php function addChapter6Page2($pageNumber) {
		echo '<div id="p'.$pageNumber.'" class="page withBG chapter6-page2 chapter-to-animate">
			<div>
				<img src="'.BASE_URL.'assets/images/chapter-6-page-2-nmb-1.png" class="number animate-top-to-bottom" />
				<div class="title-container-1 elements-container animate-block left-to-right">
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-6-page-2-title-1.png" class="title-1" />
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-6-page-2-title-2.png" class="title-2" />
					<img src="'.BASE_URL.'assets/images/'.$GLOBALS["currentLanguage"].'/chapter-6-page-2-title-3.png" class="title-3" />
				</div>
				<div class="title-container-2 elements-container animate-block left-to-right">
					<img src="'.BASE_URL.'assets/images/chapter-6-page-2-title-4.png" class="title-1" />
					<img src="'.BASE_URL.'assets/images/chapter-6-page-2-title-5.png" class="title-2" />
				</div>
			</div>
		</div>';
	} ?>
	<?php 
		$language = $GLOBALS["currentLanguage"];
		$type = "desktop";
		
		if($detect->isMobile() && !$detect->isTablet())
			$type = "mobile";
	
		$filesList = scandir("../assets/images/relatory-".$type."/".$language);
		$filesList = array_slice($filesList, 2);
		natsort($filesList);
	?>
	<?php 
		foreach($filesList as $file) : 
		 $pageName = str_replace("JM._", "", $file);
		 $pageName = str_replace(".jpg", "", $pageName);
		 
		 $blackList = array("11", "27", "71", "149", "201", "243");
		 $blackList2 = array("10", "12", "26", "28", "70", "72", "148", "150", "200", "202", "242", "244");
		 
		 if(!in_array($pageName, $blackList)): 
		?>
		<?php 
			if($pageName == 10 && $type == "desktop") : addChapter1Page1($type);
			elseif($pageName == 12 && $type == "desktop") : addChapter1Page2();
			elseif($pageName == 26 && $type == "desktop") : addChapter2Page1($type);
			elseif($pageName == 28 && $type == "desktop") : addChapter2Page2();
			elseif($pageName == 70 && $type == "desktop") : addChapter3Page1(70,$type);
			elseif($pageName == 72 && $type == "desktop") : addChapter3Page2(72);
			elseif($pageName == 148 && $type == "desktop") : addChapter4Page1(148,$type);
			elseif($pageName == 150 && $type == "desktop") : addChapter4Page2(150);
			elseif($pageName == 200 && $type == "desktop") : addChapter5Page1(200,$type);
			elseif($pageName == 202 && $type == "desktop") : addChapter5Page2(202);
			elseif($pageName == 242 && $type == "desktop") : addChapter6Page1(242,$type);
			elseif($pageName == 244 && $type == "desktop") : addChapter6Page2(244);
			else: ?>
	<div id="p<?php echo intval($pageName); ?>" class="page withimg">
		<div>
			<img data-original="<?php echo BASE_URL; ?>assets/images/relatory-<?php echo $type; ?>/<?php echo $language; ?>/<?php echo $file; ?>" /> 
			<?php /*if(!in_array($pageName, $blackList2)):  ?>
			<ul class="info">
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
    			<li class="pagenumber"><?php echo intval($pageName); ?></li>
			</ul>
			<?php endif; */?>
		</div>
	</div>
	<?php endif; endif; endforeach; ?>
</div>
<?php  include('../footer.php'); unset($GLOBALS['menu']); unset($GLOBALS['selected']); ?>