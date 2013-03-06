Ext.define('Bar.controller.CondForm', {
    extend: 'Bar.controller.Base',

    config: {
        control: {
            'condform': {
                search: 'onSearch'
            }
        }
    },

    onSearch: function(view, values) {
        var me = this,
            store = Ext.getStore('Bars'),
            proxy = store.getProxy(),
            list = Ext.widget('barlist');

        me.getMain().push(list);
        store.removeAll();
        Ext.iterate(values, function(key, value) {
                proxy.setExtraParam(key, value);
        });
        list.mask({
            xtype: 'loadmask',
            message: 'データ取得中...'
        });
        Ext.data.JsonP.disableCashing = false;
        store.load({
            params: {
                start: 0,
                page: 1
            },
            callback: function() {
                list.unmask();
            }
        });
    }

});
