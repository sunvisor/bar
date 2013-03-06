Ext.define('Bar.view.BarMap', {
    extend: 'Ext.Map',
    alias: 'widget.barmap',
    config: {
        xtype: 'map',
        title: undefined,
        loc: undefined,
        listeners: {
            maprender: {
                fn: function() {
                    var me = this,
                        loc, marker;

                    loc = me.getLoc(),

                    me.setMapCenter(loc);
                    marker = new google.maps.Marker({
                        position: loc,
                        map: me.getMap(),
                        title: me.title
                    });
                },
                delay: 150
            }
        }
    }
});
