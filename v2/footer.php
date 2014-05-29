        <script src="<?php echo BASE_URL; ?>assets/js/vendor/jquery-1.10.2.min.js"></script>
		<script src="<?php echo BASE_URL; ?>assets/player/mediaelement-and-player.min.js"></script>
        <script src="<?php echo BASE_URL; ?>assets/js/plugins.js"></script>
        <script src="<?php echo BASE_URL; ?>assets/js/main.js"></script>
        <?php if(!isset($_COOKIE['eucookie'])) : ?>
			<script type="text/javascript">
				function SetCookie(c_name,value,expiredays){
					var exdate=new Date()
					exdate.setDate(exdate.getDate()+expiredays)
					document.cookie=c_name+ "=" +escape(value)+";path=/"+((expiredays==null) ? "" : ";expires="+exdate.toUTCString())
				}
			</script>
		<?php endif; ?>
		<?php if(!isset($_COOKIE['eucookie'])): ?>
			<script type="text/javascript">
				if( document.cookie.indexOf("eucookie") ===-1 ){
					$("#eucookielaw").show();
					$("#removecookie").mouseenter(function(){
						$(this).find("> span").stop(true,true).animate({opacity:1},300);
					}).mouseleave(function(){
						$(this).find("> span").stop(true,true).animate({opacity:0},300);
					})
				}
				$("#removecookie").click(function () {
					SetCookie('eucookie','eucookie',365*10)
					$("#eucookielaw").remove();
					$("body").removeClass("cookie");
					checkMenuToSetHeight();
				});
			</script>
		<?php endif; ?>
    </body>
</html>
