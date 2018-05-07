<?php
/*
Plugin Name: Type1 Calculator
Description: Portion calculator.
Version:     0.0.1
Author:      Tom Rathbone
Author URI:  http://github.com/chillitom
*/

function wp_react_hello_world() {
    echo '<div id="root"></div>';
  }
   
function include_react_files() {
    wp_enqueue_style( 'prefix-style', plugins_url('css\main.9f253a90.css', __FILE__) );
    wp_enqueue_script( 'plugin-scripts', plugins_url('js/main.594015d5.js', __FILE__),array(),  '0.0.1', true );
}

add_action( 'wp_enqueue_scripts', 'include_react_files' );