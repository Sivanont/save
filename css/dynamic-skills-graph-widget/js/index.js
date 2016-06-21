$('.w-skills-bubble').on('click', function(e){
  var $parent = $(e.target).parent();
  $parent.addClass('is-active').prevAll('.w-skills-segment').addClass('is-active');
  $parent.nextAll('.w-skills-segment').removeClass('is-active');
});

$('.w-skills-switch').on('click', function(e) {
  var $el = $(e.target);
  if (!$el.hasClass('is-active')) {
    $el.siblings('.is-active').removeClass('is-active');
    $el.addClass('is-active');
  }
});