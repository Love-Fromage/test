<?php
/*
  *
  * Template Name: gabarit-contact
  *
  */
?>

<?php get_header() ?>
<body>
<div class="fond">
    <div class="cont-nav">
        <nav>
            <ul>
                <?php wp_nav_menu(array(
                        'theme_location' => 'menu_principal')
                ); ?>
                <a href="<?php echo bloginfo('url'); ?>"><img class="nav-logo" src="<?php echo bloginfo('template_url'); ?>/images/logo_mathieu.png" alt="logo"></a>
            </ul>
        </nav>
    </div>

<div class="wrapper contact">
    <?php the_content(); ?></div>





<?php get_footer() ?>