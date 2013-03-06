Ext.define('Bar.controller.BarList', {
    extend: 'Bar.controller.Base',

    config: {
        control: {
            'barlist': {
                selected: 'onSelected'
            }
        }
    },

    onSelected: function(list, record) {
        var me = this, bar;

        bar = Ext.widget('barpanel');

        bar.setData(record.getData());
        me.getMain().push(bar);
    }

});
