<?php

class smurfify {

    public function __construct(){

		add_shortcode('smurfify', array($this, 'showbutton'));	

    }

	

	public function showbutton(){

		echo "<img id='smurfify' title='I hate this site!' style='cursor:pointer;' src='".WP_PLUGIN_URL."/smurfify/images/smurf.jpg'>";

	}

}

?>