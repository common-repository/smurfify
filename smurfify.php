<?php 

defined('ABSPATH') or die("No script kiddies please!");



/**

 * Plugin Name: Smurfify

 * Description: Add a button to your page to 'smufify' your website.

 * Version: 1.0.0

 * Author: Axel Jacobs

 * License: GPL2

 */

 /*  Copyright 2014  AXEL JACOBS  (email : axel@molokini.be)



    This program is free software; you can redistribute it and/or modify

    it under the terms of the GNU General Public License, version 2, as 

    published by the Free Software Foundation.



    This program is distributed in the hope that it will be useful,

    but WITHOUT ANY WARRANTY; without even the implied warranty of

    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the

    GNU General Public License for more details.



    You should have received a copy of the GNU General Public License

    along with this program; if not, write to the Free Software

    Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA

*/

define( 'SMURF__PLUGIN_DIR', plugin_dir_path( __FILE__ ) );

require_once( SMURF__PLUGIN_DIR . 'class.smurfify.php' );

wp_enqueue_script( 'scripts-sm', plugins_url('/scripts.js', __FILE__) , array('jquery'), '1.0.0', true );

$smurf = new smurfify();

?>