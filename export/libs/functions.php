<?php 
	include 'PDFMerger.php';

	function exportPDF() {
		include('../../assets/Mobile_Detect.php'); 
		$detect = new Mobile_Detect;
		
		$mainData = $_POST;
		
		$language = (isset($mainData['language']) && $mainData['language'] != "")?$mainData['language']:"pt";
    	$exportType = (isset($mainData['type']) && intval($mainData['type']) > 0)?intval($mainData['type']):1;
		$choice = (isset($mainData['choice']) && $mainData['choice'] != "")?$mainData['choice']:"document";
		$totalPages = (isset($mainData['allpages']) && $mainData['allpages'] != "")?explode(",",$mainData['allpages']):array();
		
		$intervals = array(array(11,25), array(26,69), array(70,147), array(148,199), array(200,241), array(242,301));
		
		$PDFFile = 'PDFs/jmrc13_'.$language.'.pdf';
		$filename = 'jmrc13_'.$language.".pdf";
		
		$printfile = false;
		
		$print = "download";
		if($exportType == 2) {
			$print = "browser";
			$printfile = true;
		} 
		
		if($detect->isMobile()){
			$print = "browser";
			$printfile = false;
		}

		$currentime = time();
		
		$pdf = new PDFMerger;
		
		if($choice == "document"){
			/*$printAll = "attachment";
			if($exportType == 2) $printAll = "inline";
			
			header('Content-Transfer-Encoding: binary');  // For Gecko browsers mainly
			header('Last-Modified: ' . gmdate('D, d M Y H:i:s', filemtime($PDFFile)) . ' GMT');
			header('Accept-Ranges: bytes');  // Allow support for download resume
			header('Content-Length: ' . filesize($PDFFile));  // File size
			header('Content-Encoding: none');
			header('Content-Type: application/pdf');  // Change the mime type if the file is not PDF
			header('Content-Disposition: '.$printAll.'; filename=' . $filename);  // Make the browser display the Save As dialog
			readfile($PDFFile);  // This is necessary in order to get it to actually download the file, otherwise it will be 0Kb
			*/
			$pdf->addPDF($PDFFile, 'all');
			$pdf->merge($print, 'jmrc13_myreport_'.date("dmY",time()).".pdf", $printfile);
			
		} elseif($choice == "pages" && count($totalPages) > 0){
			$pdf->addPDF($PDFFile, implode(",", $totalPages));
			$pdf->merge($print, 'jmrc13_myreport_'.date("dmY",time()).".pdf", $printfile);
		} else if($choice == "chaps"){
			$selectedChaps = array();
			
			for($i = 1; $i <= count($intervals); $i++){
				if(isset($mainData['chap'.$i]) && $mainData['chap'.$i] == "on"){
					$selectedChaps[] = implode("-", $intervals[$i-1]);
				}
			}
			
			$pdf->addPDF($PDFFile, implode(",", $selectedChaps));
			$pdf->merge($print, 'jmrc13_myreport_'.date("dmY",time()).".pdf", $printfile);
		}
    }
?>