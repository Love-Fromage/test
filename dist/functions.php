<?php

register_nav_menus(array(
    'menu_principal' => 'menu1'

));

add_theme_support( 'post-thumbnails');
set_post_thumbnail_size(800, 480, true);

function new_excerpt_length($length){
    return 20;
}
add_filter('excerpt_length', 'new_excerpt_length');

// Register Custom Post Type
function port_projets() {

    $labels = array(
        'name'                  => _x( 'Projets', 'Post Type General Name', 'projets' ),
        'singular_name'         => _x( 'Projet', 'Post Type Singular Name', 'projets' ),
        'menu_name'             => __( 'Projets', 'projets' ),
        'name_admin_bar'        => __( 'Projets', 'projets' ),
        'archives'              => __( 'Item Archives', 'projets' ),
        'attributes'            => __( 'Item Attributes', 'projets' ),
        'parent_item_colon'     => __( 'Parent Item:', 'projets' ),
        'all_items'             => __( 'All Items', 'projets' ),
        'add_new_item'          => __( 'Add New Item', 'projets' ),
        'add_new'               => __( 'Ajouter un projet', 'projets' ),
        'new_item'              => __( 'Nouveau projet', 'projets' ),
        'edit_item'             => __( 'Modifier le projet', 'projets' ),
        'update_item'           => __( 'Mettre à jour le projet', 'projets' ),
        'view_item'             => __( 'View Item', 'projets' ),
        'view_items'            => __( 'View Items', 'projets' ),
        'search_items'          => __( 'Search Item', 'projets' ),
        'not_found'             => __( '', 'projets' ),
        'not_found_in_trash'    => __( 'Not found in Trash', 'projets' ),
        'featured_image'        => __( 'Featured Image', 'projets' ),
        'set_featured_image'    => __( 'Set featured image', 'projets' ),
        'remove_featured_image' => __( 'Remove featured image', 'projets' ),
        'use_featured_image'    => __( 'Use as featured image', 'projets' ),
        'insert_into_item'      => __( 'Insert into item', 'projets' ),
        'uploaded_to_this_item' => __( 'Uploaded to this item', 'projets' ),
        'items_list'            => __( 'Items list', 'projets' ),
        'items_list_navigation' => __( 'Items list navigation', 'projets' ),
        'filter_items_list'     => __( 'Filter items list', 'projets' ),
    );
    $args = array(
        'label'                 => __( 'Projet', 'projets' ),
        'description'           => __( 'Projets à présenter', 'projets' ),
        'labels'                => $labels,
        'supports'              => array( 'title', 'editor', 'custom-fields', 'thumbnail' ),
        'taxonomies'            => array( 'category', 'post_tag' ),
        'hierarchical'          => false,
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'menu_position'         => 5,
        'show_in_admin_bar'     => true,
        'show_in_nav_menus'     => true,
        'can_export'            => true,
        'has_archive'           => true,
        'exclude_from_search'   => false,
        'publicly_queryable'    => true,
        'capability_type'       => 'page',
    );
    register_post_type( 'Projets', $args );

}
add_action( 'init', 'port_projets', 0 );

