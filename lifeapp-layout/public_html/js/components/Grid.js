/* Class Grid */
function Grid(_element){
    this.element = _element;
    this.items = $(this.element).children('div');
    this.rows = Math.ceil(this.items.length / 8);
    
    this.itemPadding = $(this.element).width() * 0.03;
    this.itemWidth = ($(this.element).width() / 8) - this.itemPadding * 2;
    this.itemHeight = this.itemWidth;
    
    this.items.css({
        float: 'left',
        padding: this.itemPadding + 'px',
        width: this.itemWidth,
        height: this.itemHeight,
        'text-align': 'center',
        cursor: 'pointer'
    });
    
    this.icons = this.items.children('img');
    this.icons.width(2).height(2).css({
        background: '#ccc',
        'border-radius': '3px',
        'box-shadow': '0 2px 2px #999'
    });
    while($(this.icons).width() < this.itemWidth)
        $(this.icons).width($(this.icons).width() << 1);
    $(this.icons).width($(this.icons).width() >> 1);

    while($(this.icons).height() < this.itemHeight)
        $(this.icons).height($(this.icons).height() << 1);
    $(this.icons).height($(this.icons).height() >> 1);
}