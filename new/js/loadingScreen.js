var t0 = performance.now();
document.addEventListener('imagesLoaded', function()
{
    var t1 = performance.now();
    var delay = 1000-(t1-t0);

	setTimeout(function()
    {
        $('body').addClass('loaded');
    }, delay);
});
