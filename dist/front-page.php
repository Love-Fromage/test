<?php get_header(); ?>
<body>
<div class="fond accueil-fond scroll" id="top">


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

<header>
    <div class="cont-header">

    <div class="cont-nom">
        <div class="cont-nom-mask">
        <h1 id="1">Mathieu Guérin</h1>
        <h2>Programmeur Multimédia</h2>
    </div>
        </div>

    </div>
    <hr>
</header>
<div class="cont-conn">
    <img src="<?php echo bloginfo('template_url'); ?>/images/Group 59.svg" alt="connector">
    <img src="<?php echo bloginfo('template_url'); ?>/images/Group 59.svg" alt="connector" class="de-conn">

</div>

<section class="projet">

    <div class="cont-projet">
        <div class="projet-fond">
            <div class="projet-masque">
                <div class="cont-projet-cta">
                    <a href="<?php echo get_permalink( get_page_by_title( 'Projets' ) ) ?>"><p>Projets</p>

                        <img src="<?php echo bloginfo('template_url'); ?>/images/Vector.png" alt="fleche">
                        <div class="overlay"><div class="text"><p>Projets</p><img src="<?php echo bloginfo('template_url'); ?>/images/Vector.png" alt="fleche"> </div></div>
                    </a>


                </div>
            </div>
        </div>
    </div>
</section>


<div class="cont-conn">
    <img src="<?php echo bloginfo('template_url'); ?>/images/Group 59.svg" alt="connector">
    <img src="<?php echo bloginfo('template_url'); ?>/images/Group 59.svg" alt="connector" class="de-conn">

</div>
<section class="a-propos">

    <div class="cont-about">
        <div class="about-fond">
            <img src="<?php echo bloginfo('template_url'); ?>/images/selfie2.jpg" alt="selfie">

                <div class="cont-projet-cta">
                    <a href="<?php echo get_permalink( get_page_by_title( 'À propos' ) ) ?>"><p>À propos</p>

                        <img src="<?php echo bloginfo('template_url'); ?>/images/Vector.png" alt="fleche">
                        <div class="overlay"><div class="text"><p>À propos</p><img src="<?php echo bloginfo('template_url'); ?>/images/Vector.png" alt="fleche"> </div></div>
                    </a>


                </div>


    </div>
</section>
</div>









<?php get_footer(); ?>