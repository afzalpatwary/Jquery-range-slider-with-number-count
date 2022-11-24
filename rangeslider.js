var $element = $('input[type="range"]');
$element
    .rangeslider({
        polyfill: false,
        onInit: function () {
            var $handle = $('.rangeslider__handle', this.$range);
            updateHandle($handle[0], this.value);
        }
    })
    .on('input', function (e) {
        var $handle = $('.rangeslider__handle', e.target.nextSibling);
        updateHandle($handle[0], this.value);
    });

function updateHandle(el, val) {
    el.textContent = val;
}