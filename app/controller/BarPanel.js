Ext.define('Bar.controller.BarPanel', {
    extend: 'Bar.controller.Base',
    requires: ['Bar.view.BarMap'],

    config: {
        control: {
            'barpanel': {
                openmap: 'onOpenMap'
            }
        }
    },

    onOpenMap: function(data) {
        var me = this, map;

        map = Ext.widget('barmap', {
            title: data.name,
            loc: data.loc,
            mapOptions: {
                zoom: 17,
                center: data.loc
            }
        });
        me.getMain().push(map);
    }
});
