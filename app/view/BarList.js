Ext.define('Bar.view.BarList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.barlist',
    requires:['Ext.plugin.ListPaging'],
    config: {
        title: 'Bar',
        store: 'Bars',
        itemTpl: '{name}',
        plugins: [{
            type: 'listpaging',
            autoPaging: true
        }],
        listeners: {
            itemtap: {
                fn: function(list, index, target, record) {
                    list.fireEvent('selected', list, record);
                },
                buffer: 300
            }
        }
    }
});
