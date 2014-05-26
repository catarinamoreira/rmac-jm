<?php 
	$GLOBALS['translations'] = array(
		"Mensagem do Presidente" => "Message from the President",
		"Mensagem do<br> Administrador-Delegado" => "Message from <br>the Chief Executive Officer",
		"O Grupo<br> Jerónimo Martins" => "The Jerónimo<br> Martins Group",
		"Perfil e Estrutura" => "Profile and Structure",
		"Posicionamento Estratégico" => "Strategic Positioning",
		"Prémios e Reconhecimentos" => "Awards and Recognition",
		"Relatório consolidado<br> de Gestão" =>  "Consolidated Management<br> Report",
		"Factos-Chave do Ano" => "Key Facts of the Year",
		"Enquadramentos de 2013" => "2013 Environment",
		"Desempenho do Grupo" =>"Group Performance",
		"Desempenho das Áreas de Negócio" =>"Business Areas Performance",
		"Perspectivas para 2014" => "Outlook for 2014",
		"Factos Subsequentes" => "Post Balance Sheet Events",
		"Proposta de Aplicação de Resultados" => "Results Appropriation Proposal",
		"Anexo ao Relatório Consolidado de Gestão" => "Consolidated Management Report Annex",
		"Demonstrações<br> Financeiras Consolidadas" => "Consolidated<br> Financial Statements",
		"Demonstrações Financeiras Consolidadas" => "Consolidated Financial Statements",
	    "Declaração do Conselho de Administração" => "Statement of Board of Directors",
		"Certificação Legal de Contas e Relatório de Auditoria" => "Auditor’s Report",
		"Relatório e Parecer da Comissão de Auditoria" => "Report and Opinion of the Audit Committee",
		"Governo da<br> Sociedade" => "Corporate<br> Governance",
		"Governo da Sociedade" => "Corporate Governance",
		"Informação Obrigatória Sobre Estrutura Accionista, Organização E Sociedade e Governo da Sociedade" => "Information on Shareholder Structure,
Organisation and Corporate Governance",
		"Estrutura de Accionista" => "Shareholder Structure",
		"Órgãos Socias e Comissões" => "Corporate Bodies and Committees",
		"Organização Interna" => "Internal Organisation",
		"Remunerações" => "Remuneration",
		"Transacções com Partes Relacionadas" => "Related Party Transactions",
		"Avaliação do Governo Societário" => "Corporate Governance Assessment",
		"Responsabilidade corporativa<br> na criação de valor" => "Corporate Responsibility<br> in Value Creation",
		"A Nossa Abordagem" => "Our Approach",
		"Envolvimento com os <i>Stakeholders</i>" => "Engagement with Stakeholders",
		"<i>Highlights 2013</i>" => "Highlights 2013",
		"Promover a Saúde pela Alimentação" => "Promoting Good Health through Food",
		"Respeitar o Ambiente" => "Respecting the Environment",
		"Apoiar as Comunidades Envolventes" => "Supporting Surrounding Communities",
		"Compromissos para 2012-2014" => "Commitments for 2012-2014",
		"Os Princípios <i>Global Compact</i>" => "The Global Compact Principles",
		"Relatório e contas individual" => "Individual Annual Report",
		"Relatório e contas<br> individual" => "Individual<br> Annual Report",
		"Relatório de Gestão" => "Management Report",
		"Demonstrações Financeiras Individuais" => "Individual Financial Statements",
		"Certificação Legal de Contas e Relatório de Auditoria" => "Auditor’s Report",
		"Relatório da Comissão de Auditoria" => "Report and Opinion of the Audit Committee",
		"Termos e Condições" => "Terms and Conditions",
		"Política de Cookies" => "Cookie Policy",
		"O meu Relatório" => "My Report",
		"Imprimir" => "Print",
		"Guardar" => "Save",
		"Adicionar página ao Meu Relatório" => "Add page to My Report",
		"Página adicionada ao Meu Relatório" => "Page added to My Report",
		"Remover página do Meu Relatório" => "Remove page from My Report",
		"Capítulos" => "Chapters",
		"Páginas <br>selecionadas" => "Selected<br> pages",
		"Download em PDF" => "Download PDF",
		"Ser um Empregador de Referência" => "Being a Benchmark Employer",
		"Comprar com Responsabilidade" => "Sourcing Responsibly",
		"Este website utiliza <i>cookies</i> de acordo com a política em vigor. Ao continuar a navegação está a aceitar a sua utilização. Caso pretenda saber mais, consulte a nossa" => "This website uses cookies in accordance with our policy. By continuing your browsing, you agree to accept its use. In case you want to know more, please see our",
		"Política de <i>Cookies</i> aqui" => "Cookie Policy here",
		"Guardar" => "Save",
		"guardar" => "save",
		"Imprimir" => "Print",
		"imprimir" => "print",
		"Páginas adicionadas ao Meu Relatório" => "Pages added to My Report",
		"Por favor confirme quais os elementos que deseja" => "Please confirm which elements you want",
		"Todo o documento" => "The entire document",
		"Apenas os seguintes capítulos" => "Only the following chapters",
		"O GRUPO JERÓNIMO MARTINS" => "THE JERÓNIMO MARTINS GROUP",
		"RELATÓRIO CONSOLIDADO DE GESTÃO" => "CONSOLIDATED MANAGEMENT REPORT",
		"DEMONSTRAÇÕES FINANCEIRAS CONSOLIDADAS" => "CONSOLIDATED FINANCIAL STATEMENTS",
		"GOVERNO DA SOCIEDADE" => "CORPORATE GOVERNANCE",
		"RESPONSABILIDADE CORPORATIVA NA CRIAÇÃO DE VALOR" => "CORPORATE RESPONSIBILITY IN VALUE CREATION",
		"RELATÓRIO E CONTAS INDIVIDUAL" => "INDIVIDUAL ANNUAL REPORT",
		"Relatório e Contas 2013 - Jerónimo Martins" => "Annual Report 2013 - Jerónimo Martins",
		"politica-de-cookies" => "cookie-policy",
		"termos-e-condicoes" => "terms-and-conditions",
		"Índice" => "Index",
	);
	
	function translate($string){
		if($GLOBALS['currentLanguage'] == "en" && isset($GLOBALS['translations'][$string]) && $GLOBALS['translations'][$string] != ""){
			$string = $GLOBALS['translations'][$string];
		} 
		return $string;
	}
?>