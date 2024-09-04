

// Footer Accordioin
jQuery(document).ready(function () {
    jQuery('.footer_block .footer_title').click(function () {

            jQuery('.footer_block .links').slideUp();
            jQuery('.footer_block .footer_title').removeClass("active_footer");
            var thisElemUL = jQuery(this).parent().find('.links');
            if (jQuery(thisElemUL).is(':hidden')) { jQuery(this).addClass("active_footer"); jQuery(thisElemUL).slideDown() };
        });
});


// banner  filter


document.querySelectorAll('.nav-tabs a').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.nav-tabs a').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
    });
});

document.querySelector('.advance-filter').addEventListener('click', function() {
    alert('Advance Filter clicked!');
});


