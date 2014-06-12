<?php 
	$baseUrl = (isset($_SERVER["HTTPS"]) && $_SERVER["HTTPS"] == "on") ? 'https://' : 'http://';
	$fileName = $_SERVER['SCRIPT_NAME'];
	$fileName = explode("/",$fileName);
	if($GLOBALS['menu'] == "blank")
		array_splice($fileName, count($fileName)-3,3);
	else
		array_splice($fileName, count($fileName)-2,2);
	$fileName = implode("/",$fileName);
	$baseUrl .= $_SERVER['HTTP_HOST'] . $fileName."/";
	
	$currentUrl = (isset($_SERVER["HTTPS"]) && $_SERVER["HTTPS"] == "on") ? 'https://' : 'http://';
	$fileName = $_SERVER['SCRIPT_NAME'];
	$fileName = explode("/",$fileName);
	array_splice($fileName, count($fileName)-1,1);
	$fileName = implode("/",$fileName);
	$currentUrl .= $_SERVER['HTTP_HOST'] . $fileName."/";
	
	defined('BASE_URL') || define('BASE_URL', $baseUrl);
	defined('CURRENT_URL') || define('CURRENT_URL', $currentUrl);
?>